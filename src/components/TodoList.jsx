import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    // Destructuring props to access the todos array
    const { todos } = props

    return (
        <ul className='main'>
            {/* Iterate over the todos array and render a TodoCard for each todo */}
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        // Pass all props to the TodoCard component (for potential future use)
                        {...props} 
                        // Provide the todo content and index as props to the TodoCard
                        key={todoIndex} 
                        index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}