import { BiTrashAlt } from 'react-icons/bi';
import { FiEdit, FiSquare, FiCheckSquare } from 'react-icons/fi';

const Todo = ({ todo, onComplete }) => {
	return (
		<section
			className={`my-3 flex items-center justify-between rounded-md bg-gray-100 px-2 py-3 shadow-md sm:py-4 ${
				todo.isCompleted ? 'opacity-75' : ''
			}`}>
			<section onClick={onComplete} className='flex items-center justify-center'>
				<button className='mr-2'>
					{todo.isCompleted ? (
						<FiCheckSquare className='text-green-600 sm:h-5 sm:w-5' />
					) : (
						<FiSquare className='text-gray-600 sm:h-5 sm:w-5' />
					)}
				</button>

				<p className={`text-sm sm:text-base ${todo.isCompleted ? 'line-through' : ''}`}>
					{todo.title}
				</p>
			</section>

			<section className='flex items-center justify-center'>
				<button className='mr-1 text-gray-600'>
					<FiEdit className='sm:h-5 sm:w-5' />
				</button>
				<button className='ml-1 text-red-600'>
					<BiTrashAlt className='sm:h-5 sm:w-5' />
				</button>
			</section>
		</section>
	);
};

export default Todo;
