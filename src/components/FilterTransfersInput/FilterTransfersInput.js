import PropTypes from 'prop-types';

import classes from './FilterTransfersInput.module.scss';

function FilterTransfersInput({ filter, onToggleFilter, isChecked }) {
  const checked = isChecked(filter);

  return (
    <label className={classes['filter-transfers-label']} htmlFor={filter.id}>
      <input
        className={classes.input}
        type="checkbox"
        id={filter.id}
        onChange={() => onToggleFilter(filter)}
        checked={checked}
      />
      <span>{filter.label}</span>
    </label>
  );
}

FilterTransfersInput.defaultProps = {
  onToggleFilter: () => {},
  isChecked: () => {},
};

FilterTransfersInput.propTypes = {
  filter: PropTypes.object.isRequired,
  onToggleFilter: PropTypes.func,
  isChecked: PropTypes.func,
};

export default FilterTransfersInput;
