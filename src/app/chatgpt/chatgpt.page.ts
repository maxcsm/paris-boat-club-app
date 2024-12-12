import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/providers/openai.service';
import { RedditService } from 'src/providers/reddit-service';


import { NavController, PopoverController, AlertController, MenuController, LoadingController, NavParams, ToastController, InfiniteScrollCustomEvent, IonModal, ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalPostPage } from '../modal-post/modal-post.page';
import { TranslateConfigService } from 'src/providers/translate-config.service';


@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.page.html',
  styleUrls: ['./chatgpt.page.scss'],
})
export class ChatgptPage implements OnInit {
  userInput: string = '';
  response: string = '';
  thread_id: string = '';
  posts: any;
  constructor(
    private openaiService: OpenaiService,
    public redditService:RedditService, 
    public loadingController:LoadingController
  ) {}

  ngOnInit() {
    this.newThread(); 
  }




  async newThread() {
  var data = JSON.stringify({});
  this.redditService.addPost("newthread_chatgpt",data)  
  .subscribe(async (response) => {
   console.log(response.thread_id); 
   this.thread_id =response.thread_id;
  })

}

async sendMessage() {


  const loader = await this.loadingController.create({});
    loader.present();
  var data = JSON.stringify({ 
    message: this.userInput,
    thread_id :this.thread_id
    });
   
  console.log(data);
  this.redditService.addPost("addmessage_chatgpt",data)  
  .subscribe(async (response) => {
   console.log(response); 
   setTimeout(() => { 
    this.userInput="";
    this.getData(); 
    loader.dismiss();
   }, 6000);
  })
}



async getData() {
this.redditService.getMessagesBythread(this.thread_id).subscribe(data => {
console.log(data.messages.data); 
this.posts=data.messages.data; 
})

}


/*
  askOpenAi() {
    const threadId = 'thread-1'; // Exemple d'identifiant de thread
    this.openaiService.getResponse( this.userInput).subscribe((res: any) => {
      console.log(res); 
      this.response = res.choices[0].message.content;
    });
  }*/
}