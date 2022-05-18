import { useState } from 'react';
import AddTodoModal from '../AddTodo/AddTodoModal';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (input) => {
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			title: input,
			isCompleted: false,
		};
		setTodos([...todos, newTodo]);
	};
	console.log(todos);

	return (
		<>
			<Header />
			<AddTodoModal addTodoHandler={addTodoHandler} />
			<TodoList todos={todos} />
		</>
	);
};

export default TodoApp;
