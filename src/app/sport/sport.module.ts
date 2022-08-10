import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportComponent } from './sport.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';



@NgModule({
  declarations: [
    SportComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : SportComponent }
    ])
  ]
})
export class SportModule { }
