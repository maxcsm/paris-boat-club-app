import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { TranslateConfigService } from 'src/providers/translate-config.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.page.html',
  styleUrls: ['./modal-post.page.scss'],
})
export class ModalPostPage implements OnInit {
  modelId: any;
  UrlImage: string;
  image: any;
  content: any;
  title: any;
  language: any;
  content_en: any;
  content_it: any;
  content_es: any;
  image2: any;
  image3: any;
  image4: any;
  sound_fr: any;
  sound_en: any;
  sound_it: any;
  sound_es: any;
  id: any;
  iframe: any;
  type: any;


  constructor( 
    public navCtrl: NavController,
    public redditService:RedditService, 
    private router: Router, 
    public modalController: ModalController,     
    private navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    public sanitizer: DomSanitizer
   ) {

    this.modelId = this.navParams.data['paramID'];
    this.UrlImage=this.redditService.getUrlImage();
    this.language=this.translateConfigService.getCurrentLang();

    console.log( this.language); 

   }

  ngOnInit() {

    console.log(this.modelId ); 
    this.getdata();
 

  }


  async closeModal() {
    const onClosedData: string = "";
    await this.modalController.dismiss(onClosedData);
  }



  async getdata() {
    this.redditService.getByid("public_location_detail", this.modelId).subscribe(data=>{
      console.log(data.location[0]);
    this.id=data.location[0].id;
    this.image=data.location[0].image;
    this.image2=data.location[0].image2;
    this.image3=data.location[0].image2;
    this.image4=data.location[0].image4;

    this.sound_fr=data.location[0].sound_fr;
    this.sound_en=data.location[0].sound_en;
    this.sound_it=data.location[0].sound_it;
    this.sound_es=data.location[0].sound_es;


    this.content=data.location[0].content;
    this.content_en=data.location[0].content_en;
    this.content_it=data.location[0].content_it;
    this.content_es=data.location[0].content_es;
    this.title=data.location[0].title;
    this.type=data.location[0].type;
    this.iframe=this.sanitizer.bypassSecurityTrustResourceUrl(data.location[0].iframe);
 

  })
  }
  

}
