import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFood } from "../features/openedTableSlice"
interface Props{
    index: number,
    gest: string,
    food: string[]
}
export default function CustomerFoodCard({index, gest, food}: Props) {
    const [newFood, setNewFood] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="customer-food-card-container">
        <p>{gest}</p>
        <div className="customer-foods-container">
            {
                food.map(plate=><div className="customer-food">{plate}</div>)
            }
          
          <div className="customer-food-input-container">
            <input value={newFood} onChange={(e) => setNewFood(e.target.value)}/>
            <button onClick={
                ()=>{
                    dispatch(addFood({index, food:newFood}));
                    setNewFood("")
                }
            }>Add</button>
          </div>
        </div>
        </div>
    )
}
