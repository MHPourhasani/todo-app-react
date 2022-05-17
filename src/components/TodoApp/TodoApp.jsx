import { useState } from 'react';
import AddTodoModal from '../AddTodo/AddTodoModal';
import Header from '../Header/Header';

const TodoApp = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
			title: input,
			isCompleted: false,
		};
		setTodos(newTodo);
	};
    console.log(todos);

	return (
		<>
			<Header />
			<AddTodoModal addTodoHandler={addTodoHandler} />
		</>
	);
};

export default TodoApp;
