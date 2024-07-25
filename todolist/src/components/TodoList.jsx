import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {


  const {todos} = props//getting the data from the parent component
  const {handleDelTodos} = props

  return (
    <ul className='main'>{
      todos.map((item,index)=>{
          return (
            <TodoCard key={index} item={item} handleDelTodos={handleDelTodos}>
            </TodoCard>
          )
        })
      }</ul> 
  )

}
