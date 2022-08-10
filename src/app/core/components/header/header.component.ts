import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navItems = [
    {
      displayName: "DESPRE NOI",
      url : "despre-noi"
    },
    {
      displayName: "PROIECTE EDUCATIVE",
      url : "cariera"
    },
    {
      displayName: "CONCURSURI",
      url : "concursuri"
    },
    {
      displayName: "MUZEE & GALERII",
      url : "galerie"
    },
  ]

  ngOnInit(): void {
    this.onSetTheme();
  }

  onChangeTheme() {
    localStorage.setItem(
      'theme',
      !localStorage.getItem('theme') ? 'dark-theme' : ''
    );
    this.onSetTheme();
  }

  onSetTheme() {
    document.body.classList.toggle(
      'dark-theme',
      !!localStorage.getItem('theme')
    );
  }
}
