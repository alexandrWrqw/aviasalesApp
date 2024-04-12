import { configureStore } from '@reduxjs/toolkit';

import filtersTransfersReducer from './filtersTransfersSlice';
import ticketsReducer from './ticketsSlice';

export default configureStore({
  reducer: {
    activeFilters: filtersTransfersReducer,
    tickets: ticketsReducer,
  },
});
