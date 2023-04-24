import React from "react";

import Canva from "@/components/canva";
import PaintsList from "@/components/paintsList";
import ColorPicker from "@/components/colorPicker";

export default function GamePage(){

    const painters = [
        { name: "Bob Ross", color: "yellow", position: "(1,12)" },
        { name: "Leonardo da Vinci", color: "red", position: "(2,23)" },
        { name: "Vincent van Gogh", color: "yellow", position: "(12, 34)" },
        { name: "Claude Monet", color: "blue", position: "(45, 32)" },
        { name: "Johannes Vermeer", color: "black", position: "(5,11)" },
    ];

    return (
        <div>
            <h2>Game Page</h2>
            <Canva />
            <PaintsList painters={painters} />
            <ColorPicker />
        </div>
    );
};
