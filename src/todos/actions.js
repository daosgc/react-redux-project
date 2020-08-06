export const TODO_CREATE = 'TODO_CREATE'
export const createTodo = (text) => ({
  type: TODO_CREATE,
  payload: { text },
})

export const TODO_REMOVE = 'TODO_REMOVE'
export const removeTodo = (text) => ({
  type: TODO_REMOVE,
  payload: { text },
})

export const TODO_COMPLETE = 'TODO_COMPLETE'
export const completeTodo = (text) => ({
  type: TODO_COMPLETE,
  payload: { text },
})
