// Prefixes with weights
const prefixes = [
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
const suffixes = [
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

const prefixSentences = {
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

const suffixSentences = {
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

function weightedRandom(items) {
    // Calculate the sum of all weights in the array
    // This represents the total “range” for our random selection
    // reduce - processes all the elements in a collection and "reduces" them into a single value
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    // Generate a random number between 0 and totalWeight
    // This number determines which item will be selected
    let random = Math.random() * totalWeight;

    for (let item of items) {
        // Subtract the current item's weight from the random number
        // -= = assignment operator, subtract and assign
        random -= item.weight;
        // If the random number is now zero or less,
        // it means the current item is the selected one
        if (random <= 0) {
            return item;
        }
    }
}

export function generateWorldName() {
    const prefix = weightedRandom(prefixes);
    const suffix = weightedRandom(suffixes);

    // Return a structured object containing:
    // - the combined world name
    // - the full prefix object (value, type, weight)
    // - the full suffix object (value, type, weight)
    return {
        name: prefix.value + suffix.value,
        prefix, // object: { value, type, weight }
        suffix  // object: { value, type, weight }
    };
}

// Generate a two-sentence summary based on the types of the selected prefix and suffix
export function generateWorldSummary(world) {
    const prefixSentencePool = prefixSentences[world.prefix.type];
    const suffixSentencePool = suffixSentences[world.suffix.type];

    // Pick a random sentence from the array: Math.random() generates 0–1, multiply by array length, 
    // Math.floor rounds down to get a valid array index
    const prefixSentence =
        prefixSentencePool[Math.floor(Math.random() * prefixSentencePool.length)];
    const suffixSentence =
        suffixSentencePool[Math.floor(Math.random() * suffixSentencePool.length)];

    return `${prefixSentence} ${suffixSentence}`;
}

//TODO: Sentence pools - add grammar logic and dynamic assembly
//TODO: combined prefix/suffix flavor effects - blending prefixes/suffixes probabilistically and adjusting tone based on combined weights.
//TODO: Add rare traits
//TODO: weight-influenced summary sentences, Right now, weight influences only name selection, not summary style or uniqueness.