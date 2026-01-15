import React, { useState } from "react";
import { generateWorldName, generateWorldSummary } from "./utils/worldGen";

export default function WorldPreview() {
    const [worldName, setWorldName] = useState("");
    const [summary, setSummary] = useState("");

    const createWorld = () => {
        // Generate the world object
        const world = generateWorldName();   // { name, prefix, suffix }

        // Console log tests
        console.log("Full world object:", world);
        console.log("World name:", world.name);
        console.log("Prefix:", world.prefix);
        console.log("Suffix:", world.suffix);
        console.log("Prefix type:", world.prefix.type);
        console.log("Suffix type:", world.suffix.type);
        console.log("Prefix weight:", world.prefix.weight);
        console.log("Suffix weight:", world.suffix.weight);

        // Update state for rendering
        setWorldName(world.name);
        setSummary(generateWorldSummary(world)); // pass the object to summary generator
    };


    return (
        <div style={{ padding: "2rem" }}>
            <h1>World Generator Test</h1>
            <button onClick={createWorld}>Generate World</button>
            {worldName && (
                <div style={{ marginTop: "1rem" }}>
                    <h2>{worldName}</h2>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
}