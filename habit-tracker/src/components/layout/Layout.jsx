import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {

  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    resetStreakIfMissed()
  }, [])

  const markHabitComplete = (habitId, date) => {
    const habit = habits.find(h => h.id == habitId);
    const dateInStr = date.toISOString().split("T")[0];
    if (!habit.progress.includes(dateInStr)) habit.progress.push(dateInStr);
    
    // Current Streak calculation
    if (!habit.lastCompleted) {
    // first time completing
    habit.currentStreak = 1;
    } else {
        const lastDate = new Date(habit.lastCompleted);
        const diffDays = Math.floor((date - lastDate) / (1000 * 60 * 60 * 24));

        if (habit.freq.mode === "daily") {
          // daily: streak continues only if yesterday was completed
          habit.currentStreak = diffDays === 1 ? habit.currentStreak + 1 : 1;
        } else if (habit.freq.mode === "weekly" || habit.freq.mode === "custom") {
          // weekly/custom: check if today is next scheduled day
          const scheduled = habit.freq.days; // array of numbers 0-6
          const lastDayIndex = scheduled.indexOf(lastDate.getDay());
          const nextIndex = (lastDayIndex + 1) % scheduled.length;
          const nextScheduledDay = scheduled[nextIndex];

          habit.currentStreak = date.getDay() === nextScheduledDay ? habit.currentStreak + 1 : 1;
        } else {
          habit.currentStreak = 1;
        }
      }

    if (habit.currentStreak > habit.highestStreak) habit.highestStreak = habit.currentStreak;
    habit.lastCompleted = dateInStr;
    setHabits([...habits]);
  }

  const resetStreakIfMissed = () => {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  habits.forEach(habit => {
    if (!habit.lastCompleted) return; // never done, no streak yet

    const lastDate = new Date(habit.lastCompleted);

    // Daily habit
    if (habit.freq.mode === "daily") {
      const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) habit.currentStreak = 0; // missed at least 1 day
    }

    // Weekly habit (once a week)
    else if (habit.freq.mode === "weekly") {
      const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays > 7) habit.currentStreak = 0; // missed a week
    }

    // Custom habit (e.g., 2 days/week)
    else if (habit.freq.mode === "custom") {
      const scheduledDays = habit.freq.days; // array of weekday numbers [0-6]
      let tempDate = new Date(lastDate);

      while (tempDate < today) {
        tempDate.setDate(tempDate.getDate() + 1);
        const day = tempDate.getDay();
        const tempStr = tempDate.toISOString().split("T")[0];

        if (scheduledDays.includes(day) && !habit.progress.includes(tempStr)) {
          habit.currentStreak = 0;
          break; // missed a scheduled day
        }
      }
    }
  });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <main className="p-6">
        <ToastContainer position="top-right" autoClose={2000} />
        <Outlet context={{habits, setHabits, markHabitComplete}}/> {/* 👈 renders Dashboard OR AddHabit */}
      </main>
    </div>
  )
}

export default Layout