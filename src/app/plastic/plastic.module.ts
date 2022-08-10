import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlasticComponent } from './plastic.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';



@NgModule({
  declarations: [
    PlasticComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : PlasticComponent }
    ])
  ]
})
export class PlasticModule { }
