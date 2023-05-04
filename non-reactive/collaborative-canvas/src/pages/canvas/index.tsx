import React from "react";
import Header from "@/components/header";
import CanvaItem from "@/components/canvaItem";
import { useState, useEffect } from "react";

export default function CollaborativeCanvasPage(){

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
            <h1>Top 10 most painted canvas</h1>
            <CanvaItem name="canva1" link="link1" pixels="pixels1"/>
            <CanvaItem name="canva2" link="link2" pixels="pixels2"/>
            <CanvaItem name="canva3" link="link3" pixels="pixels3"/>
        </div>
    );
};