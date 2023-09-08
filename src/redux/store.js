import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './Companies/companiesSlice';

const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export default store;
