import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async () => {
    const response = await fetch(
      'https://aviasales-test-api.kata.academy/search',
    );
    const searchId = await response.json();
    return searchId;
  },
);

export const fetchTicketsPack = createAsyncThunk(
  'tickets/fetchTicketsPack',
  async (id) => {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
    );
    const dataTickets = await response.json();
    return dataTickets;
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',

  initialState: {
    searchId: null,
    activeFilters: [],
    tickets: [],
    ticketsSortValue: null,
    isLoading: false,
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

    clearTickets(state) {
      state.tickets = [];
    },

    selectSortTicketsValue(state, action) {
      if (state.tickets.length !== 0) state.ticketsSortValue = action.payload;

      if (action.payload === 'Самый дешевый') {
        state.tickets = state.tickets.sort((a, b) => a.price - b.price);
      }

      if (action.payload === 'Самый быстрый') {
        state.tickets = state.tickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration,
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
    });

    builder.addCase(fetchTicketsPack.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTicketsPack.fulfilled, (state, action) => {
      if (!action.payload.stop) {
        let filteredTickets = [];

        state.activeFilters.forEach((filter) => {
          filteredTickets = action.payload.tickets.filter(
            (ticket) =>
              ticket.segments[0].stops.length === filter.id ||
              ticket.segments[1].stops.length === filter.id,
          );
        });

        state.tickets = [...state.tickets, ...filteredTickets];
      }

      state.isLoading = false;
    });
  },
});

export const { addFilter, deleteFilter, clearTickets, selectSortTicketsValue } =
  ticketsSlice.actions;

export default ticketsSlice.reducer;
