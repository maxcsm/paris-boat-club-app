"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5223],{5223:(E,d,e)=>{e.r(d),e.d(d,{ModalPostPageModule:()=>v});var g=e(177),t=e(9417),m=e(8974),l=e(904),u=e(3006),r=e(4438);const f=[{path:"",component:u.F}];let p=(()=>{class c{static#t=this.\u0275fac=function(_){return new(_||c)};static#o=this.\u0275mod=r.$C({type:c});static#i=this.\u0275inj=r.G2t({imports:[l.iI.forChild(f),l.iI]})}return c})();var P=e(4842);let v=(()=>{class c{static#t=this.\u0275fac=function(_){return new(_||c)};static#o=this.\u0275mod=r.$C({type:c});static#i=this.\u0275inj=r.G2t({imports:[g.MD,t.YN,m.bv,p,P.h]})}return c})()},3006:(E,d,e)=>{e.d(d,{F:()=>j});var g=e(467),t=e(4438),m=e(4517),l=e(8974),u=e(995),r=e(904),f=e(8225),p=e(345),P=e(177),v=e(4842);function c(i,a){if(1&i&&t.nrm(0,"img",7),2&i){const o=t.XpG();t.FCK("src","",o.UrlImage,"",o.image,"",t.B4B)}}function h(i,a){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.SpI(" ",o.content,"")}}function M(i,a){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.SpI(" ",o.content_en,"")}}function _(i,a){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.SpI(" ",o.content_it,"")}}function G(i,a){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.SpI(" ",o.content_es,"")}}function D(i,a){if(1&i&&t.nrm(0,"audio",9),2&i){const o=t.XpG(2);t.Mz_("src","https://api.parisboatclub.blog/audio_fr/",o.sound_fr,"",t.B4B)}}function R(i,a){if(1&i&&(t.j41(0,"div"),t.DNE(1,D,1,2,"audio",8),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.Y8G("ngIf",o.sound_fr)}}function T(i,a){if(1&i&&t.nrm(0,"audio",9),2&i){const o=t.XpG(2);t.Mz_("src","https://api.parisboatclub.blog/audio_en/",o.sound_en,"",t.B4B)}}function B(i,a){if(1&i&&(t.j41(0,"div"),t.DNE(1,T,1,2,"audio",8),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.Y8G("ngIf",o.sound_en)}}function x(i,a){if(1&i&&t.nrm(0,"audio",9),2&i){const o=t.XpG(2);t.Mz_("src","https://api.parisboatclub.blog/audio_it/",o.sound_it,"",t.B4B)}}function $(i,a){if(1&i&&(t.j41(0,"div"),t.DNE(1,x,1,2,"audio",8),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.Y8G("ngIf",o.sound_it)}}function C(i,a){if(1&i&&t.nrm(0,"audio",9),2&i){const o=t.XpG(2);t.Mz_("src","https://api.parisboatclub.blog/audio_es/",o.sound_es,"",t.B4B)}}function U(i,a){if(1&i&&(t.j41(0,"div"),t.DNE(1,C,1,2,"audio",8),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.Y8G("ngIf",o.sound_es)}}function X(i,a){if(1&i&&t.nrm(0,"iframe",11),2&i){const o=t.XpG(2);t.Y8G("src",o.iframe,t.f$h)}}function F(i,a){if(1&i&&(t.j41(0,"div"),t.DNE(1,X,1,1,"iframe",10),t.k0s()),2&i){const o=t.XpG();t.R7$(),t.Y8G("ngIf",""!==o.iframe)}}function O(i,a){if(1&i&&t.nrm(0,"img",7),2&i){const o=t.XpG();t.FCK("src","",o.UrlImage,"",o.image2,"",t.B4B)}}function b(i,a){if(1&i&&t.nrm(0,"img",7),2&i){const o=t.XpG();t.FCK("src","",o.UrlImage,"",o.image3,"",t.B4B)}}function Y(i,a){if(1&i&&t.nrm(0,"img",7),2&i){const o=t.XpG();t.FCK("src","",o.UrlImage,"",o.image4,"",t.B4B)}}let j=(()=>{class i{constructor(o,n,s,I,y,K,z){this.navCtrl=o,this.redditService=n,this.router=s,this.modalController=I,this.navParams=y,this.translateConfigService=K,this.sanitizer=z,this.modelId=this.navParams.data.paramID,this.UrlImage=this.redditService.getUrlImage(),this.language=this.translateConfigService.getCurrentLang(),console.log(this.language)}ngOnInit(){console.log(this.modelId),this.getdata()}closeModal(){var o=this;return(0,g.A)(function*(){yield o.modalController.dismiss("")})()}getdata(){var o=this;return(0,g.A)(function*(){o.redditService.getByid("public_location_detail",o.modelId).subscribe(n=>{console.log(n.location[0]),o.id=n.location[0].id,o.image=n.location[0].image,o.image2=n.location[0].image2,o.image3=n.location[0].image2,o.image4=n.location[0].image4,o.sound_fr=n.location[0].sound_fr,o.sound_en=n.location[0].sound_en,o.sound_it=n.location[0].sound_it,o.sound_es=n.location[0].sound_es,o.content=n.location[0].content,o.content_en=n.location[0].content_en,o.content_it=n.location[0].content_it,o.content_es=n.location[0].content_es,o.title=n.location[0].title,o.type=n.location[0].type,o.iframe=o.sanitizer.bypassSecurityTrustResourceUrl(n.location[0].iframe)})})()}static#t=this.\u0275fac=function(n){return new(n||i)(t.rXU(m.q9),t.rXU(u.s),t.rXU(r.Ix),t.rXU(l.W3),t.rXU(m.y8),t.rXU(f.E),t.rXU(p.up))};static#o=this.\u0275cmp=t.VBU({type:i,selectors:[["app-modal-post"]],decls:32,vars:18,consts:[[1,"padding"],["slot","end",1,"item-note"],["color","success","color","secondary",3,"click"],["sizeLg","3","sizeMd","3","sizeXs","0"],["sizeLg","6","sizeMd","6","sizeXs","12",2,"border","2px","border-width","2px","text-align","center"],[3,"src",4,"ngIf"],[4,"ngIf"],[3,"src"],["controls","",3,"src",4,"ngIf"],["controls","",3,"src"],["width","100%","height","400px","frameBorder","0",3,"src",4,"ngIf"],["width","100%","height","400px","frameBorder","0",3,"src"]],template:function(n,s){1&n&&(t.j41(0,"ion-content",0)(1,"ion-item"),t.EFF(2),t.j41(3,"div",1)(4,"ion-button",2),t.bIt("click",function(){return s.closeModal()}),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-row"),t.nrm(8,"ion-col",3),t.j41(9,"ion-col",4)(10,"ion-list"),t.DNE(11,c,1,3,"img",5),t.j41(12,"b"),t.EFF(13),t.k0s(),t.DNE(14,h,2,1,"div",6),t.nrm(15,"br"),t.DNE(16,M,2,1,"div",6),t.nrm(17,"br"),t.DNE(18,_,2,1,"div",6),t.nrm(19,"br"),t.DNE(20,G,2,1,"div",6),t.nrm(21,"br"),t.DNE(22,R,2,1,"div",6)(23,B,2,1,"div",6)(24,$,2,1,"div",6)(25,U,2,1,"div",6)(26,F,2,1,"div",6),t.nrm(27,"br"),t.DNE(28,O,1,3,"img",5)(29,b,1,3,"img",5)(30,Y,1,3,"img",5),t.k0s()(),t.nrm(31,"ion-col",3),t.k0s()()),2&n&&(t.R7$(2),t.SpI(" ",s.title," "),t.R7$(3),t.SpI("",t.bMT(6,16,"close")," "),t.R7$(6),t.Y8G("ngIf",s.image),t.R7$(2),t.SpI(" ",s.title,""),t.R7$(),t.Y8G("ngIf","fr"==s.language),t.R7$(2),t.Y8G("ngIf","en"==s.language),t.R7$(2),t.Y8G("ngIf","it"==s.language),t.R7$(2),t.Y8G("ngIf","es"==s.language),t.R7$(2),t.Y8G("ngIf","fr"==s.language),t.R7$(),t.Y8G("ngIf","en"==s.language),t.R7$(),t.Y8G("ngIf","it"==s.language),t.R7$(),t.Y8G("ngIf","es"==s.language),t.R7$(),t.Y8G("ngIf",2==s.type),t.R7$(2),t.Y8G("ngIf",s.image2),t.R7$(),t.Y8G("ngIf",s.image3),t.R7$(),t.Y8G("ngIf",s.image4))},dependencies:[P.bT,l.Jm,l.hU,l.W9,l.uz,l.nf,l.ln,v.D9]})}return i})()}}]);