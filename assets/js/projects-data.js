// Project data for Andry Purnomo's portfolio.
// Fill in `links` (itch / youtube / github / web) as they become available —
// buttons only render for links that are non-null.
const PROJECTS = [
  {
    slug: "financial-fighter",
    title: "Financial Fighter",
    year: 2025,
    role: "Programmer",
    tags: ["Rogue-like", "Strategy", "Card"],
    platform: "PC & Browser",
    featured: true,
    description:
      "A chaotic rogue-like card strategy game where you deploy quirky workers and chain powerful synergies to rescue your company from financial ruin. The goal is to crush your mounting debt before it crushes you — fast turns and clever combos are key to surviving the corporate apocalypse.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "super-duper-space-wizard",
    title: "Super Duper Space Wizard",
    year: 2025,
    role: "Programmer",
    tags: ["Casual", "Typing"],
    platform: "PC & Browser",
    featured: true,
    description:
      "A retro-style wizard battle game. The goal is to defeat aliens by typing spells quickly and accurately. The game also features a hidden anomaly that adds a mysterious twist to the gameplay.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "heroes-of-indonesia",
    title: "Heroes of Indonesia",
    year: 2020,
    role: "Whole Role",
    tags: ["Turn-Based", "Card", "Education"],
    platform: "Android",
    featured: true,
    description:
      "A turn-based card game where the target is to beat the last boss while building your deck by buying new cards. Doubles as an education game — the card collection tells the story of each character with detailed information.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "spirit-of-weapon",
    title: "Spirit of Weapon",
    year: 2022,
    role: "Programmer",
    tags: ["Tower Defense"],
    platform: "Android",
    description:
      "A Plant-vs-Zombie-alike tower defense game. The target is to defeat the enemy while preventing them from passing the holy grail.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "game-anak",
    title: "Game Anak",
    year: 2022,
    role: "Programmer",
    tags: ["Educational", "Kids", "Board Game"],
    platform: "Android",
    description:
      "An educational kids game — a snake-and-ladders-alike board game where the target is to be the first to reach the finish line.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "pandemic",
    title: "Pandemic",
    year: 2022,
    role: "Programmer",
    tags: ["Adventure", "Survival"],
    platform: "PC",
    description:
      "An adventure game about a virus that attacked humanity. The target is to kill all enemies and level up to get stronger. Made for a friend's thesis project.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "world-of-spiretopia",
    title: "World of Spiretopia",
    year: 2021,
    role: "Lead Programmer",
    tags: ["Shooter", "Tower Builder", "Multiplayer"],
    platform: "Android",
    description:
      "A shooter tower-builder game. The target is to build the tower as fast as possible while managing resources for weapons and the tower itself. This game was an entry for IGSI (Indigo Game Startup Indonesia) Batch 4.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "space-invader-reborn",
    title: "Space Invader Reborn",
    year: 2021,
    role: "Whole Role",
    tags: ["Space Shooter"],
    platform: "PC",
    description:
      "A mini space shooter game — simple and to the point: kill as many ships as possible and rack up the highest score you can.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "garda-gerdy",
    title: "Garda Gerdy",
    year: 2020,
    role: "Programmer",
    tags: ["Side-scrolling Runner", "Advergame"],
    platform: "Android",
    description:
      "A side-scrolling endless runner set across multiple real locations in Yogyakarta where Garda Gerdy stores are located. My first advertising game.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "biovolve-battle-arena",
    title: "Biovolve: Battle Arena",
    year: 2019,
    role: "Programmer",
    tags: ["Multiplayer", "Fighting"],
    platform: "PC",
    description:
      "An online multiplayer battle game set in a post-apocalyptic theme, where players fight as mutated living things on an earth ravaged by pollution.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "elemental-battle",
    title: "Elemental Battle",
    year: 2019,
    role: "Programmer",
    tags: ["Casual", "HTML5"],
    platform: "Browser (localhost)",
    description:
      "A remade casual HTML5 game — guess who wins between two elements based on the tutorial. Made while interning at Toge Productions.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "arrow-shooter",
    title: "Arrow Shooter Game",
    year: 2019,
    role: "Programmer",
    tags: ["Casual", "HTML5"],
    platform: "Browser (localhost)",
    description:
      "A remade casual HTML5 game — shoot the enemy until it's gone while keeping it away from the green bar below. Made while interning at Toge Productions.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "knife-hit-remake",
    title: "Knife Hit Remake",
    year: 2019,
    role: "Programmer",
    tags: ["Casual", "HTML5"],
    platform: "Browser (localhost)",
    description:
      "A remade casual HTML5 game — hit the enemy until the arrow count drops to zero. Made while interning at Toge Productions.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "better-knife-hit",
    title: "Better Knife Hit",
    year: 2019,
    role: "Programmer",
    tags: ["Casual", "HTML5"],
    platform: "Browser (localhost)",
    description:
      "Same core idea as Knife Hit — hit the enemy until the arrow count drops to zero — but built from an entirely different, physics-free codebase. Made while interning at Toge Productions.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "vr-kinect-rhythm",
    title: "Prototype Kinect & VR Rhythm Game",
    year: 2019,
    role: "Programmer",
    tags: ["Rhythm", "VR", "Kinect"],
    platform: "VR / Kinect",
    description:
      "A rhythm game prototype created to explore and learn how VR and Kinect input work.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "login",
    title: "Login",
    year: 2018,
    role: "Programmer",
    tags: ["Puzzle", "Fighting", "Adventure"],
    platform: "PC",
    description:
      "Tells the story of a schoolboy trapped inside a game world full of bullying, mixing puzzle, fighting, and adventure mechanics.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "air-strike-prototype",
    title: "Prototype Air-Strike Game",
    year: 2018,
    role: "Whole Role",
    tags: ["Shooter", "Prototype"],
    platform: "PC",
    description:
      "A shooter prototype telling the story of an alien invasion of Earth, featuring the ability to transform into objects found on Earth.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "bingo-board",
    title: "Bingo Board",
    year: 2018,
    role: "Whole Role",
    tags: ["Application", "Quiz"],
    platform: "PC",
    description:
      "Not a game, but a quiz-competition application (Lomba Cerdas Cermat) built for FACTION #3 at Sanata Dharma University. Quizzes open by clicking a bingo number, and completing a bingo awards bonus points to the player who answers correctly.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "artefact-defender",
    title: "Artefact Defender",
    year: 2017,
    role: "Programmer",
    tags: ["Tower Defense"],
    platform: "PC",
    description:
      "A tower defense game where players must guard ancient artefacts from demons trying to steal and destroy them.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "e-magazine",
    title: "Prototype E-Magazine",
    year: 2017,
    role: "Whole Role",
    tags: ["Interactive Multimedia"],
    platform: "PC",
    description:
      "Not a game — a self-directed attempt at building an interactive e-magazine application.",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "bobs-adventure",
    title: "Bob's Adventure",
    year: 2017,
    role: "Programmer",
    tags: ["Side-scrolling", "Adventure", "Platformer"],
    platform: "PC",
    description:
      "A 2D side-scrolling platform adventure game — and the very first game I ever made.",
    images: ["1.jpg", "2.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  },
  {
    slug: "career-mastery",
    title: "Career Mastery",
    year: 2017,
    role: "Whole Role",
    tags: ["Board Game", "Strategy"],
    platform: "Physical Board Game",
    description:
      "A physical strategy board game I designed and built myself: make your way to clear your quest while others try to stop you. Includes a board, instruction book, 6 character figures, 63 terrain tiles, a die, and 60 cards (6 character, 8 quest, 10 lucky, 36 chance).",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    links: { itch: null, youtube: null, github: null, web: null }
  }
];
