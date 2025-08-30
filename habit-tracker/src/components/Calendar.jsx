import React from "react";

function Calendar() {
  // Dummy month data for UI preview
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-3 sm:p-5 shadow-xl h-full flex flex-col min-h-0">
      {/* Header with navigation + month name */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <button className="p-1.5 sm:p-2 rounded-full hover:bg-slate-800 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-base sm:text-lg font-semibold text-sky-300">Streaks</h2>
          <p className="text-xs sm:text-sm text-slate-400">September 2025</p>
        </div>
        <button className="p-1.5 sm:p-2 rounded-full hover:bg-slate-800 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm mb-2 sm:mb-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-slate-400 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-3 text-center text-xs sm:text-sm flex-1 min-h-0 overflow-y-auto custom-scrollbar">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="aspect-square flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-sky-400/60 hover:bg-sky-900/30 transition-all duration-200 group relative cursor-pointer"
          >
            <span className="text-slate-200">{day}</span>
            <div className="absolute bottom-full mb-1 sm:mb-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs bg-slate-800 text-slate-200 shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none">
              {`🔥 2 habits done`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;


