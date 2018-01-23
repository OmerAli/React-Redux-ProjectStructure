import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRoute } from 'react-router5';

import { toggleTodo } from '../reducers/todo';
import TodoList from './TodoList';


class VisibleTodoList extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const { todos } = this.props;

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);

    default:
      throw new Error(`Unkown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, { params }) => {
  console.log('Printing State', { state });
  console.log('Printing Paramas', { params });

  return {
    todos: getVisibleTodos(
      state.todos,
      params || 'all'
    )
  };
};

const VisibleTodoListWithRouter = withRoute(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoListWithRouter;


/*  const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

// Alternate way to define |mapDispatchToProps| in direct connect by passing
  object conatining callback props want to inject and the action creator fucntion
*/

// class VisibleTodoList extends Component
