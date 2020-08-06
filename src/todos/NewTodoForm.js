import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodo } from './actions'
import styled from 'styled-components'

const TodoForm = styled.div`
  padding: 16px 0;
  text-align: center;
  box-shadow: 0 4px 8px #ddd;
`

const TodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  width: 70%;
  outline: none;
`

const AddButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #3892e5;
  color: #fff;
`

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <TodoForm>
      <TodoInput
        type="text"
        placeholder="Type your todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AddButton
        onClick={() => {
          const isInvalidText = inputValue === '' || todos.some((todo) => todo.text === inputValue)
          if (!isInvalidText) {
            onCreatePressed(inputValue)
            setInputValue('')
          }
        }}
      >
        Create Todo
      </AddButton>
    </TodoForm>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
