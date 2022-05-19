import { useState } from 'react';
import Todo from './Todo';
import CompletedTodoList from './CompletedTodoList';

const TodoList = ({ todos, onComplete, onDelete, unCompletedTodo, completedTodo, onUpdate }) => {
	const [edit, setEdit] = useState({ id: null, title: '', isCompleted: false });

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
				<div className='flex w-full items-center justify-between'>
					<p className='mt-3 font-semibold sm:mt-5 sm:text-lg'>Todo List</p>
					<span className='mt-3 flex items-center justify-center text-sm sm:mt-5 sm:text-base'>
						<p className='mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-400 font-semibold text-white'>
							{unCompletedTodo.length}
						</p>
						<p className='font-medium'>todos is not completed</p>
					</span>
				</div>

				{completedTodo ? (
					<section>
						<section className=' border-b-2 pb-3'>
							{unCompletedTodo.map((todo) => {
								return (
									<Todo
										key={todo.id}
										todo={todo}
										onComplete={() => onComplete(todo.id)}
										onDelete={() => onDelete(todo.id)}
										onEdit={() => onUpdate(todo.id)}
									/>
								);
							})}
						</section>

						<section>
							{completedTodo ? (
								<section>
									<p className='mt-3 font-semibold sm:mt-5 sm:text-lg'>
										Completed Todo List
									</p>
									<CompletedTodoList
										completedTodo={completedTodo}
										onComplete={onComplete}
										onDelete={onDelete}
										onEdit={onUpdate}
									/>
								</section>
							) : (
								<p className='mx-4 my-5 w-11/12 rounded-md bg-violet-300 py-2 px-4 text-sm sm:mx-8 sm:w-8/12 sm:py-3 lg:w-1/2'>
									There isn't completed todos ...
								</p>
							)}
						</section>
					</section>
				) : (
					<section className=' border-b-2 pb-3'>
						{unCompletedTodo.map((todo) => {
							return (
								<Todo
									key={todo.id}
									todo={todo}
									onComplete={() => onComplete(todo.id)}
									onDelete={() => onDelete(todo.id)}
									onEdit={() => onUpdate(todo.id)}
								/>
							);
						})}
					</section>
				)}
			</section>
		);
	};

	return <>{renderTodos()}</>;
};

export default TodoList;
