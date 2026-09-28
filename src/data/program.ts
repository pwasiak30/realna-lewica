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
  /** `group` na pierwszym punkcie grupy rysuje śródtytuł (np. „Praca”, „Azyl i ochrona”). */
  points: { n: string; title?: string; body: string; group?: string }[];
};

export const PROGRAM_FILE = {
  href: "deklaracja.pdf",
  filename: "DEKLARACJA_Realna_Lewica_v12.pdf",
  label: "Pobierz program (PDF)",
};

export type Bill = {
  id: string;
  href: string;
  filename: string;
  title: string;
  /** Jedno zdanie, co ustawa robi. */
  line: string;
  /** Gdzie w programie jest jej miejsce — pokazywane przy pobraniu. */
  covers: string;
  /** Rozdziały z pełną kartą. */
  chapters: string[];
  /** Rozdziały z samym odsyłaczem (niedziela, „zob. rozdział 5”). */
  also?: string[];
  /** Osobny plik z samym formularzem DSR (art. 34 ust. 3a Regulaminu Sejmu). */
  dsr?: { href: string; filename: string };
};

export const BILLS: Bill[] = [
  {
    id: "migracja",
    href: "ustawy/RL_projekt_ustawy_migracja.pdf",
    filename: "RL_projekt_ustawy_migracja.pdf",
    title: "Projekt ustawy o migracji zarobkowej, ochronie i obywatelstwie",
    line: "Próg 90/75% mediany, Krajowa Agencja Migracyjna, Sąd Migracyjny, limit uchodźców, łączenie rodzin, obywatelstwo po 9 latach.",
    covers:
      "Rozdział 3, punkty 1–19, oraz odesłanie z rozdziału 14, punkt 3. Wzór druku sejmowego z 26 września 2026, napisany przy deklaracji v10 — liczby i mechanizmy bez zmian; w v12 ten rozdział ma numer 14. To nie jest akt obowiązujący i nie został wniesiony na ręce Marszałka Sejmu.",
    chapters: ["migracja"],
  },
  {
    id: "alkohol-konopie",
    href: "ustawy/RL_projekt_ustawy_alkohol_konopie.pdf",
    filename: "RL_projekt_ustawy_alkohol_konopie.pdf",
    title: "Projekt ustawy o zdrowiu publicznym: alkohol i konopie",
    line: "Koniec marketingu i małpek, punkty koncesjonowane 10:00–20:00, sucha niedziela, posiadanie 15/30 g poza przestępstwem, państwowy obrót konopi od 21 lat.",
    covers:
      "Rozdział 5, punkt 14; sucha niedziela z rozdziału 2, punkt 5; odesłanie z rozdziału 12, punkt 6. Wzór druku sejmowego z 26 września 2026, napisany przy deklaracji v10 — punkt 5.14 ma tę samą treść; w v12 rozdział o wolności ma numer 12. To nie jest akt obowiązujący i nie został wniesiony na ręce Marszałka Sejmu.",
    chapters: ["zdrowie"],
    also: ["praca", "wolnosc"],
  },
  {
    id: "resocjalizacja",
    href: "ustawy/RL_projekt_ustawy_resocjalizacja.pdf",
    filename: "RL_projekt_ustawy_resocjalizacja.pdf",
    title: "Projekt ustawy o wsparciu dziecka i o odpowiedzialności nieletnich za czyn",
    line: "Koniec z pojęciem demoralizacji wobec dzieci do 12. roku życia. Izolacja od 15 lat i tylko za ciężki czyn. Obrońca od pierwszej czynności, zakaz krat, mentor 24 miesiące, środki poza KRK.",
    covers:
      "Rozdział 11, punkty 1–15. Wersja 2 wzoru druku sejmowego z 28 września 2026, przy deklaracji v12: dopisany tryb postępowania i wykonywania izolacji, poprawione odesłania do ustaw zmienianych. Z formularzem DSR (uchwała nr 51 Prezydium Sejmu). To nie jest akt obowiązujący i nie został wniesiony na ręce Marszałka Sejmu.",
    chapters: ["resocjalizacja"],
    dsr: { href: "ustawy/RL_DSR_resocjalizacja.pdf", filename: "RL_DSR_resocjalizacja.pdf" },
  },
  {
    id: "imperializm",
    href: "ustawy/RL_projekt_ustawy_imperializm.pdf",
    filename: "RL_projekt_ustawy_imperializm.pdf",
    title: "Projekt ustawy o zakazie propagowania ideologii imperialnej",
    line: "Zakaz dla ideologii, która łączy roszczenie do cudzego państwa z wojną jako narzędziem. Nowy art. 256 § 1b Kodeksu karnego, sądowy zakaz organizacji, zakaz finansowania, wniosek do TK wobec partii. Krytyka rządów i sojuszy wyłączona wprost.",
    covers:
      "Rozdział 14, punkt 4. Wzór druku sejmowego z 28 września 2026, przy deklaracji v12, z formularzem DSR i towarzyszącym projektem zmiany art. 13 Konstytucji. To nie jest akt obowiązujący i nie został wniesiony na ręce Marszałka Sejmu.",
    chapters: ["europa"],
    dsr: { href: "ustawy/RL_DSR_imperializm.pdf", filename: "RL_DSR_imperializm.pdf" },
  },
];

/** Liczba rozdziałów, które mają pełną kartę projektu ustawy. */
export function billChapterCount() {
  return new Set(BILLS.flatMap((bill) => bill.chapters)).size;
}

export function billsForChapter(slug: string) {
  return BILLS.filter((bill) => bill.chapters.includes(slug));
}

export function billPointers(slug: string) {
  return BILLS.filter((bill) => bill.also?.includes(slug));
}

export const PARTY = {
  name: "Realna Lewica",
  label: "Socjaldemokracja realistyczna",
  slogan: ["Twoja pensja.", "Twoje ciało.", "Twoje mieszkanie.", "Twoje bezpieczeństwo."],
  version: "27 września 2026",
  versionNote: "Wersja 12",
  disclaimer:
    "To deklaracja programowa — nie rejestracja komitetu, nie zbiórka podpisów ani pieniędzy.",
  /** Krótki podpis w belce. Pełny akapit jest w `project`. */
  projectShort: "Studia psychologii · AHE w Łodzi",
  /**
   * Kontekst projektu — stopka, strona główna i „Kim jesteśmy”.
   * Nie skrót „projekt studencki”: ma być wiadomo, kto pisze i na jakim kierunku.
   */
  project:
    "Realna Lewica to autorski projekt programowy Pawła Wasiaka, pisany w trakcie studiów psychologii na Akademii Humanistyczno-Ekonomicznej w Łodzi. Psychologia jest tu narzędziem, nie ozdobą: program nazywa mechanizmy — czekanie na lekarza, lęk o pensję, czyjeś prawo do cudzego ciała — i przekłada je na przepisy, które da się policzyć. To nie jest zarejestrowana partia, komitet wyborczy ani zbiórka podpisów lub pieniędzy. Projekty ustaw na tej stronie są wzorami druków sejmowych do pobrania i konsultacji. Nie zostały wniesione na ręce Marszałka Sejmu.",
};

/** Kolory znaku — te same wartości co w src/styles.css i src/components/mark.tsx. */
export const BRAND_COLORS = [
  { name: "Bordo", hex: "#7A1E3C", role: "sygnał, nie krzyk" },
  { name: "Grafit", hex: "#2B3038", role: "ciężar instytucji" },
  { name: "Złoto", hex: "#D4A63C", role: "koniec ruchu: zrobione" },
];

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
    "Nowy system migracyjny",
    "Twórcza resocjalizacja: koniec z pojęciem demoralizacji wobec dzieci do 12. roku życia",
  ],
  later: [
    "Data przyjęcia euro",
    "Skok wydatków obronnych do 6% PKB",
    "Pełne 7% PKB na zdrowie — to cel na dwie kadencje",
  ],
};

/**
 * Dokąd prowadzi link „W programie”: rozdział (slug + kotwica punktu, np. `p-5`, `p-15-3`)
 * albo osobna strona (aneks kosztów). Bez `hash` — początek rozdziału.
 */
export type ProgramTarget = { slug: string; hash?: string } | { page: "/rachunek"; hash?: string };

export type Postulate = {
  n: string;
  title: string;
  line: string;
  target: ProgramTarget;
  /** Unikat — w tej formie nie ma tego żadna partia sejmowa (zob. UNIQUES w porownanie.ts). */
  unique?: true;
};

