'use client';
import { useState } from "react";
import Mealcard from "./recipe components/Mealcard";
export default function Home() {
  const [data, setdata] = useState()
  const [search, setsearch] = useState("")
  const [searched, setsearched] = useState(false)
  const [found, setfound] = useState(false)
  const handleapi = async () => {
    if (search) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const get = await api.json()
    if (get) {
       setdata(get.meals)
    setsearch("")
    console.log(get);
    
    setsearched(false)
    } 
    else{
      console.error(error);
      
    }
   } 
   else{
    setsearched(true)
   }
  }
  return (
    <div className=" py-20 px-5 bg-gradient-to-br min-h-screen from-white to-purple-500">
      <div className="flex gap-6 bg-gradient-to-tr from-red-500 rounded-4xl to-yellow-400  md:w-1/3 p-6 mx-auto">
        <input onChange={(e)=>{setsearch(e.target.value)}} className="w-[80%] bg-white py-2 px-3 rounded-2xl text-black" value={search} type="text" placeholder="Enter Dish" />
        <button  onClick={handleapi} className="bg-orange-700 px-4 rounded-2xl hover:bg-orange-600">Search</button>
      </div>
   
        <div>
              <Mealcard detail={data}/>
            </div>
   
      
      
      {searched&&(
        <div className="bg-red-400 font-bold rounded text-center mt-5 text-white md:w-1/6 text-2xl py-6 mx-auto">
            Enter recipe!
            </div>
      )}
            
    </div>
  );
}
