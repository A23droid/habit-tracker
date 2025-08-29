import React from "react";

export default function HabitList({ habits }) {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-xl h-full flex flex-col min-h-0">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-sky-300 mb-4 shrink-0">Your Habits</h2>

      {/* Scrollable list */}
      <ul className="space-y-3 overflow-y-auto pr-2 flex-1 min-h-0 custom-scrollbar">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-3 
                       hover:bg-sky-900/40 hover:scale-[1.02] transition-all duration-300 ease-out
                       border border-transparent hover:border-sky-500/30"
          >
            {/* Left side: checkbox + title */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-5 h-5 accent-sky-500 rounded-md transition duration-200"
              />
              <span className="text-lg font-medium">{habit.title}</span>
            </div>

            {/* Streak */}
            <span className="text-sky-400 font-semibold flex items-center gap-1">
              🔥 {habit.currentStreak}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