export const POSTULATES: Postulate[] = [
  {
    n: "01",
    unique: true,
    title: "Migracja z twardymi regułami",
    line: "Praca od 90% mediany, 75% w zawodach deficytowych. Krajowa Agencja i Sąd Migracyjny. Limit uchodźców ustala Sejm — na start około 3200 rocznie. 10 tysięcy złotych za dobrowolny powrót.",
    target: { slug: "migracja" },
  },
  {
    n: "02",
    unique: true,
    title: "Alkohol i konopie bez hipokryzji",
    line: "Koniec marketingu, małpek i alkoholu w sklepie spożywczym. Do 15 gramów przy sobie nie jest przestępstwem. Obrót konopi — państwowy.",
    target: { slug: "zdrowie", hash: "p-14" },
  },
  {
    n: "03",
    unique: true,
    title: "Parasol jądrowy nad Polską",
    line: "Pełny udział w natowskim nuclear sharing, z bronią Sojuszu na naszym terytorium. F-35 certyfikowane do jej przenoszenia — inaczej to tylko deklaracja.",
    target: { slug: "obrona", hash: "p-10" },
  },
  {
    n: "04",
    unique: true,
    title: "Koniec weta jednego człowieka",
    line: "Prezydent traci weto i prawo łaski. 205 tysięcy podpisów w 100 dni zatrzymuje ustawę. Konstytucję zmieniasz Ty.",
    target: { slug: "ustroj", hash: "p-15-2" },
  },
  {
    n: "05",
    unique: true,
    title: "Cztery dni, ta sama pensja",
    line: "Etapami: najpierw sektor publiczny i firmy powyżej 250 osób. Prawo do odłączenia się po godzinach — od pierwszego roku.",
    target: { slug: "praca", hash: "p-5" },
  },
  {
    n: "06",
    title: "Minimalna do 75% mediany",
    line: "Dziś około 63%. W kadencji co roku około 3 punkty procentowe. Potem rośnie z pensjami, nie z jednorazowej decyzji.",
    target: { slug: "praca", hash: "p-6" },
  },
  {
    n: "07",
    unique: true,
    title: "PIT bez zmian do 300 tysięcy",
    line: "12% i 32% zostają. Powyżej — 48, 56 i 71%, tylko od nadwyżki. Danina solidarnościowa zostaje.",
    target: { slug: "gospodarka", hash: "p-1" },
  },
  {
    n: "08",
    title: "Zdrowie: 7% PKB w dwóch kadencjach",
    line: "Nie w jednej. NFZ jako osobna kasa znika. Pierwsza wizyta u psychiatry — maksymalnie 14 dni.",
    target: { slug: "zdrowie", hash: "p-1" },
  },
  {
    n: "09",
    title: "O ciele nie decyduje poseł",
    line: "Aborcja na żądanie do 12. tygodnia. Placówka publiczna nie odmawia zabiegu klauzulą sumienia.",
    target: { slug: "zdrowie", hash: "p-7" },
  },
  {
    n: "10",
    unique: true,
    title: "Mieszkanie z daniny, nie z powietrza",
    line: "25–40 tysięcy lokali rocznie. 1% funduszu płac, po połowie z pasku i od pracodawcy. Publiczne zostaje publiczne.",
    target: { slug: "mieszkanie", hash: "p-1" },
  },
  {
    n: "11",
    title: "480 dni przy dziecku",
    line: "Do 12. roku życia. 90 dni dla każdego rodzica, bez przekazania. Samotny rodzic dostaje całą pulę.",
    target: { slug: "opieka", hash: "p-5" },
  },
  {
    n: "12",
    title: "Atom w 20–25 lat, nie na slajdzie",
    line: "Około 12 GW. Przyspieszamy Lubiatowo-Kopalino i Pątnów. Harmonogram sprawdzany co 3–4 lata.",
    target: { slug: "atom-krzem-stal", hash: "p-1" },
  },
  {
    n: "13",
    title: "Obrona zostaje tam, gdzie jest",
    line: "Około 4,8–5,2% PKB. Sześć procent nie jest obietnicą tej kadencji.",
    target: { slug: "obrona", hash: "p-1" },
  },
  {
    n: "14",
    title: "Euro bez daty",
    line: "Złoty zostaje. Przygotowania prawne — tak. ERM II dopiero po ścieżce fiskalnej z tego programu.",
    target: { slug: "gospodarka", hash: "p-14" },
  },
  {
    n: "15",
    unique: true,
    title: "Państwo na Linuksie, nie na licencji",
    line: "50 tysięcy stanowisk w pierwszym roku, 80% administracji w piątym. Jeden login do urzędu i lekarza. Pierwszy model „Polskiego AI” w 36 miesięcy.",
    target: { slug: "atom-krzem-stal", hash: "p-12" },
  },
  {
    n: "16",
    unique: true,
    title: "Państwo buduje, nie tylko zamawia",
    line: "Państwowy holding budowlany od kolei i energetyki. Duże inwestycje częściowo własnymi rękami, żeby prywatny wykonawca nie dyktował ceny w połowie budowy.",
    target: { slug: "atom-krzem-stal", hash: "p-16" },
  },
  {
    n: "17",
    unique: true,
    title: "Twórca płaci pół składki",
    line: "Drugą połowę pokrywa Fundusz Ubezpieczeń Twórców: 2% od honorarium, płacone przez wydawnictwa, teatry i galerie. Dla tych, dla których sztuka to główny zarobek.",
    target: { slug: "praca", hash: "p-12" },
  },
  {
    n: "18",
    unique: true,
    title: "Prawo do godnego końca",
    line: "Osoba nieuleczalnie chora i cierpiąca może złożyć wielokrotnie potwierdzony wniosek o wspomagane zakończenie życia. Weryfikuje go niezależna komisja lekarska.",
    target: { slug: "zdrowie", hash: "p-13" },
  },
  {
    n: "19",
    unique: true,
    title: "Trzy kadencje i przerwa",
    line: "Po trzech kadencjach z rzędu poseł robi kadencję przerwy. Jawny rejestr powiązań rodzinnych w administracji i spółkach Skarbu Państwa.",
    target: { slug: "uczciwa-polityka", hash: "p-3" },
  },
  {
    n: "20",
    unique: true,
    title: "Kara za kupowanie, nie za świadczenie",
    line: "Za usługę seksualną odpowiada ten, kto płaci. Osoby, które ją świadczą, nie są ścigane i dostają wsparcie, jeśli chcą odejść.",
    target: { slug: "wolnosc", hash: "p-9" },
  },
  {
    n: "21",
    unique: true,
    title: "Dwa głosy przy urnie",
    line: "230 posłów z okręgów jednomandatowych, a liczba mandatów partii — z głosu na listę. Próg 5%, ale trzy wygrane okręgi też otwierają drzwi do Sejmu.",
    target: { slug: "ustroj", hash: "p-15-3" },
  },
  {
    n: "22",
    unique: true,
    title: "Rachunek na wierzchu",
    line: "Aneks kosztów linia po linii. Dziura 0,6–1% PKB podana wprost. Pieniędzy z uszczelnienia podatków nie wliczamy do wpływów.",
    target: { page: "/rachunek" },
  },
  {
    n: "23",
    unique: true,
    title: "Zakaz ideologii imperialnej",
    line: "Art. 13 Konstytucji rozszerzamy analogicznie na współczesny imperializm rosyjski i amerykański: strefy wpływów, prawo silniejszego, wojna jako narzędzie. Nie obejmuje rzetelnej krytyki rządów i sojuszy.",
    target: { slug: "europa", hash: "p-4" },
  },
  {
    n: "24",
    unique: true,
    title: "Dziecko nie jest sprawą karną",
    line: "Koniec z pojęciem demoralizacji wobec dzieci do 12. roku życia. Szkoła nie może pozbyć się trudnego ucznia, oddając go sądowi. Zakaz krat. Zamiast żetonu — rola i praca, jak w licencji z Goniądza.",
    target: { slug: "resocjalizacja" },
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
        title: "Atom: ~12 GW w horyzoncie 20–25 lat, przyspieszenie budowanych bloków",
        body: "Program „Atomowa Polska” zakłada docelowo około 12 GW mocy jądrowej w 8 blokach jądrowych, ale w realistycznym horyzoncie 20–25 lat, nie 15 — bo tak jest po prostu uczciwiej wobec ludzi, którym się to obiecuje. Nie zaczynamy od zera: przyspieszamy projekty, które już są w budowie (Lubiatowo-Kopalino, Pątnów), a postęp sprawdzamy co 3–4 lata, żeby wiedzieć, kiedy harmonogram trzeba skorygować, zamiast udawać, że wszystko idzie zgodnie z planem.",
      },
      {
        n: "2",
        title: "Wiatr i słońce równolegle z atomem",
        body: "Równolegle z atomem stawiamy na energetykę wiatrową i słoneczną, bo te dają dodatkową moc w sieci szybciej niż elektrownie jądrowe, które budują się latami — nie czekamy z rękami złożonymi na atom, żeby zacząć produkować czystą energię.",
      },
      {
        n: "3",
        title: "Gwarancja pracy dla górników przy wygaszaniu węgla",
        body: "Dla regionów górniczych: górnicy pracujący dziś w spółkach Skarbu Państwa mają zagwarantowaną pracę do emerytury, nie zwolnienie z dnia na dzień pod pretekstem transformacji. Każde zlikwidowane stanowisko w energetyce konwencjonalnej ma mieć swój odpowiednik — nowe miejsce pracy w tym samym regionie, nie gdzieś odległym, do którego trzeba się przeprowadzić.",
      },
      {
        n: "4",
        title: "Krajowe kompetencje: atom, półprzewodniki, budowa maszyn",
        body: "Budujemy krajowe kompetencje przemysłowe w trzech kluczowych obszarach: energetyce jądrowej, produkcji półprzewodników i budowie maszyn — żeby nie być zależni wyłącznie od zagranicznych wykonawców i cudzych technologii, kiedy przyjdzie kolejny kryzys dostaw.",
      },
      {
        n: "5",
        title: "Zniesienie limitu długu 60% PKB — przez referendum",
        body: "Znosimy konstytucyjny limit, który dziś zakazuje zadłużania państwa powyżej 60% PKB. Dług zaciągnięty na budowę elektrowni atomowej czy modernizację sprzętu dla wojska jest ekonomicznie czymś innym niż dług na codzienne wydatki budżetu — inwestycja, która będzie służyć dekadami, nie powinna być traktowana tak samo jak dziura w budżecie na bieżące pensje. To zmiana konstytucji, więc — zgodnie z rozdziałem 15.2 — rozstrzygną ją obywatele w referendum.",
      },
      {
        n: "6",
        title: "Fundusz Inwestycji Strategicznych: dług na atom i wojsko",
        body: "Powołujemy Fundusz Inwestycji Strategicznych, który finansuje z długu program atomowy i modernizację wojska. Mieszkania nie są finansowane z tego funduszu — ich finansowanie opisujemy w rozdziale 7, bo to inny, celowy mechanizm oparty na daninie, nie na długu.",
      },
      {
        n: "7",
        title: "Kolej: duże prędkości, regionalna, nocna, centra przesiadkowe",
        body: "Inwestujemy w kolej: połączenia dużych prędkości, kolej regionalną łączącą mniejsze miasta, połączenia nocne i nowe centra przesiadkowe budowane z wykorzystaniem polskich technologii, nie tylko importowanych rozwiązań.",
      },
      {
        n: "8",
        title: "Jeden elektroniczny system poboru opłat na autostradach",
        body: "Autostrady dostają jeden, elektroniczny system poboru opłat w miejsce dzisiejszego rozdrobnienia między różne firmy i systemy. Dzisiejsze koncesje na autostrady nie są wykupywane przed czasem kosztem podatnika — po prostu wygasają naturalnie, kiedy się skończą.",
      },
      {
        n: "9",
        title: "Rozbudowa portów, terminali i bocznic kolejowych",
        body: "Rozbudowujemy zdolności przeładunkowe portów i terminali oraz bocznice kolejowe, żeby towar mógł jeździć koleją, nie tylko zapychać autostrady ciężarówkami.",
      },
      {
        n: "10",
        title: "Publiczne autobusy w każdej gminie",
        body: "Publiczne autobusy wracają do każdej gminy: kursy w dni robocze, plus przynajmniej trzy kursy w weekend, z pojazdami dostępnymi dla osób z niepełnosprawnościami — koniec z gminami, do których po prostu nie da się dojechać bez samochodu.",
      },
      {
        n: "11",
        title: "Jeden bilet u wszystkich przewoźników",
        body: "Wprowadzamy jeden bilet działający u wszystkich przewoźników, z przewidywalnym rozkładem jazdy, który nie zmienia się co chwilę bez ostrzeżenia.",
      },
      {
        n: "12",
        title: "Cyfrowa niezależność: Linux, otwarty kod, jeden login, „Polskie AI”",
        body: "Budujemy cyfrową niezależność państwa: własną infrastrukturę do przechowywania danych i przechodzenie z oprogramowania Microsoftu na system Linux i otwarte oprogramowanie biurowe (w pierwszym roku 50 tysięcy stanowisk pracy w administracji, w piątym roku co najmniej 80% całej administracji publicznej). Kod napisany za pieniądze podatnika ma być publicznie dostępny, nie zamknięty w prywatnej licencji. Jeden login wystarczy do załatwienia sprawy w urzędzie i w systemie zdrowia — koniec z dziesiątkami odrębnych kont i haseł. Cyfryzujemy też Państwową Inspekcję Pracy i ZUS, żeby sprawy szły szybciej. Uruchamiamy program „Polskie AI” — modele językowe trenowane na polskich tekstach, na krajowej infrastrukturze, z pierwszym modelem do obsługi administracji gotowym w ciągu 36 miesięcy. I zakazujemy trenowania sztucznej inteligencji na Twoich danych osobowych bez Twojej zgody.",
      },
      {
        n: "13",
        title: "Ochrona najmniej zarabiających przed kosztami ETS2",
        body: "Nie podnosimy cen energii tylko po to, żeby na papierze „spełnić unijną dyrektywę” klimatyczną. Koszty transformacji energetycznej nie mogą spadać na osoby najmniej zarabiające, które i tak już z trudem płacą rachunki. Od wejścia unijnego systemu ETS2 (opłata za emisje z ogrzewania i paliw) gospodarstwa o niskich dochodach dostają dopłaty ze Społecznego Funduszu Klimatycznego i wpływów z ETS — bez dodatkowego obciążenia budżetu.",
      },
      {
        n: "14",
        title: "Zakaz węgla w miastach od 2035, ochrona sieci ciepłowniczych",
        body: "Od 2035 roku zakazujemy ogrzewania węglem w domach w miastach. Publiczne sieci ciepłownicze nie mogą zostać sprzedane prywatnym inwestorom, a gdy sprzedawana jest sieć prywatna, gmina ma prawo pierwokupu.",
      },
      {
        n: "15",
        title: "Rezerwy strategiczne gazu, ropy i węgla",
        body: "Budujemy rezerwy strategiczne surowców energetycznych: gaz na 90 dni, ropa na 60 dni, węgiel energetyczny na 30 dni — żeby żaden kryzys dostaw z zagranicy nie zaskoczył kraju z pustymi magazynami.",
      },
      {
        n: "16",
        title: "Państwowy holding budowlany: kolej i energetyka",
        body: "Tworzymy państwowy holding budowlany specjalizujący się w kolei i energetyce — duże, strategiczne inwestycje infrastrukturalne państwo realizuje częściowo własnymi rękami, nie tylko zamawia u prywatnych firm, które mogą podnieść cenę w każdej chwili. Ten holding nie zajmuje się budową mieszkań — to odrębny mechanizm opisany w rozdziale 7.",
      },
    ],
  },
  {
    num: 2,
    slug: "praca",
    part: "I",
    title: "Państwo po stronie pracujących",
    kicker: "Praca",
    lead: "Miliony ludzi pracujących codziennie utrzymują ten kraj, a przez lata państwo patrzyło z boku, jak są pozbawiani stabilnej pracy, głosu w firmie i zwykłej ludzkiej ochrony przed wyzyskiem. To się zmienia — realny wpływ na to, co dzieje się w Twoim miejscu pracy, ochrona, kiedy jesteś chory, i pensja, która rośnie razem z gospodarką, nie zostaje w tyle.",
    pillars: ["pensja"],
    points: [
      {
        n: "1",
        title: "Pracownicy w radach nadzorczych, silniejsze związki zawodowe",
        body: "Ułatwiamy wchodzenie w spór zbiorowy i organizowanie strajków solidarnościowych z innymi zakładami, a pracodawcom utrudniającym działanie związków zawodowych grożą wyższe kary. W firmach zatrudniających od 500 do 1999 osób pracownicy wybierają jedną trzecią miejsc w radzie nadzorczej; w firmach od 2000 osób — formalnie połowę miejsc, choć w razie remisu głos rozstrzygający ma strona kapitałowa. Każda firma zatrudniająca od 50 osób musi mieć radę zakładową.",
      },
      {
        n: "2",
        title: "PIP przekwalifikowuje umowy śmieciowe na etat",
        body: "Bronimy prawa Państwowej Inspekcji Pracy do samodzielnego przekwalifikowania umowy cywilnoprawnej lub B2B na umowę o pracę, bez czekania na wyrok sądu — obowiązującego od lipca 2026 roku i zaskarżonego przez prezydenta do Trybunału Konstytucyjnego. Żeby to prawo działało w praktyce, w ciągu kadencji podwajamy liczbę inspektorów pracy.",
      },
      {
        n: "3",
        title: "Mobbing traktowany jak wypadek przy pracy",
        body: "Osoba, która stała się ofiarą mobbingu w pracy, jest traktowana tak jak ofiara wypadku przy pracy — dostaje pełny zasiłek, ochronę przed zwolnieniem na czas trwania sprawy i prawo do odszkodowania od pracodawcy.",
      },
      {
        n: "4",
        title: "Koniec bezpłatnych staży, szybsze sądy pracy",
        body: "Kończymy z praktyką bezpłatnych staży i wolontariatu, które w rzeczywistości są normalną pracą bez wynagrodzenia i żadnych praw pracowniczych. Sprawy pracownicze trafiają do osobnego pionu sądów pracy, z większą liczbą etatów sędziowskich i asystenckich — wyrok w pierwszej instancji zapada w ciągu 6 miesięcy od wniesienia pozwu.",
      },
      {
        n: "5",
        title: "4-dniowy tydzień pracy etapowo, koniec zakazu handlu w niedzielę",
        body: "Wprowadzamy 4-dniowy tydzień pracy bez utraty wynagrodzenia, ale etapowo: w pierwszych dwóch latach obejmuje sektor publiczny i firmy zatrudniające powyżej 250 osób, z oceną efektów po 18 miesiącach, żeby sprawdzić, co realnie działa. W latach 3–5 dołącza reszta gospodarki, z dłuższym czasem na przystosowanie dla małych firm do 50 pracowników. Prawo do „odłączenia się” po godzinach pracy, bez konsekwencji za nieodbieranie telefonu czy maila od szefa, działa od pierwszego roku. Znosimy ustawowy zakaz handlu w niedzielę — to ma być decyzja pracownika i pracodawcy, nie ustawodawcy — ale za pracę w niedzielę należy się 250% zwykłej stawki. Sprzedaż alkoholu w niedzielę to osobny zakaz, uzasadniony zdrowotnie, nie religijnie — opisany w rozdziale 5.",
      },
      {
        n: "6",
        title: "Płaca minimalna do 75% mediany",
        body: "Płaca minimalna dochodzi do 75% mediany krajowego wynagrodzenia stopniowo, w ciągu kadencji — co roku o około 3 punkty procentowe (dziś to około 63%). Potem rośnie razem z pensjami w całej gospodarce, nie zostaje jednorazową, polityczną decyzją zamrożoną na lata.",
      },
      {
        n: "7",
        title: "Widełki płacowe w każdym ogłoszeniu o pracę",
        body: "Każde ogłoszenie o pracę musi podawać widełki wynagrodzenia w samej treści ogłoszenia, nie dopiero przed rozmową — koniec z „wynagrodzeniem do uzgodnienia” jako sposobem na zaniżanie pensji na rozmowie. Wprowadzamy też mechanizmy korygujące różnice w wynagrodzeniach kobiet i mężczyzn za tę samą pracę.",
      },
      {
        n: "8",
        title: "Koniec premii frekwencyjnych",
        body: "Kończymy z premiami frekwencyjnymi, które w praktyce finansowo karzą pracownika za to, że poszedł na chorobowe.",
      },
      {
        n: "9",
        title: "Pensje publiczne powiązane ze średnią, koniec outsourcingu etatów",
        body: "Pensje w sektorze publicznym są powiązane ze średnim wynagrodzeniem w całej gospodarce i waloryzowane co roku co najmniej o wskaźnik inflacji. Kończymy z outsourcingiem stałych zadań administracji do firm zewnętrznych jako sposobem na obejście przepisów o zatrudnieniu.",
      },
      {
        n: "10",
        title: "Fundusz Automatyzacji z CIT firm redukujących etaty",
        body: "Firmy, które redukują etaty w wyniku automatyzacji i robotyzacji, płacą dodatkową część podatku CIT do Funduszu Automatyzacji, z którego finansujemy przekwalifikowanie zwalnianych pracowników na nowe zawody.",
      },
      {
        n: "11",
        title: "Praca użyteczna społecznie w regionach z bezrobociem",
        body: "Samorządy w regionach z wysokim bezrobociem dostają środki na tworzenie miejsc pracy przy zadaniach użytecznych społecznie — nie fikcyjnych etatów, tylko realnej pracy, która inaczej by nie powstała.",
      },
      {
        n: "12",
        title: "Pół składki dla twórców + Fundusz Ubezpieczeń Twórców",
        body: "Osoby zawodowo zajmujące się twórczością artystyczną — pisarze, muzycy, artyści wizualni — płacą tylko połowę standardowej składki na ubezpieczenie zdrowotne, emerytalne i opiekuńcze, tak jak pracownik na etacie płaci swoją część, a pracodawca drugą. Drugą połowę pokrywa nowy Fundusz Ubezpieczeń Twórców, finansowany z opłaty w wysokości 2% wartości honorarium, płaconej przez wydawnictwa, teatry, galerie, organizatorów koncertów i inne podmioty zamawiające pracę twórczą, uzupełnionej dotacją z budżetu państwa. Warunek: praca artystyczna musi być głównym, nie dodatkowym źródłem dochodu.",
      },
      {
        n: "13",
        title: "Umowa o pracę jako norma w publicznych instytucjach kultury",
        body: "W instytucjach kultury finansowanych z pieniędzy publicznych — teatrach, filharmoniach, muzeach, domach kultury i bibliotekach — stała praca odbywa się na umowie o pracę, nie na umowie o dzieło czy zleceniu. Umowa o dzieło zostaje tylko dla dzieł faktycznie jednorazowych: gościnnego spektaklu, kompozycji, projektu wystawy.",
      },
      {
        n: "14",
        title: "Prawdziwe ubezpieczenie od utraty pracy (80%/50% pensji)",
        body: "Dzisiejszy, symboliczny zasiłek dla bezrobotnych zastępujemy prawdziwym ubezpieczeniem od utraty pracy: pierwsze 6 miesięcy bez pracy to 80% ostatniej pensji, kolejne 6 miesięcy — 50%, z górnym limitem świadczenia takim samym jak przy zasiłku chorobowym.",
      },
    ],
  },
  {
    num: 3,
    slug: "migracja",
    part: "I",
    title: "Migracja",
    kicker: "Granica i praca",
    lead: "Granicą i azylem rządzi prawo, nie przypadek. Kto przyjeżdża do Polski pracować, ma zarabiać tyle co Polak na tym samym stanowisku — bo tani pracownik z zagranicy to broń przeciwko pensjom nas wszystkich. Kto łamie prawo, traci prawo pobytu. Kto je szanuje, może tu zbudować życie.",
    pillars: ["bezpieczenstwo", "pensja"],
    points: [
      {
        n: "1",
        group: "Praca",
        title: "Zezwolenie na pracę od 90% mediany (75% w zawodach deficytowych)",
        body: "Pozwolenie na pracę dostaje osoba z ofertą, w której pensja wynosi co najmniej 90% krajowej mediany wynagrodzeń. W zawodach deficytowych, z listy aktualizowanej co roku, próg wynosi 75% mediany — tyle, ile docelowa płaca minimalna (rozdział 2, punkt 6). Warunki zatrudnienia nie mogą być gorsze niż typowe w danym zawodzie i regionie. Ofertę trzeba najpierw wystawić na 14 dni w publicznym serwisie pracy.",
      },
      {
        n: "2",
        title: "Kontrola pensji wobec ZUS, kara dla pracodawcy przy niezgodności",
        body: "Urząd porównuje obiecaną pensję z danymi ZUS. Jeśli się nie zgadzają, karę płaci pracodawca, a pracownik ma 6 miesięcy na znalezienie nowej pracy bez utraty prawa pobytu.",
      },
      {
        n: "3",
        title: "Wykluczanie z zezwoleń zawodów z nadużyciami",
        body: "Rząd może rozporządzeniem wyłączyć z zezwoleń zawody, w których wykryto masowe nadużycia.",
      },
      {
        n: "4",
        title: "Nowe przestępstwa: wyzysk migranta, handel zezwoleniami",
        body: "Wprowadzamy dwa nowe przestępstwa: wyzysk pracy cudzoziemca oraz handel zezwoleniami na pracę — zagrożone karą do 4 lat więzienia. Pracodawca podejrzany lub skazany za wyzysk, handel ludźmi albo oszustwa podatkowe nie dostaje zezwoleń dla cudzoziemców. Kara za zatrudnienie osoby bez prawa do pracy rośnie dwukrotnie i obejmuje cały łańcuch podwykonawców. Pośrednik nie może pobrać od pracownika żadnej opłaty za pracę, wizę ani zakwaterowanie. Pobyt do roku wymaga pełnego ubezpieczenia zdrowotnego, łącznie z kosztem powrotu.",
      },
      {
        n: "5",
        title: "Ochrona prawa pracy niezależna od paszportu",
        body: "Ochrona prawa pracy przysługuje każdemu pracującemu w Polsce na tych samych zasadach, niezależnie od tego, jaki paszport posiada.",
      },
      {
        n: "6",
        group: "Azyl i ochrona",
        title: "Krajowa Agencja Migracyjna i Sąd Migracyjny",
        body: "Procedurę azylową prowadzi jedna, cywilna Krajowa Agencja Migracyjna, z 16 punktami przyjęć (po jednym na województwo). Odwołania rozstrzyga Sąd Migracyjny, a fizyczne wykonanie decyzji o wydaleniu należy do Straży Granicznej.",
      },
      {
        n: "7",
        title: "Pobyt w państwowym ośrodku na czas procedury",
        body: "Na czas trwania procedury azylowej osoba mieszka w państwowym ośrodku, nie pod dowolnie wybranym adresem — to ułatwia kontrolę i ewentualną deportację.",
      },
      {
        n: "8",
        title: "Odmowa azylu = wyjazd, bez konwersji na zezwolenie na pracę",
        body: "Odmowa azylu oznacza obowiązek wyjazdu. Nie można przejść z procedury azylowej na zezwolenie na pracę bez opuszczenia Polski — kto chce tu pracować, składa wniosek z zagranicy.",
      },
      {
        n: "9",
        title: "Utrata zezwolenia za łamanie prawa lub niepłacenie podatków",
        body: "Zezwolenie na pobyt zachowuje tylko osoba, która przestrzega prawa i płaci podatki. Naruszenie tego warunku oznacza utratę zezwolenia i obowiązek powrotu.",
      },
      {
        n: "10",
        title: "Limit uchodźców z programów ONZ ustala co roku Sejm (start ~3200/rok)",
        body: "Liczbę uchodźców przyjmowanych z programów ONZ uchwala co roku Sejm w ustawie budżetowej. Wyznacza ją liczba miejsc, które państwo realnie zapewni w mieszkaniach, na kursach i w szkołach — na start około 3200 osób rocznie. Pierwszeństwo mają kobiety, dzieci, osoby z niepełnosprawnościami i osoby prześladowane za orientację lub tożsamość.",
      },
      {
        n: "11",
        title: "Ochrona czasowa dla ucieczki przed wojną u granic",
        body: "Osoby uciekające przed wojną u naszych granic (jak Ukraińcy w 2022 roku) dostają szybką, odrębną ochronę czasową, która nie wlicza się do żadnego limitu — to solidarność sąsiedzka, nie standardowa migracja.",
      },
      {
        n: "12",
        title: "Kurator dla dzieci bez opieki w ciągu 3 dni",
        body: "Dzieci przybywające bez opieki dorosłych dostają kuratora w ciągu 3 dni i trafiają do rodziny zastępczej lub specjalistycznego ośrodka dla dzieci — nigdy do warunków przeznaczonych dla dorosłych.",
      },
      {
        n: "13",
        title: "Czasowe zawieszenie procedury azylowej pod kontrolą Sądu Najwyższego",
        body: "Jeśli granica Polski jest wykorzystywana instrumentalnie do wywołania kryzysu migracyjnego (jak np. przez Białoruś), procedura azylowa może zostać czasowo zawieszona — łącznie maksymalnie na 6 miesięcy w roku, a każde zawieszenie i przedłużenie kontroluje Sąd Najwyższy. Dziś przedłuża je Sejm, bez górnego limitu — to zmieniamy, żeby narzędzie nie było używane bez ograniczeń.",
      },
      {
        n: "14",
        group: "Rodzina, język, obywatelstwo",
        title: "Łączenie rodzin: próg dochodowy i mieszkaniowy, 2 lata pobytu",
        body: "Cudzoziemiec mieszkający legalnie w Polsce może sprowadzić małżonka lub partnera oraz dzieci do 18. roku życia. Warunki: mieszkanie odpowiedniej wielkości zapewnione co najmniej na rok oraz dochód, z którego po zapłaceniu podatku i czynszu zostaje miesięcznie co najmniej 1300 zł na osobę samotną albo 2150 zł na parę, a do tego 700 zł na dziecko do 6 lat, 830 zł na dziecko w wieku 7–10 lat, 970 zł w wieku 11–14 lat i 1110 zł od 15 lat. Kwoty są waloryzowane co roku jak inne progi dochodowe (rozdział 8, punkt 1). Osoba z pobytem czasowym musi mieszkać w Polsce co najmniej 2 lata, zanim sprowadzi rodzinę. Ten sam warunek dochodowy obowiązuje przy przedłużaniu zezwolenia. Wyjątki: dzieci, które przybyły bez opieki, oraz uchodźcy składający wniosek w ciągu 3 miesięcy od przyznania ochrony.",
      },
      {
        n: "15",
        title: "Bezpłatny kurs języka polskiego i wiedzy o Polsce (3 lata)",
        body: "Każdy cudzoziemiec z prawem pobytu ma prawo do bezpłatnego kursu języka polskiego i wiedzy o Polsce przez 3 lata od zapisu.",
      },
      {
        n: "16",
        title: "Obywatelstwo po 9 latach: B1, test, niekaralność",
        body: "Obywatelstwo polskie można uzyskać po 9 latach legalnego pobytu, ze znajomością języka polskiego na poziomie B1, zdanym testem wiedzy o społeczeństwie i bez istotnej karalności.",
      },
      {
        n: "17",
        title: "10 tys. zł wsparcia za dobrowolny powrót do kraju pochodzenia",
        body: "Osoba decydująca się na dobrowolny powrót do kraju pochodzenia dostaje wsparcie finansowe w wysokości 10 tysięcy złotych — to taniej i sprawiedliwiej niż lata utrzymywania kogoś bez perspektyw na pozostanie.",
      },
      {
        n: "18",
        title: "Koniec ogólnej, bezwarunkowej ulgi na powrót z emigracji",
        body: "Zagraniczni naukowcy i specjaliści przez pierwsze 7 lat pracy w Polsce płacą podatek od 75% dochodu — ale tylko w części dochodu mieszczącej się w drugim progu PIT (rozdział 4, punkt 1). Nie dotyczy to obywateli polskich ani osób, które mieszkały w Polsce w ciągu ostatnich 5 lat. Ogólna, bezwarunkowa ulga na powrót znika — została zawężona do jednego przypadku, opisanego w punkcie 19.",
      },
      {
        n: "19",
        title: "Nowa, węższa ulga na powrót — tylko zawody deficytowe",
        body: "Ulga na powrót zostaje, ale nie jako prezent za samą zmianę rezydencji. Przysługuje wyłącznie osobie, która wraca do zawodu z listy deficytowej (lekarz, pielęgniarka, nauczyciel, inżynier — lista jak przy zezwoleniach na pracę, punkt 1) i tylko od wynagrodzenia za pracę wykonywaną w Polsce, u polskiego pracodawcy albo w publicznej ochronie zdrowia lub oświacie. Limit i cztery lata zwolnienia zostają jak dziś. Kto wraca, a pracuje zdalnie dla zagranicznej firmy albo poza listą, rozlicza się na ogólnych zasadach.",
      },
    ],
  },
  {
    num: 4,
    slug: "gospodarka",
    part: "I",
    title: "Gospodarka dla ludzi",
    kicker: "Podatki i własność",
    lead: "Dziś zwykły pracujący człowiek płaci wyższy realny podatek niż wielu milionerów korzystających z ulg wylobbowanych przez lata. Odwracamy tę logikę — prosto i nisko dla większości, wyraźnie więcej od tych, którzy naprawdę mogą sobie na to pozwolić, bez świętych krów i wyjątków dla wybranych grup zawodowych.",
    pillars: ["pensja"],
    points: [
      {
        n: "1",
        title: "Pięć progów PIT (12–71%) plus danina solidarnościowa",
        body: "Podatek PIT ma pięć progów: 12% do 120 tysięcy złotych rocznego dochodu i 32% od 120 do 300 tysięcy (oba bez zmian wobec dziś), 48% od 300 do 800 tysięcy, 56% od 800 tysięcy do 2 milionów i 71% powyżej 2 milionów złotych rocznie — przy czym każda wyższa stawka dotyczy tylko nadwyżki dochodu nad danym progiem, nie całości zarobków. Zostaje 4-procentowa danina solidarnościowa od dochodów powyżej 1 miliona, więc realnie najwyższe stawki wynoszą 60% (od 1 do 2 milionów) i 75% (powyżej 2 milionów).",
      },
      {
        n: "2",
        title: "Podatek majątkowy od majątku netto nad 7 mln zł",
        body: "Majątek netto (po odjęciu długów) powyżej 7 milionów złotych obejmujemy podatkiem majątkowym ze stawką rosnącą od 1% do 8% w zależności od wielkości fortuny. Żeby dało się to w praktyce naliczać, tworzymy krajowy rejestr majątkowy.",
      },
      {
        n: "3",
        title: "Podatek od spadków i darowizn nad 2 mln zł",
        body: "Spadki i darowizny powyżej 2 milionów złotych na jednego spadkobiercę są opodatkowane: 10% do 5 milionów, 20% do 20 milionów, 25% powyżej. Mieszkanie, w którym spadkobierca faktycznie mieszkał, oraz rodzinne oszczędności do 2 milionów złotych są całkowicie wolne od tego podatku — to nie jest podatek na zwykłą rodzinę dziedziczącą mieszkanie po rodzicach.",
      },
      {
        n: "4",
        title: "Koniec ryczałtu dla większych firm i podatku liniowego",
        body: "Rozliczanie ryczałtem zostaje tylko dla małych działalności usługowych z przychodem do 200 tysięcy złotych rocznie. Przychody z wynajmu są zawsze rozliczane na skali PIT, nie ryczałtem. Podatek liniowy dla firm znika — przedsiębiorcy płacą podatki na takich samych zasadach jak osoba na etacie. Duchowni przechodzą na ogólne zasady opodatkowania, bez specjalnych przywilejów.",
      },
      {
        n: "5",
        title: "Koniec limitu 30-krotności składek, górny limit świadczenia",
        body: "Znosimy limit 30-krotności przeciętnego wynagrodzenia, powyżej którego dziś nie płaci się składek emerytalnych i rentowych — najlepiej zarabiający płacą składki od całego dochodu, jak wszyscy. Żeby nie tworzyło to w przyszłości bardzo wysokich emerytur, wprowadzamy górny limit świadczenia.",
      },
      {
        n: "6",
        title: "CIT 22% dla dużych firm, 9% dla małych",
        body: "Duże firmy, z przychodem powyżej 50 milionów złotych rocznie, płacą CIT 22% zamiast 19%. Małe firmy zostają przy stawce 9%.",
      },
      {
        n: "7",
        title: "Koniec ulg PIT dla młodych/seniorów, węższa ulga na powrót",
        body: "Likwidujemy zerowy PIT dla młodych do 26. roku życia i dla pracujących seniorów, a ulgę na dzieci obejmujemy progiem dochodowym dla wszystkich rodzin, nie tylko tych z jednym dzieckiem. Ulgi niezależne od dochodu najbardziej opłacają się tym, którzy zarabiają najwięcej. Ogólna ulga na powrót z emigracji znika, ale zostaje węższa, dla zawodów deficytowych i pracy w Polsce (rozdział 3, punkt 19).",
      },
      {
        n: "8",
        title: "Ściganie ukrywania dochodów, koniec fundacji rodzinnych jako tarczy",
        body: "Przychody celowo ukryte przed fiskusem, gdy to zostanie wykryte, podlegają przepadkowi. Fundacje rodzinne wykorzystywane wyłącznie do unikania podatków zostają zlikwidowane jako instrument. Krajowa Administracja Skarbowa ma być dla podatnika pomocą, nie organem urządzającym „łapanki” — a za błąd samego urzędu odpowiada urząd, nie obywatel. Wzmacniamy KAS w walce z karuzelami VAT i szarą strefą — ale wpływów z uszczelnienia nie wliczamy do rachunku tego programu.",
      },
      {
        n: "9",
        title: "Podatek od nadmiarowych zysków w kryzysie",
        body: "W okresach kryzysowych nadzwyczajne, ponadprzeciętne zyski firm w sektorach strategicznych (energetyka, banki) obejmujemy specjalnym podatkiem od nadmiarowych zysków.",
      },
      {
        n: "10",
        title: "Podatek 5% od obrotu wielkich platform cyfrowych",
        body: "Wielkie platformy cyfrowe płacą podatek w wysokości 5% obrotu z reklamy internetowej i pośrednictwa handlowego osiąganego na terenie Polski — niezależnie od tego, gdzie formalnie mają siedzibę.",
      },
      {
        n: "11",
        title: "Wsparcie unijnego podatku od transakcji kapitałowych i majątków",
        body: "Na poziomie europejskim popieramy wprowadzenie podatku od transakcji kapitałowych i podatku od wielkich majątków. Dzisiejszy podatek od instytucji finansowych (bankowy) zostaje — dokładną stawkę ustali odrębna ustawa.",
      },
      {
        n: "12",
        title: "VAT 5% na całą żywność i higienę",
        body: "VAT 5% obejmuje całą żywność, także tę, która dziś ma stawkę 8%, oraz podstawowe produkty higieniczne, które dziś często mają 23% — to bezpośrednio niższe ceny na zakupy, z których korzysta każdy, niezależnie od zarobków.",
      },
      {
        n: "13",
        title: "Akcyza na paliwa waloryzowana automatycznie",
        body: "Akcyza na paliwa jest co roku automatycznie waloryzowana o wskaźnik inflacji — koniec z zamrażaniem jej przed wyborami i skokowymi podwyżkami po nich.",
      },
      {
        n: "14",
        title: "Euro jako cel długofalowy, bez daty w tej kadencji",
        body: "Przyjęcie euro traktujemy jako długofalowy kierunek, nie zobowiązanie na tę kadencję — w tym czasie Polska zostaje przy złotym. Prowadzimy przygotowania prawne: gotowość NBP, plan dualnego obiegu złotego i euro, pełnomocnik rządu do spraw euro, raport o postępach co roku. Wejście do mechanizmu ERM II i konkretna data przyjęcia euro następują po tym, jak spełnimy ścieżkę fiskalną opisaną w tym programie — nie odwrotnie, nie na siłę przed terminem.",
      },
      {
        n: "15",
        title: "Sektory strategiczne na zawsze publiczne, „złota akcja” w bankach",
        body: "Pewne sektory zostają w rękach państwa na zawsze, jako rdzeń strategiczny: przesył i dystrybucja energii, elektrownie atomowe, węgiel na czas transformacji, publiczne odnawialne źródła energii, infrastruktura kolejowa, przemysł zbrojeniowy, zasób mieszkań publicznych, oraz Bank Gospodarstwa Krajowego i banki rozrachunkowe. Cała energetyka, łącznie z obrotem energią i wytwarzaniem konwencjonalnym, zostaje państwowa. Sprzedajemy jedynie pakiety mniejszościowe w komercyjnych bankach Skarbu Państwa — zachowując tak zwaną „złotą akcję”, która daje państwu prawo weta w kluczowych sprawach: przenoszenia siedziby, infrastruktury krytycznej, wrogiego przejęcia czy masowych zwolnień powyżej określonego progu. Cały przychód ze sprzedaży tych pakietów trafia do Funduszu Inwestycji Strategicznych (atom i modernizacja wojska).",
      },
      {
        n: "16",
        title: "Fundusze zalążkowe zamiast dotacji, spółdzielnia od 3 osób",
        body: "Zamiast bezzwrotnych dotacji dla wielkich korporacji, państwo inwestuje przez publiczne fundusze zalążkowe w zamian za udział w przyszłych zyskach. Założenie spółdzielni wymaga już tylko trzech osób, nie więcej.",
      },
      {
        n: "17",
        title: "Deregulacja: jedna koncesja, milcząca zgoda urzędu",
        body: "Deregulujemy zbędne procedury administracyjne — bez dotykania praw pracowniczych. Tam, gdzie dziś trzeba trzech osobnych koncesji, wystarczy jedna. W sprawach niskiego ryzyka wprowadzamy zasadę milczącej zgody: jeśli urząd nie odpowie w terminie, sprawa jest automatycznie zatwierdzona.",
      },
      {
        n: "18",
        title: "Łatwe wypowiadanie subskrypcji, cena końcowa w reklamie",
        body: "Każdą subskrypcję i usługę zawartą przez internet można wypowiedzieć tą samą drogą i tak samo łatwo, jak się ją zawarło — jednym kliknięciem, bez dzwonienia na infolinię. Cena w reklamie i na pierwszym ekranie jest ceną końcową, ze wszystkimi obowiązkowymi opłatami. Darmowy okres próbny nie przechodzi w płatny bez wyraźnej zgody klienta tuż przed pierwszym obciążeniem.",
      },
      {
        n: "19",
        title: "Łatwiejsze pozwy zbiorowe, silniejszy UOKiK",
        body: "Pozew zbiorowy mogą złożyć już dwie osoby, w każdej sprawie konsumenckiej. Organizacja konsumencka może pozwać w imieniu wszystkich poszkodowanych, którzy nie zgłosili sprzeciwu — bez zbierania od każdego pisemnej zgody. Pieniądze, których nikt nie odebrał, trafiają na edukację konsumencką, nie wracają do firmy. UOKiK może nakazać natychmiastowe wstrzymanie praktyki, bez czekania na koniec postępowania, a jego ostateczna decyzja wiąże sąd w sprawach o odszkodowanie — klient nie musi drugi raz udowadniać, że firma oszukiwała.",
      },
    ],
  },
  {
    num: 5,
    slug: "zdrowie",
    part: "I",
    title: "Zdrowie i Twoje ciało",
    kicker: "Zdrowie",
    lead: "Publiczna ochrona zdrowia nie może być poczekalnią do prywatnej. O Twoim ciele nie decyduje poseł ani biskup.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "7% PKB na zdrowie w 2 kadencje, centralne zakupy leków, ryczałt dla placówek",
        body: "Publiczne wydatki na zdrowie dochodzą do 7% PKB — liczonego od bieżącego roku, nie sprzed dwóch lat — w ciągu dwóch kadencji, rosnąc równo co roku. Od pierwszego roku wprowadzamy centralne zakupy leków, żeby państwo negocjowało ceny w skali całego kraju, nie szpital po szpitalu. Co 24 miesiące renegocjujemy listy leków refundowanych. Od drugiego roku znosimy limity punktowe w ambulatoryjnej opiece specjalistycznej (AOS) — koniec z sytuacją, gdy przychodnia „wyczerpała limit” i nie przyjmie pacjenta do końca miesiąca — a szpitale i przychodnie dostają ryczałtowe finansowanie personelu i utrzymania, nie płatność za każdą pojedynczą procedurę.",
      },
      {
        n: "2",
        title: "Likwidacja NFZ, finansowanie prosto z budżetu",
        body: "Narodowy Fundusz Zdrowia jako osobna kasa przestaje istnieć — świadczenia zdrowotne finansujemy prosto z budżetu państwa, a pracownicy dzisiejszego NFZ przechodzą do ministerstwa zdrowia i jego oddziałów regionalnych.",
      },
      {
        n: "3",
        title: "Rzecznik Praw Pacjenta z realnymi uprawnieniami",
        body: "Rzecznik Praw Pacjenta dostaje realne uprawnienia kontrolne i wykonawcze, nie tylko funkcję doradczą bez żadnej mocy.",
      },
      {
        n: "4",
        title: "Zakaz przenoszenia pacjenta z kolejki publicznej do prywatnej",
        body: "Zakazujemy kierowania własnego pacjenta z kolejki publicznej do swojego prywatnego gabinetu, żeby przyspieszyć wizytę za opłatą.",
      },
      {
        n: "5",
        title: "Etat jako norma w zdrowiu, więcej kompetencji zawodów medycznych",
        body: "Umowa o pracę na etat staje się podstawową formą zatrudnienia w ochronie zdrowia, nie kontrakty i umowy cywilnoprawne. Poszerzamy kompetencje pielęgniarek, ratowników medycznych, diagnostów laboratoryjnych i farmaceutów, żeby mogli samodzielnie robić więcej. Zawód psychoterapeuty dostaje odrębną ustawę, tak jak w 2026 roku dostał ją zawód psychologa. Zwiększamy liczbę miejsc na studiach medycznych.",
      },
      {
        n: "6",
        title: "Jeden system rejestracji wizyt, gabinet w każdej szkole",
        body: "Wprowadzamy jeden, ogólnokrajowy system rejestracji wizyt lekarskich. Opieka okołoporodowa jest dostępna w każdym województwie, stomatologia i opieka pielęgniarska — w każdej gminie. W każdej szkole działa gabinet pielęgniarki i dentysty.",
      },
      {
        n: "7",
        title: "Aborcja na żądanie do 12. tygodnia, bez klauzuli sumienia w placówkach publicznych",
        body: "Przerwanie ciąży na żądanie jest dostępne do 12. tygodnia ciąży; po tym terminie — na podstawie przesłanek medycznych. W placówce publicznej finansowanej z pieniędzy podatnika nie można odmówić wykonania zabiegu, powołując się na klauzulę sumienia — placówka jako instytucja ma obowiązek zapewnić dostęp, niezależnie od przekonań konkretnego lekarza.",
      },
      {
        n: "8",
        title: "Składka zdrowotna jako danina 9% zawsze",
        body: "Dzisiejsza składka zdrowotna staje się celową daniną zdrowotną: 9% od dochodu, zawsze, także dla osób rozliczających się ryczałtem od działalności usługowej — koniec z sytuacją, w której forma rozliczenia podatkowego decyduje o tym, ile płaci się na zdrowie. Cała danina jest wydawana wyłącznie na ochronę zdrowia.",
      },
      {
        n: "9",
        title: "In vitro dla osób samotnych i do 45. roku życia",
        body: "Rozszerzamy istniejącą refundację in vitro (do 6 cykli) na osoby samotne i na osoby do 45. roku życia.",
      },
      {
        n: "10",
        title: "Szybki dostęp do psychiatry (14 dni / 72h w kryzysie)",
        body: "Na pierwszą wizytę u psychiatry czeka się maksymalnie 14 dni, a w sytuacji kryzysowej pomoc jest dostępna w ciągu 72 godzin, bez potrzeby skierowania od innego lekarza. Rozwijamy sieć centrów zdrowia psychicznego działających w środowisku lokalnym. Dodatkowe pieniądze na ten rozwój pochodzą z podwyższonej akcyzy na alkohol i konopie (patrz punkt 14 niżej), nie z ogólnego budżetu. Gdy sygnał przychodzi ze szkoły — od kolegi, nauczyciela albo samego ucznia — pomoc przy bezpośrednim zagrożeniu życia startuje tego samego dnia, według skryptu z rozdziału 10, punkt 12. 72 godziny są sufitem wizyty, gdy kryzys nie jest natychmiastowy, nie celem na dzisiaj.",
      },
      {
        n: "11",
        title: "Pełne finansowanie chorób rzadkich, bez limitów kwotowych",
        body: "Leczenie chorób rzadkich jest finansowane w pełni, bez limitów kwotowych, które dziś zmuszają rodziny do zbiórek publicznych na leczenie własnych dzieci.",
      },
      {
        n: "12",
        title: "Kontrola suplementów diety, zakaz ich reklamy",
        body: "Rynek suplementów diety i preparatów udających leki obejmujemy ściślejszą kontrolą jakości i bezpieczeństwa, z całkowitym zakazem ich reklamy.",
      },
      {
        n: "13",
        title: "Prawo do wspomaganego zakończenia życia",
        body: "Osoba nieuleczalnie chora i cierpiąca ma prawo złożyć wielokrotnie potwierdzony wniosek o wspomagane zakończenie życia, weryfikowany przez niezależną komisję lekarską — to godność decydowania o własnym końcu życia, nie obowiązek cierpienia do ostatniej chwili.",
      },
      {
        n: "14",
        title: "Alkohol i konopie — zdrowie publiczne zamiast represji",
        body: "Zdrowie publiczne zamiast represji — alkohol i konopie. Obecna polityka to hipokryzja: kartel alkoholowy bez kary, obywatel z suszem — z paragrafem. Odrzucamy podział na „legalny alkohol” i „nielegalne narkotyki”. Państwo leczy i edukuje, nie tylko karze.\n\nAlkohol jest neurotoksyną, kancerogenem i substancją silnie uzależniającą. Nie ma bezpiecznej dawki etanolu. Całkowity zakaz marketingu i sponsoringu, w tym sportu przez browary i promocji piw 0%. Wycofanie alkoholu ze stacji benzynowych i sklepów spożywczych w ciągu 24 miesięcy — zostają tylko punkty koncesjonowane, otwarte 10:00–20:00, z suchą niedzielą. Zakaz sprzedaży „małpek” (do 200 ml). Ostrzeżenia zdrowotne na opakowaniach. Akcyza na alkohol rośnie o 30% ponad stawki uchwalone na 2027 (łącznie ok. 65% wobec 2025); cały przyrost z akcyzy na alkohol i konopie idzie ustawowo na psychiatrię.\n\nPosiadanie do 15 g przy sobie i do 30 g w domu nie jest przestępstwem. Obrót konopiami wyłącznie koncesjonowany i państwowy, uprawa prywatna zakazana, sprzedaż od 21. roku życia. Edukacja o realnych ryzykach. Higiena psychiczna w szkołach od klasy 4.",
      },
    ],
  },
  {
    num: 6,
    slug: "uczciwa-polityka",
    part: "I",
    title: "Uczciwa polityka",
    kicker: "Państwo prawa",
    lead: "Polityka w Polsce zbyt długo była grą, w której wielkie pieniądze sponsorów i znajomości decydowały więcej niż Twój głos. Kończymy z tym — jawne finanse kampanii, koniec z przechodzeniem z fotela ministra prosto do rady nadzorczej spółki, którą się wcześniej nadzorowało.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Limit 5000 zł na kampanię, zakaz billboardów wyborczych",
        body: "Jedna osoba może wpłacić na kampanię lub partię maksymalnie 5000 złotych rocznie. Zakazujemy płatnych billboardów wyborczych i komercyjnej reklamy politycznej w przestrzeni publicznej.",
      },
      {
        n: "2",
        title: "Zakaz „drzwi obrotowych” po funkcji publicznej",
        body: "Polityk, który zakończył sprawowanie funkcji publicznej, przez 2 lata nie może zasiadać w radzie nadzorczej spółki Skarbu Państwa ani podjąć pracy u firmy, która była wykonawcą zamówień publicznych w obszarze, którym się zajmował.",
      },
      {
        n: "3",
        title: "Limit trzech kadencji z rzędu w Sejmie",
        body: "W Sejmie wprowadzamy limit trzech kadencji z rzędu, po których wymagana jest jedna kadencja przerwy — po przerwie można znów startować, maksymalnie na kolejne trzy kadencje.",
      },
      {
        n: "4",
        title: "Konkursy na stanowiska urzędnicze, nie nadania",
        body: "Stanowiska od dyrektora departamentu w administracji publicznej wzwyż w hierarchii urzędniczej, ale poniżej rangi politycznej, obsadza się wyłącznie w drodze konkursu, nie z nadania. Ministrowie i wiceministrowie zostają stanowiskami politycznymi, obsadzanymi przez rząd, jak dziś.",
      },
      {
        n: "5",
        title: "Rejestr powiązań rodzinnych w administracji i spółkach",
        body: "Tworzymy publicznie dostępny rejestr powiązań rodzinnych osób zatrudnionych w administracji publicznej i spółkach Skarbu Państwa, żeby jawnie było widać przypadki nepotyzmu.",
      },
      {
        n: "6",
        title: "Darmowa baza prawna, wyższe pensje w sądach i prokuraturach",
        body: "Państwo prowadzi bezpłatną bazę prawną z tekstami ujednoliconymi wszystkich aktów i pełnym orzecznictwem wszystkich sądów — na poziomie dzisiejszych płatnych systemów komercyjnych. Podnosimy pensje pracowników sądów i prokuratur, żeby ograniczyć odejścia do sektora prywatnego.",
      },
    ],
  },
  {
    num: 7,
    slug: "mieszkanie",
    part: "I",
    title: "Prawo do mieszkania",
    kicker: "Mieszkanie",
    lead: "Mieszkanie jest prawem, nie walorem inwestycyjnym do obrotu na rynku.",
    pillars: ["mieszkanie"],
    points: [
      {
        n: "1",
        title: "25–40 tys. mieszkań komunalnych rocznie, na zawsze publiczne",
        body: "Państwo buduje od 25 do 40 tysięcy mieszkań komunalnych i mieszkań o ograniczonym zysku (budowanych przez podmioty, które z zasady nie mogą maksymalizować zysku z czynszu) rocznie — tyle, ile realnie pozwala sfinansować danina opisana w punkcie 2, nie liczba wzięta z powietrza. Ziemia publiczna przeznaczona pod ten program nie jest sprzedawana. Zasada jest prosta: co raz zbudowane za publiczne pieniądze, zostaje publiczne na zawsze — nie będzie już wyprzedawane z bonifikatami, jak działo się to od lat 90.",
      },
      {
        n: "2",
        title: "Danina mieszkaniowa 1% funduszu płac",
        body: "Cały program finansujemy z daniny mieszkaniowej w wysokości 1% funduszu płac — po połowie płaci pracownik i pracodawca (0,5% każdy). To nie jest dodatkowa linia wydatku równa 1% PKB wyjęta z budżetu centralnego — to osobna, celowa danina, widoczna na każdym odcinku wypłaty, nie skryta w ogólnych podatkach.",
      },
      {
        n: "3",
        title: "Podatek od 3.+ mieszkania i mieszkań stojących pustych",
        body: "Osoba fizyczna posiadająca trzecie i czwarte mieszkanie płaci od nich 1% wartości rocznie, a od piątego mieszkania wzwyż — 2%. Pierwsze dwa mieszkania są całkowicie wolne od tego podatku — to nie dotyka zwykłej rodziny z mieszkaniem i domkiem letniskowym. Mieszkanie stojące puste jako inwestycja dłużej niż 12 miesięcy jest opodatkowane tak, jak trzecie mieszkanie, niezależnie od tego, które w kolejności faktycznie jest.",
      },
      {
        n: "4",
        title: "Licencja i limit dni na wynajem krótkoterminowy",
        body: "Wynajem krótkoterminowy wymaga licencji i podlega nadzorowi gminy. Całe lokale, w których wynajmujący nie mieszka, można tak wynajmować maksymalnie 90 dni w roku; wynajem pokoju we własnym mieszkaniu nie ma limitu.",
      },
      {
        n: "5",
        title: "Wzorcowa umowa najmu, limit kaucji i podwyżek czynszu",
        body: "Wprowadzamy wzorcową umowę najmu chroniącą obie strony, z kaucją nie wyższą niż jednomiesięczny czynsz, i niezależny urząd rozstrzygający spory między najemcą a wynajmującym. W gminach, które formalnie uchwalą u siebie „strefę deficytu mieszkaniowego”, podwyżka czynszu jest ograniczona do wskaźnika inflacji plus 1 punkt procentowy rocznie.",
      },
      {
        n: "6",
        title: "Publiczne biuro pośrednictwa bez prowizji, rejestr cen transakcyjnych",
        body: "W każdym województwie działa publiczne biuro pośrednictwa w obrocie i wynajmie mieszkań, które nie pobiera prowizji. Publicznie dostępny rejestr cen transakcyjnych sprzedaży i najmu pozwala każdemu sprawdzić, ile mieszkanie naprawdę jest warte, zamiast wierzyć cenie z ogłoszenia.",
      },
      {
        n: "7",
        title: "Standardy urbanistyczne, 20% mieszkań społecznych w nowych planach",
        body: "Nowe osiedla muszą spełniać obowiązkowe standardy urbanistyczne (dostęp do zieleni, szkół, komunikacji), a nowe plany miejscowe przeznaczają co najmniej 20% nowych mieszkań na mieszkania społeczne — koniec z chaotyczną zabudową bez żadnej infrastruktury wokół.",
      },
    ],
  },
  {
    num: 8,
    slug: "opieka",
    part: "I",
    title: "Państwo, na które możesz liczyć",
    kicker: "Opieka",
    lead: "Miarą państwa jest to, jak traktuje ludzi w najtrudniejszych momentach życia — starość, choroba, samotne wychowywanie dziecka. Dziś ten ciężar zbyt często spada na rodzinę, a najczęściej na kobiety. Bierzemy go na siebie.",
    pillars: ["bezpieczenstwo", "pensja"],
    points: [
      {
        n: "1",
        title: "Automatyczna waloryzacja świadczeń i progów dochodowych",
        body: "Wszystkie świadczenia społeczne (poza emeryturami i rentami) oraz progi dochodowe są waloryzowane automatycznie każdego 1 stycznia, o wskaźnik inflacji albo wzrost płac w gospodarce — w zależności od tego, który jest wyższy. Nie czekamy na jednorazową, polityczną decyzję przed wyborami.",
      },
      {
        n: "2",
        title: "Jeden system emerytalny, wiek 65 lat, likwidacja KRUS",
        body: "Wprowadzamy jeden, wspólny system emerytalny z jednym wiekiem emerytalnym — 65 lat dla wszystkich; wiek emerytalny kobiet podnosimy stopniowo. Osobny system emerytalny dla rolników (KRUS) przestaje istnieć — rolnicy wchodzą do systemu ogólnego.",
      },
      {
        n: "3",
        title: "Asystencja osobista dla osób z niepełnosprawnościami",
        body: "Osoby z niepełnosprawnościami dostają prawo do bezpłatnej asystencji osobistej i opieki wytchnieniowej dla opiekunów rodzinnych: od 30 do 240 godzin asystencji miesięcznie, zależnie od potrzeb, dla wszystkich grup wiekowych od pierwszego roku programu, bez odraczania. Polski Język Migowy zyskuje status języka mniejszości.",
      },
      {
        n: "4",
        title: "Renta socjalna: stopniowa, nie nagła utrata przy dorobieniu",
        body: "Dorobienie sobie do renty socjalnej nie powoduje utraty całego świadczenia z dnia na dzień — świadczenie zmniejsza się stopniowo, proporcjonalnie do dodatkowego dochodu.",
      },
      {
        n: "5",
        title: "480 dni urlopu rodzicielskiego, w tym 90 dni tylko dla każdego rodzica",
        body: "Rodzice dostają łącznie 480 płatnych dni urlopu związanego z dzieckiem, do wykorzystania do jego 12. roku życia — z czego 90 dni jest zarezerwowanych dla każdego rodzica osobno i nie można ich przekazać drugiemu. Pierwsze 390 dni płacone jest na poziomie około 80% pensji, z takim samym górnym limitem jak przy zwolnieniu chorobowym; ostatnie 90 dni — stawką ryczałtową, corocznie waloryzowaną. Rodzic samotnie wychowujący dziecko ma prawo do całej puli dni, nie tylko swojej połowy.",
      },
      {
        n: "6",
        title: "Pełne utrzymanie sierot do 26. roku życia w toku nauki",
        body: "Dzieci pozostające bez opieki rodziców (sieroty, w tym sieroty społeczne) mają zagwarantowane pełne utrzymanie do 26. roku życia, jeśli w tym czasie się uczą.",
      },
      {
        n: "7",
        title: "Fundusz Alimentacyjny, aktywne ściganie dłużników",
        body: "Fundusz Alimentacyjny zostaje (do 1000 złotych miesięcznie na dziecko), a państwo dodatkowo aktywnie ściga dłużników alimentacyjnych. Osoba dochodząca alimentów dostaje darmową pomoc prawną.",
      },
      {
        n: "8",
        title: "Jedna instytucja odpowiedzialna za przemoc domową",
        body: "Odpowiedzialność za reagowanie na przemoc domową, dziś rozproszoną między różne instytucje, skupiamy w jednym miejscu, z rozbudowaną siecią ośrodków interwencji kryzysowej dostępnych całodobowo.",
      },
      {
        n: "9",
        title: "Mieszkania senioralne, zasada „najpierw mieszkanie” dla bezdomności",
        body: "Budujemy mieszkania senioralne i chronione dla osób starszych i wymagających wsparcia. Walkę z bezdomnością prowadzimy według zasady „najpierw mieszkanie” — najpierw dajemy człowiekowi dach nad głową, potem pomagamy z resztą — pod nadzorem pełnomocnika rządu odpowiedzialnego za wygaszenie bezdomności.",
      },
    ],
  },
  {
    num: 9,
    slug: "nauka",
    part: "I",
    title: "Nauka",
    kicker: "Uczelnie",
    lead: "Najlepsi polscy naukowcy wyjeżdżają, bo w kraju nie mają ani stabilności zatrudnienia, ani pieniędzy na życie z pracy badawczej. Bez inwestycji w naukę nie zbudujemy niczego z rozdziału 1 — ani atomu, ani polskiego AI, ani nowych leków.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Waloryzacja subwencji dla uczelni co roku",
        body: "Subwencje dla uczelni są waloryzowane co roku co najmniej o wskaźnik inflacji.",
      },
      {
        n: "2",
        title: "Umowa o pracę dla doktorantów, ze składkami i L4",
        body: "Doktoranci dostają umowę o pracę zamiast stypendium — w tej samej kwocie co dziś, ale ze składkami emerytalnymi, stażem pracy i prawem do L4. Konkursy na stanowiska akademickie są w pełni jawne, z publicznie dostępnymi kryteriami oceny.",
      },
      {
        n: "3",
        title: "Gwarantowane ustawowo finansowanie NCN i PAN",
        body: "Narodowe Centrum Nauki dostaje ustawowo zagwarantowane finansowanie pozwalające wsparcie co najmniej jednego z pięciu zgłoszonych projektów badawczych. Polska Akademia Nauk ma ustawowo zapisany budżet podstawowy — granty z NCN są dodatkiem do tego budżetu, nie jedynym źródłem finansowania działalności naukowej.",
      },
      {
        n: "4",
        title: "Nadzór nad prywatnymi „fabrykami dyplomów”",
        body: "Wzmacniamy nadzór nad prywatnymi szkołami wyższymi działającymi jak „fabryki dyplomów” — sprzedającymi tytuły bez realnej wartości edukacyjnej.",
      },
      {
        n: "5",
        title: "Stypendium socjalne 50% płacy minimalnej, nowe akademiki",
        body: "Stypendium socjalne dla studentów wynosi 50% płacy minimalnej. Budujemy 20 tysięcy nowych miejsc w akademikach w ciągu 8 lat. Stołówki studenckie działają na zasadach non-profit, nie jako biznes.",
      },
      {
        n: "6",
        title: "Otwarty dostęp do publikacji i danych badawczych",
        body: "Wszystkie publikacje i dane badawcze finansowane z pieniędzy publicznych są dostępne dla każdego bezpłatnie (otwarty dostęp) — koszty publikacji pokrywa państwo, nie czytelnik ani autor.",
      },
      {
        n: "7",
        title: "Osobna pula finansowania na humanistykę i nauki społeczne",
        body: "Nauki humanistyczne i społeczne dostają osobną, zagwarantowaną pulę finansowania — nie to, co zostanie po rozdaniu pieniędzy naukom technicznym i przyrodniczym.",
      },
    ],
  },
  {
    num: 10,
    slug: "szkola",
    part: "I",
    title: "Szkoła równych szans",
    kicker: "Edukacja",
    lead: "O przyszłości dziecka nie powinien decydować portfel rodziców. Szkoła publiczna, dostępna dla każdego, ma dawać realną szansę na start w życiu, nie tylko świadectwo z pieczątką.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "Bezpłatne obiady do 150% minimum socjalnego, gwarantowane miejsca",
        body: "Ciepły obiad w szkole jest bezpłatny dla rodzin o dochodach do 150% minimum socjalnego; powyżej tego progu — płatny, ale dostępny dla każdego. Miejsce w publicznym żłobku, przedszkolu i szkole jest gwarantowane, nie zależy od loterii zapisów.",
      },
      {
        n: "2",
        title: "Brak dotacji publicznych dla szkół komercyjnych",
        body: "Szkoły komercyjne, działające dla zysku, nie dostają dotacji z budżetu publicznego. Organizacje oświatowe działające non-profit mogą dostać dotację w formie stawki za ucznia, tak jak szkoły publiczne.",
      },
      {
        n: "3",
        title: "Odciążenie nauczycieli z nadmiaru biurokracji",
        body: "Odciążamy nauczycieli z nadmiaru biurokracji, poprawiamy system awansu zawodowego i zapewniamy wsparcie psychologiczne przeciw wypaleniu zawodowemu. Pensje nauczycieli waloryzowane są tak samo jak w całym sektorze publicznym (rozdział 2, punkt 9).",
      },
      {
        n: "4",
        title: "Limit 20/25 uczniów w klasie",
        body: "Klasa liczy maksymalnie 20 uczniów w klasach 1–3 i 25 w starszych. Zapewniamy realne wsparcie psychologiczno-pedagogiczne oraz jasne procedury reagowania na przemoc rówieśniczą, w tym przemoc w internecie. Sygnał, że ktoś z klasy chce odebrać sobie życie, ma osobny skrypt — punkt 12. To nie jest „przemoc rówieśnicza” i nie obsługuje się go tą samą procedurą co bójki.",
      },
      {
        n: "5",
        title: "Wspólny, ogólnokrajowy rdzeń programowy (70–80% treści)",
        body: "Program nauczania ma wspólny, ogólnokrajowy rdzeń obejmujący 70–80% treści — żeby matura znaczyła to samo w całym kraju. Pozostała część to aneks regionalny, dopasowany lokalnie (historia i kultura regionu, drugi język, profile zawodowe pod lokalną gospodarkę).",
      },
      {
        n: "6",
        title: "Krótszy, mniej sformalizowany dzień w klasach 1–2",
        body: "W klasach 1–2 dzień w szkole jest krótszy, skupiony na zabawie i relacjach z innymi dziećmi, nie na sprawdzianach i ocenach.",
      },
      {
        n: "7",
        title: "Koniec egzaminu ósmoklasisty",
        body: "Znosimy egzamin ósmoklasisty. O przyjęciu do szkoły średniej decydują oceny i rejonizacja, nie jeden test rankingujący dzieci względem siebie.",
      },
      {
        n: "8",
        title: "Limit czasowy prac domowych w klasach 4–6",
        body: "W klasach 4–6 praca domowa jest limitowana czasowo.",
      },
      {
        n: "9",
        title: "Lekcje od 8:30 w szkołach ponadpodstawowych",
        body: "Lekcje w szkołach ponadpodstawowych (liceum, technikum) nie zaczynają się wcześniej niż o 8:30 — to uwzględnia naturalny rytm snu młodzieży, potwierdzony badaniami.",
      },
      {
        n: "10",
        title: "Ustawowy limit czasu na dokumentację nauczyciela",
        body: "Czas, który nauczyciel poświęca na dokumentację, jest limitowany ustawowo, żeby nie zjadał czasu na uczenie.",
      },
      {
        n: "11",
        group: "Umiejętności, nie tylko teoria",
        title: "Rdzeń życiowy: szkoła uczy, co zrobić, nie tylko jak wygląda urząd",
        body: "Szkoła tłumaczy ustrój samorządu i nie tłumaczy, co zrobić, gdy koleżanka mówi, że nie chce żyć. Wiedza o społeczeństwie zostaje. Nie zastępuje bloku, bez którego świadectwo jest puste.\n\nW ogólnokrajowym rdzeniu 70–80% (punkt 5) jest osobny blok umiejętności życiowych: od klasy 4, jedna godzina tygodniowo, te same scenariusze w każdej szkole. Nie ma sprawdzianu z definicji. Zaliczane jest przeprowadzenie scenariusza.\n\nW bloku, konkretnie:\n\n— kryzys kolegi albo koleżanki: skrypt z punktu 12, ćwiczone co najmniej dwa razy w roku szkolnym;\n— przemoc w domu i w sieci: komu powiedzieć; dorosły nie obiecuje tajemnicy, której nie może dotrzymać;\n— pieniądz i praca: czym różni się umowa o pracę od zlecenia, co jest na pasku, czym jest kaucja i dług — spójnie z rozdziałami 2 i 7, bez materiałów od banków i firm pożyczkowych;\n— zgoda i odmowa: ciało, zdjęcie, alkohol;\n— neuroróżnorodność, niepełnosprawność i choroba przewlekła: że to nie „charakter” i nie powód, żeby iść do sądu (rozdział 11).\n\nBlok prowadzą nauczyciel i psycholog szkolny razem. Godzina nie wypada jako pierwsza, gdy trzeba „dobić” podstawę z innego przedmiotu.",
      },
      {
        n: "12",
        title: "Gdy ktoś z klasy mówi, że chce umrzeć — jeden skrypt, nie ulotka",
        body: "Standardy dla nauczycieli, które ministerstwo rozesłało w grudniu 2024, zostają. Nie wystarczają. Uczeń, który dowiaduje się pierwszy — z rozmowy, z kartki, z wiadomości — nie ma dziś obowiązku szkolnego, który mówiłby mu, co zrobić. Ma się „domyślić”. Tego nie zostawiamy dobrej woli pedagoga.\n\nOd klasy 4 każdy uczeń i każdy pracownik szkoły ma ten sam, krótki skrypt. Jest ćwiczone na lekcji. Nie jest rozdawane w dniu, w którym jest już za późno.\n\n1. Zostajesz. Nie zostawiasz osoby samej, żeby szukać dorosłego w pustej szkole.\n2. Nie obiecujesz tajemnicy. Mówisz wprost: „Nie mogę tego zatrzymać tylko dla siebie. Chcę, żebyś żył” — albo „żyła”.\n3. Mówisz konkretnemu dorosłemu z imienia i nazwiska: wychowawcy, psychologowi albo osobie dyżurnej wypisanej na drzwiach. Jeśli w budynku nie ma żadnego dorosłego z tej listy — dzwonisz pod 112 albo na Telefon Zaufania dla Dzieci i Młodzieży, 116 111.\n4. Nie oceniasz. Nie wypytujesz o szczegóły planu i nie powtarzasz ich klasie. Szczegóły planu nie są wiedzą, którą mają nosić rówieśnicy.\n\nSzkoła, tego samego dnia:\n\n— Dorosły, który dostał sygnał, przejmuje opiekę w ciągu tej samej godziny lekcyjnej. Nie czeka do jutra. Nie czeka na zgodę rodzica, żeby zapewnić bezpieczeństwo. Rodzic jest informowany, nie jest bramką.\n— Uczeń, który zgłosił, nie jest przesłuchiwany jak świadek winy i nie dostaje uwagi za „donoszenie”.\n— Gdy ryzyko jest bezpośrednie, pomoc psychiatryczna startuje tego samego dnia. 72 godziny z rozdziału 5, punkt 10, są sufitem na wizytę planową w kryzysie, nie celem, kiedy ktoś mówi, że chce umrzeć dzisiaj.\n— Po próbie: plan powrotu do szkoły w ciągu 7 dni od wypisu. Klasa dostaje rozmowę bez opisu sposobu. Nikt nie ogłasza „wstydu szkoły”.\n— Dwa razy w roku cała szkoła przerabia scenariusz „kolega napisał, że nie chce żyć”. To element podstawy programowej. Dyrektor, u którego tego nie ma, nie rozlicza się z „programu profilaktycznego” — rozlicza się z braku tego scenariusza.\n\nKartka na drzwiach psychologa: imię dyżurnego, numer 116 111, numer 112. Jedna strona, nie procedura na dwadzieścia.",
      },
    ],
  },
  {
    num: 11,
    slug: "resocjalizacja",
    part: "I",
    title: "Dziecko nie jest sprawą karną",
    kicker: "Twórcza resocjalizacja",
    lead: "Polska od dekad prowadzi dzieci tak, jakby karała małych dorosłych: akta, punkty, kraty, terapia pod przymusem. Około połowy dorosłych po zakładzie karnym wraca do przestępstwa. Dla nieletnich państwo nie publikuje porównywalnej liczby — szacunki z praktyki mówią o siedmiu powrotach na dziesięcioro. Od 1991 roku jest w Polsce inna metoda, sprawdzona najpierw w teatrze poza murami zakładu, potem w licencjonowanej placówce: głęboka relacja i nowa rola wśród ludzi, nie żeton za grzeczność. Ten rozdział robi z niej prawo. Psychologia jest tu mechanizmem przepisu, nie cytatem na okładce.",
    pillars: ["cialo", "bezpieczenstwo"],
    points: [
      {
        n: "1",
        group: "Prawo, które przestaje karać dzieciństwo",
        title: "Ustawa z 2022 roku do wymiany, nie do kosmetyki",
        body: "Ustawę z 9 czerwca 2022 r. o wspieraniu i resocjalizacji nieletnich uchylamy i piszemy od nowa: ustawa o wsparciu dziecka i o odpowiedzialności nieletnich za czyn. Tamta ustawa jest do wymiany, bo w jednym akcie zrobiła dwie rzeczy naraz. Wstawiła próg 10 lat tam, gdzie wcześniej progu nie było — i tym samym dała sądowi dziecko, które nie popełniło czynu. Jednocześnie usankcjonowała podział na „lepszych i gorszych” nieletnich, okręgowe ośrodki o logice zamknięcia i poprawczak, który w skrajnym przypadku sięga 24. roku życia.\n\nWcześniejszy brak progu nie był ochroną. Przed sądem mogło stanąć jeszcze młodsze dziecko. Nie wracamy do tej fikcji. Odwracamy kierunek.\n\nZ ustawy wypada słowo „demoralizacja” jako nazwa postępowania wobec zachowania, które nie jest czynem karalnym. Wagary, bunt, konflikt z nauczycielem, niezdiagnozowana niepełnosprawność — to nie jest paragraf. Z preambuły wypada „chrześcijański system wartości” jako podstawa wychowania państwowego. Państwo wychowuje według prawa i wiedzy, nie według katechizmu. Katecheza zostaje poza szkołą (rozdział 12, punkt 1).\n\nCzyn karalny zostaje. Odpowiedzialność za czyn popełniony po 13., a przed 17. rokiem życia zostaje. Nie obniżamy wieku odpowiedzialności karnej. Podnosimy próg izolacji i likwidujemy sąd nad dzieciństwem, które nikomu nie zrobiło krzywdy czynem.",
      },
      {
        n: "2",
        title: "Izolacja od 15. roku życia i tylko za ciężki czyn",
        body: "Poniżej 15. roku życia nie ma umieszczenia w placówce — ani otwartej, ani zamkniętej. Poniżej 13. roku życia nie ma postępowania sądowego o zachowanie, które nie jest czynem karalnym.\n\nIzolacja (zakład poprawczy albo ośrodek zamknięty) tylko od ukończenia 15 lat, tylko za czyn przeciwko życiu, zdrowiu albo wolności seksualnej, i tylko gdy sąd napisze, dlaczego plan środowiskowy nie wystarcza albo jest niemożliwy. Czas jest oznaczony. Sąd sprawdza wykonanie co 3 miesiące i może je skrócić. Znika możliwość trzymania dziecka w placówce „do pełnoletności” za zachowanie z 10. albo 12. roku życia, często kilkaset kilometrów od domu. Znika przedłużanie środka poprawczego do 24. roku życia za czyn z czasu, gdy człowiek nie był pełnoletni.\n\nIzolacja chroni osobę poszkodowaną. Nie jest zemstą i nie jest programem wychowawczym. Program zaczyna się w środku izolacji tego samego dnia: relacja, nauka, plan wyjścia. Bez planu wyjścia izolacja produkuje recydywę, tylko drożej.\n\nDziecko w wieku 10–14 lat, które popełniło czyn, dostaje plan środowiskowy i — gdy trzeba — rodzinę zastępczą zawodową albo mały dom w tej samej gminie albo powiecie. Nie dostaje krat.",
      },
      {
        n: "3",
        title:
          "Koniec z pojęciem demoralizacji wobec dzieci do 12. roku życia. Wagary nie są ścieżką do placówki",
        body: "Z ustawy znika domniemanie, że dziecko w wieku 10–12 lat jest zdemoralizowane. Ustawodawca nie może już zakładać demoralizacji w tym wieku — bo opuściło lekcje, pyskowało albo nie mieści się w regulaminie. W tym wieku osobowość i system wartości nie są domknięte. Stempel „zdemoralizowany” jest zakazany jako podstawa postępowania. Przed 13. rokiem życia nie ma sprawy sądowej o zachowanie, które nie jest czynem. Czyn karalny od 13. roku życia zostaje. Zostaje czyn, nie „charakter”.\n\nPolska należy do wąskiego grona państw europejskich — około trzech — które za absencję szkolną prowadzą ścieżkę o charakterze penalnym. Wychodzimy z tej grupy.\n\nSzacunek z praktyki, nie z rocznika GUS: około 30–40% nieletnich w placówkach trafiło tam od wagarów, bez rzetelnego zbadania przyczyny. GUS od drugiego roku ustawy publikuje tę liczbę co roku. Dopóki jej nie ma, nikt w rządzie nie mówi, że „system działa”.\n\nNowa reguła. Nieobecność nieusprawiedliwiona trwająca albo powtarzająca się uruchamia w ciągu 14 dni asystenta rodziny, nie policjanta i nie wniosek do sądu. Asystent sprawdza, w tej kolejności: czy w domu starcza na dojazd i buty, czy jest przemoc, czy jest lęk albo bullying, czy jest niezdiagnozowana niepełnosprawność, neuroróżnorodność albo choroba przewlekła, czy chory jest rodzic, czy szkoła sama nie wypchnęła dziecka regulaminem. Dopiero opis tych przyczyn, a nie sama liczba godzin nieobecności, może iść dalej. Do sądu — nigdy jako pierwszy krok i nigdy jako jedyny dokument.",
      },
      {
        n: "4",
        title: "Zakaz pozbywania się trudnego ucznia przez sąd",
        body: "Szkoła nie może pozbyć się ucznia trudnego, neuroróżnorodnego albo z niepełnosprawnością, której nie widać, kierując sprawę do sądu rodzinnego pod pretekstem demoralizacji. To jest zakaz, nie wytyczna. Wniosek szkoły o wszczęcie sprawy albo o umieszczenie własnego ucznia jest niedopuszczalny, dopóki nie wyczerpie wszystkich dostępnych możliwości wsparcia w środowisku lokalnym i nie pokaże tego w aktach.\n\n„Wyczerpanie” znaczy co najmniej 90 dni udokumentowanej pomocy: psycholog, pedagog specjalny, dostosowanie wymagań, obiad, dojazd, rozmowa z rodzicem, plan frekwencji. Sąd odrzuca wniosek bez tego załącznika, bez wzywania dziecka na salę. Jeśli w gminie brakuje psychologa albo asystenta, brak ten obciąża organ, nie ucznia. Nie wolno napisać „wyczerpano środki”, gdy środków w ogóle nie było.\n\nNeuroróżnorodność, ADHD, spektrum autyzmu, niepełnosprawność — także taka, której nie widać na korytarzu — oraz choroba przewlekła nie są demoralizacją i nie mogą paść w uzasadnieniu wniosku. Szkoła, która mimo zakazu taki wniosek wyśle, łamie ustawę. Organ prowadzący cofa jej część subwencji oświatowej za tego ucznia do czasu planu naprawczego. Nie nagradzamy eksportu problemu.\n\nRzecznik Praw Dziecka ma legitymację do zaskarżenia takiego wniosku i do wejścia w sprawę z urzędu. To nie jest urząd od przemówień. To jest urząd, który zatrzymuje pismo.\n\nZakaz nie dotyczy czynu przeciwko życiu, zdrowiu albo wolności seksualnej. Tam szkoła zawiadamia od razu. Wsparcie środowiskowe i ochrona osoby poszkodowanej idą równolegle, nie zamiast zawiadomienia.",
      },
      {
        n: "5",
        title: "W jednej grupie maksymalnie trzy lata różnicy",
        body: "W jednej grupie mieszkalnej różnica wieku nie jest większa niż 3 lata. Dziecko nie śpi, nie je i nie chodzi do szkoły wewnętrznej w grupie z kimś starszym o osiem lat. Państwo, które zamyka 10-latka z 18-latkiem, samo urządza demoralizację, a potem dziwi się wynikowi.\n\nGrupy są małe: do 8 wychowanków na stałego wychowawcę. Przepisy BHP placówki liczą etaty od tej normy, nie od „stanu średniego w województwie”.",
      },
      {
        n: "6",
        group: "Metoda, nie regulamin",
        title: "Zamiast rygoru i żetonu: rola społeczna i stymulacja poznawcza",
        body: "Rygor, regulamin, który ocenia osobowość, i ekonomia żetonowa — punkty, poziomy, „przywilej kina za zachowanie” — przestają być metodą resocjalizacji. W ustawie w ich miejsce wchodzą dwa narzędzia i tylko te dwa liczą się przy odnowieniu licencji: kreowanie konstruktywnych ról społecznych oraz stymulacja poznawcza.\n\nRola społeczna znaczy konkretnie: dziecko robi coś, co jest komuś potrzebne poza placówką. Uczy młodszych, gra, naprawia, gotuje dla ludzi z miasta, prowadzi trening. Nie zbiera punktów za ciszę na apelu.\n\nStymulacja poznawcza znaczy konkretnie: placówka dokłada informacji „umiem” i „jestem komuś potrzebny”. Nie dokłada informacji „jestem sprawą z akt”. To, co człowiek o sobie wie, w dużej części pochodzi z relacji, nie z pogadanki. Dlatego każda licencjonowana placówka ma plan zajęć, które budują kompetencję — nauka, warsztat, teatr, muzyka, sport — a nie tabelę kar.\n\nPod spodem zostają dwa obowiązki, bez których rola jest dekoracją. Pierwszy, relacyjny: zmiana idzie przez jakość więzi. Jeden stały wychowawca, maksimum 8 podopiecznych, ciągłość co najmniej 2 lata, chyba że dziecko samo prosi o zmianę albo wychowawca łamie prawo. Wychowawca, który odchodzi, przekazuje relację osobiście — nie „teczką”. Drugi: praca od zasobów i talentów, nie od listy deficytów. Cel to nowy sposób myślenia o sobie, nie wymuszona grzeczność.\n\nRegulamin bezpieczeństwa zostaje. Regulamin, który udaje osobowość, odpada. Terapia jest proponowana, nie wymierzana. Odmowa terapii nie przedłuża pobytu i nie obniża żadnych punktów, bo punktów nie ma. Terapia pod przymusem nie działa. Wyjątek nie jest resocjalizacją: bezpośrednie zagrożenie życia albo zdrowia, na zasadach ustawy o ochronie zdrowia psychicznego. To leczenie. Nie żeton i nie kara za „brak współpracy”.",
      },
      {
        n: "7",
        title: "Zakaz krat i zaspawanych okien. Placówka ma się otwierać, nie zamykać",
        body: "Przed zmianą rządu w 2023 roku w placówkach resocjalizacyjnych nakazywano zaspawanie instalacji i montowanie krat, żeby dziecko w wieku 12–13 lat nie uciekło. To stało w sprzeczności z wcześniejszym trendem otwierania tych instytucji. Tego nakazu nie wolno powtórzyć. Zakaz jest ustawowy, nie okólnikiem, który następny minister wycofa.\n\nZakazane są kraty, zaspawane okna i każda instalacja, której jedynym celem jest uniemożliwienie ucieczki dziecku. Zakazana jest izolatka. Pokój wyciszenia tylko z obecnym dorosłym, nie dłużej niż 30 minut, każdy raz w rejestrze, który co miesiąc czyta sędzia rodzinny.\n\nPlacówka, z której się ucieka, jest źle prowadzona — nie za słabo zakratowana. Ucieczki publikujemy. Nie są kryterium sukcesu dyrektora i nie są powodem, żeby dozbroić budynek. Kryterium jest w punkcie 12.\n\nNormą lokalową jest mały dom, nie kampus za ogrodzeniem. Jak ten dom ma działać — mieszkanie w mieście, rola wśród ludzi, prawdziwa praca — mówi punkt 8. To nie jest dodatek do krat. To jest zamiast krat.",
      },
      {
        n: "8",
        title: "Licencja przepisuje Goniądz: dom w mieście, rola, prawdziwa praca",
        body: "Pierwsza placówka w Polsce z licencją twórczej resocjalizacji — ośrodek w Goniądzu, prowadzony przez Sławomira Moczydłowskiego — przestaje być wyjątkiem jednego dyrektora. Jej sposób działania staje się minimum licencji. Kto tego minimum nie spełnia, licencji nie dostaje i jej nie odnawia.\n\nMieszkanie. Wychowanek mieszka w domu na terenie miasta, nie tylko w budynku ośrodka. Adres „wyłącznie za bramą” jest wyjątkiem: sąd pisze, dlaczego inaczej się nie da, i wraca do sprawy najpóźniej za 6 miesięcy.\n\nRola wśród ludzi. Wychowankowie organizują imprezy i zajęcia dla dzieci z okolicznych szkół — warsztat, trening, przedstawienie. To jest element programu, nie dzień otwarty raz w roku. Wyjazd sportowy, w tym obóz narciarski, jest finansowany jak wycieczka szkoły publicznej. Nie jest nagrodą z tabeli punktów, bo tabeli nie ma.\n\nPraca. Dyrektor razem z wychowankami prowadzi w mieście zwykły lokal, w którym produkują i sprzedają jedzenie mieszkańcom — albo inną usługę, którą da się zrobić w tej miejscowości. Praca jest umową, z pensją i składką, spójnie z rozdziałem 2. Zakaz darmowej „terapii zajęciowej” i zakaz bezpłatnego stażu. Zysk idzie na zajęcia i stypendia wyjściowe, według jawnego regulaminu. Nie do prywatnej kieszeni dyrektora.\n\nPartnerstwo. Relacja kadry z podopiecznym jest partnerska w tym, co nie dotyczy bezpieczeństwa: rada wychowanków współdecyduje o codzienności domu. Nie współdecyduje o tym, kto może wyjść, jeśli sąd zakazał. Student na praktykach ma zobaczyć koleżankę albo kolegę, z którymi da się pracować — nie eksponat na zajęcia z patologii. Jeśli dokumentacja placówki mówi o ludziach wyłącznie jak o problemie do ułożenia, rada licencyjna traktuje to jako niespełnienie tego punktu.\n\nUcieczki w takim ośrodku są rzadkie bez krat. To jest skutek, nie cel. Cel jest w punktach 6 i 12.",
      },
      {
        n: "9",
        title: "Blisko domu. Rodzeństwa się nie rozdziela",
        body: "Placówka jest w tym samym województwie i nie dalej niż 80 km od miejsca zamieszkania. Dalej — tylko gdy sąd napisze, dlaczego bliżej się nie da, i wyznaczy datę ponownego rozpoznania, nie później niż za 6 miesięcy.\n\nPaństwo płaci dwa zjazdy rodziny w miesiącu albo jeden zjazd i połączenie wideo co tydzień. Dojazd nie zależy od portfela matki.\n\nRodzeństwa nie rozdziela się „dla porządku w aktach” i nie wywozi się siostry dwieście kilometrów dalej, bo tak wypadło z wolnego miejsca. Rozdzielenie tylko osobną decyzją sądu, gdy jedno dziecko zagraża drugiemu, z datą powrotu do sprawy. Ta sama zasada obowiązuje w pieczy zastępczej, nie tylko w resocjalizacji.",
      },
      {
        n: "10",
        title: "Pierwsze pytanie brzmi: co lubisz robić",
        body: "Przez pierwszych 30 dni diagnoza jest diagnozą zasobów: co dziecko umie, czym się zajmuje, gdy nikt nie każe, jaką rolę już pełni — opieka nad rodzeństwem, sport, muzyka, rysunek, naprawianie, gotowanie, zwierzęta. Akta czyta się w tym czasie także, ale nie zamiast tego pytania. Wychowawca, który zaczyna od teczki i kończy na teczce, nie realizuje licencji.\n\nPaństwo finansuje rozwój tej umiejętności z budżetu placówki: lekcje, instrument, warsztat, klub, materiał. Nie ze zbiórki w internecie i nie „jak szkoła znajdzie sponsora”.\n\nPlacówka nie ma prawa zakończyć edukacji zdaniem „nie nadaje się, niech idzie na najkrótszy kurs”. Ścieżkę — liceum, szkoła artystyczna, technikum, nauka zawodu — ustala się według tego, co dziecko jest w stanie udźwignąć, nie według wygody etatu. Sprzeciw placówki albo szkoły wobec ścieżki, którą wskazuje diagnoza zasobów, rozstrzyga sąd rodzinny po opinii Rzecznika Praw Dziecka. Kurs zawodowy może być dobrym wyborem. Nie może być karą za to, że ktoś ma talent, którego akta nie przewidziały.",
      },
      {
        n: "11",
        title: "Wyjście jest zaprojektowane w dniu wejścia",
        body: "W dniu przyjęcia powstaje plan na 24 miesiące po opuszczeniu: szkoła albo praca, dach nad głową, jedna osoba, która zostaje. Mentor po wyjściu nie jest kuratorem od kontroli zakazów. Jest od roli, którą człowiek ma utrzymać na wolności: praca, zespół, nauka, lokalna odpowiedzialność. Spotkanie co tydzień przez pierwsze 3 miesiące, potem co dwa tygodnie, do końca 24. miesiąca. Mentor jest płatny ze środka, o którym mówi punkt 15. Nie jest wolontariuszem „jak się znajdzie”.\n\nMieszkanie: pierwszeństwo w lokalu komunalnym albo treningowym z rozdziału 7, jeśli po wyjściu nie ma dokąd wrócić. „Najpierw mieszkanie” obowiązuje tu tak samo jak przy bezdomności dorosłych.\n\nŚrodki wychowawcze nie trafiają do Krajowego Rejestru Karnego. Zaświadczenie o niekaralności, o które pyta pracodawca, ich nie pokazuje. Akta sprawy o czyn przed 17. rokiem życia są niedostępne dla pracodawcy. Szkoła, która przyjmuje ucznia, dostaje informację o wsparciu, którego potrzebuje — nie dossier do odstraszania rady pedagogicznej. Pytanie rekrutacyjne o nieletność jest zakazane.\n\nWyjątek, którego nie chowamy: skazanie na zasadach kodeksu karnego, gdy sąd zastosował odpowiedzialność jak wobec dorosłego, zostaje w rejestrze na zwykłych zasadach. Nie ukrywamy ciężkiego wyroku. Ukrywamy pieczęć „byłeś w ośrodku”.\n\nTatuaż zrobiony w izolacji prymitywnym sprzętem zostawia bliznę i zamyka pracę. Państwo nie zmusza do usunięcia. Finansuje usunięcie albo pokrycie, gdy człowiek sam o to prosi, bo blizna zamyka mu zatrudnienie. Przeszłości się nie pieczętuje drugim piętnem. Uczy się ją nieść tak, żeby dało się z nią żyć wśród ludzi — i dostać umowę.",
      },
      {
        n: "12",
        group: "Kto odpowiada i ile to kosztuje",
        title: "Licencja dyrektora. Trzy liczby, nie liczba krat",
        body: "Placówki wychodzą spod logiki więziennej. Nadzór pedagogiczny prowadzi Krajowa Rada Twórczej Resocjalizacji przy ministrze edukacji. Nie przy więziennictwie. Sąd decyduje o wolności. Rada decyduje, kto w ogóle ma prawo prowadzić dom.\n\nDyrektor dostaje licencję na 4 lata. Odnowienie zależy od trzech liczb, publikowanych co roku dla każdej placówki:\n\n— ile wychowanków skończyło szkołę, którą zaczęli;\n— ilu rok po wyjściu uczy się albo pracuje legalnie;\n— ilu w ciągu 2 lat i ilu w ciągu 5 lat wróciło do czynu karalnego.\n\nLicencja spada, gdy trzecia liczba jest strukturalnie zła przy podobnej grupie czynów, a pierwsze dwie stoją. Nie spada za ucieczkę, której nie powstrzymała krata. Kadra bez szkolenia w tej metodzie nie prowadzi grupy. Szkolenie jest państwowe, płatne w czasie pracy, nie „kursem weekendowym na własny koszt”.\n\nUczelnie kształcące pedagogów, psychologów i pracowników socjalnych mają ten standard w obowiązkowym programie, nie jako fakultet dla chętnych. Praktyka odbywa się w placówce licencjonowanej. Praktyka w miejscu bez licencji nie zalicza roku.",
      },
      {
        n: "13",
        title: "Surowość kary nie jest polityką bezpieczeństwa",
        body: "Od około stu lat badania nie pokazują związku między surowością groźby a spadkiem liczby czynów. Związek, który widać, dotyczy skuteczności wykrywania. Nie zaostrzamy prawa nieletnich, żeby „dać sygnał społeczeństwu”. Dziecko albo nastolatek, który popełnia ciężki czyn, zwykle nie kalkuluje widełek kodeksu. Sygnał, którego nie słyszy sprawca, a słyszy tylko publiczność, nie jest polityką bezpieczeństwa. Jest teatrem.\n\nResocjalizacja po ciężkim czynie jest możliwa i jest obowiązkiem państwa, nie łaską i nie „drugą szansą z telewizji”. Izolacja zostaje tam, gdzie trzeba chronić innych — krótka, sprawdzana, bez przedłużania dla przykładu. Dorośli po zakładzie karnym to inne zagadnienie: około 50% recydywy i osobna polityka karna, której ten rozdział nie udaje. Tu mówimy o człowieku, który w chwili czynu nie miał domkniętej osobowości. Państwo, które w tym momencie dopisuje mu tożsamość osadzonego, wykonuje pracę za przestępczość, którą potem samo statystycznie odkrywa.",
      },
      {
        n: "14",
        title: "Rocznik, którego dziś nie ma",
        body: "Dziś recydywa dorosłych po zakładzie karnym to około 50%. Dla nieletnich nie ma porównywalnej, urzędowej liczby. Szacunki z praktyki — około 70% powrotów po placówce — traktujemy jako alarm, nie jako dogmat. Albo je potwierdzimy, albo obalimy. Nie będziemy ich cytować w nieskończoność zamiast pomiaru.\n\nOd drugiego roku obowiązywania ustawy GUS razem z radą z punktu 12 publikuje co roku:\n\n— ile dzieci jest w placówkach (dziś rząd wielkości około 7 tysięcy) i ile w izolacji;\n— ile spraw zaczęło się od wagarów;\n— ile dzieci poniżej 15. roku życia jest poza własnym domem z powodu tej ustawy;\n— powrót do czynu karalnego po 2 i po 5 latach, z rozbiciem na czyn, od którego się zaczęło;\n— ukończenie szkoły i pracę albo naukę rok po wyjściu.\n\nBez tej tabeli minister nie składa sprawozdania sejmowi. Sprawozdanie „o działaniach” bez tych pięciu liczb jest nieważne.",
      },
      {
        n: "15",
        title: "Koszt: drogie jest zamknięcie, nie asystent",
        body: "Nie obiecujemy, że dobra placówka jest tania. Stały wychowawca przy ośmiu dzieciach kosztuje. Oszczędność jest gdzie indziej: dziecko, które dziś jedzie do ośrodka za wagary, zostaje w gminie z asystentem rodziny i psychologiem.\n\nZamknięta placówka resortu sprawiedliwości kosztuje około 36 tysięcy złotych miesięcznie na osobę (2025, dane ministerstwa za placówki, w których wykonywana jest izolacja). To nie jest argument, żeby izolacji w ogóle nie prowadzić, gdy chroni się czyjeś życie. To jest argument, żeby nie płacić tej stawki za absencję szkolną.\n\nNowa linia wydatku: szkolenie i licencje kadry, mentor przez 24 miesiące po wyjściu, zjazdy rodziny, rozwój umiejętności z punktu 10, asysta w gminie. Rząd wielkości — kilkaset milionów złotych rocznie. W aneksie kosztów mieści się w podanym rozrzucie. Nie jest nową dziurą obok 4-dniowego tygodnia.\n\nNie finansujemy tego kosztem psychiatrii. Psychiatria z rozdziału 5, punkt 10, i akcyza, która już na nią idzie, są warunkiem tego rozdziału, nie jego konkurencją. Dziecko w kryzysie samobójczym nie jest „przypadkiem resocjalizacji”. Jest pacjentem. Rozdział 10, punkt 12, i ten rozdział mają się nie mylić.",
      },
    ],
  },
  {
    num: 12,
    slug: "wolnosc",
    part: "I",
    title: "Wolność, równość, solidarność",
    kicker: "Prawa",
    lead: "Wolność nie jest przywilejem dla najsilniejszych. Polska ma być bezpieczna dla kobiet, dla par — niezależnie od tego, kogo kochają — i dla każdego, kto chce po prostu żyć własnym życiem bez pytania o zgodę sąsiada czy księdza.",
    pillars: ["cialo"],
    points: [
      {
        n: "1",
        title: "Wygaszenie Funduszu Kościelnego, religia poza szkołą publiczną",
        body: "Fundusz Kościelny, z którego państwo płaci składki emerytalne za duchownych, znika w ciągu 3 lat: pierwszy rok — pełne składki jak dziś, drugi rok — połowa, trzeci rok — zero. Religia wychodzi ze szkół publicznych całkowicie — katecheza może się odbywać w salkach parafialnych, w pełni swobodnie, ale poza systemem edukacji finansowanym z podatków. Wypowiadamy albo renegocjujemy Konkordat w części dotyczącej religii w szkołach i finansowania Kościoła.",
      },
      {
        n: "2",
        title: "Kapelani finansowani przez Kościół, nie z budżetu państwa",
        body: "Kapelani wojskowi, szpitalni i więzienni nie są już finansowani z budżetu państwa — ich wynagrodzenia pokrywa Kościół. Osoba potrzebująca posługi duchowej w szpitalu, wojsku czy więzieniu wciąż ją dostanie na żądanie — zmienia się tylko to, kto płaci.",
      },
      {
        n: "3",
        title: "Małżeństwa i adopcja niezależnie od płci partnerów",
        body: "Prawo do zawarcia małżeństwa i do wspólnej adopcji dziecka przysługuje niezależnie od płci partnerów. Związki partnerskie zostają jako dodatkowa opcja dla tych, którzy woleliby tę formę, nie jako jedyna alternatywa dla par jednopłciowych.",
      },
      {
        n: "4",
        title: "Bezpłatna tranzycja, dostęp od 18./16. roku życia",
        body: "Osoby transpłciowe mają dostęp do bezpłatnej ścieżki tranzycji. Tranzycja medyczna jest dostępna od 18. roku życia; prawne uzgodnienie płci metrykalnej — od 16 lat, za zgodą opiekuna prawnego.",
      },
      {
        n: "5",
        title: "Zakaz terapii konwersyjnych, przestępstwa motywowane nienawiścią",
        body: "Zakazujemy tak zwanych „terapii konwersyjnych”, mających „leczyć” orientację seksualną czy tożsamość płciową. Orientacja seksualna i tożsamość płciowa stają się przesłanką ochrony przed przestępstwami motywowanymi nienawiścią. Mowa nienawiści jest ścigana — ale krytyka religii, władzy czy idei nie jest mową nienawiści i zostaje w pełni chroniona jako wolność wypowiedzi. Uchylamy art. 196 Kodeksu karnego (obraza uczuć religijnych).",
      },
      {
        n: "6",
        title: "Alkohol i konopie — odsyłacz do rozdziału 5, punkt 14",
        body: "Politykę wobec substancji psychoaktywnych — alkoholu i konopi — opisujemy szczegółowo w rozdziale 5, punkt 14.",
      },
      {
        n: "7",
        title: "Dobrostan zwierząt: zakaz ferm futrzarskich, klatek, cyrków",
        body: "Wprowadzamy przepisy o dobrostanie zwierząt: zakaz niehumanitarnych metod chowu i uboju, zakaz ferm futrzarskich, zakaz chowu klatkowego i zakaz wykorzystywania zwierząt w cyrkach. Powołujemy Rzecznika Praw Zwierząt. Kończymy ze współfinansowaniem polowań z budżetu publicznego.",
      },
      {
        n: "8",
        title: "Prawo do własnych danych i wizerunku, jawne algorytmy",
        body: "Każdy ma prawo decydować o wykorzystaniu swoich danych i wizerunku. Algorytmy używane przez instytucje państwowe muszą być jawne i wyjaśnialne.",
      },
      {
        n: "9",
        title: "Karanie kupowania usług seksualnych, nie ich świadczenia",
        body: "W polityce wobec pracy seksualnej karzemy nabywanie usług seksualnych, nie ich świadczenie. Osoby świadczące takie usługi są w pełni zdekryminalizowane i dostają finansowane wsparcie (mieszkaniowe, psychologiczne, zawodowe), jeśli chcą z tego odejść.",
      },
      {
        n: "10",
        title: "Koniec z pozwami SLAPP; uchylenie art. 212, 216 i 135 § 2 k.k.",
        body: "Kończymy z pozwami SLAPP — strategicznymi procesami, którymi rządzący, samorząd, polityk albo korporacja uciszają krytykę. Uchylamy zniesławienie i znieważenie jako przestępstwa (art. 212 i 216 k.k.) oraz znieważenie Prezydenta RP (art. 135 § 2 k.k.). Ochrona przed najpoważniejszą mową nienawiści zostaje — sankcja karna tylko tam, gdzie chodzi o groźbę, nawoływanie do przemocy albo ścigane już dziś przestępstwa z nienawiści. W sprawach cywilnych o ochronę dóbr osobistych sąd na wstępie umarza pozew wniesiony w celu zastraszenia albo zduszenia debaty; koszty i zryczałtowane odszkodowanie za sam proces ponosi powód. Jednostki samorządu terytorialnego i Skarb Państwa tracą legitymację do takich pozwów — koniec z praktyką, którą widzieliśmy przy obsługiwanych przez Ordo Iuris pozwach przeciwko twórcom „Atlasu Nienawiści”. Krytyka władzy, firmy czy Kościoła nie wymaga konsultacji z prawnikiem.",
      },
    ],
  },
  {
    num: 13,
    slug: "przyroda",
    part: "I",
    title: "Przyroda",
    kicker: "Środowisko",
    lead: "Lasy, rzeki i czyste powietrze to nasze wspólne dziedzictwo, nie zasób do wyciśnięcia dla zysku garstki — a rachunek za jego rabunek płacimy wszyscy, smogiem, suszą i wyginiętymi lasami.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Nowe i powiększone parki narodowe",
        body: "Tworzymy nowe parki narodowe i powiększamy istniejące, ze wzmocnioną ochroną gatunków zagrożonych wyginięciem.",
      },
      {
        n: "2",
        title: "Lasy Państwowe nigdy nie są prywatyzowane",
        body: "Lasy Państwowe nigdy nie są prywatyzowane. Priorytetem staje się ochrona starodrzewu, nie rabunkowa wycinka dla zysku.",
      },
      {
        n: "3",
        title: "Wody Polskie skupione na ochronie ekosystemów rzek",
        body: "Wody Polskie skupiają się na ochronie rzek i jezior jako ekosystemów, nie na inwestycjach żeglugowych, które niszczą naturalne korytarze ekologiczne.",
      },
      {
        n: "4",
        title: "Publiczny program docieplania budynków",
        body: "Finansujemy publicznie program docieplania budynków.",
      },
      {
        n: "5",
        title: "Zakaz zabudowy na terenach zalewowych, inwestycje w retencję",
        body: "Zakazujemy nowej zabudowy na terenach zalewowych. Inwestujemy w retencję wody i przeciwdziałanie suszy, z uwzględnieniem doświadczeń katastrofy ekologicznej na Odrze.",
      },
      {
        n: "6",
        title: "Ochrona Bałtyku, odbudowa populacji ryb",
        body: "Chronimy najcenniejsze obszary Bałtyku i inwestujemy w odbudowę populacji ryb, dziś przetrzebionych przez przełowienie.",
      },
      {
        n: "7",
        title: "Kontrakty skupu, cła wyrównawcze — odrzucenie umowy z Mercosur",
        body: "Małe i średnie gospodarstwa (do 50 hektarów) dostają długoterminowe, 36-miesięczne kontrakty skupu z gwarantowaną ceną minimalną, żeby nie były zdane na łaskę pojedynczego sezonu. Wsparcie finansowe na technologie ograniczające emisje metanu z hodowli jest dostępne bez przymusu redukowania stad. Odrzucamy umowę UE–Mercosur. Nie podpisujemy jej i nie ratyfikujemy. Porozumienie otwiera unijny i polski rynek na tańszy import rolny z krajów o niższych standardach pracy, środowiska i dobrostanu zwierząt — i stawia polskich rolników w konkurencji, której nie da się wygrać uczciwie. Na poziomie UE żądamy cła wyrównawczego na import rolny z krajów niespełniających norm unijnych oraz klauzul lustrzanych w każdej umowie handlowej — to zasada ogólna. Mercosur pod tę zasadę nie przechodzi, dlatego odpada w całości, nie „po poprawkach”.",
      },
      {
        n: "8",
        title: "Zeroemisyjne autobusy od 2035, elektryczna kolej regionalna",
        body: "Autobusy miejskie są zeroemisyjne od 2035 roku. Kolej regionalna przechodzi na trakcję elektryczną.",
      },
      {
        n: "9",
        title: "Koniec przywilejów łowieckich: wstęp na teren i broń na zasadach ogólnych",
        body: "Kończymy ze specjalnym statusem łowiectwa. Polowanie nie daje osobnego porządku prawnego. Znosimy prawo myśliwego do wstępu na teren prywatny bez zgody właściciela oraz automatyczne, „specjalne” prawo wstępu na grunty Skarbu Państwa i Lasy Państwowe poza zasadami, które obowiązują każdego innego obywatela. Właściciel ziemi nie jest gościem na własnym polu. Pozwolenie na broń palną — w tym na broń określaną dziś jako myśliwską, gwintowaną i gładkolufową — wydaje się na tych samych zasadach co każdemu innemu obywatelowi. Znosimy odrębną, ułatwioną ścieżkę z ustawy o broni i amunicji: osobny tryb dla członków koła łowieckiego, przywilej zakupu takiej broni i prawo do elaboracji (samodzielnego napełniania) amunicji wynikające z samego statusu myśliwego. Kto chce posiadać broń, spełnia ogólne przesłanki — nie korporacyjny skrót.",
      },
    ],
  },
  {
    num: 14,
    slug: "europa",
    part: "I",
    title: "Silna Polska w Europie",
    kicker: "Unia i sojusze",
    lead: "Jesteśmy piątym krajem Unii i zachowujemy się jak piąty kraj Unii — współtworzymy jej decyzje, zamiast tylko na nie reagować.",
    pillars: ["bezpieczenstwo"],
    points: [
      {
        n: "1",
        title: "Europejskie zdolności obronne, NATO jako fundament",
        body: "Stawiamy na rozwój europejskich zdolności obronnych i bliższą współpracę wojskową z Niemcami i Francją — zmniejszając zależność od jednego zagranicznego partnera. NATO zostaje fundamentem bezpieczeństwa Polski.",
      },
      {
        n: "2",
        title: "Wsparcie dla Ukrainy, jej ścieżka do NATO",
        body: "Kontynuujemy wsparcie dla Ukrainy — wojskowe i gospodarcze, jako inwestycję w nasze własne bezpieczeństwo, nie tylko gest solidarności. Popieramy ścieżkę Ukrainy do NATO już teraz, bez warunku, że musi najpierw zakończyć się wojna.",
      },
      {
        n: "3",
        title: "Migracja, azyl i granica — odsyłacz do rozdziału 3",
        body: "Zasady migracji, azylu i ochrony granicy opisujemy w rozdziale 3.",
      },
      {
        n: "4",
        title:
          "Zakaz szerzenia imperializmu rosyjskiego i amerykańskiego — analogia do art. 13 Konstytucji",
        body: "Konstytucja w art. 13 zakazuje partii i organizacji odwołujących się do totalitarnych metod i praktyk nazizmu, faszyzmu i komunizmu. Pod wpływem wydarzeń na świecie analogicznie rozszerzamy ten zakaz na współczesną ideologię imperializmu rosyjskiego i amerykańskiego — na program stref wpływów, prawa silniejszego i wojny jako narzędzia polityki mocarstwowej. Zakaz obejmuje partie, organizacje, ich finansowanie i publiczną propagandę takich idei. Nie obejmuje rzetelnej krytyki rządów, sojuszy, historii ani debaty o polityce zagranicznej. Polska nie jest terenem rekrutacji do cudzej imperii — ani wschodniej, ani zachodniej.",
      },
    ],
  },
  {
    num: 15,
    slug: "obrona",
    part: "I",
    title: "Odporne społeczeństwo",
    kicker: "Obrona",
    lead: "Bezpieczeństwo Twojej rodziny nie jest polem do oszczędności — ale i nie polem do podbijania liczby dla samej liczby. Chcemy realnej zdolności obronnej, nie tylko wysokiego procentu na papierze.",
    pillars: ["bezpieczenstwo"],
    points: [
      {
        n: "1",
        title: "Wydatki obronne ~4,8–5,2% PKB, 6% jako cel poza kadencją",
        body: "Wydatki obronne zostają na dzisiejszym, już bardzo wysokim poziomie — około 4,8–5,2% PKB, licząc budżet MON razem z Funduszem Wsparcia Sił Zbrojnych. Podniesienie do 6% PKB to cel wykraczający poza tę kadencję, nie obietnica na już.",
      },
      {
        n: "2",
        title: "Płatna, dobrowolna rezerwa, WOT jako główny kanał",
        body: "Stawiamy na dobrze wynagradzaną, dobrowolną rezerwę: dodatek za samą gotowość w wysokości 500–800 złotych miesięcznie, 300–400 złotych za dzień szkolenia, ulga podatkowa i priorytet w rekrutacji do administracji publicznej dla osób po służbie. Głównym kanałem dla ochotników są Wojska Obrony Terytorialnej.",
      },
      {
        n: "3",
        title: "Ustawa o Polskiej Doktrynie Obronnej w 12 miesięcy",
        body: "W ciągu 12 miesięcy uchwalamy ustawę o Polskiej Doktrynie Obronnej, definiującą długofalowo odpowiedź na zagrożenia konwencjonalne, hybrydowe, cyfrowe i dezinformacyjne.",
      },
      {
        n: "4",
        title: "Obowiązkowe schrony w nowych budynkach i osiedlach",
        body: "Schrony i infrastruktura ochrony ludności są obowiązkowe w nowych budynkach publicznych i na osiedlach mieszkaniowych liczących więcej niż 50 lokali.",
      },
      {
        n: "5",
        title: "Zakupy sprzętu z polskiego i europejskiego przemysłu",
        body: "Zakupy sprzętu wojskowego oparte są przede wszystkim na polskim i europejskim przemyśle zbrojeniowym, ze standaryzacją przez wspólne, europejskie zamówienia.",
      },
      {
        n: "6",
        title: "Łączność kryzysowa niezależna od sieci komercyjnych",
        body: "Budujemy system łączności kryzysowej, który działa niezależnie od komercyjnych sieci komórkowych — żeby komunikacja nie padła razem z pierwszym atakiem na infrastrukturę cywilną.",
      },
      {
        n: "7",
        title: "Rezerwa leków krytycznych, państwowa wytwórnia leków generycznych",
        body: "Budujemy rezerwę leków krytycznych na 6 miesięcy. Budujemy państwową wytwórnię kluczowych leków generycznych i antybiotyków.",
      },
      {
        n: "8",
        title: "Struktury komunikacji strategicznej przeciw dezinformacji",
        body: "Powstają profesjonalne struktury komunikacji strategicznej, zwalczające dezinformację i budujące zaufanie społeczne w sytuacjach kryzysowych.",
      },
      {
        n: "9",
        title: "Sądowa kontrola nad policją i służbami specjalnymi",
        body: "Wzmacniamy sądową kontrolę nad działaniami policji i służb specjalnych, żeby ograniczyć ryzyko nadużyć władzy.",
      },
      {
        n: "10",
        title: "Udział w programie broni jądrowej NATO, certyfikacja F-35",
        body: "Dążymy do pełnego udziału Polski w natowskim programie współdzielenia broni jądrowej (nuclear sharing), z rozmieszczeniem broni jądrowej Sojuszu na terytorium Polski. Certyfikujemy zamówione samoloty F-35 do jej przenoszenia — bez tego udział w programie byłby tylko deklaracją.",
      },
    ],
  },
  {
    num: 16,
    slug: "ustroj",
    part: "II",
    title: "Ustrój państwa",
    kicker: "Konstytucja",
    lead: "Nic z tego programu się nie wykona, jeśli jeden człowiek na Zamku może zawetować ustawę, na którą zagłosowały miliony. Odbieramy prezydentowi prawo weta i prawo łaski, dajemy obywatelom narzędzia działające między wyborami i zmieniamy ordynację do Sejmu tak, żeby każdy głos ważył tyle samo.",
    pillars: [],
    points: [
      {
        n: "15.1",
        title: "Prezydent — utrata prawa weta i prawa łaski",
        body: "Prezydent traci prawo weta wobec ustaw uchwalonych przez Sejm oraz prawo łaski.",
      },
      {
        n: "15.2",
        title: "Głos między wyborami",
        body: "Między wyborami nie jesteś zakładnikiem Sejmu. Chcesz zmienić konstytucję — zbierasz 410 tysięcy podpisów w ciągu 18 miesięcy, i sprawa idzie pod głos, nawet jeśli Sejm jest przeciw. Sejm uchwalił ustawę, której nie chcesz — masz 100 dni i 205 tysięcy podpisów, żeby ją zatrzymać i oddać decyzję obywatelom. Każda zmiana konstytucji i tak idzie do referendum: wygrywa większość tych, którzy przyszli zagłosować. Zasady tych procedur opisuje punkt 15.2a.",
      },
      {
        n: "15.2a",
        title: "Referendum obowiązkowe, inicjatywa i weto ludowe — przepisy",
        body: "Referendum obowiązkowe:\n\nDo głosowania idzie z urzędu, bez zbierania podpisów: każda zmiana Konstytucji; przystąpienie do organizacji bezpieczeństwa zbiorowego albo wspólnoty ponadnarodowej; ustawa w trybie nadzwyczajnym, która nie ma podstawy w Konstytucji i ma obowiązywać dłużej niż rok — taka ustawa musi trafić pod głosowanie najpóźniej w ciągu roku od uchwalenia. Do przyjęcia zmiany konstytucji wystarczy większość głosujących — Polska jest państwem unitarnym, województwo nie głosuje jako osobna jednostka.\n\nInicjatywa ludowa (zmiana Konstytucji):\n\nKomitet: od 7 do 27 osób z prawem wyborczym. Tekst idzie najpierw do wstępnej kontroli formalnej PKW (jedność materii — jeden temat; zakaz naruszania podstawowych praw człowieka: zakaz tortur, niewolnictwa, ludobójstwa). Po publikacji w Monitorze Polskim zaczyna się 18 miesięcy na zbiórkę 410 tysięcy ważnych podpisów. Podpis: imię, nazwisko, data urodzenia, adres, gmina — na urzędowym formularzu; gmina poświadcza z rejestru wyborców, bez dubli. PKW stwierdza, czy inicjatywa doszła. Sejm i rząd mają obowiązek się do niej ustosunkować. Sejm może zgłosić kontrprojekt bezpośredni albo pośredni. Komitet może wycofać inicjatywę do dnia zarządzenia głosowania. Głosujący otrzymują inicjatywę, kontrprojekt i pytanie rozstrzygające. Przyjęcie wymaga większości głosujących.\n\nWeto ludowe (ustawa):\n\nOd dnia ogłoszenia ustawy, rozporządzenia z mocą ustawy albo ratyfikacji bezterminowej umowy międzynarodowej bądź decyzji o wstąpieniu do organizacji międzynarodowej biegnie 100 dni. W tym czasie komitet składa 205 tysięcy ważnych podpisów. Ustawa nie wchodzi w życie do dnia głosowania. Do odrzucenia albo utrzymania ustawy wystarczy zwykła większość głosujących.\n\nGłosowanie i uczciwość procedury:\n\nGłosowania powszechne odbywają się najwyżej cztery razy w roku, w stałych terminach; datę ogłasza się co najmniej 4 miesiące wcześniej. Pakiet pytań idzie na jedną kartę. Państwo finansuje krótką broszurę. Kampania z budżetu partii i z limitu 5000 zł od osoby (rozdział 6). Narzędzie działa w obie strony — również wtedy, gdy władzę sprawuje Realna Lewica.",
      },
      {
        n: "15.3",
        title: "Wybory do Sejmu",
        body: "Sejm liczy 460 posłów wybieranych w systemie mieszanym. Każdy wyborca ma dwa głosy: na kandydata w jednym z 230 okręgów jednomandatowych i na listę partii. O liczbie mandatów każdej partii decyduje głos na listę — podział jest w pełni proporcjonalny. Próg wynosi 5%, ale partia, która wygra co najmniej 3 okręgi, wchodzi do Sejmu mimo progu. Sejm ma zawsze 460 miejsc: jeśli partia wygra więcej okręgów, niż daje jej wynik listy, mandatu nie dostają jej zwycięzcy okręgów z najsłabszym wynikiem. Granice okręgów wyznacza niezależna komisja, nie sam Sejm, z tolerancją odchylenia liczby wyborców do 15% od średniej krajowej, rewidowaną co 10 lat.",
      },
    ],
  },
  {
    num: 17,
    slug: "media",
    part: "II",
    title: "Media publiczne",
    kicker: "Media",
    lead: "Media publiczne od lat są zakładnikiem tego, kto akurat wygra wybory. Rozpraszamy tę władzę, żeby nikt nigdy więcej nie mógł przejąć całości jedną wygraną kampanią.",
    pillars: [],
    points: [
      {
        n: "1",
        title: "Rady programowe poza zasięgiem jednej kampanii",
        body: "Rady programowe nadzorujące nadawców publicznych są wybierane większością 2/3 głosów, na kadencje, które nie pokrywają się z kadencją parlamentu — żeby jedna wygrana wyborcza nie mogła przejąć całej rady od razu. Osoby sprawujące mandat polityczny nie mogą zasiadać w radach programowych. Cała reforma wdrażana jest w ciągu 6 lat.",
      },
      {
        n: "2",
        title: "Abonament 50 zł, 75+ zwolnieni",
        body: "Opłata abonamentowa wynosi 50 złotych rocznie, a osoby powyżej 75. roku życia są z niej całkowicie zwolnione.",
      },
    ],
  },
  {
    num: 18,
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
        body: "Bordo i grafit, z akcentem musztardowego złota. Bordo jest sygnałem, nie krzykiem. Grafit jest ciężarem instytucji. Złoto jest końcem ruchu: zrobione, nie tylko ogłoszone.",
      },
      {
        n: "3",
        title: "Znak",
        body: "Ptaszek — ten sam, który stawia się na karcie do głosowania i przy punkcie odhaczonym z listy. Długie ramię wznosi się i przechodzi z bordo w złoto: od oddanego głosu do rzeczy zrobionej, nie tylko obiecanej na plakacie.",
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
    { label: "Dziura programu", y1: 25, y5: 45, note: "ok. 0,6% → 1% PKB" },
  ],
  deficit: { y1: "~7,4%", y5: "~7,5–8%" },
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
  added: [
    "Nowe pozycje v6: Krajowa Agencja Migracyjna, Sąd Migracyjny, bezpłatne kursy języka polskiego i etaty w publicznych instytucjach kultury to wydatki rzędu pojedynczych miliardów zł rocznie; po stronie dochodów — zwężenie ulgi na powrót do zawodów deficytowych. Mieszczą się w podanym rozrzucie; dokładna wycena — w projekcie ustawy.",
    "Nowe pozycje v7: odrzucenie umowy UE–Mercosur, zapis anty-SLAPP oraz zniesienie przywilejów łowieckich to zmiany regulacyjne i ustrojowe — bez nowej linii wydatku w tym aneksie.",
    "Nowe pozycje v11: zakaz szerzenia współczesnej ideologii imperializmu rosyjskiego i amerykańskiego (rozdział 14, punkt 4), analogicznie do art. 13 Konstytucji — zmiana ustrojowo-karna, bez nowej linii wydatku.",
    "Nowe pozycje v12: rozdział 11 (twórcza resocjalizacja — koniec postępowania o „demoralizację”, izolacja dopiero od 15. roku życia i tylko za ciężki czyn, licencja metody, mentor po wyjściu) oraz punkty 11–12 rozdziału 10 (rdzeń życiowy i szkolny skrypt, gdy kolega mówi, że chce umrzeć). Dopisek do rozdziału 5, punkt 10: sygnał ze szkoły przy bezpośrednim zagrożeniu życia uruchamia pomoc tego samego dnia. Nowa linia wydatku: kilkaset milionów złotych rocznie. Mieści się w rozrzucie aneksu. Bez cięcia psychiatrii.",
  ],
  atom: "Atom: dług Funduszu Inwestycji Strategicznych, 12 GW w horyzoncie 20–25 lat. W statystyce długu będzie widoczny, nie schowany.",
  excise:
    "Przyrost akcyzy alkoholowej i konopnej ponad poziom z 2027 (około 3–5 mld rocznie) idzie na psychiatrię, nie na łatanie deficytu.",
};

