import React from "react";

import CanvaItem from "@/components/canvaItem";

export default function CollaborativeCanvasPage(){
    return (
        <div>
        <h1>Collaborative Canvas</h1>
        <CanvaItem name="canva1" link="link1" pixels="pixels1"/>
        <CanvaItem name="canva2" link="link2" pixels="pixels2"/>
        <CanvaItem name="canva3" link="link3" pixels="pixels3"/>
        </div>
    );
};