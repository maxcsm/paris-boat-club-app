import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';

import { Geolocation } from '@capacitor/geolocation';

import { RedditService } from 'src/providers/reddit-service';
import { ModalPostPage } from '../modal-post/modal-post.page';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-escalesmap',
  templateUrl: './escalesmap.page.html',
  styleUrls: ['./escalesmap.page.scss'],
})
export class EscalesmapPage implements AfterViewInit {

  map!: L.Map;
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

  ngAfterViewInit() {
    this.initializeMap();
  }


  ionViewWillEnter() {
    this.initializeMap();
    }
  
  

    private async initializeMap() {
      this.latposition =48.8582599;
      this.lngposition =2.2945006;
      this.map = Leaflet.map("map").setView([this.latposition,this.lngposition], 16);

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);


    const loading = await this.loadingCtrl.create({
      message: 'Chargement..',
      spinner: 'bubbles',
    });

    this.redditService.getDataAll("public_locations_escales").subscribe(data => {
    this.posts=data.locations;
    this.posts.forEach((value: any) => {
    })

  //  this.loadPoint();
  })
  }



  async getPositionNew() {

  const loader = await this.loadingController.create({
    message: 'Recherche localisation',
    });
    loader.present();

  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Current position:', coordinates);
  if(coordinates.coords.latitude!==null){
    this.latposition = coordinates.coords.latitude; 
    this.lngposition = coordinates.coords.longitude; 


    console.log(this.latposition); 
    console.log( this.lngposition); 


   this.location = true; 
   setTimeout(() => { 
    loader.dismiss();
    var startIcon = Leaflet.icon({
      iconUrl: './assets/icon/marker-icon.png',
      iconAnchor:   [2, 32] 
    });

    const item={
      lat: this.latposition,
      lng:this.lngposition
    }
    this.addmarker(item); 
  }, 1000); 
  }
  
  }

  leafletMap() {
    var startIcon = Leaflet.icon({
      iconUrl: './assets/icon/marker-icon.png',
      iconAnchor:  [60, 60]
    });
    this.map = new Leaflet.Map('map').setView([this.latposition, this.lngposition], 14);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    }).addTo(this.map);
  //  const markPoint = Leaflet.marker([this.latposition, this.lngposition],{icon: startIcon});
  //  this.map.addLayer(markPoint);

    this.markers = Leaflet.layerGroup().addTo(this.map);




  }

  loadPoint() {


    this.posts.forEach((value: any) => {
      console.log(value)
      let item = value;
      this.addmarker2(item);  
      console.log("foreatch");
    })

 

  }


/*
  ngOnDestroy() {
    this.map.remove();
  }
*/
  addmarker(item: any) {

   console.log(item); 
    var startIcon = Leaflet.icon({
      iconUrl: './assets/icon/marker-icon.png',
      iconAnchor:   [2, 32] 
    });
    const markPosition = Leaflet.marker([item.lat, item.lng],{icon: startIcon});
  
    this.map.addLayer(markPosition);
    this.map.setView([this.latposition, this.lngposition], 17);

  }

  addmarker2(value: any) {
    var startIcon = Leaflet.icon({
      iconUrl: './assets/icon/escale.png',
      iconAnchor:   [2, 10] 
    });
    console.log(value);
    const markPoint = Leaflet.marker([value.lat, value.lng],{icon: startIcon});
    markPoint.bindPopup('<p>'+value.title+'</p>'+'<center><ion-button id="popup-button" > Voir  </ion-button>');
    this.map.addLayer(markPoint);
  /*  markPoint.on("click",  (e) => {
      console.log(e);
      console.log(value.id);

      this.idetail=value.id; 
      this.edit( value.id); 
		});

*/
markPoint.on("click", (e) => {
  const button = document.getElementById('popup-button');
  if (button) {
    button.addEventListener('click', (e) => {
      console.log(e);
      console.log(value.id);

      this.idetail=value.id; 
      this.edit( value.id); 
      markPoint.closePopup();
    });
  }

});
 
/*
     markPoint.bindPopup(
     '<p>'+value.title+'</p>'+
     '<p>'+value.title+'</p>'+
     '<p>'+value.title+'</p>');

    this.eventid =value.item ; 
    this.edit(   this.eventid); 
   
*/

   
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
