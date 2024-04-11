import { configureStore } from '@reduxjs/toolkit';

import filtersTransfersReducer from './filtersTransfersSlice';

export default configureStore({
  reducer: {
    filtersTransfers: filtersTransfersReducer,
  },
});
