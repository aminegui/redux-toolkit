import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';

export interface ReservationState {
  value: string[]
}

const initialState: ReservationState = {
    value: [],
}

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addGest: (state, action: PayloadAction<string>) => {
       state.value.push(action.payload)
    },
    deleteGest: (state, action: PayloadAction<number>) => {

          state.value.splice(action.payload, 1);
     },
  },
})

// Action creators are generated for each case reducer function
export const { addGest, deleteGest } = reservationSlice.actions

export default reservationSlice.reducer