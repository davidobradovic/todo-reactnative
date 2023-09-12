import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Do homework",
            isFavorite: false,
            isFinished: false
        },
        {
            id: 2,
            title: "Clear desk",
            isFavorite: false,
            isFinished: false
        },
        {
            id: 3,
            title: "Upload app to github",
            isFavorite: false,
            isFinished: false
        },
        {
            id: 4,
            title: "Get job",
            isFavorite: false,
            isFinished: false
        },
    ])

    const toggleFavorite = (id) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
        )
      );
    };

    const toggleFinished = (id) => {
      setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      )
    );
  };


  return (
    <AppContext.Provider value={{ 
        todos,
        setTodos,
        toggleFavorite,
        toggleFinished
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(AppContext);
};
