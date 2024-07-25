import React from 'react'

export default function TodoCard(props) {

  const {item} = props
  const {handleDelTodos} = props
    
  return (
      <li className='todoItem'>
        {item}
        <div className='actionsContainer'>
          <i className="fa-solid fa-pen-to-square"></i>
          <button onClick={() => {
            console.log(item)
            handleDelTodos(item)}}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    ) 
}