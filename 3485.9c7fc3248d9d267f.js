"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3485],{4857:(P,g,e)=>{e.d(g,{c:()=>r});var t=e(4438),m=e(6879);let r=(()=>{var s;class d{constructor(o){this.matSnackBar=o}mensajeError(o){this.showSnackBar(o,"","snackbar-warning")}showSnackBar(o,p="",v="snackbar-success"){this.matSnackBar.open(o,p,{duration:2e3,panelClass:v})}}return(s=d).\u0275fac=function(o){return new(o||s)(t.KVO(m.UG))},s.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"}),d})()},3485:(P,g,e)=>{e.r(g),e.d(g,{Tab1PageModule:()=>C});var t=e(3819),m=e(177),r=e(4341),s=e(2146),d=e(467),f=e(8392),o=e(4438),p=e(4857);function v(i,l){1&i&&(o.j41(0,"div",17),o.nrm(1,"ion-spinner",18),o.k0s())}const h=[{path:"",component:(()=>{var i;class l{constructor(n,a,c){this.auth=n,this.router=a,this._servicioCompartido=c,this.cargandoLogin=!1,this.usersArray=[],this.alertButtons=[];let b=new r.ok;this.formlogin=b.group({email:["",[r.k0.required,r.k0.email]],pass:["",r.k0.required]}),this.logged=!1}login(){var n=this;return(0,d.A)(function*(){var a,c;let b=null===(a=n.formlogin.get("email"))||void 0===a?void 0:a.value,_=null===(c=n.formlogin.get("pass"))||void 0===c?void 0:c.value;try{n.cargandoLogin=!0,yield(0,f.x9)(n.auth,b,_),n._servicioCompartido.showSnackBar("Iniciando sesion..."),setTimeout(()=>{n.router.navigate(["main/principal"]),n.formlogin.reset({email:"",pass:""})},2e3)}catch{n._servicioCompartido.showSnackBar("Credenciales incorrectas","","snackbar-danger")}finally{n.cargandoLogin=!1}})()}cargarDatosPrueba(n,a){this.formlogin.setValue({email:n,pass:a})}}return(i=l).\u0275fac=function(n){return new(n||i)(o.rXU(f.Nj),o.rXU(s.Ix),o.rXU(p.c))},i.\u0275cmp=o.VBU({type:i,selectors:[["app-tab1"]],decls:31,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],[1,"contenido-login"],["class","spinner",4,"ngIf"],[1,"form-box"],[1,"form",3,"formGroup"],[1,"titulo"],["label","Correo","fill","solid","type","email","formControlName","email","helperText","Ingrese un correo valido","errorText","Correo invalido"],["label","Clave","fill","solid","type","password","formControlName","pass"],["slot","end","color","dark"],["color","secondary",1,"boton-login",3,"click","disabled"],["routerLink","/register"],["slot","fixed","vertical","bottom","horizontal","end"],["name","bug-outline"],["side","top"],[3,"click"],["name","person"],[1,"spinner"],["color","primary"]],template:function(n,a){1&n&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o.EFF(3,"Inicio de sesion"),o.k0s()()(),o.j41(4,"ion-content",1)(5,"div",2),o.DNE(6,v,2,0,"div",3),o.j41(7,"div",4)(8,"form",5)(9,"ion-text")(10,"h1",6),o.EFF(11,"Iniciar sesion"),o.k0s()(),o.nrm(12,"ion-input",7),o.j41(13,"ion-input",8),o.nrm(14,"ion-input-password-toggle",9),o.k0s(),o.j41(15,"ion-button",10),o.bIt("click",function(){return a.login()}),o.EFF(16," Iniciar sesion "),o.k0s()(),o.j41(17,"ion-text"),o.EFF(18," No tienes cuenta? "),o.k0s(),o.j41(19,"a",11),o.EFF(20,"registrate"),o.k0s()()(),o.j41(21,"ion-fab",12)(22,"ion-fab-button"),o.nrm(23,"ion-icon",13),o.k0s(),o.j41(24,"ion-fab-list",14)(25,"ion-fab-button",15),o.bIt("click",function(){return a.cargarDatosPrueba("usuario@usuario.com","333333")}),o.nrm(26,"ion-icon",16),o.k0s(),o.j41(27,"ion-fab-button",15),o.bIt("click",function(){return a.cargarDatosPrueba("admin@admin.com","111111")}),o.nrm(28,"ion-icon",16),o.k0s(),o.j41(29,"ion-fab-button",15),o.bIt("click",function(){return a.cargarDatosPrueba("invitado@invitado.com","222222")}),o.nrm(30,"ion-icon",16),o.k0s()()()()),2&n&&(o.Y8G("translucent",!0),o.R7$(4),o.Y8G("fullscreen",!0),o.R7$(2),o.Y8G("ngIf",a.cargandoLogin),o.R7$(2),o.Y8G("formGroup",a.formlogin),o.R7$(7),o.Y8G("disabled",a.formlogin.invalid))},dependencies:[t.Jm,t.W9,t.Q8,t.YW,t.OL,t.eU,t.iq,t.$w,t.Wv,t.w2,t.IO,t.BC,t.ai,t.Gw,t.oY,m.bT,r.qT,r.BC,r.cb,r.j4,r.JD,s.Wk],styles:[".form-box[_ngcontent-%COMP%]{justify-items:center;padding:5%}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;text-align:center}.form[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{text-align:initial}.titulo[_ngcontent-%COMP%]{font-weight:700;font-size:1.6rem}.contenido-login[_ngcontent-%COMP%]{position:relative;margin:auto;width:26rem;max-width:86%;top:50%;transform:translateY(-50%)}ion-fab[_ngcontent-%COMP%]{margin-bottom:var(--ion-safe-area-bottom, 0)}ion-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-dark)}"]}),l})()}];let k=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.$C({type:i}),i.\u0275inj=o.G2t({imports:[s.iI.forChild(h),s.iI]}),l})(),C=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.$C({type:i}),i.\u0275inj=o.G2t({imports:[t.bv,m.MD,r.YN,r.X1,k]}),l})()}}]);