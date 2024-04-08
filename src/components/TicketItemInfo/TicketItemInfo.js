import classes from './TicketItemInfo.module.scss';

function TicketItemInfo() {
  return (
    <div className={classes['ticket-info']}>
      <div className={classes.block}>
        <span className={classes.title}>MOW - HKT</span>
        <span className={classes.desc}>10:45 - 08:00</span>
      </div>

      <div className={classes.block}>
        <span className={classes.title}>В пути</span>
        <span className={classes.desc}>21ч 15м</span>
      </div>

      <div className={classes.block}>
        <span className={classes.title}>2 пересадки</span>
        <span className={classes.desc}>HKG,JNB</span>
      </div>
    </div>
  );
}

export default TicketItemInfo;
