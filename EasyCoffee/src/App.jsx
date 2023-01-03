import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/homePage";
import "./css/global.css";

function App() {
  const [currentPage, setWebpages] = useState(<HomePage />);

  return (
    <>
      <Navbar setWebpages={setWebpages} />
      {currentPage}
    </>
  );
}

export default App;
