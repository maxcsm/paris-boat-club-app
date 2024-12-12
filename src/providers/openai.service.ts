import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiKey = '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'; // Remplace par ta clé API OpenAI
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor() {}

  async getResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-3.5-turbo', // Ou 'gpt-4' si disponible dans ton abonnement
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Erreur lors de la requête à OpenAI:', error);
      return 'Désolé, une erreur est survenue.';
    }
  }
}



/*

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './environment';
@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  apiKey ='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'
  apiUrl = 'https://api.openai.com/v1/chat/completions';
  assistantId='proj_1kVvfcyjVhxIiqq9phZN02zE';

  constructor(private http: HttpClient) {
  
  }



// Fonction pour envoyer une requête avec l'assistant ID
generateResponse( userInput: string) {

  console.log(this.apiKey ); 
  const body = {
    model: 'gpt-3.5-turbo', // Ou gpt-4 selon votre choix
    messages: [{ role: 'user', content: userInput }],
   //organization :'org-cKLTnYEiR4BrnIs3IiaH4MKz'
   //  assistant_id:'asst_KpdpSdtsdKvxh1WqEY4V4Ik0',
    // project_id: 'proj_1kVvfcyjVhxIiqq9phZN02zE' // Ajout de l'ID de l'assistant
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.apiKey}`
  };

  return this.http.post(this.apiUrl, body, { headers });
}
}
*/