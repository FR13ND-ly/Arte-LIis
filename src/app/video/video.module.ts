import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';


@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : VideoComponent }
    ])
  ]
})
export class VideoModule { }
