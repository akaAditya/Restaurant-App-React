import React from "react";
import Navbar from "./components/Layout/Navbar";
import Summary from './components/Layout/Summary';
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Summary />
        <Meals />
      </main>
    </div>
  );
}

export default App;
