/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './TicketsList.module.scss';

import TicketItem from '../TicketItem/TicketItem';

function TicketsList() {
  const [maxValue, setMaxValue] = useState(5);

  let maxKey = 1;

  const filteredTickets = useSelector((state) => state.tickets.filteredTickets);
  const activeFilters = useSelector((state) => state.tickets.activeFilters);
  const isLoading = useSelector((state) => state.tickets.isLoading);

  const maxTickets = filteredTickets.slice(0, maxValue);

  const content = maxTickets.map((ticket) => (
    <TicketItem key={maxKey++} ticket={ticket} />
  ));

  const noResults = activeFilters.length ? null : (
    <div className={classes['no-results-message']}>
      Рейсов, подходящих под заданные фильтры, не найдено
    </div>
  );

  const loadingBar = isLoading ? <div className={classes.loader} /> : null;

  const moreBtn = filteredTickets.length ? (
    <button
      className={classes['more-btn']}
      type="button"
      onClick={() => setMaxValue((prev) => prev + 5)}
    >
      Показать еще 5 билетов!
    </button>
  ) : null;

  return (
    <div className={classes['tickets-list']}>
      {loadingBar}
      {filteredTickets.length ? content : noResults}
      {moreBtn}
    </div>
  );
}

export default TicketsList;
