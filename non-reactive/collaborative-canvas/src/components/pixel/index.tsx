import React from 'react';
import { useEffect, useState } from 'react';

type PixelProps = {
  size: number;
  backgroundColor: string;
  handleClick?: Function;
}

export default function Pixel({ size, backgroundColor, handleClick }: PixelProps) {


  const [style , setStyle] = useState({
    width: size,
    height: size,
    backgroundColor,
    cursor: 'pointer',
  });
 
  useEffect(() => {
    console.log("Pixel rendered");
  });

  const onClick = () => {
    //get color from local storage
    let currentColor = localStorage.getItem("currentColor");
    if (handleClick) {
      handleClick();
    }
    setStyle({
      ...style,
      backgroundColor: currentColor || "black",
    });
  };

  return <div style={style} onClick={() => onClick()}/>;
};
