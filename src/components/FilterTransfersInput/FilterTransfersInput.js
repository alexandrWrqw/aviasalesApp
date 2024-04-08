import PropTypes from 'prop-types';
import classes from './FilterTransfersInput.module.scss';

function FilterTransfersInput({ label }) {
  return (
    <label className={classes['filter-transfers-label']} htmlFor={label}>
      <input className={classes.input} type="checkbox" id={label} />
      <span>{label}</span>
    </label>
  );
}

FilterTransfersInput.defaultProps = {
  label: '',
};

FilterTransfersInput.propTypes = {
  label: PropTypes.string,
};

export default FilterTransfersInput;
