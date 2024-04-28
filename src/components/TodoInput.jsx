export default function TodoInput(props) {
    // Destructuring props for easier access within the component
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input 
                // Display the current todo value
                value={todoValue}
                // Update the todo value when the input changes
                onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter task" />
            <button onClick={() => {
                // Call the handleAddTodos function to add the todo
                handleAddTodos(todoValue)
                // Clear the input field after adding the todo
                setTodoValue('')
            }}>
                Add
            </button>
        </header>
    )
}