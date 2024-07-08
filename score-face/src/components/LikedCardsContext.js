// LikedCardsContext.js
import React, { createContext, useState, useContext } from "react";

// Создаем контекст
const LikedCardsContext = createContext();

// Хук для использования контекста
export const useLikedCards = () => useContext(LikedCardsContext);

// Провайдер для управления состоянием понравившихся карточек
export const LikedCardsProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([]);

  // Функция для добавления карточки в список понравившихся
  const addCard = (card) => {
    setLikedCards((prevCards) => [...prevCards, card]);
  };

  // Функция для удаления карточки из списка понравившихся
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
