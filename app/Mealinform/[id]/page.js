'use client';
import { useMeal } from '@/app/recipe components/context';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { id } = useParams();
  const { selectedMeal } = useMeal();
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      if (selectedMeal && selectedMeal.idMeal === id) {
        setMealData(selectedMeal);
      } else {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await response.json();
          if (data.meals && data.meals.length > 0) {
            setMealData(data.meals[0]);
          }
        } catch (err) {
          console.error('Fetch failed:', err);
        }
      }
    };

    fetchMeal();
  }, [id, selectedMeal]);

  if (!mealData) return <div className="text-white mt-10">Loading...</div>;

  return (
  <>
  <div className="pt-24 min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-400 text-white px-4">
    <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-lg">
      <img
        src={mealData.strMealThumb}
        alt={mealData.strMeal}
        className="w-full max-w-md mx-auto rounded-2xl shadow-md transition-transform hover:scale-105 duration-300"
      />

      <h1 className="mt-8 mb-3 border md:mx-55 text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-black text-white py-3 px-6 rounded-full inline-block shadow-md">
        {mealData.strMeal}
      </h1>
      <hr />
        <h1 className="mt-2 text-center text-3xl font-bold text-white py-3 px-6 rounded-full inline-block shadow-md">
          Instruction</h1>
      <div className="mt-6 text-lg leading-relaxed text-gray-200 ">
        {mealData.strInstructions}
      </div>
    </div>
  </div>
</>

  );
};

export default Page;
