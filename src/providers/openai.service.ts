import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiKey = 'ERR_BAD_REQUEST'; // Remplace par ta clé API OpenAI
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