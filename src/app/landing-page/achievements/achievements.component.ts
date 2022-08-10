import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  achievements = [
    {
      title : "ARTE PLASTICE",
      description : "Talentul şi creativitatea reprezintă forţa motrice a dezvoltării societăţii omeneşti.",
      url : "arte-plastice",
      icon : "draw"
    },
    {
      title : "FOTOGRAFIE & GRAFICĂ DIGITALĂ",
      description : "Fotografia artistică înseamnă să pictezi cu lumină.",
      url : "fotografie",
      icon : "add_a_photo"
    },
    {
      title : "ARTE VIDEO",
      description : "Activități ce țin de domeniul vizualului, în spatele cărora se află muncă, creativitate și multe provocări.",
      url : "arte-video",
      icon : "video_call"
    },
    {
      title : "TEATRU DANS",
      description : "Forme de artă, divertisment și educație, în același timp.",
      url : "teatru-dans",
      icon : "theater_comedy"
    },
    {
      title : "MUZICĂ",
      description : "Muzica este limbajul universal al omenirii, este vocea armonioasă a creației, ecoul lumii invizibile, este o abreviere a emoției.",
      url : "muzica",
      icon : "music_note"
    },
    {
      title : "SPORT & ROBOȚI",
      description : "„Sportul reprezintă o formă de manifestare eminamente artistică a fiinţei umane.”- Ionel Teodoreanu",
      url : "sport",
      icon : "precision_manufacturing"
    }
  ]

  ngOnInit(): void {
  }

}
