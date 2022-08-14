import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/Star';
import './Stars.css';

function Stars({count}) {
  if (count < 1 || count > 5 || typeof(count) !== 'number') {
    console.log('Не подходит')
  }


  return (
    (count < 1 || count > 5 || typeof(count) !== 'number') ? null : <ul className="card-body-stars u-clearfix">{[...Array(count)].map((e, i) => <Star key={i} />)}</ul>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;
