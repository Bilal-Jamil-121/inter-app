'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuclick, setmenuclick] = useState(false);

  function handlemenu() {
    setmenuclick(!menuclick);
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 shadow-md">
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold tracking-tight'>First App</h1>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-8 font-medium text-lg'>
          <li>
            <Link href='/' className=' hover:font-semibold transition'>
              Recipe Finder
            </Link>
          </li>
          {/* <li>
            <Link href='/about'  className=' hover:font-semibold transition'>
              Currency Convertor
            </Link>
          </li>
          <li>
            <Link href='/contact' className=' hover:font-semibold transition'>
              Quiz
            </Link>
          </li>
          <li>
            <Link href='/todo' className=' hover:font-semibold transition'>
              Todo-List
            </Link>
          </li> */}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={handlemenu}
          className='md:hidden bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition'
        >
          <img className='h-6 w-6' src='/menu.svg' alt='menu' />
        </button>
      </div>

      {/* Mobile menu */}
     {menuclick && (
  <div className='md:hidden bg-gray-100 rounded mt-3 px-4 py-3  shadow-inner'>
    <ul className='flex flex-col gap-4 text-base font-medium text-gray-800'  onClick={handlemenu}>
      <Link href='/' >
        <li className='hover:text-blue-600 transition w-full px-2 py-1'>Recipe Finder</li>
      </Link>
      {/* <Link href='/about' >
        <li className='hover:text-blue-600 transition w-full px-2 py-1'>Currency Convertor</li>
      </Link>
      <Link href='/contact' >
        <li className='hover:text-blue-600 transition w-full px-2 py-1'>Quiz</li>
      </Link>
      <Link href='/todo'>
        <li className='hover:text-blue-600 transition w-full px-2 py-1'>Todo-List</li>
      </Link> */}
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
