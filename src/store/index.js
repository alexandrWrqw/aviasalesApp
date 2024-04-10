import { configureStore } from '@reduxjs/toolkit';

import filterTransfersReducer from './filterTransfersSlice';

export default configureStore({
  reducer: {
    filterTransfers: filterTransfersReducer,
  },
});
