import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  console.log('In Todolist Component: ', todos);
  console.log('In Todolist onTodoClick: ', onTodoClick);

  return (
    <ul>
      {todos.map((todo) => {
        console.log('hello', { ...todo });
        return (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
