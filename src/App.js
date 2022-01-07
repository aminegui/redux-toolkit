import React, { useState } from "react";
import "./App.css";
import { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addGest, deleteGest } from './features/reservationSlice'
function App() {
  const gestsName = useSelector((state: RootState) => state.reservations.value)
  const dispatch = useDispatch()
  const [name, setName]=useState("")
  const [canseled, setCanseled] = useState("")
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
                 {
                   gestsName.map(gest=>(<div onClick={()=>dispatch(deleteGest(gest))} className="reservation-card-container">{gest}</div>))
                 }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=>{dispatch(addGest(name)); setName("")}}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
