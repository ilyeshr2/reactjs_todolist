import React from 'react'

export default function TodoCard(props) {

  const {item} = props//getting the data from the parent component
  const {handleDelTodos} = props
    
  return (
      <li className='todoItem'>
        {item}
      <div className='actionsContainer'>
        <button onClick={() => {
          console.log(item)
          handleDelTodos(item)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <i className="fa-solid fa-trash"></i>
      </div>
      </li>
    ) 
}