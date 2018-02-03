import { v4 } from 'node-uuid';

// actionsCreators
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

// export const setVisiblityFilter = filter => ({
//   type: 'SET_VISIBLITY_FILTER',
//   filter
// });

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

const todo = (state, action) => {
  console.log('action contain', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id)
        return state;

      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  console.log('action contain todos', action);

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action));

    default:
      return state;
  }
};

export default todos;
