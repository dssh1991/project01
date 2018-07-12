import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesService } from './../../services/messages.service';
import { Message } from './../../services/message';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mensajes: Observable<Message[]>;
  temp1: number;
  hum1: number;
  temp2: number;
  hum2: number;

  constructor(private messagesService: MessagesService) {
    this.mensajes = this.messagesService.getMessagesList().valueChanges();

    this.mensajes.subscribe(result => {
      if (result.length > 0) {
        this.temp1 = result[result.length - 1].temp1;
        this.hum1 = result[result.length - 1].hum1;
        this.temp2 = result[result.length - 1].temp2;
        this.hum2 = result[result.length - 1].hum2;
      }
    });


  }

}



