const isHabitDue = (habit, date) => {
    if (!habit || !habit.freq) return false;
    switch (habit.freq.mode) {
      case "daily":
        return true; 
      case "weekly":
        return habit.freq.days.includes(date.getDay());
      case "custom":
        return habit.freq.days.includes(date.getDay());
      default:
        return false;
    }
  }

export default isHabitDue