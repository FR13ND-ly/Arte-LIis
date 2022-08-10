import { Component, OnInit } from '@angular/core';
import { data } from './photo.data';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  sections = [...data]

  ngOnInit(): void {
  }

}
