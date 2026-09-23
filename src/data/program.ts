export type PartId = "I" | "II";

export type PillarId = "pensja" | "cialo" | "mieszkanie" | "bezpieczenstwo";

export type Chapter = {
  num: number;
  slug: string;
  part: PartId;
  title: string;
  kicker: string;
  lead: string;
  pillars: PillarId[];
  points: { n: string; title?: string; body: string }[];
};

export const PARTY = {
  name: "Realna Lewica",
  label: "Socjaldemokracja realistyczna",
  slogan: ["Twoja pensja.", "Twoje ciało.", "Twoje mieszkanie.", "Twoje bezpieczeństwo."],
  version: "23 września 2026",
  versionNote: "Wersja złożona",
};

export const INTRO = {
  title: "Kim jesteśmy",
  paragraphs: [
    "Jesteś zmęczony czekaniem — na mieszkanie, na lekarza, na pensję, która starczy na coś więcej niż rachunki. Zmęczony tym, że o Twoim ciele decyduje ktoś inny, i że jeden człowiek na Zamku może zatrzymać ustawę, na którą zagłosowały miliony.",
    "Realna Lewica to socjaldemokracja realistyczna: silne państwo przy pensji, zdrowiu, mieszkaniu i prawie do własnego ciała; sprawne między władzą centralną a samorządem; twarde tam, gdzie chaos niszczy zaufanie — w granicy i w kasie.",
    "Nie obiecujemy daty euro ani sześciu procent PKB na armię w tej kadencji — przy 4-dniowym tygodniu i dojściu do 7% PKB na zdrowie to by się finansowo nie spięło. Mówimy to na pierwszej stronie, nie w przypisie na końcu.",
  ],
};

export const PILLARS: {
  id: PillarId;
  label: string;
  line: string;
  slug: string;
}[] = [
  {
    id: "pensja",
    label: "Pensja",
    line: "Cztery dni, płaca przy medianie, koniec z umowami, które udają etat.",
    slug: "praca",
  },
  {
    id: "cialo",
    label: "Ciało",
    line: "Zdrowie z budżetu, aborcja do 12. tygodnia, psychiatria w 14 dni. Nie poseł i nie biskup.",
    slug: "zdrowie",
  },
  {
    id: "mieszkanie",
    label: "Mieszkanie",
    line: "25–40 tysięcy lokali rocznie z celowej daniny. Publiczne zostaje publiczne.",
    slug: "mieszkanie",
  },
  {
    id: "bezpieczenstwo",
    label: "Bezpieczeństwo",
    line: "Obrona na dzisiejszym, już wysokim poziomie. Granica według prawa, nie przypadku.",
    slug: "obrona",
  },
];

export const HONEST = {
  stays: [
    "4-dniowy tydzień pracy",
    "Waloryzacja świadczeń (bez emerytur) według płac",
    "Połowa drogi do 7% PKB na zdrowie",
    "Danina mieszkaniowa 1% funduszu płac",
    "Polityka alkoholu i konopi",
    "Nowa skala PIT",
    "480 dni urlopu związanego z dzieckiem",
    "Płaca minimalna do 75% mediany — stopniowo",
    "Linux i polskie AI w administracji",
  ],
  later: [
    "Data przyjęcia euro",
    "Skok wydatków obronnych do 6% PKB",
    "Pełne 7% PKB na zdrowie — to cel na dwie kadencje",
  ],
};

export const POSTULATES: {
  n: string;
  title: string;
  line: string;
  slug: string;
  hash: string;
}[] = [
  {
    n: "01",
    title: "Cztery dni, ta sama pensja",
    line: "Etapami: najpierw sektor publiczny i firmy powyżej 250 osób. Prawo do odłączenia się po godzinach — od pierwszego roku.",
    slug: "praca",
    hash: "p-5",
  },
  {
    n: "02",
    title: "Minimalna do 75% mediany",
    line: "Dziś około 63%. W kadencji co roku około 3 punkty procentowe. Potem rośnie z pensjami, nie z jednorazowej decyzji.",
    slug: "praca",
    hash: "p-6",
  },
  {
    n: "03",
    title: "PIT bez zmian do 300 tysięcy",
    line: "12% i 32% zostają. Powyżej — 48, 56 i 71%, tylko od nadwyżki. Danina solidarnościowa zostaje.",
    slug: "gospodarka",
    hash: "p-1",
  },
  {
    n: "04",
    title: "Zdrowie: 7% PKB w dwóch kadencjach",
    line: "Nie w jednej. NFZ jako osobna kasa znika. Pierwsza wizyta u psychiatry — maksymalnie 14 dni.",
    slug: "zdrowie",
    hash: "p-1",
  },
  {
    n: "05",
    title: "O ciele nie decyduje poseł",
    line: "Aborcja na żądanie do 12. tygodnia. Placówka publiczna nie odmawia zabiegu klauzulą sumienia.",
    slug: "zdrowie",
    hash: "p-7",
  },
  {
    n: "06",
    title: "Mieszkanie z daniny, nie z powietrza",
    line: "25–40 tysięcy lokali rocznie. 1% funduszu płac, po połowie z pasku i od pracodawcy. Publiczne zostaje publiczne.",
    slug: "mieszkanie",
    hash: "p-1",
  },
  {
    n: "07",
    title: "480 dni przy dziecku",
    line: "Do 12. roku życia. 90 dni dla każdego rodzica, bez przekazania. Samotny rodzic dostaje całą pulę.",
    slug: "opieka",
    hash: "p-5",
  },
  {
    n: "08",
    title: "Atom w 20–25 lat, nie na slajdzie",
    line: "Około 12 GW. Przyspieszamy Lubiatowo-Kopalino i Pątnów. Harmonogram sprawdzany co 3–4 lata.",
    slug: "atom-krzem-stal",
    hash: "p-1",
  },
  {
    n: "09",
    title: "Koniec weta jednego człowieka",
    line: "Prezydent traci weto i prawo łaski. 250 tysięcy podpisów może zawiesić ustawę — także naszą.",
    slug: "ustroj",
    hash: "p-14-2",
  },
  {
    n: "10",
    title: "Obrona zostaje tam, gdzie jest",
    line: "Około 4,8–5,2% PKB. Sześć procent nie jest obietnicą tej kadencji.",
    slug: "obrona",
    hash: "p-1",
  },
  {
    n: "11",
    title: "Euro bez daty",
    line: "Złoty zostaje. Przygotowania prawne — tak. ERM II dopiero po ścieżce fiskalnej z tego programu.",
    slug: "gospodarka",
    hash: "p-14",
  },
  {
    n: "12",
    title: "Alkohol i konopie bez hipokryzji",
    line: "Koniec marketingu, małpek i alkoholu w sklepie spożywczym. Do 15 gramów przy sobie nie jest przestępstwem. Obrót konopi — państwowy.",
    slug: "zdrowie",
    hash: "p-14",
  },
];

