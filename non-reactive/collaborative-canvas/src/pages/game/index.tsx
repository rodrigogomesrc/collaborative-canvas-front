import React from "react";

import Canva from "@/components/canva";
import PaintsList from "@/components/paintsList";
import ColorPicker from "@/components/colorPicker";

import { useState, useEffect } from "react";

export default function GamePage(){

    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const playerId = localStorage.getItem("playerId");
        const username = localStorage.getItem("username");
        if (playerId === null || username === null) {
            window.location.href = "/";
        } else {
            setUsername(username);
            setUserId(playerId);
        }
    }, []);


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
            <h4>Last 5 Paintings:</h4>
            <PaintsList painters={painters} />
            <h4>Choose Color:</h4>
            <ColorPicker />
        </div>
    );
};
