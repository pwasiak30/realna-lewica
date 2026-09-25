/*
  Porównanie programów: Realna Lewica (deklaracja v5, 24 września 2026) wobec partii
  sejmowych X kadencji oraz Konfederacji Korony Polskiej.
  Źródło: public/porownanie.pdf (opracowanie analityczne, 24 września 2026).
  Każdy wiersz ma `chapter` — slug rozdziału programu, przy którym się wyświetla.
*/

export type BlocId = "rl" | "nl" | "ko" | "pis" | "konf";

export type CompareCells = Record<BlocId, string>;

export type CompareRow = CompareCells & { topic: string; chapter: string };

export type CompareSection = {
  id: string;
  /** Slugi rozdziałów programu, których dotyczy sekcja (numery i tytuły bierzemy z CHAPTERS). */
  chapters: string[];
  /** Własny tytuł zamiast listy rozdziałów. */
  title?: string;
  subtitle?: string;
  intro?: string;
  verdict?: string;
  rows: CompareRow[];
};

export const COMPARE = {
  title: "Porównanie programów",
  subtitle:
    "Realna Lewica (deklaracja v5, 24 września 2026) wobec partii sejmowych X kadencji oraz Konfederacji Korony Polskiej",
  date: "24 września 2026",
  pdf: {
    href: "porownanie.pdf",
    filename: "Porownanie_RL_partie_sejmowe_KKP.pdf",
    label: "Pobierz porównanie (PDF)",
  },
  lead: "Ten dokument zestawia każdy rozdział deklaracji Realnej Lewicy z analogicznymi punktami Nowej Lewicy, Razem, Koalicji Obywatelskiej, PSL, Polski 2050 / Unii Centrum, PiS, Rozwoju Plus, Konfederacji (Nowa Nadzieja + RN) i Konfederacji Korony Polskiej. Tam, gdzie partia nie ma precyzyjnego odpowiednika, jest to zaznaczone. Porównanie jest analityczne, nie agitacyjne.",
  sources:
    "RL / NL / Razem — jak w opracowaniu z 24.09.2026 (deklaracja RL v5; program KW NL 2023 + priorytety XII 2025 + „1000 dni”; deklaracja Razem XI 2025). KO: 100 konkretów 2023 + umowa koalicyjna 15.10 + praktyka rządu Tusk III do IX 2026. PSL / PL2050: program Trzeciej Drogi 2023, umowa koalicyjna, manifest Unii Centrum IX 2026. PiS: program 2023 i linia klubu 2024–26. Rozwój Plus: 10 filarów z 28.07.2026. Konfederacja: program prezydencki Mentzena 2025, stanowiska klubu 2024–26. KKP: program partii (konfederacjakoronypolskiej.pl), kampania prezydencka Brauna 2025, projekty IX 2026 (ustawa o agentach, „Polska za pokojem”).",
  method:
    "Partie rządzące (KO, PSL, PL2050, NL) mają program 2023 złagodzony przez kompromis koalicyjny i weto prezydenta Nawrockiego. PiS po rozłamie VII 2026 nie opublikowało nowego programu kadencyjnego — używamy linii klubu i dziedzictwa 2015–23. R+ i KKP to formacje młode: R+ ma 10 filarów, nie 155 punktów; KKP ma program tożsamościowo-katolicki, nie tabelę wydatków. Gęstość liczbowa RL pozostaje unikatowa na tle całego Sejmu.",
  footnote:
    "Opracowanie: porównanie analityczne, 24 września 2026. Cytaty i liczby: deklaracja RL v5 (24.09.2026); program KW Nowa Lewica 2023; uchwała KK NL 14.12.2025; lewica.org.pl; „1000 dni Lewicy w rządzie” (IX 2026); deklaracja Razem 8–9.11.2025; Krytyka Polityczna 5.12.2025; 100 konkretów KO 2023; umowa koalicyjna 10.11.2023; 10 filarów Rozwoju Plus 28.07.2026; program prezydencki S. Mentzena 2025; program KKP i projekty IX 2026; skład Sejmu X kadencji na 24.09.2026 (kluby: KO, PiS, R+, PSL, PL2050/Centrum, NL, Konfederacja; koła: Razem, DB, KKP).",
};

/** Kolumny porównania: RL i cztery bloki sejmowe. */
export const BLOCS: { id: BlocId; short: string; parties: string[] }[] = [
  { id: "rl", short: "Realna Lewica", parties: ["Realna Lewica"] },
  { id: "nl", short: "NL / Razem", parties: ["Nowa Lewica", "Razem"] },
  {
    id: "ko",
    short: "KO / PSL / 2050",
    parties: ["Koalicja Obywatelska", "PSL", "Polska 2050 / Unia Centrum"],
  },
  { id: "pis", short: "PiS / R+", parties: ["Prawo i Sprawiedliwość", "Rozwój Plus"] },
  {
    id: "konf",
    short: "Konf. / KKP",
    parties: ["Konfederacja (Nowa Nadzieja + RN)", "Konfederacja Korony Polskiej"],
  },
];

/** 0. Pozycjonowanie ideowe. */
export const POSITIONING: (CompareCells & { topic: string })[] = [
  {
    topic: "Autodefinicja",
    rl: "Socjaldemokracja realistyczna. Silne państwo przy pensji, zdrowiu, mieszkaniu i ciele; twarde na granicy i w kasie.",
    nl: "NL: socjaldemokracja + socjalliberalizm, PES/S&D. Razem: demokratyczny socjalizm / nordycka SD.",
    ko: "KO: demoliberalizm, pro-UE. PSL: agraryzm, chadecja. 2050/UC: liberalne centrum, jakość życia.",
    pis: "PiS: narodowy konserwatyzm, solidaryzm, etatyzm. R+: „nowoczesna chadecja europejska”, patriotyzm + inwestycje.",
    konf: "Konf.: konserwatywny liberalizm / paleolibertarianizm + narodowcy. KKP: ultrakonserwatyzm katolicki, intronizacja, twardy eurosceptycyzm.",
  },
  {
    topic: "Styl",
    rl: "Mówi cenę na 1. stronie. Nie obiecuje euro ani 6% PKB na armię w tej kadencji. Aneks kosztów.",
    nl: "NL 2023: 155 pkt bez pełnego rachunku. Razem 2025: „koniec świętych krów”, mniej liczb niż RL.",
    ko: "KO: 100 konkretów / 100 dni — checklista, nie doktryna. PSL: obrona KRUS i wsi. 2050: instytucje, klimat, „nowa polityka”.",
    pis: "PiS: transfery + tożsamość + wielkie inwestycje (CPK). R+: 10 filarów, bez tabeli deficytu.",
    konf: "Konf.: niskie podatki, cienkie państwo (gospodarka) + grube w kulturze. KKP: teologia polityczna, pokój, suwerenność, rejestr „obcych agentów”.",
  },
  {
    topic: "Władza IX 2026",
    rl: "Projekt nowej formacji / dokumentu. Odbiera prezydentowi weto i łaskę.",
    nl: "NL w koalicji, Czarzasty marszałkiem od XI 2025. Razem poza rządem (wyszło 2024), koło 4 posłów.",
    ko: "KO największy klub (~156). PSL ~32. PL2050 rozbita (~15 + Centrum/UC). Rząd Tusk III.",
    pis: "PiS ~146 po odejściu R+ (~41). Opozycja. Prezydent Nawrocki z prawej strony hamuje ustawy koalicji.",
    konf: "Konfederacja klub ~16. KKP koło 3 posłów (od VI 2025). Oba poza rządem; KKP w sondażach IX 2026 ~11%.",
  },
  {
    topic: "Hasło",
    rl: "Twoja pensja. Twoje ciało. Twoje mieszkanie. Twoje bezpieczeństwo.",
    nl: "NL: Serce mam po lewej. Razem: Inna polityka jest możliwa / TurboPolska.",
    ko: "KO: 100 konkretów / przyszłość. PSL: normalność, wieś. 2050: Polska przyszłości.",
    pis: "PiS: Polska — nasz dom. R+: Bezpieczeństwo. Rozwój. Suwerenność.",
    konf: "Konf.: niska składka, szczelna granica. KKP: Ad Maiorem Dei Gloriam / Polska za pokojem.",
  },
];

