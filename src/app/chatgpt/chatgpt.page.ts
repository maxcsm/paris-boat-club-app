import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/providers/openai.service';
import { RedditService } from 'src/providers/reddit-service';


@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.page.html',
  styleUrls: ['./chatgpt.page.scss'],
})
export class ChatgptPage  {
  userInput: string = '';
  response: string = '';

  constructor(private openaiService: OpenaiService,
    public redditService:RedditService
  ) {}


  async sendMessage() {
    var data = JSON.stringify({ 
      message: this.userInput,
      });
     
    this.redditService.addPost("public_chatgpt",data)  
    .subscribe(async (response) => {
     console.log(response); 
     this.response =response.choices[0].message.content;


     setTimeout(() => { 
      this.userInput="";
     }, 800);


    })
  }

  async sendMessage2() {

    
    if (this.userInput.trim()) {
      this.response = 'Chargement...'; // Message temporaire pendant la requête
      this.response = await this.openaiService.getResponse(this.userInput);
    }
  }
}