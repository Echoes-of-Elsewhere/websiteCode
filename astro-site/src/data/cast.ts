/** Interview questions shared by every cast profile. */
export const qaQuestions = [
  { id: 'interested-rpg', question: 'What got you interested in RPGs?' },
  { id: 'first-gaming', question: 'What was your first gaming experience like?' },
  { id: 'favorite-moment', question: 'Favorite character or game moment?' },
  { id: 'other-cool-thing', question: 'What other cool things do you do?' },
  { id: 'favorite-media', question: 'Favorite movie, book, or character?' },
  { id: 'gm-player-both', question: 'GM, Player, or Both, and why?' },
] as const;

export type QaAnswers = Partial<Record<(typeof qaQuestions)[number]['id'], string>>;

export interface CastMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  appearanceCount?: number;
  qa?: QaAnswers;
}

export const castMembers: CastMember[] = [
  {
    name: 'Keith Keffer',
    role: 'Keeper of Secrets (GM)',
    qa: {
      'interested-rpg':
        'I wanted to write video games when I was a kid, and back then the cool adventure stories were text based. So, with no real clue what Dungeons and Dragons was, I picked up a copy of The Palace of the Silver Princess. I was going to convert the module to a text based game, like Zork. It did not work out as well as I had planned, but it was still a fun project. I did not get a copy of the rules until a few years later.',
      'first-gaming':
        "I was in the army, and I happened to be in the rec center when a group of people were wrapping up their session. I watched for a bit, and afterwards, the DM asked if I was interested in learning how to play. He immediately had me create a character, a thief, and had me sneak into a dungeon where a dragon's horde was hidden. It was a quick solo adventure that probably only lasted an hour. I did not understand any of the rules, and I just did what made sense in the moment.",
      'favorite-moment':
        'There are too many, and they are constantly changing. Recently we wrapped a Daggerheart campaign, and it was truly an epic moment. Characters sacrificed themselves for the greater good. They saved the day. There was a tearful memorial for those who were lost, and at the very end a little teaser filled with hope for the future. It hit all of the spots that I enjoy in a game.',
      'other-cool-thing': 'I am a published author and a full time martial arts instructor.',
      'favorite-media':
        'Much like my favorite game moment, this is always evolving. David Gemmell is one of my favorite authors, and I probably quote The Princess Bride too often. (Inconceivable, right.)',
      'gm-player-both':
        'I am both. I GM a ton, but I also play a ton. Thanks to online game play, there is no reason not to get a chance to do both. My challenge is not finding a game. It is finding the time to play them. I started as a GM because no one else knew what I was talking about when I mentioned D&D to them, so I had to drag them into the game. I am still constantly picking up new game systems and trying to drag my friends into them. Now I am fortunate enough to also have a chance to play with some amazing GMs.',
    },
  },
  {
    name: 'Leah Skye',
    role: 'Blake Emberlich / Fenya Ciarin',
    image: '/images/cast/leah-skye.jpg',
    appearanceCount: 32,
    qa: {
      'interested-rpg':
        'Before TTRPGs, I had a long history with video games and MMORPGs in all their facets, from casual roleplay to theorycrafting builds for PVE and competitive PVP. Shoutout to Guild Wars 2 and BioWare games. I grew up a library kid, an endless series of speculative fiction books always close at hand. Critical Role Campaign 1 introduced me to RPGs. The collaborative storytelling and improv, the game mechanics and random chance, hooked me right away. I love stories, and RPGs are one of my favorite mediums.',
      'first-gaming':
        "My first time was a clumsy, awkward, and inebriated attempt at Pathfinder 1e with friends one evening in college. I did not give it a fair chance, and I can scarcely remember a thing about it. It was not until years later, when I DM'd a custom Lost Mines of Phandelver campaign, that I was truly hooked.",
      'favorite-moment':
        "My favorite character moments are when a character makes a tragic choice singular to who they are. Luke Skywalker leaving training to fight Vader. Dmitri Karamazov's fatal visit to his father. Gideon's choice at the Canaan House.",
      'other-cool-thing':
        'I rollerblade everywhere all the time on my timeworn pair of FR1 90s. I am always reading a new book, and am writing my first novel. Look for it sometime in the next decade! I also lift weights, cook a mean butternut squash curry and take care of a very spoiled rabbit.',
      'favorite-media':
        'Harrowhark Nonagesimus of The Locked Tomb series by Tamsyn Muir; The Broken Earth trilogy by N. K. Jemisin; The Brothers Karamazov by Dostoevsky; Holden, Naomi, Amos, and Drummer of The Expanse series by James S. A. Corey.',
      'gm-player-both': 'Any, either, both! Whatever gets me at the table telling stories with cool people.',
    },
  },
  {
    name: 'Tony Keoni',
    role: 'Dr Elliot Knight / Illyot Knightreign',
    image: '/images/cast/tony-keoni.jpg',
    appearanceCount: 32,
  },
  {
    name: 'PG',
    role: 'Professor / Father Gregor',
    image: '/images/cast/pg.jpg',
    appearanceCount: 32,
  },
  {
    name: 'Shawn Johnson',
    role: 'Ivan Petrovich III',
    image: '/images/cast/shawn-johnson.jpg',
    appearanceCount: 12,
    qa: {
      'interested-rpg':
        'I was a huge fantasy reader and wanted to adventure in these books, then I found the Jackson and Livingston novels, basically choose your own adventure books with dice rules and was hooked from there.',
      'first-gaming':
        'I played Rifts (Palladium) with a high school Drama friend who was a VERY talented story teller.',
      'other-cool-thing': 'I have done some voice training and enjoy it, and some martial arts too (wushu and kempo).',
      'favorite-media': 'Hot Fuzz is my favorite movie, I think greater than even Shaun of the Dead.',
      'gm-player-both': 'Player, because I always overcommit and bury myself as a DM.',
    },
  },
  {
    name: 'E. D. Jones',
    role: 'Vince Pascal / Rax Koshak',
    image: '/images/cast/ed-jones.jpg',
    appearanceCount: 30,
    qa: {
      'interested-rpg':
        'I feel like I have always been interested in RPGs and I cannot think of an inciting incident as to why. It is only in the last handful of years that I have had the opportunity to really dig into a bunch of different systems - Call of Cthulhu, D&D, Pathfinder, Kult: Divinity Lost, Delta Green, and on and on. I particularly love horror gaming just because I think it is fascinating to roleplay how a squishy human would deal with seeing something that twists reality itself into being an unreliable narrator.',
      'first-gaming':
        'I have memories of my older brother rolling me Marvel characters to humor me when I was very young, but we would not actually play a game. I cannot remember the first game I ever played, but it was probably D&D, or maybe Pathfinder.',
      'favorite-moment':
        "Recently, I played a D&D campaign as an Aarakocra ranger with a backstory that his entire village had been wiped out by a green dragon. The game lasted a full year or more, and it was a great group. The DM made it clear he wanted to sunset the campaign, so he jumped us forward to level 12. I multiclassed some levels in rogue, and by the final couple of battles I was at the head of the fight, downing at least a couple of actual dragons almost single-handedly. Plus I was the party's reconnaissance drone, rolling high 30s in stealth (might have rolled 40 with a pass without trace). The greatest moment came when I had almost defeated the green dragon that had killed my village. I cannot remember the spell I used, but for flavor I said that the dragon saw the spirits of my kinsman as I killed it to death. I then took its head back to the ruins of my village and started to rebuild. End of campaign.",
      'other-cool-thing':
        'I am a writer of weird fiction, cosmic horror, sci-fi, and broadly "other." I published my first novel serially on Substack. It is a sometimes funny weird sci-fi horror urban fantasy queer paranormal romance novel about werewolves and aliens, titled AWOO: The Association of Werewolves and Oppressed Otherlings. I have also had several stories published in anthologies and lit mags.',
      'favorite-media':
        "Favorite movie is Amelie, because it is just so sweet and good and quirky. Favorite book remains The Hitchhiker's Guide to the Galaxy, because I am a hoopy frood who knows where my towel is. Favorite character is probably also Amelie, if it is not Wall-E. I do not know. I am a sap. What can I say?",
      'gm-player-both':
        'Both. Used to be just a player, but last year I took the plunge and started running Call of Cthulhu. Recently started running Delta Green, and I am about to run Impossible Landscapes for a group of friends, which is daunting.',
    },
  },
  {
    name: 'Finn',
    role: 'Atlas / Uxas',
    image: '/images/cast/finn.png',
    appearanceCount: 12,
  },
];