export const COMPARE_SECTIONS: CompareSection[] = [
  {
    id: "atom",
    chapters: ["atom-krzem-stal"],
    intro:
      "To najbardziej „skopiowany” rozdział wobec Razem 2025. Tytuł i rdzeń industrialny RL = Razem. Na reszcie sceny atom wraca do łask (PiS, R+, częściowo KO w rządzie), ale bez pakietu 12 GW + zniesienie 60% PKB + Linux w administracji.",
    rows: [
      {
        topic: "Atom",
        chapter: "atom-krzem-stal",
        rl: "Docelowo ~12 GW, horyzont 20–25 lat (nie 15). Przyspieszenie Lubiatowo-Kopalino i Pątnów. Przegląd co 3–4 lata.",
        nl: "NL 2023: brak celu GW; w rządzie ministerstwo energii + sprawiedliwa transformacja. Razem: min. 8 bloków / 12 GW.",
        ko: "KO: kontynuacja programów jądrowych rządu (nie flaga 2023). 2050: OZE pierwsze, atom dopuszczalny. PSL: ostrożnie, ochrona wsi.",
        pis: "PiS 2015–23: start programu jądrowego. R+: przyspieszyć duże EJ + SMR jako priorytet państwa.",
        konf: "Konf.: atom tak, jeśli bez Zielonego Ładu jako dyktatu. KKP: suwerenność energetyczna, sceptycyzm wobec unijnego miksu.",
      },
      {
        topic: "OZE / klimat",
        chapter: "atom-krzem-stal",
        rl: "Wiatr i słońce nie czekają na atom. Nie podnosić cen „pod dyrektywę”. Dopłaty z FSK i ETS dla ubogich.",
        nl: "NL: Zielony Ład, −50% CO₂ (starsze). Razem: OZE + atom, neutralność 2050.",
        ko: "KO/2050: Zielony Ład, wiatr na lądzie, KPO. PSL: hamulec wobec ETS2 i obciążeń rolników.",
        pis: "PiS: atom + węgiel transformacyjny, opór ETS2. R+: stop polityce klimatycznej UE, odejście od ETS/ETS2 i ZŁ.",
        konf: "Konf. i KKP: twarde „nie” dla Zielonego Ładu. Konf.: bezpieczeństwo energetyczne bez unijnego kalendarza.",
      },
      {
        topic: "Górnicy",
        chapter: "atom-krzem-stal",
        rl: "Praca do emerytury w spółkach SP. 1:1 nowe miejsce w tym samym regionie.",
        nl: "NL: sprawiedliwa transformacja. Razem: za każde likwidowane — nowe w regionie.",
        ko: "KO: transformacja + tarcze. PSL: ochrona regionów i KRUS, nie 1:1 przemysłowe.",
        pis: "PiS: przedłużanie węgla + osłony. R+: energetyka jako rozwój, nie data zamknięcia.",
        konf: "Konf./KKP: węgiel jako suwerenność; transformacja unijna = strata miejsc.",
      },
      {
        topic: "Limit 60% PKB",
        chapter: "atom-krzem-stal",
        rl: "Zniesienie limitu konstytucyjnego. Referendum (15.2).",
        nl: "NL: brak. Razem: identyczny postulat zniesienia 60%.",
        ko: "KO/PSL/2050: utrzymanie ram UE i konstytucji; euro jako horyzont KO, nie data.",
        pis: "PiS w praktyce obchodził limit funduszami. R+: wielkie inwestycje z długu (CPK, kolej, porty).",
        konf: "Konf.: zakaz deficytu w konstytucji (Nowa Nadzieja — odwrotność RL). KKP: tanie państwo, nie zniesienie limitu na atom.",
      },
      {
        topic: "Fundusz strategiczny",
        chapter: "atom-krzem-stal",
        rl: "Fundusz Inwestycji Strategicznych z długu: atom + wojsko. Mieszkania osobno (danina).",
        nl: "NL: KPO, BGK, programy sektorowe. Razem: jeden fundusz przemysł–infra–tech.",
        ko: "KO: KPO + BGK. 2050: fundusze UE. PSL: BGK dla wsi i samorządów.",
        pis: "PiS: CPK, Via Carpatia, FWSZ. R+: przywrócić wielkie inwestycje (CPK, kolej, porty).",
        konf: "Konf.: przeciw „wielkim budowom” jako rozdawnictwu. KKP: nie ten język.",
      },
      {
        topic: "Kolej / drogi / porty",
        chapter: "atom-krzem-stal",
        rl: "KDP, regionalna, nocna, polskie tech. Jeden e-pobór. Autobus w każdej gminie + 3 kursy weekend. Jeden bilet.",
        nl: "NL: zintegrowany bilet, odbudowa kolei (projekt 2026). Razem: KDP + lokalna + nocna + centra.",
        ko: "KO: CPK w praktyce rządu sporny; kolej i drogi z KPO. 2050: kolej i klimat. PSL: drogi gminne, PKS.",
        pis: "PiS: CPK jako totem. R+: wrócić do CPK, kolei, portów.",
        konf: "Konf.: infrastruktura tak, bez unijnych warunków. KKP: brak szczegółowego planu taboru.",
      },
      {
        topic: "Linux / AI",
        chapter: "atom-krzem-stal",
        rl: "50 tys. stanowisk Linux rok 1; ≥80% administracji rok 5. Kod publiczny. Polskie AI w 36 mies. Zakaz trenowania AI na danych bez zgody.",
        nl: "NL: PLLuM (11 modeli od V 2026), mObywatel — bez twardego odejścia od Microsoftu. Razem: suwerenność cyfrowa, bez harmonogramu Linuxa.",
        ko: "KO: mObywatel, eIDAS 2.0, chmura. Brak wymuszonego Linuxa. 2050: cyfryzacja państwa.",
        pis: "PiS: mObywatel 2017–23. R+: „Polska w smartfonie”.",
        konf: "Konf.: mniej państwa w cyfrze, obrona gotówki. KKP: sceptycyzm wobec unijnej tożsamości cyfrowej.",
      },
      {
        topic: "Węgiel w domach / rezerwy",
        chapter: "atom-krzem-stal",
        rl: "Zakaz węgla w miastach od 2035. Sieci ciepłownicze nieprywatyzowane. Gaz 90 / ropa 60 / węgiel 30 dni.",
        nl: "NL: ciepło systemowe, kotły. Razem: priorytet ciepła publicznego. Brak tak precyzyjnych zapasów u obu.",
        ko: "KO: wymiana kotłów, smog. Brak 90/60/30.",
        pis: "PiS: węgiel w miksie, rezerwy jako suwerenność (mniej liczb). R+: tania energia, nie data zakazu.",
        konf: "Konf./KKP: sprzeciw zakazom węglowym z kalendarza UE.",
      },
    ],
  },
  {
    id: "praca",
    chapters: ["praca"],
    verdict:
      "Tu RL stoi między Razem (35h od razu) a NL (PIP-etat już jest, 4 dni odłożone). KO jest pracodawcą koalicyjnym: przyjęła PIP, nie przyjmie kodeterminacji 50% RN ani 4 dni w firmach >250. PiS/R+ mówią „godna praca” bez niemieckich rad. Konfederacja i KKP są w tej osi antytezą RL — wolny kontrakt kontra etat, rada i 250% za niedzielę.",
    rows: [
      {
        topic: "Związki / rady",
        chapter: "praca",
        rl: "Łatwiejszy spór i strajk solidarnościowy. 1/3 RN przy 500–1999; połowa od 2000 (remis — kapitał). Rada zakładowa od 50 os.",
        nl: "NL: nowa ustawa o sporach, min. 20% w RN. Razem: silne związki, partycypacja — filar 2025.",
        ko: "KO: dialog społeczny, bez współzarządzania 1/3–1/2. PSL: związki rolnicze. 2050: umiar.",
        pis: "PiS: związki „swoje” (S, Solidarność), nie niemiecki model rad. R+: solidarizm, nie kodeterminacja.",
        konf: "Konf.: związki jako przeszkoda dla firm. KKP: korporacjonizm katolicki, nie rady z parytetem.",
      },
      {
        topic: "PIP / śmieciówki",
        chapter: "praca",
        rl: "Broni prawa PIP do przekwalifikowania B2B/zlecenia na etat (od VII 2026, zaskarżone do TK). Podwojenie inspektorów.",
        nl: "NL: wdrożone 8.07.2026 — sztandar. Razem: likwidacja śmieciówek od 2015.",
        ko: "KO w koalicji przyjęła PIP-etat; część KO (przedsiębiorcy) protestuje. PSL: ostrożność wobec rolników-B2B.",
        pis: "PiS 2015–23: część oskładkowania zleceń, nie pełna zamiana decyzją PIP. R+: uszczelnienie CIT, nie PIP-etat jako flaga.",
        konf: "Konf.: PIP-etat = atak na B2B. KKP: nie ten temat.",
      },
      {
        topic: "Czas pracy",
        chapter: "praca",
        rl: "4-dniowy tydzień bez utraty pensji, etapowo: lata 1–2 publiczny i firmy >250; ocena 18 mies.; 3–5 reszta. Right to disconnect od r. 1. Handel niedziela: decyzja stron, 250%.",
        nl: "NL 2023: skracanie + urlop; w priorytetach 2025/26 „horyzont”, nie ustawa kadencji. Razem: klasycznie 35h.",
        ko: "KO: zniesienie zakazu handlu w niedzielę (konkret 2023) — zbieżne z RL w kierunku, nie w 250%. Brak 4 dni. 2050: work-life, nie 32h.",
        pis: "PiS: zakaz handlu w niedzielę jako tożsamość. R+: nie 4 dni.",
        konf: "Konf.: wolny kontrakt, nie krótszy tydzień z tej samej pensji. KKP: niedziela święta, nie 250%.",
      },
      {
        topic: "Płaca minimalna",
        chapter: "praca",
        rl: "Do 75% mediany w kadencji (~+3 pp/rok z ~63%). Potem automat.",
        nl: "NL 2023: 66% przeciętnego z poprzedniego roku. Razem: godne płace, koniec rozdawnictwa dla bogatych.",
        ko: "KO: podwyżki min. w koalicji, bez 75% mediany jako kotwicy.",
        pis: "PiS: podnosił min. politycznie. R+: rozwój płac przez gospodarkę, nie kotwicę 75%.",
        konf: "Konf.: płaca min. zniekształca rynek; Mentzen historycznie za jej ograniczeniem.",
      },
      {
        topic: "Budżetówka / automatyzacja",
        chapter: "praca",
        rl: "Pensje = średnia + waloryzacja ≥ inflacja. Koniec outsourcingu stałych zadań. Dodatkowy CIT → Fundusz Automatyzacji.",
        nl: "NL 2023: 20% „natychmiast” + 2×/rok; w praktyce 2024 20/30%, 2025 już 5%. Razem: godne płace nauczycieli i pielęgniarek. Brak funduszu automatyzacji.",
        ko: "KO: podwyżki 2024, potem hamulec fiskalny. 2050: sprawne państwo.",
        pis: "PiS: podwyżki wybrane grupy. R+: nie ten fundusz.",
        konf: "Konf.: ciąć administrację, nie wiązać ze średnią.",
      },
      {
        topic: "Bezrobocie / staże / mobbing",
        chapter: "praca",
        rl: "6 mies. 80% + 6 mies. 50%, limit jak L4. Koniec bezpłatnych staży. Sądy pracy: wyrok I inst. w 6 mies. Mobbing = wypadek przy pracy.",
        nl: "NL: 100% na L4 (2023) — mocniejsze niż RL; ustawa o płatnych stażach w toku. Razem: zakaz darmowych staży od początku.",
        ko: "KO: bon, staże — słabsza precyzja. PSL: sezonowość rolnictwa.",
        pis: "PiS: 500+ logika transferów, nie 80% pensji przez rok.",
        konf: "Konf.: zasiłki zniechęcają do pracy.",
      },
    ],
  },
  {
    id: "migracja",
    chapters: ["migracja"],
    subtitle: "Największa różnica na lewicy, zbieżność z prawicą w twardości granicy",
    intro:
      "Rozdział 3 RL nie ma odpowiednika o tej gęstości u NL ani Razem. Na osi „kto wjeżdża i za ile” RL zbliża się do duńskiego socjaldemokratycznego twardego centrum — i częściowo do PiS/R+/Konfederacji. Różnica: RL zostawia furtkę LGBT w limicie ONZ, ochronę dzieci, 90% mediany jako warunek wjazdu (to jest lewicowe narzędzie, nie narodowe) i nie mówi językiem „wielkiego zastąpienia”.",
    verdict:
      "To rozdział, który czyni RL „realistyczną” w sensie skandynawsko-duńskim, nie w sensie Razem/NL 2023. PiS i R+ są twardsi w symbolice granicy, ale nie dają progu 90% mediany — czyli nie bronią pensji krajowej jako warunku wjazdu. Konfederacja i KKP chcą mniej ludzi, nie równej płacy. KO administruje status quo. RL jest jedyną lewicą z liczbą 3200, Agencją, Sądem i 10 tys. za powrót.",
    rows: [
      {
        topic: "Praca cudzoziemców",
        chapter: "migracja",
        rl: "Zezwolenie tylko przy pensji ≥90% mediany (75% w deficytowych). Oferta 14 dni w publicznym serwisie. Weryfikacja ZUS. Kara pracodawcy.",
        nl: "NL: ochrona praw migrantów, PIP — brak progu 90%. Razem: „ucywilizowanie” zarobkowej, bez 90%.",
        ko: "KO w rządzie: strategia migracyjna 2024 (krytykowana przez Razem jako nieskonsultowana), zezwolenia sektorowe. Brak 90% mediany.",
        pis: "PiS: twarda retoryka + masowe zezwolenia 2021–23 (luka, którą RL adresuje progiem). R+: suwerenna polityka, wydalanie za rażące naruszenia, sprzeciw paktowi UE.",
        konf: "Konf.: zamknięcie na migrację z Kaukazu, ME, Afryki; dopuszczenie „kulturowo bliskich”. KKP: zero otwarcia, migracja jako narzędzie obcych fundacji.",
      },
      {
        topic: "Azyl / limity ONZ",
        chapter: "migracja",
        rl: "Krajowa Agencja Migracyjna + 16 punktów + Sąd Migracyjny. Pobyt w ośrodku państwowym. Limit Sejmu, start ~3200/rok. Priorytet: kobiety, dzieci, OzN, prześladowani za orientację/tożsamość.",
        nl: "NL i Razem: brak limitu liczbowego. Razem 2025: przywrócenie prawa do azylu. Linia 2024 PL–BY: sprzeciw pushbackom.",
        ko: "KO: prawo azylu + sprawność granicy; w koalicji bliżej twardego centrum niż programu 2023. PSL: wieś nie chce relokacji.",
        pis: "PiS: mur, pushbacki, stan wyjątkowy. R+: autonomia wobec paktu azylowego UE.",
        konf: "Konf./KKP: azyl minimalny, relokacja = nie. KKP: instrumentalizacja granicy jako wojna hybrydowa, bez limitu 3200 z furtką LGBT.",
      },
      {
        topic: "Zawieszenie azylu",
        chapter: "migracja",
        rl: "Max 6 mies./rok, kontrola SN (dziś Sejm bez limitu).",
        nl: "NL w koalicji akceptowała narzędzia granicy. Razem: linia otwartsza.",
        ko: "KO: narzędzie zostaje, spór o humanitarność.",
        pis: "PiS: zawieszenie bez stropu 6 mies. i bez SN.",
        konf: "Konf./KKP: zawieszać szerzej i dłużej.",
      },
      {
        topic: "Łączenie rodzin / obywatelstwo",
        chapter: "migracja",
        rl: "Dochód po czynszu 1300/2150 + stawki na dziecko. 2 lata pobytu. Obywatelstwo po 9 latach, B1, test, niekaralność. 10 tys. za dobrowolny powrót.",
        nl: "NL/Razem: łączenie jako prawo, bez tych progów. 9 lat + B1 twardsze niż typowa lewica.",
        ko: "KO: integracja, kursy — bez 1300 zł i 10 tys. powrotu.",
        pis: "PiS: utrudnianie obywatelstwa, Karta Polaka jako wyjątek.",
        konf: "Konf./KKP: obywatelstwo wąskie; KKP dodatkowo lojalność, podwójne obywatelstwo pod lupą (projekt o agentach IX 2026).",
      },
      {
        topic: "Ulga powrotu / specjaliści",
        chapter: "migracja",
        rl: "Ulga tylko dla deficytowych i pracy w PL. Naukowcy: 75% podstawy w II progu PIT przez 7 lat.",
        nl: "NL 2023: zerowy PIT dla wracających — RL to zwęża.",
        ko: "KO: ulgi dla wracających w konkretach 2023.",
        pis: "PiS: Polski Ład / ulga na powrót jako flaga.",
        konf: "Konf.: niskie podatki dla wszystkich, nie ulga elitarna.",
      },
    ],
  },
  {
    id: "gospodarka",
    chapters: ["gospodarka"],
    rows: [
      {
        topic: "PIT",
        chapter: "gospodarka",
        rl: "5 progów: 12 / 32 / 48 / 56 / 71. +4% danina od 1 mln → realnie 60% i 75%.",
        nl: "NL 2023: sprawiedliwa progresja, bez 71/75. Razem: jednolita danina niska/średnia/wysoka dla 90/9/1; koniec ryczałtu i liniowego.",
        ko: "KO 2023: 0% PIT do 6 tys. brutto / emerytura 5 tys. — odwrotność RL (obniżka dołu, nie 71% góry). UC IX 2026: 12 / 22 / 32.",
        pis: "PiS: 12/32 + ulgi rodzin. R+: podnieść II próg (ulżyć średnim), uszczelnić transfer zysków za granicę.",
        konf: "Konf.: uproszczenie, docelowo likwidacja PIT/CIT (Nowa Nadzieja), Mentzen 2025: prosty PIT/CIT/VAT, likwidacja Belki, spadków, PCC. KKP: niskie podatki, nie 75%.",
      },
      {
        topic: "Majątek / spadki",
        chapter: "gospodarka",
        rl: "Netto >7 mln: 1–8%. Spadki >2 mln/os.: 10/20/25%. Mieszkanie zamieszkałe + oszczędności do 2 mln wolne.",
        nl: "NL: podatek od 3. mieszkania (projekt). Razem: unijny podatek od fortun + progresja od nieruchomości.",
        ko: "KO/PSL/2050: brak podatku od fortuny 7 mln+. PSL broni dziedziczenia gospodarstw.",
        pis: "PiS: 500+ logika, nie podatek od fortuny. R+: uszczelnienie, nie 8% od majątku.",
        konf: "Konf.: likwidacja podatku od spadków. KKP: własność rodziny święta.",
      },
      {
        topic: "Ryczałt / liniowy / kler / 30-krotność",
        chapter: "gospodarka",
        rl: "Ryczałt tylko usługi do 200 tys. Wynajem na skali. Liniowy znika. Duchowni na zasadach ogólnych. Zniesienie 30-krotności + górny limit emerytury.",
        nl: "NL: sprawiedliwe opodatkowanie Kościoła; brak pełnej likwidacji liniowego 2023. Razem: likwidacja ryczałtu, liniowego, stawek duchownych, zniesienie górnej granicy składek — zbieżne z RL.",
        ko: "KO: kasowy PIT, powrót ryczałtowej składki zdrowotnej dla firm — przeciwna strona. PSL: KRUS i ryczałt rolniczy.",
        pis: "PiS: Polski Ład komplikował składkę. R+: uszczelnić, nie zrównać księdza z etatowcem.",
        konf: "Konf.: dobrowolny ZUS dla firm, składka sprzed Polskiego Ładu. KKP: Kościół nie na skali PIT.",
      },
      {
        topic: "CIT / platformy / windfall",
        chapter: "gospodarka",
        rl: "Duże (>50 mln): 22%. Małe 9%. Windfall w kryzysie. 5% obrotu reklamą i marketplace’ami w PL.",
        nl: "NL: progresywny CIT w duchu. Razem: wielkie korporacje więcej; podatek od transakcji kapitałowych (UE).",
        ko: "KO: podatek bankowy zostaje; brak 5% od platform w tej formie.",
        pis: "PiS: CIT estoński, strefy. R+: uszczelnić wyprowadzanie zysków.",
        konf: "Konf.: niski CIT, nie 22%.",
      },
      {
        topic: "Ulgi",
        chapter: "gospodarka",
        rl: "Likwidacja 0% PIT do 26 lat i dla seniorów. Ulga na dzieci z progiem. Ulga powrotu zwężona.",
        nl: "NL 2023 wręcz obiecywała ulgi dla młodych. Razem: koniec rozdawnictwa dla bogatych — zbieżne.",
        ko: "KO: 0% do 6 tys. i ulgi młodych — odwrotność. UC: premia 5 tys. do oszczędności młodych.",
        pis: "PiS: 0% PIT senior / młody jako flaga. R+: nie likwidować ulg rodzinnych.",
        konf: "Konf.: niskie stawki zamiast gąszczu ulg — częściowo zbieżne metodologicznie, odwrotne stawkowo.",
      },
      {
        topic: "VAT żywność / akcyza / euro",
        chapter: "gospodarka",
        rl: "VAT 5% na całą żywność i podstawową higienę. Akcyza paliw waloryzowana inflacją. Euro: kierunek długofalowy, nie ta kadencja. Złoty zostaje. ERM II po ścieżce fiskalnej.",
        nl: "NL: leki 5 zł (2023); euro proeuropejskie bez twardego „nie w tej kadencji”. Razem 2025: zachowanie złotego (wg KP).",
        ko: "KO: pro-euro, bez daty. 2050: euro jako horyzont. PSL: złoty dłużej.",
        pis: "PiS: złoty. R+: suwerenność, nie data euro.",
        konf: "Konf./KKP: twarde nie dla euro i dla ERM II.",
      },
      {
        topic: "Własność państwa",
        chapter: "gospodarka",
        rl: "Na zawsze: przesył, atom, węgiel transformacyjny, publiczne OZE, kolej, zbrojeniówka, mieszkania publiczne, BGK. Cała energetyka państwowa. Sprzedaż tylko mniejszości w bankach SP + złota akcja → Fundusz.",
        nl: "NL: sprzeciw prywatyzacji szpitali, ciepła, mieszkań. Razem: silny sektor publiczny, fundusze zalążkowe, spółdzielnia od 3 os.",
        ko: "KO: depolityzacja SP, nie „cała energetyka państwowa”. PSL: spółdzielczość wiejska.",
        pis: "PiS: etatyzm czempionów narodowych. R+: inwestycje SP, nie wyprzedaż.",
        konf: "Konf.: prywatyzować. KKP: własność narodowa w strategicznych, nie holding RL.",
      },
      {
        topic: "Konsument",
        chapter: "gospodarka",
        rl: "Wypowiedzenie subskrypcji 1 klik. Cena końcowa w reklamie. Pozew zbiorowy od 2 os. UOKiK wstrzymuje natychmiast.",
        nl: "NL: ochrona ogólna. Razem: platformy i ukryte opłaty — zbieżne.",
        ko: "KO: UOKiK, analogicznie słabiej doprecyzowane.",
        pis: "PiS/R+: nie flaga.",
        konf: "Konf.: deregulacja > pozwy zbiorowe.",
      },
    ],
  },
  {
    id: "zdrowie",
    chapters: ["zdrowie"],
    verdict:
      "Aborcja, in vitro, etat w zdrowiu — zbieżność trójkąta RL–NL–Razem i deklaracji KO 2023; PSL/PiS/R+/Konf./KKP to antymodel. RL jest najostrzejsza wobec alkoholu w całym Sejmie (bliżej Skandynawii niż lewicy 2023) i ciaśniejsza wobec konopi niż NL/Razem (państwowy obrót, zakaz uprawy). Cel 7% vs 8%: RL świadomie obniża poprzeczkę. Konfederacja jako jedyna mówi wprost: nie zwiększać nakładów.",
    rows: [
      {
        topic: "Nakłady / organizacja",
        chapter: "zdrowie",
        rl: "7% PKB (bieżący rok) w dwóch kadencjach. Likwidacja NFZ jako kasy — finansowanie z budżetu. Zniesienie limitów AOS od r. 2. Centralne zakupy leków.",
        nl: "NL 2023: 8% PKB; 2025 SHA ~6,9% — cel nieosiągnięty. NFZ zostaje. Razem: 8% PKB, ≥6% budżetu zdrowia na psychikę; finansowanie z budżetu — zbieżne z RL.",
        ko: "KO: zniesienie limitów szpitalnych, centra powiatowe, in vitro 500 mln — NFZ zostaje. 2050: jakość i kolejki.",
        pis: "PiS: sieć szpitali, 6% ścieżka ustawowa. R+: nie 7% z datą.",
        konf: "Konf.: Mentzen 2025 — nie zwiększać nakładów; konkurencja kas / powrót regionalnych kas; płatne studia med. jako kontrowersja. KKP: nie 7% PKB.",
      },
      {
        topic: "Aborcja",
        chapter: "zdrowie",
        rl: "Na żądanie do 12. tyg.; potem przesłanki medyczne. Placówka publiczna nie może odmówić klauzulą (instytucja musi zapewnić dostęp).",
        nl: "NL: identycznie do 12 tyg.; w koalicji — weto/brak większości. Razem: pełne prawo do ciała.",
        ko: "KO 2023: do 12 tyg. + likwidacja klauzuli — niezrealizowane (weto Nawrockiego). PSL: kompromis 1993. 2050: bliżej KO niż PSL.",
        pis: "PiS: wyrok TK 2020. R+: konserwatyzm społeczny, nie 12 tyg.",
        konf: "Konf.: Mentzen — nie nawet z gwałtu. KKP: obrona życia od poczęcia, absolutna.",
      },
      {
        topic: "In vitro / trans / eutanazja",
        chapter: "zdrowie",
        rl: "Do 6 cykli, także singielki i do 45 r.ż. Bezpłatna ścieżka trans: medyczna od 18, prawna od 16 za zgodą. Wspomagane zakończenie życia — wniosek wielokrotny + komisja.",
        nl: "NL: in vitro wdrożone 2024 (głównie pary) — RL idzie dalej. Eutanazja nie była flagą NL. Razem: pełna refundacja in vitro i antykoncepcji; trzecia płeć (RL tego nie ma).",
        ko: "KO: in vitro z budżetu — spełnione. Trans — ostrożniej. Eutanazja — nie flaga.",
        pis: "PiS: przeciw in vitro ze środków pub. jako standard; przeciw trans i eutanazji.",
        konf: "Konf./KKP: przeciw in vitro publicznemu, tranzycji nieletnich i eutanazji. KKP: teologia ciała.",
      },
      {
        topic: "Alkohol",
        chapter: "zdrowie",
        rl: "Neurotoksyna, brak bezpiecznej dawki. Zakaz marketingu (także 0%). Wycofanie ze stacji i spożywczaków w 24 mies. Koncesja 10–20, sucha niedziela. Zakaz małpek. Ostrzeżenia. Akcyza +30% ponad 2027 (~+65% vs 2025) → psychiatria. Bez odszkodowań.",
        nl: "NL 2023: legalizacja marihuany, alkohol nie był tak tępiony. Razem: zdrowie publiczne, nie pakiet prohibicyjny.",
        ko: "KO/PSL: standardowa akcyza, piwo w sklepie zostaje. Mentzen ma browar — oś polityczna.",
        pis: "PiS: akcyza + reklama ograniczona, nie monopol godzinowy.",
        konf: "Konf.: wolny rynek alkoholu (Mentzen). KKP: trzeźwość jako cnota, nie państwowy monopol godzin.",
      },
      {
        topic: "Konopie",
        chapter: "zdrowie",
        rl: "≤15 g przy sobie / 30 g w domu — nie przestępstwo. Powyżej: wykroczenie. Obrót tylko państwowy. Zakaz uprawy prywatnej. Sprzedaż od 21. Edukacja o psychozie, nie „święte zioło”.",
        nl: "NL 2023: legalizacja + uprawa własna + amnestia — wolniejsze niż RL. Razem: linia bliższa NL 2023.",
        ko: "KO: depenalizacja w sporze koalicyjnym, nie państwowy sklep.",
        pis: "PiS/R+: przeciw legalizacji.",
        konf: "Konf.: część libertarian za depenalizacją, część RN przeciw. KKP: przeciw.",
      },
    ],
  },
  {
    id: "uczciwa-polityka",
    chapters: ["uczciwa-polityka"],
    rows: [
      {
        topic: "Finanse kampanii",
        chapter: "uczciwa-polityka",
        rl: "Max 5000 zł/os./rok. Zakaz płatnych billboardów i reklamy komercyjnej w przestrzeni publicznej.",
        nl: "NL: jawność, limity — mniej radykalny zakaz. Razem: odchudzenie kranika; 5000 pojawia się w logice RL.",
        ko: "KO: limity ustawowe, nie zakaz billboardów. 2050: nowa polityka, bez tego zakazu.",
        pis: "PiS: duże budżety, billboardy. R+: nie ten zakaz.",
        konf: "Konf.: Mentzen buduje na socialu i zrzutkach. KKP: darowizny, nie 5000 jako flaga.",
      },
      {
        topic: "Karencja / nepotyzm / kadencje",
        chapter: "uczciwa-polityka",
        rl: "2 lata zakazu RN spółek SP i pracy u wykonawców. Max 3 kadencje z rzędu + 1 przerwa + znów max 3. Publiczny rejestr powiązań rodzinnych.",
        nl: "NL: drzwi obrotowe ogólniej. Razem: koniec świętych krów. Brak limitu 3+1+3 u obu.",
        ko: "KO: depolityzacja SP — częściowo. UC IX 2026: limit 3 kadencji z rzędu — zbieżne z RL. PSL: wieloletni mandat wiejski.",
        pis: "PiS: wielokrotne kadencje jako norma. R+: szacunek dla prezydenta, nie limit 3+1+3.",
        konf: "Konf.: mniej państwa = mniej nepotyzmu „z definicji”. KKP: lojalność, nie rejestr rodziny.",
      },
      {
        topic: "Konkursy / sądy",
        chapter: "uczciwa-polityka",
        rl: "Od dyrektora departamentu — tylko konkurs. Bezpłatna baza aktów i orzecznictwa. Podwyżki w sądach i prokuraturze.",
        nl: "NL: profesjonalizacja służby, naprawy wymiaru. Razem 2025 wg KP słabiej adresuje kryzys TK.",
        ko: "KO: KRS, SN, TSUE — flaga 2023, spór z prezydentem 2025–26.",
        pis: "PiS: własna KRS 2017–23. R+: sprawne państwo, nie kasacja weta.",
        konf: "Konf.: usprawnić sądy, nie podwyżki jako flaga. KKP: sądy „niezależne od Brukseli”.",
      },
    ],
  },
  {
    id: "mieszkanie",
    chapters: ["mieszkanie"],
    verdict:
      "Filozofia „mieszkanie prawem” = RL, NL, Razem. NL obiecała więcej sztuk i dowiozła mniej. RL obiecuje mniej, ale podpina earmark 1% — uczciwsze księgowo, politycznie trudniejsze (nowa pozycja na odcinku). KO stawia na podaż i grunty SP. Konfederacja stawia na deregulację. PiS/R+/KKP — własność i kredyt, nie danina od funduszu płac.",
    rows: [
      {
        topic: "Skala / finansowanie",
        chapter: "mieszkanie",
        rl: "25–40 tys. komunalnych i limited-profit rocznie — tyle, ile uniesie danina 1% funduszu płac (0,5+0,5), widoczna na odcinku. Ziemia publiczna niesprzedawana. Raz zbudowane = publiczne na zawsze.",
        nl: "NL 2023: 300 tys. w 5 lat (60 tys./rok); ustawa do 45 mld do 2030; realizacja 2026: budowa+remont 18 tys. Razem: program najmu z budżetu, nie danina od płacy.",
        ko: "KO: uwolnienie gruntów SP, rewitalizacja pustostanów — podaż, nie 1% daniny. 2050: mieszkania jako jakość życia. PSL: budownictwo gminne na wsi.",
        pis: "PiS: Mieszkanie+, credyty. R+: demografia (pensja rodzicielska 0–3), nie 40 tys. komunalnych z daniny.",
        konf: "Konf.: deregulacja, odrolnienie, mniej norm — więcej mieszkań z rynku, nie z daniny. KKP: rodzina we własnym, nie zasób publiczny.",
      },
      {
        topic: "3. mieszkanie / Airbnb / najem",
        chapter: "mieszkanie",
        rl: "3. i 4.: 1%/rok; od 5.: 2%. Dwa pierwsze wolne. Pustostan >12 mies. jak 3. Licencja gminy, cały lokal max 90 dni. Kaucja ≤1 miesiąc, urząd sporów, w deficycie inflacja+1 pp.",
        nl: "NL: projekt podatku od 3. (priorytety 2025/26) — zbieżne. Kaucja 1 mies. (2023 pkt 153). Razem: progresja od wartości, blokada funduszy, zakaz eksmisji na bruk.",
        ko: "KO: regulacja krótkiego najmu słabsza. PSL: nie ten podatek.",
        pis: "PiS: własność święta, opór wobec podatku od 3.",
        konf: "Konf.: przeciw podatkowi katastralnemu / od 3. KKP: własność.",
      },
      {
        topic: "Urbanistyka",
        chapter: "mieszkanie",
        rl: "Standardy (zieleń, szkoła, komunikacja). 20% nowych mieszkań społecznych w planach.",
        nl: "NL: osiedla z usługami. Razem: min. 25 m², stop mikroapartamentom, deweloper oddaje część do zasobu.",
        ko: "KO: plany, odrolnienie sporne z PSL.",
        pis: "PiS: specustawy.",
        konf: "Konf.: mniej planów, więcej budowy.",
      },
    ],
  },
  {
    id: "opieka",
    chapters: ["opieka"],
    rows: [
      {
        topic: "Waloryzacja / emerytury / KRUS",
        chapter: "opieka",
        rl: "Automat 1 stycznia: inflacja albo wzrost płac — co wyższe (bez emerytur/rent w tej formule). Jeden system, wiek 65 dla wszystkich; wiek kobiet stopniowo w górę. KRUS znika.",
        nl: "NL: zachowanie KRUS w koalicji z PSL. Razem XI 2025: likwidacja KRUS — zbieżne z RL.",
        ko: "KO: nie likwiduje KRUS (warunek PSL). 2050: umiar. PSL: KRUS jako tożsamość.",
        pis: "PiS: 13. i 14. emerytura, KRUS zostaje. R+: pensja rodzicielska 0–3 = min. krajowa; 1/8 składki dziecka na rodziców — inna oś niż 65 dla kobiet.",
        konf: "Konf.: dobrowolny ZUS, nie jeden system 65. KKP: rodzina i wieś, KRUS raczej zostaje.",
      },
      {
        topic: "OzN / renta / urlop / alimenty",
        chapter: "opieka",
        rl: "Asystencja 30–240 h/mies. od r. 1, wszystkie wieku. PJM jako język mniejszości. Renta nie ginie przy dorobieniu. 480 dni do 12 r.ż.; 90 nieprzenoszalne. FA do 1000 zł + ściganie.",
        nl: "NL: Aktywny Rodzic wdrożony; asystencja w toku, nie w tej skali od dnia 1. 2023: alimenty jak podatki. Razem: karta OzN, dłuższy urlop.",
        ko: "KO: babciowe, alimenty, bon. PSL: rodzina tradycyjna.",
        pis: "PiS: 500+/800+, babcia. R+: Pensja Rodzicielska 0–3.",
        konf: "Konf.: transfery = rozdawnictwo. KKP: matka w domu, nie 240 h asystenta z budżetu.",
      },
      {
        topic: "Przemoc / bezdomność",
        chapter: "opieka",
        rl: "Jedno centrum, całodobowe OIK. Senioralne i chronione. „Najpierw mieszkanie” + pełnomocnik ds. wygaszenia bezdomności.",
        nl: "NL: nowa definicja zgwałcenia od II 2025 — wdrożone. Schrony 34 mld. Razem: najpierw mieszkanie, zakaz eksmisji na bruk.",
        ko: "KO: polityka antyprzemocowa w konkretach 2023.",
        pis: "PiS: „Stop pedofilii” jako inna oś.",
        konf: "Konf./KKP: rodzina, nie OIK jako flaga.",
      },
    ],
  },
  {
    id: "nauka-szkola",
    chapters: ["nauka", "szkola"],
    rows: [
      {
        topic: "Uczelnie / doktoranci / NCN",
        chapter: "nauka",
        rl: "Waloryzacja subwencji ≥ inflacja. B+R do 3% PKB. Doktorant na umowie o pracę. NCN: ≥1 z 5 projektów. PAN: budżet bazowy. Nadzór nad „fabrykami dyplomów”.",
        nl: "NL: program dla nauki I 2025, więcej statutowego. Razem: etat zamiast śmieciówki akademickiej.",
        ko: "KO: autonomia uczelni, ewaluacja. 2050: innowacje.",
        pis: "PiS: Narodowy Program, reformy Gowina. R+: rozwój, nie umowa o pracę dla doktoranta jako flaga.",
        konf: "Konf.: Mentzen — płatne studia (kontrowersja 2025). KKP: KINGS jako kongres, nie 3% PKB.",
      },
      {
        topic: "Studenci / OA / HSS",
        chapter: "nauka",
        rl: "Stypendium socjalne = 50% płacy min. 20 tys. miejsc w akademikach / 8 lat. Stołówki non-profit. OA ze środków pub. Osobna pula humanistyki.",
        nl: "NL 2023: 1000 zł dla każdego studenta do 26 — hojniejsze. Razem: akademiki, tanie stołówki.",
        ko: "KO: kredyty, akademiki punktowo.",
        pis: "PiS: stypendia ministra.",
        konf: "Konf.: mniej stypendiów powszechnych.",
      },
      {
        topic: "Szkoła: obiad, prywatne, klasy",
        chapter: "szkola",
        rl: "Bezpłatny obiad do 150% min. socjalnego. Gwarantowane miejsce w żłobku/przedszkolu/szkole. For-profit bez dotacji. Max 20 (1–3) i 25 (starsze).",
        nl: "NL 2023: bezpłatne obiady w podstawówce (szersze). Żłobek w każdej gminie — wdrożone. Razem: max 20 w oddziale — twardsze w starszych klasach.",
        ko: "KO: ograniczenie prac domowych — spełnione częściowo; podwyżki nauczycieli 2024. PSL: szkoła gminna, religia.",
        pis: "PiS: „lex Czarnek”, religia, patriotyzm. R+: tożsamość, nie 20 osób.",
        konf: "Konf.: mniej ideologii, autonomia rodziców. KKP: wychowanie zgodne z przekonaniami rodziców, religia w szkole.",
      },
      {
        topic: "Program / egzaminy",
        chapter: "szkola",
        rl: "70–80% wspólnego rdzenia + aneks regionalny. Zniesienie egzaminu ósmoklasisty. Kl. 1–2: zabawa. Prace limitowane 4–6. Liceum nie wcześniej niż 8:30.",
        nl: "NL: „deczarnkizacja”, edukacja seksualna i zdrowotna, religia poza siatką. Razem: zbieżne z 8:30 i limitem prac.",
        ko: "KO: odpolitycznienie, lżejszy plecak. 2050: kompetencje.",
        pis: "PiS: egzaminy, kanon, religia w siatce.",
        konf: "Konf./KKP: przeciw edukacji seksualnej jako „ideologii”; KKP — prawa rodziców absolutne.",
      },
    ],
  },
  {
    id: "wolnosc",
    chapters: ["wolnosc"],
    rows: [
      {
        topic: "Kościół / Fundusz / kapelani",
        chapter: "wolnosc",
        rl: "Fundusz wygaszany 3 lata (100/50/0). Religia całkowicie poza szkołą publiczną. Wypowiedzenie lub renegocjacja Konkordatu w części szkolnej i finansowej. Kapelani nie z budżetu.",
        nl: "NL 2023: wypowiedzenie Konkordatu, religia do salki, opodatkowanie Kościoła. Priorytet 2030: świeckie państwo — w koalicji nierozliczone. Razem: likwidacja Funduszu, dobrowolny podatek, religia poza siatką.",
        ko: "KO: świeckość w umowie koalicyjnej, hamulec PSL. 2050: religia poza siatką jako kierunek.",
        pis: "PiS: sojusz z Kościołem, Fundusz zostaje. R+: chadecja, nie wygaszanie 100/50/0.",
        konf: "Konf.: RN bliżej Kościoła, libertarianie — mniej budżetu na kult. KKP: Ad Maiorem Dei Gloriam; Fundusz i kapelani zostają, Konkordat święty.",
      },
      {
        topic: "Małżeństwo / trans",
        chapter: "wolnosc",
        rl: "Małżeństwo i wspólna adopcja niezależnie od płci. Partnerskie jako opcja dodatkowa, nie substytut. Trans: medyczna od 18, prawna od 16 za zgodą.",
        nl: "NL: pełna równość; ustawa o osobie najbliższej — Sejm+Senat, weto prezydenta VII 2026. Transkrypcja zagranicznych małżeństw jednopłciowych od VIII 2026. Razem: jedna instytucja + adopcja; trzecia płeć w dokumentach (RL nie ma).",
        ko: "KO: związki partnerskie w konkretach — zablokowane wetem. PSL: nie. 2050: tak.",
        pis: "PiS/R+: małżeństwo kobieta–mężczyzna.",
        konf: "Konf.: Mentzen przeciw „ideologii”. KKP: małżeństwo sakramentalne, przeciw trans.",
      },
      {
        topic: "Konwersja / art. 196 / nienawiść",
        chapter: "wolnosc",
        rl: "Zakaz terapii konwersyjnych. SO i tożsamość jako przesłanka hate crime. Mowa nienawiści ścigana; krytyka religii/władzy/idei — nie. Uchylenie art. 196 kk.",
        nl: "NL: uchylenie 196 i 212; nowa definicja zgwałcenia (2025). Razem: zakaz konwersji, uchylenie 196, wolność krytyki religii.",
        ko: "KO: mowa nienawiści z urzędu (umowa) — częściowo. 196 zostaje (brak większości + weto).",
        pis: "PiS: 196 zostaje, „obraza uczuć” jako tarcza.",
        konf: "Konf.: wolność słowa, 196 raczej zostawić albo nie ruszać. KKP: 196 zostaje, bluźnierstwo ścigane.",
      },
      {
        topic: "Zwierzęta",
        chapter: "wolnosc",
        rl: "Zakaz niehumanitarnego chowu/uboju, ferm futrzarskich, klatek, cyrków. Rzecznik Praw Zwierząt. Koniec współfinansowania polowań.",
        nl: "NL 2023 pkt 47: identyczny pakiet (futra do 2027). Razem: karta praw zwierząt.",
        ko: "KO: ustawa o psach i kotach podpisana VI 2026. PSL: łowiectwo i hodowla.",
        pis: "PiS: łowiectwo. R+: nie ten pakiet.",
        konf: "Konf./KKP: tradycja polowań, hodowla; KKP — człowiek ponad zwierzęciem.",
      },
      {
        topic: "Praca seksualna",
        chapter: "wolnosc",
        rl: "Model nordycki: kara dla klienta, dekryminalizacja osób świadczących + exit support.",
        nl: "NL: nie flaga 2023. Razem: raczej prawa świadczących; model nordycki nie zawsze eksponowany.",
        ko: "KO/PSL: status quo kk.",
        pis: "PiS: penalizacja obu stron w praktyce moralnej.",
        konf: "Konf.: deregulacja albo status quo. KKP: grzech, nie nordycki model.",
      },
    ],
  },
  {
    id: "przyroda-europa-obrona",
    chapters: ["przyroda", "europa", "obrona"],
    rows: [
      {
        topic: "Lasy / wody / Bałtyk",
        chapter: "przyroda",
        rl: "Nowe i powiększone PN. Lasy Państwowe nigdy nieprywatyzowane. Priorytet starodrzewu. Wody Polskie: ekosystem, nie żegluga. Zakaz zabudowy zalewowej. Ochrona Bałtyku, odbudowa ryb.",
        nl: "NL: rewilding, mokradła, Fundusz Kruszenia Betonu 3 mld. Kaucja wdrożona X 2025. Razem: nowe PN (Karpaty, Jura, Mazury).",
        ko: "KO: społeczny nadzór nad lasami — ustawa w toku; zakaz spalania pełnowartościowego drewna. 2050: klimat jako DNA. PSL: gospodarka leśna, nie rewilding.",
        pis: "PiS: Lasy jako skarb + wycinka. R+: rozwój, nie nowe PN jako flaga.",
        konf: "Konf.: własność i gospodarka zasobem. KKP: Pan Bóg dał ziemię człowiekowi.",
      },
      {
        topic: "Rolnictwo",
        chapter: "przyroda",
        rl: "Gosp. ≤50 ha: kontrakt 36 mies. z ceną min. Wsparcie na metan bez przymusu redukcji stada. Cło wyrównawcze + klauzule lustrzane (Mercosur).",
        nl: "NL: opłacalne rolnictwo, sprzeciw taniego importu. Razem: przeciw UE–Mercosur (XII 2024).",
        ko: "KO: Zielony Ład vs PSL. PSL: twardy sprzeciw Mercosur i ETS2 na wieś.",
        pis: "PiS: embargo, dopłaty. R+: stop ZŁ.",
        konf: "Konf.: obrona rolnictwa przed ZŁ. KKP: chłop i ziemia.",
      },
      {
        topic: "UE / NATO / Ukraina",
        chapter: "europa",
        rl: "5. kraj UE, współtworzy decyzje. Europejskie zdolności + bliżej DE i FR. NATO fundament. Wsparcie UA wojskowe i gospodarcze jako inwestycja we własne bezpieczeństwo. Ścieżka UA do NATO już teraz.",
        nl: "NL: silna PL w silnej UE, PES. Razem: suwerenistyczny język + pogłębianie UE; NATO w deklaracji 2025 słabo obecne (KP); wsparcie UA, odrzucenie tezy o winie NATO.",
        ko: "KO: trzon pro-UE i pro-UA. 2050: federalizujący ton. PSL: UE tak, federalizm nie.",
        pis: "PiS: UE jako arena, NATO + USA. R+: NATO, Intermarium, bazy USA, szacunek dla Nawrockiego.",
        konf: "Konf.: Mentzen — dalsze wsparcie UA pod warunkiem Wołynia; nie wspólna armia UE. KKP: „Polska za pokojem”, nie być stroną wojny, krytyka eskalacji; Braun IX 2026 zrywa spotkanie z rosyjską opozycją w PE — linia niejednoznaczna wobec Kremla.",
      },
      {
        topic: "Wydatki obronne / rezerwa",
        chapter: "obrona",
        rl: "Zostają 4,8–5,2% PKB (MON+FWSZ). 6% poza kadencją. Dobrowolna płatna rezerwa: 500–800 zł gotowości, 300–400 zł/dzień. Kanał: WOT.",
        nl: "NL: silny przemysł, Karta Rodziny Mundurowej, bez obietnicy 6%. Razem: samodzielność obronna Europy, mniej % PKB.",
        ko: "KO: priorytet bezpieczeństwa w umowie, obrona cywilna. 2050: umiar fiskalny vs 5%.",
        pis: "PiS: 4%+ jako dziedzictwo. R+: rozbudowa armii, bazy USA.",
        konf: "Konf.: silna armia, nie Wojsko Polskie w Ukrainie. KKP: WP broni Polski, nie cudzej wojny.",
      },
      {
        topic: "Schrony / leki / służby",
        chapter: "obrona",
        rl: "Doktryna Obronowa w 12 mies. Schrony w nowych publ. i osiedlach >50 lokali. Rezerwa leków 6 mies. + państwowa wytwórnia generyków. Sądowa kontrola policji i służb.",
        nl: "NL: ustawa o ochronie ludności 2025, schrony 34 mld. Razem: suwerenność lekowa jako flaga 2025.",
        ko: "KO: odbudowa obrony cywilnej (umowa pkt 1).",
        pis: "PiS: WOT, schrony punktowo. R+: Bezpieczna Polska.",
        konf: "Konf.: służby pod kontrolą, nie rozbudowa aparatu. KKP: ustawa o agentach IX 2026 — jawność wpływów zagranicznych.",
      },
      {
        topic: "Nuclear sharing",
        chapter: "obrona",
        rl: "Pełny udział w natowskim nuclear sharing, broń na terytorium PL, certyfikacja F-35.",
        nl: "NL 2023: brak. Razem: brak. Unikat RL na tle lewicy.",
        ko: "KO: nie flaga; F-35 w programie zbrojeniowym rządu.",
        pis: "PiS: F-35 zamówione; sharing nie jako uchwała programowa. R+: NATO silne, sharing możliwy.",
        konf: "Konf.: atom sojuszniczy sporny. KKP: nie rozmieszczać obcej broni jądrowej jako totem.",
      },
    ],
  },
  {
    id: "ustroj",
    chapters: ["ustroj", "media", "nazwa"],
    title: "Ustrój, media, symbolika",
    rows: [
      {
        topic: "Prezydent",
        chapter: "ustroj",
        rl: "Traci weto ustawodawcze i prawo łaski.",
        nl: "NL: naprawa praworządności, nie kasacja weta. W praktyce 2025–26 weto Nawrockiego blokuje osoby najbliższe i część pracy. Razem: brak kasacji weta jako flagi 2025.",
        ko: "KO: spór z prezydentem, nie zmiana konstytucji o wetach. PSL: prezydent jako hamulec bywa wygodny.",
        pis: "PiS: silny prezydent (doświadczenie 2015–23). R+: „szacunek dla prezydenta wybranego przez naród” — antyteza kasacji weta.",
        konf: "Konf.: silny prezydent vs cienki Sejm (historycznie Rada Stanu u NN). KKP: prezydent jako pomazaniec narodu, nie urzędnik bez weta.",
      },
      {
        topic: "Demokracja bezpośrednia",
        chapter: "ustroj",
        rl: "Model szwajcarski ×4,09: inicjatywa konst. 410 tys./18 mies.; weto ludowe 205 tys./100 dni. Każda zmiana konstytucji — referendum, większość głosujących. Max 4 głosowania/rok. Działa też przeciw RL.",
        nl: "NL: referenda ostrożnie. Razem XI 2025: likwidacja Senatu (RL o Senacie milczy).",
        ko: "KO: konsultacje, nie szwajcarski pakiet. PSL: sejmiki. 2050: nowa polityka.",
        pis: "PiS: referenda jako narzędzie władzy (2015–23 rzadko). R+: nie ten pakiet.",
        konf: "Konf.: Demokracja Bezpośrednia jako koło (Kukiz/Sachajko) — duch referendów, inne progi. KKP: naród i Bóg, nie 205 tys. jako procedura.",
      },
      {
        topic: "Ordynacja",
        chapter: "ustroj",
        rl: "Sejm 460, MMP: 230 JEDNO + lista. Mandaty z listy w pełni proporcjonalne. Próg 5%, wyjątek: 3 okręgi. Nadwyżka obcinana najsłabszym. Komisja granic ±15%, rewizja co 10 lat.",
        nl: "NL: zachowanie PR. Razem: demokratyzacja, nie ten MMP.",
        ko: "KO: PR, okręgi. PSL: obawa przed JOW (zjada małych).",
        pis: "PiS: d’Hondt, próg 5/8.",
        konf: "Konf.: bywa za JOW / mieszanym — częściowe podobieństwo do 230 JEDNO, bez kompensacji listy RL.",
      },
      {
        topic: "Media publiczne",
        chapter: "media",
        rl: "Rady 2/3, kadencje rozjechane z parlamentem. Bez polityków w radach. 6 lat wdrażania. Abonament 50 zł/rok, 75+ wolne.",
        nl: "NL: ustawa medialna w MKiDN — spór koalicyjny 2024–26. Razem: niezależne media publiczne.",
        ko: "KO: depolityzacja TVP 2023–24 — siłowe przejęcie, potem dryf. 2050: Hołownia, instytucje.",
        pis: "PiS: TVP jako łup 2015–23. R+: nie ten model 2/3.",
        konf: "Konf.: zlikwidować abonament / uciąć TVP. KKP: media „niekłamliwe”, nie 50 zł.",
      },
    ],
  },
];

