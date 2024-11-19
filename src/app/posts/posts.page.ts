

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, PopoverController, AlertController, MenuController, LoadingController, NavParams, ToastController, InfiniteScrollCustomEvent, IonModal, ModalController } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalPostPage } from '../modal-post/modal-post.page';
import { TranslateConfigService } from 'src/providers/translate-config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  modal!: IonModal;

  table: string="locations";
  category:any="location";
  id: any;
  pages: any;
  items: any;
  posts: any;
  page:number;
  status:any="";
  filter:string="";
  wordid: any="";
  total:number=0;
  last_page:number=0;
  per_page:number=10;
  order_id:any="id";
  order_by:any="asc";
  currentpage!: number;

  formgroup!: FormGroup;
  validations_form!: FormGroup;
  title: string="";
  UrlImage: string="";
  modelData: any;
  language: any;

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
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService ) {
    this.page=1;


  }


  ngOnInit() {
    this.UrlImage=this.redditService.getUrlImage();
    this.language=this.translateConfigService.getCurrentLang();
    this.getData();
  }



  
  async getData(){
    //  this.simpleLoader();
    const loading = await this.loadingCtrl.create({
      message: 'Chargement..',
      spinner: 'bubbles',
    });
    await loading.present();
        this.page=1;
        this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(data => {
        loading.dismiss();
          this.posts=data.data;
          console.log(data);
          this.total=data.total;
          this.per_page=data.per_page;
          this.currentpage=data.current_page;    
          this.last_page=data.last_page;   
        })
  }  
  
  
  next(event: any ) {
     if (this.currentpage<this.last_page){
     this.page = this.page +1 ;
      this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(data => {
        let postspush = data.data;
        for (let post of postspush) {
          this.posts.push(post);
        }
        this.total=data.total;
        this.per_page=data.per_page;
        this.currentpage=data.current_page;    
        this.last_page=data.last_page; 
       
      }) 
      event.target.complete();  
    }  else    {
      event.target.complete();  
    }
  }
  

  async  doInfinite(event:any) {
    this.next(event);
  }

  handleChange(event:any) {
   const query = event.target.value.toLowerCase();
   this.filter = query
   this.filter=event.target.value;
   this.page=1;

   setTimeout(() => { 
     this.getDataFilter();
    }, 1000);
  }
  async getDataFilter(){ 
        this.page=1;
        this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(data => {
          this.posts=data.data;
          this.total=data.total;
          this.per_page=data.per_page;
          this.currentpage=data.current_page;    
          this.last_page=data.last_page;   
        })
  }  
  
  async onChangeWord(event:any){
    this.filter=event.target.value;
    this.page=1;

    setTimeout(() => { 
      this.getDataFilter();
     }, 1000);
}
        
onCancelword(selectedValue: any) {
       this.filter=="";
}
            
reset(){
      this.filter="";
      this.page=1;
      this.per_page=20;
      this.getData();
}


cancel() {
  this.modal.dismiss(null, 'cancel');
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;

}

  prev() {
    if  (this.page>1){
    this.page = this.page -1;
    this.getData();}}


forward(){
    if  (this.currentpage<this.last_page){
    this.page = this.last_page
   this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(data => {
      console.log(data);
      this.posts=data.data;
      this.total=data.total;
      this.per_page=data.per_page;
      this.currentpage=data.current_page;    
      this.last_page=data.last_page;   
    })
}}

backward() {
  if  (this.currentpage>1){
  this.page=1;
  this.getData();}
}

async post(event: any, item: any) {
this.router.navigateByUrl('/public-post/' + item.id);
}


async edit(event: any, item: any) {
  const modal = await this.modalController.create({
    component: ModalPostPage,
    componentProps: {
      "paramID": item.id
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


 }
  
  