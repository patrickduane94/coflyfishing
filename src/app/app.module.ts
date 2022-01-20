import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlueRiverComponent } from './blueriver/blueriver.component';
import { ColoradoRiverComponent } from './coloradoriver/coloradoriver.component';
import { GunnisonRiverComponent } from './gunnisonriver/gunnisonriver.component';
import { SouthPlatteRiverComponent } from './southplatteriver/southplatteriver.component';
import { ArkansasRiverComponent } from './arkansasriver/arkansasriver.component';
import { YampaRiverComponent } from './yampariver/yampariver.component';
import { GuideServicesComponent } from './guideservices/guideservices.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlueRiverComponent,
    ColoradoRiverComponent,
    GunnisonRiverComponent,
    SouthPlatteRiverComponent,
    ArkansasRiverComponent,
    YampaRiverComponent,
    GuideServicesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
