import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  sections = [
    {
      details : {
        name : "Sofia Earmacov, clasa 9C, Dans sportiv",
        description : "„Mă numesc Earmacov Sofia și practic dansul sportiv de 8 ani. Nu am regretat niciodată că practic acest sport și doresc să ajung cât mai sus. Este pasiunea mea și, când mă gândesc că am antrenament, mă face să mă simt mai plină de energie încă de la prima oră a dimineții. Pentru mine a devenit mai mult decât un hobby, este deja un stil de viață la care nu voi renunța, indiferent de situație. <br>Activez la clubul DANCEPLANET și sunt recunoscătoare antrenorilor mei și partenerului meu de dans, pentru că, fără aceștia, nu puteam să ajung niciodată unde sunt acum. Am participat la concusuri precum <strong>METROPOLIAN DANCE FESTIVAL</strong> și <strong>MOLDOVA DANCE FESTIVAL</strong>, cât și la campionate naționale, la diferite secțiuni ale tipului de dans Latino-american.”"
      },
      images : [
        [
          "/assets/images/theatre/ermacov/earmacov1.png",
          "/assets/images/theatre/ermacov/earmacov2.png",
          "/assets/images/theatre/ermacov/earmacov3.png",
        ],
        [
          "/assets/images/theatre/ermacov/earmacov4.jpg",
          "/assets/images/theatre/ermacov/earmacov5.png",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<video class="resp-iframe" controls="controls" >
            <source src="/assets/videos/theatre/earmacov.mp4" type="video/mp4">
          </video>`)
      ]
    },
    {
      details : {
        name : "Adelina-Ioana Iuscinschi, clasa 6B, Balet",
        description : "Mă numesc Iuscinschi Adelina-Ioana, am 11 ani și fac balet de aproape 4 ani. Sunt pasionată de balet de când aveam 3 ani. Chiar dacă eram foarte mică, visam mereu să dansez pe scenă și să-mi exprim sentimentele în fața oamenilor. Dansul a fost mereu o formă de exprimare pentru mine. Am învățat că nu trebuie niciodată să te dai bătută și să ai încredere în talentele tale. Am început baletul la 7 ani. La început m-am adaptat greu, dar acum dansez cu cea mai mare bucurie. Am mers la multe spectacole și concursuri în diferite orașe cu grupa mea. A fost de fiecare dată o experiență foarte plăcută. Am repetat din greu și am reușit să luăm premiul întâi la fiecare concurs la care am fost. Niciodată nu o să renunț și o să am încredere în visul meu."
      },
      images : [
        [
          "/assets/images/theatre/adelina/adelina1.jpg",
          "/assets/images/theatre/adelina/adelina2.jpg",
          "/assets/images/theatre/adelina/adelina3.jpg",
          "/assets/images/theatre/adelina/adelina4.jpg",
        ],
        [
          "/assets/images/theatre/adelina/adelina5.jpg",
          "/assets/images/theatre/adelina/adelina6.jpg",
          "/assets/images/theatre/adelina/adelina7.jpg",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/L4cLhhE0lGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Diana Tufescu, clasa 10B, Balet",
        description : `„Mă numesc Diana Tufescu, am aproape 16 ani și am practicat baletul timp de un deceniu. Pasiunea mea pentru această artă a început de la o vârstă fragedă, când aveam 4 ani, uitându-mă la desenul animat <em>"Angelina Balerina"</em>, iar atunci mi-am dat seama că visul meu era să devin ca acel personaj simpatic, adică să mă aflu în lumina reflectoarelor și în fața unei mari mulțimi de oameni, care să îmi aprecieze munca.<br> Dansul a însemnat pentru mine o formă de exprimare a sentimentelor și a trăirilor interioare, prin mișcări line pe ritmuri de muzică clasică, respectiv un mijloc de a lega foarte multe prietenii pe viață. Baletul implică atât grație, o postură plină de eleganță și sensibilitate, precum și ureche muzicală și multă ambiție de a continua, deoarece nu întotdeauna este ușor să mă mențin constantă și cu zâmbetul pe buze în momentele de cumpănă, încercand să păstrez un echilibru între pasiuni și activitatea școlară.<br> Încă îmi amintesc cu drag de emoțiile simțite în culise, cu câteva secunde înainte să îmi încep momentul, însă, din clipa în care intram pe scenă, mă lăsam purtată de melodia lentă, plutind în pași de dans și deconectându-mă de orice se afla în exteriorul meu. <br> Am fost și la multe concursuri naționale și internaționale, atât cu grupul cât și individual, concurând la categorii precum dans clasic, contemporan sau de caracter, nenumăratele premii 1, 2 sau 3, precum și trofeele pe întreaga secțiune de dans a <strong>Festivalului Internațional de Teatru, Muzică si Dans Neghinița</strong>, fiind pentru mine doar o validare a muncii și a orelor petrecute în sala de repetiții, alături de draga mea profesoară de balet și de colegele mele.”`
      },
      images : [
        [
          "/assets/images/theatre/tufescu/diana tufescu6.jpg",
          "/assets/images/theatre/tufescu/diana tufescu4.jpg",
          "/assets/images/theatre/tufescu/diana tufescu5.jpg",
        ],
        [
          "/assets/images/theatre/tufescu/diana tufescu.jpg",
          "/assets/images/theatre/tufescu/diana tufescu3.jpg",
          "/assets/images/theatre/tufescu/diana tufescu2.jpg",
          "/assets/images/theatre/tufescu/diana tufescu1.jpg",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/pYTCo1NlFwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/pdvSKh2yXcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Eduard-George Vieru, clasa 12C, Dans modern",
        description : `Edi, cum îi spun colegii, este un exemplu de învingător! Iubește să danseze, iar grația, eleganța și sensibilitatea cu care interpretează, ne-au cucerit!</h6>
        <p><strong>Să ne lăsăm purtați de ritmul muzicii în <em>universul</em> creat de Eduard-George Vieru!</strong>`
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/omKik7RIjMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
  ]

  ngOnInit(): void {
  }

}
