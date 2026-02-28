import React, { useState } from "react";
// Make sure this CSS import matches your file structure exactly
import './../styles/App.css'; 

const App = () => {
  // State to track paragraph visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the button click
  const handleButtonClick = () => {
    // THE FIX: This toggles the state (true to false, false to true)
    setIsVisible(!isVisible); 
  };

  return (
    <div id="main">
      <button id="click" onClick={handleButtonClick}>
        Click Me
      </button>

      {/* Conditional rendering for className based on state */}
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
};

export default App;