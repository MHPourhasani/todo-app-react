import { BiSearch } from 'react-icons/bi';

const SearchAndFilter = () => {
	return (
		<div className='flex w-full items-center justify-between mx-4 mt-3 md:w-8/12 '>
			<input
				type='text'
				placeholder='Search your Todo ...'
				className='mr-2 h-8 w-11/12 rounded-md border-2 border-violet-600 pl-2 text-sm shadow-sm outline-none focus:bg-violet-100 sm:h-10'
			/>

			<button
				type='submit'
				className='flex h-8 w-8 items-center justify-center rounded-md bg-violet-300 shadow-sm sm:h-10 sm:w-10'>
				<BiSearch />
			</button>
		</div>
	);
};

export default SearchAndFilter;
