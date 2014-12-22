var App = function(){
  var self = this;

  //resize map container based on window size
  var height = $(window).height() - 200;
  var width = $(window).width();

  //EVENTS
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    console.log('scrollTop',scrollTop);


    //map
    if ( self.map ) {

      if ( scrollTop < 3700 ) {
        if ( !self.fullMap || self.fullMap === false ) {
          self.na = false;
          self.eu = false;
          self.af = false;
          self.as = false;
          self.oc = false;
          self.zoomToFullExtent();
        }
      }

      if ( scrollTop >=3700 && scrollTop < 5300 ) {
        if ( !self.na || self.na === false ) {
          self.na = true;
          self.eu = false;
          self.af = false;
          self.northAmerica();
        }
      }

      if ( scrollTop >=5300 && scrollTop < 7700 ) {
        if ( !self.eu || self.eu === false ) {
          self.eu = true;
          self.na = false;
          self.af = false;
          self.oc = false;
          self.as = false; 
          self.europe();
        }
      }

      if ( scrollTop >= 7700 && scrollTop < 8400 ) {
        if ( !self.af || self.af === false ) {
          self.af = true;
          self.na = false;
          self.eu = false;
          self.oc = false;
          self.as = false;
          self.africa();
        }
      }

      if ( scrollTop >= 8400 && scrollTop < 9600 ) {
        if ( !self.as || self.as === false ) {
          self.as = true;
          self.af = false;
          self.na = false;
          self.eu = false;
          self.oc = false;
          self.asia();
        }
      }

      if ( scrollTop >= 9600 ) {
        if ( !self.oc || self.oc === false ) {
          self.oc = true;
          self.as = false;
          self.af = false;
          self.na = false;
          self.eu = false;
          self.oceania();
        }
      }
    }

  });

  //feature 'constants'
  this.countryStats = {};
  this.totalDatasetCount = 0;

  //init map
  this.initMap();
  this.orgChart();
  this.monthlyChart();

};



App.prototype.zoomToFullExtent = function() {
  var startExtent = new esri.geometry.Extent(-162.119312499968, -26.181787552107465, 72.02131249996957, 68.75760045155728,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent);  
}



App.prototype.northAmerica = function() {
  console.log('set north america!');

  var startExtent = new esri.geometry.Extent(-152.00, 10.00, -35.00, 58.00,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent);

  //this.generateStats("north-america");
}



App.prototype.europe = function() {
  console.log('set europe!');

  var startExtent = new esri.geometry.Extent(-51.00, 27.00, 65.00, 66.00,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent); 
  //this.generateStats("europe");
}


App.prototype.africa = function() {
  console.log('set europe!');

  var startExtent = new esri.geometry.Extent(-48.00, -25.00, 69.00, 32.00,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent); 
  //this.generateStats("africa");
}



App.prototype.asia = function() {
  console.log('set asia!');

  var startExtent = new esri.geometry.Extent(41.00, -6.00, 160.00, 49.00,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent); 
  //this.generateStats("africa");
}

App.prototype.oceania = function() {
  console.log('set oceania!');

  var startExtent = new esri.geometry.Extent(91.00, -51.00, 210.00, 3.00,
      new esri.SpatialReference({wkid:4326}) );

  this.map.setExtent(startExtent); 
  //this.generateStats("africa");
}



App.prototype.generateStats = function(continent) {

  if ( !this.countryStats[continent] ) {
    var features = this.map.getLayer("circles").graphics;
    
    var visible = [];
    var datasets = 0;
    _.each(features, function(feature) {
      if (self.map.extent.contains(feature.geometry) === true) {
        datasets = datasets + feature.attributes.datasets;
        visible.push(feature);
      }
    });

    $('.'+continent+'#org-count').html("Total Orgs: "+ visible.length.toLocaleString());
    $('.'+continent+'#dataset-count').html("Datasets Shared: "+ datasets.toLocaleString());
    console.log('Total orgs: ', visible.length);
    console.log('Total Datasets: ', datasets);

    this.countryStats[continent] = {};
    this.countryStats[continent].visible = visible;
    this.countryStats[continent].datasets = datasets;
  } else {
    $('.'+continent+'#org-count').html("Total Orgs: "+ this.countryStats[continent].visible.length.toLocaleString());
    $('.'+continent+'#dataset-count').html("Datasets Shared: "+ this.countryStats[continent].datasets.toLocaleString());
  }

}




