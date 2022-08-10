import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  sections = [
    {
      title : "GALERII & EVENIMENTE ARTISTICE în IAȘI",
      description : "Uniunea Artiștilor Plastici din România, Filiala Iași, dispune de trei spații expoziționale deschise gratuit publicului: „TH. Pallady”, „N. Tonitza” și „Victoria”. Peste o sută de expoziţii personale şi de grup, ale artiștilor membri afiliați din România dar și ale artiștilor din străinătate, sunt găzduite anual pe simezele galeriilor Uniunii, situate în centrul orașului.",
      displayText : "Uniunea Artiștilor Plastici din România, Filiala Iași",
      link : "https://uapriasi.ro",
      linkFacebook : "https://www.facebook.com/Uniunea-Artiștilor-Plastici-Din-România-Filiala-Iași-395716443858021/"
    },
    {
      title : `CONCERTELE FILARMONICII MOLDOVA IAȘI`,
      description : `De-a lungul vremii, numele Iașului și al României au fost permanent legate de viața muzicală europeană. George Enescu a fost dirijorul primului concert al Filarmonicii Moldova, în data de 9 octombrie 1942, ocazie cu care face urarea: "UREZ FILARMONICEI “MOLDOVA” SĂ TRĂIASCĂ VEACURI PENTRU A-ȘI ÎNDEPLINI PREA FRUMOASA MISIUNE CE LE ESTE ÎNCREDINȚATĂ."`,
      displayText : `Filarmonica MOLDOVA Iași`,
      link : "https://filarmonicais.ro/index.php/ro/",
      linkFacebook : "https://www.facebook.com/FilarmonicaMoldovaIasi"
    },
    {
      title : `TEATRUL NAȚIONAL „VASILE ALECSANDRI” IAȘI`,
      description : "Teatrul Național „Vasile Alecsandri” din Iași este o instituție publică culturală, aflată în subordinea Ministerului Culturii și Cultelor, fiind cel mai vechi Teatru Național din România.",
      displayText : `Teatrul Național „Vasile Alecsandri” Iași`,
      link : "https://www.teatrulnationaliasi.ro",
      linkFacebook : "https://www.facebook.com/TNIASI"
    },
    {
      title : `OPERA NAȚIONALĂ ROMÂNĂ IAȘI`,
      description : "Înființată în 1956, Opera Națională Română din Iași este o instituție publică de cultură care funcționează în subordinea Ministerului Culturii. Activitatea artistică a Operei Naționale Române din Iași se desfășoară pe stagiuni, care au în general o perioadă de zece luni. Opera își desfăşoară activitatea împreună cu Teatrul Naţional Iaşi, într-unul dintre cele mai frumoase teatre din țară, monument istoric, datând de la finalul secolului al XIX-lea.",
      displayText : `Opera Națională Română Iași`,
      link : "https://www.operaiasi.ro",
      linkFacebook : "https://www.facebook.com/operaiasi/"
    }
  ]
  ngOnInit(): void {
  }

}
