/*import { useState } from 'react';*/
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../components/ApiMockup';

function ReservationForm({formFields, setFormFields, initializeTimes, availableTimes, availableTimesDispatch}) {

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formFields);

        // Validating Form

        if (formFields.first_name.length > 0 & 
            formFields.phone.length > 0 & 
            formFields.date.length > 0 & 
            formFields.time.length > 0 &
            formFields.guests > 0 &
            formFields.occasion.length > 0
            ) {
            if (submitAPI(formFields)) {
                setFormFields({...formFields, 
                    first_name: "",
                    phone: "",
                    date: "",
                    time: "",
                    guests: 0,
                    occasion: "Birthday"});
                    availableTimesDispatch("initialize");
                navigate("/reservation_success");
            }
        } else {
            setErrorMessage("Please enter all the fields to reserve a table.");
        }






    }

    const pickDayHandler = (e) => {
        setFormFields({...formFields, date: e.target.value})
    }


    useEffect(() => {
        availableTimesDispatch(new Date(formFields.date));
    }, [availableTimesDispatch, formFields.date]);


    return(
        <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="field-group">
            <label htmlFor="res-name">Your name:</label>
            <input type="text" id="res-name" value={formFields.first_name} onChange={(e) => setFormFields({...formFields, first_name: e.target.value})} />
        </div>
        <div className="field-group">
            <label htmlFor="res-phone">Your phone:</label>
            <input type="text" id="res-phone" value={formFields.phone} onChange={(e) => setFormFields({...formFields, phone: e.target.value})} />
        </div>
        <div className="field-group">
            <label htmlFor="res-date">Choose date</label>
            <input required type="date" id="res-date" data-testid="res-date" value={formFields.date} onChange={pickDayHandler} />
        </div>
        <div className="field-group">
            <label htmlFor="res-time">Choose time</label>
            <select required id="res-time" data-testid="res-time" value={formFields.time} onChange={(e) => setFormFields({...formFields, time: e.target.value})}>
                {
                    availableTimes.map((item) => {
                        return(
                            <option key={item}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="field-group">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
                value={formFields.guests} onChange={(e) => setFormFields({...formFields, guests: e.target.value})} />
        </div>
        <div className="field-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formFields.occasion} onChange={(e) => setFormFields({...formFields, occasion: e.target.value})}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
        </div>
        <div className="error-message">{errorMessage}</div>
        <input type="submit" className="reservation-button" value="Make Your Reservation" />
        </form>
    )
}

export default ReservationForm;