import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';



@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : PhotoComponent }
    ])
  ]
})
export class PhotoModule { }
