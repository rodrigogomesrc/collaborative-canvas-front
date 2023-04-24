import React from "react";

type CanvaProps = {
  name: string;
  link: string;
  pixels: string;
}

export default function CanvaItem({ name, link, pixels }: CanvaProps) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    name: {
      color: "black",
      fontSize: "18px",
      fontWeight: "bold",
      marginRight: "10px",
    },
    link: {
      color: "black",
      fontSize: "16px",
      marginRight: "10px",
    },
    pixels: {
      color: "black",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.name}>{name}</div>
      <div style={styles.link}>link: {link}</div>
      <div style={styles.pixels}>{pixels} painted pixels</div>
    </div>
  );
}
