import classes from './FilterTickets.module.scss';

function FilterTickets() {
  const filterTicketsLabels = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

  return (
    <div className={classes['filter-tickets']}>
      {filterTicketsLabels.map((label) => (
        <button className={classes.btn} type="button">
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterTickets;
