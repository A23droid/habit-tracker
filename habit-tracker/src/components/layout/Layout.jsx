import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <main className="p-6">
        <Outlet /> {/* 👈 renders Dashboard OR AddHabit */}
      </main>
    </div>
  )
}

export default Layout