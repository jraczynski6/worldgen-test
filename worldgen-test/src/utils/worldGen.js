import { prefixes, suffixes, prefixSentences, suffixSentences } from "./worldData";

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