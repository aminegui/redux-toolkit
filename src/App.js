import React, { useState } from "react";
import "./App.css";
import { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { addGest } from "./features/reservationSlice";
import ReservationCard from "./components/ReservationCard";
import CustomerFoodCard from "./components/CustomerFoodCard";
function App() {
  const gestsName = useSelector((state: RootState) => state.reservations.value);
  const tables = useSelector((state: RootState) => state.openedTable.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {gestsName.map((gest, index) => (
                <ReservationCard index={index} gest={gest} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
              onClick={() => {
                dispatch(addGest(name));
                setName("");
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          {tables.map((table, index) => 
            table.gest && (
              <CustomerFoodCard
                index={index}
                gest={table.gest}
                food={table.food}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
