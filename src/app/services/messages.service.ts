import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private basePath = '/test1/P1';
  items: AngularFireList<Message[]> = null; //  list of objects
  item: AngularFireObject<Message> = null; //   single object
  constructor(private db: AngularFireDatabase) { }

  getMessagesList(): any {
    this.items = this.db.list(this.basePath);
    return this.items;
  }
}


