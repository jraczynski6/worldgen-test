import React, { useState } from "react";
import { generateWorldName, generateWorldSummary } from "./utils/worldGen";

export default function WorldPreview() {
    const [worldName, setWorldName] = useState("");
    const [summary, setSummary] = useState("");

    const createWorld = () => {
        setWorldName(generateWorldName());
        setSummary(generateWorldSummary());
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