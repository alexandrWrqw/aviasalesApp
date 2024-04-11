import { useSelector, useDispatch } from 'react-redux';
import { addFilter, deleteFilter } from '../../store/filtersTransfersSlice';

import classes from './FilterTransfers.module.scss';

import FilterTransfersInput from '../FilterTransfersInput/FilterTransfersInput';

function FilterTransfers() {
  const allFiltersTransfers = [
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ];

  const activeFiltersTransfers = useSelector(
    (state) => state.filtersTransfers.filtersTransfers,
  );
  const dispatch = useDispatch();

  const addTransfersFilter = (label) =>
    dispatch(addFilter({ label, allFiltersTransfers }));

  const removeTransfersFilter = (label) =>
    dispatch(deleteFilter({ label, allFiltersTransfers }));

  const isActiveAllFilters =
    activeFiltersTransfers.length === allFiltersTransfers.length;

  const onToggleFilter = (label) => {
    const hasFilter = activeFiltersTransfers.includes(label);

    if (hasFilter) {
      removeTransfersFilter(label);
    } else {
      addTransfersFilter(label);
    }
  };

  const onToggleAllFilter = (label) => {
    if (isActiveAllFilters) {
      removeTransfersFilter(label);
    } else {
      addTransfersFilter(label);
    }
  };

  const listenerCheckedInput = (label) =>
    label === 'Все'
      ? isActiveAllFilters
      : activeFiltersTransfers.includes(label);

  return (
    <div className={classes['filter-transfers']}>
      <h2 className={classes.title}>Количество пересадок</h2>

      <FilterTransfersInput
        label="Все"
        onToggleFilter={onToggleAllFilter}
        listenerCheckedInput={listenerCheckedInput}
      />

      {allFiltersTransfers.map((label) => (
        <FilterTransfersInput
          key={label}
          label={label}
          onToggleFilter={onToggleFilter}
          listenerCheckedInput={listenerCheckedInput}
        />
      ))}
    </div>
  );
}

export default FilterTransfers;
