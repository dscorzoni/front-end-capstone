import Layout from './layout/Layout';
import Menu from './pages/Menu';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Nopage from './pages/Nopage';
import Reservations from './pages/Reservations';
import ReservationSuccess from './pages/ReservationSuccess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useReducer } from 'react';
import { fetchAPI } from './components/ApiMockup';


function App() {
  // Function to Initialize Times
  const initializeTimes = () => {
    return (["17:00","18:00","19:00","20:00","21:00","22:00","23:00"])
  }

  // Reducer function that returns initial values or refreshed values
  const updateTimes = (state, action) => {
      if (action === "initialize") return (initializeTimes());
      else return (fetchAPI(action));
  }

  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes());


  const [formFields, setFormFields] = useState({
    first_name: "",
    phone: "",
    date: "",
    time: "17:00",
    guests: 0,
    occasion: "Birthday"
  });



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Nopage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations 
              formFields={formFields} 
              setFormFields={setFormFields} 
              initializeTimes={initializeTimes}
              availableTimes={availableTimes}
              availableTimesDispatch={availableTimesDispatch}
              />} />
            <Route path="reservation_success" element={<ReservationSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
