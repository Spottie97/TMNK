import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-4 text-primary">Select a Date</h2>
      <div className="inline-block">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
