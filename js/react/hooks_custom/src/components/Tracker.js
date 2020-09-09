import React from "react";
import { usePosition } from "./hooks/tracker";

export const Tracker = () => {
  const position = usePosition();

  return (
    <div>
      <p>
        x: {position.x} y: {position.y}
      </p>
    </div>
  );
};

export const Tracer = () => {
  const position = usePosition();

  return (
    <div>
      <p>
        x: {position.x} y: {position.y}
      </p>
    </div>
  );
};
