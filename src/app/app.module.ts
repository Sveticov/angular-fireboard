import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';

import {ChatComponent} from './chat/chat.component';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';
import {environment} from "../environments/environment";

// npm install firebase angularfire2@^5.0.0-rc.3 --save

//ng serve --host 192.168.0.106 --port 4209



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
