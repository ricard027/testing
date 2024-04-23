export const getCorrespondingImage = (category: string): string | undefined => {
  interface Images {
    [key: string]: string
  }

  const images: Images = {
    people:
      'https://i.pinimg.com/564x/ca/38/10/ca38100f5d5b1106dcdd46730a18b619.jpg',
    planets:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    films:
      'https://i.pinimg.com/564x/41/19/cd/4119cdcaf8a9c46693541cb32b343381.jpg',
    species:
      'https://i.pinimg.com/564x/95/d4/64/95d46484475c97532fd4f8281277011e.jpg',
    vehicles:
      ' https://i.pinimg.com/564x/02/b0/68/02b0686da70428fd08666b891e853054.jpg',
    starships:
      'https://i.pinimg.com/564x/cd/bf/ae/cdbfae9bfe217a78700274d869b839ca.jpg',
    'Luke Skywalker':
      'https://i.pinimg.com/564x/ef/8a/54/ef8a54b3f1e525e2e03819842278cee1.jpg',
    'C-3PO':
      'https://i.pinimg.com/564x/25/a0/9e/25a09ec46ad6788f4cf806e86a2302d3.jpg',
    'R2-D2':
      'https://i.pinimg.com/564x/5d/ff/9f/5dff9f05c8bce0bc4bf4e589b9c23c33.jpg',
    'Darth Vader':
      'https://i.pinimg.com/564x/23/69/60/236960ec5800a56e2b6fab97441dd691.jpg',
    'Leia Organa':
      'https://i.pinimg.com/564x/db/8c/15/db8c1568066a068e9c75a8698f0cd1ba.jpg',
    'Owen Lars':
      'https://i.pinimg.com/564x/c7/92/a1/c792a192c676e347b7095e6ae03121df.jpg',
    'Beru Whitesun lars':
      'https://i.pinimg.com/564x/5b/ae/4b/5bae4ba986c1b7dabb7498011bb676eb.jpg',
    'R5-D4':
      'https://i.pinimg.com/564x/71/c3/85/71c38511b05d492cfdd27a4e44eeb76a.jpg',
    'Biggs Darklighter':
      'https://i.pinimg.com/564x/d6/ec/bd/d6ecbd55818a1202d9edaaf6632bb7f8.jpg',
    'Obi-Wan Kenobi':
      'https://i.pinimg.com/564x/2c/8f/8f/2c8f8f715c7ad3a8dfe8846cc60c049e.jpg',
    Tatooine:
      'https://i.pinimg.com/564x/98/53/40/985340c4a35b86201b55c247a5f158a6.jpg',
    Alderaan:
      'https://i.pinimg.com/564x/29/fa/b8/29fab8141894bb0e8b2a758ddceb097a.jpg',
    'Yavin IV':
      'https://i.pinimg.com/564x/29/6e/8e/296e8ebce0d9c636d40c0ad78b8aca26.jpg',
    Hoth: 'https://i.pinimg.com/564x/b9/b3/cf/b9b3cff1cec18f75e19d4d4f9cf8cfb4.jpg',
    Dagobah:
      'https://i.pinimg.com/564x/5e/60/51/5e6051efa08939871f6dc35e51de03db.jpg',
    Bespin:
      'https://i.pinimg.com/736x/5f/65/9f/5f659f5ab0ec8118cf03db524d063c93.jpg',
    Endor:
      'https://i.pinimg.com/564x/a9/c7/b1/a9c7b1f33588f9ae14c5ace036508ec6.jpg',
    Naboo:
      'https://i.pinimg.com/736x/90/b4/6f/90b46f6dd83da48a4b778176a421d130.jpg',
    Coruscant:
      'https://i.pinimg.com/564x/0d/30/e9/0d30e933b28fb78304a4bec67ff0073d.jpg',
    Kamino:
      'https://i.pinimg.com/564x/58/6f/2a/586f2ab18e7ac9bf11a807b2516cd2a7.jpg',
    'A New Hope':
      'https://i.pinimg.com/564x/f2/1d/92/f21d9251342c99d4c7b50e93d8700f66.jpg',
    'The Empire Strikes Back':
      'https://i.pinimg.com/564x/ef/b9/4b/efb94b356f51d1d01c6f9dedae6fc470.jpg',
    'Return of the Jedi':
      'https://i.pinimg.com/564x/7d/9c/1d/7d9c1d80f6a97e7cae6e3903e3584afd.jpg   ',
    'The Phantom Menace':
      'https://i.pinimg.com/564x/36/15/9b/36159bcb92b5be060af7147e8ea08d43.jpg',
    'Attack of the Clones':
      'https://i.pinimg.com/564x/12/39/46/123946c3ec7f04e97171359cfc99374a.jpg',
    'Revenge of the Sith':
      'https://i.pinimg.com/564x/dc/40/61/dc406175975ac8685a82bbbcfa25cd89.jpg',
    Human:
      'https://i.pinimg.com/564x/ef/8a/54/ef8a54b3f1e525e2e03819842278cee1.jpg',
    Droid:
      'https://i.pinimg.com/564x/25/a0/9e/25a09ec46ad6788f4cf806e86a2302d3.jpg',
    Wookie:
      'https://i.pinimg.com/564x/88/f5/db/88f5dbc66b6759173b8ed1dfdb5d4630.jpg',
    Rodian:
      'https://i.pinimg.com/564x/40/01/63/40016317629293742746e92b5c5ffcf4.jpg',
    Hutt: 'https://i.pinimg.com/564x/ed/85/38/ed8538fbefcd17640828b0c2b522265a.jpg',
    "Yoda's species":
      'https://i.pinimg.com/564x/52/67/02/5267029e093f0fd4f8ecb32724fdd345.jpg',
    Trandoshan:
      'https://i.pinimg.com/564x/10/6f/b8/106fb830cd0e3ea41cf28405e0d37581.jpg',
    'Mon Calamari':
      'https://i.pinimg.com/564x/25/c5/67/25c56732e415b9df0e2404c87c4b3885.jpg',
    Ewok: 'https://i.pinimg.com/564x/11/1a/3a/111a3ae9bb419a930251be18dcffedb0.jpg',
    Sullustan:
      'https://i.pinimg.com/564x/14/e6/ad/14e6ad7e693aa366e8f6ed7232d661db.jpg',
    'Sand Crawler':
      'https://i.pinimg.com/564x/a5/20/5f/a5205f599d22aec5113e9bca9c29bcc6.jpg',
    'T-16 skyhopper':
      'https://i.pinimg.com/564x/d5/a6/a6/d5a6a68fbefbfc1f77b36a3f8839d95a.jpg',
    'X-34 landspeeder':
      'https://i.pinimg.com/564x/a4/ff/28/a4ff285d45f7d5221b5494f0963c38cd.jpg',
    'TIE/LN starfighter': '',
    Snowspeeder:
      'https://i.pinimg.com/564x/27/fc/06/27fc06c09ce1b59407c9d6fccb702efd.jpg',
    'TIE bomber':
      'https://i.pinimg.com/564x/2c/8f/80/2c8f801998a9dd852accacd34ef7a1bd.jpg',
    'AT-AT':
      'https://i.pinimg.com/564x/7f/7a/6c/7f7a6c8c6041a6c2358bb17a029a20e4.jpg',
    'AT-ST':
      'https://i.pinimg.com/564x/c9/4c/78/c94c78950781237ae8f81233cfa54b6c.jpg',
    'Storm IV Twin-Pod cloud car':
      'https://i.pinimg.com/564x/13/24/4b/13244b5102c46e19f40862feec938c3a.jpg',
    'Sail barge':
      'https://i.pinimg.com/564x/7c/7e/67/7c7e67a9186cf087835e92729f7a1416.jpg',
    'CR90 corvette':
      'https://i.pinimg.com/564x/e0/63/d0/e063d03b71d4adc7a5a8de3eabea206a.jpg',
    'Star Destroyer':
      'https://i.pinimg.com/564x/61/fa/ed/61faeda3c3f7791fd9cc44cdbc816418.jpg',
    'Sentinel-class landing craft': '',
    'Death Star':
      'https://i.pinimg.com/564x/19/8d/da/198dda6fce672170937a5061423d6c44.jpg',
    'Millennium Falcon':
      'https://i.pinimg.com/564x/6c/cd/b8/6ccdb8881759986ddb32c8ac9bb47161.jpg',
    'Y-wing':
      'https://i.pinimg.com/564x/16/6d/f5/166df5081fdcb3c035aac0699b095879.jpg',
    'X-wing':
      'https://i.pinimg.com/564x/11/29/bd/1129bd38924fa14b9af613eff48c9ef0.jpg',
    'TIE Advanced x1':
      'https://i.pinimg.com/564x/5a/36/58/5a36589c86675837dbea41cf12821cfc.jpg',
    Executor:
      'https://i.pinimg.com/564x/43/9e/50/439e504778d1a0bd842114fb44a32db8.jpg',
    //@ts-ignore
    'CR90 corvette':
      'https://i.pinimg.com/564x/20/dd/b4/20ddb4a46201419d4931e2733a04e94d.jpg',
    'Rebel transport':
      'https://i.pinimg.com/564x/d3/ea/39/d3ea39a5bad54784876aa0c2d9ac9620.jpg'
  }

  return images[category]
}
