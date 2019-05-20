(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],h=0,m=[];h<o.length;h++)i=o[h],s[i]&&m.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0cbb":function(e,t,a){"use strict";var r=a("e5cd"),s=a.n(r);s.a},"18d3":function(e,t,a){"use strict";var r=a("3ca9"),s=a.n(r);s.a},"25fd":function(e,t,a){"use strict";var r=a("f156"),s=a.n(r);s.a},3301:function(e,t,a){"use strict";var r=a("ca07"),s=a.n(r);s.a},"3ca9":function(e,t,a){},"4b4e":function(e,t,a){"use strict";var r=a("e225"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("a026"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Weather Service")]),a("router-view")],1)},n=[],i={name:"app"},o=i,c=(a("034f"),a("2877")),u=Object(c["a"])(o,s,n,!1,null,null,null),l=u.exports,h=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("City Search")]),a("message-container",{attrs:{messages:e.messages}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.getCities(t)}}},[a("p",[e._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e.showLoading?a("load-spinner"):e._e(),e.results&&e.results.list.length>0?a("ul",{staticClass:"cities"},e._l(e.results.list,function(t,r){return a("li",{key:r},[a("h2",[e._v(e._s(t.name)+", "+e._s(t.sys.country))]),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v("View Current Weather")])],1),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}}),a("p",[a("button",{staticClass:"save",on:{click:function(a){return e.saveCity(t)}}},[e._v("Save City to Favorites")])])],1)}),0):e._e()],1)},p=[],d=a("bc3a"),f=a.n(d);const v=f.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});v.interceptors.request.use(function(e){return e.params.APPID="YOUR_APPID_HERE",e.params.units="imperial",e},function(e){return Promise.reject(e)});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t,r){return a("div",{key:r,staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),a("br"),a("b",[e._v(e._s(t.main))])])}),0)},w=[],g={name:"WeatherSummary",data(){return{}},props:{weatherData:Array}},y=g,b=(a("0cbb"),Object(c["a"])(y,_,w,!1,null,"1fef7f2e",null)),D=b.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),a("dt",[e._v("Humidity")]),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),a("dt",[e._v("High")]),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),a("dt",[e._v("Low")]),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},k=[],x={name:"WeatherData",data(){return{}},props:{weatherData:Object}},O=x,j=(a("4b4e"),Object(c["a"])(O,C,k,!1,null,"5341d1b8",null)),L=j.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Loading...")]),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),a("div",{staticClass:"sk-cube2 sk-cube"}),a("div",{staticClass:"sk-cube4 sk-cube"}),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],P={name:"CubeSpinner"},S=P,E=(a("25fd"),Object(c["a"])(S,$,M,!1,null,"7323d745",null)),F=E.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-container"},[e.messages.length>0?a("ul",e._l(e.messages,function(e,t){return a("message-item",{key:t,attrs:{message:e}})}),1):e._e()])},q=[],W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),a("button",{on:{click:e.close}},[e._v("close")])])])},A=[];a("9ddc");var H={name:"MessageContainer",props:{message:Object},data(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created(){setTimeout(this.close,5e3)}},J=H,T=(a("a1ef"),Object(c["a"])(J,W,A,!1,null,"51c4bc44",null)),N=T.exports;a("9ddc");var R={name:"MessageContainer",props:{messages:Array},components:{"message-item":N}},U=R,V=(a("3301"),Object(c["a"])(U,I,q,!1,null,"7ce6d2ef",null)),G=V.exports,Y={name:"CitySearch",components:{"weather-summary":D,"weather-data":L,"load-spinner":F,"message-container":G},data(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created(){},methods:{saveCity:function(e){},getCities:function(){this.results=null,this.showLoading=!0,v.get("find",{params:{q:this.query}}).then(e=>{this.results=e.data,this.showLoading=!1}).catch(e=>{this.messages.push({type:"error",text:e.message}),this.showLoading=!1})}}},z=Y,B=(a("18d3"),Object(c["a"])(z,m,p,!1,null,"409f8224",null)),K=B.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e.showLoading?a("load-spinner"):e._e(),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},X=[],Z={name:"CurrentWeather",components:{"weather-summary":D,"weather-data":L,"load-spinner":F,"message-container":G},data(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created(){this.showLoading=!0,v.get("weather",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})}},ee=Z,te=(a("e5cf"),Object(c["a"])(ee,Q,X,!1,null,"ec66a78e",null)),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}})],1)}),0)],1):e._e(),e.showLoading?a("load-spinner"):e._e()],1)},se=[],ne={name:"Forecast",components:{"weather-summary":D,"weather-data":L,"message-container":G,"load-spinner":F},data(){return{weatherData:null,messages:[],query:"",showLoading:!1,messages:[]}},created(){this.showLoading=!0,v.get("forecast",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})},filters:{formatDate:function(e){let t=new Date(1e3*e);const a=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=t.getDate(),s=t.getMonth(),n=t.getHours();return 12===n?n="Noon":0===n?n="Midnight":n>12?n=n-12+"PM":n<12&&(n+="AM"),`${a[s]} ${r} @ ${n}`}}},ie=ne,oe=(a("6ccc"),Object(c["a"])(ie,re,se,!1,null,"ac0aae90",null)),ce=oe.exports;r["a"].use(h["a"]);var ue=new h["a"]({routes:[{path:"/",name:"CitySearch",component:K},{path:"/:cityId/current",name:"CurrentWeather",component:ae},{path:"/:cityId/forecast",name:"Forecast",component:ce}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:ue,template:"<App/>",components:{App:l}})},"64a9":function(e,t,a){},"6ccc":function(e,t,a){"use strict";var r=a("a7ff"),s=a.n(r);s.a},"6dce":function(e,t,a){},a1ef:function(e,t,a){"use strict";var r=a("d290"),s=a.n(r);s.a},a7ff:function(e,t,a){},ca07:function(e,t,a){},d290:function(e,t,a){},e225:function(e,t,a){},e5cd:function(e,t,a){},e5cf:function(e,t,a){"use strict";var r=a("6dce"),s=a.n(r);s.a},f156:function(e,t,a){}});
//# sourceMappingURL=app.12dba89a.js.map