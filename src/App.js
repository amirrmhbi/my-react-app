import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
   fetchfact()
  }, []);

 const fetchfact=()=>{
 axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      })
      
}
  return (
    <div className="App">
      <button onClick={fetchfact}>fetch</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
