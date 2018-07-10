import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from "./todo/todo.component";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpErrorHandler } from "./http-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
