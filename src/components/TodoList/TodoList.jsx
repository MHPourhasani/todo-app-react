import Todo from './Todo';

const TodoList = ({ todos, onComplete }) => {
	if (todos.length === 0) {
		return (
			<p className='mx-4 w-11/12 my-5 rounded-md bg-violet-300 py-2 px-4 text-sm sm:mx-8 sm:py-3'>
				Please Add Your Todos ...
			</p>
		);
	}

	return (
		<section className=' w-full px-4 sm:px-8'>
			<p className='mt-3 font-semibold sm:text-lg sm:mt-5'>Todo List</p>

			<section className=' border-b-2 pb-3'>
				{todos.map((todo) => {
					return (
						<Todo key={todo.id} todo={todo} onComplete={() => onComplete(todo.id)} />
					);
				})}
			</section>
		</section>
	);
};

export default TodoList;
