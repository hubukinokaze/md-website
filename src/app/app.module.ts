import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule, MdCardModule,
  MdMenuModule, MdToolbarModule,
  MdIconModule, MdSidenavModule,
  MdProgressBarModule, MdGridListModule,
  MdListModule
} from '@angular/material';
import { GithubService } from './services/GithubService';
import 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdProgressBarModule,
    MdGridListModule,
    MdListModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
