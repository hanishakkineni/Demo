import React, { useState } from "react";
import InputFocus from "./assets/components/formInputs/inputFocus";

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="App">
      <h1>Auto Focus Form</h1>
      <form onSubmit={handleSubmit}>
        <InputFocus />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;