import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contact by Name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
