"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8227],{8227:(x,b,r)=>{r.r(b),r.d(b,{EstadisticasPageModule:()=>Y});var E=r(177),v=r(4341),u=r(3819),L=r(2146),a=r(4438),l=r(163),g=r(467),p=r(1413),y=r(6129);class f extends p.B{constructor(i=1/0,n=1/0,e=y.U){super(),this._bufferSize=i,this._windowTime=n,this._timestampProvider=e,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,n)}next(i){const{isStopped:n,_buffer:e,_infiniteTimeWindow:t,_timestampProvider:o,_windowTime:h}=this;n||(e.push(i),!t&&e.push(o.now()+h)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(i),{_infiniteTimeWindow:e,_buffer:t}=this,o=t.slice();for(let h=0;h<o.length&&!i.closed;h+=e?1:2)i.next(o[h]);return this._checkFinalizedStatuses(i),n}_trimBuffer(){const{_bufferSize:i,_timestampProvider:n,_buffer:e,_infiniteTimeWindow:t}=this,o=(t?1:2)*i;if(i<1/0&&o<e.length&&e.splice(0,e.length-o),!t){const h=n.now();let d=0;for(let c=1;c<e.length&&e[c]<=h;c+=2)d=c;d&&e.splice(0,d+1)}}}var C=r(8359),S=r(3236),D=r(1985),I=r(9974),O=r(4360),G=r(8750),A=r(1584);var V=r(5558);class U{constructor(){this.subject=new f(1),this.subscriptions=new C.yU}doFilter(i){this.subject.next(i)}dispose(){this.subscriptions.unsubscribe()}notEmpty(i,n){this.subscriptions.add(this.subject.subscribe(e=>{if(e[i]){const t=e[i].currentValue;null!=t&&n(t)}}))}has(i,n){this.subscriptions.add(this.subject.subscribe(e=>{e[i]&&n(e[i].currentValue)}))}notFirst(i,n){this.subscriptions.add(this.subject.subscribe(e=>{e[i]&&!e[i].isFirstChange()&&n(e[i].currentValue)}))}notFirstAndEmpty(i,n){this.subscriptions.add(this.subject.subscribe(e=>{if(e[i]&&!e[i].isFirstChange()){const t=e[i].currentValue;null!=t&&n(t)}}))}}const M=new a.nKC("NGX_ECHARTS_CONFIG");let F=(()=>{var s;class i{constructor(e,t,o){this.el=t,this.ngZone=o,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new a.bkB,this.optionsError=new a.bkB,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new f(1),this.resize$=new p.B,this.changeFilter=new U,this.resizeObFired=!1,this.echarts=e.echarts,this.theme=e.theme||null}ngOnChanges(e){this.changeFilter.doFilter(e)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(function B(s,i=S.E,n){const e=(0,A.O)(s,i);return function P(s,i){return(0,I.N)((n,e)=>{const{leading:t=!0,trailing:o=!1}=null!=i?i:{};let h=!1,d=null,c=null,z=!1;const K=()=>{null==c||c.unsubscribe(),c=null,o&&(R(),z&&e.complete())},Q=()=>{c=null,z&&e.complete()},w=m=>c=(0,G.Tg)(s(m)).subscribe((0,O._)(e,K,Q)),R=()=>{if(h){h=!1;const m=d;d=null,e.next(m),!z&&w(m)}};n.subscribe((0,O._)(e,m=>{h=!0,d=m,(!c||c.closed)&&(t?R():w(m))},()=>{z=!0,(!(o&&h&&c)||c.closed)&&e.complete()}))})}(()=>e,n)}(100,S.E,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(e=>{for(const t of e)t.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",e=>this.onOptionsChange(e)),this.changeFilter.notFirstAndEmpty("merge",e=>this.setOption(e)),this.changeFilter.has("loading",e=>this.toggleLoading(!!e)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart?e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(t=>e?t.showLoading(this.loadingType,this.loadingOpts):t.hideLoading())}setOption(e,t){if(this.chart)try{this.chart.setOption(e,t)}catch(o){console.error(o),this.optionsError.emit(o)}}refreshChart(){var e=this;return(0,g.A)(function*(){e.dispose(),yield e.initChart()})()}createChart(){const e=this.el.nativeElement;if(window&&window.getComputedStyle){const t=window.getComputedStyle(e,null).getPropertyValue("height");(!t||"0px"===t)&&(!e.style.height||"0px"===e.style.height)&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:o})=>o(e,this.theme,this.initOpts)))}initChart(){var e=this;return(0,g.A)(function*(){yield e.onOptionsChange(e.options),e.merge&&e.chart&&e.setOption(e.merge)})()}onOptionsChange(e){var t=this;return(0,g.A)(function*(){e&&(t.chart||(t.chart=yield t.createChart(),t.chart$.next(t.chart),t.chartInit.emit(t.chart)),t.setOption(t.options,!0))})()}createLazyEvent(e){return this.chartInit.pipe((0,V.n)(t=>new D.c(o=>(t.on(e,h=>this.ngZone.run(()=>o.next(h))),()=>{this.chart&&(this.chart.isDisposed()||t.off(e))}))))}}return(s=i).\u0275fac=function(e){return new(e||s)(a.rXU(M),a.rXU(a.aKT),a.rXU(a.SKi))},s.\u0275dir=a.FsC({type:s,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],standalone:!0,features:[a.OA$]}),i})();const T=(s={})=>({provide:M,useFactory:()=>({...s,echarts:()=>r.e(9697).then(r.bind(r,9697))})}),j=s=>({provide:M,useValue:s});let N=(()=>{var s;class i{static forRoot(e){return{ngModule:i,providers:[j(e)]}}static forChild(){return{ngModule:i}}}return(s=i).\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({}),i})(),$=(()=>{var s;class i{constructor(e){this.fire=e,this.dataSet=[],this.loading=!0,this.publicacionesCollection=(0,l.rJ)(this.fire,"posts/cosas_feas/publicaciones/"),this.opciones={title:{left:"50%",text:"Cantidad de fav",textAlign:"center",subtext:"Cosas feas"},tooltip:{trigger:"item",triggerOn:"click",position:"inside",displayMode:"single",formatter:t=>t?"<img src='"+t.value[2]+"' style='height: 10rem'></img>":"no image"},xAxis:{type:"category",axisLabel:{show:!1,rotate:45,formatter:(t,o)=>t}},yAxis:{minInterval:1},series:{name:"favs",type:"bar",data:this.dataSet}},this.opcionesCambio=this.opciones}ngOnInit(){}ngAfterViewInit(){(0,l.xs)(this.publicacionesCollection).subscribe(e=>{console.log(e),this.loading=!0,this.dataSet=e.map(t=>(t.label=t.idDoc,[t.label,t.conteoFav,t.imagenUrl])),this.opcionesCambio={series:{data:this.dataSet}},this.loading=!1})}}return(s=i).\u0275fac=function(e){return new(e||s)(a.rXU(l._7))},s.\u0275cmp=a.VBU({type:s,selectors:[["app-barras"]],features:[a.Jv_([T()])],decls:1,vars:3,consts:[["echarts","",1,"grafico-barras",3,"loading","options","merge"]],template:function(e,t){1&e&&a.nrm(0,"div",0),2&e&&a.Y8G("loading",t.loading)("options",t.opciones)("merge",t.opcionesCambio)},dependencies:[F],styles:[".grafico-barras[_ngcontent-%COMP%]{height:400px}"]}),i})(),X=(()=>{var s;class i{constructor(e){this.fire=e,this.dataSet=[],this.loading=!0,this.publicacionesCollection=(0,l.rJ)(this.fire,"posts/cosas_lindas/publicaciones/"),this.opciones={title:{left:"50%",text:"Cantidad de fav",textAlign:"center",subtext:"Cosas lindas"},tooltip:{trigger:"item",triggerOn:"click",position:"inside",displayMode:"single",formatter:t=>(console.log(t),t?"<img src='"+t.data.imagen+"' style='height: 10rem'></img><br/><p>"+t.data.imageLabel+"</p>":"no image")},series:{name:"favs",type:"pie",data:this.dataSet,label:{show:!1}}},this.opcionesCambio=this.opciones}ngOnInit(){}ngAfterViewInit(){(0,l.xs)(this.publicacionesCollection).subscribe(e=>{this.loading=!0,this.dataSet=[],this.dataSet=e.map(t=>(t.label=t.user.displayName+", &#11088; "+t.conteoFav,t.name=t.idDoc,{name:t.name,value:t.conteoFav,imagen:t.imagenUrl,imageLabel:t.label})),this.opcionesCambio={series:{data:this.dataSet}},this.loading=!1})}}return(s=i).\u0275fac=function(e){return new(e||s)(a.rXU(l._7))},s.\u0275cmp=a.VBU({type:s,selectors:[["app-rueda"]],features:[a.Jv_([T()])],decls:1,vars:3,consts:[["echarts","",1,"grafico-rueda",3,"loading","options","merge"]],template:function(e,t){1&e&&a.nrm(0,"div",0),2&e&&a.Y8G("loading",t.loading)("options",t.opciones)("merge",t.opcionesCambio)},dependencies:[F],styles:[".grafico-rueda[_ngcontent-%COMP%]{height:34rem;max-height:75%}"]}),i})();function Z(s,i){1&s&&(a.qex(0),a.nrm(1,"app-rueda"),a.bVm())}function H(s,i){1&s&&a.nrm(0,"app-barras")}const J=[{path:"",component:(()=>{var s;class i{constructor(){this.tabSeleccionada="cosas_lindas"}ngOnInit(){}}return(s=i).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.VBU({type:s,selectors:[["app-estadisticas"]],decls:11,vars:3,consts:[["estadisticasCosasFeasTemplate",""],[3,"ngModelChange","ngModel"],["value","cosas_lindas"],["value","cosas_feas"],[4,"ngIf","ngIfElse"]],template:function(e,t){if(1&e){const o=a.RV6();a.j41(0,"ion-toolbar")(1,"ion-segment",1),a.mxI("ngModelChange",function(d){return a.eBV(o),a.DH7(t.tabSeleccionada,d)||(t.tabSeleccionada=d),a.Njj(d)}),a.j41(2,"ion-segment-button",2)(3,"ion-label"),a.EFF(4,"Cosas lindas"),a.k0s()(),a.j41(5,"ion-segment-button",3)(6,"ion-label"),a.EFF(7,"Cosas feas"),a.k0s()()()(),a.DNE(8,Z,2,0,"ng-container",4)(9,H,1,0,"ng-template",null,0,a.C5r)}if(2&e){const o=a.sdS(10);a.R7$(),a.R50("ngModel",t.tabSeleccionada),a.R7$(7),a.Y8G("ngIf","cosas_lindas"===t.tabSeleccionada)("ngIfElse",o)}},dependencies:[E.bT,v.BC,v.vS,u.he,u.Gp,u.eP,u.ai,u.Je,$,X],styles:[".titulo-body[_ngcontent-%COMP%]{text-align:center}"]}),i})()}];let W=(()=>{var s;class i{}return(s=i).\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[L.iI.forChild(J),L.iI]}),i})(),Y=(()=>{var s;class i{}return(s=i).\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[E.MD,v.YN,u.bv,W,N.forRoot({echarts:()=>r.e(9697).then(r.bind(r,9697))})]}),i})()},1584:(x,b,r)=>{r.d(b,{O:()=>a});var E=r(1985),v=r(3236),u=r(9470);function a(l=0,g,p=v.b){let y=-1;return null!=g&&((0,u.m)(g)?p=g:y=g),new E.c(f=>{let C=function L(l){return l instanceof Date&&!isNaN(l)}(l)?+l-p.now():l;C<0&&(C=0);let S=0;return p.schedule(function(){f.closed||(f.next(S++),0<=y?this.schedule(void 0,y):f.complete())},C)})}}}]);