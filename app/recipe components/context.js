'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedMeal = localStorage.getItem('selectedMeal');
    if (savedMeal) {
      setSelectedMeal(JSON.parse(savedMeal));
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (selectedMeal) {
      localStorage.setItem('selectedMeal', JSON.stringify(selectedMeal));
    }
  }, [selectedMeal]);

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => useContext(MealContext);
