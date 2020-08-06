import { TODO_CREATE, TODO_REMOVE, TODO_COMPLETE } from './actions'

export const todos = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TODO_CREATE: {
      const { text } = payload
      const newTodo = {
        text,
        isCompleted: false,
      }
      return [newTodo, ...state]
    }

    case TODO_REMOVE: {
      const { text } = payload
      return state.filter((todo) => todo.text !== text)
    }

    case TODO_COMPLETE: {
      const { text } = payload;
      return state.map((todo) => {
        todo.isCompleted = todo.text === text ? true : todo.isCompleted;
        return todo;
      });
    }

    default: {
      return state
    }
  }
}
