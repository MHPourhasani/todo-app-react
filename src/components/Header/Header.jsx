import SearchAndFilter from './SearchAndFilter';
import photoMe_min from '../../asset/image/photoMe_min.png';

const Header = () => {
	return (
		<header className='w-full px-4 pt-3'>
			<section className='flex items-center justify-between'>
				<p className='text-lg font-bold'>Todo App</p>

				<div className='h-8 w-8 rounded-full border-2'>
					<img src={photoMe_min} className='h-full w-full' alt='mh pourhasani photo' />
				</div>
			</section>

			<SearchAndFilter />
		</header>
	);
};

export default Header;
