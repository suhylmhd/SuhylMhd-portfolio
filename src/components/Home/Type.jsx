import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-dark">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "MERN Stack Developer",
            "Open Source Contributor"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
        }} 
        
      />
    </div>
  );
}

export default Type;