App.prototype.initMap = function() {
  //MAP! 
  var self = this;

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

    self.map = new Map("map-locations", {
      center: [-45.049, 32.485],
      zoom: 3,
      basemap: "dotted",
      smartNavigation: false
    });

    //things we want to do when map finishes loading
    self.map.on('load', function() {
      self.map.disableScrollWheelZoom();
      $('#loader-main').fadeOut('slow', function() {
        $('#scroll-help').addClass('bounceIn');
        setTimeout(function() {
          $('#scroll-help').removeClass('bounceIn');
          $('#scroll-help').addClass('pulse');
        },2000);
      });
    });

    var searchExtentLayer = new esri.layers.GraphicsLayer({id:"extentLayer"});
    self.map.addLayer( searchExtentLayer );

    var gl = new GraphicsLayer({ id: "circles" });
    self.map.addLayer(gl);

    self.map.on('click', function() {
      //$('#review-intro').addClass('fadeOut');
    });

    window.map = self.map;


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
      featureSelected( e.graphic, 'mouse-over' );
      showHoverWindow(e);
    });

    gl.on('click', function(e) {
      onGraphicClick(e);
    });

    gl.on('mouse-out', function(e) {
      removeSelectedFeature( e.graphic );
    });

    /*
    request("data/datasets-all.json").then(function(data){
      //console.log('data', data);
      var json = JSON.parse(data);
      console.log('json', json);

      var extentGeometries = [];
      var sym = esri.symbol.SimpleFillSymbol(
        esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        new esri.symbol.SimpleLineSymbol(
          esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255]), 0.4),
        new dojo.Color([93,173,221,0.0])
      );
      
      
      console.log('kson', json.length);

      _.each(json, function (item){
        if ( item.extent ) {
          if ( item.extent.coordinates ) {
            console.log('1');
            extent = new esri.geometry.Extent(
              item.extent.coordinates[0][0], 
              item.extent.coordinates[0][1], 
              item.extent.coordinates[1][0], 
              item.extent.coordinates[1][1],
              new esri.SpatialReference({ wkid:4326 })
            );    

            //console.log('extent', extent);
            var graphic = new esri.Graphic(extent, sym, {});
                
            
            searchExtentLayer.add(graphic);
          }
        }

      });

    });
    */

    //request("http://opendata.arcgis.com/explore.json").then(function(data){
    //request("http://opendatadev.arcgis.com/explore.json").then(function(data){
    request("data/explore-prod.json").then(function(data){
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

        //update total count 
        self.totalDatasetCount = self.totalDatasetCount + parseInt(feature.attributes.datasets_count);
        //$('#total-count').html(self.totalDatasetCount.toLocaleString());

        //update org count
        var orgs = sites.length;
        $('#org-count').html(orgs);
      });   

      
      var extentGeometries = [];
      var sym = esri.symbol.SimpleFillSymbol(
        esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        new esri.symbol.SimpleLineSymbol(
          esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,255]), 0.4),
        new dojo.Color([93,173,221,0.0])
      );
      
      
      _.each(sites, function (item){
        extent = new esri.geometry.Extent(
          item.default_extent.xmin, 
          item.default_extent.ymin, 
          item.default_extent.xmax, 
          item.default_extent.ymax, 
          new esri.SpatialReference({ wkid:102100 })
        );    

        var graphic = new esri.Graphic(extent, sym, {name: item.title, url: item.url});
            
        
        searchExtentLayer.add(graphic);
        
      });

    });
    
    function showHoverWindow(e) {
      var datasets = e.graphic.attributes.datasets;
      var title = e.graphic.attributes.title;
      var groups = e.graphic.attributes.groups;
      $('.org-title').html(title);
      $('.org-group-count').html('Open Data Groups: ' + groups);
      $('.org-dataset-count').html("Datasets: " + datasets);
    }

    function onGraphicClick(e) {
      //if ( e.graphic.attributes.url !== "" && e.graphic.attributes.url !== null ) {
      //  window.open(e.graphic.attributes.url);
      //}
    }

    function featureSelected(graphicJson) {
      var graphic = {};
      graphic.geometry = graphicJson.geometry;
      graphic.symbol = {};
      graphic.attributes = { id: "selectedFeature", title: graphicJson.attributes.title }
      this.selectedFeature = graphicJson.attributes.title;

      graphic.symbol = {
        "color":[255,255,255,1],"size":graphicJson.symbol.size - 2,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle",
        "outline":{"color":[255,255,255,255],"width":2,
        "type":"esriSLS","style":"esriSLSSolid"}
      };


      var g = new esri.Graphic( graphic );
      
      //add to map
      self.map.graphics.add( g );
    }

    function removeSelectedFeature(graphicJson) {
      var selected = this.selectedFeature;
      $.each(self.map.graphics.graphics, function(index,gra){
        if (gra) {
          if(gra.attributes && gra.attributes.id === "selectedFeature" ) {
            if (gra.attributes.title !== selected) {
              self.map.graphics.remove( gra );
            }
          }
        }
      });
    }

  });
}




App.prototype.orgChart = function() {
  var margin = {top: 20, right: 40, bottom: 30, left: 60},
      width = $(window).width() - margin.left - margin.right,
      height = ($(window).height() / 2) - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(5);

  var svg = d3.select("#org-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.tsv("data/org.tsv", type, function(error, data) {
    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

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
        .text("Count");

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); });

  });

  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }

}



App.prototype.monthlyChart = function() {

  //.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


  var margin = {top: 20, right: 80, bottom: 30, left: 90},
      width = $(window).width() - margin.left - margin.right,
      height = ($(window).height() / 2) - margin.top - margin.bottom;

  var parseDate = d3.time.format("%d-%b-%y").parse;

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });

  var svg = d3.select("#monthly-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.tsv("data/line-data.tsv", function(error, data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.close = +d.close;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

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
        .text("Shared Datasets");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
  });

}