export const COMPARE_LEDGER = {
  intro:
    "Tylko Realna Lewica publikuje linię po linii, z deficytem i zastrzeżeniem, że uszczelnienie nie wchodzi do rachunku. NL 2023 prawie nie liczyła programu. Razem 2025 nie dało tabeli kadencyjnej. KO liczyła „100 konkretów”, nie dziurę 0,6–1% PKB. PiS liczył transfery bez pełnego salda. Konfederacja obiecuje cięcia podatków bez tabeli ubytku. KKP i R+ nie publikują aneksu.",
  rows: [
    {
      item: "Wydatki dodatkowe (środek)",
      y1: "~70 mld",
      y5: "~125 mld",
      note: "Głównie: 4-dniowy tydzień w budżetówce 25–45; waloryzacja świadczeń 20–25; połowa drogi do 7% zdrowia 10–15. Żadna partia rządząca nie kładzie 4 dni w roku 1–2.",
    },
    {
      item: "Wpływy ogólne (bez daniny i earmarku akcyzy)",
      y1: "~45 mld",
      y5: "~80 mld",
      note: "Zniesienie 30-krotności 8–12; CIT 22% 5–8; koniec ulg 5–7. Zrównanie wieku 65: 3–6 w kadencji, docelowo 20–30. Konfederacja idzie odwrotnie (ciąć stawki).",
    },
    {
      item: "Dziura programu",
      y1: "~25 mld (0,6% PKB)",
      y5: "~45 mld (1% PKB)",
      note: "Rozrzut w roku 5: od ~0 do ~120 mld — RL to mówi wprost. Start: deficyt 2025 7,3%; 2026e 6,8%. Dług EDP 2025 59,7%; 2026e 62–64%.",
    },
    {
      item: "Deficyt po programie",
      y1: "~7,4%",
      y5: "~7,5–8%",
      note: "Nie domyka kryterium 3% UE → dlatego brak daty euro. KO/2050 chcą ścieżki do euro bez tej tabeli.",
    },
    {
      item: "Danina mieszkaniowa 1%",
      y1: "15–18 mld → 25–40 tys. mieszkań",
      y5: "to samo w skali",
      note: "Unikat RL. NL finansuje z budżetu+KPO i dowozi 18 tys. w 2026. Konfederacja daniny nie wprowadzi.",
    },
    {
      item: "Akcyza alkohol+konopie ponad 2027",
      y1: "~3–5 mld/rok na psychiatrię",
      y5: "earmark",
      note: "Nikt inny nie earmarkuje akcyzy w ten sposób. Mentzen jako browarnik jest antytezą pakietu.",
    },
    {
      item: "Atom",
      y1: "dług Funduszu, widoczny w EDP",
      y5: "12 GW / 20–25 lat",
      note: "Razem: 8 bloków/12 GW bez tabeli długu. R+: przyspieszyć EJ+SMR. KO kontynuuje budowę.",
    },
  ],
};

