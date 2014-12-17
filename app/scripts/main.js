var App = function(){

  //resize map container based on window size
  var height = $(window).height() - 200;
  var width = $(window).width();
  
  //EVENTS
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();

    //dataset counts!
    if ( scrollTop > 3900 ) {
      var dc = scrollTop - 3900;
      if ( dc >= 1011 ) { dc = 1011 };
      $('#dc-dataset-count').html("Datasets Shared: "+ dc);
    }
    if ( scrollTop > 4900 ) {
      var charlotte = scrollTop - 4900;
      if ( charlotte >= 42 ) { charlotte = 42 };
      $('#charlotte-dataset-count').html("Datasets Shared: "+ charlotte);
    }
    if ( scrollTop > 5880 ) {
      var md = scrollTop - 5880;
      if ( md >= 356 ) { md = 356 };
      $('#md-dataset-count').html("Datasets Shared: "+ md);
    }

  });

  //init map
  this.initMap();
  this.monthlyChart();

};


App.prototype.initMap = function() {
  //MAP! 
  var map;
  require(["esri/map", "dojo/request", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol", 
    "esri/graphic", "esri/layers/GraphicsLayer", "esri/geometry/Point", "esri/SpatialReference", "esri/geometry/webMercatorUtils",
    "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/FeatureLayer", "dojo/domReady!"], function(Map, request, Circle, 
      SimpleFillSymbol, Graphic, GraphicsLayer, Point, SpatialReference, webMercatorUtils) {

    esriConfig.defaults.map.basemaps.dotted = {
      baseMapLayers: [
        { url: "http://studio.esri.com/arcgis/rest/services/World/WorldBasemapWhite/MapServer" }
      ],
      title: "dots"
    };

    map = new Map("map-locations", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "dotted",
      smartNavigation: false
    });
    map.on('load', function() {
      map.disableScrollWheelZoom();
      setTimeout(function() {
        //$('#review-intro').addClass('fadeOut');
      },3000);
    });
    var gl = new GraphicsLayer({ id: "circles" });
    map.addLayer(gl);

    map.on('click', function() {
      //$('#review-intro').addClass('fadeOut');
    });


    function add(f){

      var point = {"geometry":{"x":f.geometry.x,"y":f.geometry.y,
      "spatialReference":{wkid: 102100}}, "attributes": {
          "title": f.attributes.title, 
          "datasets": f.attributes.datasets_count,
          "url": f.attributes.url,
          "groups": f.attributes.groups_count
        }, 
        "symbol":{"color":[241,196,15,128],
      "size":Math.min( Math.round( f.attributes.datasets_count / 100 * 40 ), 50), "angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS",
      "style":"esriSMSCircle","outline":{"color":[230,126,34,200],"width":1,
      //"style":"esriSMSCircle","outline":{"color":[192,57,43,200],"width":1,
      "type":"esriSLS","style":"esriSLSSolid"}}};
      
      var gra = new Graphic(point);
      gl.add(gra);
    }

    gl.on('mouse-over', function(e) {
      //featureSelected( e.graphic, 'mouse-over' );
      showHoverWindow(e);
    });

    gl.on('click', function(e) {
      onGraphicClick(e);
    });

    gl.on('mouse-out', function(e) {
      //removeSelectedFeature( 'mouse-over' );
    });

    //request("http://opendata.arcgis.com/explore.json").then(function(data){
    //request("http://opendatadev.arcgis.com/explore.json").then(function(data){
    request("/explore.json").then(function(data){
      // do something with handled data
      var sites = JSON.parse(data).sites, feature;

      sites.forEach(function(site,i){

        var x = site.default_extent.xmin + (site.default_extent.xmax - site.default_extent.xmin)/2;
        var y = site.default_extent.ymin + (site.default_extent.ymax - site.default_extent.ymin)/2;

        var geom;
        if ( site.default_extent.spatialReference ) {
          if ( site.default_extent.spatialReference.wkid === 4326 ) {
            var xy = webMercatorUtils.lngLatToXY(x, y);
            geom = {
              x: xy[0],
              y: xy[1],
              type: 'point',
              spatialReference: {
                latestWkid: 3857,
                wkid: 102100
              }
            }
          } else {
            geom = {
              x: x,
              y: y,
              type: 'point',
              spatialReference: {
                latestWkid: 3857,
                wkid: 102100
              }
            }
          }
        } else {
          if ( site.default_extent.spatial_reference.wkid === 4326 ) {
            var xy = webMercatorUtils.lngLatToXY(x, y);
            geom = {
              x: xy[0],
              y: xy[1],
              type: 'point',
              spatialReference: {
                latestWkid: 3857,
                wkid: 102100
              }
            }
          } else {
            geom = {
              x: x,
              y: y,
              type: 'point',
              spatialReference: {
                latestWkid: 3857,
                wkid: 102100
              }
            }
          }
        }

        feature = {
          geometry: geom,
          attributes: {
            title: site.title,
            url: site.url,
            created_at: site.created_at,
            updated_at: site.updated_at,
            public: site.public,
            groups_count: site.groups_count,
            datasets_count: site.datasets_count
          }
        };

        add(feature);

      });   

      var extentGeometries = [];
      _.each(sites, function (item){
        extent = new esri.geometry.Extent(
          item.default_extent.xmin, 
          item.default_extent.ymin, 
          item.default_extent.xmax, 
          item.default_extent.ymax, 
          new esri.SpatialReference({ wkid:102100 })
        );    

        extentGeometries.push(extent);
        
      });

      //addProjectedExtentsToMap(extentGeometries);
      var projectedExtents = extentGeometries;
      
      var searchExtentLayer = new esri.layers.GraphicsLayer({id:"extentLayer"});
      map.addLayer( searchExtentLayer );
        
      var graphics = [],
      extent,
      graphic;
    
      var sym = esri.symbol.SimpleFillSymbol(
        esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        new esri.symbol.SimpleLineSymbol(
          esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255]), 0.4),
        new dojo.Color([93,173,221,0.0])
      );

      for(var i =0; i < sites.length;i++){
      
        if (sites[i].default_extent.spatial_reference.wkid === 102100) {
          graphic = new esri.Graphic(projectedExtents[i], sym, {name: sites[i].title, url: sites[i].url});
          
          graphics.push(graphic);
          //console.log('graphic', graphic);

          searchExtentLayer.add(graphic);
        } else {
          console.log('no');
        }
      }

    });
    
    function showHoverWindow(e) {
      var datasets = e.graphic.attributes.datasets;
      var title = e.graphic.attributes.title;
      var groups = e.graphic.attributes.groups;
      $('#title').html(title);
      $('#groups').html('Open Data Groups: ' + groups);
      $('#count').html("Datasets: " + datasets);
    }

    function onGraphicClick(e) {
      if ( e.graphic.attributes.url !== "" && e.graphic.attributes.url !== null ) {
        window.open(e.graphic.attributes.url);
      }
    }

    function featureSelected(graphicJson) {
      var graphic = {};
      graphic.geometry = graphicJson.geometry;
      graphic.symbol = {};
      graphic.attributes = { id: "selectedFeature" }


      graphic.symbol = {
        "color":[255,255,255,1],"size":graphicJson.symbol.size,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle",
        "outline":{"color":[255,255,255,255],"width":2,
        "type":"esriSLS","style":"esriSLSSolid"}
      };


      var g = new esri.Graphic( graphic );
      
      //add to map
      map.graphics.add( g );
    }

    function removeSelectedFeature() {
      $.each(map.graphics.graphics, function(index,gra){
        if (gra) {
          console.log('ra!', gra);
          if(gra.attributes && gra.attributes.id === "selectedFeature"){
            map.graphics.remove( gra );
          }
        }
      });
    }

  });
}






App.prototype.monthlyChart = function() {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = $(window).width() - margin.left - margin.right,
      height = ($(window).height() / 2) - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .rangeRound([height, 0]);

  var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));

  var svg = d3.select("#monthly-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("../data/data.csv", function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));

    data.forEach(function(d) {
      var y0 = 0;
      d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
      d.total = d.ages[d.ages.length - 1].y1;
    });

    data.sort(function(a, b) { return b.total - a.total; });

    x.domain(data.map(function(d) { return d.State; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Population");

    var state = svg.selectAll(".state")
        .data(data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + x(d.State) + ",0)"; });

    state.selectAll("rect")
        .data(function(d) { return d.ages; })
      .enter().append("rect")
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.y1); })
        .attr("height", function(d) { return y(d.y0) - y(d.y1); })
        .style("fill", function(d) { return color(d.name); });

    var legend = svg.selectAll(".legend")
        .data(color.domain().slice().reverse())
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });

  });
}
