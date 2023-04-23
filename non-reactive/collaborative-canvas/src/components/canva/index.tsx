import React, { useState, useEffect, useMemo } from "react";
import Pixel from "@/components/pixel";
import styles from "@/styles/Canva.module.css";

const NUM_ROWS = 20;
const NUM_COLS = 30;

export default function Canva() {
  const [pixels, setPixels] = useState<string[][]>([]);

  useEffect(() => {
    const newPixels = [];
    for (let y = 0; y < NUM_ROWS; y++) {
      const pixelRow = [];
      for (let x = 0; x < NUM_COLS; x++) {
        pixelRow.push("white");
      }
      newPixels.push(pixelRow);
    }
    setPixels(newPixels);
  }, []);

  const setPixelColor = (x: number, y: number, color: string) => {
    setPixels((prevPixels) => {
      const newPixels = [...prevPixels];
      newPixels[y][x] = color;
      return newPixels;
    });
  };

  const handleClick = (x: number, y: number) => {
    setPixelColor(x, y, "black");
  };

  const pixelKey = (x: number, y: number) => {
    return `${x}-${y}-${Math.random()}`;
  };

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
            key={pixelKey(x, y)}
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

  return <div className={styles["canva-container"]}>{getPixels}</div>;
}
