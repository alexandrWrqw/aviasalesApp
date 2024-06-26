import { useDispatch, useSelector } from 'react-redux';
import { selectSortTicketsValue } from '../../store/ticketsSlice';

import classes from './FilterTickets.module.scss';

function FilterTickets() {
  const dispatch = useDispatch();

  const isActiveSort = useSelector((state) => state.tickets.ticketsSortValue);

  const filterTicketsLabels = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

  return (
    <div className={classes['filter-tickets']}>
      {filterTicketsLabels.map((label) => (
        <button
          key={label}
          className={classes.btn}
          style={isActiveSort === label ? { backgroundColor: '#2196F3' } : null}
          type="button"
          onClick={() => dispatch(selectSortTicketsValue(label))}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterTickets;