/** Liczebnik z wielkiej litery do nagłówków: 17 → „Siedemnaście”. */
const COUNT_WORDS: Record<number, string> = {
  1: "Jeden",
  2: "Dwa",
  3: "Trzy",
  4: "Cztery",
  5: "Pięć",
  6: "Sześć",
  7: "Siedem",
  8: "Osiem",
  9: "Dziewięć",
  10: "Dziesięć",
  11: "Jedenaście",
  12: "Dwanaście",
  13: "Trzynaście",
  14: "Czternaście",
  15: "Piętnaście",
  16: "Szesnaście",
  17: "Siedemnaście",
  18: "Osiemnaście",
  19: "Dziewiętnaście",
  20: "Dwadzieścia",
  21: "Dwadzieścia jeden",
  22: "Dwadzieścia dwa",
  23: "Dwadzieścia trzy",
  24: "Dwadzieścia cztery",
  25: "Dwadzieścia pięć",
  26: "Dwadzieścia sześć",
  27: "Dwadzieścia siedem",
  28: "Dwadzieścia osiem",
  29: "Dwadzieścia dziewięć",
  30: "Trzydzieści",
};

/** Liczebnik słownie, z wielkiej litery (poza słownikiem — cyfry). */
export function countWord(n: number) {
  return COUNT_WORDS[n] ?? String(n);
}

/** Polska odmiana po liczebniku: 1 postulat, 2–4 / 22–24 postulaty, 5–21 / 25+ postulatów. */
export function plural(n: number, one: string, few: string, many: string) {
  if (n === 1) return one;
  const lastTwo = n % 100;
  const last = n % 10;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return few;
  return many;
}

export function chapterCountWord(n: number) {
  return countWord(n);
}

export function chapterBySlug(slug: string) {
  return CHAPTERS.find((c) => c.slug === slug);
}

/** Krótki opis celu linku, np. „Rozdział 3 · Migracja” albo „Aneks kosztów”. */
export function targetLabel(target: ProgramTarget) {
  if ("page" in target) return "Aneks kosztów";
  const chapter = chapterBySlug(target.slug);
  return chapter ? `Rozdział ${chapter.num} · ${chapter.title}` : "Pełny program";
}

export function neighbors(slug: string) {
  const i = CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}

export function fold(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

export function chapterText(chapter: Chapter) {
  return [
    chapter.title,
    chapter.kicker,
    chapter.lead,
    ...chapter.points.flatMap((p) => [p.title ?? "", p.body]),
  ].join("\n");
}