export const CONVERGENCE: { title: string; items: string[] }[] = [
  {
    title: "Gdzie RL stoi z lewicą (NL, Razem) i deklaracjami KO 2023",
    items: [
      "Aborcja do 12. tygodnia, in vitro ze środków publicznych, świecka szkoła, koniec Funduszu Kościelnego, równość małżeńska i adopcja — u KO zablokowane wetem 2025–26, u PSL/PiS/R+/Konf./KKP odrzucone.",
      "Koniec śmieciówek i darmowych staży, wzmocnienie PIP — NL już wdrożyła VII 2026; KO współgłosowała; Konfederacja jest przeciw.",
      "Mieszkanie jako prawo, zakaz wyprzedaży zasobu, podatek od 3. mieszkania — NL/Razem tak, KO podażowo, prawica nie.",
      "Zakaz ferm futrzarskich, klatek, cyrków, Rzecznik — pakiet NL 2023; PSL i KKP po drugiej stronie.",
      "Atom + OZE + kolej — zbieżność z Razem i częściowo z R+/PiS (atom, CPK, kolej), nie z Konfederacją w warstwie „państwowy holding”.",
    ],
  },
  {
    title: "Gdzie RL ≈ Razem 2025, a nie reszta Sejmu",
    items: [
      "Tytuł i konstrukcja „Polski z atomu, krzemu i stali”, 12 GW, zniesienie limitu 60% PKB, jeden fundusz inwestycyjny.",
      "Likwidacja KRUS i liniowego/ryczałtu, duchowni na zasadach ogólnych, zniesienie 30-krotności.",
      "Finansowanie zdrowia wprost z budżetu (bez NFZ jako kasy).",
    ],
  },
  {
    title: "Gdzie RL ≈ twarde centrum / prawica, a nie NL i Razem",
    items: [
      "Kontrola granicy, ośrodki, zawieszenie azylu ze stropem, wydalenie po odmowie — język bliższy PiS/R+/Konfederacji niż Razem 2024 (sprzeciw pushbackom).",
      "NATO jako fundament i nuclear sharing — z KO/PiS/R+, nie z Razem 2025.",
      "Brak daty euro i brak skoku do 6% PKB na armię w kadencji — „realizm” fiskalny, który PSL i Konfederacja rozumieją inaczej, ale też nie obiecują obu naraz.",
      "Próg płacowy 90% mediany dla cudzoziemców — narzędzie lewicowe o skutku zbliżonym do postulatu Konfederacji „mniej taniej siły roboczej”, innym uzasadnieniem.",
    ],
  },
];

