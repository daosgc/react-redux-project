import React from 'react'
import { connect } from 'react-redux'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo, completeTodo } from './actions'
import styled from 'styled-components'

const List = styled.div`
  max-width: 700px;
  margin: auto;
`
const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
  <List>
    <h1>TODO Application</h1>
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed}
        onCompletePressed={onCompletePressed}/>
    ))}
  </List>
)

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
