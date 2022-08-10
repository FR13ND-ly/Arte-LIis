import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestsComponent } from './contests.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : "", component : ContestsComponent }
    ])
  ]
})
export class ContestsModule { }
