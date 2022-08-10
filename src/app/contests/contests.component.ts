import { Component, OnInit } from '@angular/core';
import { data } from './contests.data';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

  constructor() { }
  
  sections = [...data]

  ngOnInit(): void {
  }

}
