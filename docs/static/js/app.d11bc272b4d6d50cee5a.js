webpackJsonp([1],{"6A3X":function(e,t){},"95lg":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("Weather Service")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},r,!1,function(e){a("f1wb")},null,null).exports,i=a("/ocq"),o=a("//Fk"),c=a.n(o),u=a("mtWM"),h=a.n(u).a.create({baseURL:"//api.openweathermap.org/data/2.5/"});h.interceptors.request.use(function(e){return e.params.APPID="YOUR_APPID_HERE",e.params.units="imperial",e},function(e){return c.a.reject(e)});var m={name:"WeatherSummary",data:function(){return{}},props:{weatherData:Array}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t){return a("div",{staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(t.main))])])}))},staticRenderFns:[]};var v=a("VU/8")(m,d,!1,function(e){a("Vo5k")},"data-v-43f39a54",null).exports,_={name:"WeatherData",data:function(){return{}},props:{weatherData:Object}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e._v(" "),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),e._v(" "),a("dt",[e._v("Humidity")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),e._v(" "),a("dt",[e._v("High")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),e._v(" "),a("dt",[e._v("Low")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},staticRenderFns:[]};var p=a("VU/8")(_,l,!1,function(e){a("es4A")},"data-v-5341d1b8",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Loading...")]),this._v(" "),t("div",{staticClass:"sk-folding-cube"},[t("div",{staticClass:"sk-cube1 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube2 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube4 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube3 sk-cube"})])])}]};var w=a("VU/8")({name:"CubeSpinner"},f,!1,function(e){a("Ysos")},"data-v-7323d745",null).exports;a("6A3X");var g={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[t("li",{directives:[{name:"show",rawName:"v-show",value:this.showMessage,expression:"showMessage"}],class:[this.message.type,"message"]},[this._v("\n    "+this._s(this.message.text)+"\n    "),t("button",{on:{click:this.close}},[this._v("close")])])])},staticRenderFns:[]};var D=a("VU/8")(g,y,!1,function(e){a("wtoV")},"data-v-51c4bc44",null).exports;a("6A3X");var b={name:"MessageContainer",props:{messages:Array},components:{"message-item":D}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"message-container"},[this.messages.length>0?t("ul",this._l(this.messages,function(e,a){return t("message-item",{key:a,attrs:{message:e}})})):this._e()])},staticRenderFns:[]};var F=a("VU/8")(b,C,!1,function(e){a("jDko")},"data-v-7ce6d2ef",null).exports,k={name:"CitySearch",components:{"weather-summary":v,"weather-data":p,"load-spinner":w,"message-container":F},data:function(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created:function(){},methods:{saveCity:function(e){},getCities:function(){var e=this;this.results=null,this.showLoading=!0,h.get("find",{params:{q:this.query}}).then(function(t){e.results=t.data,e.showLoading=!1}).catch(function(t){e.messages.push({type:"error",text:t.message}),e.showLoading=!1})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("City Search")]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.getCities(t)}}},[a("p",[e._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris, TX"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e._v(" "),e.showLoading?a("load-spinner"):e._e(),e._v(" "),e.results&&e.results.list.length>0?a("ul",{staticClass:"cities"},e._l(e.results.list,function(t){return a("li",[a("h2",[e._v(e._s(t.name)+", "+e._s(t.sys.country))]),e._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v("View Current Weather")])],1),e._v(" "),a("weather-summary",{attrs:{weatherData:t.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:t.main}}),e._v(" "),a("p",[a("button",{staticClass:"save",on:{click:function(a){e.saveCity(t)}}},[e._v("Save City to Favorites")])])],1)})):e._e()],1)},staticRenderFns:[]};var L=a("VU/8")(k,x,!1,function(e){a("eFSM")},"data-v-7defa6ea",null).exports,M={name:"CurrentWeather",components:{"weather-summary":v,"weather-data":p,"load-spinner":w,"message-container":F},data:function(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created:function(){var e=this;this.showLoading=!0,h.get("weather",{params:{id:this.$route.params.cityId}}).then(function(t){e.showLoading=!1,e.weatherData=t.data}).catch(function(t){e.showLoading=!1,e.messages.push({type:"error",text:t.message})})}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e._v(" "),e.showLoading?a("load-spinner"):e._e(),e._v(" "),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},staticRenderFns:[]};var A=a("VU/8")(M,V,!1,function(e){a("95lg")},"data-v-53a96583",null).exports,$=a("bOdI"),E=a.n($),I={name:"Forecast",components:{"weather-summary":v,"weather-data":p,"message-container":F,"load-spinner":w},data:function(){return E()({weatherData:null,messages:[],query:"",showLoading:!1},"messages",[])},created:function(){var e=this;this.showLoading=!0,h.get("forecast",{params:{id:this.$route.params.cityId}}).then(function(t){e.showLoading=!1,e.weatherData=t.data}).catch(function(t){e.showLoading=!1,e.messages.push({type:"error",text:t.message})})},filters:{formatDate:function(e){var t=new Date(1e3*e),a=t.getDate(),s=t.getMonth(),r=t.getHours();return 12===r?r="Noon":0===r?r="Midnight":r>12?r=r-12+"PM":r<12&&(r+="AM"),["January","February","March","April","May","June","July","August","September","October","November","December"][s]+" "+a+" @ "+r}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e._v(" "),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),e._v(" "),a("weather-summary",{attrs:{weatherData:t.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:t.main}})],1)}))],1):e._e(),e._v(" "),e.showLoading?a("load-spinner"):e._e()],1)},staticRenderFns:[]};var W=a("VU/8")(I,R,!1,function(e){a("xgcF")},"data-v-7c113da4",null).exports;s.a.use(i.a);var q=new i.a({routes:[{path:"/",name:"CitySearch",component:L},{path:"/:cityId/current",name:"CurrentWeather",component:A},{path:"/:cityId/forecast",name:"Forecast",component:W}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:q,template:"<App/>",components:{App:n}})},Vo5k:function(e,t){},Ysos:function(e,t){},eFSM:function(e,t){},es4A:function(e,t){},f1wb:function(e,t){},jDko:function(e,t){},wtoV:function(e,t){},xgcF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d11bc272b4d6d50cee5a.js.map