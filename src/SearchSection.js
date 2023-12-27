import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import "./StyleSearch.css"

function SearchSection() {
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedDeparture, setSelectedDeparture] = useState('')
    const [selectedArrival, setSelectedArrival] = useState('')
    const [date, setDate] = useState(new Date())
  

    const country = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia',]

    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value)
    }
    const handleChangeDeparture = (event) => {
        setSelectedDeparture(event.target.value)
    }

    const handleChangeArrival = (event) => {
        setSelectedArrival(event.target.value)
    }

    const handleDateChange = (date) => {
        setDate(date)
    }
    const handleSubmit = (e) => {

        console.log('Form data submitted:',
            selectedDeparture,
            selectedArrival,
            date,
        );
        
    };

    return (
        <>
            <section style={{ backgroundImage: 'url(/Images/sky.jpg)' }} className="py-5">
                <div >
                    <p className='firstline'>Let's explore & travel the world</p>
                    <p className='secondline'>Find the best destination and the most popular stays!</p>
                </div>
                <div className='mainconatiner'>
                    <div className='container'>
                        <div className='searchFlight'>
                            <p>SEARCH FLIGHTS</p>
                        </div>
                        <div className='radio'>
                            <label><input className='mx-2' type="radio" value="Return" onChange={handleSelectedOption} />Return</label>
                            <label><input className='mx-2' type="radio" value="One-way"
                                defaultChecked onChange={handleSelectedOption} />One-way</label>
                        </div>
                    </div>

                    <div>
                        <form className="form">
                            <div className='container'>
                                <div className='departure'>
                                    <select value={selectedDeparture} onChange={handleChangeDeparture}>
                                        <option value="" >Departure</option>
                                        {country.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='arrival'>
                                    <select value={selectedArrival} onChange={handleChangeArrival}>
                                        <option value="" >Arrival</option>
                                        {country.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='date'>
                                    <DatePicker value={date} onChange={handleDateChange} />
                                </div>
                                <button type='button' onClick={handleSubmit}>SEARCH FLIGHTS</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
        </>

    )
}

export default SearchSection
