import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinyComponent } from './destiny.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DestinyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : "", component : DestinyComponent }
    ])
  ]
})
export class DestinyModule { }
