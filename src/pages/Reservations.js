import ReservationForm from '../components/ReservationForm';

function Reservations({formFields, setFormFields, initializeTimes, availableTimes, availableTimesDispatch}) {
    return(
        <section className="reservation-page">
            <div className="container">
                <h1>Reservations</h1>
                <p>Fill the form below to reserve a table with us. All fields are required.</p>
                <ReservationForm 
                    formFields={formFields} 
                    setFormFields={setFormFields} 
                    initializeTimes={initializeTimes}
                    availableTimes={availableTimes}
                    availableTimesDispatch={availableTimesDispatch}
                />
            </div>
        </section>
    )
}

export default Reservations;