(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},24:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=(n(23),n(24),n(1)),u=n.n(o),s=n(3),l=n(5),f=n(14),d=n(15),p=n.n(d),m=n(10);n(17);function h(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(u.a.mark((function e(t){var n,a,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.prev=1,e.next=4,fetch(t,n);case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw a;case 10:throw e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var w=n(8),g=n.n(w);function b(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(g()("https://api.mapbox.com/",{path:"geocoding/v5/mapbox.places/".concat(t,".json"),queryParams:{language:"en_US",types:"place",access_token:String("pk.eyJ1IjoidmtyYnQiLCJhIjoiY2tmbDFnbzlxMWtkcjJxbnZ2djJlMHRiaSJ9.rJYEf3cR7dih785ZRxIm_g")}}));case 2:return n=e.sent,e.abrupt("return",n.features||[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(38);function k(e,t){window.localStorage&&("object"===typeof t&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t),window.dispatchEvent(new Event("storage-change")))}function j(e){if(window.localStorage){var t=window.localStorage.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch(n){return t}}}function y(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(g()("https://api.openweathermap.org",{path:"/data/2.5/weather",queryParams:{lat:String(t[1]),lon:String(t[0]),appid:String("64b5375c882f806010ce5dfa10adb705"),units:"metric"}}));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(e){return"".concat(e[0],";").concat(e[1])}function _(){return{weather:{},loadWeather:function(e){var t=this;return Object(s.a)(u.a.mark((function n(){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.weather[S(e)]?t.weather[S(e)].loading=!0:t.weather[S(e)]={loading:!0},n.next=3,y(e);case 3:if(a=n.sent){n.next=6;break}return n.abrupt("return");case 6:t.weather[S(e)]={updated:Date.now(),data:a,city:e,loading:!1};case 7:case"end":return n.stop()}}),n)})))()},loadAll:function(e){var t=this;return Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(e){return t.loadWeather(e)}))));case 1:case"end":return n.stop()}}),n)})))()},getMinCityTemperatureId:function(){var e=1/0,t=void 0;return Object.entries(this.weather).forEach((function(n){var a=Object(l.a)(n,2),r=a[0],i=a[1];i.data&&i.data.main&&e>i.data.main.temp&&(e=i.data.main.temp,t=r)})),t},getMaxCityTemperatureId:function(){var e=-1/0,t=void 0;return Object.entries(this.weather).forEach((function(n){var a=Object(l.a)(n,2),r=a[0],i=a[1];i.data&&i.data.main&&e<i.data.main.temp&&(e=i.data.main.temp,t=r)})),t}}}var C=n(6),O=r.a.createContext(null),N=function(e){var t=e.children,n=Object(C.b)(_);return r.a.createElement(O.Provider,{value:n},t)},I=function(){var e=r.a.useContext(O);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e};function W(e){return e.text}function J(e){return a.createElement("span",null,e.place_name)}var M=function(e){Object(f.a)(e);var t=a.useState([]),n=Object(l.a)(t,2),i=n[0],c=n[1],o=a.useState(""),d=Object(l.a)(o,2),m=d[0],h=d[1],v=a.useRef(""),w=r.a.useCallback((function(e){var t=j("cities")||[];return t.find((function(t){return t.join(";")===e.join(";")}))||(t.push(e),k("cities",t)),t}),[]),g=I(),E=a.useCallback(function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,v.current===t&&c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m]),y=a.useCallback((function(e){h(e),v.current=e}),[h]),x=a.useCallback((function(e){y(e.target.value)}),[h]),S=a.useCallback((function(e){var t=e.value;E(t)}),[E]),_=a.useCallback((function(){c([])}),[c]),C=a.useCallback((function(e,t){var n=t.suggestion;y(""),w(n.center),g.loadWeather(n.center)}),[y,w,g]),O={placeholder:"Enter city",value:m,onChange:x};return a.createElement(p.a,{suggestions:i,onSuggestionsFetchRequested:S,onSuggestionsClearRequested:_,getSuggestionValue:W,renderSuggestion:J,onSuggestionSelected:C,highlightFirstSuggestion:!0,inputProps:O})};function P(){var e=r.a.useState(j("cities")),t=Object(l.a)(e,2),n=t[0],a=t[1];return function(e,t,n,a,i){var c=r.a.useCallback(n,a);r.a.useEffect((function(){if(e)return e.addEventListener(t,c,i),function(){e.removeEventListener(t,c,i)}}),[e,t,c,i])}(window,"storage-change",(function(){a(j("cities"))}),[]),n}n(40);var R=function(e){var t=e.className,n=e.timestamp,r=a.useState(1),i=Object(l.a)(r,2),c=i[0],o=i[1];return a.useEffect((function(){var e=setInterval((function(){o(c+1)}),1e4);return function(){return clearInterval(e)}})),a.createElement("span",{className:t},function(e){var t=Date.now()-e;if(t<1e3)return"right now";var n=Math.floor(t/1e3);if(n<60)return n+" sec. ago";var a=Math.floor(t/6e4);if(a<60)return a+" min. ago";var r=new Date(e),i=["0"+r.getDate(),"0"+(r.getMonth()+1),""+r.getFullYear(),"0"+r.getHours(),"0"+r.getMinutes()].map((function(e){return e.slice(-2)}));return i.slice(0,3).join(".")+" "+i.slice(3).join(":")}(n))},A=n(16),T=n.n(A),D=Object(C.a)((function(e){var t=e.className,n=e.city,i=e.min,c=e.max,o=function(e){return I().weather[S(e)]}(n),u=function(e){var t={};if(!e)return t;if(e.data){var n=e.data,a=n.wind,r=n.main,i=n.weather,c=n.name;t.wind=a,t.main=r,t.name=c,t.updated=e.updated,i[0]&&(t.icon=i[0].icon,t.description=i[0].icon)}return t}(o),s=r.a.useCallback((function(e){var t=(j("cities")||[]).filter((function(t){return t.join(";")!==e.join(";")}));return k("cities",t),t}),[]),l=a.useCallback((function(){s(n)}),[s,n]),f=o&&o.loading;return console.log(Object(m.a)({},o)),a.createElement("div",{className:T()("weather",t,{weather__min:i,weather__max:c})},a.createElement("button",{className:"weather__remove",onClick:l}),a.createElement("div",{className:"weather__title"},u.icon&&a.createElement("img",{className:"weather__icon",src:"http://openweathermap.org/img/wn/".concat(u.icon,"@2x.png"),alt:u.description}),a.createElement("h2",null,u.name," ",u.main&&u.main.temp," ",f&&a.createElement("span",{className:"weather__spin"}))),a.createElement("div",{className:"weather__description"},u.wind&&a.createElement("div",{className:"weather__data"},a.createElement("div",{style:{transform:"rotate(".concat(u.wind.deg,"deg)")},className:"weather__arrow"}),a.createElement("span",null,u.wind.speed," m/s"),u.main&&a.createElement(a.Fragment,null,"\xa0|\xa0",a.createElement("span",null,u.main.pressure," hPa"),"\xa0|\xa0",a.createElement("span",null,u.main.humidity,"%"))),u.updated&&a.createElement(R,{timestamp:u.updated,className:"weather__updated"})))})),F=Object(C.a)((function(){var e=P(),t=I();r.a.useEffect((function(){t.loadAll(e)}),[]),r.a.useEffect((function(){var n=setInterval((function(){t.loadAll(e)}),3e5);return function(){return clearInterval(n)}}),[e]);var n=t.getMinCityTemperatureId(),a=t.getMaxCityTemperatureId();return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(M,null)),r.a.createElement("main",null,e.map((function(e){return r.a.createElement(D,{className:"block",min:S(e)===n,max:S(e)===a,key:e[0]+e[1],city:e})}))))})),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(N,null,r.a.createElement(F,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.96afb16b.chunk.js.map