// Prefixes with weights
const prefixes = [

    // Elf prefixes
    { value: "Ae", type: "Elf", weight: 5 },
    { value: "Eri", type: "Elf", weight: 5 },
    { value: "Syl", type: "Elf", weight: 5 },
    { value: "Alth", type: "Elf", weight: 5 },
    { value: "Vae", type: "Elf", weight: 5 },

    // Human prefixes
    { value: "Bor", type: "Human", weight: 3 },
    { value: "Ro", type: "Human", weight: 3 },
    { value: "Har", type: "Human", weight: 3 },
    { value: "Cor", type: "Human", weight: 3 },
    { value: "Ed", type: "Human", weight: 3 },

    // Dwarf prefixes
    { value: "Dur", type: "Dwarf", weight: 1 },
    { value: "Kil", type: "Dwarf", weight: 1 },
    { value: "Brum", type: "Dwarf", weight: 1 },
    { value: "Gar", type: "Dwarf", weight: 1 },
    { value: "Bal", type: "Dwarf", weight: 1 }
];

// Suffixes with weights
const suffixes = [
    // Elf suffixes
    { value: "wyn", type: "Elf", weight: 5 },
    { value: "riel", type: "Elf", weight: 5 },
    { value: "lith", type: "Elf", weight: 5 },
    { value: "elith", type: "Elf", weight: 5 },
    { value: "nael", type: "Elf", weight: 5 },

    // Human suffixes
    { value: "ora", type: "Human", weight: 3 },
    { value: "ara", type: "Human", weight: 3 },
    { value: "ine", type: "Human", weight: 3 },
    { value: "arae", type: "Human", weight: 3 },
    { value: "eva", type: "Human", weight: 3 },

    // Dwarf suffixes
    { value: "mir", type: "Dwarf", weight: 1 },
    { value: "bek", type: "Dwarf", weight: 1 },
    { value: "drin", type: "Dwarf", weight: 1 },
    { value: "karr", type: "Dwarf", weight: 1 },
    { value: "gorn", type: "Dwarf", weight: 1 }
];

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
            return item.value;
        }
    }
}

export function generateWorldName() {
    const prefix = weightedRandom(prefixes);
    const suffix = weightedRandom(Suffixes);
    return prefix + suffix;
}


export function generateWorldSummary() {
    // TODO: implement weighted random logic
    // world.prefixType + world.suffixType → determine summary template pool
    // weightedRandom from that pool → return summary
    return "This is a placeholder summary. Replace me with real content.";
}