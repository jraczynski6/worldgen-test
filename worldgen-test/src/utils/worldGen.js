// Prefixes with weights
const prefixes = [
  { value: "Au", weight: 5 },
  { value: "Lu", weight: 4 },
  { value: "Si", weight: 3 },
  { value: "Va", weight: 3 },
  { value: "No", weight: 2 },
  { value: "Flu", weight: 2 },
  { value: "Cae", weight: 2 },
  { value: "Bra", weight: 1 },
  { value: "Ste", weight: 1 },
  { value: "Ma", weight: 1 }
];

// Suffixes with weights
const Suffixes = [
  { value: "relia", weight: 5 },
  { value: "nara", weight: 4 },
  { value: "vara", weight: 3 },
  { value: "lora", weight: 3 },
  { value: "tira", weight: 2 },
  { value: "via", weight: 2 },
  { value: "oria", weight: 2 },
  { value: "vante", weight: 1 },
  { value: "llara", weight: 1 },
  { value: "velle", weight: 1 }
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
    const Suffix = weightedRandom(Suffixes);
  return prefix + Suffix;
}


export function generateWorldSummary() {
  // TODO: implement weighted random logic
  // Return a string representing a short two-sentence summary
  return "This is a placeholder summary. Replace me with real content.";
}