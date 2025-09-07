import React from 'react'
import Header from '../components/layout/Header'
import HabitList from '../components/HabitList'
import Calendar from '../components/Calendar'
import { useOutletContext } from 'react-router-dom'

function Dashboard() {
  const {habits, setHabits} = useOutletContext();
  return (
    <>
      <Header username="Aditya" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-0">
        <div className="overflow-y-auto custom-scrollbar">
          <HabitList habits={habits} setHabits = {setHabits}/>
        </div>
        <div className="overflow-y-auto">
          <Calendar habits={habits}/>
        </div>
      </div>
    </>
  );
}
export default Dashboard
