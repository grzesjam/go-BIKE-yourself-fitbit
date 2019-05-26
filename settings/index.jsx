function HelloWorld(props) {
  return (
    <Page >
      <Section
        title={<Text bold align="center">Cities</Text>}>
        <Select
          label={`Pick city`}
          settingsKey="MY_CITY"
          options={[
            {
              "name": "10vorWien",
              "ref": "/v2/networks/nextbike-10vorwien"
            },
            {
              "name": "A Coruña",
              "ref": "/v2/networks/bicicorunha"
            },
            {
              "name": "A Rúa",
              "ref": "/v2/networks/onroll-a-rua"
            },
            {
              "name": "Abu Dhabi",
              "ref": "/v2/networks/adcb-bikeshare"
            },
            {
              "name": "Acquarica del Capo",
              "ref": "/v2/networks/bicincitta-acquarica-del-capo"
            },
            {
              "name": "Acquaviva delle fonti",
              "ref": "/v2/networks/bicincitta-acquaviva-delle-fonti"
            },
            {
              "name": "Al Ain",
              "ref": "/v2/networks/bykystations-uae-al-ain"
            },
            {
              "name": "Alba",
              "ref": "/v2/networks/alba"
            },
            {
              "name": "Albacete",
              "ref": "/v2/networks/onroll-albacete"
            },
            {
              "name": "Alghero",
              "ref": "/v2/networks/bicincitta-alghero"
            },
            {
              "name": "Alhama de Murcia",
              "ref": "/v2/networks/onroll-alhama-de-murcia"
            },
            {
              "name": "Almuñécar",
              "ref": "/v2/networks/onroll-almunecar"
            },
            {
              "name": "Altea",
              "ref": "/v2/networks/bicialtea"
            },
            {
              "name": "Amiens",
              "ref": "/v2/networks/velam"
            },
            {
              "name": "Amstetten",
              "ref": "/v2/networks/nextbike-amstetten"
            },
            {
              "name": "Andria",
              "ref": "/v2/networks/andria"
            },
            {
              "name": "Ann Arbor, MI",
              "ref": "/v2/networks/arborbike"
            },
            {
              "name": "Antalya",
              "ref": "/v2/networks/baksi-antalya"
            },
            {
              "name": "Antequera",
              "ref": "/v2/networks/onroll-antequera"
            },
            {
              "name": "Antwerpen",
              "ref": "/v2/networks/velo-antwerpen"
            },
            {
              "name": "Aracajú",
              "ref": "/v2/networks/cajubike"
            },
            {
              "name": "Aranda de Duero",
              "ref": "/v2/networks/onroll-aranda-de-duero"
            },
            {
              "name": "Aranjuez",
              "ref": "/v2/networks/onroll-aranjuez"
            },
            {
              "name": "Arezzo",
              "ref": "/v2/networks/arbike"
            },
            {
              "name": "Aruba",
              "ref": "/v2/networks/nextbike-aruba"
            },
            {
              "name": "Ascoli Piceno",
              "ref": "/v2/networks/ascoli-piceno"
            },
            {
              "name": "Aspen, CO",
              "ref": "/v2/networks/we-cycle"
            },
            {
              "name": "Assemini",
              "ref": "/v2/networks/bicincitta-assemini"
            },
            {
              "name": "Astana",
              "ref": "/v2/networks/velobike"
            },
            {
              "name": "Athens",
              "ref": "/v2/networks/athens-bikes"
            },
            {
              "name": "Atlanta, GA",
              "ref": "/v2/networks/relay-atlanta"
            },
            {
              "name": "Auckland",
              "ref": "/v2/networks/nextbike-auckland"
            },
            {
              "name": "Auckland Waterfront",
              "ref": "/v2/networks/nextbike-auckland-waterfront"
            },
            {
              "name": "Augsburg",
              "ref": "/v2/networks/swa-rad-augsburg"
            },
            {
              "name": "Austin, TX",
              "ref": "/v2/networks/austin"
            },
            {
              "name": "Avignon",
              "ref": "/v2/networks/velopop"
            },
            {
              "name": "Badajoz",
              "ref": "/v2/networks/onroll-badajoz"
            },
            {
              "name": "Baeza",
              "ref": "/v2/networks/onroll-baeza"
            },
            {
              "name": "Bangkok",
              "ref": "/v2/networks/punpunbikeshare"
            },
            {
              "name": "Banja Luka",
              "ref": "/v2/networks/bl-bike-banja-luka"
            },
            {
              "name": "Barcellona Pozzo di Gotto",
              "ref": "/v2/networks/longanoinbici"
            },
            {
              "name": "Barcelona",
              "ref": "/v2/networks/bicing"
            },
            {
              "name": "Bath",
              "ref": "/v2/networks/nextbike-bath"
            },
            {
              "name": "Battle Creek, MI",
              "ref": "/v2/networks/battlecreek"
            },
            {
              "name": "Batumi",
              "ref": "/v2/networks/batumvelo"
            },
            {
              "name": "Bayonne",
              "ref": "/v2/networks/jerseybike-bayonne"
            },
            {
              "name": "Belfast",
              "ref": "/v2/networks/belfastbikes-belfast"
            },
            {
              "name": "Belo Horizonte",
              "ref": "/v2/networks/bikebh"
            },
            {
              "name": "Belém",
              "ref": "/v2/networks/bikebelem"
            },
            {
              "name": "Benidorm",
              "ref": "/v2/networks/onroll-benidorm"
            },
            {
              "name": "Benidorm",
              "ref": "/v2/networks/bicidorm"
            },
            {
              "name": "Bensheim",
              "ref": "/v2/networks/vrn-bensheim"
            },
            {
              "name": "Bergamo",
              "ref": "/v2/networks/bigi"
            },
            {
              "name": "Bergen",
              "ref": "/v2/networks/bergen-bysykkel"
            },
            {
              "name": "Berlin",
              "ref": "/v2/networks/nextbike-berlin"
            },
            {
              "name": "Berlin",
              "ref": "/v2/networks/berlin-buch-campus-berlin-buch"
            },
            {
              "name": "Berlin",
              "ref": "/v2/networks/callabike-berlin"
            },
            {
              "name": "Besançon",
              "ref": "/v2/networks/velocite-besancon"
            },
            {
              "name": "Bhopal",
              "ref": "/v2/networks/chartered-bike-bhopal-bhopal"
            },
            {
              "name": "Bhopal",
              "ref": "/v2/networks/chartered-bike-bhopal-tata-motors"
            },
            {
              "name": "Bianzone",
              "ref": "/v2/networks/bianzone-in-bici"
            },
            {
              "name": "Białystok",
              "ref": "/v2/networks/biker-bialystok-bialystok"
            },
            {
              "name": "Białystok",
              "ref": "/v2/networks/biker-bialystok-orlen-bialystok"
            },
            {
              "name": "Biella",
              "ref": "/v2/networks/biella"
            },
            {
              "name": "Bielsko-Biała",
              "ref": "/v2/networks/bbbike"
            },
            {
              "name": "Bietigheim-Bissingen",
              "ref": "/v2/networks/ebikestation-bietigheim-bissingen"
            },
            {
              "name": "Bilbao",
              "ref": "/v2/networks/bilbon-bizi"
            },
            {
              "name": "Blanca",
              "ref": "/v2/networks/onroll-blanca"
            },
            {
              "name": "Bochum",
              "ref": "/v2/networks/metropolradruhr-bochum"
            },
            {
              "name": "Boise, ID",
              "ref": "/v2/networks/boise-greenbike"
            },
            {
              "name": "Bonn",
              "ref": "/v2/networks/nextbike-bonn"
            },
            {
              "name": "Borgarello",
              "ref": "/v2/networks/bicincitta-borgarello"
            },
            {
              "name": "Boston, MA",
              "ref": "/v2/networks/blue-bikes"
            },
            {
              "name": "Bottrop",
              "ref": "/v2/networks/metropolradruhr-bottrop"
            },
            {
              "name": "Boulder, CO",
              "ref": "/v2/networks/boulder"
            },
            {
              "name": "Brancaleone",
              "ref": "/v2/networks/bicincitta-brancaleone"
            },
            {
              "name": "Brasília",
              "ref": "/v2/networks/bikebrasilia"
            },
            {
              "name": "Bratislava",
              "ref": "/v2/networks/whitebikes"
            },
            {
              "name": "Bratislava",
              "ref": "/v2/networks/slovnaft-bajk"
            },
            {
              "name": "Bremen",
              "ref": "/v2/networks/wk-bike-bremen-bremen"
            },
            {
              "name": "Brescia",
              "ref": "/v2/networks/bicimia"
            },
            {
              "name": "Brindisi",
              "ref": "/v2/networks/brindisi"
            },
            {
              "name": "Brinje",
              "ref": "/v2/networks/opcina-brinje-brinje"
            },
            {
              "name": "Brisbane",
              "ref": "/v2/networks/citycycle"
            },
            {
              "name": "Bruxelles",
              "ref": "/v2/networks/villo"
            },
            {
              "name": "Budapest",
              "ref": "/v2/networks/bubi"
            },
            {
              "name": "Buenos Aires",
              "ref": "/v2/networks/ecobici-buenos-aires"
            },
            {
              "name": "Buffalo, NY",
              "ref": "/v2/networks/reddy-bike-share"
            },
            {
              "name": "Bulle",
              "ref": "/v2/networks/bicincitta-bulle"
            },
            {
              "name": "Busto Arsizio",
              "ref": "/v2/networks/bici-in-busto"
            },
            {
              "name": "Byblos",
              "ref": "/v2/networks/bike4all-byblos"
            },
            {
              "name": "Bydgoszcz",
              "ref": "/v2/networks/bikeu-bra"
            },
            {
              "name": "Bærum",
              "ref": "/v2/networks/baerum-bysykkel"
            },
            {
              "name": "Bürstadt",
              "ref": "/v2/networks/vrn-burstadt"
            },
            {
              "name": "Cagliari",
              "ref": "/v2/networks/cagliari"
            },
            {
              "name": "Calais",
              "ref": "/v2/networks/vel-in"
            },
            {
              "name": "Carbonia",
              "ref": "/v2/networks/carbonia"
            },
            {
              "name": "Cardiff",
              "ref": "/v2/networks/nextbike-cardiff"
            },
            {
              "name": "Carrara",
              "ref": "/v2/networks/bicincitta-carrara"
            },
            {
              "name": "Casaletto Spartano",
              "ref": "/v2/networks/bicincitta-casaletto-spartano"
            },
            {
              "name": "Cassano d'Adda",
              "ref": "/v2/networks/cassano-d-adda"
            },
            {
              "name": "Castel Guelfo di Bologna",
              "ref": "/v2/networks/bicincitta-castel-guelfo-the-style-outlets"
            },
            {
              "name": "Castellucchio",
              "ref": "/v2/networks/castellucchio"
            },
            {
              "name": "Cd de México",
              "ref": "/v2/networks/ecobici"
            },
            {
              "name": "Celje",
              "ref": "/v2/networks/nomagobikes-celje"
            },
            {
              "name": "Cergy",
              "ref": "/v2/networks/velo2"
            },
            {
              "name": "Cernusco sul Naviglio - Pioltello - Carugate",
              "ref": "/v2/networks/meglio-in-bici"
            },
            {
              "name": "Cesena",
              "ref": "/v2/networks/bicincitta-cesena"
            },
            {
              "name": "Charlotte, NC",
              "ref": "/v2/networks/charlotte"
            },
            {
              "name": "Chattanooga, TN",
              "ref": "/v2/networks/bike-chattanooga"
            },
            {
              "name": "Chicago, IL",
              "ref": "/v2/networks/divvy"
            },
            {
              "name": "Chivasso",
              "ref": "/v2/networks/chivasso"
            },
            {
              "name": "Chorzów",
              "ref": "/v2/networks/kajteroz-chorzowski-rower-miejski-chorzow"
            },
            {
              "name": "Christchurch",
              "ref": "/v2/networks/nextbike-christchurch"
            },
            {
              "name": "Ciechanów",
              "ref": "/v2/networks/ciechanowski-rower-miejski-ciechanow"
            },
            {
              "name": "Cieza",
              "ref": "/v2/networks/onroll-cieza"
            },
            {
              "name": "Cincinnati, OH",
              "ref": "/v2/networks/cincy-red-bike"
            },
            {
              "name": "Cisterna di Latina",
              "ref": "/v2/networks/bicincitta-cisterna-di-latina"
            },
            {
              "name": "Civitavecchia",
              "ref": "/v2/networks/civitavecchia"
            },
            {
              "name": "Clermont-Ferrand",
              "ref": "/v2/networks/c-velo"
            },
            {
              "name": "Cluj-Napoca",
              "ref": "/v2/networks/clujbike"
            },
            {
              "name": "Columbus, OH",
              "ref": "/v2/networks/cogo"
            },
            {
              "name": "Como",
              "ref": "/v2/networks/bici-co"
            },
            {
              "name": "Copenhagen",
              "ref": "/v2/networks/bycyklen"
            },
            {
              "name": "Cork",
              "ref": "/v2/networks/cork"
            },
            {
              "name": "Cremona",
              "ref": "/v2/networks/scegli-in-bici"
            },
            {
              "name": "Créteil",
              "ref": "/v2/networks/cristolib"
            },
            {
              "name": "Cuneo",
              "ref": "/v2/networks/cuneo"
            },
            {
              "name": "Curtin University, Perth, WA",
              "ref": "/v2/networks/curtin-bike-share"
            },
            {
              "name": "Częstochowa",
              "ref": "/v2/networks/czestochowski-rower-miejski-czestochowa"
            },
            {
              "name": "Darmstadt",
              "ref": "/v2/networks/callabike-darmstadt"
            },
            {
              "name": "Dayton, OH",
              "ref": "/v2/networks/linkdayton"
            },
            {
              "name": "Delhi",
              "ref": "/v2/networks/smartbike-delhi-delhi"
            },
            {
              "name": "Denver, CO",
              "ref": "/v2/networks/denver"
            },
            {
              "name": "Des Moines, IA",
              "ref": "/v2/networks/desmoines"
            },
            {
              "name": "Didymoteicho",
              "ref": "/v2/networks/easybike-didymoteicho"
            },
            {
              "name": "Distretto della Riviera-Pays-d'Enhaut",
              "ref": "/v2/networks/bicincitta-riviera"
            },
            {
              "name": "Dobrich",
              "ref": "/v2/networks/nextbike-dobrich"
            },
            {
              "name": "Don Benito - Villanueva",
              "ref": "/v2/networks/onroll-don-benito-villanueva"
            },
            {
              "name": "Dordrecht",
              "ref": "/v2/networks/nextbike-dordrecht"
            },
            {
              "name": "Dortmund",
              "ref": "/v2/networks/metropolradruhr-dortmund"
            },
            {
              "name": "Dresden",
              "ref": "/v2/networks/sz-bike-dresden"
            },
            {
              "name": "Drniš",
              "ref": "/v2/networks/grad-drnis-drnis"
            },
            {
              "name": "Dubai",
              "ref": "/v2/networks/bykystations-uae-dubai"
            },
            {
              "name": "Dublin",
              "ref": "/v2/networks/dublinbikes"
            },
            {
              "name": "Duisburg",
              "ref": "/v2/networks/metropolradruhr-duisburg"
            },
            {
              "name": "Dundee",
              "ref": "/v2/networks/dundee-navigogo-dundee"
            },
            {
              "name": "Dunkerque",
              "ref": "/v2/networks/dkvelo"
            },
            {
              "name": "Düsseldorf",
              "ref": "/v2/networks/nextbike-dusseldorf"
            },
            {
              "name": "Edinburgh",
              "ref": "/v2/networks/edinburgh-cycle-hire"
            },
            {
              "name": "El Campello",
              "ref": "/v2/networks/onroll-el-campello"
            },
            {
              "name": "El Paso, TX",
              "ref": "/v2/networks/elpaso"
            },
            {
              "name": "Elche",
              "ref": "/v2/networks/onroll-elche"
            },
            {
              "name": "Elmas",
              "ref": "/v2/networks/bicincitta-elmas"
            },
            {
              "name": "Enna",
              "ref": "/v2/networks/enna"
            },
            {
              "name": "Ennetmoos",
              "ref": "/v2/networks/nextbike-ennetmoos"
            },
            {
              "name": "Ente Parco Montemarcello Magra",
              "ref": "/v2/networks/bicincitta-ente-parco-di-montemarcello-magra"
            },
            {
              "name": "Eppelheim",
              "ref": "/v2/networks/vrn-eppelheim"
            },
            {
              "name": "Erfurt",
              "ref": "/v2/networks/nextbike-erfurt"
            },
            {
              "name": "Essen",
              "ref": "/v2/networks/metropolradruhr-essen"
            },
            {
              "name": "Evans, GA",
              "ref": "/v2/networks/columbia-county"
            },
            {
              "name": "Exeter",
              "ref": "/v2/networks/co-bikes-exeter"
            },
            {
              "name": "Fargo, ND",
              "ref": "/v2/networks/greatrides"
            },
            {
              "name": "Fellbach",
              "ref": "/v2/networks/ebikestation-fellbach"
            },
            {
              "name": "Ferrara",
              "ref": "/v2/networks/mimuovofe"
            },
            {
              "name": "Ferrol - Narón",
              "ref": "/v2/networks/bici-ferrol-terra"
            },
            {
              "name": "Filderstadt",
              "ref": "/v2/networks/ebikestation-filderstadt"
            },
            {
              "name": "Flensburg",
              "ref": "/v2/networks/nextbike-flensburg"
            },
            {
              "name": "Florina",
              "ref": "/v2/networks/cyclopolis-florina"
            },
            {
              "name": "Forlì",
              "ref": "/v2/networks/bicincitta-forli"
            },
            {
              "name": "Fort Lauderdale, FL",
              "ref": "/v2/networks/broward"
            },
            {
              "name": "Fort Worth, TX",
              "ref": "/v2/networks/fortworth"
            },
            {
              "name": "Fortaleza",
              "ref": "/v2/networks/bicicletar"
            },
            {
              "name": "Frankfurt",
              "ref": "/v2/networks/visa-frankfurt"
            },
            {
              "name": "Frankfurt am Main",
              "ref": "/v2/networks/callabike-frankfurt"
            },
            {
              "name": "Frankfurt am Main Airport",
              "ref": "/v2/networks/callabike-frankfurt-airport"
            },
            {
              "name": "Fribourg",
              "ref": "/v2/networks/bicincitta-agglo-fribourg"
            },
            {
              "name": "Frosinone",
              "ref": "/v2/networks/free-bike-sharing"
            },
            {
              "name": "Gaeta",
              "ref": "/v2/networks/bicincitta-gaeta"
            },
            {
              "name": "Gallipoli",
              "ref": "/v2/networks/bicincitta-gallipoli"
            },
            {
              "name": "Galway",
              "ref": "/v2/networks/galway"
            },
            {
              "name": "Gandía",
              "ref": "/v2/networks/saforbici"
            },
            {
              "name": "Gelsenkirchen",
              "ref": "/v2/networks/metropolradruhr-gelsenkirchen"
            },
            {
              "name": "Genova",
              "ref": "/v2/networks/mobike"
            },
            {
              "name": "Getafe",
              "ref": "/v2/networks/gbici"
            },
            {
              "name": "Gießen",
              "ref": "/v2/networks/nextbike-giessen"
            },
            {
              "name": "Girona",
              "ref": "/v2/networks/girocleta"
            },
            {
              "name": "Glasgow",
              "ref": "/v2/networks/nextbike-glasgow"
            },
            {
              "name": "Gliwice",
              "ref": "/v2/networks/gliwicki-rower-miejski-sgrm-gliwice"
            },
            {
              "name": "Glyfada",
              "ref": "/v2/networks/easybike-glyfada"
            },
            {
              "name": "Goiânia",
              "ref": "/v2/networks/debikegoiania"
            },
            {
              "name": "Gospić",
              "ref": "/v2/networks/grad-gospic-gospic"
            },
            {
              "name": "Greenville, SC",
              "ref": "/v2/networks/greenville"
            },
            {
              "name": "Grodzisk Mazowiecki",
              "ref": "/v2/networks/grm-grodzisk-grodzisk-mazowiecki"
            },
            {
              "name": "Groß Enzersdorf",
              "ref": "/v2/networks/nextbike-gross-enzersdorf"
            },
            {
              "name": "Guadalajara",
              "ref": "/v2/networks/onroll-guadalajara"
            },
            {
              "name": "Guadalajara",
              "ref": "/v2/networks/mibici-guadalajara"
            },
            {
              "name": "Guttenberg",
              "ref": "/v2/networks/jerseybike-guttenberg"
            },
            {
              "name": "Göppingen",
              "ref": "/v2/networks/ebikestation-goppingen"
            },
            {
              "name": "Göteborg",
              "ref": "/v2/networks/goeteborg"
            },
            {
              "name": "Gütersloh",
              "ref": "/v2/networks/nextbike-gutersloh"
            },
            {
              "name": "Haag",
              "ref": "/v2/networks/nextbike-haag"
            },
            {
              "name": "Hamburg",
              "ref": "/v2/networks/stadtrad-hamburg"
            },
            {
              "name": "Hamburg",
              "ref": "/v2/networks/nextbike-hamburg"
            },
            {
              "name": "Hamilton, ON",
              "ref": "/v2/networks/sobi-hamilton"
            },
            {
              "name": "Hamm",
              "ref": "/v2/networks/metropolradruhr-hamm"
            },
            {
              "name": "Heidelberg",
              "ref": "/v2/networks/vrn-heidelberg"
            },
            {
              "name": "Helsinki",
              "ref": "/v2/networks/citybikes-helsinki"
            },
            {
              "name": "Heppenheim",
              "ref": "/v2/networks/vrn-heppenheim"
            },
            {
              "name": "Hergiswil",
              "ref": "/v2/networks/nextbike-hergiswil"
            },
            {
              "name": "Herne",
              "ref": "/v2/networks/metropolradruhr-herne"
            },
            {
              "name": "Herrenberg",
              "ref": "/v2/networks/ebikestation-herrenberg"
            },
            {
              "name": "Hoboken",
              "ref": "/v2/networks/jerseybike-hoboken"
            },
            {
              "name": "Hockenheim",
              "ref": "/v2/networks/vrn-hockenheim"
            },
            {
              "name": "Hollabrunn",
              "ref": "/v2/networks/nextbike-hollabrunn"
            },
            {
              "name": "Holzgerlingen",
              "ref": "/v2/networks/ebikestation-holzgerlingen"
            },
            {
              "name": "Horw",
              "ref": "/v2/networks/nextbike-horw"
            },
            {
              "name": "Houston, TX",
              "ref": "/v2/networks/houston"
            },
            {
              "name": "Hyderabad",
              "ref": "/v2/networks/nextbike-hyderabad"
            },
            {
              "name": "Igoumenitsa",
              "ref": "/v2/networks/easybike-igoumenitsa"
            },
            {
              "name": "Imola",
              "ref": "/v2/networks/bicincitta-imola"
            },
            {
              "name": "Indianapolis, IN",
              "ref": "/v2/networks/indiana-pacers-bikeshare"
            },
            {
              "name": "Innsbruck",
              "ref": "/v2/networks/stadtrad-innsbruck"
            },
            {
              "name": "Ioannina",
              "ref": "/v2/networks/easybike-ioannina"
            },
            {
              "name": "Ipaússu",
              "ref": "/v2/networks/dukebike"
            },
            {
              "name": "Irakleio",
              "ref": "/v2/networks/easybike-irakleio"
            },
            {
              "name": "Istanbul",
              "ref": "/v2/networks/baksi-istanbul"
            },
            {
              "name": "Ivanic Grad",
              "ref": "/v2/networks/grad-ivanic-grad-ivanic-grad"
            },
            {
              "name": "Izmir",
              "ref": "/v2/networks/baksi-bisim"
            },
            {
              "name": "Jastrebarsko",
              "ref": "/v2/networks/jastrebarsko-jastrebarsko"
            },
            {
              "name": "Jastrzębie-Zdrój",
              "ref": "/v2/networks/nextbike-jastrzebie-zdroj"
            },
            {
              "name": "Jaén",
              "ref": "/v2/networks/onroll-jaen"
            },
            {
              "name": "Jesi",
              "ref": "/v2/networks/jesinbici"
            },
            {
              "name": "Jūrmala",
              "ref": "/v2/networks/sixt-jurmala"
            },
            {
              "name": "Kaiserslautern",
              "ref": "/v2/networks/vrn-kaiserslautern"
            },
            {
              "name": "Kalisz",
              "ref": "/v2/networks/kaliski-rower-miejski-kalisz"
            },
            {
              "name": "Kansas City, MO",
              "ref": "/v2/networks/kansascity"
            },
            {
              "name": "Karditsa",
              "ref": "/v2/networks/easybike-karditsa"
            },
            {
              "name": "Karlovac",
              "ref": "/v2/networks/grad-karlovac-karlovac"
            },
            {
              "name": "Karlsruhe",
              "ref": "/v2/networks/facherrad-karlsruhe"
            },
            {
              "name": "Kassel",
              "ref": "/v2/networks/nextbike-kassel"
            },
            {
              "name": "Kassel",
              "ref": "/v2/networks/konrad"
            },
            {
              "name": "Katowice",
              "ref": "/v2/networks/katowice-bike-katowice"
            },
            {
              "name": "Katowice",
              "ref": "/v2/networks/katowice-bike-orlen-katowice"
            },
            {
              "name": "Kavala",
              "ref": "/v2/networks/easybike-kavala"
            },
            {
              "name": "Kent State",
              "ref": "/v2/networks/flashfleet-kent-state-university-kent-state-university"
            },
            {
              "name": "Ketchum / Sun Valley, ID",
              "ref": "/v2/networks/mountain-rides-bike-share"
            },
            {
              "name": "Kharkiv",
              "ref": "/v2/networks/lviv-kharkiv"
            },
            {
              "name": "King Abdullah Economic City",
              "ref": "/v2/networks/ibike-king-abdullah-economic-city"
            },
            {
              "name": "Kinouria",
              "ref": "/v2/networks/easybike-kinouria"
            },
            {
              "name": "Kirchheim am Neckar",
              "ref": "/v2/networks/ebikestation-kirchheim-am-neckar"
            },
            {
              "name": "Klagenfurt",
              "ref": "/v2/networks/nextbike-klagenfurt"
            },
            {
              "name": "Kocaeli",
              "ref": "/v2/networks/baksi-kobis"
            },
            {
              "name": "Koluszki",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-koluszki"
            },
            {
              "name": "Komotini",
              "ref": "/v2/networks/easybike-komotini"
            },
            {
              "name": "Konin",
              "ref": "/v2/networks/koninski-rower-miejski-konin"
            },
            {
              "name": "Konstancin Jeziorna",
              "ref": "/v2/networks/krm-konstancinski-konstancin-jeziorna"
            },
            {
              "name": "Konya",
              "ref": "/v2/networks/nextbike-konya"
            },
            {
              "name": "Koszalin",
              "ref": "/v2/networks/koszalinski-rower-miejski-koszalin"
            },
            {
              "name": "Kołobrzeg",
              "ref": "/v2/networks/kolobrzeski-rower-miejski-kolobrzeg"
            },
            {
              "name": "Kraków",
              "ref": "/v2/networks/socialbicycles-wavelo"
            },
            {
              "name": "Kutno",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-kutno"
            },
            {
              "name": "Kuwait",
              "ref": "/v2/networks/byky-bikes-kuwait"
            },
            {
              "name": "Kyiv",
              "ref": "/v2/networks/kyiv-kyiv"
            },
            {
              "name": "Köln",
              "ref": "/v2/networks/kvb-rad-koln"
            },
            {
              "name": "Köln",
              "ref": "/v2/networks/callabike-koln"
            },
            {
              "name": "Küssnacht SZ",
              "ref": "/v2/networks/nextbike-kussnacht-sz"
            },
            {
              "name": "Kędzierzyn-Koźle",
              "ref": "/v2/networks/ok-bike-kedzierzyn-kozle"
            },
            {
              "name": "Kιato",
              "ref": "/v2/networks/cyclopolis-kiato"
            },
            {
              "name": "La Spezia",
              "ref": "/v2/networks/speziainbici"
            },
            {
              "name": "Laa an der Thaya",
              "ref": "/v2/networks/nextbike-laa-an-der-thaya"
            },
            {
              "name": "Lahr",
              "ref": "/v2/networks/lahr-pedelecs-lahr"
            },
            {
              "name": "Lalín",
              "ref": "/v2/networks/onroll-lalin"
            },
            {
              "name": "Las Condes",
              "ref": "/v2/networks/bicilascondes"
            },
            {
              "name": "Las Palmas de Gran Canaria",
              "ref": "/v2/networks/sitycleta-las-palmas-las-palmas-de-gran-canaria"
            },
            {
              "name": "Las Palmas de Gran Canaria",
              "ref": "/v2/networks/onroll-las-palmas"
            },
            {
              "name": "Lastovo",
              "ref": "/v2/networks/opcina-lastovo-lastovo"
            },
            {
              "name": "Lausanne - Morges - Campus",
              "ref": "/v2/networks/bicincitta-lausanne-campus-morges"
            },
            {
              "name": "Lavis",
              "ref": "/v2/networks/bicincitta-lavis"
            },
            {
              "name": "Laško",
              "ref": "/v2/networks/nomagobikes-lasko"
            },
            {
              "name": "Lecce",
              "ref": "/v2/networks/lecce"
            },
            {
              "name": "Lecco",
              "ref": "/v2/networks/lecco"
            },
            {
              "name": "Legnica",
              "ref": "/v2/networks/system-legnicki-rower-miejski-slrm-legnica"
            },
            {
              "name": "Leipzig",
              "ref": "/v2/networks/nextbike-leipzig"
            },
            {
              "name": "León",
              "ref": "/v2/networks/bicileon"
            },
            {
              "name": "Liberty State Park",
              "ref": "/v2/networks/jerseybike-liberty-state-park"
            },
            {
              "name": "Lille",
              "ref": "/v2/networks/vlille"
            },
            {
              "name": "Lillestrøm",
              "ref": "/v2/networks/bysykkel-lillestrom"
            },
            {
              "name": "Limassol",
              "ref": "/v2/networks/nextbike-limassol"
            },
            {
              "name": "Limerick",
              "ref": "/v2/networks/limerick"
            },
            {
              "name": "Limnos",
              "ref": "/v2/networks/cyclopolis-limnos"
            },
            {
              "name": "Lippstadt",
              "ref": "/v2/networks/nextbike-lippstadt"
            },
            {
              "name": "Lisbon",
              "ref": "/v2/networks/gira"
            },
            {
              "name": "Livorno",
              "ref": "/v2/networks/bicincitta-livorno"
            },
            {
              "name": "Ljubljana",
              "ref": "/v2/networks/bicikelj"
            },
            {
              "name": "Lodi",
              "ref": "/v2/networks/we-love-bike"
            },
            {
              "name": "London",
              "ref": "/v2/networks/nextbike-london"
            },
            {
              "name": "London",
              "ref": "/v2/networks/santander-cycles"
            },
            {
              "name": "Long Beach, NY",
              "ref": "/v2/networks/sobi-long-beach"
            },
            {
              "name": "Los Angeles, CA",
              "ref": "/v2/networks/metro-bike-share"
            },
            {
              "name": "Lublin",
              "ref": "/v2/networks/lrm-lublin-lublin"
            },
            {
              "name": "Lublin",
              "ref": "/v2/networks/lrm-lublin-orlen-lublin"
            },
            {
              "name": "Ludwigsburg",
              "ref": "/v2/networks/ebikestation-ludwigsburg"
            },
            {
              "name": "Ludwigshafen",
              "ref": "/v2/networks/vrn-ludwigshafen"
            },
            {
              "name": "Lund",
              "ref": "/v2/networks/lundahoj"
            },
            {
              "name": "Lunz am See",
              "ref": "/v2/networks/nextbike-lunz-am-see"
            },
            {
              "name": "Luxembourg",
              "ref": "/v2/networks/veloh"
            },
            {
              "name": "Luzern",
              "ref": "/v2/networks/nextbike-luzern"
            },
            {
              "name": "Lviv",
              "ref": "/v2/networks/nextbike-lviv"
            },
            {
              "name": "Lyon",
              "ref": "/v2/networks/velov"
            },
            {
              "name": "Lódź",
              "ref": "/v2/networks/lodzki-rower-publiczny-lodz"
            },
            {
              "name": "Lüneburg",
              "ref": "/v2/networks/callabike-luneburg"
            },
            {
              "name": "Maastricht",
              "ref": "/v2/networks/nextbike-maastricht"
            },
            {
              "name": "Madison, WI",
              "ref": "/v2/networks/madison"
            },
            {
              "name": "Madrid",
              "ref": "/v2/networks/bicimad"
            },
            {
              "name": "Magdeburg",
              "ref": "/v2/networks/nextbike-magdeburg"
            },
            {
              "name": "Mainz",
              "ref": "/v2/networks/mvgmeinrad"
            },
            {
              "name": "Makarska",
              "ref": "/v2/networks/grad-makarska-makarska"
            },
            {
              "name": "Malmö",
              "ref": "/v2/networks/malmobybike"
            },
            {
              "name": "Malta",
              "ref": "/v2/networks/nextbike-malta"
            },
            {
              "name": "Manerba del Garda",
              "ref": "/v2/networks/manerba-in-bici"
            },
            {
              "name": "Mani",
              "ref": "/v2/networks/easybike-mani"
            },
            {
              "name": "Mannheim",
              "ref": "/v2/networks/vrn-mannheim"
            },
            {
              "name": "Mantova",
              "ref": "/v2/networks/bicincitta-mantova"
            },
            {
              "name": "Marathon",
              "ref": "/v2/networks/cyclopolis-marathon"
            },
            {
              "name": "Marburg",
              "ref": "/v2/networks/nextbike-marburg"
            },
            {
              "name": "Marburg",
              "ref": "/v2/networks/callabike-marburg"
            },
            {
              "name": "Marchfeld",
              "ref": "/v2/networks/nextbike-marchfeld"
            },
            {
              "name": "Marciana Marina",
              "ref": "/v2/networks/mar-e-bici"
            },
            {
              "name": "Marki",
              "ref": "/v2/networks/kolo-marek-marki"
            },
            {
              "name": "Maroussi",
              "ref": "/v2/networks/cyclopolis-maroussi"
            },
            {
              "name": "Maroussi",
              "ref": "/v2/networks/cyclopolis-nafplio"
            },
            {
              "name": "Maroussi",
              "ref": "/v2/networks/cyclopolis-aigialeia"
            },
            {
              "name": "Marseille",
              "ref": "/v2/networks/le-velo"
            },
            {
              "name": "Medellin",
              "ref": "/v2/networks/encicla"
            },
            {
              "name": "Melbourne",
              "ref": "/v2/networks/melbourne-bike-share"
            },
            {
              "name": "Melbourne, AU",
              "ref": "/v2/networks/monash-bikeshare"
            },
            {
              "name": "Metković",
              "ref": "/v2/networks/grad-metkovic-metkovic"
            },
            {
              "name": "Mezzocorona",
              "ref": "/v2/networks/bicincitta-mezzocorona"
            },
            {
              "name": "Mezzolombardo",
              "ref": "/v2/networks/bicincitta-mezzolombardo"
            },
            {
              "name": "Miami Beach, FL",
              "ref": "/v2/networks/decobike-miami-beach"
            },
            {
              "name": "Michałowice",
              "ref": "/v2/networks/rower-gminny-michalowice-michalowice"
            },
            {
              "name": "Milano",
              "ref": "/v2/networks/bikemi"
            },
            {
              "name": "Milton Keynes",
              "ref": "/v2/networks/santander-cycles-mk-milton-keynes"
            },
            {
              "name": "Milwaukee, WI",
              "ref": "/v2/networks/bublr-bikes"
            },
            {
              "name": "Minneapolis, MN",
              "ref": "/v2/networks/nice-ride"
            },
            {
              "name": "Modena",
              "ref": "/v2/networks/bicincitta-modena"
            },
            {
              "name": "Monopoli",
              "ref": "/v2/networks/monopoli-bike"
            },
            {
              "name": "Monserrato",
              "ref": "/v2/networks/bicincitta-monserrato"
            },
            {
              "name": "Montecatini Terme",
              "ref": "/v2/networks/bicincitta-montecatini-terme"
            },
            {
              "name": "Montevideo",
              "ref": "/v2/networks/movete"
            },
            {
              "name": "Monthey - Aigle",
              "ref": "/v2/networks/bicincitta-chablais"
            },
            {
              "name": "Montilla",
              "ref": "/v2/networks/onroll-montilla"
            },
            {
              "name": "Montréal, QC",
              "ref": "/v2/networks/bixi-montreal"
            },
            {
              "name": "Monza",
              "ref": "/v2/networks/bicincitta-monza"
            },
            {
              "name": "Morigerati",
              "ref": "/v2/networks/bicincitta-morigerati"
            },
            {
              "name": "Moscow",
              "ref": "/v2/networks/velobike-moscow"
            },
            {
              "name": "Mula",
              "ref": "/v2/networks/onroll-mula"
            },
            {
              "name": "Mulhouse",
              "ref": "/v2/networks/velocite-mulhouse"
            },
            {
              "name": "Murcia",
              "ref": "/v2/networks/muybici"
            },
            {
              "name": "Murten",
              "ref": "/v2/networks/bicincitta-les-lacs-romont"
            },
            {
              "name": "Mödling",
              "ref": "/v2/networks/nextbike-modling"
            },
            {
              "name": "Mönchengladbach",
              "ref": "/v2/networks/santander-monchengladbach"
            },
            {
              "name": "Mülheim a.d.R.",
              "ref": "/v2/networks/metropolradruhr-mulheim-adr"
            },
            {
              "name": "München",
              "ref": "/v2/networks/nextbike-munchen"
            },
            {
              "name": "München",
              "ref": "/v2/networks/callabike-munchen"
            },
            {
              "name": "Namur",
              "ref": "/v2/networks/li-bia-velo"
            },
            {
              "name": "Nancy",
              "ref": "/v2/networks/velostanlib"
            },
            {
              "name": "Nantes",
              "ref": "/v2/networks/bicloo"
            },
            {
              "name": "Nashville, TN",
              "ref": "/v2/networks/nashville"
            },
            {
              "name": "Neusiedler See",
              "ref": "/v2/networks/burgenland-neusiedler-see"
            },
            {
              "name": "New York, NY",
              "ref": "/v2/networks/citi-bike-nyc"
            },
            {
              "name": "Nice",
              "ref": "/v2/networks/velobleu"
            },
            {
              "name": "Nicosia",
              "ref": "/v2/networks/nextbike-nicosia"
            },
            {
              "name": "Nicosia",
              "ref": "/v2/networks/easybike-nicosia"
            },
            {
              "name": "Nitra",
              "ref": "/v2/networks/arriva-nitra"
            },
            {
              "name": "Noia - Portosin - Porto do Son",
              "ref": "/v2/networks/onroll-via-verde"
            },
            {
              "name": "Norderstedt",
              "ref": "/v2/networks/nextbike-norderstedt"
            },
            {
              "name": "North Bergen",
              "ref": "/v2/networks/jerseybike-north-bergen"
            },
            {
              "name": "Noto",
              "ref": "/v2/networks/notoinbici"
            },
            {
              "name": "Novara",
              "ref": "/v2/networks/novara"
            },
            {
              "name": "Novelda",
              "ref": "/v2/networks/onroll-novelda"
            },
            {
              "name": "Nyon",
              "ref": "/v2/networks/bicincitta-la-cote"
            },
            {
              "name": "Nürnberg",
              "ref": "/v2/networks/norisbike-nurnberg"
            },
            {
              "name": "O Barco",
              "ref": "/v2/networks/onroll-o-barco"
            },
            {
              "name": "Oberdorf",
              "ref": "/v2/networks/nextbike-oberdorf"
            },
            {
              "name": "Oberhausen",
              "ref": "/v2/networks/metropolradruhr-oberhausen"
            },
            {
              "name": "Odesa",
              "ref": "/v2/networks/nextbike-odesa"
            },
            {
              "name": "Odessa",
              "ref": "/v2/networks/lviv-odessa"
            },
            {
              "name": "Offenbach am Main",
              "ref": "/v2/networks/nextbike-offenbach-am-main"
            },
            {
              "name": "Offenburg",
              "ref": "/v2/networks/nextbike-offenburg"
            },
            {
              "name": "Olbia",
              "ref": "/v2/networks/olbia-bike"
            },
            {
              "name": "Omaha, NE",
              "ref": "/v2/networks/omaha"
            },
            {
              "name": "Opole",
              "ref": "/v2/networks/opole-bike-opole"
            },
            {
              "name": "Ordu",
              "ref": "/v2/networks/ordu-bisikletli-ordu"
            },
            {
              "name": "Orlando, FL",
              "ref": "/v2/networks/juice-bike-share"
            },
            {
              "name": "Oslo",
              "ref": "/v2/networks/oslo-bysykkel"
            },
            {
              "name": "Ostrów Wielkopolski",
              "ref": "/v2/networks/rower-miejski-w-ostrowie-wielkopolskim-ostrow-wielkopolski"
            },
            {
              "name": "Ottawa, ON",
              "ref": "/v2/networks/velogo"
            },
            {
              "name": "Otwock",
              "ref": "/v2/networks/otwocki-rower-miejski-otwock"
            },
            {
              "name": "Pabianice",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-pabianice"
            },
            {
              "name": "Padova",
              "ref": "/v2/networks/goodbike"
            },
            {
              "name": "Paiporta",
              "ref": "/v2/networks/onroll-paiporta"
            },
            {
              "name": "Palencia",
              "ref": "/v2/networks/onroll-palencia"
            },
            {
              "name": "Palma",
              "ref": "/v2/networks/bicipalma"
            },
            {
              "name": "Pamplona",
              "ref": "/v2/networks/nbici"
            },
            {
              "name": "Panama",
              "ref": "/v2/networks/nextbike-panama"
            },
            {
              "name": "Paradiso",
              "ref": "/v2/networks/bicincitta-lugano-paradiso"
            },
            {
              "name": "Parco Naturale Molentargius - Saline",
              "ref": "/v2/networks/bicincitta-parco-molentargius-saline"
            },
            {
              "name": "Parco Nazionale del Circeo",
              "ref": "/v2/networks/bicincitta-ente-parco-del-circeo"
            },
            {
              "name": "Parco Nazionale del Gargano",
              "ref": "/v2/networks/parkinbici"
            },
            {
              "name": "Parco dei Colli di Bergamo",
              "ref": "/v2/networks/bicincitta-parco-dei-colli-di-bergamo"
            },
            {
              "name": "Parco naturale Migliarino San Rossore Massaciuccoli",
              "ref": "/v2/networks/bicincitta-ente-parco-san-rossore"
            },
            {
              "name": "Paris",
              "ref": "/v2/networks/velib"
            },
            {
              "name": "Parma",
              "ref": "/v2/networks/parma"
            },
            {
              "name": "Patra",
              "ref": "/v2/networks/easybike-patra"
            },
            {
              "name": "Pau",
              "ref": "/v2/networks/idecycle"
            },
            {
              "name": "Pavia",
              "ref": "/v2/networks/pavia-in-bici"
            },
            {
              "name": "Pergine Valsugana",
              "ref": "/v2/networks/e-motion-pergine-valsugana"
            },
            {
              "name": "Perugia",
              "ref": "/v2/networks/bici-perugia"
            },
            {
              "name": "Petrolina",
              "ref": "/v2/networks/bikepetrolina"
            },
            {
              "name": "Philadelphia, PA",
              "ref": "/v2/networks/indego"
            },
            {
              "name": "Phoenix, AZ",
              "ref": "/v2/networks/grid-bike-share"
            },
            {
              "name": "Piacenza",
              "ref": "/v2/networks/piacenza"
            },
            {
              "name": "Piaseczno",
              "ref": "/v2/networks/piaseczynski-rower-miejski-piaseczno"
            },
            {
              "name": "Pinerolo",
              "ref": "/v2/networks/pinerolo"
            },
            {
              "name": "Pinto",
              "ref": "/v2/networks/onroll-pinto"
            },
            {
              "name": "Piotrków Trybunalski",
              "ref": "/v2/networks/piotrkowski-rower-miejski-piotrkow-trybunalski"
            },
            {
              "name": "Pisa",
              "ref": "/v2/networks/ciclopi"
            },
            {
              "name": "Pittsburgh",
              "ref": "/v2/networks/healthy-ride-pittsburgh-pittsburgh"
            },
            {
              "name": "Pizzighettone e Formigara",
              "ref": "/v2/networks/bicincitta-pizzighettone-formigara"
            },
            {
              "name": "Pobiedziska",
              "ref": "/v2/networks/pobiedziski-rower-gminny-pobiedziska"
            },
            {
              "name": "Ponferrada",
              "ref": "/v2/networks/ponfemobi"
            },
            {
              "name": "Pordenone",
              "ref": "/v2/networks/pordenone"
            },
            {
              "name": "Poreč",
              "ref": "/v2/networks/porec-bike-share-porec"
            },
            {
              "name": "Portland, OR",
              "ref": "/v2/networks/biketown"
            },
            {
              "name": "Porto Alegre",
              "ref": "/v2/networks/bikepoa"
            },
            {
              "name": "Porto Torres",
              "ref": "/v2/networks/bicincitta-porto-torres"
            },
            {
              "name": "Potsdam",
              "ref": "/v2/networks/nextbike-potsdam"
            },
            {
              "name": "Poznań",
              "ref": "/v2/networks/prm-poznan"
            },
            {
              "name": "Poznań",
              "ref": "/v2/networks/prm-stacje-sponsorskie-nextbike-prm"
            },
            {
              "name": "Prata Camportaccio",
              "ref": "/v2/networks/prata-camportaccio"
            },
            {
              "name": "Priego de Córdoba",
              "ref": "/v2/networks/onroll-priego-de-cordoba"
            },
            {
              "name": "Pruszków",
              "ref": "/v2/networks/pruszkowski-rower-miejski-pruszkow"
            },
            {
              "name": "Pszczyna",
              "ref": "/v2/networks/system-rowerow-miejskich-w-pszczynie-pszczyna"
            },
            {
              "name": "Puerto Lumbreras",
              "ref": "/v2/networks/onroll-puerto-lumbreras"
            },
            {
              "name": "Puertollano",
              "ref": "/v2/networks/onroll-puertollano"
            },
            {
              "name": "Płock",
              "ref": "/v2/networks/plocki-rower-miejski-prm-plock"
            },
            {
              "name": "Quartucciu",
              "ref": "/v2/networks/bicinquartucciu"
            },
            {
              "name": "Quickborn",
              "ref": "/v2/networks/nextbike-quickborn"
            },
            {
              "name": "Radom",
              "ref": "/v2/networks/radomski-rower-miejski-radom"
            },
            {
              "name": "Radom",
              "ref": "/v2/networks/radomski-rower-miejski-stacje-sponsorskie-radom"
            },
            {
              "name": "Rapid City, SD",
              "ref": "/v2/networks/rapid-city"
            },
            {
              "name": "Recife",
              "ref": "/v2/networks/bikerecife"
            },
            {
              "name": "Redondela",
              "ref": "/v2/networks/onroll-redondela"
            },
            {
              "name": "Reggio Emilia",
              "ref": "/v2/networks/reggio-emilia"
            },
            {
              "name": "Remseck am Neckar",
              "ref": "/v2/networks/ebikestation-remseck-am-neckar"
            },
            {
              "name": "Rennes",
              "ref": "/v2/networks/le-velo-star"
            },
            {
              "name": "Rethymno",
              "ref": "/v2/networks/easybike-rethymno"
            },
            {
              "name": "Reykjavík",
              "ref": "/v2/networks/wowcycle-reykjavik"
            },
            {
              "name": "Rhodes",
              "ref": "/v2/networks/cyclopolis-rhodes"
            },
            {
              "name": "Rieti",
              "ref": "/v2/networks/rietinbici"
            },
            {
              "name": "Rimini",
              "ref": "/v2/networks/rimini"
            },
            {
              "name": "Rio de Janeiro",
              "ref": "/v2/networks/bikerio"
            },
            {
              "name": "Rivarolo Canavese",
              "ref": "/v2/networks/bicincitta-rivarolo-canavese"
            },
            {
              "name": "Rosario",
              "ref": "/v2/networks/mibicitubici"
            },
            {
              "name": "Rotterdam",
              "ref": "/v2/networks/nextbike-rotterdam"
            },
            {
              "name": "Rouen",
              "ref": "/v2/networks/cyclic"
            },
            {
              "name": "Rovereto",
              "ref": "/v2/networks/e-motion-rovereto"
            },
            {
              "name": "Römerland",
              "ref": "/v2/networks/nextbike-romerland"
            },
            {
              "name": "Rüsselsheim",
              "ref": "/v2/networks/callabike-russelsheim"
            },
            {
              "name": "Rüsselsheim am Main",
              "ref": "/v2/networks/nextbike-russelsheim-am-main"
            },
            {
              "name": "Rīga",
              "ref": "/v2/networks/sixt-riga"
            },
            {
              "name": "Saint-Étienne",
              "ref": "/v2/networks/velivert"
            },
            {
              "name": "Salamanca",
              "ref": "/v2/networks/onroll-salamanca"
            },
            {
              "name": "Salt Lake City",
              "ref": "/v2/networks/greenbikeslc"
            },
            {
              "name": "Saluzzo",
              "ref": "/v2/networks/saluzzo"
            },
            {
              "name": "Salvador",
              "ref": "/v2/networks/bikesalvador"
            },
            {
              "name": "Salzburg ",
              "ref": "/v2/networks/nextbike-salzburg"
            },
            {
              "name": "Samos",
              "ref": "/v2/networks/easybike-samos"
            },
            {
              "name": "San Antonio, TX",
              "ref": "/v2/networks/sanantonio"
            },
            {
              "name": "San Diego, CA",
              "ref": "/v2/networks/decobike-san-diego"
            },
            {
              "name": "San Donato Milanese",
              "ref": "/v2/networks/bicincitta-san-donato-milanese"
            },
            {
              "name": "San Francisco Bay Area, CA",
              "ref": "/v2/networks/ford-gobike"
            },
            {
              "name": "San Giovanni in Persiceto",
              "ref": "/v2/networks/bicincitta-san-giovanni-in-persiceto"
            },
            {
              "name": "San Javier",
              "ref": "/v2/networks/onroll-san-javier"
            },
            {
              "name": "San Lazzaro di Savena",
              "ref": "/v2/networks/bicincitta-san-lazzaro-di-savena"
            },
            {
              "name": "San Michele All'adige",
              "ref": "/v2/networks/bicincitta-san-michele-alladige"
            },
            {
              "name": "San Pedro del Pinatar",
              "ref": "/v2/networks/onroll-san-pedro"
            },
            {
              "name": "San Ramon, CA",
              "ref": "/v2/networks/britebikes"
            },
            {
              "name": "San Teodoro",
              "ref": "/v2/networks/bicincitta-san-teodoro"
            },
            {
              "name": "Sant Joan d'Alacant",
              "ref": "/v2/networks/onroll-sant-joan"
            },
            {
              "name": "Santa Margherita Ligure - Portofino - Camogli",
              "ref": "/v2/networks/portofino-park-and-bike"
            },
            {
              "name": "Santa Maria Maggiore - Malesco - Villette",
              "ref": "/v2/networks/ossola"
            },
            {
              "name": "Santa Monica, CA",
              "ref": "/v2/networks/breeze-bike-share"
            },
            {
              "name": "Santander",
              "ref": "/v2/networks/tusbic"
            },
            {
              "name": "Santiago",
              "ref": "/v2/networks/bikesantiago"
            },
            {
              "name": "Santos",
              "ref": "/v2/networks/bikesantos"
            },
            {
              "name": "Sarajevo",
              "ref": "/v2/networks/nextbike-sarajevo"
            },
            {
              "name": "Sarnen",
              "ref": "/v2/networks/nextbike-sarnen"
            },
            {
              "name": "Savannah, GA",
              "ref": "/v2/networks/catbike"
            },
            {
              "name": "Savigliano",
              "ref": "/v2/networks/savigliano"
            },
            {
              "name": "Savona",
              "ref": "/v2/networks/savona"
            },
            {
              "name": "Scafati",
              "ref": "/v2/networks/bicincitta-scafati"
            },
            {
              "name": "Scandiano",
              "ref": "/v2/networks/bicincitta-scandiano"
            },
            {
              "name": "Schio",
              "ref": "/v2/networks/bicischio"
            },
            {
              "name": "Schorndorf",
              "ref": "/v2/networks/ebikestation-schorndorf"
            },
            {
              "name": "Schwetzingen",
              "ref": "/v2/networks/vrn-schwetzingen"
            },
            {
              "name": "Schwieberdingen",
              "ref": "/v2/networks/ebikestation-schwieberdingen"
            },
            {
              "name": "Seferihisar",
              "ref": "/v2/networks/karbis-seferihisar"
            },
            {
              "name": "Segovia",
              "ref": "/v2/networks/onroll-segovia"
            },
            {
              "name": "Selargius",
              "ref": "/v2/networks/bicincitta-selargius"
            },
            {
              "name": "Sellero",
              "ref": "/v2/networks/sellero"
            },
            {
              "name": "Serfaus",
              "ref": "/v2/networks/nextbike-serfaus"
            },
            {
              "name": "Sestri Levante - Lavagna",
              "ref": "/v2/networks/tigullionbike"
            },
            {
              "name": "Sevilla",
              "ref": "/v2/networks/sevici"
            },
            {
              "name": "Siedlce",
              "ref": "/v2/networks/siedlecki-rower-miejski-siedlce"
            },
            {
              "name": "Siemianowice Śląskie",
              "ref": "/v2/networks/siemianowicki-rower-miejski-siemianowice-slaskie"
            },
            {
              "name": "Siena",
              "ref": "/v2/networks/bicincitta-siena"
            },
            {
              "name": "Sieradz",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-sieradz"
            },
            {
              "name": "Sion",
              "ref": "/v2/networks/bicincitta-valais-central"
            },
            {
              "name": "Sisak",
              "ref": "/v2/networks/grad-sisak-sisak"
            },
            {
              "name": "Skierniewice",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-skierniewice"
            },
            {
              "name": "Slavonski Brod",
              "ref": "/v2/networks/grad-slavonski-brod-slavonski-brod"
            },
            {
              "name": "Slough",
              "ref": "/v2/networks/cycle-hire-slough"
            },
            {
              "name": "Sondrio",
              "ref": "/v2/networks/sondrio"
            },
            {
              "name": "Soria",
              "ref": "/v2/networks/onroll-soria"
            },
            {
              "name": "Sorocaba",
              "ref": "/v2/networks/integrabike"
            },
            {
              "name": "Sosnowiec",
              "ref": "/v2/networks/sosnowiecki-rower-miejski-sosnowiec"
            },
            {
              "name": "Spartanburg, SC",
              "ref": "/v2/networks/spartanburg"
            },
            {
              "name": "Speyer",
              "ref": "/v2/networks/vrn-speyer"
            },
            {
              "name": "St.Pölten",
              "ref": "/v2/networks/nextbike-stpolten"
            },
            {
              "name": "Stalowa Wola",
              "ref": "/v2/networks/stalowa-wola-miasto-rowerow-stalowa-wola"
            },
            {
              "name": "Stans",
              "ref": "/v2/networks/nextbike-stans"
            },
            {
              "name": "Stansstad",
              "ref": "/v2/networks/nextbike-stansstad"
            },
            {
              "name": "Stavanger",
              "ref": "/v2/networks/bysykkelen"
            },
            {
              "name": "Stirling",
              "ref": "/v2/networks/nextbike-stirling"
            },
            {
              "name": "Stuttgart",
              "ref": "/v2/networks/callabike-stuttgart"
            },
            {
              "name": "Surrey",
              "ref": "/v2/networks/nextbike-university-of-surrey"
            },
            {
              "name": "Sursee",
              "ref": "/v2/networks/nextbike-sursee"
            },
            {
              "name": "Swansea",
              "ref": "/v2/networks/santander-cycles-swansea-swansea-university"
            },
            {
              "name": "Szamotuły",
              "ref": "/v2/networks/rower-miejski-szamotuly-rms-szamotuly"
            },
            {
              "name": "Szczecin",
              "ref": "/v2/networks/bike-s-srm-szczecin"
            },
            {
              "name": "São Lourenço",
              "ref": "/v2/networks/rivibike"
            },
            {
              "name": "São Paulo",
              "ref": "/v2/networks/ciclosampa"
            },
            {
              "name": "São Paulo",
              "ref": "/v2/networks/bikesampa"
            },
            {
              "name": "Südheide",
              "ref": "/v2/networks/nextbike-sudheide"
            },
            {
              "name": "TV",
              "ref": "/v2/networks/bicincitta-tivat"
            },
            {
              "name": "Talavera de la Reina",
              "ref": "/v2/networks/onroll-talavera"
            },
            {
              "name": "Tallinn",
              "ref": "/v2/networks/sixt-jalgrattarent-tallinn"
            },
            {
              "name": "Tampa, FL",
              "ref": "/v2/networks/coast-bike-share"
            },
            {
              "name": "Tarnów",
              "ref": "/v2/networks/tarnowski-rower-miejski-tarnow"
            },
            {
              "name": "Tel Aviv-Yaffo, Giv'atayim, Ramat-Gan",
              "ref": "/v2/networks/telofun"
            },
            {
              "name": "Terni",
              "ref": "/v2/networks/terni"
            },
            {
              "name": "Thermenregion",
              "ref": "/v2/networks/nextbike-thermenregion"
            },
            {
              "name": "Thessaloniki",
              "ref": "/v2/networks/thessbike"
            },
            {
              "name": "Tirano",
              "ref": "/v2/networks/tirano-in-bici"
            },
            {
              "name": "Topeka, KS",
              "ref": "/v2/networks/topeka-metro-bikes"
            },
            {
              "name": "Torino",
              "ref": "/v2/networks/to-bike"
            },
            {
              "name": "Toronto, ON",
              "ref": "/v2/networks/bixi-toronto"
            },
            {
              "name": "Tortolì",
              "ref": "/v2/networks/bicincitta-tortoli"
            },
            {
              "name": "Toulouse",
              "ref": "/v2/networks/velo"
            },
            {
              "name": "Tradate",
              "ref": "/v2/networks/tradate"
            },
            {
              "name": "Traisen-Gölsental",
              "ref": "/v2/networks/nextbike-traisen-golsental"
            },
            {
              "name": "Trento",
              "ref": "/v2/networks/e-motion-trento"
            },
            {
              "name": "Treviglio",
              "ref": "/v2/networks/bicincitta-treviglio"
            },
            {
              "name": "Treviso",
              "ref": "/v2/networks/treviso"
            },
            {
              "name": "Triestingtal",
              "ref": "/v2/networks/nextbike-triestingtal"
            },
            {
              "name": "Trondheim",
              "ref": "/v2/networks/trondheim-bysykkel"
            },
            {
              "name": "Tulln",
              "ref": "/v2/networks/nextbike-tulln"
            },
            {
              "name": "Tullnerfeld West",
              "ref": "/v2/networks/nextbike-tullnerfeld-west"
            },
            {
              "name": "Turin",
              "ref": "/v2/networks/nextbike-turin"
            },
            {
              "name": "Turku",
              "ref": "/v2/networks/foli"
            },
            {
              "name": "Tuzla",
              "ref": "/v2/networks/nextbike-tuzla"
            },
            {
              "name": "Tychowo",
              "ref": "/v2/networks/tychowski-rower-miejski-tychowo"
            },
            {
              "name": "Tychowo",
              "ref": "/v2/networks/tychowski-rower-miejski-atrakcje-turystyczne-tychowo"
            },
            {
              "name": "Tychy",
              "ref": "/v2/networks/tyski-rower-miejski-tychy"
            },
            {
              "name": "Tübingen",
              "ref": "/v2/networks/nextbike-tubingen"
            },
            {
              "name": "Udine",
              "ref": "/v2/networks/udine"
            },
            {
              "name": "Ugento",
              "ref": "/v2/networks/ugento"
            },
            {
              "name": "Universidad de Granada, Granada",
              "ref": "/v2/networks/onroll-universidad-de-granada"
            },
            {
              "name": "University of South Florida, FL",
              "ref": "/v2/networks/share-a-bull-bikes"
            },
            {
              "name": "University of Virginia, VA",
              "ref": "/v2/networks/ubike"
            },
            {
              "name": "Unteres Traisental",
              "ref": "/v2/networks/nextbike-unteres-traisental"
            },
            {
              "name": "Usedom",
              "ref": "/v2/networks/usedomrad-usedom"
            },
            {
              "name": "Ustica",
              "ref": "/v2/networks/ustica"
            },
            {
              "name": "Utrecht",
              "ref": "/v2/networks/nu-connect"
            },
            {
              "name": "Vaihingen an der Enz",
              "ref": "/v2/networks/ebikestation-vaihingen-an-der-enz"
            },
            {
              "name": "Valence",
              "ref": "/v2/networks/libelo"
            },
            {
              "name": "Valencia",
              "ref": "/v2/networks/valenbisi"
            },
            {
              "name": "Vancouver",
              "ref": "/v2/networks/mobibikes"
            },
            {
              "name": "Vannes",
              "ref": "/v2/networks/velocea"
            },
            {
              "name": "Varese",
              "ref": "/v2/networks/gimme-bike"
            },
            {
              "name": "Velika Gorica",
              "ref": "/v2/networks/grad-velika-gorica-velika-gorica"
            },
            {
              "name": "Venezia",
              "ref": "/v2/networks/venezia"
            },
            {
              "name": "Vercelli",
              "ref": "/v2/networks/vercelli"
            },
            {
              "name": "Vicolungo",
              "ref": "/v2/networks/bicincitta-vicolungo-the-style-outlets"
            },
            {
              "name": "Victoria",
              "ref": "/v2/networks/nextbike-victoria"
            },
            {
              "name": "Vijayawada",
              "ref": "/v2/networks/smartbike-vijayawada-vijayawada"
            },
            {
              "name": "Vilagarcía de Arousa",
              "ref": "/v2/networks/vaibike"
            },
            {
              "name": "Villaquilambre",
              "ref": "/v2/networks/onroll-villaquilambre"
            },
            {
              "name": "Vilnius",
              "ref": "/v2/networks/vilnius-cyclocity"
            },
            {
              "name": "Vinaròs",
              "ref": "/v2/networks/onroll-vinaros"
            },
            {
              "name": "Vinnytsia",
              "ref": "/v2/networks/nextbike-vinnytsia"
            },
            {
              "name": "Vukovar",
              "ref": "/v2/networks/grad-vukovar-vukovar"
            },
            {
              "name": "Wachau",
              "ref": "/v2/networks/nextbike-wachau"
            },
            {
              "name": "Wageningen",
              "ref": "/v2/networks/cykl"
            },
            {
              "name": "Waiblingen",
              "ref": "/v2/networks/ebikestation-waiblingen"
            },
            {
              "name": "Warszawa",
              "ref": "/v2/networks/veturilo-warszawa"
            },
            {
              "name": "Warszawa",
              "ref": "/v2/networks/veturilo-stacje-sponsorskie-nextbike-veturilo"
            },
            {
              "name": "Warszawa",
              "ref": "/v2/networks/veturilo-orlen-warszawa"
            },
            {
              "name": "Warwick",
              "ref": "/v2/networks/nextbike-university-of-warwick"
            },
            {
              "name": "Washington, DC",
              "ref": "/v2/networks/capital-bikeshare"
            },
            {
              "name": "Weehawken",
              "ref": "/v2/networks/jerseybike-weehawken"
            },
            {
              "name": "Weinheim",
              "ref": "/v2/networks/vrn-weinheim"
            },
            {
              "name": "West New York",
              "ref": "/v2/networks/jerseybike-west-new-york"
            },
            {
              "name": "West Palm Beach Florida",
              "ref": "/v2/networks/skybike-west-palm-beach-west-palm-beach-florida"
            },
            {
              "name": "Wien",
              "ref": "/v2/networks/citybike-wien"
            },
            {
              "name": "WienerWald",
              "ref": "/v2/networks/nextbike-wienerwald"
            },
            {
              "name": "Wiesbaden",
              "ref": "/v2/networks/nextbike-wiesbaden"
            },
            {
              "name": "Wiesbaden",
              "ref": "/v2/networks/callabike-wiesbaden"
            },
            {
              "name": "Wittenberge",
              "ref": "/v2/networks/nextbike-wittenberge"
            },
            {
              "name": "Wolfenschiessen",
              "ref": "/v2/networks/nextbike-wolfenschiessen"
            },
            {
              "name": "Worms",
              "ref": "/v2/networks/vrn-worms"
            },
            {
              "name": "Wr.Neustadt",
              "ref": "/v2/networks/nextbike-wrneustadt"
            },
            {
              "name": "Wrocław",
              "ref": "/v2/networks/wrm-wroclaw"
            },
            {
              "name": "Wrocław",
              "ref": "/v2/networks/wrm-orlen-wroclaw"
            },
            {
              "name": "Würzburg",
              "ref": "/v2/networks/nextbike-wurzburg"
            },
            {
              "name": "Yverdon-les-Bains",
              "ref": "/v2/networks/bicincitta-yverdon-les-bains"
            },
            {
              "name": "Zabrze",
              "ref": "/v2/networks/zabrzanski-rower-miejski-zabrze"
            },
            {
              "name": "Zadar",
              "ref": "/v2/networks/grad-zadar-zadar"
            },
            {
              "name": "Zagreb",
              "ref": "/v2/networks/nextbike-zagreb"
            },
            {
              "name": "Zaragoza",
              "ref": "/v2/networks/bizi"
            },
            {
              "name": "Zduńska Wola",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-zdunska-wola"
            },
            {
              "name": "Zgierz",
              "ref": "/v2/networks/zgierski-rower-miejski-zgierz"
            },
            {
              "name": "Zgierz",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-zgierz"
            },
            {
              "name": "Zielona Góra",
              "ref": "/v2/networks/zielonogorski-rower-miejski-zielona-gora"
            },
            {
              "name": "Älvsjö",
              "ref": "/v2/networks/nextbike-alvsjo"
            },
            {
              "name": "Úbeda",
              "ref": "/v2/networks/onroll-ubeda"
            },
            {
              "name": "Łask",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-lask"
            },
            {
              "name": "Łowicz",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-lowicz"
            },
            {
              "name": "Łódź",
              "ref": "/v2/networks/lodzki-rower-publiczny-orlen-lodz"
            },
            {
              "name": "Łódź",
              "ref": "/v2/networks/rowerowe-lodzkie-rl-lodz-rl"
            },
            {
              "name": "Świdnik",
              "ref": "/v2/networks/lrm-lublin-swidnik"
            },
            {
              "name": "Świętochłowice",
              "ref": "/v2/networks/nextbike-swietochlowice"
            },
            {
              "name": "Šibenik",
              "ref": "/v2/networks/grad-sibenik-sibenik"
            },
            {
              "name": "Żyrardów",
              "ref": "/v2/networks/zyrardowski-rower-miejski-zyrardow"
            },
            {
              "name": "Žilina",
              "ref": "/v2/networks/bikekia-zilina"
            },
            {
              "name": "Αrxaia Olympia",
              "ref": "/v2/networks/cyclopolis-arxaiaolympia"
            },
            {
              "name": "Μoschato-Tavros",
              "ref": "/v2/networks/cyclopolis-moschatotavros"
            },
            {
              "name": "Νea Smyrni",
              "ref": "/v2/networks/cyclopolis-neasmyrni"
            },
            {
              "name": "Казань",
              "ref": "/v2/networks/velik"
            },
            {
              "name": "台北市 Taipei City",
              "ref": "/v2/networks/youbike-taipei"
            },
            {
              "name": "富山市",
              "ref": "/v2/networks/toyama-cyclocity"
            },
            {
              "name": "彰化 Changhua County",
              "ref": "/v2/networks/youbike-changhua"
            },
            {
              "name": "新北市 New Taipei",
              "ref": "/v2/networks/youbike-new-taipei"
            },
            {
              "name": "桃園市 Taoyuan City",
              "ref": "/v2/networks/youbike-taoyuan"
            },
            {
              "name": "臺中市 Taichung City",
              "ref": "/v2/networks/youbike-taichung"
            }
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Indicators</Text>}>
        <Toggle
          settingsKey="LineColor"
          label="Line on side"
        />
        <Toggle
          settingsKey="BikeColor"
          label="Colored bike"
        />
        <Toggle
          settingsKey="TextColor"
          label="Colored text"
        />
      </Section>
      <Section
        title={<Text bold align="center">Instructions</Text>}>
        <Text>
          Select city of your choice and change appearance
        </Text>
      </Section>
    </Page >
  );
}

registerSettingsPage(HelloWorld);

