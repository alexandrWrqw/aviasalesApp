import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTicketsPack,
  fetchSearchId,
  clearTickets,
} from '../../store/ticketsSlice';

import classes from './App.module.scss';

import Header from '../Header/Header';
import FilterTransfers from '../FilterTransfers/FilterTransfers';
import TicketsList from '../TicketsList/TicketsList';
import FilterTickets from '../FilterTickets/FilterTickets';

function App() {
  const dispatch = useDispatch();

  const fetchSearchIdDispatch = () => dispatch(fetchSearchId());
  const fetchTicketsPackDispatch = (id) => dispatch(fetchTicketsPack(id));
  const clearTicketsDispatch = () => dispatch(clearTickets());

  const tickets = useSelector((state) => state.tickets.tickets);
  const searchId = useSelector((state) => state.tickets.searchId);
  const activeFilters = useSelector((state) => state.tickets.activeFilters);

  const errorCatchingFetchTickets = (id) => {
    fetchTicketsPackDispatch(id)
      .unwrap()
      .catch(() => errorCatchingFetchTickets(id));
  };

  useEffect(() => {
    if (searchId === null) fetchSearchIdDispatch();
  }, [searchId]);

  useEffect(() => {
    if (searchId !== null) fetchSearchIdDispatch();
    clearTicketsDispatch();
  }, [activeFilters]);

  useEffect(() => {
    if (searchId !== null && activeFilters.length !== 0)
      errorCatchingFetchTickets(searchId);
  }, [searchId, tickets]);

  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.grid}>
        <FilterTransfers />
        <div>
          <FilterTickets />
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
