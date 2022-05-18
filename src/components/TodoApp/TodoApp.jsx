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

	const completeTodoHandler = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selectedTodo = { ...todos[index] };
		selectedTodo.isCompleted = !selectedTodo.isCompleted;

		const updatedTodos = [...todos];
		updatedTodos[index] = selectedTodo;
		setTodos(updatedTodos);
	};

	return (
		<section className='flex w-full flex-col items-center justify-center'>
			<Header />
			<AddTodoModal addTodoHandler={addTodoHandler} />
			<TodoList todos={todos} onComplete={completeTodoHandler} />
		</section>
	);
};

export default TodoApp;
