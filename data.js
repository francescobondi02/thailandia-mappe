// Map data. Coordinates: lat, lng. Edit here; every page reads this file.
// Point fields: id (for line/highlight), n (short name, max ~20 chars), lat, lng, note,
// dir (label side: right|left|top|bottom, default right), minor (small pin, label only on hover).
window.TRIP = {
  overview: {
    title: 'Il nostro percorso',
    line: ['bkk', 'urt', 'ks', 'lake', 'aonang', 'phiphi', 'kbv', 'cm', 'bkk'],
    points: [
      { id: 'bkk', n: 'Bangkok', lat: 13.7563, lng: 100.5018, note: 'Inizio (31/12 – 02/01) e fine viaggio' },
      { id: 'urt', n: 'Aeroporto Surat Thani', lat: 9.1326, lng: 99.1356, note: 'Arrivo 02/01', minor: true },
      { id: 'ks', n: 'Khao Sok', lat: 8.9116, lng: 98.5280, note: '02/01', dir: 'left' },
      { id: 'lake', n: 'Lago Cheow Lan', lat: 8.9760, lng: 98.8100, note: '03/01, notte sul lago', dir: 'top' },
      { id: 'aonang', n: 'Ao Nang', lat: 8.0320, lng: 98.8220, note: 'Dal 04/01', dir: 'right' },
      { id: 'phiphi', n: 'Koh Phi Phi ❓', lat: 7.7407, lng: 98.7784, note: 'o Koh Lanta, da decidere', dir: 'left' },
      { id: 'kbv', n: 'Aeroporto Krabi', lat: 8.0992, lng: 98.9862, note: 'Volo verso nord', minor: true },
      { id: 'cm', n: 'Chiang Mai ❓', lat: 18.7883, lng: 98.9853, note: 'da confermare' }
    ]
  },
  bangkok1: {
    title: 'Tappa 1 · Bangkok (31/12 – 02/01)',
    highlight: 'hostel',
    points: [
      { id: 'hostel', n: 'Baan Nampetch', lat: 13.76106, lng: 100.50175, note: 'Baan Nampetch Hostel, il nostro alloggio' },
      { n: 'Khao San Road', lat: 13.7589, lng: 100.4971, note: 'A 10–15 min a piedi', dir: 'left' },
      { n: 'Wat Pho', lat: 13.7465, lng: 100.4928, note: 'Visita + massaggio' },
      { n: 'Molo Tha Tien', lat: 13.7466, lng: 100.4904, note: 'Molo N8, battello giallo da Phra Arthit (N13)', dir: 'top' },
      { n: 'Sala Rattanakosin', lat: 13.7454, lng: 100.4905, note: 'Rooftop per il tramonto', dir: 'left' },
      { n: 'Yaowarat', lat: 13.7398, lng: 100.5098, note: 'Chinatown, cena street food', dir: 'top' },
      { n: 'Molo Ratchawong', lat: 13.7395, lng: 100.5040, note: 'Boat Party di Capodanno (opzione)', dir: 'bottom' },
      { n: 'Wat Arun', lat: 13.7437, lng: 100.4889, note: 'Visita il 12/01', dir: 'bottom' }
    ]
  },
  khaosok: {
    title: 'Tappa 2 · Khao Sok e lago (02 – 04/01)',
    highlight: 'bungalow',
    points: [
      { n: 'Aeroporto Surat Thani', lat: 9.1326, lng: 99.1356, note: 'Arrivo 02/01 ore 10:15', dir: 'left' },
      { id: 'bungalow', n: 'River & Jungle', lat: 8.90811, lng: 98.52395, note: 'Khao Sok River & Jungle Bungalow. Notte 02/01, valigie fino al 04/01', dir: 'left' },
      { n: 'Our Jungle Camp', lat: 8.9080, lng: 98.5303, note: 'Cucina' },
      { n: 'Park HQ', lat: 8.9116, lng: 98.5280, note: 'Ingresso parco, sentieri, camminata notturna', dir: 'top' },
      { n: 'Molo Ratchaprapha', lat: 8.9760, lng: 98.8100, note: 'Partenza barca per il lago (posizione indicativa)' }
    ]
  },
  aonang: {
    title: 'Tappa 3 · Ao Nang e Railay',
    points: [
      { n: 'Spiaggia Ao Nang', lat: 8.0306, lng: 98.8236, note: 'Longtail per Railay, tramonto' },
      { n: 'Night Market', lat: 8.0336, lng: 98.8230, note: 'Ao Nang Landmark Night Market (posizione indicativa)', dir: 'left' },
      { n: 'Railay West', lat: 8.0115, lng: 98.8370, note: '' },
      { n: 'Phra Nang Beach', lat: 8.0057, lng: 98.8379, note: 'Phra Nang Cave Beach' },
      { n: 'Molo Nopparat Thara', lat: 8.0490, lng: 98.7980, note: 'Traghetto per Phi Phi 09:30', dir: 'bottom' }
    ]
  }
};
