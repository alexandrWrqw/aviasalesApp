import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { addFilter, deleteFilter } from '../../store/filterTransfersSlice';

import classes from './FilterTransfersInput.module.scss';

function FilterTransfersInput({ label, allFiltersTransfers }) {
  const filtersTransfers = useSelector(
    (state) => state.filterTransfers.filterTransfers,
  );
  const dispatch = useDispatch();

  const onTransfersFilter = () =>
    dispatch(addFilter({ label, allFiltersTransfers }));
  const removeTransfersFilter = () =>
    dispatch(deleteFilter({ label, allFiltersTransfers }));

  const hasFilter = filtersTransfers.includes(label);

  const onToggleFilter = () => {
    if (hasFilter) {
      removeTransfersFilter();
    } else {
      onTransfersFilter();
    }
  };

  return (
    <label className={classes['filter-transfers-label']} htmlFor={label}>
      <input
        className={classes.input}
        type="checkbox"
        id={label}
        onChange={onToggleFilter}
        checked={hasFilter}
      />
      <span>{label}</span>
    </label>
  );
}

FilterTransfersInput.defaultProps = {
  label: '',
};

FilterTransfersInput.propTypes = {
  label: PropTypes.string,
  allFiltersTransfers: PropTypes.array.isRequired,
};

export default FilterTransfersInput;
