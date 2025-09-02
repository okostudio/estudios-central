import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es"; // Import the Spanish locale

// import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerComponent.css";

const DatePickerComponent = () => {
    registerLocale("es", es); // Register the locale with a key, e.g., "es"


    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <DatePicker
            // className = ".date-picker"
            // swapRange
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            locale="es" // Apply the registered Spanish locale
            dateFormat="DD/MM/YYYY" // Optional: Format the date display
            monthsShown={3}
            calendarClassName={`months-shown-3`}
        />
    );

}

export default DatePickerComponent

