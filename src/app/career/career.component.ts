import { Component, OnInit } from '@angular/core';
import { data } from './career.data';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }

  sections = [...data]

  ngOnInit(): void {
  }

}
