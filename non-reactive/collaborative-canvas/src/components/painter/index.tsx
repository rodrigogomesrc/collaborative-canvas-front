import React from "react";

type PainterProps = {
    name: string;
    color: string;
    position: string;
}

export default function Painter({ name, color, position }: PainterProps) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      color: "#333",
      fontSize: "16px",
      fontWeight: "bold",
    },
    colorIndicator: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      marginRight: "10px",
      backgroundColor: color,
    },
  };

  return (
    <div style={styles.container as any}>
      <div style={styles.colorIndicator} />
      <div>
        {name} | {position}
      </div>
    </div>
  );
}
