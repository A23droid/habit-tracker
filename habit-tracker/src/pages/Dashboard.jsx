import React from 'react'
import Header from '../components/layout/Header'
import HabitList from '../components/HabitList'
import Calendar from '../components/Calendar'

const habits=[
              {
                id: 1,
                title: "Drink Water",
                highestStreak: 10,
                currentStreak: 3,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["24-08-2025", "25-08-2025", "26-08-2025"],
              },
              {
                id: 2,
                title: "Read 10 pages",
                highestStreak: 15,
                currentStreak: 7,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["23-08-2025", "24-08-2025", "25-08-2025"],
              },
              {
                id: 3,
                title: "Exercise",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 4,
                title: "Radha",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 5,
                title: "Mann me hai",
                highestStreak: 20,
                currentStreak: 4,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 6,
                title: "Bhasha",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 7,
                title: "Kanha",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 8,
                title: "Gopi mein",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 9,
                title: "Lagaan",
                highestStreak: 20,
                currentStreak: 5,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 10,
                title: "Kaise na jale?",
                highestStreak: 20,
                currentStreak: 521,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              },
              {
                id: 11,
                title: "Kisi liye jale??",
                highestStreak: 20,
                currentStreak: 5123,
                frequency: "daily",
                lastCompleted: "26-08-2025",
                progress: ["22-08-2025", "23-08-2025", "25-08-2025"],
              }
            ]

function Dashboard() {
  // Dummy habits 

  return (
    <>
      <Header username="Aditya" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-0">
        <div className="overflow-y-auto custom-scrollbar">
          <HabitList habits={habits} />
        </div>
        <div className="overflow-y-auto">
          <Calendar />
        </div>
      </div>
    </>
  );
}
export default Dashboard
