import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-semibold mb-4 text-primary text-center">Select a Date</h2>
      <div className="flex justify-center">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
        />
      </div>
    </div>
  );
};

export default Calendar;
