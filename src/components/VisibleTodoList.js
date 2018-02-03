import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRoute } from 'react-router5';

import { toggleTodo } from '../reducers/todo';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('In switch Filter Todo: ', filter);
  console.log('In switch Todo: ', todos);
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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    console.log('Props: ', this.props);
  }

  componentDidUpdate() {
  }

  render() {
    const { todos } = this.props;
    console.log('Props todos: ', todos);
    console.log('Props: ', this.props);

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


const mapStateToProps = (state, { params }) => {
  console.log('Printing  Paramas', { params });
  console.log('Printing State', { state });


  const filter = params;
  //
  // if (!params.filter === undefined)
  //   filter = 'all';
  // else if (params.filter !== 'all' && params.filter !== 'active' && params.filter !== 'completed')
  //   filter = 'all';
  // else
  // filter = params.filter;


  return {
    todos: getVisibleTodos(
      state.todos,
      filter || 'all'
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
