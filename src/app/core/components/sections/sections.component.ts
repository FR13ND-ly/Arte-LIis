import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor() { }
  @Input() sections! : any

  ngOnInit(): void {
    timer(0).subscribe(() => {
      Array.from(document.querySelectorAll('.section__image-wrapper')).forEach((div : any) => {
        div.addEventListener('click', () => this.resolveZoom(div))
      })
    })
  }

  resolveZoom(div : any) {
    let zoom = div.cloneNode(true)
    document.body.appendChild(zoom)
    zoom.classList.add('zoom')
    zoom.addEventListener('click', () => zoom.remove())
  }
}
