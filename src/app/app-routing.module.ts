import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path : '', component : LandingPageComponent },
  { path : 'arta-in-destinul-nostru', loadChildren: () => import('./destiny/destiny.module').then((m) => m.DestinyModule)},
  { path : 'arte-video', loadChildren: () => import('./video/video.module').then((m) => m.VideoModule) },
  { path : 'arte-plastice', loadChildren: () => import('./plastic/plastic.module').then((m) => m.PlasticModule) },
  { path : 'cariera', loadChildren: () => import('./career/career.module').then((m) => m.CareerModule) },
  { path : 'concursuri', loadChildren: () => import('./contests/contests.module').then((m) => m.ContestsModule) },
  { path : 'despre-noi', loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsModule) },
  { path : 'fotografie', loadChildren: () => import('./photo/photo.module').then((m) => m.PhotoModule) },
  { path : 'galerie', loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule) },
  { path : 'muzica', loadChildren: () => import('./music/music.module').then((m) => m.MusicModule) },
  { path : 'sport', loadChildren: () => import('./sport/sport.module').then((m) => m.SportModule) },
  { path : 'teatru-dans', loadChildren: () => import('./theater/theater.module').then((m) => m.TheaterModule) },
  { path : 'universul-artei', loadChildren: () => import('./universe/universe.module').then((m) => m.UniverseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
