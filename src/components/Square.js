import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  const squareData = () => {
    //conditional logic to check if square has x or o value
    if (props.value === '' && props.onClickCallback) {
      props.onClickCallback(props.id);
    }
  };

  return <button className="square" onClick={squareData}>{props.value}</button>;
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export default Square;
