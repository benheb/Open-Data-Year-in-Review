(function(){function t(t,n,e){e=(e||0)-1;for(var r=t?t.length:0;++e<r;)if(t[e]===n)return e;return-1}function n(n,e){var r=typeof e;if(n=n.l,"boolean"==r||null==e)return n[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var a="number"==r?e:b+e;return n=(n=n[r])&&n[a],"object"==r?n&&-1<t(n,e)?0:-1:n?0:-1}function e(t){var n=this.l,e=typeof t;if("boolean"==e||null==t)n[t]=!0;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?t:b+t,n=n[e]||(n[e]={});"object"==e?(n[r]||(n[r]=[])).push(t):n[r]=!0}}function r(t){return t.charCodeAt(0)}function a(t,n){for(var e=t.m,r=n.m,a=-1,o=e.length;++a<o;){var u=e[a],i=r[a];if(u!==i){if(u>i||"undefined"==typeof u)return 1;if(i>u||"undefined"==typeof i)return-1}}return t.n-n.n}function o(t){var n=-1,r=t.length,a=t[0],o=t[r/2|0],u=t[r-1];if(a&&"object"==typeof a&&o&&"object"==typeof o&&u&&"object"==typeof u)return!1;for(a=l(),a["false"]=a["null"]=a["true"]=a.undefined=!1,o=l(),o.k=t,o.l=a,o.push=e;++n<r;)o.push(t[n]);return o}function u(t){return"\\"+Z[t]}function i(){return d.pop()||[]}function l(){return m.pop()||{k:null,l:null,m:null,"false":!1,n:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,o:null}}function c(t){return"function"!=typeof t.toString&&"string"==typeof(t+"")}function f(t){t.length=0,d.length<w&&d.push(t)}function s(t){var n=t.l;n&&s(n),t.k=t.l=t.m=t.object=t.number=t.string=t.o=null,m.length<w&&m.push(t)}function p(t,n,e){n||(n=0),"undefined"==typeof e&&(e=t?t.length:0);var r=-1;e=e-n||0;for(var a=Array(0>e?0:e);++r<e;)a[r]=t[n+r];return a}function h(e){function d(t){return t&&"object"==typeof t&&!qe(t)&&xe.call(t,"__wrapped__")?t:new m(t)}function m(t,n){this.__chain__=!!n,this.__wrapped__=t}function w(t){function n(){if(r){var t=p(r);Se.apply(t,arguments)}if(this instanceof n){var o=tn(e.prototype),t=e.apply(o,t||arguments);return jn(t)?t:o}return e.apply(a,t||arguments)}var e=t[0],r=t[2],a=t[4];return We(n,t),n}function Z(t,n,e,r,a){if(e){var o=e(t);if("undefined"!=typeof o)return o}if(!jn(t))return t;var u=de.call(t);if(!J[u]||!Pe.nodeClass&&c(t))return t;var l=Be[u];switch(u){case M:case P:return new l(+t);case z:case Y:return new l(t);case K:return o=l(t.source,O.exec(t)),o.lastIndex=t.lastIndex,o}if(u=qe(t),n){var s=!r;r||(r=i()),a||(a=i());for(var h=r.length;h--;)if(r[h]==t)return a[h];o=u?l(t.length):{}}else o=u?p(t):Qe({},t);return u&&(xe.call(t,"index")&&(o.index=t.index),xe.call(t,"input")&&(o.input=t.input)),n?(r.push(t),a.push(o),(u?Ze:er)(t,function(t,u){o[u]=Z(t,n,e,r,a)}),s&&(f(r),f(a)),o):o}function tn(t){return jn(t)?Le(t):{}}function nn(t,n,e){if("function"!=typeof t)return Vn;if("undefined"==typeof n||!("prototype"in t))return t;var r=t.__bindData__;if("undefined"==typeof r&&(Pe.funcNames&&(r=!t.name),r=r||!Pe.funcDecomp,!r)){var a=_e.call(t);Pe.funcNames||(r=!L.test(a)),r||(r=D.test(a),We(t,r))}if(!1===r||!0!==r&&1&r[1])return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,a){return t.call(n,e,r,a)};case 4:return function(e,r,a,o){return t.call(n,e,r,a,o)}}return Jn(t,n)}function en(t){function n(){var t=l?u:this;if(a){var g=p(a);Se.apply(g,arguments)}return(o||f)&&(g||(g=p(arguments)),o&&Se.apply(g,o),f&&g.length<i)?(r|=16,en([e,s?r:-4&r,g,null,u,i])):(g||(g=arguments),c&&(e=t[h]),this instanceof n?(t=tn(e.prototype),g=e.apply(t,g),jn(g)?g:t):e.apply(t,g))}var e=t[0],r=t[1],a=t[2],o=t[3],u=t[4],i=t[5],l=1&r,c=2&r,f=4&r,s=8&r,h=e;return We(n,t),n}function rn(e,r){var a=-1,u=dn(),i=e?e.length:0,l=i>=_&&u===t,c=[];if(l){var f=o(r);f?(u=n,r=f):l=!1}for(;++a<i;)f=e[a],0>u(r,f)&&c.push(f);return l&&s(r),c}function on(t,n,e,r){r=(r||0)-1;for(var a=t?t.length:0,o=[];++r<a;){var u=t[r];if(u&&"object"==typeof u&&"number"==typeof u.length&&(qe(u)||bn(u))){n||(u=on(u,n,e));var i=-1,l=u.length,c=o.length;for(o.length+=l;++i<l;)o[c++]=u[i]}else e||o.push(u)}return o}function un(t,n,e,r,a,o){if(e){var u=e(t,n);if("undefined"!=typeof u)return!!u}if(t===n)return 0!==t||1/t==1/n;if(t===t&&!(t&&H[typeof t]||n&&H[typeof n]))return!1;if(null==t||null==n)return t===n;var l=de.call(t),s=de.call(n);if(l==N&&(l=G),s==N&&(s=G),l!=s)return!1;switch(l){case M:case P:return+t==+n;case z:return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;case K:case Y:return t==le(n)}if(s=l==B,!s){var p=xe.call(t,"__wrapped__"),h=xe.call(n,"__wrapped__");if(p||h)return un(p?t.__wrapped__:t,h?n.__wrapped__:n,e,r,a,o);if(l!=G||!Pe.nodeClass&&(c(t)||c(n)))return!1;if(l=!Pe.argsObject&&bn(t)?ue:t.constructor,p=!Pe.argsObject&&bn(n)?ue:n.constructor,l!=p&&!(Sn(l)&&l instanceof l&&Sn(p)&&p instanceof p)&&"constructor"in t&&"constructor"in n)return!1}for(l=!a,a||(a=i()),o||(o=i()),p=a.length;p--;)if(a[p]==t)return o[p]==n;var g=0,u=!0;if(a.push(t),o.push(n),s){if(p=t.length,g=n.length,(u=g==p)||r)for(;g--;)if(s=p,h=n[g],r)for(;s--&&!(u=un(t[s],h,e,r,a,o)););else if(!(u=un(t[g],h,e,r,a,o)))break}else nr(n,function(n,i,l){return xe.call(l,i)?(g++,u=xe.call(t,i)&&un(t[i],n,e,r,a,o)):void 0}),u&&!r&&nr(t,function(t,n,e){return xe.call(e,n)?u=-1<--g:void 0});return a.pop(),o.pop(),l&&(f(a),f(o)),u}function ln(t,n,e,r,a){(qe(n)?Rn:er)(n,function(n,o){var u,i,l=n,c=t[o];if(n&&((i=qe(n))||rr(n))){for(l=r.length;l--;)if(u=r[l]==n){c=a[l];break}if(!u){var f;e&&(l=e(c,n),f="undefined"!=typeof l)&&(c=l),f||(c=i?qe(c)?c:[]:rr(c)?c:{}),r.push(n),a.push(c),f||ln(c,n,e,r,a)}}else e&&(l=e(c,n),"undefined"==typeof l&&(l=n)),"undefined"!=typeof l&&(c=l);t[o]=c})}function cn(t,n){return t+be(Ne()*(n-t+1))}function fn(e,r,a){var u=-1,l=dn(),c=e?e.length:0,p=[],h=!r&&c>=_&&l===t,g=a||h?i():p;for(h&&(g=o(g),l=n);++u<c;){var d=e[u],m=a?a(d,u,e):d;(r?!u||g[g.length-1]!==m:0>l(g,m))&&((a||h)&&g.push(m),p.push(d))}return h?(f(g.k),s(g)):a&&f(g),p}function sn(t){return function(n,e,r){var a={};if(e=d.createCallback(e,r,3),qe(n)){r=-1;for(var o=n.length;++r<o;){var u=n[r];t(a,u,e(u,r,n),n)}}else Ze(n,function(n,r,o){t(a,n,e(n,r,o),o)});return a}}function pn(t,n,e,r,a,o){var u=1&n,i=4&n,l=16&n,c=32&n;if(!(2&n||Sn(t)))throw new ce;l&&!e.length&&(n&=-17,l=e=!1),c&&!r.length&&(n&=-33,c=r=!1);var f=t&&t.__bindData__;return f&&!0!==f?(f=p(f),f[2]&&(f[2]=p(f[2])),f[3]&&(f[3]=p(f[3])),!u||1&f[1]||(f[4]=a),!u&&1&f[1]&&(n|=8),!i||4&f[1]||(f[5]=o),l&&Se.apply(f[2]||(f[2]=[]),e),c&&Ee.apply(f[3]||(f[3]=[]),r),f[1]|=n,pn.apply(null,f)):(1==n||17===n?w:en)([t,n,e,r,a,o])}function hn(){X.h=F,X.b=X.c=X.g=X.i="",X.e="t",X.j=!0;for(var t,n=0;t=arguments[n];n++)for(var e in t)X[e]=t[e];n=X.a,X.d=/^[^,]+/.exec(n)[0],t=re,n="return function("+n+"){",e=X;var r="var n,t="+e.d+",E="+e.e+";if(!t)return E;"+e.i+";";e.b?(r+="var u=t.length;n=-1;if("+e.b+"){",Pe.unindexedChars&&(r+="if(s(t)){t=t.split('')}"),r+="while(++n<u){"+e.g+";}}else{"):Pe.nonEnumArgs&&(r+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+e.g+";}}else{"),Pe.enumPrototypes&&(r+="var G=typeof t=='function';"),Pe.enumErrorProps&&(r+="var F=t===k||t instanceof Error;");var a=[];if(Pe.enumPrototypes&&a.push('!(G&&n=="prototype")'),Pe.enumErrorProps&&a.push('!(F&&(n=="message"||n=="name"))'),e.j&&e.f)r+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",a.length&&(r+="if("+a.join("&&")+"){"),r+=e.g+";",a.length&&(r+="}"),r+="}";else if(r+="for(n in t){",e.j&&a.push("m.call(t, n)"),a.length&&(r+="if("+a.join("&&")+"){"),r+=e.g+";",a.length&&(r+="}"),r+="}",Pe.nonEnumShadows){for(r+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)r+="n='"+e.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",e.j||(r+="||(!x[n]&&t[n]!==A[n])"),r+="){"+e.g+"}";r+="}"}return(e.b||Pe.nonEnumArgs)&&(r+="}"),r+=e.c+";return E",t("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",n+r+"}")(nn,W,se,xe,v,bn,qe,Cn,X.f,pe,H,Me,Y,he,de)}function gn(t){return Ue[t]}function dn(){var n=(n=d.indexOf)===Wn?t:n;return n}function mn(t){return"function"==typeof t&&me.test(t)}function yn(t){var n,e;return!t||de.call(t)!=G||(n=t.constructor,Sn(n)&&!(n instanceof n))||!Pe.argsClass&&bn(t)||!Pe.nodeClass&&c(t)?!1:Pe.ownLast?(nr(t,function(t,n,r){return e=xe.call(r,n),!1}),!1!==e):(nr(t,function(t,n){e=n}),"undefined"==typeof e||xe.call(t,e))}function vn(t){return Ve[t]}function bn(t){return t&&"object"==typeof t&&"number"==typeof t.length&&de.call(t)==N||!1}function _n(t,n,e){var r=Ge(t),a=r.length;for(n=nn(n,e,3);a--&&(e=r[a],!1!==n(t[e],e,t)););return t}function wn(t){var n=[];return nr(t,function(t,e){Sn(t)&&n.push(e)}),n.sort()}function xn(t){for(var n=-1,e=Ge(t),r=e.length,a={};++n<r;){var o=e[n];a[t[o]]=o}return a}function Sn(t){return"function"==typeof t}function jn(t){return!(!t||!H[typeof t])}function kn(t){return"number"==typeof t||t&&"object"==typeof t&&de.call(t)==z||!1}function Cn(t){return"string"==typeof t||t&&"object"==typeof t&&de.call(t)==Y||!1}function En(t){for(var n=-1,e=Ge(t),r=e.length,a=te(r);++n<r;)a[n]=t[e[n]];return a}function On(t,n,e){var r=-1,a=dn(),o=t?t.length:0,u=!1;return e=(0>e?Te(0,o+e):e)||0,qe(t)?u=-1<a(t,n,e):"number"==typeof o?u=-1<(Cn(t)?t.indexOf(n,e):a(t,n,e)):Ze(t,function(t){return++r<e?void 0:!(u=t===n)}),u}function Ln(t,n,e){var r=!0;if(n=d.createCallback(n,e,3),qe(t)){e=-1;for(var a=t.length;++e<a&&(r=!!n(t[e],e,t)););}else Ze(t,function(t,e,a){return r=!!n(t,e,a)});return r}function An(t,n,e){var r=[];if(n=d.createCallback(n,e,3),qe(t)){e=-1;for(var a=t.length;++e<a;){var o=t[e];n(o,e,t)&&r.push(o)}}else Ze(t,function(t,e,a){n(t,e,a)&&r.push(t)});return r}function $n(t,n,e){if(n=d.createCallback(n,e,3),!qe(t)){var r;return Ze(t,function(t,e,a){return n(t,e,a)?(r=t,!1):void 0}),r}e=-1;for(var a=t.length;++e<a;){var o=t[e];if(n(o,e,t))return o}}function Rn(t,n,e){if(n&&"undefined"==typeof e&&qe(t)){e=-1;for(var r=t.length;++e<r&&!1!==n(t[e],e,t););}else Ze(t,n,e);return t}function Dn(t,n,e){var r=t,a=t?t.length:0;if(n=n&&"undefined"==typeof e?n:nn(n,e,3),qe(t))for(;a--&&!1!==n(t[a],a,t););else{if("number"!=typeof a)var o=Ge(t),a=o.length;else Pe.unindexedChars&&Cn(t)&&(r=t.split(""));Ze(t,function(t,e,u){return e=o?o[--a]:--a,n(r[e],e,u)})}return t}function Tn(t,n,e){var r=-1,a=t?t.length:0,o=te("number"==typeof a?a:0);if(n=d.createCallback(n,e,3),qe(t))for(;++r<a;)o[r]=n(t[r],r,t);else Ze(t,function(t,e,a){o[++r]=n(t,e,a)});return o}function In(t,n,e){var a=-1/0,o=a;if("function"!=typeof n&&e&&e[n]===t&&(n=null),null==n&&qe(t)){e=-1;for(var u=t.length;++e<u;){var i=t[e];i>o&&(o=i)}}else n=null==n&&Cn(t)?r:d.createCallback(n,e,3),Ze(t,function(t,e,r){e=n(t,e,r),e>a&&(a=e,o=t)});return o}function Fn(t,n,e,r){var a=3>arguments.length;if(n=d.createCallback(n,r,4),qe(t)){var o=-1,u=t.length;for(a&&(e=t[++o]);++o<u;)e=n(e,t[o],o,t)}else Ze(t,function(t,r,o){e=a?(a=!1,t):n(e,t,r,o)});return e}function Nn(t,n,e,r){var a=3>arguments.length;return n=d.createCallback(n,r,4),Dn(t,function(t,r,o){e=a?(a=!1,t):n(e,t,r,o)}),e}function Bn(t){var n=-1,e=t?t.length:0,r=te("number"==typeof e?e:0);return Rn(t,function(t){var e=cn(0,++n);r[n]=r[e],r[e]=t}),r}function Mn(t,n,e){var r;if(n=d.createCallback(n,e,3),qe(t)){e=-1;for(var a=t.length;++e<a&&!(r=n(t[e],e,t)););}else Ze(t,function(t,e,a){return!(r=n(t,e,a))});return!!r}function Pn(t,n,e){var r=0,a=t?t.length:0;if("number"!=typeof n&&null!=n){var o=-1;for(n=d.createCallback(n,e,3);++o<a&&n(t[o],o,t);)r++}else if(r=n,null==r||e)return t?t[0]:g;return p(t,0,Ie(Te(0,r),a))}function Wn(n,e,r){if("number"==typeof r){var a=n?n.length:0;r=0>r?Te(0,a+r):r||0}else if(r)return r=zn(n,e),n[r]===e?r:-1;return t(n,e,r)}function qn(t,n,e){if("number"!=typeof n&&null!=n){var r=0,a=-1,o=t?t.length:0;for(n=d.createCallback(n,e,3);++a<o&&n(t[a],a,t);)r++}else r=null==n||e?1:Te(0,n);return p(t,r)}function zn(t,n,e,r){var a=0,o=t?t.length:a;for(e=e?d.createCallback(e,r,1):Vn,n=e(n);o>a;)r=a+o>>>1,e(t[r])<n?a=r+1:o=r;return a}function Gn(t,n,e,r){return"boolean"!=typeof n&&null!=n&&(r=e,e="function"!=typeof n&&r&&r[n]===t?null:n,n=!1),null!=e&&(e=d.createCallback(e,r,3)),fn(t,n,e)}function Kn(){for(var t=1<arguments.length?arguments:arguments[0],n=-1,e=t?In(ir(t,"length")):0,r=te(0>e?0:e);++n<e;)r[n]=ir(t,n);return r}function Yn(t,n){var e=-1,r=t?t.length:0,a={};for(n||!r||qe(t[0])||(n=[]);++e<r;){var o=t[e];n?a[o]=n[e]:o&&(a[o[0]]=o[1])}return a}function Jn(t,n){return 2<arguments.length?pn(t,17,p(arguments,2),null,n):pn(t,1,null,null,n)}function Un(t,n,e){var r,a,o,u,i,l,c,f=0,s=!1,p=!0;if(!Sn(t))throw new ce;if(n=Te(0,n)||0,!0===e)var h=!0,p=!1;else jn(e)&&(h=e.leading,s="maxWait"in e&&(Te(n,e.maxWait)||0),p="trailing"in e?e.trailing:p);var d=function(){var e=n-(lr()-u);e>0?l=ke(d,e):(a&&ve(a),e=c,a=l=c=g,e&&(f=lr(),o=t.apply(i,r),l||a||(r=i=null)))},m=function(){l&&ve(l),a=l=c=g,(p||s!==n)&&(f=lr(),o=t.apply(i,r),l||a||(r=i=null))};return function(){if(r=arguments,u=lr(),i=this,c=p&&(l||!h),!1===s)var e=h&&!l;else{a||h||(f=u);var g=s-(u-f),y=0>=g;y?(a&&(a=ve(a)),f=u,o=t.apply(i,r)):a||(a=ke(m,g))}return y&&l?l=ve(l):l||n===s||(l=ke(d,n)),e&&(y=!0,o=t.apply(i,r)),!y||l||a||(r=i=null),o}}function Vn(t){return t}function Xn(t,n,e){var r=!0,a=n&&wn(n);n&&(e||a.length)||(null==e&&(e=n),o=m,n=t,t=d,a=wn(n)),!1===e?r=!1:jn(e)&&"chain"in e&&(r=e.chain);var o=t,u=Sn(o);Rn(a,function(e){var a=t[e]=n[e];u&&(o.prototype[e]=function(){var n=this.__chain__,e=this.__wrapped__,u=[e];if(Se.apply(u,arguments),u=a.apply(t,u),r||n){if(e===u&&jn(u))return this;u=new o(u),u.__chain__=n}return u})})}function Hn(){}function Zn(t){return function(n){return n[t]}}function Qn(){return this.__wrapped__}e=e?an.defaults(Q.Object(),e,an.pick(Q,I)):Q;var te=e.Array,ne=e.Boolean,ee=e.Date,re=e.Function,ae=e.Math,oe=e.Number,ue=e.Object,ie=e.RegExp,le=e.String,ce=e.TypeError,fe=[],se=e.Error.prototype,pe=ue.prototype,he=le.prototype,ge=e._,de=pe.toString,me=ie("^"+le(de).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ye=ae.ceil,ve=e.clearTimeout,be=ae.floor,_e=re.prototype.toString,we=mn(we=ue.getPrototypeOf)&&we,xe=pe.hasOwnProperty,Se=fe.push,je=pe.propertyIsEnumerable,ke=e.setTimeout,Ce=fe.splice,Ee=fe.unshift,Oe=function(){try{var t={},n=mn(n=ue.defineProperty)&&n,e=n(t,t,t)&&n}catch(r){}return e}(),Le=mn(Le=ue.create)&&Le,Ae=mn(Ae=te.isArray)&&Ae,$e=e.isFinite,Re=e.isNaN,De=mn(De=ue.keys)&&De,Te=ae.max,Ie=ae.min,Fe=e.parseInt,Ne=ae.random,Be={};Be[B]=te,Be[M]=ne,Be[P]=ee,Be[q]=re,Be[G]=ue,Be[z]=oe,Be[K]=ie,Be[Y]=le;var Me={};Me[B]=Me[P]=Me[z]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Me[M]=Me[Y]={constructor:!0,toString:!0,valueOf:!0},Me[W]=Me[q]=Me[K]={constructor:!0,toString:!0},Me[G]={constructor:!0},function(){for(var t=F.length;t--;){var n,e=F[t];for(n in Me)xe.call(Me,n)&&!xe.call(Me[n],e)&&(Me[n][e]=!1)}}(),m.prototype=d.prototype;var Pe=d.support={};!function(){var t=function(){this.x=1},n={0:1,length:1},r=[];t.prototype={valueOf:1,y:1};for(var a in new t)r.push(a);for(a in arguments);Pe.argsClass=de.call(arguments)==N,Pe.argsObject=arguments.constructor==ue&&!(arguments instanceof te),Pe.enumErrorProps=je.call(se,"message")||je.call(se,"name"),Pe.enumPrototypes=je.call(t,"prototype"),Pe.funcDecomp=!mn(e.WinRTError)&&D.test(h),Pe.funcNames="string"==typeof re.name,Pe.nonEnumArgs=0!=a,Pe.nonEnumShadows=!/valueOf/.test(r),Pe.ownLast="x"!=r[0],Pe.spliceObjects=(fe.splice.call(n,0,1),!n[0]),Pe.unindexedChars="xx"!="x"[0]+ue("x")[0];try{Pe.nodeClass=!(de.call(document)==G&&!({toString:0}+""))}catch(o){Pe.nodeClass=!0}}(1),d.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:A,variable:"",imports:{_:d}},Le||(tn=function(){function t(){}return function(n){if(jn(n)){t.prototype=n;var r=new t;t.prototype=null}return r||e.Object()}}());var We=Oe?function(t,n){V.value=n,Oe(t,"__bindData__",V)}:Hn;Pe.argsClass||(bn=function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&xe.call(t,"callee")&&!je.call(t,"callee")||!1});var qe=Ae||function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&de.call(t)==B||!1},ze=hn({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),Ge=De?function(t){return jn(t)?Pe.enumPrototypes&&"function"==typeof t||Pe.nonEnumArgs&&t.length&&bn(t)?ze(t):De(t):[]}:ze,Ke={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:Ge,g:"if(e(t[n],n,g)===false)return E"},Ye={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:Ge,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},Je={i:"if(!B[typeof t])return E;"+Ke.i,b:!1},Ue={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ve=xn(Ue),Xe=ie("("+Ge(Ve).join("|")+")","g"),He=ie("["+Ge(Ue).join("")+"]","g"),Ze=hn(Ke),Qe=hn(Ye,{i:Ye.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),tr=hn(Ye),nr=hn(Ke,Je,{j:!1}),er=hn(Ke,Je);Sn(/x/)&&(Sn=function(t){return"function"==typeof t&&de.call(t)==q});var rr=we?function(t){if(!t||de.call(t)!=G||!Pe.argsClass&&bn(t))return!1;var n=t.valueOf,e=mn(n)&&(e=we(n))&&we(e);return e?t==e||we(t)==e:yn(t)}:yn,ar=sn(function(t,n,e){xe.call(t,e)?t[e]++:t[e]=1}),or=sn(function(t,n,e){(xe.call(t,e)?t[e]:t[e]=[]).push(n)}),ur=sn(function(t,n,e){t[e]=n}),ir=Tn,lr=mn(lr=ee.now)&&lr||function(){return(new ee).getTime()},cr=8==Fe(x+"08")?Fe:function(t,n){return Fe(Cn(t)?t.replace($,""):t,n||0)};return d.after=function(t,n){if(!Sn(n))throw new ce;return function(){return 1>--t?n.apply(this,arguments):void 0}},d.assign=Qe,d.at=function(t){var n=arguments,e=-1,r=on(n,!0,!1,1),n=n[2]&&n[2][n[1]]===t?1:r.length,a=te(n);for(Pe.unindexedChars&&Cn(t)&&(t=t.split(""));++e<n;)a[e]=t[r[e]];return a},d.bind=Jn,d.bindAll=function(t){for(var n=1<arguments.length?on(arguments,!0,!1,1):wn(t),e=-1,r=n.length;++e<r;){var a=n[e];t[a]=pn(t[a],1,null,null,t)}return t},d.bindKey=function(t,n){return 2<arguments.length?pn(n,19,p(arguments,2),null,t):pn(n,3,null,null,t)},d.chain=function(t){return t=new m(t),t.__chain__=!0,t},d.compact=function(t){for(var n=-1,e=t?t.length:0,r=[];++n<e;){var a=t[n];a&&r.push(a)}return r},d.compose=function(){for(var t=arguments,n=t.length;n--;)if(!Sn(t[n]))throw new ce;return function(){for(var n=arguments,e=t.length;e--;)n=[t[e].apply(this,n)];return n[0]}},d.constant=function(t){return function(){return t}},d.countBy=ar,d.create=function(t,n){var e=tn(t);return n?Qe(e,n):e},d.createCallback=function(t,n,e){var r=typeof t;if(null==t||"function"==r)return nn(t,n,e);if("object"!=r)return Zn(t);var a=Ge(t),o=a[0],u=t[o];return 1!=a.length||u!==u||jn(u)?function(n){for(var e=a.length,r=!1;e--&&(r=un(n[a[e]],t[a[e]],null,!0)););return r}:function(t){return t=t[o],u===t&&(0!==u||1/u==1/t)}},d.curry=function(t,n){return n="number"==typeof n?n:+n||t.length,pn(t,4,null,null,null,n)},d.debounce=Un,d.defaults=tr,d.defer=function(t){if(!Sn(t))throw new ce;var n=p(arguments,1);return ke(function(){t.apply(g,n)},1)},d.delay=function(t,n){if(!Sn(t))throw new ce;var e=p(arguments,2);return ke(function(){t.apply(g,e)},n)},d.difference=function(t){return rn(t,on(arguments,!0,!0,1))},d.filter=An,d.flatten=function(t,n,e,r){return"boolean"!=typeof n&&null!=n&&(r=e,e="function"!=typeof n&&r&&r[n]===t?null:n,n=!1),null!=e&&(t=Tn(t,e,r)),on(t,n)},d.forEach=Rn,d.forEachRight=Dn,d.forIn=nr,d.forInRight=function(t,n,e){var r=[];nr(t,function(t,n){r.push(n,t)});var a=r.length;for(n=nn(n,e,3);a--&&!1!==n(r[a--],r[a],t););return t},d.forOwn=er,d.forOwnRight=_n,d.functions=wn,d.groupBy=or,d.indexBy=ur,d.initial=function(t,n,e){var r=0,a=t?t.length:0;if("number"!=typeof n&&null!=n){var o=a;for(n=d.createCallback(n,e,3);o--&&n(t[o],o,t);)r++}else r=null==n||e?1:n||r;return p(t,0,Ie(Te(0,a-r),a))},d.intersection=function(){for(var e=[],r=-1,a=arguments.length,u=i(),l=dn(),c=l===t,p=i();++r<a;){var h=arguments[r];(qe(h)||bn(h))&&(e.push(h),u.push(c&&h.length>=_&&o(r?e[r]:p)))}var c=e[0],g=-1,d=c?c.length:0,m=[];t:for(;++g<d;){var y=u[0],h=c[g];if(0>(y?n(y,h):l(p,h))){for(r=a,(y||p).push(h);--r;)if(y=u[r],0>(y?n(y,h):l(e[r],h)))continue t;m.push(h)}}for(;a--;)(y=u[a])&&s(y);return f(u),f(p),m},d.invert=xn,d.invoke=function(t,n){var e=p(arguments,2),r=-1,a="function"==typeof n,o=t?t.length:0,u=te("number"==typeof o?o:0);return Rn(t,function(t){u[++r]=(a?n:t[n]).apply(t,e)}),u},d.keys=Ge,d.map=Tn,d.mapValues=function(t,n,e){var r={};return n=d.createCallback(n,e,3),er(t,function(t,e,a){r[e]=n(t,e,a)}),r},d.max=In,d.memoize=function(t,n){if(!Sn(t))throw new ce;var e=function(){var r=e.cache,a=n?n.apply(this,arguments):b+arguments[0];return xe.call(r,a)?r[a]:r[a]=t.apply(this,arguments)};return e.cache={},e},d.merge=function(t){var n=arguments,e=2;if(!jn(t))return t;if("number"!=typeof n[2]&&(e=n.length),e>3&&"function"==typeof n[e-2])var r=nn(n[--e-1],n[e--],2);else e>2&&"function"==typeof n[e-1]&&(r=n[--e]);for(var n=p(arguments,1,e),a=-1,o=i(),u=i();++a<e;)ln(t,n[a],r,o,u);return f(o),f(u),t},d.min=function(t,n,e){var a=1/0,o=a;if("function"!=typeof n&&e&&e[n]===t&&(n=null),null==n&&qe(t)){e=-1;for(var u=t.length;++e<u;){var i=t[e];o>i&&(o=i)}}else n=null==n&&Cn(t)?r:d.createCallback(n,e,3),Ze(t,function(t,e,r){e=n(t,e,r),a>e&&(a=e,o=t)});return o},d.omit=function(t,n,e){var r={};if("function"!=typeof n){var a=[];nr(t,function(t,n){a.push(n)});for(var a=rn(a,on(arguments,!0,!1,1)),o=-1,u=a.length;++o<u;){var i=a[o];r[i]=t[i]}}else n=d.createCallback(n,e,3),nr(t,function(t,e,a){n(t,e,a)||(r[e]=t)});return r},d.once=function(t){var n,e;if(!Sn(t))throw new ce;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},d.pairs=function(t){for(var n=-1,e=Ge(t),r=e.length,a=te(r);++n<r;){var o=e[n];a[n]=[o,t[o]]}return a},d.partial=function(t){return pn(t,16,p(arguments,1))},d.partialRight=function(t){return pn(t,32,null,p(arguments,1))},d.pick=function(t,n,e){var r={};if("function"!=typeof n)for(var a=-1,o=on(arguments,!0,!1,1),u=jn(t)?o.length:0;++a<u;){var i=o[a];i in t&&(r[i]=t[i])}else n=d.createCallback(n,e,3),nr(t,function(t,e,a){n(t,e,a)&&(r[e]=t)});return r},d.pluck=ir,d.property=Zn,d.pull=function(t){for(var n=arguments,e=0,r=n.length,a=t?t.length:0;++e<r;)for(var o=-1,u=n[e];++o<a;)t[o]===u&&(Ce.call(t,o--,1),a--);return t},d.range=function(t,n,e){t=+t||0,e="number"==typeof e?e:+e||1,null==n&&(n=t,t=0);var r=-1;n=Te(0,ye((n-t)/(e||1)));for(var a=te(n);++r<n;)a[r]=t,t+=e;return a},d.reject=function(t,n,e){return n=d.createCallback(n,e,3),An(t,function(t,e,r){return!n(t,e,r)})},d.remove=function(t,n,e){var r=-1,a=t?t.length:0,o=[];for(n=d.createCallback(n,e,3);++r<a;)e=t[r],n(e,r,t)&&(o.push(e),Ce.call(t,r--,1),a--);return o},d.rest=qn,d.shuffle=Bn,d.sortBy=function(t,n,e){var r=-1,o=qe(n),u=t?t.length:0,c=te("number"==typeof u?u:0);for(o||(n=d.createCallback(n,e,3)),Rn(t,function(t,e,a){var u=c[++r]=l();o?u.m=Tn(n,function(n){return t[n]}):(u.m=i())[0]=n(t,e,a),u.n=r,u.o=t}),u=c.length,c.sort(a);u--;)t=c[u],c[u]=t.o,o||f(t.m),s(t);return c},d.tap=function(t,n){return n(t),t},d.throttle=function(t,n,e){var r=!0,a=!0;if(!Sn(t))throw new ce;return!1===e?r=!1:jn(e)&&(r="leading"in e?e.leading:r,a="trailing"in e?e.trailing:a),U.leading=r,U.maxWait=n,U.trailing=a,Un(t,n,U)},d.times=function(t,n,e){t=-1<(t=+t)?t:0;var r=-1,a=te(t);for(n=nn(n,e,1);++r<t;)a[r]=n(r);return a},d.toArray=function(t){return t&&"number"==typeof t.length?Pe.unindexedChars&&Cn(t)?t.split(""):p(t):En(t)},d.transform=function(t,n,e,r){var a=qe(t);if(null==e)if(a)e=[];else{var o=t&&t.constructor;e=tn(o&&o.prototype)}return n&&(n=d.createCallback(n,r,4),(a?Ze:er)(t,function(t,r,a){return n(e,t,r,a)})),e},d.union=function(){return fn(on(arguments,!0,!0))},d.uniq=Gn,d.values=En,d.where=An,d.without=function(t){return rn(t,p(arguments,1))},d.wrap=function(t,n){return pn(n,16,[t])},d.xor=function(){for(var t=-1,n=arguments.length;++t<n;){var e=arguments[t];if(qe(e)||bn(e))var r=r?fn(rn(r,e).concat(rn(e,r))):e}return r||[]},d.zip=Kn,d.zipObject=Yn,d.collect=Tn,d.drop=qn,d.each=Rn,d.eachRight=Dn,d.extend=Qe,d.methods=wn,d.object=Yn,d.select=An,d.tail=qn,d.unique=Gn,d.unzip=Kn,Xn(d),d.clone=function(t,n,e,r){return"boolean"!=typeof n&&null!=n&&(r=e,e=n,n=!1),Z(t,n,"function"==typeof e&&nn(e,r,1))},d.cloneDeep=function(t,n,e){return Z(t,!0,"function"==typeof n&&nn(n,e,1))},d.contains=On,d.escape=function(t){return null==t?"":le(t).replace(He,gn)},d.every=Ln,d.find=$n,d.findIndex=function(t,n,e){var r=-1,a=t?t.length:0;for(n=d.createCallback(n,e,3);++r<a;)if(n(t[r],r,t))return r;return-1},d.findKey=function(t,n,e){var r;return n=d.createCallback(n,e,3),er(t,function(t,e,a){return n(t,e,a)?(r=e,!1):void 0}),r},d.findLast=function(t,n,e){var r;return n=d.createCallback(n,e,3),Dn(t,function(t,e,a){return n(t,e,a)?(r=t,!1):void 0}),r},d.findLastIndex=function(t,n,e){var r=t?t.length:0;for(n=d.createCallback(n,e,3);r--;)if(n(t[r],r,t))return r;return-1},d.findLastKey=function(t,n,e){var r;return n=d.createCallback(n,e,3),_n(t,function(t,e,a){return n(t,e,a)?(r=e,!1):void 0}),r},d.has=function(t,n){return t?xe.call(t,n):!1},d.identity=Vn,d.indexOf=Wn,d.isArguments=bn,d.isArray=qe,d.isBoolean=function(t){return!0===t||!1===t||t&&"object"==typeof t&&de.call(t)==M||!1},d.isDate=function(t){return t&&"object"==typeof t&&de.call(t)==P||!1},d.isElement=function(t){return t&&1===t.nodeType||!1},d.isEmpty=function(t){var n=!0;if(!t)return n;var e=de.call(t),r=t.length;return e==B||e==Y||(Pe.argsClass?e==N:bn(t))||e==G&&"number"==typeof r&&Sn(t.splice)?!r:(er(t,function(){return n=!1}),n)},d.isEqual=function(t,n,e,r){return un(t,n,"function"==typeof e&&nn(e,r,2))},d.isFinite=function(t){return $e(t)&&!Re(parseFloat(t))},d.isFunction=Sn,d.isNaN=function(t){return kn(t)&&t!=+t},d.isNull=function(t){return null===t},d.isNumber=kn,d.isObject=jn,d.isPlainObject=rr,d.isRegExp=function(t){return t&&H[typeof t]&&de.call(t)==K||!1},d.isString=Cn,d.isUndefined=function(t){return"undefined"==typeof t},d.lastIndexOf=function(t,n,e){var r=t?t.length:0;for("number"==typeof e&&(r=(0>e?Te(0,r+e):Ie(e,r-1))+1);r--;)if(t[r]===n)return r;return-1},d.mixin=Xn,d.noConflict=function(){return e._=ge,this},d.noop=Hn,d.now=lr,d.parseInt=cr,d.random=function(t,n,e){var r=null==t,a=null==n;return null==e&&("boolean"==typeof t&&a?(e=t,t=1):a||"boolean"!=typeof n||(e=n,a=!0)),r&&a&&(n=1),t=+t||0,a?(n=t,t=0):n=+n||0,e||t%1||n%1?(e=Ne(),Ie(t+e*(n-t+parseFloat("1e-"+((e+"").length-1))),n)):cn(t,n)},d.reduce=Fn,d.reduceRight=Nn,d.result=function(t,n){if(t){var e=t[n];return Sn(e)?t[n]():e}},d.runInContext=h,d.size=function(t){var n=t?t.length:0;return"number"==typeof n?n:Ge(t).length},d.some=Mn,d.sortedIndex=zn,d.template=function(t,n,e){var r=d.templateSettings;t=le(t||""),e=tr({},e,r);var a,o=tr({},e.imports,r.imports),r=Ge(o),o=En(o),i=0,l=e.interpolate||R,c="__p+='",l=ie((e.escape||R).source+"|"+l.source+"|"+(l===A?E:R).source+"|"+(e.evaluate||R).source+"|$","g");t.replace(l,function(n,e,r,o,l,f){return r||(r=o),c+=t.slice(i,f).replace(T,u),e&&(c+="'+__e("+e+")+'"),l&&(a=!0,c+="';"+l+";\n__p+='"),r&&(c+="'+((__t=("+r+"))==null?'':__t)+'"),i=f+n.length,n}),c+="';",l=e=e.variable,l||(e="obj",c="with("+e+"){"+c+"}"),c=(a?c.replace(S,""):c).replace(j,"$1").replace(C,"$1;"),c="function("+e+"){"+(l?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(a?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+c+"return __p}";try{var f=re(r,"return "+c).apply(g,o)}catch(s){throw s.source=c,s}return n?f(n):(f.source=c,f)},d.unescape=function(t){return null==t?"":le(t).replace(Xe,vn)},d.uniqueId=function(t){var n=++y;return le(null==t?"":t)+n},d.all=Ln,d.any=Mn,d.detect=$n,d.findWhere=$n,d.foldl=Fn,d.foldr=Nn,d.include=On,d.inject=Fn,Xn(function(){var t={};return er(d,function(n,e){d.prototype[e]||(t[e]=n)}),t}(),!1),d.first=Pn,d.last=function(t,n,e){var r=0,a=t?t.length:0;if("number"!=typeof n&&null!=n){var o=a;for(n=d.createCallback(n,e,3);o--&&n(t[o],o,t);)r++}else if(r=n,null==r||e)return t?t[a-1]:g;return p(t,Te(0,a-r))},d.sample=function(t,n,e){return t&&"number"!=typeof t.length?t=En(t):Pe.unindexedChars&&Cn(t)&&(t=t.split("")),null==n||e?t?t[cn(0,t.length-1)]:g:(t=Bn(t),t.length=Ie(Te(0,n),t.length),t)},d.take=Pn,d.head=Pn,er(d,function(t,n){var e="sample"!==n;d.prototype[n]||(d.prototype[n]=function(n,r){var a=this.__chain__,o=t(this.__wrapped__,n,r);return a||null!=n&&(!r||e&&"function"==typeof n)?new m(o,a):o})}),d.VERSION="2.4.1",d.prototype.chain=function(){return this.__chain__=!0,this},d.prototype.toString=function(){return le(this.__wrapped__)},d.prototype.value=Qn,d.prototype.valueOf=Qn,Ze(["join","pop","shift"],function(t){var n=fe[t];d.prototype[t]=function(){var t=this.__chain__,e=n.apply(this.__wrapped__,arguments);return t?new m(e,t):e}}),Ze(["push","reverse","sort","unshift"],function(t){var n=fe[t];d.prototype[t]=function(){return n.apply(this.__wrapped__,arguments),this}}),Ze(["concat","slice","splice"],function(t){var n=fe[t];d.prototype[t]=function(){return new m(n.apply(this.__wrapped__,arguments),this.__chain__)}}),Pe.spliceObjects||Ze(["pop","shift","splice"],function(t){var n=fe[t],e="splice"==t;d.prototype[t]=function(){var t=this.__chain__,r=this.__wrapped__,a=n.apply(r,arguments);return 0===r.length&&delete r[0],t||e?new m(a,t):a}}),d}var g,d=[],m=[],y=0,v={},b=+new Date+"",_=75,w=40,x=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",S=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,C=/(__e\(.*?\)|\b__t\))\+'';/g,E=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O=/\w*$/,L=/^\s*function[ \n\r\t]+\w/,A=/<%=([\s\S]+?)%>/g,$=RegExp("^["+x+"]*0+(?=.$)"),R=/($^)/,D=/\bthis\b/,T=/['\n\r\t\u2028\u2029\\]/g,I="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),N="[object Arguments]",B="[object Array]",M="[object Boolean]",P="[object Date]",W="[object Error]",q="[object Function]",z="[object Number]",G="[object Object]",K="[object RegExp]",Y="[object String]",J={};J[q]=!1,J[N]=J[B]=J[M]=J[P]=J[z]=J[G]=J[K]=J[Y]=!0;var U={leading:!1,maxWait:0,trailing:!1},V={configurable:!1,enumerable:!1,value:null,writable:!1},X={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:!1},H={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Z={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},Q=H[typeof window]&&window||this,tn=H[typeof exports]&&exports&&!exports.nodeType&&exports,nn=H[typeof module]&&module&&!module.nodeType&&module,en=nn&&nn.exports===tn&&tn,rn=H[typeof global]&&global;!rn||rn.global!==rn&&rn.window!==rn||(Q=rn);var an=h();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Q._=an,define(function(){return an})):tn&&nn?en?(nn.exports=an)._=an:tn._=an:Q._=an}).call(this);var App=function(){{var t=this;$(window).height()-200,$(window).width()}$(window).on("scroll",function(){var n=$(window).scrollTop();if(console.log("scrollTop",n),t.map&&(3700>n&&(t.fullMap&&t.fullMap!==!1||(t.na=!1,t.eu=!1,t.af=!1,t.zoomToFullExtent())),n>=3700&&5300>n&&(t.na&&t.na!==!1||(t.na=!0,t.eu=!1,t.af=!1,t.northAmerica())),n>=5300&&7700>n&&(t.eu&&t.eu!==!1||(t.eu=!0,t.na=!1,t.af=!1,t.europe())),n>=7700&&(t.af&&t.af!==!1||(t.af=!0,t.na=!1,t.eu=!1,t.africa()))),n>3900){var e=n-3900;e>=1011&&(e=1011),$("#dc-dataset-count").html("Datasets Shared: "+e)}if(n>4900){var r=n-4900;r>=42&&(r=42),$("#charlotte-dataset-count").html("Datasets Shared: "+r)}if(n>5880){var a=n-5880;a>=356&&(a=356),$("#md-dataset-count").html("Datasets Shared: "+a)}}),this.countryStats={},this.initMap(),this.orgChart(),this.monthlyChart()};App.prototype.zoomToFullExtent=function(){var t=new esri.geometry.Extent(-173.11931249996786,-19.387313471278183,61.0213124999697,71.27489360077264,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.northAmerica=function(){console.log("set north america!");var t=new esri.geometry.Extent(-152,10,-35,58,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t,function(){console.log("on COMPLETEL111 -----------")}),this.generateStats("north-america")
},App.prototype.europe=function(){console.log("set europe!");var t=new esri.geometry.Extent(-51,27,65,66,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t),this.generateStats("europe")},App.prototype.africa=function(){console.log("set europe!");var t=new esri.geometry.Extent(-48,-25,69,32,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t),this.generateStats("africa")},App.prototype.generateStats=function(t){if(this.countryStats[t])$("."+t+"#org-count").html("Total Orgs: "+this.countryStats[t].visible.length.toLocaleString()),$("."+t+"#dataset-count").html("Datasets Shared: "+this.countryStats[t].datasets.toLocaleString());else{var n=this.map.getLayer("circles").graphics,e=[],r=0;_.each(n,function(t){self.map.extent.contains(t.geometry)===!0&&(r+=t.attributes.datasets,e.push(t))}),$("."+t+"#org-count").html("Total Orgs: "+e.length.toLocaleString()),$("."+t+"#dataset-count").html("Datasets Shared: "+r.toLocaleString()),console.log("Total orgs: ",e.length),console.log("Total Datasets: ",r),this.countryStats[t]={},this.countryStats[t].visible=e,this.countryStats[t].datasets=r}},App.prototype.initMap=function(){var t=this;require(["esri/map","dojo/request","esri/geometry/Circle","esri/symbols/SimpleFillSymbol","esri/graphic","esri/layers/GraphicsLayer","esri/geometry/Point","esri/SpatialReference","esri/geometry/webMercatorUtils","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/FeatureLayer","dojo/domReady!"],function(n,e,r,a,o,u,i,l,c){function f(t){var n={geometry:{x:t.geometry.x,y:t.geometry.y,spatialReference:{wkid:102100}},attributes:{title:t.attributes.title,datasets:t.attributes.datasets_count,url:t.attributes.url,groups:t.attributes.groups_count},symbol:{color:[241,196,15,128],size:Math.min(Math.round(t.attributes.datasets_count/100*40),50),angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSCircle",outline:{color:[230,126,34,200],width:1,type:"esriSLS",style:"esriSLSSolid"}}},e=new o(n);h.add(e)}function s(t){var n=t.graphic.attributes.datasets,e=t.graphic.attributes.title,r=t.graphic.attributes.groups;$("#title").html(e),$("#groups").html("Open Data Groups: "+r),$("#count").html("Datasets: "+n)}function p(t){""!==t.graphic.attributes.url&&null!==t.graphic.attributes.url&&window.open(t.graphic.attributes.url)}esriConfig.defaults.map.basemaps.dotted={baseMapLayers:[{url:"http://studio.esri.com/arcgis/rest/services/World/WorldBasemapWhite/MapServer"}],title:"dots"},t.map=new n("map-locations",{center:[-56.049,38.485],zoom:3,basemap:"dotted",smartNavigation:!1}),t.map.on("load",function(){t.map.disableScrollWheelZoom(),$("#loader-main").fadeOut("slow",function(){$("#scroll-help").addClass("bounceIn"),setTimeout(function(){$("#scroll-help").removeClass("bounceIn"),$("#scroll-help").addClass("pulse")},2e3)})});var h=new u({id:"circles"});t.map.addLayer(h),t.map.on("click",function(){}),window.map=t.map,h.on("mouse-over",function(t){s(t)}),h.on("click",function(t){p(t)}),h.on("mouse-out",function(){}),e("data/explore.json").then(function(n){var e,r=JSON.parse(n).sites;r.forEach(function(t){var n,r=t.default_extent.xmin+(t.default_extent.xmax-t.default_extent.xmin)/2,a=t.default_extent.ymin+(t.default_extent.ymax-t.default_extent.ymin)/2;if(t.default_extent.spatialReference)if(4326===t.default_extent.spatialReference.wkid){var o=c.lngLatToXY(r,a);n={x:o[0],y:o[1],type:"point",spatialReference:{latestWkid:3857,wkid:102100}}}else n={x:r,y:a,type:"point",spatialReference:{latestWkid:3857,wkid:102100}};else if(4326===t.default_extent.spatial_reference.wkid){var o=c.lngLatToXY(r,a);n={x:o[0],y:o[1],type:"point",spatialReference:{latestWkid:3857,wkid:102100}}}else n={x:r,y:a,type:"point",spatialReference:{latestWkid:3857,wkid:102100}};e={geometry:n,attributes:{title:t.title,url:t.url,created_at:t.created_at,updated_at:t.updated_at,"public":t.public,groups_count:t.groups_count,datasets_count:t.datasets_count}},f(e)});var a=[];_.each(r,function(t){i=new esri.geometry.Extent(t.default_extent.xmin,t.default_extent.ymin,t.default_extent.xmax,t.default_extent.ymax,new esri.SpatialReference({wkid:102100})),a.push(i)});var o=a,u=new esri.layers.GraphicsLayer({id:"extentLayer"});t.map.addLayer(u);for(var i,l,s=[],p=esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new dojo.Color([255,255,255]),.4),new dojo.Color([93,173,221,0])),h=0;h<r.length;h++)102100===r[h].default_extent.spatial_reference.wkid?(l=new esri.Graphic(o[h],p,{name:r[h].title,url:r[h].url}),s.push(l),u.add(l)):console.log("no")})})},App.prototype.orgChart=function(){function t(t){return t.frequency=+t.frequency,t}var n={top:20,right:40,bottom:30,left:60},e=$(window).width()-n.left-n.right,r=$(window).height()/2-n.top-n.bottom,a=d3.scale.ordinal().rangeRoundBands([0,e],.1),o=d3.scale.linear().range([r,0]),u=d3.svg.axis().scale(a).orient("bottom"),i=d3.svg.axis().scale(o).orient("left").ticks(5),l=d3.select("#org-chart").append("svg").attr("width",e+n.left+n.right).attr("height",r+n.top+n.bottom).append("g").attr("transform","translate("+n.left+","+n.top+")");d3.tsv("data/org.tsv",t,function(t,n){a.domain(n.map(function(t){return t.letter})),o.domain([0,d3.max(n,function(t){return t.frequency})]),l.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(u),l.append("g").attr("class","y axis").call(i).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Count"),l.selectAll(".bar").data(n).enter().append("rect").attr("class","bar").attr("x",function(t){return a(t.letter)}).attr("width",a.rangeBand()).attr("y",function(t){return o(t.frequency)}).attr("height",function(t){return r-o(t.frequency)})})},App.prototype.monthlyChart=function(){var t={top:20,right:80,bottom:30,left:90},n=$(window).width()-t.left-t.right,e=$(window).height()/2-t.top-t.bottom,r=d3.time.format("%d-%b-%y").parse,a=d3.time.scale().range([0,n]),o=d3.scale.linear().range([e,0]),u=d3.svg.axis().scale(a).orient("bottom"),i=d3.svg.axis().scale(o).orient("left"),l=d3.svg.line().x(function(t){return a(t.date)}).y(function(t){return o(t.close)}),c=d3.select("#monthly-chart").append("svg").attr("width",n+t.left+t.right).attr("height",e+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");d3.tsv("data/line-data.tsv",function(t,n){n.forEach(function(t){t.date=r(t.date),t.close=+t.close}),a.domain(d3.extent(n,function(t){return t.date})),o.domain(d3.extent(n,function(t){return t.close})),c.append("g").attr("class","x axis").attr("transform","translate(0,"+e+")").call(u),c.append("g").attr("class","y axis").call(i).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Shared Datasets"),c.append("path").datum(n).attr("class","line").attr("d",l)})};