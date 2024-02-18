// Import the necessary modules and components
import React from 'react';
import Typewriter from 'typewriter-effect';
// Your other imports...

// Your component definition
const TypewriterList = () => {

  return (
    <div style={{color:'white'}}>
    <Typewriter
              options={{
                strings: [
                  "Hi there! I'm a Full Stack Web Developer who loves creating awesome websites.",
                  "I'm dedicated to making websites that are strong, reliable, and user-friendly.",
                  "I'm on this web development journey because I want to build websites that really matter and leave a positive impact.",
                  "I mix my creative side with technical skills to make websites that not only work well but also look great.",
                  "My goal is to go beyond meeting expectations – I want to surpass them and create websites that people love to use.",
                  "Let's make the digital world more amazing together!"
                ],
                
                delay:6,
                deleteSpeed:3,
                autoStart: true,
                loop: true,
              }}
            />
            </div>
  );
};

export default TypewriterList;
