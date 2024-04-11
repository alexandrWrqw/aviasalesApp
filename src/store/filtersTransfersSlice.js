import { createSlice } from '@reduxjs/toolkit';

const filterTransfersSlice = createSlice({
  name: 'filterTransfers',

  initialState: {
    filtersTransfers: [],
  },

  reducers: {
    addFilter(state, action) {
      if (
        action.payload.label === 'Все' ||
        action.payload.allFiltersTransfers.length - 1 ===
          state.filtersTransfers.length
      ) {
        state.filtersTransfers = action.payload.allFiltersTransfers;
      } else {
        state.filtersTransfers.push(action.payload.label);
      }
    },

    deleteFilter(state, action) {
      const spliceFilterTransfers = (target) => {
        const idx = state.filtersTransfers.indexOf(target);
        state.filtersTransfers.splice(idx, 1);
      };

      if (action.payload.label === 'Все') {
        state.filtersTransfers = [];
      } else {
        spliceFilterTransfers(action.payload.label);
      }
    },
  },
});

export const { addFilter, deleteFilter } = filterTransfersSlice.actions;

export default filterTransfersSlice.reducer;
