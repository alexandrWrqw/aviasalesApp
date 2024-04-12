import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/ticketsSlice';

import classes from './App.module.scss';

import Header from '../Header/Header';
import FilterTransfers from '../FilterTransfers/FilterTransfers';
import TicketsList from '../TicketsList/TicketsList';
import FilterTickets from '../FilterTickets/FilterTickets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

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
