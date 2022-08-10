import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  sections = [
    {
      details : {
        name : "Sofia Crețu, clasa 5A, Animație",
        description: "O puteți găsi pe YouTube cu numele SofyPlayz"
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/tCMojc1E2pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/qq7ARiFlJ1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/wDSHtgKtLYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/4nMHVess0Ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Tîrnovan Emilian, clasa 10B, Animație",
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/FMZxuxXBvuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/yi5USO2CFu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/-Ypp5C5pHFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/VjfG8ivER1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Festivalul de booktrailere BOOVIE 2021",
        description: "Prof. dr. Anamaria Ghiban: Young Team, LIIS, pentru al treilea an la BOOVIE, cu un roman provocator și un trailer pe măsură..."
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/jOoTqTeCW1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Festivalul de booktrailere BOOVIE 2020",
        description: "Prof. dr. Narcisa Adochiei: Festivalul de booktrailere BOOVIE propune o fuziune dintre lectura unor romane actuale, captivante și realizarea unor trailere care să valorifice talentul actoricesc, imaginația, gândirea simbolică și cunoștințele de artă cinematografică. Echipa Bollywoodkids formată din elevi ai clasei a X-a: Carla Epure, Miruna Lehaci, Teodora Maxim, Rareș Burac, Alex Costea, Bogdan Gheorghe, Raul Sandu și Ștefan Medrihan au participat pentru prima oară la ediția BOOVIE 2020 și au obținut MENȚIUNE din partea juriului."
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/lbPSicFurEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Film de prezentare a liceului 2021",
        description: "Pentru ca trecerea în clasa a V-a să fie mai plăcută, o echipă de elevi LIIS (Carla Epure, Denisa Porumb, Bianca Hulub, Mateea Manolică, Petru Adrian Anton și Raul Sandu), sub coordonarea prof. Narcisa Adochiei și prof. Lăcrămioara Popa, au realizat un film în care au prezentat liceul, laboratoarele de informatică, de chimie, de biologie, cluburile de robotică, atelierul de arte vizuale, precum și activitățile sportive și de voluntariat derulate în cadrul liceului. În plus, aceștia au realizat un „treasure hunt” și un tur de recunoaștere pentru elevi și părinți. <br> Filmulețul de prezentare a liceului a fost finalizat pentru <em>Concursul Urmașii lui Moisil clasa a V-a</em>, din luna mai 2021."
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/2JkSw8rf81c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Tudor Popescu, clasa 7C, Editare video",
        description: `"Hello! Eu sunt Tudor Popescu sau Tubref, așa cum sunt cunoscut pe YouTube.
        Sunt pasionat și fascinat de media: editare foto/video, calculatoare și tot ce este conex acestui domeniu. În creațiile mele video, îmi place foarte mult să folosesc efecte speciale și să comunic. Am o curiozitate fără limite și mă aflu într-o continuă căutare, cercetare, sunt însetat să descopăr noutăți și detalii tehnice, să le experimentez și chiar să inovez la rândul meu."</p>
            <b>Vă prezentăm un material realizat de Tudor Popescu, pentru proiectul european „IaȘi Fii Cetățean!”, mai 2021.`
      },
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<video class="resp-iframe" controls="controls" >
            <source src="/assets/videos/video/IaSi Fii Cetatean - Tubref.mp4" type="video/mp4">
        </video>`)
      ]
    },
  ]

  ngOnInit(): void {
  }

}
