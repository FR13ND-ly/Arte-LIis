import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  sections = [
    {
      details : {
        name : "<em>ROBOȚII echipei PEPPERS, la cea mai mare competiție de robotică din România pentru licee</em> <br>- București, 1-4 aprilie 2022",
        description : `Felicitări echipei Peppers pentru motivația și pasiunea de care au dat dovadă la etapa națională a FTC, cea mai mare competiție de robotică din România pentru licee!<br>  Felicitări echipei Peppers, coordonată de prof. Mirela Țibu, pentru calificarea la etapa națională a Concursului de Robotică BRD-First Tech Challenge care s-a desfășurat la București, în perioada 1 – 4 aprilie 2022!</h6>
        <br><b>Felicitări Victor Tcaciuc, membru al echipei CyLiis, pentru că a primit distincția de Dean's List din partea Nație Prin Educație și va participa la etapa internațională a competiției!</b>
        <p>Prin robotul, standul pregătit de ei și atitudinea lor, Peppers a convins jurații și echipele din România de performanța pe care o realizează în robotică. Au câștigat locul 3 la Think Award, distincție oferită echipelor care demonstrează că își investesc timp pentru construirea unui robot inteligent. Acest premiu este al doilea cel mai râvnit, fiind greu de obținut, iar primul, premiul Inspire a fost obținut tot de către Peppers la etapa regională.</p>
        <p><strong>Membrii echipei Peppers sunt:</strong><br> <strong>Adia Ioana Romanescu</strong> - LIIS (marketing manager și lider al echipei Peppers - a coordonat evenimentul Dăruiește un robot și evoluția echipei),<br><strong> Codrin Crîșmariu</strong> - LIIS (coordonator al întregii secțiuni de tehnic și care a îmbinat ideile inovative cu un stil de lucru plăcut pentru echipă și driver al robotului),<br><strong> George Ioan Stoica </strong>- Colegiul "Costache Negruzzi" Iași (fundraising manager al echipei Peppers și coordonator al secțiunii de scriere a caietului tehnic, a coordonat concursul național Peppers++ și s-a remarcat prin seriozitate și profesionalism în marketing), <br><strong>Theodor Bulacovschi</strong> - Colegiul "Costache Negruzzi" Iași (un alt lider în materie de robotică și printare 3D care a ajutat majoritatea echipei să învețe cât mai multe noțiuni în aceste domenii), <br><strong>Radu Costache </strong>- LIIS (coordonator al secțiunii de scriere a caietului tehnic din cadrul concursului și o minte sclipitoare în materie de marketing și resurse umane dovedite anual în procesul de recrutare),<br> <strong>Armand Miron </strong>- LIIS (programatorul de bază a echipei, alături de Codrin, a reușit să creeze un program foarte eficient și să inoveze folosirea mecanismelor de pe robot prin automatizare și coach al echipei), <br><strong>Ștefan Popa</strong> - LIIS (coordonator al departamentului de editare grafică, a monitorizat și lucrat alături de colegii lui la realizarea materialelor video în special), <br><strong>Andrei Bălășescu</strong> - LIIS (unul dintre cei mai energici membrii ai echipei, s-a implicat excepțional în realizarea robotului dar și în departamentele non tehnice și driver al robotului),<br> <strong>Cristiana Balcanu</strong> - LIIS (membru dedicat al echipei de design grafic, Cristiana a realizat câteva din cele mai reușite grafici ale echipei pentru caietul tehnic și postările de pe rețelele de socializare),<br> <strong>Andrei Tamaș</strong> - LIIS (un adevărat jucător de echipă și totodată un membru de bază al departamentului de mecanică, Andrei a ajutat pe parcursul sezonului la realizarea robotului și a fost și driver în anumite meciuri), <br><strong>Iustina Țibîrna </strong>- Colegiul "Costache Negruzzi" Iași (coordonator al secțiunii de fundraising, Iustina a învățat foarte rapid importanța comunicării eficiente și a devotamentului pentru echipă, totodată coordonator în organizarea evenimentului Women in Soft Camp),<br><strong> Ana Acsinte</strong> - Colegiul "Costache Negruzzi" Iași (coordonator la departamentul de resurse umane și una dintre cele mai mari surse de creativitate în marketing),<br><strong> Arin Donciu</strong> - LIIS (membru al echipei de design grafic, a contribuit cu creativitatea lui la realizarea unora din cele mai frumoase stickere de la etapa națională și la caietul tehnic),<br><strong> Ana-Maria Panțiruc</strong> - LIIS (membru al echipei de design grafic, Ana a revoluționat alături de colegii ei folosirea abilităților artistice în lumea roboticii prin design în cadrul caietului tehnic și al postărilor pe rețelele de socializare) și <br><strong>Tudor Popa</strong> - Liceul Teoretic "Miron Costin" Iași (membru devotat al departamentelor de marketing și design, care ne-a impresionat prin abilitățile sale de lucrat în echipă, design video, marketing și utilizarea limbajului LaTeX) . <br><strong>Voluntarii echipei care au participat la etapa națională sunt:</strong><br> <strong>Bianca Hulub</strong> - LIIS (o sursă de creativitate, Bianca a contribuit la design-ul caietului tehnic și la coordonarea acestui departament), <br><strong>Elisa Ioana Mercaș</strong> - LIIS (atitudinea ei profesionistă și implicarea sa deosebită în departamente precum fundraising și marketing a cucerit echipa), <br><strong>Țvetcu Dan Stefanos</strong> - LIIS (implicat atât cu inima cât și cu mintea, Ștefi a reușit să realizeze multe dintre video-urile de promovare ale echipei), <br><strong>Iftimia Matei</strong> - LIIS (voluntar care s-a remarcat deosebit prin implicarea lui la mecanică, marketing și la realizarea caietului tehnic) și<br><strong> Adela Chiriță</strong> - LIIS (voluntar care a reușit să contribuie consistent la desfășurarea activităților echipei și la procesul de redactare al caietului tehnic).</p>
          <b>Felicitări, Peppers, ați reprezentat Iași-ul și Moldova cu grație!</b><br>
          <a class="facebook-icon" href="https://www.facebook.com/romanescu.adina.9/videos/488374532989356" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a class="facebook-icon" href="https://www.facebook.com/romanescu.adina.9/videos/943669896304890" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a class="facebook-icon" href="https://www.facebook.com/photo/?fbid=3192873367608575&set=pcb.3192874037608508" target="_blank"><i class="fab fa-facebook-square"></i></a>
          `
      },
      images : [
        [
          "/assets/images/sport/peppers/peppers1.jpg",
          "/assets/images/sport/peppers/peppers2.jpg",
          "/assets/images/sport/peppers/peppers3.jpg",
        ],
        [
          "/assets/images/sport/peppers/peppers4.jpg",
          "/assets/images/sport/peppers/peppers5.jpg",
          "/assets/images/sport/peppers/peppers6.jpg",
        ],
        [
          "/assets/images/sport/peppers/peppers7.jpg",
          "/assets/images/sport/peppers/peppers8.jpg",
          "/assets/images/sport/peppers/peppers9.jpg",
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/OJVzPv_fkyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Echipa de baschet, liceu, locul I la Olimpiada Sportului Școlar Iași, etapa județeană - aprilie 2022",
        description : `Felicitări fetelor noastre minunate din echipa de baschet liceu, pentru locul I la Olimpiada Sportului Școlar Iași, etapa județeană! <br>Felicitări dragele noastre: Adelina Niță, Carla Tololoi, Hurmuz Iustina, Hurmuz Ștefana, Maftei Teodora, Rugina Mateea, Pavăl Andreea, Schipor Maria, Rus Alesia, Chiriac Mara Teodora, Rugină Mateea, Maftei Teodora, Ceban Mădălina, Buia Loredana, Ticu Daria! <br>Felicitări antrenorilor, profesor Florin Hurduc și profesor Milica Marian! Mult succes la etapa regională! <br>Știm că veți duce LIIS în tribune, pentru galerie, la etapa națională!`
      },
      images : [
        [
          "/assets/images/sport/baschet/baschet1.jpg",
          "/assets/images/sport/baschet/baschet2.jpg",
          "/assets/images/sport/baschet/baschet3.jpg",
        ]
      ],
    },
    {
      details : {
        name : "Amalia Stan, clasa 10B, Scrimă",
        description : `Amalia se antrenează la CSS „Unirea” și a fost din nou sabia numărul 1 a Iașului. <br>„Numele meu este Amalia Stan, am 16 ani şi practic scrimă de performanţă. Am început scrima la 8 ani jumătate, iar de atunci nu am mai ieşit din sala de antrenament. Scrima este un sport deosebit, diferit de toate celelalte, mult mai complex şi mai rapid, care necesită o foarte bună pregătire fizică şi mentală. Trebuie să ai puterea să iei o decizie corectă ȋn mai puţin de o secundă. Să simți control, viteză şi reacţie, aşa aş defini scrima. Atunci când sunt pe planşă, totul din jur dispare şi sunt doar eu şi adversarul. Atunci când trag, mă simt <em>vie</em>, mă simt sigură pe mine şi cel mai important, atunci când sunt pe planşă mă simt mai  puternică decât oricând. Scrima mi-a oferit şansa de a vedea atât de multe ţări şi de a îmi deschide mintea la nou, de a mă maturiza şi m-a învăţat cum să fiu mai responsabilă în tot ce fac.”
        <br><b> 7 martie 2022  - Felicitări AMALIA STAN, VICECAMPIOANĂ EUROPEANĂ, Novi Sad, Serbia</b>
        <br><a class="facebook-icon href="https://fb.watch/bRLh3PTaR-/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        `
      },
      images : [
        [
          "/assets/images/sport/amalia/amalia6.jpg",
          "/assets/images/sport/amalia/amalia7.jpg",
          "/assets/images/sport/amalia/amalia8.jpg",
        ]
      ],
    },
    {
      details : {
        name : "27 noiembrie 2021 - CUPA MONDIALĂ DE SABIE  DE LA SOFIA ÎNCEPE CU O MEDALIE DE BRONZ LA ECHIPE",
        description : `În concursul feminin individual, 13 dintre sabrerele tricolore s-au calificat mai departe din grupe. În optimi, singura tricoloră rămasă în concurs, <strong>Amalia Stan</strong> a trecut categoric de poloneza Karolina Hofman (15-5), pentru ca în sferturi să o învingă pe ucrainianca Sofiya Polonka, cu 15-4. A urmat pentru Amalia meciul din semifinale, cu reprezentanta Bulgariei, Kalina Atanasova, în fața căreia a cedat cu 11-15. <strong>Amalia Stan a cucerit astfel medalia de bronz la Huniber-Cup,</strong> terminând concursul individual feminin pe locul al treilea.<br>
        <a href="https://frscrima.ro/2021/10/03/bronz-pentru-amalia-stan-la-godollo/?fbclid=IwAR28sn8m-GWSYjs0Pgr28BQ2ond2-oGxoxIQp8TArPW4ltLWKjwCqYnAG" target="_blank"><strong>Link: Bronz pentru Amalia Stan la Godollo</strong></a>`
      },
      images : [
        [
          "/assets/images/sport/amalia/amalia5.jpg",
          "/assets/images/sport/amalia/amalia4.jpg",
        ]
      ]
    },
    {
      details : {
        name : "Argint în Ungaria, la sabie feminin cadeți! - 2 octombrie 2021",
        description : `A 22-a ediție a concursului de sabie pentru cadeți Huniber Cup a adus echipei feminine a României o medalie de argint, cucerită de România 1, în componența Amalia Stan, Maria Alexe, Catinca Dumitru și Alexandra Mitruș.</strong> La concursul unde au participat 25 de echipe din 11 țări, România s-a înscris cu patru echipe: România 1 (Amalia Stan, Maria Alexe, Catinca Dumitru, Alexandra Mitruș), România 2 (Patricia Popa, Amalia Covaliu, Iulia Maria Păun, Andreea Șerbănoiu), România 3 (Rosemarie Benciu, Ana Dejescu, Teona Maria Icnoțiu, Ema Cîrligeanu), România 4 (Andreea Adăniloaie, Anastasia Fusea, Rebeca Tudorancea, Sofia Corlătescu).  […]<br> În optimi România 1 (Amalia Stan, Maria Alexe, Catinca Dumitru, Alexandra Mitruș) a fost victorioasă în fața Poloniei 2, de care a dispus cu scorul de 45-33; România 2 (Patricia Popa, Amalia Covaliu, Iulia Maria Păun, Andreea Șerbănoiu) a învins Germania 1 cu 45-38, iar România 3 a cedat cu 30-45 în fața primei echipe a Greciei.<br>
        <a href="https://frscrima.ro/2021/10/02/argint-in-ungaria-la-sabie-feminin-cadeti/?fbclid=IwAR1l4DZhAORgrzL_-DCAhNCDQaNjrStr7t54b65Mnsps3ALJf5xLeBP9qg0" target="_blank"><strong>Link: Argint in Ungaria la sabie feminin cadeți</strong></a>
        <a href="https://www.radiohit.ro/stiri/sabrerii-ieseni-au-facut-legea-la-cupa-romaniei-pentru-cadeti-si-juniori-amalia-stan-a-devenit-campioana-la-cadete-si-a-obtinut-argintul-la-junioare-iar-casian-cadu-a-luat-aurul-la-cadeti/" target="_blank"><strong>Link: Amalia Stan campioana la cadete</strong></a>
        <br><b>Felicitări Amalia Stan! Suntem mândri de tine!</b>
        `
      },
      images : [
        [
          "/assets/images/sport/amalia/amalia1.jpg",
          "/assets/images/sport/amalia/amalia2.jpg",
          "/assets/images/sport/amalia/amalia3.jpg",
        ]
      ]
    },
    {
      details : {
        name : "Rareș Constantin Hogaș, clasa 12D, Ciclism ",
        description : `„Mă numesc Rareș Constantin Hogaș, elev în clasa XII-a D la Liceul Teoretic de Informatică Grigore Moisil din Iași și sunt din orașul Târgu Frumos. <br> Mă număr printre tinerii care prin pasiune și multă muncă reușim să facem lucruri cu care să ne mândrim. De mic am fost pasionat de bicicletă, doar mă plimbam, o făceam de plăcere, fără să știu ce înseamnă cu adevărat ciclismul.
        În anul 2017, am inceput să ies cu bicicleta tatălui meu la ture mai lungi, nu conta că ploua, ningea sau era cald. Îmi plăcea! Am continuat să merg pe șosea, însă în anul 2018 am ieșit cu MTB ul în pădure, și de atunci m-am îndrăgostit de liniștea din pădure. Mă auzeam doar pe mine care sufeream la urcare, însă era o plăcere. Am început să mă antrenez mai serios, constant, după un plan structurat, intervale, ture lungi, tehnică, etc. La începutul anului 2019, am făcut cunoștință cu câțiva oameni dedicați ciclismului montan și astfel am fost legitimat la clubul de ciclism HPM Pro Mountain Sports. Din anul 2019 am început să particip la concursuri de XCO Cross Country Olimpic și concursuri de maraton. Și așa am început să câștig concursuri pe care nici nu visam că le pot termina, cu atât mai mult să le câștig. Voi enumera câteva dintre ele: XCO Avrig Triada MTB - locul 1 cadeți, XCO Paltiniș Triada MTB - locul 1 cadeți, Maraton Avrig Triada MTB traseu 40 km - locul 1, Maraton Moinești traseu 45km - locul 1 , Maraton Bicaz - locul 1, Maraton Măcin Mountain Fun - locul 1, Maraton Turul Masivului Ceahlău - locul 1, Maraton Bucovina MTB - locul 1, Maratonul nordului Botoșani - locul 1, Maraton MTB Roman - locul 1, Maraton Triada MTB Păltiniș - locul 2.
        La toate aceste concursuri am obținut locul 1 la general nu doar la categoria de vârstă, depășind rideri cu experiență și vârstă mult mai bogată.<br>În luna februarie 2020, am fost legitimat de către Federația Română de Ciclism la categoria Elite Juniori și am participat în Cipru la un concurs de 4 zile unde, împreună cu prietenul meu Călin Oprea, am obținut locul 5.<br> În februarie 2021 am fost selecționat de către Federația Română de Ciclism, pentru un cantonament de 3 săptămâni în Turcia, unde am participat și la curse de XCO. A fost o bucurie enormă pentru mine, de a reprezenta România peste hotare. <br>În mai 2021 am participat și câștigat Triada MTB Avrig la categoria 14-18 ani, dar și locul 1 general la traseul de 40km. A venit apoi locul 2 general la Maraton Măcin Mountain Fun. Locul 4 la Elite la Redbull Vampire Trails.
        <br>Gândurile mele se îndreaptă însă către ziua de 10 iulie 2021, ziua în care am devenit Campion Național al României la MTB Cross Country Olimpic categoria Juniori Elite. Concursul s-a desfășurat la Herneacova, jud.Timiș și au participat cei mai buni rideri din țară, inclusiv Campionul Mondial din 2019 la categoria Under 23 - Vlad Dascălu. <br>După Campionatele Naționale am fost selecționat din nou de către FRC pentru Balkaniada MTB din Bosnia Herzegovina, în perioada 29.07 - 02.08.2021, unde am obținut medalia de bronz. <br>La o săptămână distanță, după ce am efectuat câteva antrenamente la altitudine, în Austria, am fost selecționat pentru Campionatul Mondial XCO din Val di Sole, Italia, unde am întâlnit cei mai puternici rideri din lume. Am reușit un loc 79 după o cursă foarte grea. Un rezultat imens pentru mine, care mă motivează și care mă va pregăti pentru saltul la categoria Under 23-Elite!”
        Felicitări Rareș Constantin Hogaș! Suntem mândri de tine!
        <br><a class="facebook-icon" href="https://www.facebook.com/profile.php?id=100014859793790" target="_blank"><i class="fab fa-facebook-square"></i></a>`
      },
      images : [
        [
          "/assets/images/sport/rares/rares-ciclism3.jpg",
          "/assets/images/sport/rares/rares-ciclism4.jpg",
          "/assets/images/sport/rares/rares-ciclism5.jpg",
        ]
      ]
    },
    {
      details : {
        name : "Daria Miruna Lehaci, clasa 11D, Șah",
        description : `La doar 16 ani abia împliniți, <strong>Daria Miruna Lehaci este Maestră FIDE</strong> și are în palmares 7 titluri naționale de juniori, un argint la naționalele de seniori și un titlu mondial școlar. Asta doar la șah clasic individual. La șah pe echipe, Miruna este deja campioană națională de senioare cu Politehnica Iași și are un argint european cu echipa României sub 18 ani. Lista poate continua cu trofeele de la șah rapid și blitz, unde iese în evidență titlul european la sub 14 ani. În total, Miruna a cucerit peste 80 de trofee în cei 9 ani de când face șah.</p>
        <b>Felicitări Daria Miruna Lehaci! Suntem mândri de tine!</b>`
      },
      images : [
        [
          "/assets/images/sport/lehaci miruna.jpg"
        ]
      ],
      videos : [
        this.sanitizer.bypassSecurityTrustHtml(`<iframe class="resp-iframe" src="https://www.youtube.com/embed/EVFDOm13P2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
      ]
    },
    {
      details : {
        name : "Sofia Crețu, clasa 5A, Șah",
        description : `<p>„Mă numesc Sofia Crețu, am 11 ani și, în anul 2018, la vârsta de 8 ani, am devenit <em>campioană europeană la șah rapid</em>, prin participarea la <em>Campionatul European de Șah Rapid pentru Juniori</em> de la Oradea. Am obținut acest titlu câștigând 7 partide și făcând o remiză din 9 partide posibile, jucate cu adversare deja cotate internațional. Tot în anul 2018 am obținut și titlul de <em>vicecampioană națională la dezlegări (probleme de șah)</em>, în cadrul <em>Campionatului Național de Juniori</em> de la Căciulata. <br>Șahul este pasiunea mea de mulți ani. Prima oară am jucat șah cu tata, apoi am început să particip la concursuri de top Open (fără categorie de vârstă) unde am câștigat multe medalii și cupe alături de părinții mei și ursulețul Nunu, jucăria de pluș pe care am luat-o cu mine la fiecare concurs. <br>Am învățat din toate aceste competiții că este important să câștigi, dar nu cel mai important lucru. <br>Am învățat că, mai ales înfrângerea, este un motiv în plus să continui și că, indiferent de câștigător, la sfârșitul partidei ne strângem mâna.”</p>
        <b>Felicitări Sofia Crețu! Suntem mândri de tine!</b>`
      },
      images : [
        [
          "/assets/images/sport/sofia/sofia1.png",
          "/assets/images/sport/sofia/sofia2.jpg",
          "/assets/images/sport/sofia/sofia3.jpg",
          "/assets/images/sport/sofia/sofia4.jpg",
        ]
      ]
    },
    {
      details : {
        name : "Maria Ioana Martinaș, clasa 11B, Scrimă",
        description : `<p>„Eu cred că toată lumea poate deveni un sportiv de performanță. Aici nu ține nimic de talent sau situație financiară. Atâta timp cât îți dorești și muncești din greu pentru visul tău nimic nu îți poate sta în cale. Trebuie doar să te dedici în totalitate acelui lucru, și mai ales să îl faci din pasiune și plăcere. A fi campion nu înseamnă doar să câștigi locul 1, înseamnă să fii un adevărat luptător. Să nu cedezi obstacolelor sau eșecului, să înveți din ele, să te corectezi și să te perfecționezi cu fiecare antrenament, cu fiecare concurs.”</p>
        <p>Mai multe detalii pot fi obținute accesând link-urile de mai jos:</p>
        <p><a href="https://frscrima.ro/2021/03/03/incep-nationalele-pentru-cadeti-si-juniori/" target="_blank"><strong>Link: Maria Ioana Martinaș - naționalele pentru cadeți și juniori</strong></a></p>
        <p><a href="https://frscrima.ro/2020/01/12/c-n-cadeti-sabie-feminin-echipe/" target="_blank"><strong>Link: Maria Ioana Martinaș - sabie-cadeți-feminin-echipe</strong></a></p>
        <b>Felicitări Maria Ioana Martinaș! Suntem mândri de tine!</b>`
      },
      images : [
        [
          "/assets/images/sport/maria ioana martinaș.jpg"
        ]
      ]
    },
    {
      details : {
        name : "Alexia Andrieș, clasa 6C, Șah",
        description : `
          <p>"Am început să joc șah din anul 2016, iar din următorul an am participat la Campionatele Naționale Individuale de Şah pentru Copii şi Juniori, organizate la Băile Felix, unde am obținut locul I la Şah Blitz cu 9 puncte din 9 şi locul II la Şah Rapid cu 7,5 puncte din 9 posibile. În anul 2017, la Campionatul Național de Şah pe Echipe de Juniori, organizat la Bucureşti, am luat 3 medalii de aur: şah classic, şah rapid şi şah blitz, obținând totodată şi medalia pentru cea mai bună jucătoare de pe masa nr 1. Din februarie 2017 până în 2018, înainte de Campionatele Naționale, am ajuns de la 1073 la 1321 puncte Elo. În 2019, la Campionatele Naționale Individuale de Şah pentru Copii şi Juniori, organizate la Călimăneşti-Căciulata, am obținut 3 medalii de broz la şah clasic, rapid și blitz, iar la dezlegări m-am clasat pe locul I. În anul 2019, la Campionatul Național de Şah pe Echipe de Juniori, care a fost organizat la Iaşi, am obținut din nou medalia de aur. La Campionatele Europene am câștigat titlul de Vice Campioană Europeană. Împreună cu domnul profesor Vlad Ungureanu, am fost invitată la KissFM pentru a împărtaşi gânduri despre această experiență minunată. În 2020 nu s-au mai organizat Campionatele Naționale de Copii și Juniori însă, acum, în 2021, se vor organiza la București. <br> În total, am un număr de 1026 de partide oficiale, având un coeficient ELO de 1553, la şah clasic."</p>
          <strong>Felicitări Alexia Andrieș! Suntem mândri de tine!</strong><br>
          <a class="facebook-icon" href="https://www.facebook.com/academiadesahcotnari/photos/a.1042944179217795/1786396388205900/"><i class="fab fa-facebook-square"></i></a>
          <a class="facebook-icon" href="https://www.facebook.com/academiadesahcotnari/photos/pcb.1784180111760861/1784178905094315"><i class="fab fa-facebook-square"></i></a>
          `
      },
      images : [
        [
          "/assets/images/sport/andries/andrieș1.jpg"
        ]
      ]
    }
  ]

  ngOnInit(): void {
  }

}
