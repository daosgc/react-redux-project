import { TODO_CREATE, TODO_REMOVE } from './actions'

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

    default: {
      return state
    }
  }
}
