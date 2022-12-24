import { useState } from "react";
import "./css/app.module.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/homePage";

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
