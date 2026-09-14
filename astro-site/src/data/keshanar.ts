export type KeshanarCharacter = {
  slug: string;
  name: string;
  classLine: string;
  familyConnection: string;
  supernaturalHook: string;
  pdf: string;
  sheetPages: string[];
};

const pages = (prefix: string, count: number, padded = false) =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const suffix = padded ? String(number).padStart(2, '0') : String(number);
    return `/images/keshanar/${prefix}-${suffix}.png`;
  });

export const keshanarCharacters: KeshanarCharacter[] = [
  {
    slug: 'pc1-zahur',
    name: 'Zahur',
    classLine: 'Rekh-Shenu wizard (Astronomer)',
    familyConnection: 'The Sa-Meru family sheltered Zahur and funded his training.',
    supernaturalHook: 'An unseen ancient watcher has begun to follow the edges of his life.',
    pdf: '/downloads/keshanar/zahur-character-sheet.pdf',
    sheetPages: pages('zahur-sheet', 11, true),
  },
  {
    slug: 'pc2-asha',
    name: 'Asha',
    classLine: "Sha'Kheti cleric (Judgement Domain)",
    familyConnection: 'The Sa-Meru family helped obtain treatment for Asha\'s sick sibling.',
    supernaturalHook: 'Near the tomb, Asha hears whispers in a language she cannot decipher.',
    pdf: '/downloads/keshanar/asha-character-sheet.pdf',
    sheetPages: pages('asha-sheet', 10, true),
  },
  {
    slug: 'pc3-ramesh',
    name: 'Ramesh',
    classLine: 'Astennu rogue (Temple Agent)',
    familyConnection: 'The Sa-Meru family sheltered Ramesh when he was in trouble.',
    supernaturalHook: 'He keeps dreaming of a gem glowing in the dark.',
    pdf: '/downloads/keshanar/rhamesh-character-sheet.pdf',
    sheetPages: pages('rhamesh-sheet', 9),
  },
  {
    slug: 'pc4-khara-tep',
    name: 'Khara-Tep',
    classLine: 'Human fighter (Lion Legionnaire)',
    familyConnection: 'Khara-Tep carries a personal debt to the Sa-Meru family.',
    supernaturalHook: 'He has faced curses before, but this one feels different.',
    pdf: '/downloads/keshanar/khara-tep-character-sheet.pdf',
    sheetPages: pages('khara-tep-sheet', 6),
  },
  {
    slug: 'pc5-zemari',
    name: 'Zemari',
    classLine: "Ren-Khepri, Warrior of Khet Ma'a",
    familyConnection: 'Zemari guided the family through an attack and was the only survivor.',
    supernaturalHook: 'Visions of those who died call out for rescue.',
    pdf: '/downloads/keshanar/zemari-character-sheet.pdf',
    sheetPages: pages('zemari-sheet', 9),
  },
];

export const keshanarScenes = [
  {
    slug: 'scene1-entrance',
    name: 'The Entrance to the Tomb of Kharis Sa-Meru',
    liveUrl: 'https://www.eoeap.com/keshanar/scene1-entrance',
  },
  {
    slug: 'scene2-tomb',
    name: 'The Crypt of Kharis Sa-Meru',
    liveUrl: 'https://www.eoeap.com/keshanar/scene2-tomb',
  },
] as const;

export const roll20Link = 'https://app.roll20.net/join/21953473/3sHdZQ';
