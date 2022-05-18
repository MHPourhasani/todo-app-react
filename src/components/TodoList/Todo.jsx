import { BiTrashAlt } from 'react-icons/bi';
import { FiEdit, FiSquare, FiCheckSquare } from 'react-icons/fi';

const Todo = ({ todo }) => {
	return (
		<section className='my-3 flex items-center justify-between rounded-md bg-gray-100 px-2 py-2 shadow-md'>
			<section className='flex items-center justify-center'>
				<button className='mr-2'>
					<FiSquare />
				</button>

				<p className='text-sm'>{todo.title}</p>
			</section>

			<section className='flex items-center justify-center'>
				<button className='mr-1 text-gray-600'>
					<FiEdit />
				</button>
				<button className='ml-1 text-red-600'>
					<BiTrashAlt />
				</button>
			</section>
		</section>
	);
};

export default Todo;