export const CHAPTERS: Chapter[] = [
  {
    num: 1,
    slug: "atom-krzem-stal",
    part: "I",
    title: "Polska z atomu, krzemu i stali",
    kicker: "Energia i przemysł",
    lead: "Dekady niedoinwestowania energetyki i przemysłu odbijają się czkawką. Bez suwerennego planu zostaniemy z infrastrukturą z poprzedniej epoki, kupując u innych to, co powinniśmy umieć zrobić sami.",
    pillars: ["bezpieczenstwo"],
    points: [
      {
        n: "1",
        title: "Atomowa Polska",
        body: "Program „Atomowa Polska” zakłada docelowo około 12 GW mocy jądrowej, ale w realistycznym horyzoncie 20–25 lat, nie 15 — bo tak jest po prostu uczciwiej wobec ludzi, którym się to obiecuje. Nie zaczynamy od zera: przyspieszamy projekty, które już są w budowie (Lubiatowo-Kopalino, Pątnów), a postęp sprawdzamy co 3–4 lata, żeby wiedzieć, kiedy harmonogram trzeba skorygować, zamiast udawać, że wszystko idzie zgodnie z planem.",
      },
      {
        n: "2",
        title: "Wiatr i słońce równolegle",
        body: "Równolegle z atomem stawiamy na energetykę wiatrową i słoneczną, bo te dają dodatkową moc w sieci szybciej niż elektrownie jądrowe, które budują się latami — nie czekamy z rękami złożonymi na atom, żeby zacząć produkować czystą energię.",
      },
      {
        n: "3",
        title: "Regiony górnicze",
        body: "Górnicy pracujący dziś w spółkach Skarbu Państwa mają zagwarantowaną pracę do emerytury, nie zwolnienie z dnia na dzień pod pretekstem transformacji. Każde zlikwidowane stanowisko w energetyce konwencjonalnej ma mieć swój odpowiednik — nowe miejsce pracy w tym samym regionie, nie gdzieś odległym, do którego trzeba się przeprowadzić.",
      },
      {
        n: "4",
        title: "Trzy kompetencje",
        body: "Budujemy krajowe kompetencje przemysłowe w trzech kluczowych obszarach: energetyce jądrowej, produkcji półprzewodników i budowie maszyn — żeby nie być zależni wyłącznie od zagranicznych wykonawców i cudzych technologii, kiedy przyjdzie kolejny kryzys dostaw.",
      },
      {
        n: "5",
        title: "Koniec limitu 60%",
        body: "Znosimy konstytucyjny limit, który dziś zakazuje zadłużania państwa powyżej 60% PKB. Dług zaciągnięty na budowę elektrowni atomowej czy modernizację sprzętu dla wojska jest ekonomicznie czymś innym niż dług na codzienne wydatki budżetu — inwestycja, która będzie służyć dekadami, nie powinna być traktowana tak samo jak dziura w budżecie na bieżące pensje.",
      },
      {
        n: "6",
        title: "Fundusz Inwestycji Strategicznych",
        body: "Powołujemy Fundusz Inwestycji Strategicznych, który finansuje z długu program atomowy i modernizację wojska. Mieszkania nie są finansowane z tego funduszu — ich finansowanie opisujemy w rozdziale o mieszkaniu, bo to inny, celowy mechanizm oparty na daninie, nie na długu.",
      },
      {
        n: "7",
        title: "Kolej",
        body: "Inwestujemy w kolej: połączenia dużych prędkości, kolej regionalną łączącą mniejsze miasta, połączenia nocne i nowe centra przesiadkowe budowane z wykorzystaniem polskich technologii, nie tylko importowanych rozwiązań.",
      },
      {
        n: "8",
        title: "Jeden system opłat na autostradach",
        body: "Autostrady dostają jeden, elektroniczny system poboru opłat w miejsce dzisiejszego rozdrobnienia między różne firmy i systemy. Dzisiejsze koncesje na autostrady nie są wykupywane przed czasem kosztem podatnika — po prostu wygasają naturalnie, kiedy się skończą.",
      },
      {
        n: "9",
        title: "Porty i bocznice",
        body: "Rozbudowujemy zdolności przeładunkowe portów i terminali oraz bocznice kolejowe, żeby towar mógł jeździć koleją, nie tylko zapychać autostrady ciężarówkami.",
      },
      {
        n: "10",
        title: "Autobus w każdej gminie",
        body: "Publiczne autobusy wracają do każdej gminy: kursy w dni robocze, plus przynajmniej trzy kursy w weekend, z pojazdami dostępnymi dla osób z niepełnosprawnościami — koniec z gminami, do których po prostu nie da się dojechać bez samochodu.",
      },
      {
        n: "11",
        title: "Jeden bilet",
        body: "Wprowadzamy jeden bilet działający u wszystkich przewoźników, z przewidywalnym rozkładem jazdy, który nie zmienia się co chwilę bez ostrzeżenia.",
      },
      {
        n: "12",
        title: "Cyfrowa niezależność",
        body: "Budujemy własną infrastrukturę do przechowywania danych i przechodzimy z oprogramowania Microsoftu na system Linux i pakiet openDesk: w pierwszym roku 50 tysięcy stanowisk pracy w administracji, w piątym roku co najmniej 80% całej administracji publicznej. Kod napisany za pieniądze podatnika ma być publicznie dostępny.\n\nJeden login wystarczy do załatwienia sprawy w urzędzie i w systemie zdrowia. Cyfryzujemy Państwową Inspekcję Pracy i ZUS. Uruchamiamy program „Polskie AI” — modele językowe trenowane na polskich tekstach, na krajowej infrastrukturze, z pierwszym modelem do obsługi administracji gotowym w ciągu 36 miesięcy. Zakazujemy trenowania sztucznej inteligencji na Twoich danych osobowych bez Twojej zgody.",
      },
      {
        n: "13",
        title: "Rachunki, nie dyrektywa na papierze",
        body: "Nie podnosimy cen energii tylko po to, żeby na papierze „spełnić unijną dyrektywę” klimatyczną. Koszty transformacji energetycznej nie mogą spadać na osoby najmniej zarabiające. Od wejścia unijnego systemu ETS2 gospodarstwa o niskich dochodach dostają dopłaty ze Społecznego Funduszu Klimatycznego i wpływów z ETS — bez dodatkowego obciążenia budżetu.",
      },
      {
        n: "14",
        title: "Ciepło i węgiel w miastach",
        body: "Od 2035 roku zakazujemy ogrzewania węglem w domach w miastach. Publiczne sieci ciepłownicze nie mogą zostać sprzedane prywatnym inwestorom, a gdy sprzedawana jest sieć prywatna, gmina ma prawo pierwokupu.",
      },
      {
        n: "15",
        title: "Rezerwy surowców",
        body: "Budujemy rezerwy strategiczne: gaz na 90 dni, ropa na 60 dni, węgiel energetyczny na 30 dni — żeby żaden kryzys dostaw z zagranicy nie zaskoczył kraju z pustymi magazynami.",
      },
      {
        n: "16",
        title: "Państwowy holding budowlany",
        body: "Tworzymy państwowy holding budowlany specjalizujący się w kolei i energetyce — duże, strategiczne inwestycje infrastrukturalne państwo realizuje częściowo własnymi rękami, nie tylko zamawia u prywatnych firm. Ten holding nie zajmuje się budową mieszkań.",
      },
    ],
  },
  {
    num: 2,
    slug: "praca",
    part: "I",
    title: "Państwo po stronie pracujących",
    kicker: "Praca",
    lead: "Miliony ludzi pracujących codziennie utrzymują ten kraj, a przez lata państwo patrzyło z boku, jak są pozbawiani stabilnej pracy, głosu w firmie i zwykłej ludzkiej ochrony przed wyzyskiem.",
    pillars: ["pensja"],
    points: [
      {
        n: "1",
        title: "Związki i rady",
        body: "Ułatwiamy wchodzenie w spór zbiorowy i organizowanie strajków solidarnościowych, a pracodawcom utrudniającym działanie związków zawodowych grożą wyższe kary. W firmach od 500 do 1999 osób pracownicy wybierają jedną trzecią miejsc w radzie nadzorczej; od 2000 osób — formalnie połowę, choć w razie remisu głos rozstrzygający ma strona kapitałowa. Każda firma od 50 osób musi mieć radę zakładową.",
      },
      {
        n: "2",
        title: "Inspekcja pracy",
        body: "Bronimy prawa Państwowej Inspekcji Pracy do samodzielnego przekwalifikowania umowy cywilnoprawnej lub B2B na umowę o pracę, bez czekania na wyrok sądu — obowiązującego od lipca 2026 roku. Żeby to prawo działało w praktyce, w ciągu kadencji podwajamy liczbę inspektorów pracy.",
      },
      {
        n: "3",
        title: "Mobbing jak wypadek",
        body: "Osoba, która stała się ofiarą mobbingu w pracy, jest traktowana tak jak ofiara wypadku przy pracy — dostaje pełny zasiłek, ochronę przed zwolnieniem na czas trwania sprawy i prawo do odszkodowania od pracodawcy.",
      },
      {
        n: "4",
        title: "Koniec darmowych staży",
        body: "Kończymy z praktyką bezpłatnych staży i wolontariatu, które w rzeczywistości są normalną pracą bez wynagrodzenia. Sprawy pracownicze trafiają do osobnego pionu sądów pracy — wyrok w pierwszej instancji zapada w ciągu 6 miesięcy od wniesienia pozwu.",
      },
      {
        n: "5",
        title: "Cztery dni",
        body: "Wprowadzamy 4-dniowy tydzień pracy bez utraty wynagrodzenia, etapowo: w pierwszych dwóch latach sektor publiczny i firmy powyżej 250 osób, z oceną efektów po 18 miesiącach. W latach 3–5 dołącza reszta gospodarki, z dłuższym czasem dla firm do 50 pracowników. Prawo do odłączenia się po godzinach działa od pierwszego roku.\n\nZnosimy ustawowy zakaz handlu w niedzielę — to ma być decyzja pracownika i pracodawcy — ale za pracę w niedzielę należy się 250% zwykłej stawki. Sprzedaż alkoholu w niedzielę zostaje zakazana ze względów zdrowotnych, nie religijnych.",
      },
      {
        n: "6",
        title: "Płaca minimalna",
        body: "Płaca minimalna dochodzi do 75% mediany krajowego wynagrodzenia stopniowo, w ciągu kadencji — co roku o około 3 punkty procentowe (dziś to około 63%). Potem rośnie razem z pensjami w całej gospodarce.",
      },
      {
        n: "7",
        title: "Widełki w ogłoszeniu",
        body: "Każde ogłoszenie o pracę musi podawać widełki wynagrodzenia w samej treści ogłoszenia. Wprowadzamy mechanizmy korygujące różnice w wynagrodzeniach kobiet i mężczyzn za tę samą pracę.",
      },
      {
        n: "8",
        title: "Koniec premii za obecność",
        body: "Kończymy z premiami frekwencyjnymi, które w praktyce finansowo karzą pracownika za to, że poszedł na chorobowe.",
      },
      {
        n: "9",
        title: "Sektor publiczny",
        body: "Pensje w sektorze publicznym są powiązane ze średnim wynagrodzeniem w gospodarce i waloryzowane co roku co najmniej o inflację. Kończymy z outsourcingiem stałych zadań administracji do firm zewnętrznych jako sposobem na obejście przepisów o zatrudnieniu.",
      },
      {
        n: "10",
        title: "Fundusz Automatyzacji",
        body: "Firmy, które redukują etaty w wyniku automatyzacji i robotyzacji, płacą dodatkową część podatku CIT do Funduszu Automatyzacji, z którego finansujemy przekwalifikowanie zwalnianych pracowników.",
      },
      {
        n: "11",
        title: "Praca użyteczna",
        body: "Samorządy w regionach z wysokim bezrobociem dostają środki na tworzenie miejsc pracy przy zadaniach użytecznych społecznie — nie fikcyjnych etatów, tylko realnej pracy, która inaczej by nie powstała.",
      },
      {
        n: "12",
        title: "Twórcy",
        body: "Osoby, dla których twórczość artystyczna jest głównym źródłem dochodu, płacą połowę standardowej składki zdrowotnej, emerytalnej i opiekuńczej. Drugą połowę pokrywa Fundusz Ubezpieczeń Twórców: 2% wartości honorarium płacone przez wydawnictwa, teatry, galerie i organizatorów, plus dotacja z budżetu.",
      },
      {
        n: "13",
        title: "Ubezpieczenie od utraty pracy",
        body: "Symboliczny zasiłek dla bezrobotnych zastępujemy ubezpieczeniem: pierwsze 6 miesięcy to 80% ostatniej pensji, kolejne 6 miesięcy — 50%, z górnym limitem takim samym jak przy zasiłku chorobowym.",
      },
    ],
  },
  {
    num: 3,
    slug: "gospodarka",
    part: "I",
    title: "Gospodarka dla ludzi",
    kicker: "Podatki i własność",
    lead: "Dziś zwykły pracujący człowiek płaci wyższy realny podatek niż wielu milionerów korzystających z ulg wylobbowanych przez lata. Odwracamy tę logikę — prosto i nisko dla większości, wyraźnie więcej od tych, którzy naprawdę mogą sobie na to pozwolić.",
    pillars: ["pensja"],
    points: [
      {
        n: "1",
        title: "Pięć progów PIT",
        body: "12% do 120 tys. zł i 32% od 120 do 300 tys. — bez zmian. Dalej: 48% od 300 do 800 tys., 56% od 800 tys. do 2 mln i 71% powyżej 2 mln. Każda wyższa stawka dotyczy tylko nadwyżki nad progiem. Zostaje 4-procentowa danina solidarnościowa od dochodów powyżej 1 mln, więc realnie najwyższe stawki wynoszą 60% (od 1 do 2 mln) i 75% (powyżej 2 mln).",
      },
      {
        n: "2",
        title: "Podatek majątkowy",
        body: "Majątek netto powyżej 7 mln zł obejmujemy podatkiem od 1% do 8%, zależnie od wielkości fortuny. Żeby dało się to naliczać, tworzymy krajowy rejestr majątkowy.",
      },
      {
        n: "3",
        title: "Spadki",
        body: "Spadki i darowizny powyżej 2 mln zł na jednego spadkobiercę: 10% do 5 mln, 20% do 20 mln, 25% powyżej. Mieszkanie, w którym spadkobierca faktycznie mieszkał, oraz rodzinne oszczędności do 2 mln zł są wolne.",
      },
      {
        n: "4",
        title: "Koniec świętych krów",
        body: "Ryczałt zostaje tylko dla małych działalności usługowych do 200 tys. zł przychodu rocznie. Wynajem zawsze na skali PIT. Podatek liniowy dla firm znika. Duchowni przechodzą na ogólne zasady, bez specjalnych przywilejów.",
      },
      {
        n: "5",
        title: "Koniec 30-krotności",
        body: "Znosimy limit 30-krotności, powyżej którego dziś nie płaci się składek emerytalnych i rentowych. Żeby nie tworzyć bardzo wysokich emerytur, wprowadzamy górny limit świadczenia.",
      },
      {
        n: "6",
        title: "CIT",
        body: "Duże firmy, z przychodem powyżej 50 mln zł rocznie, płacą CIT 22% zamiast 19%. Małe firmy zostają przy 9%.",
      },
      {
        n: "7",
        title: "Ulgi zależne od dochodu",
        body: "Likwidujemy zerowy PIT dla młodych do 26. roku życia i dla pracujących seniorów. Ulga na dzieci dostaje próg dochodowy dla wszystkich rodzin, nie tylko tych z jednym dzieckiem.",
      },
      {
        n: "8",
        title: "Uczciwy urząd",
        body: "Przychody celowo ukryte przed fiskusem, gdy zostaną wykryte, podlegają przepadkowi. Fundacje rodzinne wykorzystywane wyłącznie do unikania podatków likwidujemy jako instrument. KAS ma być pomocą, nie organem „łapanek” — za błąd urzędu odpowiada urząd. Wpływów z uszczelnienia nie wliczamy do rachunku tego programu.",
      },
      {
        n: "9",
        title: "Zyski nadmiarowe",
        body: "W kryzysie ponadprzeciętne zyski firm w energetyce i bankach obejmujemy podatkiem od nadmiarowych zysków.",
      },
      {
        n: "10",
        title: "Podatek od platform",
        body: "Wielkie platformy cyfrowe płacą 5% obrotu z reklamy internetowej i pośrednictwa handlowego osiąganego w Polsce — niezależnie od tego, gdzie formalnie mają siedzibę.",
      },
      {
        n: "11",
        title: "Podatki europejskie",
        body: "Na poziomie UE popieramy podatek od transakcji kapitałowych i podatek od wielkich majątków. Dzisiejszy podatek bankowy zostaje — stawkę ustali odrębna ustawa.",
      },
      {
        n: "12",
        title: "VAT na życie",
        body: "VAT 5% obejmuje całą żywność, także tę, która dziś ma 8%, oraz podstawowe produkty higieniczne, które dziś często mają 23%.",
      },
      {
        n: "13",
        title: "Akcyza na paliwa",
        body: "Akcyza na paliwa jest co roku automatycznie waloryzowana o inflację — koniec z zamrażaniem jej przed wyborami i skokowymi podwyżkami po nich.",
      },
      {
        n: "14",
        title: "Euro bez kalendarza",
        body: "Przyjęcie euro to kierunek długofalowy, nie zobowiązanie na tę kadencję. Polska zostaje przy złotym. Prowadzimy przygotowania: gotowość NBP, plan dualnego obiegu, pełnomocnik rządu, raport co roku. ERM II i data wejścia — dopiero po ścieżce fiskalnej z tego programu, nie na odwrót.",
      },
      {
        n: "15",
        title: "Rdzeń państwowy",
        body: "Na zawsze w rękach państwa: przesył i dystrybucja energii, elektrownie atomowe, węgiel na czas transformacji, publiczne OZE, infrastruktura kolejowa, przemysł zbrojeniowy, zasób mieszkań publicznych, BGK i banki rozrachunkowe. Cała energetyka, łącznie z obrotem i wytwarzaniem konwencjonalnym, zostaje państwowa.\n\nSprzedajemy jedynie pakiety mniejszościowe w komercyjnych bankach Skarbu Państwa — ze „złotą akcją”. Cały przychód trafia do Funduszu Inwestycji Strategicznych.",
      },
      {
        n: "16",
        title: "Udział zamiast dotacji",
        body: "Zamiast bezzwrotnych dotacji dla wielkich korporacji państwo inwestuje przez publiczne fundusze zalążkowe w zamian za udział w zyskach. Założenie spółdzielni wymaga trzech osób, nie więcej.",
      },
      {
        n: "17",
        title: "Deregulacja bez praw pracowniczych",
        body: "Zbędne procedury upraszczamy — bez dotykania praw pracowniczych. Tam, gdzie dziś trzeba trzech koncesji, wystarczy jedna. W sprawach niskiego ryzyka: milcząca zgoda, jeśli urząd nie odpowie w terminie.",
      },
    ],
  },
  {
    num: 4,
    slug: "zdrowie",
    part: "I",
    title: "Zdrowie i Twoje ciało",
    kicker: "Zdrowie",
    lead: "Publiczna ochrona zdrowia nie może być poczekalnią do prywatnej. O Twoim ciele nie decyduje poseł ani biskup.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "7% PKB, ale uczciwie",
        body: "Publiczne wydatki na zdrowie dochodzą do 7% PKB — liczonego od bieżącego roku, nie sprzed dwóch lat — w ciągu dwóch kadencji, rosnąc równo co roku. Od pierwszego roku centralne zakupy leków i renegocjacja list refundacyjnych co 24 miesiące. Od drugiego roku znosimy limity w ambulatoryjnej opiece specjalistycznej. Szpitale i przychodnie dostają ryczałt na personel i utrzymanie, nie płatność za każdą procedurę.",
      },
      {
        n: "2",
        title: "Koniec NFZ jako osobnej kasy",
        body: "Świadczenia finansujemy z budżetu państwa. Pracownicy dzisiejszego NFZ przechodzą do ministerstwa zdrowia i oddziałów regionalnych.",
      },
      {
        n: "3",
        title: "Rzecznik z zębami",
        body: "Rzecznik Praw Pacjenta dostaje realne uprawnienia kontrolne i wykonawcze, nie tylko funkcję doradczą.",
      },
      {
        n: "4",
        title: "Zakaz spychania do prywatnego gabinetu",
        body: "Zakazujemy kierowania własnego pacjenta z kolejki publicznej do swojego prywatnego gabinetu, żeby przyspieszyć wizytę za opłatą.",
      },
      {
        n: "5",
        title: "Etat, nie kontrakt",
        body: "Umowa o pracę staje się podstawową formą zatrudnienia w ochronie zdrowia. Poszerzamy kompetencje pielęgniarek, ratowników, diagnostów i farmaceutów. Zawód psychoterapeuty dostaje odrębną ustawę. Zwiększamy liczbę miejsc na studiach medycznych.",
      },
      {
        n: "6",
        title: "Jedna rejestracja",
        body: "Jeden ogólnokrajowy system rejestracji wizyt. Opieka okołoporodowa w każdym województwie, stomatologia i pielęgniarka w każdej gminie. W każdej szkole — gabinet pielęgniarki i dentysty.",
      },
      {
        n: "7",
        title: "Aborcja",
        body: "Przerwanie ciąży na żądanie do 12. tygodnia; potem — na podstawie przesłanek medycznych. W placówce publicznej nie można odmówić zabiegu, powołując się na klauzulę sumienia: placówka ma obowiązek zapewnić dostęp.",
      },
      {
        n: "8",
        title: "Danina zdrowotna 9%",
        body: "Składka staje się celową daniną: 9% od dochodu, zawsze, także przy ryczałcie. Całość idzie wyłącznie na ochronę zdrowia.",
      },
      {
        n: "9",
        title: "In vitro",
        body: "Refundację in vitro (do 6 cykli) rozszerzamy na osoby samotne i na osoby do 45. roku życia.",
      },
      {
        n: "10",
        title: "Psychiatria",
        body: "Pierwsza wizyta u psychiatry — maksymalnie 14 dni. W kryzysie pomoc w ciągu 72 godzin, bez skierowania. Rozwijamy centra zdrowia psychicznego. Dodatkowe pieniądze pochodzą z podwyższonej akcyzy na alkohol i konopie, nie z ogólnego budżetu.",
      },
      {
        n: "11",
        title: "Choroby rzadkie",
        body: "Leczenie chorób rzadkich jest finansowane w pełni, bez limitów kwotowych, które dziś zmuszają rodziny do zbiórek.",
      },
      {
        n: "12",
        title: "Suplementy",
        body: "Rynek suplementów i preparatów udających leki obejmujemy ściślejszą kontrolą, z całkowitym zakazem ich reklamy.",
      },
      {
        n: "13",
        title: "Godny koniec",
        body: "Osoba nieuleczalnie chora i cierpiąca ma prawo złożyć wielokrotnie potwierdzony wniosek o wspomagane zakończenie życia, weryfikowany przez niezależną komisję lekarską.",
      },
      {
        n: "14",
        title: "Alkohol i konopie",
        body: "Obecna polityka to hipokryzja: kartel alkoholowy bez kary, obywatel z suszem — z paragrafem. Odrzucamy podział na „legalny alkohol” i „nielegalne narkotyki”. Państwo leczy i edukuje, nie tylko karze. Alkohol jest neurotoksyną, kancerogenem i substancją silnie uzależniającą. Nie ma bezpiecznej dawki etanolu.\n\n— Całkowity zakaz marketingu i sponsoringu, w tym sportu przez browary i promocji piw 0% jako oswajania nawyku picia.\n— Wycofanie alkoholu ze stacji benzynowych i sklepów spożywczych w ciągu 24 miesięcy. Zostają punkty koncesjonowane, 10:00–20:00, z suchą niedzielą.\n— Zakaz sprzedaży „małpek” do 200 ml.\n— Ostrzeżenia zdrowotne na opakowaniach, jak dziś na papierosach.\n— Akcyza na alkohol rośnie o 30% ponad stawki już uchwalone na 2027 rok (łącznie około 65% wobec 2025). Cały przyrost ponad poziom z 2027 roku idzie ustawowo na psychiatrię. Bez odszkodowań dla sklepów.\n\nKonopie:\n\n— Posiadanie do 15 g przy sobie i do 30 g w domu nie jest przestępstwem. Powyżej — wykroczenie i konfiskata, nie więzienie za ilość na własny użytek.\n— Obrót wyłącznie koncesjonowany i państwowy. Uprawa prywatna zostaje zakazana. Limit THC i obecność CBD określi rozporządzenie.\n— Sprzedaż od 21. roku życia.\n— Edukacja o realnych ryzykach: uzależnieniu psychicznym, spłaszczeniu emocji, zespole amotywacyjnym, psychozie — bez mitu „świętego zioła”.\n— W szkołach, od klasy 4: higiena psychiczna, stres, więzi, myślenie krytyczne.",
      },
    ],
  },
  {
    num: 5,
    slug: "uczciwa-polityka",
    part: "I",
    title: "Uczciwa polityka",
    kicker: "Państwo prawa",
    lead: "Polityka w Polsce zbyt długo była grą, w której wielkie pieniądze sponsorów i znajomości decydowały więcej niż Twój głos.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Pieniądze w kampanii",
        body: "Jedna osoba może wpłacić na kampanię lub partię maksymalnie 5000 zł rocznie. Zakazujemy płatnych billboardów wyborczych i komercyjnej reklamy politycznej w przestrzeni publicznej.",
      },
      {
        n: "2",
        title: "Drzwi obrotowe",
        body: "Po funkcji publicznej, przez 2 lata, nie wolno zasiąść w radzie nadzorczej spółki Skarbu Państwa ani podjąć pracy u firmy, która była wykonawcą zamówień w nadzorowanym obszarze.",
      },
      {
        n: "3",
        title: "Trzy kadencje",
        body: "W Sejmie limit trzech kadencji z rzędu, potem jedna kadencja przerwy. Po przerwie można startować ponownie, maksymalnie na kolejne trzy.",
      },
      {
        n: "4",
        title: "Konkurs, nie nadanie",
        body: "Stanowiska od dyrektora departamentu wzwyż, poniżej rangi politycznej, obsadza się wyłącznie w konkursie. Ministrowie i wiceministrowie zostają stanowiskami politycznymi.",
      },
      {
        n: "5",
        title: "Rejestr powiązań",
        body: "Publiczny rejestr powiązań rodzinnych osób w administracji i spółkach Skarbu Państwa — żeby nepotyzm było widać.",
      },
      {
        n: "6",
        title: "Prawo za darmo",
        body: "Bezpłatna baza prawna: teksty ujednolicone i pełne orzecznictwo, na poziomie dzisiejszych systemów komercyjnych. Wyższe pensje w sądach i prokuraturach, żeby ograniczyć odejścia.",
      },
    ],
  },
  {
    num: 6,
    slug: "mieszkanie",
    part: "I",
    title: "Prawo do mieszkania",
    kicker: "Mieszkanie",
    lead: "Mieszkanie jest prawem, nie walorem inwestycyjnym do obrotu na rynku.",
    pillars: ["mieszkanie"],
    points: [
      {
        n: "1",
        title: "25–40 tysięcy rocznie",
        body: "Państwo buduje od 25 do 40 tysięcy mieszkań komunalnych i limited-profit rocznie — tyle, ile realnie pozwala sfinansować danina, nie liczba wzięta z powietrza. Ziemia publiczna pod ten program nie jest sprzedawana. Co raz zbudowane za publiczne pieniądze zostaje publiczne na zawsze.",
      },
      {
        n: "2",
        title: "Danina 1%",
        body: "Cały program finansujemy z daniny mieszkaniowej: 1% funduszu płac, po połowie pracownik i pracodawca (0,5% każdy). To osobna, celowa danina, widoczna na pasku wypłaty — nie skryta linia równa 1% PKB wyjęta z budżetu centralnego.",
      },
      {
        n: "3",
        title: "Puste i kolejne lokale",
        body: "Trzecie i czwarte mieszkanie: 1% wartości rocznie. Od piątego: 2%. Pierwsze dwa są wolne. Lokal stojący pusty dłużej niż 12 miesięcy jest opodatkowany jak trzecie mieszkanie.",
      },
      {
        n: "4",
        title: "Najem krótkoterminowy",
        body: "Airbnb i podobne wymagają licencji i nadzoru gminy. Całe lokale, w których wynajmujący nie mieszka, maksymalnie 90 dni w roku. Pokój we własnym mieszkaniu — bez limitu.",
      },
      {
        n: "5",
        title: "Umowa i czynsz",
        body: "Wzorcowa umowa najmu, kaucja nie wyższa niż jednomiesięczny czynsz, niezależny urząd sporów. W gminach ze „strefą deficytu mieszkaniowego” podwyżka czynszu ograniczona do inflacji plus 1 punkt procentowy rocznie.",
      },
      {
        n: "6",
        title: "Bez prowizji",
        body: "W każdym województwie publiczne biuro obrotu i najmu, bez prowizji. Publiczny rejestr cen transakcyjnych sprzedaży i najmu.",
      },
      {
        n: "7",
        title: "Osiedle, nie patodeweloperka",
        body: "Nowe osiedla muszą mieć zieleń, szkołę i komunikację. Nowe plany miejscowe przeznaczają co najmniej 20% nowych mieszkań na mieszkania społeczne.",
      },
    ],
  },
  {
    num: 7,
    slug: "opieka",
    part: "I",
    title: "Państwo, na które możesz liczyć",
    kicker: "Opieka",
    lead: "Miarą państwa jest to, jak traktuje ludzi w najtrudniejszych momentach życia — starość, choroba, samotne wychowywanie dziecka. Dziś ten ciężar zbyt często spada na rodzinę, a najczęściej na kobiety.",
    pillars: ["bezpieczenstwo", "pensja"],
    points: [
      {
        n: "1",
        title: "Waloryzacja z automatu",
        body: "Świadczenia społeczne (poza emeryturami i rentami) oraz progi dochodowe waloryzujemy 1 stycznia o inflację albo wzrost płac — ten wskaźnik, który jest wyższy.",
      },
      {
        n: "2",
        title: "Jeden system, 65 lat",
        body: "Jeden system emerytalny, jeden wiek: 65 lat dla wszystkich. Wiek kobiet podnosimy stopniowo. KRUS przestaje istnieć — rolnicy wchodzą do systemu ogólnego.",
      },
      {
        n: "3",
        title: "Asystencja",
        body: "Bezpłatna asystencja osobista: od 30 do 240 godzin miesięcznie, zależnie od potrzeb, dla wszystkich grup wiekowych od pierwszego roku. Opieka wytchnieniowa dla opiekunów. Polski Język Migowy zyskuje status języka mniejszości.",
      },
      {
        n: "4",
        title: "Renta i dorobienie",
        body: "Dorobienie do renty socjalnej nie zabiera całego świadczenia z dnia na dzień — zmniejsza się proporcjonalnie do dodatkowego dochodu.",
      },
      {
        n: "5",
        title: "480 dni",
        body: "Łącznie 480 płatnych dni urlopu związanego z dzieckiem, do 12. roku życia. 90 dni jest zarezerwowanych dla każdego rodzica i nie da się ich przekazać. Pierwsze 390 dni — około 80% pensji, z limitem jak przy chorobowym; ostatnie 90 — ryczałt waloryzowany co roku. Rodzic samotnie wychowujący dziecko ma prawo do całej puli.",
      },
      {
        n: "6",
        title: "Do 26. roku życia",
        body: "Dzieci bez opieki rodziców mają pełne utrzymanie do 26. roku życia, jeśli się uczą.",
      },
      {
        n: "7",
        title: "Alimenty",
        body: "Fundusz Alimentacyjny zostaje (do 1000 zł miesięcznie na dziecko). Państwo ściga dłużników. Osoba dochodząca alimentów dostaje darmową pomoc prawną.",
      },
      {
        n: "8",
        title: "Przemoc w jednym miejscu",
        body: "Reagowanie na przemoc domową skupiamy w jednej strukturze, z całodobowymi ośrodkami interwencji kryzysowej.",
      },
      {
        n: "9",
        title: "Najpierw mieszkanie",
        body: "Mieszkania senioralne i chronione. Walka z bezdomnością według zasady „najpierw mieszkanie”, pod nadzorem pełnomocnika rządu.",
      },
    ],
  },
  {
    num: 8,
    slug: "nauka",
    part: "I",
    title: "Nauka",
    kicker: "Uczelnie",
    lead: "Najlepsi polscy naukowcy wyjeżdżają, bo w kraju nie mają ani stabilności zatrudnienia, ani pieniędzy na życie z pracy badawczej. Bez nauki nie będzie ani atomu, ani polskiego AI, ani nowych leków.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Waloryzacja subwencji",
        body: "Subwencje dla uczelni waloryzowane co roku co najmniej o inflację.",
      },
      {
        n: "2",
        title: "Doktorat na etacie",
        body: "Doktoranci dostają umowę o pracę zamiast stypendium — w tej samej kwocie co dziś, ale ze składkami, stażem i L4. Konkursy na stanowiska są jawne.",
      },
      {
        n: "3",
        title: "NCN i budżet PAN",
        body: "NCN ma ustawowo pieniądze na wsparcie co najmniej jednego z pięciu zgłoszonych projektów. PAN ma budżet podstawowy — granty są dodatkiem, nie jedynym źródłem.",
      },
      {
        n: "4",
        title: "Koniec fabryk dyplomów",
        body: "Wzmacniamy nadzór nad prywatnymi uczelniami działającymi jak fabryki dyplomów.",
      },
      {
        n: "5",
        title: "Stypendium i akademiki",
        body: "Stypendium socjalne: 50% płacy minimalnej. 20 tysięcy nowych miejsc w akademikach w ciągu 8 lat. Stołówki non-profit.",
      },
      {
        n: "6",
        title: "Otwarta nauka",
        body: "Publikacje i dane z pieniędzy publicznych są otwarte. Koszty publikacji pokrywa państwo.",
      },
      {
        n: "7",
        title: "Humanistyka ma własną pulę",
        body: "Nauki humanistyczne i społeczne dostają osobną, zagwarantowaną pulę — nie resztkę po naukach ścisłych.",
      },
    ],
  },
  {
    num: 9,
    slug: "szkola",
    part: "I",
    title: "Szkoła równych szans",
    kicker: "Edukacja",
    lead: "O przyszłości dziecka nie powinien decydować portfel rodziców. Szkoła publiczna ma dawać realną szansę, nie tylko świadectwo z pieczątką.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "Obiad i miejsce",
        body: "Ciepły obiad bezpłatny dla rodzin do 150% minimum socjalnego; powyżej — płatny, ale dostępny. Miejsce w żłobku, przedszkolu i szkole jest gwarantowane, nie zależy od loterii zapisów.",
      },
      {
        n: "2",
        title: "Koniec dotacji dla zysku",
        body: "Szkoły komercyjne, działające dla zysku, nie dostają dotacji. Organizacje oświatowe non-profit mogą dostać stawkę za ucznia, jak szkoły publiczne.",
      },
      {
        n: "3",
        title: "Nauczyciel",
        body: "Mniej biurokracji, lepszy awans, wsparcie przeciw wypaleniu. Pensje nauczycieli waloryzowane jak w całym sektorze publicznym.",
      },
      {
        n: "4",
        title: "Mniejsze klasy",
        body: "Klasa: maksymalnie 20 uczniów w klasach 1–3 i 25 w starszych. Realne wsparcie psychologiczno-pedagogiczne i procedury wobec przemocy rówieśniczej, także w internecie.",
      },
      {
        n: "5",
        title: "Wspólny rdzeń",
        body: "Wspólny rdzeń programu: 70–80% treści, żeby matura znaczyła to samo w całym kraju. Reszta to aneks regionalny.",
      },
      {
        n: "6",
        title: "Klasy 1–2",
        body: "W klasach 1–2 dzień jest krótszy, skupiony na zabawie i relacjach, nie na sprawdzianach.",
      },
      {
        n: "7",
        title: "Koniec egzaminu ósmoklasisty",
        body: "Znosimy egzamin ósmoklasisty. O przyjęciu do szkoły średniej decydują oceny i rejonizacja.",
      },
      {
        n: "8",
        title: "Praca domowa",
        body: "W klasach 4–6 praca domowa jest limitowana czasowo.",
      },
      {
        n: "9",
        title: "Lekcje od 8:30",
        body: "Lekcje w liceum i technikum nie zaczynają się wcześniej niż o 8:30.",
      },
      {
        n: "10",
        title: "Limit dokumentacji",
        body: "Czas nauczyciela na dokumentację jest limitowany ustawowo.",
      },
    ],
  },
  {
    num: 10,
    slug: "wolnosc",
    part: "I",
    title: "Wolność, równość, solidarność",
    kicker: "Prawa",
    lead: "Wolność nie jest przywilejem dla najsilniejszych. Polska ma być bezpieczna dla kobiet, dla par — niezależnie od tego, kogo kochają — i dla każdego, kto chce żyć własnym życiem.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "Kościół i szkoła",
        body: "Fundusz Kościelny znika w ciągu 3 lat: pełne składki, potem połowa, potem zero. Religia wychodzi ze szkół publicznych — katecheza może zostać w parafii, poza edukacją z podatków. Wypowiadamy albo renegocjujemy Konkordat w części o religii w szkołach i finansowaniu Kościoła.",
      },
      {
        n: "2",
        title: "Kapelani",
        body: "Kapelanów wojskowych, szpitalnych i więziennych nie finansuje budżet — płaci Kościół. Posługa na żądanie zostaje.",
      },
      {
        n: "3",
        title: "Małżeństwo",
        body: "Prawo do małżeństwa i wspólnej adopcji przysługuje niezależnie od płci partnerów. Związki partnerskie zostają jako dodatkowa opcja, nie jako jedyna furtka dla par jednopłciowych.",
      },
      {
        n: "4",
        title: "Tranzycja",
        body: "Bezpłatna ścieżka tranzycji. Medyczna od 18. roku życia. Prawne uzgodnienie płci metrykalnej od 16 lat, za zgodą opiekuna.",
      },
      {
        n: "5",
        title: "Mowa i sumienie",
        body: "Zakaz terapii konwersyjnych. Orientacja i tożsamość płciowa stają się przesłanką ochrony przed przestępstwami z nienawiści. Krytyka religii, władzy i idei nie jest mową nienawiści. Uchylamy art. 196 Kodeksu karnego.",
      },
      {
        n: "6",
        title: "Gdzie jest reszta",
        body: "Politykę wobec alkoholu i konopi opisujemy w rozdziale o zdrowiu.",
      },
      {
        n: "7",
        title: "Zwierzęta",
        body: "Zakaz niehumanitarnego chowu i uboju, ferm futrzarskich, chowu klatkowego i zwierząt w cyrkach. Rzecznik Praw Zwierząt. Koniec współfinansowania polowań z budżetu.",
      },
      {
        n: "8",
        title: "Dane i algorytmy",
        body: "Każdy decyduje o swoich danych i wizerunku. Algorytmy instytucji państwowych muszą być jawne i wyjaśnialne.",
      },
      {
        n: "9",
        title: "Praca seksualna",
        body: "Model szwedzki: karzemy nabywanie usług seksualnych, nie ich świadczenie. Osoby świadczące są zdekryminalizowane i dostają wsparcie mieszkaniowe, psychologiczne i zawodowe, jeśli chcą odejść.",
      },
    ],
  },
  {
    num: 11,
    slug: "przyroda",
    part: "I",
    title: "Przyroda",
    kicker: "Środowisko",
    lead: "Lasy, rzeki i czyste powietrze to wspólne dziedzictwo, nie zasób do wyciśnięcia dla zysku garstki. Rachunek za rabunek płacimy smogiem, suszą i wyciętym lasem.",
    pillars: [],
    points: [
      { n: "1", title: "Parki", body: "Nowe parki narodowe i powiększenie istniejących, ze wzmocnioną ochroną gatunków zagrożonych." },
      { n: "2", title: "Lasy zostają publiczne", body: "Lasy Państwowe nigdy nie są prywatyzowane. Priorytetem jest ochrona starodrzewu, nie wycinka dla zysku." },
      { n: "3", title: "Rzeki, nie tory wodne", body: "Wody Polskie chronią rzeki i jeziora jako ekosystemy, nie jako inwestycje żeglugowe." },
      { n: "4", title: "Docieplanie", body: "Publiczny program docieplania budynków." },
      { n: "5", title: "Tereny zalewowe", body: "Zakaz nowej zabudowy na terenach zalewowych. Retencja i walka z suszą, z doświadczeniem katastrofy na Odrze." },
      { n: "6", title: "Bałtyk", body: "Ochrona najcenniejszych obszarów Bałtyku i odbudowa populacji ryb." },
      {
        n: "7",
        title: "Gospodarstwa",
        body: "Małe i średnie gospodarstwa do 50 hektarów dostają 36-miesięczne kontrakty skupu z ceną minimalną. Wsparcie na technologie ograniczające metan — bez przymusu redukcji stad. Na poziomie UE: cło wyrównawcze i klauzule lustrzane, także wobec Mercosuru.",
      },
      { n: "8", title: "Zeroemisyjny transport publiczny", body: "Autobusy miejskie zeroemisyjne od 2035 roku. Kolej regionalna na trakcję elektryczną." },
    ],
  },
  {
    num: 12,
    slug: "europa",
    part: "I",
    title: "Silna Polska w Europie",
    kicker: "Granica i Unia",
    lead: "Jesteśmy piątym krajem Unii. Granicą i azylem rządzi prawo, nie przypadek.",
    pillars: ["bezpieczenstwo"],
    points: [
      {
        n: "1",
        title: "NATO zostaje fundamentem",
        body: "Europejskie zdolności obronne i bliższa współpraca z Niemcami i Francją — mniejsza zależność od jednego partnera. NATO zostaje fundamentem.",
      },
      {
        n: "2",
        title: "Ukraina",
        body: "Wsparcie dla Ukrainy, wojskowe i gospodarcze, jako inwestycja w nasze bezpieczeństwo. Ścieżka Ukrainy do NATO już teraz, bez warunku zakończenia wojny.",
      },
      {
        n: "3",
        title: "Kwota ONZ",
        body: "Około 3200 uchodźców rocznie z programów ONZ — proporcja względem poziomu Szwecji do liczby ludności. Kwota korygowana co roku.",
      },
      {
        n: "4",
        title: "Wojna u granicy",
        body: "Ucieczka przed wojną u granic, jak Ukraińcy w 2022, dostaje szybką ochronę czasową poza limitem. To solidarność sąsiedzka, nie standardowa migracja.",
      },
      {
        n: "5",
        title: "Jedna agencja, jeden sąd",
        body: "Migracja zarobkowa: wysokie kwalifikacje i test rynku pracy. Azyl prowadzi cywilna Krajowa Agencja Migracyjna, 16 punktów przyjęć, Sąd Migracyjny. Wydalenie wykonuje straż graniczna.",
      },
      {
        n: "6",
        title: "Ośrodek na czas procedury",
        body: "Na czas procedury azylowej osoba mieszka w ośrodku państwowym, nie pod dowolnym adresem.",
      },
      {
        n: "7",
        title: "Prawo i podatki",
        body: "Pobyt zachowuje ten, kto przestrzega prawa i płaci podatki. Naruszenie oznacza utratę zezwolenia i obowiązek powrotu.",
      },
      {
        n: "8",
        title: "Powrót i obywatelstwo",
        body: "Dobrowolny powrót: 10 tys. zł wsparcia. Obywatelstwo po 9 latach legalnego pobytu, język na B1, bez istotnej karalności.",
      },
      {
        n: "9",
        title: "Dzieci bez opieki",
        body: "Dzieci bez opieki: kurator w 3 dni, rodzina zastępcza albo ośrodek dla dzieci — nigdy warunki dla dorosłych.",
      },
      {
        n: "10",
        title: "To samo prawo pracy",
        body: "Prawo pracy przysługuje każdemu pracującemu w Polsce na tych samych zasadach, niezależnie od paszportu.",
      },
      {
        n: "11",
        title: "Granica instrumentalna",
        body: "Jeśli granicę wykorzystuje się instrumentalnie, jak przy Białorusi, procedurę azylową można zawiesić łącznie na maksymalnie 6 miesięcy w roku. Każde zawieszenie kontroluje Sąd Najwyższy.",
      },
    ],
  },
  {
    num: 13,
    slug: "obrona",
    part: "I",
    title: "Odporne społeczeństwo",
    kicker: "Obrona",
    lead: "Bezpieczeństwo rodziny nie jest polem do oszczędności — ale i nie polem do podbijania procentu dla samej liczby. Chcemy zdolności, nie papierowego rekordu.",
    pillars: ["bezpieczenstwo"],
    points: [
      {
        n: "1",
        title: "Bez skoku do 6%",
        body: "Wydatki obronne zostają na dzisiejszym poziomie: około 4,8–5,2% PKB, licząc budżet MON razem z Funduszem Wsparcia Sił Zbrojnych. Sześć procent to cel poza tą kadencją.",
      },
      {
        n: "2",
        title: "Rezerwa, która jest opłacona",
        body: "Dobrowolna rezerwa: 500–800 zł miesięcznie za gotowość, 300–400 zł za dzień szkolenia, ulga podatkowa i priorytet w rekrutacji do administracji. Główny kanał dla ochotników: Wojska Obrony Terytorialnej.",
      },
      {
        n: "3",
        title: "Doktryna w 12 miesięcy",
        body: "W ciągu 12 miesięcy ustawa o Polskiej Doktrynie Obronnej: zagrożenia konwencjonalne, hybrydowe, cyfrowe i dezinformacja.",
      },
      {
        n: "4",
        title: "Schrony",
        body: "Schrony obowiązkowe w nowych budynkach publicznych i na osiedlach powyżej 50 lokali.",
      },
      {
        n: "5",
        title: "Sprzęt z kraju i z Europy",
        body: "Zakupy sprzętu przede wszystkim w polskim i europejskim przemyśle, ze standaryzacją przez wspólne zamówienia.",
      },
      {
        n: "6",
        title: "Łączność kryzysowa",
        body: "Łączność kryzysowa niezależna od komercyjnych sieci komórkowych.",
      },
      {
        n: "7",
        title: "Leki, nie tylko czołgi",
        body: "Rezerwa leków krytycznych na 6 miesięcy. Państwowa wytwórnia leków generycznych i antybiotyków.",
      },
      {
        n: "8",
        title: "Komunikacja, nie ministerstwo prawdy",
        body: "Profesjonalna komunikacja strategiczna przeciw dezinformacji — budowanie zaufania w kryzysie, nie ministerstwo prawdy.",
      },
      {
        n: "9",
        title: "Kontrola służb",
        body: "Mocniejsza sądowa kontrola policji i służb.",
      },
      {
        n: "10",
        title: "Nuclear sharing",
        body: "Udział Polski w nuclear sharing NATO. To nie oznacza automatycznie rozmieszczenia broni jądrowej na polskim terytorium.",
      },
    ],
  },
  {
    num: 14,
    slug: "ustroj",
    part: "II",
    title: "Ustrój państwa",
    kicker: "Konstytucja",
    lead: "Nic z tego programu się nie wykona, jeśli jeden człowiek na Zamku może zawetować ustawę, na którą zagłosowały miliony. Odbieramy prezydentowi weto i łaskę, dajemy obywatelom narzędzia między wyborami i wyrównujemy wagę głosu.",
    pillars: [],
    points: [
      {
        n: "14.1",
        title: "Prezydent",
        body: "Prezydent traci prawo weta wobec ustaw uchwalonych przez Sejm oraz prawo łaski.",
      },
      {
        n: "14.2",
        title: "Głos między wyborami",
        body: "Każda zmiana konstytucji wymaga referendum, które musi poprzeć większość głosujących. 500 tysięcy podpisów w 18 miesięcy wymusza referendum konstytucyjne nawet bez zgody Sejmu. 250 tysięcy podpisów w 100 dni od uchwalenia ustawy zawiesza jej wejście w życie i kieruje ją do referendum — weto ludowe. To narzędzie działa w obie strony, także wtedy, gdy rządzi Realna Lewica.",
      },
      {
        n: "14.3",
        title: "Sejm jak w Niemczech, po polsku",
        body: "460 posłów, system mieszany. Dwa głosy: na kandydata w jednym z 230 okręgów jednomandatowych i na listę partii. O liczbie mandatów decyduje lista — podział w pełni proporcjonalny. Próg 5%, ale partia, która wygra co najmniej 3 okręgi, wchodzi mimo progu. Jeśli partia wygra więcej okręgów, niż daje jej lista, mandatu nie dostają jej najsłabsi zwycięzcy okręgów. Granice wyznacza niezależna komisja, z tolerancją 15%, rewizja co 10 lat.",
      },
    ],
  },
  {
    num: 15,
    slug: "media",
    part: "II",
    title: "Media publiczne",
    kicker: "Media",
    lead: "Media publiczne od lat są zakładnikiem tego, kto wygrał wybory. Rozpraszamy tę władzę, żeby nikt nie przejął całości jedną kampanią.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Rady, których nie przejmuje się jedną kadencją",
        body: "Rady programowe wybierane większością 2/3, na kadencje niepokrywające się z parlamentem. Osoby z mandatem politycznym nie zasiadają w radach. Reforma w ciągu 6 lat.",
      },
      {
        n: "2",
        title: "Abonament 50 zł",
        body: "Abonament: 50 zł rocznie. Osoby powyżej 75. roku życia są zwolnione całkowicie.",
      },
    ],
  },
  {
    num: 16,
    slug: "nazwa",
    part: "II",
    title: "Nazwa i symbolika",
    kicker: "Znak",
    lead: "Nazwa i etykieta mówią to samo: silny program bez udawania, że każdy element jest maksymalistyczny.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Nazwa",
        body: "Realna Lewica. Socjaldemokracja realistyczna. Nie obietnica maksimum w każdej linijce, tylko program, który da się wykonać i policzyć.",
      },
      {
        n: "2",
        title: "Kolory",
        body: "Przygaszona czerwień i grafit, z akcentem musztardowego złota. Czerwień jest sygnałem, nie krzykiem. Grafit jest ciężarem instytucji. Złoto jest haczykiem na końcu linii: zrobione, nie tylko ogłoszone.",
      },
      {
        n: "3",
        title: "Znak",
        body: "Wznosząca się linia przechodząca w haczyk. Jednocześnie wzrost i potwierdzenie, że coś zostało zrobione, nie tylko obiecane na plakacie.",
      },
    ],
  },
];

