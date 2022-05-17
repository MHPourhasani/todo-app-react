import { BiSearch } from 'react-icons/bi';

const SearchAndFilter = () => {
	return (
		<div className='flex w-11/12 items-center justify-between pt-2'>
			<input
				type='text'
				placeholder='Search your Todo ...'
				className='mr-2 h-8 w-11/12 rounded-md border-2 border-violet-600 pl-2 text-sm shadow-sm outline-none focus:bg-violet-100'
			/>

			<button
				type='submit'
				className='flex h-8 w-8 items-center justify-center rounded-md bg-violet-300 shadow-sm'>
				<BiSearch />
			</button>
		</div>
	);
};

export default SearchAndFilter;
