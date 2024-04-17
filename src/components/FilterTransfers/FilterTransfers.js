import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addFilter,
  deleteFilter,
  selectDefaultFilters,
} from '../../store/ticketsSlice';

import classes from './FilterTransfers.module.scss';

import FilterTransfersInput from '../FilterTransfersInput/FilterTransfersInput';

function FilterTransfers() {
  const allFilters = [
    { id: 0, label: 'Без пересадок' },
    { id: 1, label: '1 пересадка' },
    { id: 2, label: '2 пересадки' },
    { id: 3, label: '3 пересадки' },
  ];

  const dispatch = useDispatch();

  const activeFilters = useSelector((state) => state.tickets.activeFilters);

  const onFilter = (filter) => dispatch(addFilter({ filter, allFilters }));
  const offFilter = (filter) => dispatch(deleteFilter({ filter, allFilters }));
  const addDefaultFilters = (filters) =>
    dispatch(selectDefaultFilters(filters));

  const isActiveAllFilters = activeFilters.length === allFilters.length;

  const isActiveFilter = (filter) => {
    const even = (element) => element.id === filter.id;
    return activeFilters.some(even);
  };

  const onToggleFilter = (filter) => {
    if (isActiveFilter(filter)) {
      offFilter(filter);
    } else {
      onFilter(filter);
    }
  };

  const onToggleAllFilter = (filter) => {
    if (isActiveAllFilters) {
      offFilter(filter);
    } else {
      onFilter(filter);
    }
  };

  const isChecked = (filter) =>
    filter.id === 'All' ? isActiveAllFilters : isActiveFilter(filter);

  useEffect(() => {
    addDefaultFilters(allFilters);
  }, []);

  return (
    <div className={classes['filter-transfers']}>
      <h2 className={classes.title}>Количество пересадок</h2>

      <FilterTransfersInput
        filter={{ id: 'All', label: 'Все' }}
        onToggleFilter={onToggleAllFilter}
        isChecked={isChecked}
      />

      {allFilters.map((filter) => (
        <FilterTransfersInput
          key={filter.id}
          filter={filter}
          onToggleFilter={onToggleFilter}
          isChecked={isChecked}
        />
      ))}
    </div>
  );
}

export default FilterTransfers;
