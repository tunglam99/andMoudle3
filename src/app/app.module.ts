import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './book/read/read.component';
import { ReadedComponent } from './book/readed/readed.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ReadedComponent,
    BookCreateComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
