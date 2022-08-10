import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterComponent } from './theater.component';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../core/components/sections/sections.module';


@NgModule({
  declarations: [
    TheaterComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    RouterModule.forChild([
      { path : "", component : TheaterComponent }
    ])
  ]
})
export class TheaterModule { }
