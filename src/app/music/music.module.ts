import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : MusicComponent }
    ])
  ]
})
export class MusicModule { }
