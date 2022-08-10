import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  sections = [
    {
      title : "SFATURI",
      text : "„Fiecare om ar trebui să asculte puțină muzică, să citească puțină poezie și să privească o pictură frumoasă în fiecare zi din viața sa, astfel încât îngrijorările lumești să nu-i oblitereze simțul frumosului, pe care Dumnezeu l-a implantat în sufletul uman.” - Johann Wolfgang von Goethe"
    },
    {
      title : "REFLECȚII",
      text : "Arta este un reper al civilizației umane, iar o lucrare (desen, pictură, sculptură) constituie o pagină de istorie. Analizând-o, prin modul în care a fost concepută, dar și prin materialele și tehnicile de lucru abordate, putem observa modul de gândire al unui popor, al unei persoane, caracteristicile unei epoci, nivelul de trai, etc."
    },
    {
      title : "CUGETĂRI",
      text : "„Arta trebuie să odihnească și să vindece contrarietățile interioare ale omului. Aceste contrarietăți derivă din însuși destinul lui și din tragedia lui. Arta are și această misiune terapeutică; să ne amintim numai de Catharsisul aristotelic.” - Constantin Brâncuși"
    }
  ]

  ngOnInit(): void {
  }

  onGoToTop() {
    window.scrollTo(0, 0)
  }
}
