import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ 
      minHeight: "10em",  // Set a fixed minimum height that can accommodate 2 lines
      display: "flex",
      alignItems: "center"
    }}>
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
    </div>
  );
}

export default Type;