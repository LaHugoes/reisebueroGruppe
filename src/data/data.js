//hier speichern wir die Reisedaten in einem einfachen javascript array, hätten wir eine Datenbank, würden wir die Daten in JSON speichern und dann über eine API abrufen
let artikel = [
    {
        id: 0,
        preis: 63,
        zielStadt: 'Paris',
        zielLand: 'Frankreich',
        beschreibung: 'Flüge:\n' + 'Frühling ab 145€ | \n' +
            'Sommer ab 190€ | \n' +
            'Herbst ab 110€ | \n' +
            'Winter ab 140€ \n',
        bildUrl: "https://media.timeout.com/images/103946767/750/422/image.jpg",
        url: "https://www.notion.so/Paris-a2eb3916d01d411392c051078c869fbb"
    },
    {
        id: 1,
        preis: 158,
        zielStadt: 'Paris',
        zielLand: 'Frankreich',
        beschreibung: 'Flüge:\n' + 'Frühling ab 145€ | \n' +
            'Sommer ab 190€ | \n' +
            'Herbst ab 110€ | \n' +
            'Winter ab 140€ \n',
        bildUrl: "https://a.cdn-hotels.com/gdcs/production1/d1931/f2860f0c-8b89-41f3-b8e9-71c6af991531.jpg",
        url: "https://www.notion.so/Paris-eca83eef92cc44ee8e229655164f1888"
    },
    {
        id: 2,
        preis: 551,
        zielStadt: 'Paris',
        zielLand: 'Frankreich',
        beschreibung: 'Flüge:\n' + 'Frühling ab 145€ | \n' +
            'Sommer ab 190€ | \n' +
            'Herbst ab 110€ | \n' +
            'Winter ab 140€ \n',
        bildUrl: "https://media1.travelguide.de/media/2021/03/paris-reisezeit-1200x800.jpg.webp",
        url: "https://www.notion.so/Paris-815ed5a313f3404ba22a0036e1530e4f"
    },
    {
        id: 3,
        preis: 43,
        zielStadt: 'Berlin',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://cdn.getyourguide.com/img/location/6f156967bc6d6563.jpeg/99.jpg",
        url: "https://www.notion.so/Berlin-c5f167100f27418c8ba8c03b6a9951f0"
    },
    {
        id: 4,
        preis: 100,
        zielStadt: 'Berlin',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
        url: "https://www.notion.so/Berlin-7d0cec2b7f2b4a39a528076c254c8aed"
    },
    {
        id: 5,
        preis: 490,
        zielStadt: 'Berlin',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://www.h-hotels.com/_Resources/Persistent/2/f/1/6/2f161ba1794fdb8637701b7ee5427f6ec3e17551/berlin-alexanderplatz-skyline-01.jpg",
        url: "https://www.notion.so/Berlin-9d0f863fb5364442af95be896e7f6eb9"
    },
    {
        id: 6,
        preis: 46,
        zielStadt: 'London',
        zielLand: 'Vereinigten Königreichs',
        beschreibung: 'Flüge:\n' + 'Frühling ab 150€ | \n' +
            'Sommer ab 180€ | \n' +
            'Herbst ab 95€ | \n' +
            'Winter ab 95€ \n',
        bildUrl: "https://static.travelworks.de/media/header/sprachreisen/england/london/sprachreisen-london-sprachschule-telefonzelle.jpg",
        url: "https://www.notion.so/London-babac8152ee4449b9ac04ad94c095494"
    },
    {
        id: 7,
        preis: 111,
        zielStadt: 'London',
        zielLand: 'Vereinigten Königreichs',
        beschreibung: 'Flüge:\n' + 'Frühling ab 150€ | \n' +
            'Sommer ab 180€ | \n' +
            'Herbst ab 95€ | \n' +
            '       Winter ab 95€ \n',
        bildUrl: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg",
        url: "https://www.notion.so/London-486ea38680074ff1ab5dcd530c52da42"
    },
    {
        id: 8,
        preis: 539,
        zielStadt: 'London',
        zielLand: 'Vereinigten Königreichs',
        beschreibung: 'Flüge:\n' + 'Frühling ab 150€ | \n' +
            'Sommer ab 180€ | \n' +
            'Herbst ab 95€ | \n' +
            'Winter ab 95€ \n',
        bildUrl: "https://www.travelbook.de/data/uploads/2018/12/gettyimages-563429323_1545930029.jpg",
        url: "https://www.notion.so/Paris-a2eb3916d01d411392c051078c869fbb"
    },
    {
        id: 9,
        preis: 71,
        zielStadt: 'Mallorca',
        zielLand: 'Spanien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 69€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 225€ | \n' +
            'Winter ab 170€ \n',
        bildUrl: "https://www.posadaterrasanta.com/wp-content/uploads/2020/06/Cala-Formentor-Mallorca-e1567526359889.jpg",
        url: "https://www.notion.so/Mallorca-05df9450d10d4f11be5fa7304ce807f9"
    },
    {
        id: 10,
        preis: 124,
        zielStadt: 'Mallorca',
        zielLand: 'Spanien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 69€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 225€ | \n' +
            'Winter ab 170€ \n',
        bildUrl: "https://www.stuttgarter-nachrichten.de/media.media.d9fe5d61-d247-4433-bee7-f4ef60a321e9.original1024.jpg",
        url: "https://www.notion.so/Mallorca-9b69d4987b4346608999360161941f93"
    },
    {
        id: 11,
        preis: 344,
        zielStadt: 'Mallorca',
        zielLand: 'Spanien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 69€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 225€ | \n' +
            'Winter ab 170€ \n',
        bildUrl: "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/baleares/catedral-santamaria-palma-s434080438.jpg",
        url: "https://www.notion.so/Mallorca-86d8fa4d460e40c1a46395f9ecc515f3"
    },
    {
        id: 12,
        preis: 45,
        zielStadt: 'Ostsee',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://www.travelbook.de/data/uploads/2020/01/dpa-picture-alliance-126343493-highres_1579791995.jpg",
        url: "https://www.notion.so/Ostsee-54faa461ea31411cb7e3a9aac7aa99dc"
    },
    {
        id: 13,
        preis: 108,
        zielStadt: 'Ostsee',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2021/04/Ostsee.jpg?fit=1920%2C1080&ssl=1",
        url: "https://www.notion.so/Ostsee-79a4bf0a576a40da883d9bceed097157"
    },
    {
        id: 14,
        preis: 246,
        zielStadt: 'Ostsee',
        zielLand: 'Deutschland',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://cdn0.scrvt.com/954371187f9758716188a4deb091ab66/ab92d990c1e42b08/09c9f8e1be54/Li-Ostsee-Sellin-Seebad-600x400.jpg?nowebp=1",
        url: "https://www.notion.so/Ostsee-0a6fa8a72b4144d398fc4e63978e2f82"
    },
    {
        id: 15,
        preis: 61,
        zielStadt: 'Kreta',
        zielLand: 'Griechenland',
        beschreibung: 'Flüge:\n' + 'Frühling ab 250€ | \n' +
            'Sommer ab 300€ | \n' +
            'Herbst ab 250€ | \n' +
            'Winter ab 220€ \n',
        bildUrl: "https://d12a3lcl7jb9h2.cloudfront.net/assets/DERTOUR/bltfbb0fea29cacc801/625600bf9befd90be3a1a3ee/griechenland-kreta-kueste-g-506241238.jpg",
        url: "https://www.notion.so/Kreta-a682f9fc5131423cac7e5129ef5a395e"
    },
    {
        id: 16,
        preis: 195,
        zielStadt: 'Kreta',
        zielLand: 'Griechenland',
        beschreibung: 'Flüge:\n' + 'Frühling ab 250€ | \n' +
            'Sommer ab 300€ | \n' +
            'Herbst ab 250€ | \n' +
            'Winter ab 220€ \n',
        bildUrl: "https://greece-moments.com/wp-content/uploads/2019/12/Kreta-Urlaub-Erfahrung-Reisetipps-Hotels.jpg",
        url: "https://www.notion.so/Kreta-8b44afc0b5474b8d8f28c8341ddb859c"
    },
    {
        id: 17,
        preis: 678,
        zielStadt: 'Kreta',
        zielLand: 'Griechenland',
        beschreibung: 'Flüge:\n' + 'Frühling ab 250€ | \n' +
            'Sommer ab 300€ | \n' +
            'Herbst ab 250€ | \n' +
            'Winter ab 220€ \n',
        bildUrl: "https://assets.adac.de/image/upload/c_scale,f_auto,q_auto,t_2:1-default,w_1500/v1/ADAC-eV/KOR/Bilder/RF/griechenland-corona-reise-santorini-2104_ker4ad",
        url: "https://www.notion.so/Kreta-33e068962ce34d20b5a28fa6fc6b2c28"
    },
    {
        id: 18,
        preis: 61,
        zielStadt: 'Auffach ',
        zielLand: 'Österreich',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://www.deutsche-bildung.de/wp-content/uploads/2020/08/oesterreich_klein.jpg",
        url: "https://www.notion.so/sterreich-69367f05118c411e9295df1369ce944b"
    },
    {
        id: 19,
        preis: 169,
        zielStadt: 'Fügen',
        zielLand: 'Österreich',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://www.konpasu.de/wp-content/uploads/2020/04/Osterreich-Sehenswurdigkeiten-1024x439.jpg",
        url: "https://www.notion.so/sterreich-ee94f3f1e0f7418781dafa8645cbb927"
    },
    {
        id: 20,
        preis: 391,
        zielStadt: 'Kirchberg',
        zielLand: 'Österreich',
        beschreibung: 'keine Flüge derzeitig vorhanden',
        bildUrl: "https://herbstlust.de/wp-content/uploads/2020/06/Oesterreich-Reiseziel-Wandern-Skifahren-Alpen-kaernten-Gmunden-Salzburg-Graz-Steiermark-Tirol-1.jpg",
        url: "https://www.notion.so/sterreich-6db29c2b14d34d53b4dcad15d10523d5"
    },
    {
        id: 21,
        preis: 66,
        zielStadt: 'Ilanz',
        zielLand: 'Schweiz',
        beschreibung: 'Flüge:\n' + 'Frühling ab 111€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 111€ | \n' +
            'Winter ab 103€ \n',
        bildUrl: "https://www.urlaub-schweiz.biz/wp-content/uploads/flagge-schweiz-5958421_pix.jpg",
        url: "https://www.notion.so/Schweiz-f560413a8d754a86a64984f0798dbbca"
    },
    {
        id: 22,
        preis: 152,
        zielStadt: 'Scuol',
        zielLand: 'Schweiz',
        beschreibung: 'Flüge:\n' + 'Frühling ab 111€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 111€ | \n' +
            'Winter ab 103€ \n',
        bildUrl: "https://www.falstaff.de/fileadmin/_processed_/a/3/csm_Switzerland-Happy-Places-c-Shutterstock-2640_5f852af68c.jpg",
        url: "https://www.notion.so/Schweiz-0649cc02a7cd42dba147c6d3ebe8ea8e"
    },
    {
        id: 23,
        preis: 483,
        zielStadt: 'St. Moritz',
        zielLand: 'Schweiz',
        beschreibung: 'Flüge:\n' + 'Frühling ab 111€ | \n' +
            'Sommer ab 120€ | \n' +
            'Herbst ab 111€ | \n' +
            'Winter ab 103€ \n',
        bildUrl: "https://image.geo.de/30807232/t/Tf/v3/w1440/r1.5/-/locarno---adobe-stock-198102507.jpg",
        url: "https://www.notion.so/Schweiz-c729712a1c2f4b88b913097191016c40"
    },
    {
        id: 24,
        preis: 43,
        zielStadt: 'Vajont',
        zielLand: 'Italien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 130€ | \n' +
            'Sommer ab 140€ | \n' +
            'Herbst ab 109€ | \n' +
            'Winter ab 130€ \n',
        bildUrl: "https://cdn.urlaubsguru.at/wp-content/uploads/2019/02/Schoene-bunte-Stadtlandschaft-Cinque-Terre_shutterstock_257301595-1.jpg",
        url: "https://www.notion.so/Italien-ad9c3a56859c468e8a098b3ec8291bad"
    },
    {
        id: 25,
        preis: 157,
        zielStadt: 'Saltaus bei Meran',
        zielLand: 'Italien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 130€ | \n' +
            'Sommer ab 140€ | \n' +
            'Herbst ab 109€ | \n' +
            'Winter ab 130€ \n',
        bildUrl: "https://happytravels.de/wp-content/uploads/2019/05/Sch%C3%B6nste-St%C3%A4dte-in-Italien.jpg",
        url: "https://www.notion.so/Italien-ee37e1c90fc2477abbbaf10342c7f3e2"
    },
    {
        id: 26,
        preis: 532,
        zielStadt: 'Commezzadura',
        zielLand: 'Italien',
        beschreibung: 'Flüge:\n' + 'Frühling ab 130€ | \n' +
            'Sommer ab 140€ | \n' +
            'Herbst ab 109€ | \n' +
            'Winter ab 130€ \n',
        bildUrl: "https://www.fitreisen.de/blog/wp-content/uploads/sites/2/2020/10/RS18999_AdobeStock_275590531-1920x858.jpeg",
        url: "https://www.notion.so/Italien-23b6f5afd6454c67b4fa044b8519e6f4"
    },
];

export {artikel};
//Jil Janine Laurent