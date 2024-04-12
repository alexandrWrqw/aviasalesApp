import PropTypes from 'prop-types';
import { format, add } from 'date-fns';

import classes from './TicketItemInfo.module.scss';

function TicketItemInfo({ ticketInfo }) {
  const sending = format(new Date(ticketInfo.date), 'HH:mm');

  const arrival = format(
    add(new Date(ticketInfo.date), {
      minutes: ticketInfo.duration,
    }),
    'kk:mm',
  );

  const travelTime = `${Math.floor(ticketInfo.duration / 60)}ч ${ticketInfo.duration % 60}м`;

  const transformStopsTitle = (num) => {
    let resultTitle;

    if (num === 1) resultTitle = 'пересадка';
    if (num > 1) resultTitle = 'пересадки'; // Не думаю что потребуется обрабатывать > 5

    return resultTitle;
  };

  const stopsTitle =
    ticketInfo.stops.length !== 0
      ? `${ticketInfo.stops.length} ${transformStopsTitle(ticketInfo.stops.length)}`
      : 'Без пересадок';

  const stops =
    ticketInfo.stops.length !== 0 ? ticketInfo.stops.join(',') : '-';

  return (
    <div className={classes['ticket-info']}>
      <div className={classes.block}>
        <span
          className={classes.title}
        >{`${ticketInfo.origin} - ${ticketInfo.destination}`}</span>
        <span className={classes.desc}>
          {sending} - {arrival}
        </span>
      </div>

      <div className={classes.block}>
        <span className={classes.title}>В пути</span>
        <span className={classes.desc}>{travelTime}</span>
      </div>

      <div className={classes.block}>
        <span className={classes.title}>{stopsTitle}</span>
        <span className={classes.desc}>{stops}</span>
      </div>
    </div>
  );
}

TicketItemInfo.propTypes = {
  ticketInfo: PropTypes.object.isRequired,
};

export default TicketItemInfo;
