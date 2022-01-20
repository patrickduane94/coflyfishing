import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArkansasRiverComponent } from './arkansasriver/arkansasriver.component';
import { BlueRiverComponent } from './blueriver/blueriver.component';
import { ColoradoRiverComponent } from './coloradoriver/coloradoriver.component';
import { GunnisonRiverComponent } from './gunnisonriver/gunnisonriver.component';
import { HomeComponent } from './home/home.component';
import { SouthPlatteRiverComponent } from './southplatteriver/southplatteriver.component';
import { YampaRiverComponent } from './yampariver/yampariver.component';
import { GuideServicesComponent } from './guideservices/guideservices.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blueriver', component: BlueRiverComponent},
  {path: 'coloradoriver', component: ColoradoRiverComponent},
  {path: 'gunnisonriver', component: GunnisonRiverComponent},
  {path: 'southplatteriver', component: SouthPlatteRiverComponent},
  {path: 'arkansasriver', component: ArkansasRiverComponent},
  {path: 'yampariver', component: YampaRiverComponent},
  {path: 'guideservices', component: GuideServicesComponent},
  {path: 'videos', component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
