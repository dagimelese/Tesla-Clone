import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'
import menuReducer from '../features/car/menuSlice'

export const store = configureStore({
  reducer: {
    car: carReducer,
    menu:menuReducer
  }
});

// export const store = configureStore({
//   reducer: {
//     menu:menuReducer
//   }
// });
