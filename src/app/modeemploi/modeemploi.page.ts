import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-modeemploi',
  templateUrl: './modeemploi.page.html',
  styleUrls: ['./modeemploi.page.scss'],
})
export class ModeemploiPage implements OnInit {
  language: any="";
  constructor( public navCtrl: NavController, 
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

  ngOnInit() {
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


async  goHome() {
  this.router.navigateByUrl('/tabs/home');
}

async  goMap() {
  this.router.navigateByUrl('/tabs/map');
}


async  goPosts() {
  this.router.navigateByUrl('/tabs/posts');
}
}