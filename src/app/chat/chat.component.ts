import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagesCollection: FirebaseListObservable<any[]>;
  messages: Observable<any[]>;

  constructor(public afs: AngularFireDatabase) {

  }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messagesCollection = this.afs.list('/message' + 1);
    this.messages = this.messagesCollection;
  }

  newMessage(message) {
    this.messagesCollection.push(message);
  }
}