export const LEDGER = {
  prices: "Ceny 2026. Rzędy wielkości, nie ustawa budżetowa.",
  baseline: [
    { k: "Deficyt sektora 2025", v: "7,3% PKB" },
    { k: "Prognoza deficytu 2026", v: "6,8% PKB" },
    { k: "Dług EDP 2025", v: "59,7% PKB" },
    { k: "Dług 2026", v: "ok. 62–64% PKB" },
    { k: "Zdrowie publiczne 2025", v: "6,9% PKB" },
    { k: "Obrona 2026", v: "ok. 4,8% PKB" },
    { k: "Akcyza alkohol 2025", v: "ok. 14,6 mld zł" },
  ],
  rows: [
    { label: "Wydatki dodatkowe (środek)", y1: 70, y5: 125, note: "mld zł" },
    { label: "Wpływy ogólne", y1: 45, y5: 80, note: "bez daniny i earmarku akcyzy" },
    { label: "Dziura programu", y1: 25, y5: 45, note: "ok. 0,5% → 0,8% PKB" },
  ],
  deficit: { y1: "~7,3%", y5: "~7,5–8%" },
  spends: [
    { name: "4-dniowy tydzień w sektorze publicznym", range: "25–45 mld" },
    { name: "Waloryzacja świadczeń poza emeryturami według płac", range: "20–25 mld" },
    { name: "Połowa drogi do 7% PKB na zdrowie", range: "10–15 mld" },
  ],
  revenues: [
    { name: "Zniesienie limitu 30-krotności składek", range: "8–12 mld" },
    { name: "CIT 22% dla dużych firm", range: "5–8 mld" },
    { name: "Koniec ulg niezależnych od dochodu", range: "5–7 mld" },
  ],
  save: "Stopniowe zrównanie wieku emerytalnego na 65 lat: w kadencji 3–6 mld rocznie, docelowo 20–30 mld.",
  spread:
    "Rozrzut jest duży. Luka w 5. roku może wynieść od około zera do około 120 mld — zależnie od reakcji podatników i tempa zatrudniania w budżetówce.",
  housing:
    "Danina 1% (około 15–18 mld) zamyka 25–40 tys. mieszkań rocznie. Nie zamyka unijnego kryterium 3% deficytu. Dlatego euro nie ma kalendarza.",
  atom: "Atom: dług Funduszu Inwestycji Strategicznych, 12 GW w horyzoncie 20–25 lat. W statystyce długu będzie widoczny, nie schowany.",
  excise:
    "Przyrost akcyzy alkoholowej i konopnej ponad poziom z 2027 (około 3–5 mld rocznie) idzie na psychiatrię, nie na łatanie deficytu.",
};

export function chapterBySlug(slug: string) {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function neighbors(slug: string) {
  const i = CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}

export function fold(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function chapterText(chapter: Chapter) {
  return [chapter.title, chapter.kicker, chapter.lead, ...chapter.points.flatMap((p) => [p.title ?? "", p.body])].join(
    "\n",
  );
}
