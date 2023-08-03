import React from "react";
import Navbar from "./components/Layout/Navbar";
import Summary from './components/Layout/Summary';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Summary />
      </main>
    </div>
  );
}

export default App;
