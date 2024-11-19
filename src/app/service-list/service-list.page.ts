
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, PopoverController, AlertController, MenuController, LoadingController, NavParams, ToastController, InfiniteScrollCustomEvent, IonModal, ModalController } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalPostPage } from '../modal-post/modal-post.page';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {

  modal!: IonModal;

  table: string="public_posts_short";
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
  per_page:number=20;
  order_id:any="id";
  order_by:any="asc";
  currentpage!: number;

  formgroup!: FormGroup;
  validations_form!: FormGroup;
  title: string="";
  UrlImage: string="";
  modelData: any;

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
    public modalController: ModalController ) {
    this.page=1;
  }


  ngOnInit() {
    this.UrlImage=this.redditService.getUrlImage();
  }


  ionViewWillEnter(){
   
  }

  


 }
  
  