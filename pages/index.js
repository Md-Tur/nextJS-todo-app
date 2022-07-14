import { useState } from "react";

const index = () => {

    const [userInput, setUserInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChange = e => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodoList([
            userInput,
            ...todoList
        ]);
        setUserInput('');
    }

    const handleDelete = (todo) => {
        const updatedList = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));
        setTodoList(updatedList);
    }

    return (
        <div>
            <h3>Next JS Todo App</h3>
            <form>
                <input onChange={handleChange} value={userInput} type="text" /> <button onClick={handleSubmit}>Submit</button>
            </form>
            <ol>
                {
                    todoList.length >= 1 ? todoList.map((todo, index) => {
                        return <li key={index}>{todo} <button onClick={(e) => {
                            e.preventDefault()
                            handleDelete(todo)
                        }}>Delete</button></li>
                    })
                        :
                        'Please write something here'
                }
            </ol>
        </div>
    )
}

export default index;