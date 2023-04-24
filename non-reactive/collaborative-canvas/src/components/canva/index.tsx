import React, { useState, useEffect, useMemo, useCallback } from "react";
import Pixel from "@/components/pixel";
import styles from "@/styles/Canva.module.css";

const NUM_ROWS = 64;
const NUM_COLS = 64;

export default function Canva() {

  const pixels:string[][] = [];
    for (let y = 0; y < NUM_ROWS; y++) {
      const pixelRow = [];
      for (let x = 0; x < NUM_COLS; x++) {
        pixelRow.push("white");
      }
      pixels.push(pixelRow);
  }

  useEffect(() => {
    localStorage.setItem("currentColor", 'black');
  }, []);

  const handleClick = useCallback((x: number, y: number) => {
    let possibleColors = ["black", "red", "green", "blue", "yellow"];
    let randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    localStorage.setItem("currentColor", randomColor);
  },[]);

  const getPixels = useMemo(() => {
    if (pixels.length === 0) {
      return null;
    }

    const pixelRows = [];
    for (let y = 0; y < NUM_ROWS; y++) {
      const pixelRow = [];
      for (let x = 0; x < NUM_COLS; x++) {
        pixelRow.push(
          <Pixel
            size={10}
            backgroundColor={pixels[y][x]}
            handleClick={() => handleClick(x, y)}
            key={`${x}-${y}`}
          />
        );
      }
      pixelRows.push(
        <div className={styles["pixel-row"]} key={y}>
          {pixelRow}
        </div>
      );
    }
    return pixelRows;
  }, [pixels]);

  return(
    <>
      <div className={styles["canva-container"]}>{getPixels}</div>;
    </>
  ) 
}
