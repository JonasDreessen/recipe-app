import React from 'react';
// import Recipes from "./Recipes"
import StarWarsLogic from './StarWarsLogic';
import Header from "./Header"
//import ChoosingOptions from "./ChoosingOptions"

function App() {
  return (
    <div className="general-container">
      <Header />
      <StarWarsLogic />
    </div>
  );
}

export default App;
