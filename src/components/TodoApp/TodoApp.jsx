import { useState } from 'react';
import AddTodoModal from '../AddTodo/AddTodoModal';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
	const [todos, setTodos] = useState([]);

	// add Todo Handler function
	const addTodoHandler = (input) => {
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			title: input,
			isCompleted: false,
		};
		setTodos([...todos, newTodo]);
	};

	// complete Todo Handler function
	const completeTodoHandler = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selectedTodo = { ...todos[index] };
		selectedTodo.isCompleted = !selectedTodo.isCompleted;

		const updatedTodos = [...todos];
		updatedTodos[index] = selectedTodo;
		setTodos(updatedTodos);
	};

	// delete Todo Handler function
	const deleteTodoHandler = (id) => {
		console.log(id);
		const removeTodo = todos.filter((todo) => todo.id !== id);
		setTodos(removeTodo);
	};

	// const updateTodoHandler = (id) => {
	// 	const index = todos.findIndex((todo) => todo.id === id);
	// 	const selectedTodo = { ...todos[index] };
	// 	console.log(selectedTodo);
	// 	const removeTodo = todos.filter((todo) => todo.id !== id);
	// 	setTodos(removeTodo);
	// };

	return (
		<section className='flex w-full flex-col items-center justify-center'>
			<Header />
			<AddTodoModal addTodoHandler={addTodoHandler} />
			<TodoList
				todos={todos}
				onComplete={completeTodoHandler}
				onDelete={deleteTodoHandler}
				unCompletedTodo={todos.filter((todo) => !todo.isCompleted).length}
			/>
		</section>
	);
};

export default TodoApp;
