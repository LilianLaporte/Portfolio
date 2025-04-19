import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student in Robotics, Systems and Contol at ETHZ",
        ],
        autoStart: true,
        delay: 100,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
