import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

// Helper function to get the current week number
const getWeekNumber = (date) => {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay / 7);
};

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Format date
  const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
  const dateString = currentDate.toDateString();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const weekNumber = getWeekNumber(currentDate);

  // Change date to previous/next day
  const handlePreviousDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  const handleNextDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));

  // Navigate to previous/next month
  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaCalendarAlt className="text-blue-600 mr-3" size={30} />
          <div>
            <h3 className="text-xl font-bold text-blue-600">{`${month} ${year}`}</h3>
            <p className="text-sm text-gray-600">{dayOfWeek}, {dateString}</p>
            <p className="text-xs text-gray-500">Week {weekNumber}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaChevronLeft
            className="text-blue-600 cursor-pointer hover:text-blue-800"
            size={20}
            onClick={handlePreviousDay}
          />
          <FaChevronRight
            className="text-blue-600 cursor-pointer hover:text-blue-800"
            size={20}
            onClick={handleNextDay}
          />
        </div>
      </div>

      {/* Navigation for Month */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePreviousMonth}
          className="text-blue-600 flex items-center space-x-2 cursor-pointer hover:text-blue-800"
        >
          <FaArrowLeft size={14} />
          <span>Previous Month</span>
        </button>
        <button
          onClick={handleNextMonth}
          className="text-blue-600 flex items-center space-x-2 cursor-pointer hover:text-blue-800"
        >
          <span>Next Month</span>
          <FaArrowRight size={14} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mt-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center font-semibold text-gray-600">{day}</div>
        ))}
        {Array.from({ length: 30 }, (_, i) => {
          const date = new Date(currentYear, currentMonth, i + 1);
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          return (
            <div
              key={i}
              className={`text-center p-2 rounded cursor-pointer ${isWeekend ? 'bg-yellow-100' : 'hover:bg-blue-50'}`}
              onClick={() => console.log(`Clicked on: ${date.toDateString()}`)}
            >
              <span className={isWeekend ? 'text-red-500' : 'text-gray-800'}>{i + 1}</span>
            </div>
          );
        })}
      </div>

      {/* Today's Events */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-blue-600">Today&apos;s Events</h4>
        <ul className="text-sm text-gray-600">
          <li>9:00 AM - Appointment with Dr. Smith (Cardiology)</li>
          <li>10:30 AM - Follow-up with Dr. Patel (Orthopedics)</li>
        </ul>
      </div>
    </div>
  );
}
