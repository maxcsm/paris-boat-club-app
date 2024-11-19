"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4443],{4443:(k,r,e)=>{e.r(r),e.d(r,{ServiceListPageModule:()=>p});var d=e(177),l=e(9417),i=e(8974),a=e(904),t=e(4438),u=e(4517),g=e(995),c=e(4842);const v=[{path:"",component:(()=>{class n{constructor(o,s,m,I,F,j,b,f,S,M,E){this.navCtrl=o,this.formBuilder=s,this.popoverCtrl=m,this.alertController=I,this.menu=F,this.loadingController=j,this.redditService=b,this.router=f,this.toastCtrl=S,this.loadingCtrl=M,this.modalController=E,this.table="public_posts_short",this.category="location",this.status="",this.filter="",this.wordid="",this.total=0,this.last_page=0,this.per_page=20,this.order_id="id",this.order_by="asc",this.title="",this.UrlImage="",this.page=1}ngOnInit(){this.UrlImage=this.redditService.getUrlImage()}ionViewWillEnter(){}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(u.q9),t.rXU(l.ok),t.rXU(i.IE),t.rXU(i.hG),t.rXU(i._t),t.rXU(i.Xi),t.rXU(g.s),t.rXU(a.Ix),t.rXU(i.K_),t.rXU(i.Xi),t.rXU(i.W3))};static#i=this.\u0275cmp=t.VBU({type:n,selectors:[["app-service-list"]],decls:91,vars:45,consts:[["color","secondary"],["slot","start"],["justify-content-center",""],["size-md","3","size-lg","3","size-xs","12"],["sizeLg","6","sizeMd","6","sizeXs","12"],["value","1"],["slot","header","color","secondary"],[2,"padding","5%","font-size","20px"],["name","wifi-outline"],["color","secondary","slot","content",1,"ion-padding"],["src","../assets/service7.jpg","alt",""],["value","2"],["name","musical-note-outline"],["src","../assets/service8.jpg","alt",""],["value","3"],["name","medkit-outline"],["src","../assets/service5.jpg","alt",""],["value","4"],["name","chatbubble-ellipses-outline"],["src","../assets/service6.jpg","alt",""],["value","5"],["name","cafe-outline"],["src","../assets/service4.jpg","alt",""],["value","6"],["name","videocam-outline"],["src","../assets/service3.jpg","alt",""],["value","7"],["name","briefcase-outline"],["src","../assets/service1.jpg","alt",""],["value","8"],["name","accessibility-outline"],["src","../assets/service2.jpg","alt",""]],template:function(s,m){1&s&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"ParisBoatClub "),t.k0s()()(),t.j41(6,"ion-content")(7,"ion-row",2),t.nrm(8,"ion-col",3),t.j41(9,"ion-col",4)(10,"ion-accordion-group",0)(11,"ion-accordion",5)(12,"ion-item",6)(13,"ion-label",7),t.nrm(14,"ion-icon",8),t.EFF(15," Wifi "),t.k0s()(),t.j41(16,"div",9),t.EFF(17),t.nI1(18,"translate"),t.nrm(19,"img",10),t.k0s()(),t.j41(20,"ion-accordion",11)(21,"ion-item",6)(22,"ion-label",7),t.nrm(23,"ion-icon",12),t.EFF(24),t.nI1(25,"translate"),t.k0s()(),t.j41(26,"div",9),t.EFF(27),t.nI1(28,"translate"),t.nrm(29,"img",13),t.k0s()(),t.j41(30,"ion-accordion",14)(31,"ion-item",6)(32,"ion-label",7),t.nrm(33,"ion-icon",15),t.EFF(34),t.nI1(35,"translate"),t.k0s()(),t.j41(36,"div",9),t.EFF(37),t.nI1(38,"translate"),t.nrm(39,"img",16),t.k0s()(),t.j41(40,"ion-accordion",17)(41,"ion-item",6)(42,"ion-label",7),t.nrm(43,"ion-icon",18),t.EFF(44),t.nI1(45,"translate"),t.k0s()(),t.j41(46,"div",9),t.EFF(47),t.nI1(48,"translate"),t.nrm(49,"img",19),t.k0s()(),t.j41(50,"ion-accordion",20)(51,"ion-item",6)(52,"ion-label",7),t.nrm(53,"ion-icon",21),t.EFF(54),t.nI1(55,"translate"),t.k0s()(),t.j41(56,"div",9),t.EFF(57),t.nI1(58,"translate"),t.nrm(59,"img",22),t.k0s()(),t.j41(60,"ion-accordion",23)(61,"ion-item",6)(62,"ion-label",7),t.nrm(63,"ion-icon",24),t.EFF(64),t.nI1(65,"translate"),t.k0s()(),t.j41(66,"div",9),t.EFF(67),t.nI1(68,"translate"),t.nrm(69,"img",25),t.k0s()(),t.j41(70,"ion-accordion",26)(71,"ion-item",6)(72,"ion-label",7),t.nrm(73,"ion-icon",27),t.EFF(74),t.nI1(75,"translate"),t.k0s()(),t.j41(76,"div",9),t.EFF(77),t.nI1(78,"translate"),t.nrm(79,"img",28),t.k0s()(),t.j41(80,"ion-accordion",29)(81,"ion-item",6)(82,"ion-label",7),t.nrm(83,"ion-icon",30),t.EFF(84),t.nI1(85,"translate"),t.k0s()(),t.j41(86,"div",9),t.EFF(87),t.nI1(88,"translate"),t.nrm(89,"img",31),t.k0s()()()(),t.nrm(90,"ion-col",3),t.k0s()()),2&s&&(t.R7$(17),t.SpI(" ",t.bMT(18,15,"wifi_content")," "),t.R7$(7),t.SpI(" ",t.bMT(25,17,"music_title"),""),t.R7$(3),t.SpI(" ",t.bMT(28,19,"music_content")," "),t.R7$(7),t.SpI(" ",t.bMT(35,21,"security_title"),""),t.R7$(3),t.SpI(" ",t.bMT(38,23,"security_content")," "),t.R7$(7),t.SpI(" ",t.bMT(45,25,"comment_title")," "),t.R7$(3),t.SpI(" ",t.bMT(48,27,"comment_content")," "),t.R7$(7),t.SpI(" ",t.bMT(55,29,"frigo_title")," "),t.R7$(3),t.SpI(" ",t.bMT(58,31,"frigo_content")," "),t.R7$(7),t.SpI(" ",t.bMT(65,33,"video_title")," "),t.R7$(3),t.SpI(" ",t.bMT(68,35,"video_content")," "),t.R7$(7),t.SpI(" ",t.bMT(75,37,"luggage_title")," "),t.R7$(3),t.SpI(" ",t.bMT(78,39,"luggage_content")," "),t.R7$(7),t.SpI(" ",t.bMT(85,41,"toilettes_title")," "),t.R7$(3),t.SpI(" ",t.bMT(88,43,"toilettes_content")," "))},dependencies:[i.xk,i.YH,i.QW,i.hU,i.W9,i.eU,i.iq,i.uz,i.he,i.MC,i.ln,i.BC,i.ai,c.D9]})}return n})()}];let h=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#i=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[a.iI.forChild(v),a.iI]})}return n})(),p=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#i=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[d.MD,l.YN,i.bv,h,c.h]})}return n})()}}]);