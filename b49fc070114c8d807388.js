(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(17),o=r(32),i=r(76),s=r(15),l=(r(91),function(){return(l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)}),c={data:[],loading:!1},u=Object(s.combineReducers)({recordsReducer:function(t,e){switch(void 0===t&&(t=c),e.type){case"REQUEST_RECORDS":return l({},t,{loading:e.loading});case"RECEIVE_RECORDS":return l({},t,{loading:e.loading,data:e.data});case"CLEAR_RECORDS":return l({},t,{data:e.data});default:return t}}}),p=r(57);var d,f,m,h=r(144),y=r(145),b=r(146),g=r(41),k=r(18),w=[{id:"artist",label:k.artist,sortable:!0},{id:"title",label:k.title,sortable:!0},{id:"new",label:k.new,sortable:!1,format:"replace-boolean"},{id:"streams",label:k.streams,sortable:!0,format:"round"},{id:"progress",label:k.progress,sortable:!0,format:"signum"},{id:"link",label:k.link,sortable:!1,format:"link"}],v=r(58),E=function(t,e,r,n){return new(r||(r=Promise))(function(a,o){function i(t){try{l(n.next(t))}catch(t){o(t)}}function s(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){t.done?a(t.value):new r(function(e){e(t.value)}).then(i,s)}l((n=n.apply(t,e||[])).next())})},O=function(t,e){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},S=function(t,e,r,n){return E(void 0,void 0,void 0,function(){var a;return O(this,function(o){switch(o.label){case 0:return a=v.sort(function(t,e){return function(r,n){if(!r.hasOwnProperty(t)||!n.hasOwnProperty(t))return 0;var a="string"==typeof r[t]?r[t].toUpperCase():r[t],o="string"==typeof n[t]?n[t].toUpperCase():n[t];"id"===t&&(a=parseInt(r[t]),o=parseInt(n[t]));var i=0;return a>o?i=1:a<o&&(i=-1),e?i:-1*i}}(t,e)).slice(n,r),[4,new Promise(function(t){setTimeout(function(){t(a)},500)})];case 1:return[2,o.sent()]}})})},x=function(t,e,r,n){return new(r||(r=Promise))(function(a,o){function i(t){try{l(n.next(t))}catch(t){o(t)}}function s(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){t.done?a(t.value):new r(function(e){e(t.value)}).then(i,s)}l((n=n.apply(t,e||[])).next())})},R=function(t,e){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},_=function(t,e,r){t({type:"RECEIVE_RECORDS",loading:!1,data:r.concat(e)})},C=r(74),B=r(70),D=r(72),j=r(43),A=r(44),I=r(77),L=r(73),P=r(42),U=(r(94),r(25)),T=(d=function(t,e){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}d(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),N=function(t){function e(e){var r=t.call(this,e)||this;return r.state=e.defaultState?e.defaultState:{sortBy:"",asc:!1},r.handleSort=r.handleSort.bind(r),r.handleLoad=r.handleLoad.bind(r),r}return T(e,t),e.prototype.handleLoad=function(){var t=this.state,e=t.sortBy,r=t.asc,n=this.props.body;this.props.onLoad(n.length+5,n,e,r)},e.prototype.handleSort=function(t,e){var r=this.state,n=r.sortBy,a=r.asc,o=this.props,i=o.body,s=o.loading,l=o.clearBody,c=o.onLoad,u=o.onSort,p=t===n?!a:a;e&&!s&&(this.setState({sortBy:t,asc:p}),l(),c(i.length,[],t,p),u&&u(t,p))},e.formatCell=function(t,e){switch(e){case"round":return n.createElement("span",null,Math.round(t));case"signum":var r=function(t){return t?t<0?"negative":"positive":"zero"}(t);return n.createElement("span",{className:"color-"+r},t);case"replace-boolean":return n.createElement("span",null,t?U.bool_true:U.bool_false);case"link":return n.createElement("span",null,n.createElement(P.a,{variant:"outlined",target:"_blank",href:t},U.open));default:return n.createElement("span",null,t)}},e.prototype.render=function(){var t=this,r=this.props,a=r.head,o=r.loading,i=r.body,s=this.state,l=s.sortBy,c=s.asc,u=100/a.length+"%",p=n.createElement(B.a,null,n.createElement(j.a,null,a.map(function(e,r){return n.createElement(A.a,{key:r,style:{width:u}},n.createElement(I.a,{active:l===e.id,direction:c?"asc":"desc",onClick:function(){return t.handleSort(e.id,e.sortable)}},e.label))}))),d=n.createElement(D.a,null,i.map(function(t,r){return n.createElement(j.a,{key:r},a.map(function(r,a){return n.createElement(A.a,{key:a,style:{width:u}},e.formatCell(t[r.id],r.format))}))})),f=n.createElement("div",{className:"table__load-button-container"},o?n.createElement(L.a,null):n.createElement(P.a,{variant:"contained",color:"primary",onClick:this.handleLoad},U.load_more));return n.createElement("div",{className:"table"},n.createElement(C.a,null,p,d),f)},e}(n.Component),M=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Q=function(){return(Q=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},G=function(t){function e(e){var r=t.call(this,e)||this;return r.defaultSorting=r.checkUrl(),r.changeUrlOnSort=r.changeUrlOnSort.bind(r),r}return M(e,t),e.prototype.componentDidMount=function(){var t=this.defaultSorting,e=t.sortBy,r=t.asc;this.props.loadRecords(5,[],e,r)},e.prototype.changeUrlOnSort=function(t,e){this.props.history.push("#"+g.stringify({sortBy:t,asc:e}))},e.prototype.checkUrl=function(){var t=this.props.location.hash.replace("#",""),e=g.parse(t),r=e.sortBy,n=e.asc;return r&&n?{sortBy:r.toString(),asc:"true"===n}:{sortBy:"",asc:!1}},e.prototype.render=function(){var t=this.props,e=t.data,r=t.loading,a=t.loadRecords,o=t.clearRecords,i=this.changeUrlOnSort,s=this.defaultSorting;return n.createElement("div",{className:"app"},n.createElement(N,{head:w,body:e,loading:r,onLoad:a,clearBody:o,onSort:i,defaultState:s}))},e}(n.Component),z=Object(o.b)(function(t){return Q({},t.recordsReducer)},function(t){return{loadRecords:function(e,r,n,a){return t(function(t,e,r,n){return void 0===t&&(t=5),void 0===e&&(e=[]),void 0===r&&(r="streams"),void 0===n&&(n=!1),function(a){return x(void 0,void 0,void 0,function(){var o;return R(this,function(i){switch(i.label){case 0:return a({type:"REQUEST_RECORDS",loading:!0}),[4,S(r,n,t,e.length)];case 1:return o=i.sent(),_(a,o,e),[2]}})})}}(e,r,n,a))},clearRecords:function(){return t({type:"CLEAR_RECORDS",data:[]})}}})(G),J=Object(i.a)(),V=(m=Object(s.applyMiddleware)(p.a),Object(s.createStore)(u,f,m));a.render(n.createElement(o.a,{store:V},n.createElement(h.a,{history:J},n.createElement(y.a,null,n.createElement(b.a,{path:"/",component:z})))),document.getElementById("root"))},18:function(t){t.exports={artist:"Исполнитель",title:"Песня",new:"Первый раз в чарте",streams:"Прослушиваний (тыс.)",progress:"Изменение строчки в чарте",link:"ссылка"}},25:function(t){t.exports={bool_true:"да",bool_false:"нет",load_more:"ещё",open:"открыть"}},58:function(t){t.exports=[{id:1,artist:"Kazka",title:"Плакала",new:!1,streams:30.028,progress:5,link:"https://music.yandex.ru/album/5933974/track/44279380"},{id:2,artist:"Макс Барских",title:"БЕРЕГА",new:!1,streams:20.443,progress:2,link:"https://music.yandex.ru/album/6025636/track/45249062"},{id:3,artist:"Тима Белорусских",title:"Мокрые кроссы",new:!0,streams:17.711,progress:0,link:"https://music.yandex.ru/album/5663315/track/43052381"},{id:4,artist:"Imagine Dragons",title:"Natural",new:!0,streams:15.3,progress:0,link:"https://music.yandex.ru/album/6017186/track/42197229"},{id:5,artist:"Dynoro, Gigi D'Agostino",title:"In My Mind",new:!1,streams:14.662,progress:-3,link:"https://music.yandex.ru/album/5415170/track/39257277"},{id:6,artist:"Лёша Свик",title:"Малиновый свет",new:!0,streams:14.304,progress:0,link:"https://music.yandex.ru/album/5512389/track/41883693"},{id:7,artist:"Queen",title:"Bohemian Rhapsody",new:!1,streams:13.946,progress:1,link:"https://music.yandex.ru/album/227551/track/1710808"},{id:8,artist:"Rauf & Faik",title:"Детство",new:!1,streams:12.441,progress:-1,link:"https://music.yandex.ru/album/5794742/track/43526313"},{id:9,artist:"Тима Белорусских",title:"Незабудка",new:!0,streams:12.104,progress:1,link:"https://music.yandex.ru/album/5916387/track/44184116"},{id:10,artist:"Queen",title:"Another One Bites The Dust",new:!1,streams:12.066,progress:-1,link:"https://music.yandex.ru/album/227551/track/1710810"},{id:11,artist:"Вера Брежнева",title:"Любите друг друга",new:!1,streams:11.77,progress:0,link:"https://music.yandex.ru/album/6103016/track/45464329"},{id:12,artist:"Imagine Dragons",title:"Zero",new:!1,streams:11.242,progress:0,link:"https://music.yandex.ru/album/6017186/track/43491391"},{id:13,artist:"LOBODA",title:"SuperSTAR",new:!0,streams:10.797,progress:1,link:"https://music.yandex.ru/album/5442673/track/41509811"},{id:14,artist:"Rompasso",title:"Ignis",new:!1,streams:10.71,progress:-2,link:"https://music.yandex.ru/album/5519281/track/41918198"},{id:15,artist:"EIGHTEEN",title:"Вода",new:!1,streams:10.589,progress:0,link:"https://music.yandex.ru/album/5975032/track/44524064"},{id:16,artist:"#2Маши",title:"Мама, я танцую",new:!0,streams:10.254,progress:0,link:"https://music.yandex.ru/album/6055011/track/45130892"},{id:17,artist:"LOBODA",title:"INSTADRAMA",new:!1,streams:10.214,progress:1,link:"https://music.yandex.ru/album/6022016/track/44895831"},{id:18,artist:"Егор Крид feat. Филипп Киркоров",title:"Цвет настроения чёрный",new:!1,streams:9.502,progress:0,link:"https://music.yandex.ru/album/5740441/track/43202169"},{id:19,artist:"Queen",title:"We Will Rock You",new:!1,streams:9.323,progress:0,link:"https://music.yandex.ru/album/227551/track/1710811"},{id:20,artist:"Rita Ora",title:"Your Song",new:!0,streams:8.992,progress:0,link:"https://music.yandex.ru/album/4415052/track/35408127"}]},94:function(t,e,r){}},[[139,1,2]]]);