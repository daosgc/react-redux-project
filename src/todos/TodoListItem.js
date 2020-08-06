import React from 'react'

import styled from 'styled-components'

const TodoItem = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px #ddd;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  background-color: ${props => props.complete ? '#3892e5' : '#ee2222'};
  margin-left: ${props => props.complete ? '0px' : '8px'};
`

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <TodoItem>
    <h3>{todo.text}</h3>
    <ButtonContainer>
      { todo.isCompleted ? null :
        <Button complete onClick={() => onCompletePressed ? onCompletePressed(todo.text) : null}>
          Mark As Completed
        </Button>
      }
      <Button remove onClick={() => onRemovePressed(todo.text)}>
        Remove
      </Button>
    </ButtonContainer>
  </TodoItem>
)

export default TodoListItem
