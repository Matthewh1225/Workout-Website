
import React from 'react';
import logo from '../assets/react.svg';
import {navItems} from '../../Constants';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto flex items-right text-sm">

        <div className='felx items-center'>
          <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
          <span className="text-xl tracking-tight text-cyan-400">
            Workout
          </span>
        </div>

      {/* navLinks */}
      <ul className="flex ml-14 space-x-12">
        {navItems.map((item,index) => (
          <li key={index}>
            <a 
              href={item.href}
              className="hover:text-red-200" 
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

