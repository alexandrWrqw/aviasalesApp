import './TicketsList.scss';

import TicketItem from '../TicketItem/TicketItem';

function TicketsList() {
  return (
    <div className="tickets-list">
      <TicketItem />
      <TicketItem />
    </div>
  );
}

export default TicketsList;
