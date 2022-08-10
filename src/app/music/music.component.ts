import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  sections = [
    {
      details : {
        name : "Apostol Romina-Giorgia (Rockmina), clasa 11E, Solistă vocală - rock",
        description : `<strong> FELICITĂRI! - - Rockmina feat The Voodoo Child - - Suntem publicul care te adoră!</strong>
        <p>Romina nu cântă de mult timp cu vocea, ci este mai degrabă instrumentist, căci studiază de ceva vreme vioara, pianul și chitara.    Acum are o trupă de rock și blues. Au cântat în deschiderea lui Beth Hart, au  avut turnee și o sumedenie de concerte în diverse puburi de specialitate.</p>
        <p>În 25 septembrie 2021, pe scena de la SUPERSTAR ROMÂNIA PRO.TV, Mate-Info lovește din nou! Romina Apostol a demonstrat că are calitățile necesare unei artiste. "Părea o fată plăpândă, dar când a început să cânte..."</p>
        <p>13 Noiembrie 2021 - Romina Apostol și-a câștigat locul în semifinale, dar și admirația juraților. Tânăra a cântat piesa „Piece Of My Heart” a lui Janis Joplin.</p> 
        <p>„Ai avut cel mai bun moment din seara asta!”, i-a spus Raluka, după ce i-a da vestea cea mare. <br>„Fata asta e atomică”, a exlamat și Smiley. <br>Marius Moga: „Mie îmi place maxim siguranța ei!”</p>
        <b>3 Decembrie 2021 - Romina Apostol, o voce puternică și o prezență scenică inconfundabilă. „Ne-ai certat pe toți, dar mi-a plăcut.” </b> 
        <a class="facebook-icon" href="https://www.facebook.com/watch/?v=1407882109667672" target="_blank"><i class="fab fa-facebook-square"></i></a>
        `
      },
      images : [
        [
          "/assets/images/music/romina1.JPG",
          "/assets/images/music/romina2.JPG",
          "/assets/images/music/romina3.JPG"
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml('<iframe class="resp-iframe" src="https://www.youtube.com/embed/v6XgcPoE3dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
        this.sanitizer.bypassSecurityTrustHtml('<iframe class="resp-iframe" src="https://www.youtube.com/embed/cvv5SVePPQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      ]
    },
    {
      details : {
        name : "Ștefan Munteanu, clasa 11A, Chitară",
        description : `
          Elev al liceului nostru de șase ani, Ștefan Munteanu este un mare iubitor de muzică. El studiază chitara, iar <strong>în noiembrie 2020 a câștigat locul 2 la Romanian Guitar Contest, categoria 16-22 ani, Iași Guitar Festival.</strong> Pasiunea, munca și seriozitatea lui au dat roade!
          <a class="facebook-icon" href="https://fb.watch/4TL94Rajj3/" target="_blank"><i class="fab fa-facebook-square"></i></a> <a class="facebook-icon" href="https://fb.watch/4TLjFlWtfE/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        `
      },
      images : [
        [
          "/assets/images/music/stefan.jpg",
          "/assets/images/music/stefan1.jpg",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml('<iframe class="resp-iframe" src="https://www.youtube.com/embed/uZUI3Dlc9bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      ]
    },
    {
      details : {
        name : "Alex-Petronel Boboc, clasa 10D, Pian",
        description : `„Bună! Sunt Alex-Petronel Boboc, elev în clasa a X-a D și am 16 ani. Am o mare pasiune pentru muzică, mai exact, studiez pianul de mai mulți ani. Am început cursurile la Școala de Arte <em>Titel Popovici</em>, apoi am continuat la Clubul Artelor și la Palatul copiilor din Iași. Am participat la multe concursuri unde am obținut premii. Atunci când sunt obosit sau trist, mă relaxez cântând la pian. Mai sunt pasionat de matematică și informatică și sper, după terminarea studiilor, să pot lucra în IT. <br> Muzica este pentru mine doar o pasiune de suflet!”`
      },
      images : [
        [
          "/assets/images/music/boboc1.jpg",
          "/assets/images/music/boboc2.jpg",
          "/assets/images/music/boboc3.jpg",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`
          <video class="resp-iframe" controls="controls" >
            <source src="/assets/videos/music/boboc pian.mp4" type="video/mp4"> 
          </video>
        `)
      ]
    },
    {
      details : {
        name : "Dennis-Constantin Ursache, clasa 11D, Pian",
        description : `Elev al liceului nostru din clasa a V-a, Dennis este pasionat de interpretarea la pian.</h6>
        <p>Vă invităm să ascultați <strong>Valse op.64-2, de Frederic Chopin</strong>, în interpretarea lui Dennis-Constantin Ursache.<br>
        <a class="facebook-icon" href="https://www.facebook.com/dennis.ursache/videos/1250731512100843" target="_blank"><i class="fab fa-facebook-square"></i></a>`
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`
          <video class="resp-iframe" controls="controls" >
            <source src="/assets/videos/music/dennis.mp4" type="video/mp4"> 
          </video>
        `)
      ]
    },
    {
      details : {
        name : "Daria Elena Ciobanu, clasa 7A, Chitară",
        description : `„Bună! Sunt Ciobanu Daria Elena, am 13 ani și studiez chitara de 4 ani. Am participat la 3 concursuri  <strong>For Art</strong>, două în 2018 și unul în 2019, la Muzeul Unirii din Iași. Mulți mă întreabă de ce studiez chitara. O studiez deoarece este un instrument minunat, lucrat cu migală și care, pentru mine, are o însemnătate deosebită. Atunci când cânt la chitară simt că tot ce este în jurul meu se evaporă și sunt într-un univers doar al meu, unde chitara este tot ceea ce am.”`
      },
      images : [
        [
          "/assets/images/music/daria1.jpg",
          "/assets/images/music/daria2.jpg",
          "/assets/images/music/daria3.jpg",
          "/assets/images/music/daria4.jpg",
        ]
      ]
    },
  ]

  ngOnInit(): void {
  }

}
