import React from 'react';
import { useEffect } from 'react';

type PixelProps = {
  size: number;
  backgroundColor: string;
  handleClick: Function;
}

export default function Pixel({ size, backgroundColor, handleClick }: PixelProps) {
  const style = {
    width: size,
    height: size,
    backgroundColor,
    cursor: 'pointer',
  };

    useEffect(() => {
        //console.log("Pixel rendered");
    });

  return <div style={style} onClick={() => handleClick()}/>;
};
