import { createSlice } from '@reduxjs/toolkit';

const filterTransfersSlice = createSlice({
  name: 'filterTransfers',

  initialState: {
    filterTransfers: [],
  },

  reducers: {
    addFilter(state, action) {
      if (
        action.payload.label === 'Все' ||
        action.payload.allFiltersTransfers.length - 2 ===
          state.filterTransfers.length
      ) {
        state.filterTransfers = action.payload.allFiltersTransfers;
      } else {
        state.filterTransfers.push(action.payload.label);
      }
    },

    deleteFilter(state, action) {
      const spliceFilterTransfers = (target) => {
        const idx = state.filterTransfers.indexOf(target);
        state.filterTransfers.splice(idx, 1);
      };

      if (action.payload.label === 'Все') {
        state.filterTransfers = [];
      } else if (state.filterTransfers.includes('Все')) {
        spliceFilterTransfers('Все');
        spliceFilterTransfers(action.payload.label);
      } else {
        spliceFilterTransfers(action.payload.label);
      }
    },
  },
});

export const { addFilter, deleteFilter } = filterTransfersSlice.actions;

export default filterTransfersSlice.reducer;
