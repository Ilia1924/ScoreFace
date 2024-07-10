import Navbar from "./components/Navbar";
import About from "./components/About";
import MyTeams from "./components/MyTeams";
import GoingNow from "./components/GoingNowPage";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [likedAppCards, setLikedAppCards] = useState([]);

  const handleLike = (card) => {
    setLikedAppCards((prev) => {
      if (prev.some((c) => c.idLeague === card.idLeague)) {
        return prev.filter((c) => c.idLeague !== card.idLeague);
      } else {
        return [...prev, card];
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage onLike={handleLike} likedAppCards={likedAppCards} />}
          />
          <Route
            path="/teams"
            element={
              <MyTeams
                likedAppCards={likedAppCards}
                setLikedAppCards={setLikedAppCards}
                onLike={handleLike}
              />
            }
          />
          <Route path="/info" element={<About />} />
          <Route path="/translations" element={<GoingNow />} />
        </Routes>
      </div>
    </>
  );
}

export default App;