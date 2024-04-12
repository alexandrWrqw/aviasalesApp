import { useSelector } from 'react-redux';

import classes from './TicketsList.module.scss';

import TicketItem from '../TicketItem/TicketItem';

function TicketsList() {
  let maxKey = 1;

  const tickets = useSelector((state) => state.tickets.tickets);
  const activeFilters = useSelector(
    (state) => state.activeFilters.activeFilters,
  );

  let filteredTickets = [];

  activeFilters.forEach((filter) => {
    filteredTickets = tickets.filter(
      (ticket) =>
        ticket.segments[0].stops.length === filter.id ||
        ticket.segments[1].stops.length === filter.id,
    );
  });

  const maxTickets = filteredTickets.slice(0, 5);

  return (
    <div className={classes['tickets-list']}>
      {filteredTickets.length ? (
        maxTickets.map((ticket) => (
          <TicketItem key={maxKey++} ticket={ticket} />
        ))
      ) : (
        <div className={classes['no-results-message']}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      )}
    </div>
  );
}

export default TicketsList;
