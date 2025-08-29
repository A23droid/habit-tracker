import React from 'react'
import { Link } from 'react-router-dom'

function Header({ username }) {
  return (
   <header className="flex items-center justify-between px-6 py-4 bg-slate-900 shadow-md border-b border-slate-800">
  <h1 className="text-2xl font-semibold text-sky-300">
    Hello, {username} 👋
  </h1>

    <Link to= "/addHabit"> 
  <button className="px-5 py-2 rounded-lg bg-sky-500 text-slate-900 font-medium 
                     shadow-sm hover:bg-sky-600 hover:shadow-md 
                     transition-colors duration-200">
    + Add Habit
  </button>
  </Link>
</header>

  )
}

export default Header
