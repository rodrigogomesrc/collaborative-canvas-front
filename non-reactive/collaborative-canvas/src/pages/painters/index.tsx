import React from "react";
import Header from "@/components/header";
import { useState, useEffect } from "react";

export default function Painters(){

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

    return (
        <div>
        <Header/>
            <h1>Top 10 Painters</h1>
            
        </div>
    );
};