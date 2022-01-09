import React from "react";
import { useDispatch } from "react-redux";
import { deleteGest } from '../features/reservationSlice'
import { addTable } from '../features/openedTableSlice'
interface Props {
  index: number;
  gest: string;
}
function ReservationCard({ index, gest }: Props) {
    const dispatch = useDispatch()
    const initTable ={
      gest,
      food:[]
    }
  return (
        <div
          onClick={() => {dispatch(deleteGest(index)); dispatch(addTable(initTable))}}
          className="reservation-card-container"
        >
          {gest}
        </div>
  );
}
export default ReservationCard;
