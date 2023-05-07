import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { companySlice } from './companySlice';
import { employeeSlice } from './employeeSlice';

const rootReducer = combineReducers({
  [companySlice.name]: companySlice.reducer,
  [employeeSlice.name]: employeeSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
