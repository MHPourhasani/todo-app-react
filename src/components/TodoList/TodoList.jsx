import Todo from './Todo';

const TodoList = ({ todos }) => {
	if (todos.length === 0) {
		return (
			<p className='mx-4 my-5 rounded-md bg-violet-300 py-2 px-4 text-sm'>
				Please Add Todos ...
			</p>
		);
	}

	return (
		<section className='w-full px-4'>
			<p>Todo List</p>

			<section>
				{todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />;
				})}
			</section>
		</section>
	);
};

export default TodoList;
