// Prefixes with weights
export const prefixes = [
  // Elf prefixes (weight 3) 3 / 8 ≈ 37.5%
  { value: "Ae", type: "Elf", weight: 3 },
  { value: "Eri", type: "Elf", weight: 3 },
  { value: "Syl", type: "Elf", weight: 3 },
  { value: "Alth", type: "Elf", weight: 3 },
  { value: "Vae", type: "Elf", weight: 3 },

  // Human prefixes (weight 3) 3 / 8 ≈ 37.5%
  { value: "Bor", type: "Human", weight: 3 },
  { value: "Ro", type: "Human", weight: 3 },
  { value: "Har", type: "Human", weight: 3 },
  { value: "Cor", type: "Human", weight: 3 },
  { value: "Ed", type: "Human", weight: 3 },

  // Dwarf prefixes (weight 2) 2 / 8 = 25%
  { value: "Dur", type: "Dwarf", weight: 2 },
  { value: "Kil", type: "Dwarf", weight: 2 },
  { value: "Brum", type: "Dwarf", weight: 2 },
  { value: "Gar", type: "Dwarf", weight: 2 },
  { value: "Bal", type: "Dwarf", weight: 2 }
];

// Suffixes with weights
export const suffixes = [
  // Elf suffixes (weight 3) 3 / 8 ≈ 37.5%
  { value: "wyn", type: "Elf", weight: 3 },
  { value: "riel", type: "Elf", weight: 3 },
  { value: "lith", type: "Elf", weight: 3 },
  { value: "elith", type: "Elf", weight: 3 },
  { value: "nael", type: "Elf", weight: 3 },

  // Human suffixes (weight 3) 3 / 8 ≈ 37.5%
  { value: "ora", type: "Human", weight: 3 },
  { value: "ara", type: "Human", weight: 3 },
  { value: "ine", type: "Human", weight: 3 },
  { value: "arae", type: "Human", weight: 3 },
  { value: "eva", type: "Human", weight: 3 },

  // Dwarf suffixes (weight 2) 2 / 8 = 25%
  { value: "mir", type: "Dwarf", weight: 2 },
  { value: "bek", type: "Dwarf", weight: 2 },
  { value: "drin", type: "Dwarf", weight: 2 },
  { value: "karr", type: "Dwarf", weight: 2 },
  { value: "gorn", type: "Dwarf", weight: 2 }
];

export const prefixSentences = {
  Elf: [
    "A mystical land where magic flows freely.",
    "An ancient world filled with wonders beyond imagination.",
    "A realm of forests and enchanted creatures."
  ],
  Human: [
    "A land of bustling towns and sprawling kingdoms.",
    "A world of brave adventurers and feudal lords.",
    "A realm of shifting alliances and human ambition."
  ],
  Dwarf: [
    "A rugged world carved from stone and iron.",
    "A land of industrious folk and sprawling mines.",
    "A harsh realm where survival depends on grit and skill."
  ]
};

export const suffixSentences = {
  Elf: [
    "A council of mages rules the civilized world.",
    "Ancient secrets guide the fate of its people.",
    "Mystical forces shape the destiny of all who dwell here."
  ],
  Human: [
    "Feudal kingdoms vie for power and influence.",
    "Wars and diplomacy shape the borders of the land.",
    "Heroes rise and fall with the tides of history."
  ],
  Dwarf: [
    "Industrial strongholds dominate the landscape.",
    "Mining and craftsmanship define the society.",
    "Stone halls echo with the toil of generations."
  ]
};