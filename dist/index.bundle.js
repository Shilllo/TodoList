(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"html {\n    height: 100%\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 350px 1fr;\n    grid-template-rows: 100px 1fr 50px;\n    min-height: 100%;\n    margin: 0px;\n    background: linear-gradient(to bottom, #8D6335 0%, #5C743D 60%, #0F7B6B 100%);\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nfooter > div {\n    display: flex;\n    gap: 5px;\n\n}\n\nheader > div > h4 {\n    margin: 0 auto 0 auto\n}\n\nheader > h1 {\n    margin: 0 auto 0 auto;\n    color: #DDEFBB;\n    font-weight: bolder;\n    font-size: 4ch;\n}\n\n#sidebar {\n    grid-area: 2 / 1 / 3 / 2;\n    padding: 10px;\n    height: 1fr;\n    display: flex;\n    flex-direction: column;\n    padding: 15px 5px 15px 5px;\n    gap: 10px\n}\n\n#defaultProjects, #customProjects {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n#defaultProjects > button, #customProjects > button {\n    height: 50px;\n\n}\n\n.project {\n    height: 35px;\n    background-color: rgb(99, 87, 23);\n    border-radius: 10%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n}\n\n.project:hover, .addProject:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n.addProject > svg {\n    width: 30px;\n    height: 30px;\n    fill: #DDEFBB;\n    align-self: center;\n}\n\n.addProject {\n    margin: auto auto 0 auto;\n    width: 190px;\n    height: 40px;\n    border-radius: 10%;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n}\n\n#sidebar > div:first-child {\n    font-size: 3.5ch;\n    color: #DDEFBB;\n    margin: 5px;\n    font-weight: bolder;\n}\n\nfooter {\n    background-color: rgb(71, 65, 65);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-area: 3 / 1 / 4 / 3;\n}\n\nfooter > div > svg {\n    width: 20px;\n    height: 20px;\n    align-self: center;\n}\n\n#content {\n    grid-area: 2 / 2 / 3 / 3;\n    height: 1fr;\n    padding: 15px;\n    display: flex;\n    gap: 10px;\n    padding: 15px;\n    flex-wrap: wrap;\n    padding-top: 65px\n}\n\n.block, #todoForm {\n    width: 200px;\n    height: 250px;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    /* height: fit-content; */\n    border-radius: 5%;\n}\n\n.buttons > button {\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n    width: 90px;\n}\n\n.buttons {\n    margin: 5px auto 5px auto;\n    display: flex;\n    gap: 10px;\n}\n\n.buttons > button:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n#content > div {\n    color: #DDEFBB;\n}\n\n.title {\n    font-weight: bolder;\n}\n\n.status {\n    background-color: rgb(173, 158, 70);\n    color: rgb(99, 87, 23);\n    height: 35px;\n    border-radius: 15px;\n    padding: 5px\n  }\n\n#todoForm > label, #projectForm > label {\n    color: #DDEFBB;\n}\n\n#todoForm > .buttons > button {\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n    width: 180px;\n} \n\n#todoForm > .buttons > button:hover, #projectForm > button:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n#projectForm {\n    height: 250px;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    height: fit-content;\n    border-radius: 5%;\n}\n\n#projectForm > button {\n    width: 164px;\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n}\n\ntextarea {\n    height: 60px\n}",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),o=n.n(r),a=n(659),i=n.n(a),s=n(56),c=n.n(s),u=n(540),d=n.n(u),l=n(113),h=n.n(l),m=n(208),f={};function g(t){let e=document.querySelector("#content");e.querySelectorAll(":scope > :not(:first-child)").forEach((t=>t.remove()));let n=JSON.parse(localStorage.getItem("Storage"))[t];if(n.length)for(let t=0;t<n.length;t++){let r=document.createElement("div");r.classList.add("block");let o=document.createElement("div");o.classList.add("title"),o.textContent=n[t].title;let a=document.createElement("div");a.classList.add("description"),a.textContent=n[t].description;let i=document.createElement("div");i.classList.add("date"),i.textContent=n[t].date;let s=document.createElement("select");s.classList.add("status"),s.setAttribute("id","status"),s.setAttribute("name","status");let c=document.createElement("option");c.text="Not started",c.value="notStarted",s.add(c);let u=document.createElement("option");u.text="In progress",u.value="inProgress",s.add(u);let d=document.createElement("option");d.text="Done",d.value="Done",s.add(d);let l=document.createElement("div");l.classList.add("buttons");let h=document.createElement("button");h.textContent="Remove",h.classList.add("removeBtn"),h.setAttribute("id",n[t].title),l.appendChild(h),r.appendChild(o),r.appendChild(a),r.appendChild(i),r.appendChild(s),r.appendChild(l),e.appendChild(r)}}function p(t,e){let n=document.createElement("button");n.textContent=t,n.classList.add("project");let r=t.split(" ").join("-");n.setAttribute("id",r),"Inbox"==t||"Today"==t||"Week"==t?document.querySelector("#defaultProjects").appendChild(n):document.querySelector("#customProjects").appendChild(n),e.createProject(t)}function b(t,e){let n=t.split(" ").join("-");document.querySelector(`#${n}`).addEventListener("click",(function(){g(t),e.refreshEvents(),document.querySelector("#projectHeader").textContent=`Projects: ${t}`}))}f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const M={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function k(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const P={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(j.matchPattern);if(!n)return null;const r=n[0],o=t.match(j.parsePattern);if(!o)return null;let a=j.valueCallback?j.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var j;const E={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=w[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>x[t],localize:M,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};let C={};function D(){return C}Math.pow(10,8);const q=6048e5,T=864e5;function W(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function F(t){const e=W(t);return e.setHours(0,0,0,0),e}function L(t){const e=W(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function N(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function O(t){const e=W(t);return function(t,e){const n=F(t),r=F(e),o=+n-L(n),a=+r-L(r);return Math.round((o-a)/T)}(e,function(t){const e=W(t),n=N(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function A(t,e){const n=D(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=W(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function Y(t){return A(t,{weekStartsOn:1})}function B(t){const e=W(t),n=e.getFullYear(),r=N(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Y(r),a=N(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=Y(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function H(t){const e=W(t),n=+Y(e)-+function(t){const e=B(t),n=N(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Y(n)}(e);return Math.round(n/q)+1}function z(t,e){const n=W(t),r=n.getFullYear(),o=D(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=N(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=A(i,e),c=N(t,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=A(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function I(t,e){const n=W(t),r=+A(n,e)-+function(t,e){const n=D(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=z(t,e),a=N(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),A(a,e)}(n,e);return Math.round(r/q)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},$={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const o=z(t,r),a=o>0?o:1-o;return"YY"===e?Q(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):Q(a,e.length)},R:function(t,e){return Q(B(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=I(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Q(o,e.length)},I:function(t,e,n){const r=H(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=O(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return Q(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return Q(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Q(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return J(r);case"XXXX":case"XX":return R(r);default:return R(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return J(r);case"xxxx":case"xx":return R(r);default:return R(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(r,":");default:return"GMT"+R(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(r,":");default:return"GMT"+R(r,":")}},t:function(t,e,n){return Q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return Q(t.getTime(),e.length)}};function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+Q(a,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):R(t,e)}function R(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const U=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},K={p:V,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return U(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",U(r,e)).replace("{{time}}",V(o,e))}},Z=/^D+$/,_=/^Y+$/,tt=["D","DD","YY","YYYY"];function et(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=W(t);return!isNaN(Number(n))}const nt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,at=/''/g,it=/[a-zA-Z]/;function st(t){const e=t.match(ot);return e?e[1].replace(at,"'"):t}var ct;(function(t){document.querySelector(".addProject").addEventListener("click",(function(){if(!document.querySelector("#projectForm")){let e=document.createElement("form");e.setAttribute("id","projectForm"),e.method="GET";let n=document.createElement("label");n.setAttribute("for","projectName"),n.textContent="Your project's title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","projectName");let o=document.createElement("button");o.type="button",o.textContent="Create",o.classList.add("createProject"),e.appendChild(n),e.appendChild(r),e.appendChild(o),document.querySelector("#sidebar").appendChild(e),o.addEventListener("click",(function(){if(document.querySelector("#projectName").value){let n=document.querySelector("#projectName").value.toString();p(n,t),b(n,t),t.refreshEvents(),e.remove()}})),document.querySelector("#projectForm").addEventListener("keypress",(function(n){if(13===n.keyCode&&(n.preventDefault(),document.querySelector("#projectName").value)){let n=document.querySelector("#projectName").value.toString();p(n,t),b(n,t),t.refreshEvents(),e.remove()}}))}}))})(ct=new class{constructor(){if(localStorage.getItem("Storage")){this.storage=JSON.parse(localStorage.getItem("Storage")),g("Inbox");let t=this,e=document.querySelector("#customProjects");for(let n in this.storage){if(!["Inbox","Today","Week"].includes(n)){let t=document.createElement("button");t.classList.add("project"),t.textContent=n;let r=n.split(" ").join("-");t.setAttribute("id",r),e.appendChild(t)}let r=n.split(" ").join("-");document.querySelector(`#${r}`).addEventListener("click",(function(){g(n),document.querySelector("#projectHeader").textContent=`Projects: ${n}`,t.refreshEvents()}))}document.querySelector("#projectHeader").textContent="Projects: Inbox"}else{this.storage={Inbox:[],Today:[],Week:[]},this.refreshLocalStorage(this.storage),g("Inbox"),this.refreshEvents();let t=this;for(let e in this.storage){let n=e.split(" ").join("-");document.querySelector(`#${n}`).addEventListener("click",(function(){g(e),document.querySelector("#projectHeader").textContent=`Projects: ${e}`,t.refreshEvents()}))}document.querySelector("#projectHeader").textContent="Projects: Inbox"}this.refreshEvents()}refreshLocalStorage(t){localStorage.setItem("Storage",JSON.stringify(t))}createProject(t){this.storage[t]=[],this.refreshLocalStorage(this.storage),g(t),this.refreshEvents()}createTodo(t,e){this.storage[t].push(e),this.refreshLocalStorage(this.storage),g(t),this.refreshEvents()}removeTodo(t,e){for(let n=0;n<this.storage[t].length;n++)this.storage[t][n].title==e&&(this.storage[t].splice(n,1),this.refreshLocalStorage(this.storage));g(t),this.refreshEvents()}get currentStorage(){return this.storage}set currentStorage(t){this.storage=t}refreshEvents(){let t=this,e=document.querySelectorAll(".removeBtn"),n=document.querySelector("#projectHeader").textContent.slice(10);for(let r=0;r<e.length;r++){let o=e[r].id;document.querySelector(`#${o}`).addEventListener("click",(function(){t.removeTodo(n,o)}))}}}),function(t){document.querySelector("#createTodo").addEventListener("click",(function(){let e=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#date").value;if(e&&n&&r){let o={title:e,description:n,date:r};document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#date").value="",t.createTodo(document.querySelector("#projectHeader").textContent.slice(10),o)}}))}(ct),console.log(function(t,e,n){const r=D(),o=n?.locale??r.locale??E,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=W(t);if(!et(s))throw new RangeError("Invalid time value");let c=e.match(rt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,K[e])(t,o.formatLong):t})).join("").match(nt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:st(t)};if($[e])return{isToken:!0,value:t};if(e.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return _.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return Z.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),tt.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,$[a[0]])(s,a,o.localize,u)})).join("")}(new Date(2014,1,11),"yyyy-MM-dd"))})()})();