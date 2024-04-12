import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const ticketsSlice = createAppSlice({
  name: 'tickets',

  initialState: {
    tickets: [],
    status: null,
  },

  reducers: (create) => ({
    fetchTickets: create.asyncThunk(
      async () => {
        const responseId = await fetch(
          'https://aviasales-test-api.kata.academy/search',
        );
        const dataId = await responseId.json();

        const responseTickets = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${dataId.searchId}`,
        );
        const dataTickets = await responseTickets.json();
        return dataTickets;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        rejected: (state) => {
          state.status = 'rejected';
        },
        fulfilled: (state, action) => {
          state.status = 'resolved';
          state.tickets = action.payload.tickets;
        },
      },
    ),
  }),
});

export const { fetchTickets, addFilteredTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
