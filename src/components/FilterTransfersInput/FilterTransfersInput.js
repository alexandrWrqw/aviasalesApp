import PropTypes from 'prop-types';

import classes from './FilterTransfersInput.module.scss';

function FilterTransfersInput({ label, onToggleFilter, listenerCheckedInput }) {
  const isChecked = listenerCheckedInput(label);

  return (
    <label className={classes['filter-transfers-label']} htmlFor={label}>
      <input
        className={classes.input}
        type="checkbox"
        id={label}
        onChange={() => onToggleFilter(label)}
        checked={isChecked}
      />
      <span>{label}</span>
    </label>
  );
}

FilterTransfersInput.defaultProps = {
  label: '',
  onToggleFilter: () => {},
  listenerCheckedInput: () => {},
};

FilterTransfersInput.propTypes = {
  label: PropTypes.string,
  onToggleFilter: PropTypes.func,
  listenerCheckedInput: PropTypes.func,
};

export default FilterTransfersInput;
