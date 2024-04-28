import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    // State for holding the list of todo items
    const [todos, setTodos] = useState([])
    // State for holding the current value of the todo input
    const [todoValue, setTodoValue] = useState('')

    // Function to save the todo list to localStorage
    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    // Function to add a new todo item to the list
    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    // Function to delete a todo item from the list by index
    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    // Function to edit a todo item, which sets the current input value to the selected item
    function handleEditTodo(index) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodo(index)
    }

    // useEffect to load the todos from localStorage when the component is first mounted
    useEffect(() => {
        if (!localStorage) {
            return
        }

        let localTodos = localStorage.getItem('todos')
        if (!localTodos) {
            return
        }

        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, [])

    return (
        <>
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
            <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </>
    )
}

export default App