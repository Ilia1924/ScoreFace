import React, { createContext, useState, useContext } from "react";

const LikedCardsContext = createContext();
export const useLikedCards = () => useContext(LikedCardsContext);

export const LikedCardsProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([]);

  const addCard = (card) => {
    setLikedCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (cardId) => {
    setLikedCards((prevCards) =>
      prevCards.filter((card) => card.idLeague !== cardId)
    );
  };

  return (
    <LikedCardsContext.Provider value={{ likedCards, addCard, removeCard }}>
      {children}
    </LikedCardsContext.Provider>
  );
};
