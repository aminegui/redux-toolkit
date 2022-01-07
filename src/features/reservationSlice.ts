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
    deleteGest: (state, action: PayloadAction<string>) => {
        let index = state.value.indexOf(action.payload);
        if (index > -1) {
          state.value.splice(index, 1);
        }
     },
  },
})

// Action creators are generated for each case reducer function
export const { addGest, deleteGest } = reservationSlice.actions

export default reservationSlice.reducer