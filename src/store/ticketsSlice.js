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
    ticketsSortValue: null,

    tickets: [],
    filteredTickets: [],

    isLoading: false,
  },

  reducers: {
    addFilter(state, action) {
      state.filteredTickets = [];

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
      state.filteredTickets = [];

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

    updateFilteredTickets(state) {
      state.activeFilters.forEach((filter) => {
        state.filteredTickets = state.tickets.filter(
          (ticket) =>
            ticket.segments[0].stops.length === filter.id ||
            ticket.segments[1].stops.length === filter.id,
        );
      });

      if (state.ticketsSortValue === 'Самый дешевый') {
        state.filteredTickets = state.filteredTickets.sort(
          (a, b) => a.price - b.price,
        );
      }

      if (state.ticketsSortValue === 'Самый быстрый') {
        state.filteredTickets = state.filteredTickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration,
        );
      }

      if (state.ticketsSortValue === 'Оптимальный') {
        state.filteredTickets = state.filteredTickets.filter(
          (ticket) => ticket.price < 50000 && ticket.segments[0].duration < 900,
        );
      }
    },

    selectSortTicketsValue(state, action) {
      state.ticketsSortValue = action.payload;
    },

    selectDefaultFilters(state, action) {
      state.activeFilters = [...action.payload];
      state.ticketsSortValue = 'Оптимальный';
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
      if (!action.payload.stop)
        state.tickets = [...state.tickets, ...action.payload.tickets];

      if (action.payload.stop) state.isLoading = false;
    });
  },
});

export const {
  addFilter,
  deleteFilter,
  clearTickets,
  selectSortTicketsValue,
  updateFilteredTickets,
  selectDefaultFilters,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
