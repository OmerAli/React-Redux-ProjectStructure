import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
  console.log('in todo: ', text);
  return (
    <li
      onItemClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    ><span onClick={onClick} role="presentation">{text}</span>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
