import { createSlice } from '@reduxjs/toolkit';

const filterTransfersSlice = createSlice({
  name: 'activeFilters',

  initialState: {
    activeFilters: [],
  },

  reducers: {
    addFilter(state, action) {
      if (
        action.payload.filter.id === 'All' ||
        action.payload.allFilters.length - 1 === state.activeFilters.length
      ) {
        state.activeFilters = action.payload.allFilters;
      } else {
        state.activeFilters.push(action.payload.filter);
      }
    },

    deleteFilter(state, action) {
      const filterSplice = (target) => {
        const idx = state.activeFilters.findIndex(
          (element) => element.id === target.id,
        );
        state.activeFilters.splice(idx, 1);
      };

      if (action.payload.filter.id === 'All') {
        state.activeFilters = [];
      } else {
        filterSplice(action.payload.filter);
      }
    },
  },
});

export const { addFilter, deleteFilter } = filterTransfersSlice.actions;

export default filterTransfersSlice.reducer;
