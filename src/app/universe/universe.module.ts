import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniverseComponent } from './universe.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UniverseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : "", component : UniverseComponent }
    ])
  ]
})
export class UniverseModule { }