/** Unikaty Realnej Lewicy — nie ma ich w tej formie u żadnej partii sejmowej. */
export const UNIQUES: string[] = [
  "Osobny, twardy rozdział migracyjny z Agencją, Sądem, limitem ~3200, 10 tys. za powrót i progiem 90/75% mediany.",
  "Aneks kosztów z dziurą 0,6–1% PKB i zakazem liczenia uszczelnienia.",
  "Szwajcarski pakiet 410/205 tys. podpisów + obowiązkowe referendum konstytucyjne + weto ludowe.",
  "Odebranie prezydentowi weta i prawa łaski — wprost przeciw R+ („szacunek dla prezydenta”) i praktyce 2026.",
  "Ordynacja mieszana 230 JEDNO + lista kompensacyjna, 460 mandatów, wyjątek 3 okręgów.",
  "Nuclear sharing i certyfikacja F-35 jako punkt programu, nie wzmianka.",
  "Danina mieszkaniowa 1% funduszu płac jako jedyne źródło 25–40 tys. mieszkań.",
  "Skala PIT 12/32/48/56/71 + danina → 60/75% oraz podatek majątkowy 1–8% od 7 mln.",
  "Harmonogram Linuxa: 50 tys. / 80% administracji i Polskie AI w 36 miesięcy.",
  "Pakiet alkoholowy bliski monopolu godzinowego przy państwowym, nie prywatnym rynku konopi.",
  "Etapowany 4-dniowy tydzień z progiem 250 pracowników i oceną po 18 miesiącach.",
  "Wspomagane zakończenie życia (komisja lekarska).",
  "Model nordycki wobec pracy seksualnej.",
  "Limit 3+1+3 kadencji poselskich i rejestr nepotyzmu (limit 3 kadencji pojawia się też u Unii Centrum IX 2026).",
];

