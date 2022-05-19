import Todo from './Todo';

const TodoList = ({ todos, onComplete, onDelete }) => {
	const renderTodos = () => {
		if (todos.length === 0) {
			return (
				<p className='mx-4 my-5 w-11/12 rounded-md bg-violet-300 py-2 px-4 text-sm sm:mx-8 sm:w-8/12 sm:py-3 lg:w-1/2'>
					Please Add Your Todos ...
				</p>
			);
		}

		return (
			<section className=' w-full px-4 sm:px-8 lg:w-7/12'>
				<p className='mt-3 font-semibold sm:mt-5 sm:text-lg'>Todo List</p>

				<section className=' border-b-2 pb-3'>
					{todos.map((todo) => {
						return (
							<Todo
								key={todo.id}
								todo={todo}
								onComplete={() => onComplete(todo.id)}
								onDelete={() => onDelete(todo.id)}
							/>
						);
					})}
				</section>
			</section>
		);
	};

	return <>{renderTodos()}</>;
};

export default TodoList;
