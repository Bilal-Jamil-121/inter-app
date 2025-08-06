'use client';
import React from 'react';
import Link from "next/link";
import { useMeal } from './context';

const Mealcard = ({ detail }) => {
  const { setSelectedMeal } = useMeal();

  return (
    <div className='flex flex-wrap justify-center'>
      {
        detail && detail.length > 0 ? (
          detail.map((curItem) => (
            <div key={curItem.idMeal} className='bg-white md:w-[30%] m-2 p-6 rounded-lg shadow-md'>
              <img className='w-full rounded-md' src={curItem.strMealThumb} alt="img" />
              <p className='text-black mt-5 text-lg font-semibold text-center'>{curItem.strMeal}</p>
              <div>

                <Link href={`/Mealinform/${curItem.idMeal}`} > <button
                  onClick={() => setSelectedMeal(curItem)}
                  className="block bg-red-400 px-4 py-2 rounded-2xl mt-4 md:w-auto w-full mx-auto hover:bg-red-600 transition duration-300"
                >
                  Recipe
                </button>
                </Link>

              </div>
            </div>
          ))
        ) : (
          <div className='text-center text-black text-lg font-semibold'>Data not found</div>
        )
      }
    </div>
  );
};

export default Mealcard;
