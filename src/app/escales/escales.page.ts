
  import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
  import { FormBuilder } from '@angular/forms';
  import { Router } from '@angular/router';
  import { AlertController, LoadingController, ModalController } from '@ionic/angular';
  import { Geolocation } from '@capacitor/geolocation';
  import { RedditService } from 'src/providers/reddit-service';
  import { ModalPostPage } from '../modal-post/modal-post.page';
  import * as Leaflet from 'leaflet';



  @Component({
    selector: 'app-escales',
    templateUrl: './escales.page.html',
    styleUrls: ['./escales.page.scss'],
  })
  export class EscalesPage   {
  
    map2!: L.Map;
    lat!: number;
    lng!: number;
    location:boolean=false; 
    role:any="";
    pages: any;
    items: any;
    posts: any;
    page:number;
    table: string="public_locations_short";
    table2: string="locations";
  
    status:any="";
    category:any=2;
    filter:string="";
    per_page:number=100;
    order_id:any="id";
    order_by:string="desc";
    locationappointement: any;
    totaltech: any;
    totalappointemnts: any;
  
    lngevnt: any;
    techs: any;
    postsevents: any;
    eventid: any;
    appointement: any;
    technicienId: any;
    latposition!: number;
    lngposition!: number;
    modelData: any;
    idetail: any;
    markers: any;
  
  
  
  
    constructor
    ( 
      private formBuilder: FormBuilder, 
      public alertController: AlertController, 
      public redditService:RedditService, 
      private router: Router,  
      public modalController: ModalController,   
      private loadingCtrl: LoadingController,
      public loadingController:LoadingController ) {
      this.page=1;
    }
  
    ionViewWillEnter() {
      this.initializeMap();
      }
    


      private async initializeMap() {
        this.latposition =48.8582599;
        this.lngposition =2.2945006;
        this.map2 = Leaflet.map("map2").setView([this.latposition,this.lngposition], 16);
  
        Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map2);

  
      const loading = await this.loadingCtrl.create({
        message: 'Chargement..',
        spinner: 'bubbles',
      });
  
      this.redditService.getDataAll("public_locations_escales").subscribe(data => {
      this.posts=data.locations;
      this.posts.forEach((value: any) => {
      })
  
      this.loadPoint();
    })
    }
  
    loadPoint() {

        this.posts.forEach((value: any) => {
          console.log(value)
          let item = value;
          this.addmarker2(item);  
          console.log("foreatch");
        })
  
    }
  
  


    addmarker(item: any) {
  
     console.log(item); 
      var startIcon = Leaflet.icon({
        iconUrl: './assets/icon/marker-icon.png',
        iconAnchor:   [2, 32] 
      });
      const markPosition = Leaflet.marker([item.lat, item.lng],{icon: startIcon});
     // markPoint.bindPopup('<p>'+item.firstname+" "+item.lastname+'</p>');
      this.map2.addLayer(markPosition);
      this.map2.setView([this.latposition, this.lngposition], 15);
  
    }
  
    addmarker2(value: any) {
      var startIcon = Leaflet.icon({
        iconUrl: './assets/icon/escale.png',
        iconAnchor:   [2, 10] 
      });
      console.log(value);
      const markPoint = Leaflet.marker([value.lat, value.lng],{icon: startIcon});
      this.map2.addLayer(markPoint);
      markPoint.on("click",  (e) => {
        console.log(e);
        console.log(value.id);
  
        this.idetail=value.id; 
        this.edit( value.id); 
      });
  
  

     
    }
  
    async edit( item: any) {
      const modal = await this.modalController.create({
        component: ModalPostPage,
        componentProps: {
          "paramID": item
        }
      });
      modal.onDidDismiss().then((modelData) => {
        if (modelData !== null) {
          this.modelData = modelData.data;
          console.log('Modal Data : ' + modelData.data);
         // this.getdata(); 
        }
      });
      return await modal.present();
    }
    
  
    async getdataByid() {
  
      console.log("detail event");
      this.redditService.getByid(this.table, this.eventid).subscribe(data=>{
          this.postsevents = data.users;
          console.log(this.postsevents); 
          this.techs = data.techs;
          this.appointement = [data.appointement]; 
          this.lngevnt  =  this.techs.lenght; 
      })
     }
    
  

  
   goList(){
    this.router.navigateByUrl('/tabs/posts');
  }


  }
  

