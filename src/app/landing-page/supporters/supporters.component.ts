import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.scss']
})
export class SupportersComponent implements OnInit {

  constructor() { }
  supporters : string[] = [
    "/assets/images/supporters/unage-logo.png",
    "/assets/images/supporters/arhitectura-logo.png",
    "/assets/images/supporters/uapriasi-logo.jpg",
    "/assets/images/supporters/CSS-Unirea-Iasi.png"
  ]

  ngOnInit(): void {
  }

}
