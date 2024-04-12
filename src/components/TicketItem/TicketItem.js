import PropTypes from 'prop-types';

import classes from './TicketItem.module.scss';

import TicketItemInfo from '../TicketItemInfo/TicketItemInfo';

function TicketItem({ ticket }) {
  let maxKey = 1;

  return (
    <div className={classes['ticket-item']}>
      <div className={classes.header}>
        <span className={classes.price}>{ticket.price} Р</span>
        <img
          src={`http://pics.avs.io/110/36/${ticket.carrier}.png`}
          alt="logo"
        />
      </div>

      {ticket.segments.map((segment) => (
        <TicketItemInfo key={maxKey++} ticketInfo={segment} />
      ))}
    </div>
  );
}

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default TicketItem;
