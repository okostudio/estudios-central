import React, { useContext, useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es"; // Import the Spanish locale

// import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from '@/components/common/CartContext';
import "./DatePickerComponent.css";
import useDeviceDetection from '@/libs/hooks/useDeviceDetection';


const DatePickerComponent = () => {
    registerLocale("es", es); // Register the locale with a key, e.g., "es"
    const isMobile = useDeviceDetection();

    const { dateFrom, setDateFrom, dateTo, setDateTo } = useContext(CartContext);

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;


        // update dates in cart
        setDateFrom(start);
        setDateTo(end);

        if (start && end) {
            setShowDatePicker(false);
        }
    };
    return (
        <div className="DATE_PICKER">
            <div
                className='grid grid-cols-2 gap-2 mb-4 text-center group'
                onClick={() => { setShowDatePicker(!showDatePicker) }}
            >
                <div className='selected-dates bg-gray-100 hover:bg-gray-200 p-4 rounded-md '>
                    <div className='text-xs'>Inicio</div>
                    <div>{dateFrom ? dateFrom.toLocaleDateString("es-ES") : "Elegi tu fecha"}</div>
                </div>
                <div className='selected-dates bg-gray-100 hover:bg-gray-200 p-4 rounded-md '>
                    <div className='text-xs'>Fin</div>
                    <div>{dateTo ? dateTo.toLocaleDateString("es-ES") : "Elegi tu fecha"}</div>
                </div>
            </div>
            {showDatePicker ? <DatePicker
                // className = ".date-picker"
                // swapRange
                selected={dateFrom}
                onChange={onChange}
                startDate={dateFrom}
                endDate={dateTo}
                selectsRange
                inline
                locale="es" // Apply the registered Spanish locale
                dateFormat="DD/MM/YYYY" // Optional: Format the date display
                monthsShown={isMobile ? 1 : 2}
                calendarClassName={isMobile ? `months-shown-1` : `months-shown-2`}
            /> : null}
        </div>
    );

}

export default DatePickerComponent

