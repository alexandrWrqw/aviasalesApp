import './AmtTransfersInput.scss';

import PropTypes from 'prop-types';

function AmtTransfersInput({ label }) {
  return (
    <label className="AmtTransfersLabel" htmlFor={label}>
      <input type="checkbox" id={label} />
      <span>{label}</span>
    </label>
  );
}

AmtTransfersInput.defaultProps = {
  label: '',
};

AmtTransfersInput.propTypes = {
  label: PropTypes.string,
};

export default AmtTransfersInput;
