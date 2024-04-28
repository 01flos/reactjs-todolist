import React from 'react'

export default function TodoCard(props) {
    // Destructuring props for easier access within the component
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem' >
            {/* Display the todo content passed as children */}
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    // Call the handleEditTodo function passing the index as an argument
                    // This will trigger the edit functionality for the specific todo
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pencil"></i>
                </button>
                <button onClick={() => {
                    // Call the handleDeleteTodo function passing the index as an argument
                    // This will trigger the delete functionality for the specific todo
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash-arrow-up"></i>
                </button>
            </div>
        </li>
    )
}