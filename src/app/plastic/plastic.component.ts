import { Component, OnInit } from '@angular/core';
import { data } from './plastic.data';

@Component({
  selector: 'app-plastic',
  templateUrl: './plastic.component.html',
  styleUrls: ['./plastic.component.scss']
})
export class PlasticComponent implements OnInit {

  constructor() { }

  sections = [...data]

  ngOnInit(): void {
  }

}
