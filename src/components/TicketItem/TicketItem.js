import classes from './TicketItem.module.scss';
import defaultImage from './itemLogo.png';

import TicketItemInfo from '../TicketItemInfo/TicketItemInfo';

function TicketItem() {
  return (
    <div className={classes['ticket-item']}>
      <div className={classes.header}>
        <span className={classes.price}>13 400 Р</span>
        <img src={defaultImage} alt="logo" />
      </div>

      <TicketItemInfo />
      <TicketItemInfo />
    </div>
  );
}

export default TicketItem;
