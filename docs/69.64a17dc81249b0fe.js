"use strict";(self.webpackChunkNotas_Mentais=self.webpackChunkNotas_Mentais||[]).push([[69],{6069:(m,r,o)=>{o.r(r),o.d(r,{AuthModule:()=>M});var l=o(6814),g=o(639),n=o(5879),u=o(3076),c=o(95);const h=[{path:"",component:(()=>{class t{constructor(a){this.userService=a}login(){this.userService.logIn(this.email,this.senha)}static#n=this.\u0275fac=function(e){return new(e||t)(n.Y36(u.K))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-auth"]],decls:26,vars:2,consts:[["id","auth-c"],["src","assets/svg/logo.svg","alt","Notas Mentais"],[1,"fa-duotone","fa-arrow-right"],[1,"fa-light","fa-envelope"],["type","email","placeholder","E-mail",3,"ngModel","ngModelChange"],[1,"fa-light","fa-lock"],["type","password","placeholder","Senha",3,"ngModel","ngModelChange"],["type","submit",3,"click"],["routerLink","/path"],["type","image/svg+xml","data",n.$Z9`assets/svg/menino.svg`],["id","curve1"],["id","curve2"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"main")(2,"h1"),n._UZ(3,"img",1),n.qZA(),n.TgZ(4,"div")(5,"h2"),n._UZ(6,"i",2),n._uU(7," Bem-Vindo"),n.qZA(),n.TgZ(8,"label"),n._UZ(9,"i",3),n.TgZ(10,"input",4),n.NdJ("ngModelChange",function(s){return i.email=s}),n.qZA()(),n.TgZ(11,"label"),n._UZ(12,"i",5),n.TgZ(13,"input",6),n.NdJ("ngModelChange",function(s){return i.senha=s}),n.qZA()(),n.TgZ(14,"button",7),n.NdJ("click",function(){return i.login()}),n._uU(15,"Entrar"),n.qZA(),n.TgZ(16,"section")(17,"a",8),n._uU(18,"Criar Conta"),n.qZA(),n.TgZ(19,"a",8),n._uU(20,"Esqueci a Senha"),n.qZA()(),n._UZ(21,"object",9),n.qZA()(),n.TgZ(22,"div"),n._UZ(23,"span",10)(24,"span",11)(25,"object",9),n.qZA()()),2&e&&(n.xp6(10),n.Q6J("ngModel",i.email),n.xp6(3),n.Q6J("ngModel",i.senha))},dependencies:[g.rH,c.Fj,c.JJ,c.On],styles:['#auth-c[_ngcontent-%COMP%]{background-color:#f4f4f4;display:flex;align-items:stretch;justify-content:space-between;position:relative;min-height:100dvh;min-width:100vw;overflow:hidden}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]{background-color:#fff;border-right:solid 1px #84A5A5;padding:20px;max-width:600px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;max-width:300px;margin-bottom:3em}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;max-width:400px}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2em;margin-bottom:1em;color:#006a73}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#379ea8}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:stretch;width:100%;background-color:#fff;border:solid 1px #84A5A5;border-radius:20px;margin:0 0 15px;overflow:hidden}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:auto;width:100%;padding:15px}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 10px;display:flex;align-items:center;background:#cfe7e7;color:#006a73}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;background:#27abb0;padding:20px 5px 15px;border-radius:11px;color:#fff;font-weight:700;text-transform:uppercase;cursor:pointer;margin:30px 0 0;transition:all .2s}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#379ea8}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;align-items:center;justify-content:space-between}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#006a73;text-decoration:underline}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   object[_ngcontent-%COMP%]{margin-top:20px;display:none}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:20px;position:relative}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   object[_ngcontent-%COMP%]{max-width:100%;max-height:85vh;position:relative}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table;width:100%;height:50%;background-repeat:no-repeat;background-size:100% 100%;position:absolute;left:0}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span#curve1[_ngcontent-%COMP%]{background-image:url(/assets/svg/bg-top.svg);top:0}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span#curve2[_ngcontent-%COMP%]{background-image:url(/assets/svg/bg-bottom.svg);bottom:0}#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{content:"";display:table;width:100%;height:calc(20px + 3vh);background:#8ddce0;position:absolute;bottom:0;left:0}@keyframes _ngcontent-%COMP%_enter1{0%{transform:translateY(-55px);opacity:0}to{transform:translate(0);opacity:1}}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_enter1;animation-duration:.8s;animation-delay:.5s;animation-fill-mode:forwards;transform:translateY(-55px);opacity:0}@keyframes _ngcontent-%COMP%_enter2{0%{transform:translateY(55px);opacity:0}to{transform:translate(0);opacity:1}}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_enter2;animation-duration:.8s;animation-delay:.5s;animation-fill-mode:forwards;transform:translateY(55px);opacity:0}@media (max-width: 600px){#auth-c[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:none}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{max-width:200px;margin-bottom:10px}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{display:none}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{padding:10px}#auth-c[_ngcontent-%COMP%] > main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > object[_ngcontent-%COMP%]{display:block}}']})}return t})()}];let C=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[g.Bz.forChild(h),g.Bz]})}return t})(),M=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[l.ez,C,c.u5]})}return t})()}}]);