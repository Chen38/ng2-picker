webpackJsonp([1],{100:function(t,e,i){"use strict";function n(t,e,i,n,o,s){var r=t-e,a=Math.abs(r)/i,h=s.deceleration,c=s.itemHeight,p=s.swipeBounceTime,l=s.bounceTime,d=s.swipeTime,u=s.wheel?4:15,f=t+a/h*(r<0?-1:1);return s.wheel&&c&&(f=Math.round(f/c)*c),f<n?(f=o?n-o/u*a:n,d=p-l):f>0&&(f=o?o/u*a:0,d=p-l),{destination:Math.round(f),duration:d}}e.a=n},154:function(t,e,i){e=t.exports=i(29)(!1),e.push([t.i,".wrapper {\n  padding: 0 18px;\n  color: #24292e; }\n  .wrapper h4 {\n    padding: 8px 0; }\n    .wrapper h4:not(:first-child) {\n      margin-top: 16px; }\n  .wrapper button {\n    background-color: rgba(27, 31, 35, 0.05);\n    border: none;\n    border-radius: 4px;\n    padding: 8px 12px;\n    font-size: 16px;\n    outline: none; }\n  .wrapper p {\n    font-size: 18px;\n    color: #4285f4;\n    height: 38px;\n    padding: 8px; }\n",""]),t.exports=t.exports.toString()},155:function(t,e,i){e=t.exports=i(29)(!1),e.push([t.i,"#better-picker-component .picker .picker-panel {\n  position: fixed;\n  z-index: 999;\n  bottom: 0;\n  width: 100%;\n  height: 245px;\n  padding: 12px 18px 0;\n  background: #fff;\n  will-change: transform;\n  -webkit-transform: translate3d(0, 250px, 0);\n  transform: translate3d(0, 250px, 0);\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n  text-align: center;\n  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.3); }\n  #better-picker-component .picker .picker-panel .picker-choose {\n    position: relative;\n    height: 32px;\n    line-height: 32px;\n    color: #444;\n    background-color: #fff;\n    font-size: 14px;\n    font-size: 14px;\n    letter-spacing: 0.32px;\n    z-index: 99; }\n  #better-picker-component .picker .picker-panel .confirm,\n  #better-picker-component .picker .picker-panel .cancel {\n    position: absolute;\n    width: 134px;\n    height: 100%; }\n  #better-picker-component .picker .picker-panel .confirm {\n    right: 10px;\n    color: #a0141a; }\n  #better-picker-component .picker .picker-panel .cancel {\n    left: 10px; }\n  #better-picker-component .picker .picker-panel .picker-content {\n    position: relative;\n    height: 100%; }\n  #better-picker-component .picker .picker-panel .mask-bottom,\n  #better-picker-component .picker .picker-panel .mask-top {\n    position: absolute;\n    z-index: 10;\n    width: 100%;\n    height: 37px;\n    pointer-events: none; }\n  #better-picker-component .picker .picker-panel .mask-bottom {\n    bottom: 32px;\n    background: linear-gradient(to top, #fff 0%, #fff 20%, rgba(255, 255, 255, 0) 91%); }\n  #better-picker-component .picker .picker-panel .mask-top {\n    top: 0;\n    background: linear-gradient(to bottom, #fff 0%, #fff 20%, rgba(255, 255, 255, 0) 91%); }\n\n#better-picker-component .picker .show {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n#better-picker-component .picker .wheel-wrapper {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  height: 100%; }\n  #better-picker-component .picker .wheel-wrapper:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    top: 37px;\n    left: 0;\n    width: 100%;\n    height: 26px;\n    border-top: 1px solid #dfdfdf;\n    border-bottom: 1px solid #dfdfdf;\n    z-index: -1; }\n\n#better-picker-component .picker .wheel-wrapper .wheel {\n  -ms-flex: 1 1 0.0000000001px;\n  -webkit-box-flex: 1;\n  flex: 1;\n  -ms-flex-preferred-size: 0.0000000001px;\n      flex-basis: 0.0000000001px;\n  width: 1%;\n  height: 100%;\n  overflow: hidden;\n  font-size: 12px;\n  z-index: 2; }\n  #better-picker-component .picker .wheel-wrapper .wheel .wheel-scroll {\n    margin-top: 37px;\n    line-height: 28px;\n    height: 100%; }\n\n#better-picker-component .picker .wheel-scroll .wheel-item {\n  height: 26px;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #4a4a4a; }\n\n#better-picker-component .picker .wheel-scroll .horizontal-rule {\n  display: inline-block;\n  width: 46px;\n  height: 1px;\n  background-color: #979797; }\n\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {\n  .border-1px::after,\n  .border-1px::before {\n    -webkit-transform: scaleY(0.7);\n    transform: scaleY(0.7);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n  .border-1px::after {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom; } }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {\n  .border-1px::after,\n  .border-1px::before {\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5); } }\n",""]),t.exports=t.exports.toString()},156:function(t,e){t.exports='<div class="wrapper">\n\t<h4>一级选择</h4>\n\t<button type="button" (click)="activePicker(1)">点我选择</button>\n\t<p>{{selectedBrand}}</p>\n\t<h4>二级联动选择</h4>\n\t<button type="button" (click)="activePicker(2)">点我选择</button>\n\t<p>{{selectedMovie}}</p>\n\t<h4>三级联动选择</h4>\n\t<button type="button" (click)="activePicker(3)">点我选择</button>\n\t<p>{{selectedArea}}</p>\n</div>\n\n<better-picker [data]="parentData" [show]="showPicker" [selectedIndex]="selectIndex" (onSelect)="onSelect($event)" (onChange)="onChange($event)"></better-picker>'},157:function(t,e){t.exports='<div id="better-picker-component">\n  <div class="picker" id="picker-any">\n    <div class="picker-panel panel-hook" [ngClass]="{\'show\': show}">\n      <div class="picker-choose choose-hook">\n        <span class="cancel cancel-hook" (click)="cancel()">取消</span>\n        <span class="confirm confirm-hook" (click)="confirm()">确定</span>\n      </div>\n      <div class="picker-content">\n        <div class="mask-top border-1px"></div>\n        <div class="mask-bottom border-1px"></div>\n        <div class="wheel-wrapper wheel-wrapper-hook">\n          <div class="wheel wheel-hook" *ngFor="let wheels of data">\n            <ul class="wheel-scroll wheel-scroll-hook">\n              <li class="wheel-item" *ngFor="let wheelsItem of wheels; let i = index">\n                <i *ngIf="wheelsItem === \'\'" class="horizontal-rule"></i>{{wheelsItem}}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},187:function(t,e,i){t.exports=i(79)},78:function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=78},79:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),o=i(84),s=i(86);i(88).a.production&&i.i(n.a)(),i.i(o.a)().bootstrapModule(s.a)},85:function(t,e,i){"use strict";var n=i(5),o=i(53),s=i(160);i.n(s);i.d(e,"a",function(){return h});var r=this&&this.__decorate||function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t){var e=this;this.http=t,this.initData={brands:[["","NIKE","ADIDAS","UNDER ARMOUR"]],movies:[[],[]],locations:[[],[],[]]},this.selectIndexs={1:[0],2:[0,0],3:[0,0,0]},this.firstCheck=0,this.parentData=this.initData.brands,this.location$=this.getData("location.json").subscribe(function(t){e.locationData=t,e.initData.locations=e.buildData(e.locationData)},function(t){console.error(t)},function(){e.location$.unsubscribe()}),this.movie$=this.getData("movie.json").subscribe(function(t){e.movieData=t,e.initData.movies=e.buildData(e.movieData)},function(t){console.error(t)},function(){e.movie$.unsubscribe()})}return t.prototype.activePicker=function(t){switch(this.type=t,this.selectIndex=this.selectIndexs[t],t){case 1:this.parentData=this.initData.brands;break;case 2:this.parentData=this.initData.movies;break;case 3:this.parentData=this.initData.locations}this.showPicker=!0},t.prototype.onSelect=function(t){var e=t.action,i=t.show,n=t.selectedValue,o=t.selectedIndex;if(console.log("action: "+e+", selectedValue: "+n+", selectedIndex: "+o),this.showPicker=i,this.selectIndexs[this.type]=o,"cancel"!==e){var s=n.join(" - ");switch(this.type){case 1:this.selectedBrand=s;break;case 2:this.selectedMovie=s;break;case 3:this.selectedArea=s}}},t.prototype.onChange=function(t){var e=t.wheel,i=t.index;console.log("wheel: "+e+", index: "+i),2===this.type&&this.changeConnectData(this.movieData,this.initData.movies,e,i),3===this.type&&this.changeConnectData(this.locationData,this.initData.locations,e,i)},t.prototype.changeConnectData=function(t,e,i,n){if(e[i+1]){0===i&&(this.firstCheck=n);var o=t[e[0][this.firstCheck]],s=n;if(o instanceof Array)return e[1]=o,void(this.parentData=e);1!==i&&(e[1]=Object.keys(o),s=0);var r=t[e[0][this.firstCheck]][e[1][s]];e[2]=r,this.parentData=e}},t.prototype.buildData=function(t){var e=[],i=this.getDataLength(t);if(1===i)return e.push(t),e;for(var n=[],o=t,s=0;s<i;s++){if(o instanceof Array){e[s]=o;break}e[s]=Object.keys(o),n[s]=e[s][0],o=o[n[s]]}return e},t.prototype.getDataLength=function(t){if(t instanceof Array)return 1;if(t instanceof Object){var e=Object.keys(t),i=t[e[0]];if(i instanceof Array)return 2;var n=Object.keys(i);if(t[e[0]][n[0]]instanceof Array)return 3}},t.prototype.getData=function(t){return this.http.get("assets/mock-data/"+t).map(function(t){return t.json()})},t}();h=r([i.i(n.f)({selector:"app",template:i(156),styles:[i(154)]}),a("design:paramtypes",["function"==typeof(c=void 0!==o.b&&o.b)&&c||Object])],h);var c},86:function(t,e,i){"use strict";var n=i(23),o=i(5),s=i(53),r=i(83),a=i(87),h=i(85);i.d(e,"a",function(){return p});var c=this&&this.__decorate||function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},p=function(){function t(){}return t}();p=c([i.i(o.b)({declarations:[h.a],imports:[n.a,s.a,r.a,a.a],bootstrap:[h.a]})],p)},87:function(t,e,i){"use strict";var n=i(5),o=i(31),s=i(89);i.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(){this.onSelect=new n.c,this.onChange=new n.c}return t.prototype.ngAfterViewInit=function(){this.data.length&&this.pickerInit()},t.prototype.ngOnChanges=function(t){var e=this;t.show.currentValue&&setTimeout(function(){e.picker.refresh(e.data,e.selectedIndex)},0)},t.prototype.pickerInit=function(){var t=this;this.picker=new s.a({container:"picker-any",data:this.data,selectedIndex:this.selectedIndex}),this.picker.on("picker.select",function(e,i){var n={action:"confirm",show:!1,selectedValue:e,selectedIndex:i};t.onSelect.emit(n)}),this.picker.on("picker.change",function(e,i){t.onChange.emit({wheel:e,index:i}),0===e&&(t.selectedIndex[1]=0,t.selectedIndex[2]=0),1===e&&(t.selectedIndex[2]=0),setTimeout(function(){t.picker.refresh(t.data,t.selectedIndex)},0)})},t.prototype.cancel=function(){var t=this;this.picker.hide(function(){var e={action:"cancel",show:!1,selectedValue:t.picker.selectedVal,selectedIndex:t.picker.selectedIndex};t.onSelect.emit(e)})},t.prototype.confirm=function(){this.picker.confirm()},t}();r([i.i(n.d)(),a("design:type",Array)],h.prototype,"data",void 0),r([i.i(n.d)(),a("design:type",Boolean)],h.prototype,"show",void 0),r([i.i(n.d)(),a("design:type",Array)],h.prototype,"selectedIndex",void 0),r([i.i(n.e)(),a("design:type","function"==typeof(p=void 0!==n.c&&n.c)&&p||Object)],h.prototype,"onSelect",void 0),r([i.i(n.e)(),a("design:type","function"==typeof(l=void 0!==n.c&&n.c)&&l||Object)],h.prototype,"onChange",void 0),h=r([i.i(n.f)({selector:"better-picker",template:i(157),styles:[i(155)]})],h);var c=function(){function t(){}return t}();c=r([i.i(n.b)({imports:[o.a],exports:[h],declarations:[h]})],c);var p,l},88:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={production:!1}},89:function(t,e,i){"use strict";var n=i(93),o=i(91),s=i(92),r=i(90);i.d(e,"a",function(){return h});var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),h=function(t){function e(e){var n=t.call(this)||this;return n.options={container:"",data:[],selectedIndex:null,showCls:"show"},i.i(s.a)(n.options,e),n.data=n.options.data,n.container=n.options.container,n.pickerEl=document.getElementById(n.container),n.wheelEl=n.pickerEl.getElementsByClassName("wheel-hook"),n.panelEl=n.pickerEl.getElementsByClassName("panel-hook")[0],n.scrollEl=n.pickerEl.getElementsByClassName("wheel-scroll-hook"),n._init(),n}return a(e,t),e.prototype._init=function(){if(this.selectedIndex=[],this.selectedVal=[],this.options.selectedIndex)this.selectedIndex=this.options.selectedIndex;else for(var t=0;t<this.data.length;t++)this.selectedIndex[t]=0;this.show(),this._bindEvent()},e.prototype._bindEvent=function(){i.i(r.a)(this.pickerEl,"touchmove",function(t){t.preventDefault()})},e.prototype._createWheel=function(t,e){var i=this;return this.wheels[e]=new n.a(t[e],{wheel:!0,selectedIndex:this.selectedIndex[e]}),function(t){i.wheels[t].on("scrollEnd",function(){var n=i.wheels[t].getSelectedIndex();i.selectedIndex[e]!==n&&(i.selectedIndex[e]=n,i.trigger("picker.change",t,n))})}(e),this.wheels[e]},e.prototype.show=function(t){if(this.wheels)for(var e=0;e<this.data.length;e++)this.wheels[e].enable(),this.wheels[e].wheelTo(this.selectedIndex[e]);else{this.wheels=[];for(var e=0;e<this.data.length;e++)this._createWheel(this.wheelEl,e)}t&&t()},e.prototype.refresh=function(t,e){this.wheelEl=this.pickerEl.getElementsByClassName("wheel-hook"),this.data=t,this.selectedIndex=e,this.selectedVal.length=0,this.wheels=null,this.wheels=[];for(var i=0;i<this.data.length;i++)this._createWheel(this.wheelEl,i);this.refill(t)},e.prototype.hide=function(t){var e=this;t&&t(),window.setTimeout(function(){for(var t=0;t<e.data.length;t++)e.wheels[t].disable()},500)},e.prototype.confirm=function(){for(var t=!1,e=0;e<this.data.length;e++){var i=this.wheels[e].getSelectedIndex();this.selectedIndex[e]=i;var n=null;this.data[e].length&&(n=this.data[e][i]),this.selectedVal[e]!==n&&(t=!0),this.selectedVal[e]=n}this.trigger("picker.select",this.selectedVal,this.selectedIndex),t&&this.trigger("picker.valuechange",this.selectedVal,this.selectedIndex)},e.prototype.refillColumn=function(t,e){var i=this.scrollEl[t],n=this.wheels[t];if(i&&n){var o=this.data[t];this.data[t]=e;var s=n.getSelectedIndex(),r=0;if(o.length)for(var a=o[s],h=0;h<e.length;h++)if(e[h]===a){r=h;break}return this.selectedIndex[t]=r,n.refresh(),n.wheelTo(r),r}},e.prototype.refill=function(t){var e=this,i=[];return t.length?(t.forEach(function(t,n){i[n]=e.refillColumn(n,t)}),i):i},e}(o.a)},90:function(t,e,i){"use strict";function n(t,e,i,n){t.addEventListener(e,i,!!n)}e.a=n},91:function(t,e,i){"use strict";var n=function(){function t(){this._events={}}return t.prototype.on=function(t,e,i){void 0===i&&(i=this),this._events[t]||(this._events[t]=[]),this._events[t].push([e,i])},t.prototype.once=function(t,e,i){function n(){this.off(t,n),o||(o=!0,e.apply(i,arguments))}void 0===i&&(i=this);var o=!1;this.on(t,n)},t.prototype.off=function(t,e){var i=this._events[t];if(i)for(var n=i.length;n--;)i[n][0]===e&&(i[n][0]=void 0)},t.prototype.trigger=function(t,e,i){var n=this._events[t];if(n)for(var o=n.length,s=n.slice(),r=0;r<o;r++){var a=s[r],h=a[0],c=a[1];h&&h.apply(c,[].slice.call(arguments,1))}},t}();e.a=n},92:function(t,e,i){"use strict";function n(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}e.a=n},93:function(t,e,i){"use strict";var n=i(98);i.d(e,"a",function(){return s});var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),s=function(t){function e(e,o){var s=t.call(this)||this;return s.wrapper="string"==typeof e?document.querySelector(e):e,s.scroller=s.wrapper.children[0],s.scrollerStyle=s.scroller.style,s.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,selectedIndex:0,rotate:25,wheel:!1,snap:!1,snapLoop:!1,snapThreshold:.1,swipeTime:2500,bounceTime:700,adjustTime:400,swipeBounceTime:1200,deceleration:.001,momentumLimitTime:300,momentumLimitDistance:15,resizePolling:60,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0},i.i(n.a)(s.options,o),s.translateZ=s.options.HWCompositing&&n.b?" translateZ(0)":"",s.options.useTransition=s.options.useTransition&&n.c,s.options.useTransform=s.options.useTransform&&n.d,s.options.eventPassthrough=!0===s.options.eventPassthrough?"vertical":s.options.eventPassthrough,s.options.preventDefault=!s.options.eventPassthrough&&s.options.preventDefault,s.options.scrollX="horizontal"!==s.options.eventPassthrough&&s.options.scrollX,s.options.scrollY="vertical"!==s.options.eventPassthrough&&s.options.scrollY,s.options.freeScroll=s.options.freeScroll&&!s.options.eventPassthrough,s.options.directionLockThreshold=s.options.eventPassthrough?0:s.options.directionLockThreshold,!0===s.options.tap&&(s.options.tap="tap"),s._init(),s.options.snap&&s._initSnap(),s.refresh(),s.options.snap||s.scrollTo(s.options.startX,s.options.startY),s.enable(),s}return o(e,t),e.prototype._init=function(){this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addEvents()},e.prototype._initSnap=function(){var t=this;if(this.currentPage={},this.options.snapLoop){var e=this.scroller.children;e.length>0&&(i.i(n.e)(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0)))}"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e,o,s,r,a,h,c,p=t.options.snapStepX||t.wrapperWidth,l=t.options.snapStepY||t.wrapperHeight,d=0,u=0,f=0;if(!0===t.options.snap)for(o=Math.round(p/2),s=Math.round(l/2);d>-t.scrollerWidth;){for(t.pages[u]=[],r=0,e=0;e>-t.scrollerHeight;)t.pages[u][r]={x:Math.max(d,t.maxScrollX),y:Math.max(e,t.maxScrollY),width:p,height:l,cx:d-o,cy:e-s},e-=l,r++;d-=p,u++}else for(h=t.options.snap,r=h.length,a=-1;u<r;u++)c=i.i(n.f)(h[u]),(0===u||c.left<=i.i(n.f)(h[u-1]).left)&&(f=0,a++),t.pages[f]||(t.pages[f]=[]),d=Math.max(-c.left,t.maxScrollX),e=Math.max(-c.top,t.maxScrollY),o=d-Math.round(c.width/2),s=e-Math.round(c.height/2),t.pages[f][a]={x:d,y:e,width:c.width,height:c.height,cx:o,cy:s},d>t.maxScrollX&&f++;var m=t.options.snapLoop?1:0;t.goToPage(t.currentPage.pageX||m,t.currentPage.pageY||0,0),t.options.snapThreshold%1==0?(t.snapThresholdX=t.options.snapThreshold,t.snapThresholdY=t.options.snapThreshold):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*t.options.snapThreshold),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*t.options.snapThreshold))}}),this.on("scrollEnd",function(){t.options.snapLoop&&(0===t.currentPage.pageX&&t.goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t.goToPage(1,t.currentPage.pageY,0))}),this.on("flick",function(){var e=t.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t.goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)})},e.prototype._nearestSnap=function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var i=0;if(Math.abs(t-this.absStartX)<this.snapThresholdX&&Math.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);for(var n=this.pages.length;i<n;i++)if(t>=this.pages[i][0].cx){t=this.pages[i][0].x;break}n=this.pages[i].length;for(var o=0;o<n;o++)if(e>=this.pages[0][o].cy){e=this.pages[0][o].y;break}return i===this.currentPage.pageX&&(i+=this.directionX,i<0?i=0:i>=this.pages.length&&(i=this.pages.length-1),t=this.pages[i][0].x),o===this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),e=this.pages[0][o].y),{x:t,y:e,pageX:i,pageY:o}},e.prototype._addEvents=function(){var t=n.g;this._handleEvents(t)},e.prototype._removeEvents=function(){var t=n.h;this._handleEvents(t)},e.prototype._handleEvents=function(t){var e=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(e,"mousemove",this),t(e,"mousecancel",this),t(e,"mouseup",this)),n.i&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(e,"touchmove",this),t(e,"touchcancel",this),t(e,"touchend",this)),t(this.scroller,n.j.transitionEnd,this)},e.prototype._start=function(t){var e=n.k[t.type];if((1===e||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==e)){if(this.initiated=e,!this.options.preventDefault||n.l||i.i(n.m)(t.target,this.options.preventDefaultException)||t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=+new Date,this.options.wheel&&(this.target=t.target),this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var o=this.getComputedPosition();this._translate(o.x,o.y),this.options.wheel?this.target=this.items[Math.round(-o.y/this.itemHeight)]:this.trigger("scrollEnd")}var s=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this.trigger("beforeScrollStart")}},e.prototype._move=function(t){if(this.enabled&&!this.destroyed&&n.k[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e=t.touches?t.touches[0]:t,i=e.pageX-this.pointX,o=e.pageY-this.pointY;this.pointX=e.pageX,this.pointY=e.pageY,this.distX+=i,this.distY+=o;var s=Math.abs(this.distX),r=Math.abs(this.distY),a=+new Date;if(!(a-this.endTime>this.options.momentumLimitTime&&r<this.options.momentumLimitDistance&&s<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(s>r+this.options.directionLockThreshold?this.directionLocked="h":r>=s+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);o=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);i=0}i=this.hasHorizontalScroll?i:0,o=this.hasVerticalScroll?o:0;var h=this.x+i,c=this.y+o;(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+i/3:h>0?0:this.maxScrollX),(c>0||c<this.maxScrollY)&&(c=this.options.bounce?this.y+o/3:c>0?0:this.maxScrollY),this.directionX=i>0?-1:i<0?1:0,this.directionY=o>0?-1:o<0?1:0,this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,c),a-this.startTime>this.options.momentumLimitTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var p=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,l=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,d=this.pointX-p,u=this.pointY-l;(d>document.documentElement.clientWidth-this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||u>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},e.prototype._end=function(t){if(this.enabled&&!this.destroyed&&n.k[t.type]===this.initiated&&(this.initiated=!1,this.options.preventDefault&&!i.i(n.m)(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchend",{x:this.x,y:this.y}),!this.resetPosition(this.options.bounceTime,n.n.bounce))){this.isInTransition=!1;var e=Math.round(this.x),o=Math.round(this.y);if(!this.moved){if(this.options.wheel){if(this.target&&"wheel-scroll"===this.target.className){var s=Math.abs(Math.round(o/this.itemHeight)),r=Math.round((this.pointY+i.i(n.o)(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[s+r]}this.scrollToElement(this.target,this.options.adjustTime,!0,!0,n.n.swipe)}else this.options.tap&&i.i(n.p)(t,this.options.tap),this.options.click&&i.i(n.q)(t);return void this.trigger("scrollCancel")}this.scrollTo(e,o),this.endTime=+new Date;var a=this.endTime-this.startTime,h=Math.abs(e-this.startX),c=Math.abs(o-this.startY);if(this._events.flick&&a<this.options.momentumLimitTime&&h<this.options.momentumLimitDistance&&c<this.options.momentumLimitDistance)return void this.trigger("flick");var p=0;if(this.options.momentum&&a<this.options.momentumLimitTime&&(c>this.options.momentumLimitDistance||h>this.options.momentumLimitDistance)){var l=this.hasHorizontalScroll?i.i(n.r)(this.x,this.startX,a,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:e,duration:0},d=this.hasVerticalScroll?i.i(n.r)(this.y,this.startY,a,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:o,duration:0};e=l.destination,o=d.destination,p=Math.max(l.duration,d.duration),this.isInTransition=1}else this.options.wheel&&(o=Math.round(o/this.itemHeight)*this.itemHeight,p=this.options.adjustTime);var u=n.n.swipe;if(this.options.snap){var f=this._nearestSnap(e,o);this.currentPage=f,p=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(e-f.x),1e3),Math.min(Math.abs(o-f.y),1e3)),300),e=f.x,o=f.y,this.directionX=0,this.directionY=0,u=n.n.bounce}if(e!==this.x||o!==this.y)return(e>0||e<this.maxScrollX||o>0||o<this.maxScrollY)&&(u=n.n.swipeBounce),void this.scrollTo(e,o,p,u);this.options.wheel&&(this.selectedIndex=Math.abs(this.y/this.itemHeight)||0),this.trigger("scrollEnd")}},e.prototype._resize=function(){var t=this;this.enabled&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},e.prototype._startProbe=function(){function t(){var o=e.getComputedPosition();e.trigger("scroll",o),e.isInTransition&&(e.probeTimer=i.i(n.t)(t))}i.i(n.s)(this.probeTimer),this.probeTimer=i.i(n.t)(t);var e=this},e.prototype._transitionTime=function(t){var e=this;if(void 0===t&&(t=0),this.scrollerStyle[n.j.transitionDuration]=t+"ms",this.options.wheel&&!n.l)for(var o=0,s=this.items;o<s.length;o++){var r=s[o];r.style[n.j.transitionDuration]=t+"ms"}!t&&n.l&&(this.scrollerStyle[n.j.transitionDuration]="0.001s",i.i(n.t)(function(){"0.0001ms"===e.scrollerStyle[n.j.transitionDuration]&&(e.scrollerStyle[n.j.transitionDuration]="0s")}))},e.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[n.j.transitionTimingFunction]=t,this.options.wheel&&!n.l)for(var e=0,i=this.items;e<i.length;e++){var o=i[e];o.style[n.j.transitionTimingFunction]=t}},e.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime,n.n.bounce)||(this.isInTransition=!1,this.trigger("scrollEnd")))},e.prototype._translate=function(t,e){if(this.options.useTransform?this.scrollerStyle[n.j.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.options.wheel&&!n.l)for(var i=0;i<this.items.length;i++){this.options.rotate,this.itemHeight}this.x=t,this.y=e},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.refresh=function(){this.wrapper.offsetHeight;this.wrapperWidth=parseInt(this.wrapper.style.width,10)||this.wrapper.clientWidth,this.wrapperHeight=parseInt(this.wrapper.style.height,10)||this.wrapper.clientHeight,this.scrollerWidth=parseInt(this.scroller.style.width,10)||this.scroller.clientWidth,this.scrollerHeight=parseInt(this.scroller.style.height,10)||this.scroller.clientHeight,this.options.wheel?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.items[0].clientHeight:0,void 0===this.selectedIndex&&(this.selectedIndex=this.options.selectedIndex),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=i.i(n.o)(this.wrapper),this.trigger("refresh"),this.resetPosition()},e.prototype.resetPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=n.n.bounce);var i=this.x;!this.hasHorizontalScroll||i>0?i=0:i<this.maxScrollX&&(i=this.maxScrollX);var o=this.y;return!this.hasVerticalScroll||o>0?o=0:o<this.maxScrollY&&(o=this.maxScrollY),(i!==this.x||o!==this.y)&&(this.scrollTo(i,o,t,e),!0)},e.prototype.wheelTo=function(t){this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},e.prototype.scrollBy=function(t,e,i,o){void 0===i&&(i=0),void 0===o&&(o=n.n.bounce),t=this.x+t,e=this.y+e,this.scrollTo(t,e,i,o)},e.prototype.scrollTo=function(t,e,i,o){void 0===o&&(o=n.n.bounce),this.isInTransition=this.options.useTransition&&i>0&&(t!==this.x||e!==this.y),i&&!this.options.useTransition||(this._transitionTimingFunction(o.style),this._transitionTime(i),this._translate(t,e),i&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(e>0?this.selectedIndex=0:e<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.abs(e/this.itemHeight)||0))},e.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},e.prototype.getCurrentPage=function(){return this.options.snap&&this.currentPage},e.prototype.scrollToElement=function(t,e,o,s,r){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||"wheel-item"===t.className)){var a=i.i(n.o)(t);a.left-=this.wrapperOffset.left,a.top-=this.wrapperOffset.top,!0===o&&(o=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=-t.parentNode.offsetTop),a.left-=o||0,a.top-=s||0,a.left=a.left>0?0:a.left<this.maxScrollX?this.maxScrollX:a.left,a.top=a.top>0?0:a.top<this.maxScrollY?this.maxScrollY:a.top,this.options.wheel&&(a.top=Math.round(a.top/this.itemHeight)*this.itemHeight),e=void 0===e||null===e||"auto"===e?Math.max(Math.abs(this.x-a.left),Math.abs(this.y-a.top)):e,this.scrollTo(a.left,a.top,e,r)}},e.prototype.getComputedPosition=function(){var t,e,i,o=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=o[n.j.transform].split(")")[0].split(", "),e=+(t[12]||t[4]),i=+(t[13]||t[5])):(e=+t.left.replace(/[^-\d.]/g,""),i=+t.top.replace(/[^-\d.]/g,"")),{x:e,y:i}},e.prototype.goToPage=function(t,e,i,o){void 0===o&&(o=n.n.bounce),t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:e<0&&(e=0);var s=this.pages[t][e].x,r=this.pages[t][e].y;i=void 0===i?this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(s-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):i,this.currentPage={x:s,y:r,pageX:t,pageY:e},this.scrollTo(s,r,i,o)},e.prototype.next=function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;i++,i>=this.pages.length&&this.hasVerticalScroll&&(i=0,n++),this.goToPage(i,n,t,e)},e.prototype.prev=function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;i--,i<0&&this.hasVerticalScroll&&(i=0,n--),this.goToPage(i,n,t,e)},e.prototype.destroy=function(){this._removeEvents(),this.destroyed=!0,this.trigger("destroy")},e.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":!this.enabled||t._constructed||/(SELECT|INPUT|TEXTAREA)/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation())}},e}(n.u)},94:function(t,e,i){"use strict";function n(t){return!1!==f&&("standard"===f?t:f+t.charAt(0).toUpperCase()+t.substr(1))}function o(t,e,i,n){t.addEventListener(e,i,{passive:!1,capture:!!n})}function s(t,e,i,n){t.removeEventListener(e,i,!!n)}function r(t){for(var e=0,i=0;t;)e-=t.offsetLeft,i-=t.offsetTop,t=t.offsetParent;return{left:e,top:i}}function a(t){if(t instanceof window.SVGElement){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function h(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1}function c(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)}function p(t){var e=t.target;if(!/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)){var i=window,n=document.createEvent(i.MouseEvent?"MouseEvents":"Event");n.initEvent("click",!0,!0),n._constructed=!0,e.dispatchEvent(n)}}function l(t,e){e.firstChild?d(t,e.firstChild):e.appendChild(t)}function d(t,e){e.parentNode.insertBefore(t,e)}e.f=o,e.g=s,e.l=r,i.d(e,"a",function(){return g}),i.d(e,"h",function(){return v}),i.d(e,"c",function(){return w}),i.d(e,"b",function(){return y}),i.d(e,"i",function(){return b}),i.d(e,"j",function(){return x}),e.e=a,e.k=h,e.m=c,e.n=p,e.d=l;var u=document.createElement("div").style,f=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==u[t[e]])return e;return!1}(),m=n("transform"),g=n("perspective")in u,v="ontouchstart"in window,w=!1!==m,y=n("transition")in u,b={transform:m,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin"),transitionEnd:n("transitionEnd")},x={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2}},95:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}}},96:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion)},97:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){function t(){this._events={}}return t.prototype.on=function(t,e,i){void 0===i&&(i=this),this._events[t]||(this._events[t]=[]),this._events[t].push([e,i])},t.prototype.once=function(t,e,i){function n(){this.off(t,n),o||(o=!0,e.apply(i,arguments))}void 0===i&&(i=this);var o=!1;this.on(t,n)},t.prototype.off=function(t,e){var i=this._events[t];if(i)for(var n=i.length;n--;)i[n][0]===e&&(i[n][0]=void 0)},t.prototype.trigger=function(t,e,i){var n=this._events[t];if(n)for(var o=n.length,s=n.slice(),r=0;r<o;r++){var a=s[r],h=a[0],c=a[1];h&&h.apply(c,[].slice.call(arguments,1))}},t}()},98:function(t,e,i){"use strict";var n=i(94);i.d(e,"b",function(){return n.a}),i.d(e,"c",function(){return n.b}),i.d(e,"d",function(){return n.c}),i.d(e,"e",function(){return n.d}),i.d(e,"f",function(){return n.e}),i.d(e,"g",function(){return n.f}),i.d(e,"h",function(){return n.g}),i.d(e,"i",function(){return n.h}),i.d(e,"j",function(){return n.i}),i.d(e,"k",function(){return n.j}),i.d(e,"m",function(){return n.k}),i.d(e,"o",function(){return n.l}),i.d(e,"p",function(){return n.m}),i.d(e,"q",function(){return n.n});var o=i(96);i.d(e,"l",function(){return o.a});var s=i(95);i.d(e,"n",function(){return s.a});var r=i(97);i.d(e,"u",function(){return r.a});var a=i(100);i.d(e,"r",function(){return a.a});var h=i(99);i.d(e,"a",function(){return h.a}),i.d(e,"s",function(){return h.b}),i.d(e,"t",function(){return h.c})},99:function(t,e,i){"use strict";function n(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}e.a=n,i.d(e,"c",function(){return o}),i.d(e,"b",function(){return s});var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}}(),s=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||function(t){window.clearTimeout(t)}}()}},[187]);