/** Antymodele — co która partia zrobiłaby odwrotnie. */
export const ANTIMODELS: { party: string; bloc: BlocId; text: string }[] = [
  {
    party: "Nowa Lewica",
    bloc: "nl",
    text: "Szerszy katalog 2023 (8% PKB, 60 tys. mieszkań, 1000 zł dla studenta, 100% na L4, obiady dla całej podstawówki, uprawa konopi). Mandat wdrożeniowy i jednocześnie porażki wetem: aborcja, osoba najbliższa, Fundusz Kościelny, 4 dni.",
  },
  {
    party: "Razem",
    bloc: "nl",
    text: "Likwidacja Senatu, trzecia płeć, uprawa konopi, 35h od razu, 8% PKB, azyl bez limitu 3200, deweloper oddaje lokale, zakaz <25 m². Milczenie o nuclear sharing i wetach prezydenta.",
  },
  {
    party: "KO",
    bloc: "ko",
    text: "0% PIT na dole zamiast 71% na górze. Zniesienie zakazu handlu w niedzielę bez 250%. mObywatel zamiast Linuxa. In vitro — tak; aborcja i partnerskie — nie przeszły. Rządzi, więc odpowiada za 18 tys. mieszkań zamiast 60 tys.",
  },
  {
    party: "PSL",
    bloc: "ko",
    text: "KRUS, Konkordat, kompromis aborcyjny, hamulec ETS2 i Mercosur, szkoła z religią. Warunek koalicji, który ścina zęby NL.",
  },
  {
    party: "Polska 2050 / Unia Centrum",
    bloc: "ko",
    text: "Trzy progi 12/22/32, premia do oszczędności młodych, limit 3 kadencji, klimat jako DNA — bliżej KO niż RL w podatkach, bliżej RL w limicie kadencji.",
  },
  {
    party: "PiS",
    bloc: "pis",
    text: "Transfery (13./14., 800+), sojusz z Kościołem, TK 2020, mur, czempioni narodowi, CPK. Po rozłamie 2026 — klub bez nowego aneksu.",
  },
  {
    party: "Rozwój Plus",
    bloc: "pis",
    text: "10 filarów: patriotyzm, Nawrocki, suwerenna migracja, uszczelnić CIT, przyspieszyć atom, stop ZŁ, CPK, Polska w smartfonie. Chadecja inwestycyjna. Antyteza kasacji weta i podatku 75%.",
  },
  {
    party: "Konfederacja",
    bloc: "konf",
    text: "Ciąć PIT/CIT/VAT, dobrowolny ZUS, nie zwiększać zdrowia, aborcja nie nawet z gwałtu, zamknięcie kulturowe granicy, nie Zielony Ład, nie Wojsko Polskie w Ukrainie bez Wołynia. Gospodarczo — lustrzane odbicie rozdziału 4 RL.",
  },
  {
    party: "Konfederacja Korony Polskiej",
    bloc: "konf",
    text: "Obrona życia, Konkordat, religia w szkole, „Polska za pokojem”, rejestr obcych agentów, suwerenność wobec UE i NATO-jako-eskalacji. Światopoglądowo — pełna antyteza rozdziałów 5 i 11 RL. W granicy — twardsza niż RL, bez progu 90% mediany i bez furtki LGBT w limicie ONZ.",
  },
];

