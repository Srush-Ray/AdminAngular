import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule} from "@angular/forms";
import { NoticeComponent } from './notice/notice.component'
import { RouterModule, Routes } from "@angular/router";
import { HomeVideosComponent } from './home-videos/home-videos.component';
import { HometabsComponent } from './hometabs/hometabs.component';
import { ApplinksComponent } from './applinks/applinks.component';

const routes: Routes = [
  { path: '', component: NoticeComponent },

  {path:'homevideos',component:HomeVideosComponent,data:{title:'Home Videos'}},
  {path:'hometabs',component:HometabsComponent,data:{title:'Home Videos'}},
  {path:'applinks',component:ApplinksComponent,data:{title:'Home Videos'}},

]
@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    HomeVideosComponent,
    HometabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      {useHash:true}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
