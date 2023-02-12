import PropTypes from 'prop-types';
import styled from './Button.module.css';

const Button2 = ({ text }) => {
  return <button className={styled.btn}>{text}</button>;
};

Button2.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button2;
