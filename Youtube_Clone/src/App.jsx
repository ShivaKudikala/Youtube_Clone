import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./components/styles/Header.css";

function App() {
  const [isSidebarA, setIsSidebarA] = useState(true); // State for sidebar

  return (
    <>
      <Header isSidebarA={isSidebarA} setIsSidebarA={setIsSidebarA} />
      <div className={`${isSidebarA ? "A-active" : "B-active"}`}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
