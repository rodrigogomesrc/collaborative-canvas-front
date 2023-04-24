import React from "react";
import Painter from "@/components/painter";

interface Props {
  painters: {
    name: string;
    color: string;
    position: string;
  }[];
}

const PainterList: React.FC<Props> = ({ painters }) => {
  return (
    <div >
      {painters.map((painter, index) => (
        <Painter
          key={index}
          name={painter.name}
          color={painter.color}
          position={painter.position}
        />
      ))}
    </div>
  );
};

export default PainterList;
