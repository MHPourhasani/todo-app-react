import SearchAndFilter from './SearchAndFilter';
import photoMe_min from '../../asset/image/photoMe_min.png';

const Header = () => {
	return (
		<header className='flex w-full flex-col items-center justify-center px-4 pt-3 sm:px-5 sm:py-3'>
			<section className='flex w-full items-center justify-between '>
				<p className='text-lg font-bold sm:text-xl'>Todo App</p>

				<div className='h-8 w-8 rounded-full border-2 sm:h-10 sm:w-10'>
					<img src={photoMe_min} className='h-full w-full' alt='mh pourhasani photo' />
				</div>
			</section>

			<SearchAndFilter className='w-full' />
		</header>
	);
};

export default Header;
