(function(){function t(t,e,n){n=(n||0)-1;for(var r=t?t.length:0;++n<r;)if(t[n]===e)return n;return-1}function e(e,n){var r=typeof n;if(e=e.l,"boolean"==r||null==n)return e[n]?0:-1;"number"!=r&&"string"!=r&&(r="object");var a="number"==r?n:b+n;return e=(e=e[r])&&e[a],"object"==r?e&&-1<t(e,n)?0:-1:e?0:-1}function n(t){var e=this.l,n=typeof t;if("boolean"==n||null==t)e[t]=!0;else{"number"!=n&&"string"!=n&&(n="object");var r="number"==n?t:b+t,e=e[n]||(e[n]={});"object"==n?(e[r]||(e[r]=[])).push(t):e[r]=!0}}function r(t){return t.charCodeAt(0)}function a(t,e){for(var n=t.m,r=e.m,a=-1,o=n.length;++a<o;){var u=n[a],i=r[a];if(u!==i){if(u>i||"undefined"==typeof u)return 1;if(i>u||"undefined"==typeof i)return-1}}return t.n-e.n}function o(t){var e=-1,r=t.length,a=t[0],o=t[r/2|0],u=t[r-1];if(a&&"object"==typeof a&&o&&"object"==typeof o&&u&&"object"==typeof u)return!1;for(a=l(),a["false"]=a["null"]=a["true"]=a.undefined=!1,o=l(),o.k=t,o.l=a,o.push=n;++e<r;)o.push(t[e]);return o}function u(t){return"\\"+Z[t]}function i(){return d.pop()||[]}function l(){return y.pop()||{k:null,l:null,m:null,"false":!1,n:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,o:null}}function c(t){return"function"!=typeof t.toString&&"string"==typeof(t+"")}function f(t){t.length=0,d.length<w&&d.push(t)}function s(t){var e=t.l;e&&s(e),t.k=t.l=t.m=t.object=t.number=t.string=t.o=null,y.length<w&&y.push(t)}function p(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);var r=-1;n=n-e||0;for(var a=Array(0>n?0:n);++r<n;)a[r]=t[e+r];return a}function g(n){function d(t){return t&&"object"==typeof t&&!Wn(t)&&xn.call(t,"__wrapped__")?t:new y(t)}function y(t,e){this.__chain__=!!e,this.__wrapped__=t}function w(t){function e(){if(r){var t=p(r);Sn.apply(t,arguments)}if(this instanceof e){var o=te(n.prototype),t=n.apply(o,t||arguments);return Se(t)?t:o}return n.apply(a,t||arguments)}var n=t[0],r=t[2],a=t[4];return Pn(e,t),e}function Z(t,e,n,r,a){if(n){var o=n(t);if("undefined"!=typeof o)return o}if(!Se(t))return t;var u=dn.call(t);if(!J[u]||!zn.nodeClass&&c(t))return t;var l=Bn[u];switch(u){case M:case z:return new l(+t);case q:case Y:return new l(t);case K:return o=l(t.source,O.exec(t)),o.lastIndex=t.lastIndex,o}if(u=Wn(t),e){var s=!r;r||(r=i()),a||(a=i());for(var g=r.length;g--;)if(r[g]==t)return a[g];o=u?l(t.length):{}}else o=u?p(t):Qn({},t);return u&&(xn.call(t,"index")&&(o.index=t.index),xn.call(t,"input")&&(o.input=t.input)),e?(r.push(t),a.push(o),(u?Zn:nr)(t,function(t,u){o[u]=Z(t,e,n,r,a)}),s&&(f(r),f(a)),o):o}function te(t){return Se(t)?An(t):{}}function ee(t,e,n){if("function"!=typeof t)return Ue;if("undefined"==typeof e||!("prototype"in t))return t;var r=t.__bindData__;if("undefined"==typeof r&&(zn.funcNames&&(r=!t.name),r=r||!zn.funcDecomp,!r)){var a=_n.call(t);zn.funcNames||(r=!A.test(a)),r||(r=D.test(a),Pn(t,r))}if(!1===r||!0!==r&&1&r[1])return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)};case 4:return function(n,r,a,o){return t.call(e,n,r,a,o)}}return Ye(t,e)}function ne(t){function e(){var t=l?u:this;if(a){var h=p(a);Sn.apply(h,arguments)}return(o||f)&&(h||(h=p(arguments)),o&&Sn.apply(h,o),f&&h.length<i)?(r|=16,ne([n,s?r:-4&r,h,null,u,i])):(h||(h=arguments),c&&(n=t[g]),this instanceof e?(t=te(n.prototype),h=n.apply(t,h),Se(h)?h:t):n.apply(t,h))}var n=t[0],r=t[1],a=t[2],o=t[3],u=t[4],i=t[5],l=1&r,c=2&r,f=4&r,s=8&r,g=n;return Pn(e,t),e}function re(n,r){var a=-1,u=he(),i=n?n.length:0,l=i>=_&&u===t,c=[];if(l){var f=o(r);f?(u=e,r=f):l=!1}for(;++a<i;)f=n[a],0>u(r,f)&&c.push(f);return l&&s(r),c}function oe(t,e,n,r){r=(r||0)-1;for(var a=t?t.length:0,o=[];++r<a;){var u=t[r];if(u&&"object"==typeof u&&"number"==typeof u.length&&(Wn(u)||ve(u))){e||(u=oe(u,e,n));var i=-1,l=u.length,c=o.length;for(o.length+=l;++i<l;)o[c++]=u[i]}else n||o.push(u)}return o}function ue(t,e,n,r,a,o){if(n){var u=n(t,e);if("undefined"!=typeof u)return!!u}if(t===e)return 0!==t||1/t==1/e;if(t===t&&!(t&&H[typeof t]||e&&H[typeof e]))return!1;if(null==t||null==e)return t===e;var l=dn.call(t),s=dn.call(e);if(l==N&&(l=G),s==N&&(s=G),l!=s)return!1;switch(l){case M:case z:return+t==+e;case q:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case K:case Y:return t==ln(e)}if(s=l==B,!s){var p=xn.call(t,"__wrapped__"),g=xn.call(e,"__wrapped__");if(p||g)return ue(p?t.__wrapped__:t,g?e.__wrapped__:e,n,r,a,o);if(l!=G||!zn.nodeClass&&(c(t)||c(e)))return!1;if(l=!zn.argsObject&&ve(t)?on:t.constructor,p=!zn.argsObject&&ve(e)?on:e.constructor,l!=p&&!(xe(l)&&l instanceof l&&xe(p)&&p instanceof p)&&"constructor"in t&&"constructor"in e)return!1}for(l=!a,a||(a=i()),o||(o=i()),p=a.length;p--;)if(a[p]==t)return o[p]==e;var h=0,u=!0;if(a.push(t),o.push(e),s){if(p=t.length,h=e.length,(u=h==p)||r)for(;h--;)if(s=p,g=e[h],r)for(;s--&&!(u=ue(t[s],g,n,r,a,o)););else if(!(u=ue(t[h],g,n,r,a,o)))break}else er(e,function(e,i,l){return xn.call(l,i)?(h++,u=xn.call(t,i)&&ue(t[i],e,n,r,a,o)):void 0}),u&&!r&&er(t,function(t,e,n){return xn.call(n,e)?u=-1<--h:void 0});return a.pop(),o.pop(),l&&(f(a),f(o)),u}function ie(t,e,n,r,a){(Wn(e)?$e:nr)(e,function(e,o){var u,i,l=e,c=t[o];if(e&&((i=Wn(e))||rr(e))){for(l=r.length;l--;)if(u=r[l]==e){c=a[l];break}if(!u){var f;n&&(l=n(c,e),f="undefined"!=typeof l)&&(c=l),f||(c=i?Wn(c)?c:[]:rr(c)?c:{}),r.push(e),a.push(c),f||ie(c,e,n,r,a)}}else n&&(l=n(c,e),"undefined"==typeof l&&(l=e)),"undefined"!=typeof l&&(c=l);t[o]=c})}function le(t,e){return t+bn(Nn()*(e-t+1))}function ce(n,r,a){var u=-1,l=he(),c=n?n.length:0,p=[],g=!r&&c>=_&&l===t,h=a||g?i():p;for(g&&(h=o(h),l=e);++u<c;){var d=n[u],y=a?a(d,u,n):d;(r?!u||h[h.length-1]!==y:0>l(h,y))&&((a||g)&&h.push(y),p.push(d))}return g?(f(h.k),s(h)):a&&f(h),p}function fe(t){return function(e,n,r){var a={};if(n=d.createCallback(n,r,3),Wn(e)){r=-1;for(var o=e.length;++r<o;){var u=e[r];t(a,u,n(u,r,e),e)}}else Zn(e,function(e,r,o){t(a,e,n(e,r,o),o)});return a}}function se(t,e,n,r,a,o){var u=1&e,i=4&e,l=16&e,c=32&e;if(!(2&e||xe(t)))throw new cn;l&&!n.length&&(e&=-17,l=n=!1),c&&!r.length&&(e&=-33,c=r=!1);var f=t&&t.__bindData__;return f&&!0!==f?(f=p(f),f[2]&&(f[2]=p(f[2])),f[3]&&(f[3]=p(f[3])),!u||1&f[1]||(f[4]=a),!u&&1&f[1]&&(e|=8),!i||4&f[1]||(f[5]=o),l&&Sn.apply(f[2]||(f[2]=[]),n),c&&En.apply(f[3]||(f[3]=[]),r),f[1]|=e,se.apply(null,f)):(1==e||17===e?w:ne)([t,e,n,r,a,o])}function pe(){X.h=F,X.b=X.c=X.g=X.i="",X.e="t",X.j=!0;for(var t,e=0;t=arguments[e];e++)for(var n in t)X[n]=t[n];e=X.a,X.d=/^[^,]+/.exec(e)[0],t=nn,e="return function("+e+"){",n=X;var r="var n,t="+n.d+",E="+n.e+";if(!t)return E;"+n.i+";";n.b?(r+="var u=t.length;n=-1;if("+n.b+"){",zn.unindexedChars&&(r+="if(s(t)){t=t.split('')}"),r+="while(++n<u){"+n.g+";}}else{"):zn.nonEnumArgs&&(r+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+n.g+";}}else{"),zn.enumPrototypes&&(r+="var G=typeof t=='function';"),zn.enumErrorProps&&(r+="var F=t===k||t instanceof Error;");var a=[];if(zn.enumPrototypes&&a.push('!(G&&n=="prototype")'),zn.enumErrorProps&&a.push('!(F&&(n=="message"||n=="name"))'),n.j&&n.f)r+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",a.length&&(r+="if("+a.join("&&")+"){"),r+=n.g+";",a.length&&(r+="}"),r+="}";else if(r+="for(n in t){",n.j&&a.push("m.call(t, n)"),a.length&&(r+="if("+a.join("&&")+"){"),r+=n.g+";",a.length&&(r+="}"),r+="}",zn.nonEnumShadows){for(r+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)r+="n='"+n.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",n.j||(r+="||(!x[n]&&t[n]!==A[n])"),r+="){"+n.g+"}";r+="}"}return(n.b||zn.nonEnumArgs)&&(r+="}"),r+=n.c+";return E",t("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",e+r+"}")(ee,P,sn,xn,v,ve,Wn,je,X.f,pn,H,Mn,Y,gn,dn)}function ge(t){return Un[t]}function he(){var e=(e=d.indexOf)===ze?t:e;return e}function de(t){return"function"==typeof t&&yn.test(t)}function ye(t){var e,n;return!t||dn.call(t)!=G||(e=t.constructor,xe(e)&&!(e instanceof e))||!zn.argsClass&&ve(t)||!zn.nodeClass&&c(t)?!1:zn.ownLast?(er(t,function(t,e,r){return n=xn.call(r,e),!1}),!1!==n):(er(t,function(t,e){n=e}),"undefined"==typeof n||xn.call(t,n))}function me(t){return Vn[t]}function ve(t){return t&&"object"==typeof t&&"number"==typeof t.length&&dn.call(t)==N||!1}function be(t,e,n){var r=Gn(t),a=r.length;for(e=ee(e,n,3);a--&&(n=r[a],!1!==e(t[n],n,t)););return t}function _e(t){var e=[];return er(t,function(t,n){xe(t)&&e.push(n)}),e.sort()}function we(t){for(var e=-1,n=Gn(t),r=n.length,a={};++e<r;){var o=n[e];a[t[o]]=o}return a}function xe(t){return"function"==typeof t}function Se(t){return!(!t||!H[typeof t])}function ke(t){return"number"==typeof t||t&&"object"==typeof t&&dn.call(t)==q||!1}function je(t){return"string"==typeof t||t&&"object"==typeof t&&dn.call(t)==Y||!1}function Ce(t){for(var e=-1,n=Gn(t),r=n.length,a=Qe(r);++e<r;)a[e]=t[n[e]];return a}function Ee(t,e,n){var r=-1,a=he(),o=t?t.length:0,u=!1;return n=(0>n?In(0,o+n):n)||0,Wn(t)?u=-1<a(t,e,n):"number"==typeof o?u=-1<(je(t)?t.indexOf(e,n):a(t,e,n)):Zn(t,function(t){return++r<n?void 0:!(u=t===e)}),u}function Oe(t,e,n){var r=!0;if(e=d.createCallback(e,n,3),Wn(t)){n=-1;for(var a=t.length;++n<a&&(r=!!e(t[n],n,t)););}else Zn(t,function(t,n,a){return r=!!e(t,n,a)});return r}function Ae(t,e,n){var r=[];if(e=d.createCallback(e,n,3),Wn(t)){n=-1;for(var a=t.length;++n<a;){var o=t[n];e(o,n,t)&&r.push(o)}}else Zn(t,function(t,n,a){e(t,n,a)&&r.push(t)});return r}function Le(t,e,n){if(e=d.createCallback(e,n,3),!Wn(t)){var r;return Zn(t,function(t,n,a){return e(t,n,a)?(r=t,!1):void 0}),r}n=-1;for(var a=t.length;++n<a;){var o=t[n];if(e(o,n,t))return o}}function $e(t,e,n){if(e&&"undefined"==typeof n&&Wn(t)){n=-1;for(var r=t.length;++n<r&&!1!==e(t[n],n,t););}else Zn(t,e,n);return t}function Re(t,e,n){var r=t,a=t?t.length:0;if(e=e&&"undefined"==typeof n?e:ee(e,n,3),Wn(t))for(;a--&&!1!==e(t[a],a,t););else{if("number"!=typeof a)var o=Gn(t),a=o.length;else zn.unindexedChars&&je(t)&&(r=t.split(""));Zn(t,function(t,n,u){return n=o?o[--a]:--a,e(r[n],n,u)})}return t}function De(t,e,n){var r=-1,a=t?t.length:0,o=Qe("number"==typeof a?a:0);if(e=d.createCallback(e,n,3),Wn(t))for(;++r<a;)o[r]=e(t[r],r,t);else Zn(t,function(t,n,a){o[++r]=e(t,n,a)});return o}function Ie(t,e,n){var a=-1/0,o=a;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&Wn(t)){n=-1;for(var u=t.length;++n<u;){var i=t[n];i>o&&(o=i)}}else e=null==e&&je(t)?r:d.createCallback(e,n,3),Zn(t,function(t,n,r){n=e(t,n,r),n>a&&(a=n,o=t)});return o}function Te(t,e,n,r){var a=3>arguments.length;if(e=d.createCallback(e,r,4),Wn(t)){var o=-1,u=t.length;for(a&&(n=t[++o]);++o<u;)n=e(n,t[o],o,t)}else Zn(t,function(t,r,o){n=a?(a=!1,t):e(n,t,r,o)});return n}function Fe(t,e,n,r){var a=3>arguments.length;return e=d.createCallback(e,r,4),Re(t,function(t,r,o){n=a?(a=!1,t):e(n,t,r,o)}),n}function Ne(t){var e=-1,n=t?t.length:0,r=Qe("number"==typeof n?n:0);return $e(t,function(t){var n=le(0,++e);r[e]=r[n],r[n]=t}),r}function Be(t,e,n){var r;if(e=d.createCallback(e,n,3),Wn(t)){n=-1;for(var a=t.length;++n<a&&!(r=e(t[n],n,t)););}else Zn(t,function(t,n,a){return!(r=e(t,n,a))});return!!r}function Me(t,e,n){var r=0,a=t?t.length:0;if("number"!=typeof e&&null!=e){var o=-1;for(e=d.createCallback(e,n,3);++o<a&&e(t[o],o,t);)r++}else if(r=e,null==r||n)return t?t[0]:h;return p(t,0,Tn(In(0,r),a))}function ze(e,n,r){if("number"==typeof r){var a=e?e.length:0;r=0>r?In(0,a+r):r||0}else if(r)return r=We(e,n),e[r]===n?r:-1;return t(e,n,r)}function Pe(t,e,n){if("number"!=typeof e&&null!=e){var r=0,a=-1,o=t?t.length:0;for(e=d.createCallback(e,n,3);++a<o&&e(t[a],a,t);)r++}else r=null==e||n?1:In(0,e);return p(t,r)}function We(t,e,n,r){var a=0,o=t?t.length:a;for(n=n?d.createCallback(n,r,1):Ue,e=n(e);o>a;)r=a+o>>>1,n(t[r])<e?a=r+1:o=r;return a}function qe(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n="function"!=typeof e&&r&&r[e]===t?null:e,e=!1),null!=n&&(n=d.createCallback(n,r,3)),ce(t,e,n)}function Ge(){for(var t=1<arguments.length?arguments:arguments[0],e=-1,n=t?Ie(ir(t,"length")):0,r=Qe(0>n?0:n);++e<n;)r[e]=ir(t,e);return r}function Ke(t,e){var n=-1,r=t?t.length:0,a={};for(e||!r||Wn(t[0])||(e=[]);++n<r;){var o=t[n];e?a[o]=e[n]:o&&(a[o[0]]=o[1])}return a}function Ye(t,e){return 2<arguments.length?se(t,17,p(arguments,2),null,e):se(t,1,null,null,e)}function Je(t,e,n){var r,a,o,u,i,l,c,f=0,s=!1,p=!0;if(!xe(t))throw new cn;if(e=In(0,e)||0,!0===n)var g=!0,p=!1;else Se(n)&&(g=n.leading,s="maxWait"in n&&(In(e,n.maxWait)||0),p="trailing"in n?n.trailing:p);var d=function(){var n=e-(lr()-u);n>0?l=jn(d,n):(a&&vn(a),n=c,a=l=c=h,n&&(f=lr(),o=t.apply(i,r),l||a||(r=i=null)))},y=function(){l&&vn(l),a=l=c=h,(p||s!==e)&&(f=lr(),o=t.apply(i,r),l||a||(r=i=null))};return function(){if(r=arguments,u=lr(),i=this,c=p&&(l||!g),!1===s)var n=g&&!l;else{a||g||(f=u);var h=s-(u-f),m=0>=h;m?(a&&(a=vn(a)),f=u,o=t.apply(i,r)):a||(a=jn(y,h))}return m&&l?l=vn(l):l||e===s||(l=jn(d,e)),n&&(m=!0,o=t.apply(i,r)),!m||l||a||(r=i=null),o}}function Ue(t){return t}function Ve(t,e,n){var r=!0,a=e&&_e(e);e&&(n||a.length)||(null==n&&(n=e),o=y,e=t,t=d,a=_e(e)),!1===n?r=!1:Se(n)&&"chain"in n&&(r=n.chain);var o=t,u=xe(o);$e(a,function(n){var a=t[n]=e[n];u&&(o.prototype[n]=function(){var e=this.__chain__,n=this.__wrapped__,u=[n];if(Sn.apply(u,arguments),u=a.apply(t,u),r||e){if(n===u&&Se(u))return this;u=new o(u),u.__chain__=e}return u})})}function Xe(){}function He(t){return function(e){return e[t]}}function Ze(){return this.__wrapped__}n=n?ae.defaults(Q.Object(),n,ae.pick(Q,T)):Q;var Qe=n.Array,tn=n.Boolean,en=n.Date,nn=n.Function,rn=n.Math,an=n.Number,on=n.Object,un=n.RegExp,ln=n.String,cn=n.TypeError,fn=[],sn=n.Error.prototype,pn=on.prototype,gn=ln.prototype,hn=n._,dn=pn.toString,yn=un("^"+ln(dn).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),mn=rn.ceil,vn=n.clearTimeout,bn=rn.floor,_n=nn.prototype.toString,wn=de(wn=on.getPrototypeOf)&&wn,xn=pn.hasOwnProperty,Sn=fn.push,kn=pn.propertyIsEnumerable,jn=n.setTimeout,Cn=fn.splice,En=fn.unshift,On=function(){try{var t={},e=de(e=on.defineProperty)&&e,n=e(t,t,t)&&e}catch(r){}return n}(),An=de(An=on.create)&&An,Ln=de(Ln=Qe.isArray)&&Ln,$n=n.isFinite,Rn=n.isNaN,Dn=de(Dn=on.keys)&&Dn,In=rn.max,Tn=rn.min,Fn=n.parseInt,Nn=rn.random,Bn={};Bn[B]=Qe,Bn[M]=tn,Bn[z]=en,Bn[W]=nn,Bn[G]=on,Bn[q]=an,Bn[K]=un,Bn[Y]=ln;var Mn={};Mn[B]=Mn[z]=Mn[q]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Mn[M]=Mn[Y]={constructor:!0,toString:!0,valueOf:!0},Mn[P]=Mn[W]=Mn[K]={constructor:!0,toString:!0},Mn[G]={constructor:!0},function(){for(var t=F.length;t--;){var e,n=F[t];for(e in Mn)xn.call(Mn,e)&&!xn.call(Mn[e],n)&&(Mn[e][n]=!1)}}(),y.prototype=d.prototype;var zn=d.support={};!function(){var t=function(){this.x=1},e={0:1,length:1},r=[];t.prototype={valueOf:1,y:1};for(var a in new t)r.push(a);for(a in arguments);zn.argsClass=dn.call(arguments)==N,zn.argsObject=arguments.constructor==on&&!(arguments instanceof Qe),zn.enumErrorProps=kn.call(sn,"message")||kn.call(sn,"name"),zn.enumPrototypes=kn.call(t,"prototype"),zn.funcDecomp=!de(n.WinRTError)&&D.test(g),zn.funcNames="string"==typeof nn.name,zn.nonEnumArgs=0!=a,zn.nonEnumShadows=!/valueOf/.test(r),zn.ownLast="x"!=r[0],zn.spliceObjects=(fn.splice.call(e,0,1),!e[0]),zn.unindexedChars="xx"!="x"[0]+on("x")[0];try{zn.nodeClass=!(dn.call(document)==G&&!({toString:0}+""))}catch(o){zn.nodeClass=!0}}(1),d.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:L,variable:"",imports:{_:d}},An||(te=function(){function t(){}return function(e){if(Se(e)){t.prototype=e;var r=new t;t.prototype=null}return r||n.Object()}}());var Pn=On?function(t,e){V.value=e,On(t,"__bindData__",V)}:Xe;zn.argsClass||(ve=function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&xn.call(t,"callee")&&!kn.call(t,"callee")||!1});var Wn=Ln||function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&dn.call(t)==B||!1},qn=pe({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),Gn=Dn?function(t){return Se(t)?zn.enumPrototypes&&"function"==typeof t||zn.nonEnumArgs&&t.length&&ve(t)?qn(t):Dn(t):[]}:qn,Kn={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:Gn,g:"if(e(t[n],n,g)===false)return E"},Yn={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:Gn,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},Jn={i:"if(!B[typeof t])return E;"+Kn.i,b:!1},Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vn=we(Un),Xn=un("("+Gn(Vn).join("|")+")","g"),Hn=un("["+Gn(Un).join("")+"]","g"),Zn=pe(Kn),Qn=pe(Yn,{i:Yn.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),tr=pe(Yn),er=pe(Kn,Jn,{j:!1}),nr=pe(Kn,Jn);xe(/x/)&&(xe=function(t){return"function"==typeof t&&dn.call(t)==W});var rr=wn?function(t){if(!t||dn.call(t)!=G||!zn.argsClass&&ve(t))return!1;var e=t.valueOf,n=de(e)&&(n=wn(e))&&wn(n);return n?t==n||wn(t)==n:ye(t)}:ye,ar=fe(function(t,e,n){xn.call(t,n)?t[n]++:t[n]=1}),or=fe(function(t,e,n){(xn.call(t,n)?t[n]:t[n]=[]).push(e)}),ur=fe(function(t,e,n){t[n]=e}),ir=De,lr=de(lr=en.now)&&lr||function(){return(new en).getTime()},cr=8==Fn(x+"08")?Fn:function(t,e){return Fn(je(t)?t.replace($,""):t,e||0)};return d.after=function(t,e){if(!xe(e))throw new cn;return function(){return 1>--t?e.apply(this,arguments):void 0}},d.assign=Qn,d.at=function(t){var e=arguments,n=-1,r=oe(e,!0,!1,1),e=e[2]&&e[2][e[1]]===t?1:r.length,a=Qe(e);for(zn.unindexedChars&&je(t)&&(t=t.split(""));++n<e;)a[n]=t[r[n]];return a},d.bind=Ye,d.bindAll=function(t){for(var e=1<arguments.length?oe(arguments,!0,!1,1):_e(t),n=-1,r=e.length;++n<r;){var a=e[n];t[a]=se(t[a],1,null,null,t)}return t},d.bindKey=function(t,e){return 2<arguments.length?se(e,19,p(arguments,2),null,t):se(e,3,null,null,t)},d.chain=function(t){return t=new y(t),t.__chain__=!0,t},d.compact=function(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var a=t[e];a&&r.push(a)}return r},d.compose=function(){for(var t=arguments,e=t.length;e--;)if(!xe(t[e]))throw new cn;return function(){for(var e=arguments,n=t.length;n--;)e=[t[n].apply(this,e)];return e[0]}},d.constant=function(t){return function(){return t}},d.countBy=ar,d.create=function(t,e){var n=te(t);return e?Qn(n,e):n},d.createCallback=function(t,e,n){var r=typeof t;if(null==t||"function"==r)return ee(t,e,n);if("object"!=r)return He(t);var a=Gn(t),o=a[0],u=t[o];return 1!=a.length||u!==u||Se(u)?function(e){for(var n=a.length,r=!1;n--&&(r=ue(e[a[n]],t[a[n]],null,!0)););return r}:function(t){return t=t[o],u===t&&(0!==u||1/u==1/t)}},d.curry=function(t,e){return e="number"==typeof e?e:+e||t.length,se(t,4,null,null,null,e)},d.debounce=Je,d.defaults=tr,d.defer=function(t){if(!xe(t))throw new cn;var e=p(arguments,1);return jn(function(){t.apply(h,e)},1)},d.delay=function(t,e){if(!xe(t))throw new cn;var n=p(arguments,2);return jn(function(){t.apply(h,n)},e)},d.difference=function(t){return re(t,oe(arguments,!0,!0,1))},d.filter=Ae,d.flatten=function(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n="function"!=typeof e&&r&&r[e]===t?null:e,e=!1),null!=n&&(t=De(t,n,r)),oe(t,e)},d.forEach=$e,d.forEachRight=Re,d.forIn=er,d.forInRight=function(t,e,n){var r=[];er(t,function(t,e){r.push(e,t)});var a=r.length;for(e=ee(e,n,3);a--&&!1!==e(r[a--],r[a],t););return t},d.forOwn=nr,d.forOwnRight=be,d.functions=_e,d.groupBy=or,d.indexBy=ur,d.initial=function(t,e,n){var r=0,a=t?t.length:0;if("number"!=typeof e&&null!=e){var o=a;for(e=d.createCallback(e,n,3);o--&&e(t[o],o,t);)r++}else r=null==e||n?1:e||r;return p(t,0,Tn(In(0,a-r),a))},d.intersection=function(){for(var n=[],r=-1,a=arguments.length,u=i(),l=he(),c=l===t,p=i();++r<a;){var g=arguments[r];(Wn(g)||ve(g))&&(n.push(g),u.push(c&&g.length>=_&&o(r?n[r]:p)))}var c=n[0],h=-1,d=c?c.length:0,y=[];t:for(;++h<d;){var m=u[0],g=c[h];if(0>(m?e(m,g):l(p,g))){for(r=a,(m||p).push(g);--r;)if(m=u[r],0>(m?e(m,g):l(n[r],g)))continue t;y.push(g)}}for(;a--;)(m=u[a])&&s(m);return f(u),f(p),y},d.invert=we,d.invoke=function(t,e){var n=p(arguments,2),r=-1,a="function"==typeof e,o=t?t.length:0,u=Qe("number"==typeof o?o:0);return $e(t,function(t){u[++r]=(a?e:t[e]).apply(t,n)}),u},d.keys=Gn,d.map=De,d.mapValues=function(t,e,n){var r={};return e=d.createCallback(e,n,3),nr(t,function(t,n,a){r[n]=e(t,n,a)}),r},d.max=Ie,d.memoize=function(t,e){if(!xe(t))throw new cn;var n=function(){var r=n.cache,a=e?e.apply(this,arguments):b+arguments[0];return xn.call(r,a)?r[a]:r[a]=t.apply(this,arguments)};return n.cache={},n},d.merge=function(t){var e=arguments,n=2;if(!Se(t))return t;if("number"!=typeof e[2]&&(n=e.length),n>3&&"function"==typeof e[n-2])var r=ee(e[--n-1],e[n--],2);else n>2&&"function"==typeof e[n-1]&&(r=e[--n]);for(var e=p(arguments,1,n),a=-1,o=i(),u=i();++a<n;)ie(t,e[a],r,o,u);return f(o),f(u),t},d.min=function(t,e,n){var a=1/0,o=a;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&Wn(t)){n=-1;for(var u=t.length;++n<u;){var i=t[n];o>i&&(o=i)}}else e=null==e&&je(t)?r:d.createCallback(e,n,3),Zn(t,function(t,n,r){n=e(t,n,r),a>n&&(a=n,o=t)});return o},d.omit=function(t,e,n){var r={};if("function"!=typeof e){var a=[];er(t,function(t,e){a.push(e)});for(var a=re(a,oe(arguments,!0,!1,1)),o=-1,u=a.length;++o<u;){var i=a[o];r[i]=t[i]}}else e=d.createCallback(e,n,3),er(t,function(t,n,a){e(t,n,a)||(r[n]=t)});return r},d.once=function(t){var e,n;if(!xe(t))throw new cn;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)}},d.pairs=function(t){for(var e=-1,n=Gn(t),r=n.length,a=Qe(r);++e<r;){var o=n[e];a[e]=[o,t[o]]}return a},d.partial=function(t){return se(t,16,p(arguments,1))},d.partialRight=function(t){return se(t,32,null,p(arguments,1))},d.pick=function(t,e,n){var r={};if("function"!=typeof e)for(var a=-1,o=oe(arguments,!0,!1,1),u=Se(t)?o.length:0;++a<u;){var i=o[a];i in t&&(r[i]=t[i])}else e=d.createCallback(e,n,3),er(t,function(t,n,a){e(t,n,a)&&(r[n]=t)});return r},d.pluck=ir,d.property=He,d.pull=function(t){for(var e=arguments,n=0,r=e.length,a=t?t.length:0;++n<r;)for(var o=-1,u=e[n];++o<a;)t[o]===u&&(Cn.call(t,o--,1),a--);return t},d.range=function(t,e,n){t=+t||0,n="number"==typeof n?n:+n||1,null==e&&(e=t,t=0);var r=-1;e=In(0,mn((e-t)/(n||1)));for(var a=Qe(e);++r<e;)a[r]=t,t+=n;return a},d.reject=function(t,e,n){return e=d.createCallback(e,n,3),Ae(t,function(t,n,r){return!e(t,n,r)})},d.remove=function(t,e,n){var r=-1,a=t?t.length:0,o=[];for(e=d.createCallback(e,n,3);++r<a;)n=t[r],e(n,r,t)&&(o.push(n),Cn.call(t,r--,1),a--);return o},d.rest=Pe,d.shuffle=Ne,d.sortBy=function(t,e,n){var r=-1,o=Wn(e),u=t?t.length:0,c=Qe("number"==typeof u?u:0);for(o||(e=d.createCallback(e,n,3)),$e(t,function(t,n,a){var u=c[++r]=l();o?u.m=De(e,function(e){return t[e]}):(u.m=i())[0]=e(t,n,a),u.n=r,u.o=t}),u=c.length,c.sort(a);u--;)t=c[u],c[u]=t.o,o||f(t.m),s(t);return c},d.tap=function(t,e){return e(t),t},d.throttle=function(t,e,n){var r=!0,a=!0;if(!xe(t))throw new cn;return!1===n?r=!1:Se(n)&&(r="leading"in n?n.leading:r,a="trailing"in n?n.trailing:a),U.leading=r,U.maxWait=e,U.trailing=a,Je(t,e,U)},d.times=function(t,e,n){t=-1<(t=+t)?t:0;var r=-1,a=Qe(t);for(e=ee(e,n,1);++r<t;)a[r]=e(r);return a},d.toArray=function(t){return t&&"number"==typeof t.length?zn.unindexedChars&&je(t)?t.split(""):p(t):Ce(t)},d.transform=function(t,e,n,r){var a=Wn(t);if(null==n)if(a)n=[];else{var o=t&&t.constructor;n=te(o&&o.prototype)}return e&&(e=d.createCallback(e,r,4),(a?Zn:nr)(t,function(t,r,a){return e(n,t,r,a)})),n},d.union=function(){return ce(oe(arguments,!0,!0))},d.uniq=qe,d.values=Ce,d.where=Ae,d.without=function(t){return re(t,p(arguments,1))},d.wrap=function(t,e){return se(e,16,[t])},d.xor=function(){for(var t=-1,e=arguments.length;++t<e;){var n=arguments[t];if(Wn(n)||ve(n))var r=r?ce(re(r,n).concat(re(n,r))):n}return r||[]},d.zip=Ge,d.zipObject=Ke,d.collect=De,d.drop=Pe,d.each=$e,d.eachRight=Re,d.extend=Qn,d.methods=_e,d.object=Ke,d.select=Ae,d.tail=Pe,d.unique=qe,d.unzip=Ge,Ve(d),d.clone=function(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1),Z(t,e,"function"==typeof n&&ee(n,r,1))},d.cloneDeep=function(t,e,n){return Z(t,!0,"function"==typeof e&&ee(e,n,1))},d.contains=Ee,d.escape=function(t){return null==t?"":ln(t).replace(Hn,ge)},d.every=Oe,d.find=Le,d.findIndex=function(t,e,n){var r=-1,a=t?t.length:0;for(e=d.createCallback(e,n,3);++r<a;)if(e(t[r],r,t))return r;return-1},d.findKey=function(t,e,n){var r;return e=d.createCallback(e,n,3),nr(t,function(t,n,a){return e(t,n,a)?(r=n,!1):void 0}),r},d.findLast=function(t,e,n){var r;return e=d.createCallback(e,n,3),Re(t,function(t,n,a){return e(t,n,a)?(r=t,!1):void 0}),r},d.findLastIndex=function(t,e,n){var r=t?t.length:0;for(e=d.createCallback(e,n,3);r--;)if(e(t[r],r,t))return r;return-1},d.findLastKey=function(t,e,n){var r;return e=d.createCallback(e,n,3),be(t,function(t,n,a){return e(t,n,a)?(r=n,!1):void 0}),r},d.has=function(t,e){return t?xn.call(t,e):!1},d.identity=Ue,d.indexOf=ze,d.isArguments=ve,d.isArray=Wn,d.isBoolean=function(t){return!0===t||!1===t||t&&"object"==typeof t&&dn.call(t)==M||!1},d.isDate=function(t){return t&&"object"==typeof t&&dn.call(t)==z||!1},d.isElement=function(t){return t&&1===t.nodeType||!1},d.isEmpty=function(t){var e=!0;if(!t)return e;var n=dn.call(t),r=t.length;return n==B||n==Y||(zn.argsClass?n==N:ve(t))||n==G&&"number"==typeof r&&xe(t.splice)?!r:(nr(t,function(){return e=!1}),e)},d.isEqual=function(t,e,n,r){return ue(t,e,"function"==typeof n&&ee(n,r,2))},d.isFinite=function(t){return $n(t)&&!Rn(parseFloat(t))},d.isFunction=xe,d.isNaN=function(t){return ke(t)&&t!=+t},d.isNull=function(t){return null===t},d.isNumber=ke,d.isObject=Se,d.isPlainObject=rr,d.isRegExp=function(t){return t&&H[typeof t]&&dn.call(t)==K||!1},d.isString=je,d.isUndefined=function(t){return"undefined"==typeof t},d.lastIndexOf=function(t,e,n){var r=t?t.length:0;for("number"==typeof n&&(r=(0>n?In(0,r+n):Tn(n,r-1))+1);r--;)if(t[r]===e)return r;return-1},d.mixin=Ve,d.noConflict=function(){return n._=hn,this},d.noop=Xe,d.now=lr,d.parseInt=cr,d.random=function(t,e,n){var r=null==t,a=null==e;return null==n&&("boolean"==typeof t&&a?(n=t,t=1):a||"boolean"!=typeof e||(n=e,a=!0)),r&&a&&(e=1),t=+t||0,a?(e=t,t=0):e=+e||0,n||t%1||e%1?(n=Nn(),Tn(t+n*(e-t+parseFloat("1e-"+((n+"").length-1))),e)):le(t,e)},d.reduce=Te,d.reduceRight=Fe,d.result=function(t,e){if(t){var n=t[e];return xe(n)?t[e]():n}},d.runInContext=g,d.size=function(t){var e=t?t.length:0;return"number"==typeof e?e:Gn(t).length},d.some=Be,d.sortedIndex=We,d.template=function(t,e,n){var r=d.templateSettings;t=ln(t||""),n=tr({},n,r);var a,o=tr({},n.imports,r.imports),r=Gn(o),o=Ce(o),i=0,l=n.interpolate||R,c="__p+='",l=un((n.escape||R).source+"|"+l.source+"|"+(l===L?E:R).source+"|"+(n.evaluate||R).source+"|$","g");t.replace(l,function(e,n,r,o,l,f){return r||(r=o),c+=t.slice(i,f).replace(I,u),n&&(c+="'+__e("+n+")+'"),l&&(a=!0,c+="';"+l+";\n__p+='"),r&&(c+="'+((__t=("+r+"))==null?'':__t)+'"),i=f+e.length,e}),c+="';",l=n=n.variable,l||(n="obj",c="with("+n+"){"+c+"}"),c=(a?c.replace(S,""):c).replace(j,"$1").replace(C,"$1;"),c="function("+n+"){"+(l?"":n+"||("+n+"={});")+"var __t,__p='',__e=_.escape"+(a?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+c+"return __p}";try{var f=nn(r,"return "+c).apply(h,o)}catch(s){throw s.source=c,s}return e?f(e):(f.source=c,f)},d.unescape=function(t){return null==t?"":ln(t).replace(Xn,me)},d.uniqueId=function(t){var e=++m;return ln(null==t?"":t)+e},d.all=Oe,d.any=Be,d.detect=Le,d.findWhere=Le,d.foldl=Te,d.foldr=Fe,d.include=Ee,d.inject=Te,Ve(function(){var t={};return nr(d,function(e,n){d.prototype[n]||(t[n]=e)}),t}(),!1),d.first=Me,d.last=function(t,e,n){var r=0,a=t?t.length:0;if("number"!=typeof e&&null!=e){var o=a;for(e=d.createCallback(e,n,3);o--&&e(t[o],o,t);)r++}else if(r=e,null==r||n)return t?t[a-1]:h;return p(t,In(0,a-r))},d.sample=function(t,e,n){return t&&"number"!=typeof t.length?t=Ce(t):zn.unindexedChars&&je(t)&&(t=t.split("")),null==e||n?t?t[le(0,t.length-1)]:h:(t=Ne(t),t.length=Tn(In(0,e),t.length),t)},d.take=Me,d.head=Me,nr(d,function(t,e){var n="sample"!==e;d.prototype[e]||(d.prototype[e]=function(e,r){var a=this.__chain__,o=t(this.__wrapped__,e,r);return a||null!=e&&(!r||n&&"function"==typeof e)?new y(o,a):o})}),d.VERSION="2.4.1",d.prototype.chain=function(){return this.__chain__=!0,this},d.prototype.toString=function(){return ln(this.__wrapped__)},d.prototype.value=Ze,d.prototype.valueOf=Ze,Zn(["join","pop","shift"],function(t){var e=fn[t];d.prototype[t]=function(){var t=this.__chain__,n=e.apply(this.__wrapped__,arguments);return t?new y(n,t):n}}),Zn(["push","reverse","sort","unshift"],function(t){var e=fn[t];d.prototype[t]=function(){return e.apply(this.__wrapped__,arguments),this}}),Zn(["concat","slice","splice"],function(t){var e=fn[t];d.prototype[t]=function(){return new y(e.apply(this.__wrapped__,arguments),this.__chain__)}}),zn.spliceObjects||Zn(["pop","shift","splice"],function(t){var e=fn[t],n="splice"==t;d.prototype[t]=function(){var t=this.__chain__,r=this.__wrapped__,a=e.apply(r,arguments);return 0===r.length&&delete r[0],t||n?new y(a,t):a}}),d}var h,d=[],y=[],m=0,v={},b=+new Date+"",_=75,w=40,x=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",S=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,C=/(__e\(.*?\)|\b__t\))\+'';/g,E=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O=/\w*$/,A=/^\s*function[ \n\r\t]+\w/,L=/<%=([\s\S]+?)%>/g,$=RegExp("^["+x+"]*0+(?=.$)"),R=/($^)/,D=/\bthis\b/,I=/['\n\r\t\u2028\u2029\\]/g,T="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),N="[object Arguments]",B="[object Array]",M="[object Boolean]",z="[object Date]",P="[object Error]",W="[object Function]",q="[object Number]",G="[object Object]",K="[object RegExp]",Y="[object String]",J={};J[W]=!1,J[N]=J[B]=J[M]=J[z]=J[q]=J[G]=J[K]=J[Y]=!0;var U={leading:!1,maxWait:0,trailing:!1},V={configurable:!1,enumerable:!1,value:null,writable:!1},X={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:!1},H={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Z={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},Q=H[typeof window]&&window||this,te=H[typeof exports]&&exports&&!exports.nodeType&&exports,ee=H[typeof module]&&module&&!module.nodeType&&module,ne=ee&&ee.exports===te&&te,re=H[typeof global]&&global;!re||re.global!==re&&re.window!==re||(Q=re);var ae=g();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Q._=ae,define(function(){return ae})):te&&ee?ne?(ee.exports=ae)._=ae:te._=ae:Q._=ae}).call(this);var App=function(){{var t=this;$(window).height()-200,$(window).width()}$(window).on("scroll",function(){var e=$(window).scrollTop();console.log("scrollTop",e),t.map&&(3700>e&&(t.fullMap&&t.fullMap!==!1||(t.na=!1,t.eu=!1,t.af=!1,t.as=!1,t.oc=!1,t.zoomToFullExtent())),e>=3700&&5300>e&&(t.na&&t.na!==!1||(t.na=!0,t.eu=!1,t.af=!1,t.northAmerica())),e>=5300&&7700>e&&(t.eu&&t.eu!==!1||(t.eu=!0,t.na=!1,t.af=!1,t.oc=!1,t.as=!1,t.europe())),e>=7700&&8400>e&&(t.af&&t.af!==!1||(t.af=!0,t.na=!1,t.eu=!1,t.oc=!1,t.as=!1,t.africa())),e>=8400&&9600>e&&(t.as&&t.as!==!1||(t.as=!0,t.af=!1,t.na=!1,t.eu=!1,t.oc=!1,t.asia())),e>=9600&&(t.oc&&t.oc!==!1||(t.oc=!0,t.as=!1,t.af=!1,t.na=!1,t.eu=!1,t.oceania())))}),this.countryStats={},this.totalDatasetCount=0,this.initMap(),this.orgChart(),this.monthlyChart()};App.prototype.zoomToFullExtent=function(){var t=new esri.geometry.Extent(-162.119312499968,-26.181787552107465,72.02131249996957,68.75760045155728,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.northAmerica=function(){console.log("set north america!");var t=new esri.geometry.Extent(-152,10,-35,58,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.europe=function(){console.log("set europe!");var t=new esri.geometry.Extent(-51,27,65,66,new esri.SpatialReference({wkid:4326}));
this.map.setExtent(t)},App.prototype.africa=function(){console.log("set europe!");var t=new esri.geometry.Extent(-48,-25,69,32,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.asia=function(){console.log("set asia!");var t=new esri.geometry.Extent(41,-6,160,49,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.oceania=function(){console.log("set oceania!");var t=new esri.geometry.Extent(91,-51,210,3,new esri.SpatialReference({wkid:4326}));this.map.setExtent(t)},App.prototype.generateStats=function(t){if(this.countryStats[t])$("."+t+"#org-count").html("Total Orgs: "+this.countryStats[t].visible.length.toLocaleString()),$("."+t+"#dataset-count").html("Datasets Shared: "+this.countryStats[t].datasets.toLocaleString());else{var e=this.map.getLayer("circles").graphics,n=[],r=0;_.each(e,function(t){self.map.extent.contains(t.geometry)===!0&&(r+=t.attributes.datasets,n.push(t))}),$("."+t+"#org-count").html("Total Orgs: "+n.length.toLocaleString()),$("."+t+"#dataset-count").html("Datasets Shared: "+r.toLocaleString()),console.log("Total orgs: ",n.length),console.log("Total Datasets: ",r),this.countryStats[t]={},this.countryStats[t].visible=n,this.countryStats[t].datasets=r}},App.prototype.initMap=function(){var t=this;require(["esri/map","dojo/request","esri/geometry/Circle","esri/symbols/SimpleFillSymbol","esri/graphic","esri/layers/GraphicsLayer","esri/geometry/Point","esri/SpatialReference","esri/geometry/webMercatorUtils","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/FeatureLayer","dojo/domReady!"],function(e,n,r,a,o,u,i,l,c){function f(t){var e={geometry:{x:t.geometry.x,y:t.geometry.y,spatialReference:{wkid:102100}},attributes:{title:t.attributes.title,datasets:t.attributes.datasets_count,url:t.attributes.url,groups:t.attributes.groups_count},symbol:{color:[241,196,15,128],size:Math.min(Math.round(t.attributes.datasets_count/100*40),50),angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSCircle",outline:{color:[230,126,34,200],width:1,type:"esriSLS",style:"esriSLSSolid"}}},n=new o(e);y.add(n)}function s(t){var e=t.graphic.attributes.datasets,n=t.graphic.attributes.title,r=t.graphic.attributes.groups;$(".org-title").html(n),$(".org-group-count").html("Open Data Groups: "+r),$(".org-dataset-count").html("Datasets: "+e)}function p(){}function g(e){var n={};n.geometry=e.geometry,n.symbol={},n.attributes={id:"selectedFeature",title:e.attributes.title},this.selectedFeature=e.attributes.title,n.symbol={color:[255,255,255,1],size:e.symbol.size-2,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSCircle",outline:{color:[255,255,255,255],width:2,type:"esriSLS",style:"esriSLSSolid"}};var r=new esri.Graphic(n);t.map.graphics.add(r)}function h(){var e=this.selectedFeature;$.each(t.map.graphics.graphics,function(n,r){r&&r.attributes&&"selectedFeature"===r.attributes.id&&r.attributes.title!==e&&t.map.graphics.remove(r)})}esriConfig.defaults.map.basemaps.dotted={baseMapLayers:[{url:"http://studio.esri.com/arcgis/rest/services/World/WorldBasemapWhite/MapServer"}],title:"dots"},t.map=new e("map-locations",{center:[-45.049,32.485],zoom:3,basemap:"dotted",smartNavigation:!1}),t.map.on("load",function(){t.map.disableScrollWheelZoom(),$("#loader-main").fadeOut("slow",function(){$("#scroll-help").addClass("bounceIn"),setTimeout(function(){$("#scroll-help").removeClass("bounceIn"),$("#scroll-help").addClass("pulse")},2e3)})});var d=new esri.layers.GraphicsLayer({id:"extentLayer"});t.map.addLayer(d);var y=new u({id:"circles"});t.map.addLayer(y),t.map.on("click",function(){}),window.map=t.map,y.on("mouse-over",function(t){g(t.graphic,"mouse-over"),s(t)}),y.on("click",function(t){p(t)}),y.on("mouse-out",function(t){h(t.graphic)}),n("data/explore-prod.json").then(function(e){var n,r=JSON.parse(e).sites;r.forEach(function(e){var a,o=e.default_extent.xmin+(e.default_extent.xmax-e.default_extent.xmin)/2,u=e.default_extent.ymin+(e.default_extent.ymax-e.default_extent.ymin)/2;if(e.default_extent.spatialReference)if(4326===e.default_extent.spatialReference.wkid){var i=c.lngLatToXY(o,u);a={x:i[0],y:i[1],type:"point",spatialReference:{latestWkid:3857,wkid:102100}}}else a={x:o,y:u,type:"point",spatialReference:{latestWkid:3857,wkid:102100}};else if(4326===e.default_extent.spatial_reference.wkid){var i=c.lngLatToXY(o,u);a={x:i[0],y:i[1],type:"point",spatialReference:{latestWkid:3857,wkid:102100}}}else a={x:o,y:u,type:"point",spatialReference:{latestWkid:3857,wkid:102100}};n={geometry:a,attributes:{title:e.title,url:e.url,created_at:e.created_at,updated_at:e.updated_at,"public":e.public,groups_count:e.groups_count,datasets_count:e.datasets_count}},f(n),t.totalDatasetCount=t.totalDatasetCount+parseInt(n.attributes.datasets_count);var l=r.length;$("#org-count").html(l)});var a=esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new dojo.Color([255,255,255]),.4),new dojo.Color([93,173,221,0]));_.each(r,function(t){extent=new esri.geometry.Extent(t.default_extent.xmin,t.default_extent.ymin,t.default_extent.xmax,t.default_extent.ymax,new esri.SpatialReference({wkid:102100}));var e=new esri.Graphic(extent,a,{name:t.title,url:t.url});d.add(e)})})})},App.prototype.orgChart=function(){function t(t){return t.frequency=+t.frequency,t}var e={top:20,right:40,bottom:30,left:60},n=$(window).width()-e.left-e.right,r=$(window).height()/2-e.top-e.bottom,a=d3.scale.ordinal().rangeRoundBands([0,n],.1),o=d3.scale.linear().range([r,0]),u=d3.svg.axis().scale(a).orient("bottom"),i=d3.svg.axis().scale(o).orient("left").ticks(5),l=d3.select("#org-chart").append("svg").attr("width",n+e.left+e.right).attr("height",r+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")");d3.tsv("data/org.tsv",t,function(t,e){a.domain(e.map(function(t){return t.letter})),o.domain([0,d3.max(e,function(t){return t.frequency})]),l.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(u),l.append("g").attr("class","y axis").call(i).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Count"),l.selectAll(".bar").data(e).enter().append("rect").attr("class","bar").attr("x",function(t){return a(t.letter)}).attr("width",a.rangeBand()).attr("y",function(t){return o(t.frequency)}).attr("height",function(t){return r-o(t.frequency)})})},App.prototype.monthlyChart=function(){var t={top:20,right:80,bottom:30,left:90},e=$(window).width()-t.left-t.right,n=$(window).height()/2-t.top-t.bottom,r=d3.time.format("%d-%b-%y").parse,a=d3.time.scale().range([0,e]),o=d3.scale.linear().range([n,0]),u=d3.svg.axis().scale(a).orient("bottom"),i=d3.svg.axis().scale(o).orient("left"),l=d3.svg.line().x(function(t){return a(t.date)}).y(function(t){return o(t.close)}),c=d3.select("#monthly-chart").append("svg").attr("width",e+t.left+t.right).attr("height",n+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");d3.tsv("data/line-data.tsv",function(t,e){e.forEach(function(t){t.date=r(t.date),t.close=+t.close}),a.domain(d3.extent(e,function(t){return t.date})),o.domain(d3.extent(e,function(t){return t.close})),c.append("g").attr("class","x axis").attr("transform","translate(0,"+n+")").call(u),c.append("g").attr("class","y axis").call(i).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Shared Datasets"),c.append("path").datum(e).attr("class","line").attr("d",l)})};