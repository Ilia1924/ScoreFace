import Navbar from "./components/Navbar";
import About from "./components/About";
import MyTeams from "./components/MyTeams";
import GoingNow from "./components/GoingNowPage";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<About />} />
          <Route path="/translations" element={<GoingNow />} />
          <Route path="/teams" element={<MyTeams />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