/** Ocena syntetyczna — akapity. Pierwszy służy też jako zajawka na stronie głównej. */
export const SYNTHESIS: string[] = [
  "Realna Lewica to nie jest „Nowa Lewica bis” ani „Konfederacja od lewej”. To jest Razem 2025 przepisane na język budżetu, granicy i konstytucji: ten sam szkielet industrialny i redystrybucyjny, plus twarda polityka migracyjna, plus szwajcarskie hamulce, plus nuclear sharing, plus aneks, który mówi, że 4-dniowy tydzień + 7% PKB na zdrowie + 6% na armię + euro w jednej kadencji się nie spina.",
  "W światopoglądzie (ciało, Kościół, LGBT, zwierzęta) RL stoi z Razem, NL i deklaracjami KO 2023 — czyli przeciw PSL, PiS, R+, Konfederacji i KKP. W granicy i substancjach (alkohol ostrzej, konopie ciaśniej) odchodzi od NL/Razem w stronę nordyckiego państwa opiekuńczego z monopolami i limitami; twardość granicy jest bliższa PiS/R+/Konfederacji niż Razem, ale narzędzie (równa płaca jako warunek wjazdu) jest lewicowe.",
  "W podatkach RL jest maksymalnie redystrybucyjna w całym Sejmie (71/75%). Antymodelem jest Konfederacja (ciąć stawki) i KO (0% na dole). W ustroju RL jest najbardziej antyprezydencka w izbie — w momencie, gdy R+ buduje tożsamość na szacunku dla Nawrockiego, a weto realnie zatrzymuje ustawy lewicy.",
  "Jeśli czytać RL jako dokument polityczny, a nie jako partię zarejestrowaną: to próba zajęcia pola „lewica, która nie boi się granicy i Excela”. Programowo jest bliżej zaktualizowanego Razem niż rządzącej Nowej Lewicy — z wyjątkiem migracji, alkoholu i ustroju, gdzie RL jest osobnym bytem. Wobec reszty Sejmu jest albo sojusznikiem punktowym (atom z R+, Linux nikomu, 4 dni nikomu, 75% PIT nikomu), albo antymodelem (KKP w rozdziałach 5 i 11, Konfederacja w rozdziale 4, PSL w KRUS i Konkordacie).",
];

export function compareRowsFor(slug: string) {
  return COMPARE_SECTIONS.flatMap((section) => section.rows.filter((row) => row.chapter === slug));
}

export function compareSectionFor(slug: string) {
  return COMPARE_SECTIONS.find((section) => section.chapters.includes(slug));
}
