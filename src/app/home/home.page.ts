import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Geolocation } from '@capacitor/geolocation';
import { LocalService } from 'src/providers/local.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/providers/translate-config.service';
import { ChangelanguagePage } from '../changelanguage/changelanguage.page';

import { register } from 'swiper/element/bundle';

register();
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  lat!: number;
  lng!: number;
  location:boolean=false; 
  locationButton:boolean=false; 
  table: string = "users";
  iduser!: any;
  posts: any;
  role: any;
  id: any;
  language: any="";
  slider: any;
  slideOptions = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: true
};

  modelData: any;

  swiperdata: any;
  constructor
  ( public navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    public popoverCtrl: PopoverController,
    public alertController: AlertController, 
    public menu: MenuController,
    public loadingController:LoadingController,  
    public redditService:RedditService, 
    private router: Router,  
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public LoadingController: LoadingController,
    private localStore: LocalService,
    private translateConfigService: TranslateConfigService,
    private translate: TranslateService,
    public modalController: ModalController ) {

  }

  
  
swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  async ngOnInit() {
    this.localStore.saveItem('lang',"fr");
    this.iduser = this.localStore.getItem('iduser');
    this.role = this.localStore.getItem('role');
   

  // Swiper.autoplay.start();
  }



  ngAfterViewInit() {


    this.swiperdata = new Swiper('.swiper-container', {
    });


    this.startAutoplay();
    }

 

  startAutoplay() {
    if (this.swiperdata) {
      this.swiperdata.autoplay.start();
    }
  }
  isModalOpen = false;


// here you can check your parameter

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  async  goMap() {
    this.router.navigateByUrl('/tabs/map');
  }
  
  async  gomodeemploi() {
    this.router.navigateByUrl('/modeemploi');
  }

  public changeLanguage() {
    this.translateConfigService.setLanguage(this.language);
  }


  async changelg() {
    const modal = await this.modalController.create({
      component:ChangelanguagePage,
      componentProps: {
        "paramID": ""
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.language = modelData.data;
     
       // this.getdata(); 
      }
    });
    return await modal.present();
  }
  
}


