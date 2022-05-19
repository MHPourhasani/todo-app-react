import SearchAndFilter from './SearchAndFilter';
import myPhotoComp from '../../asset/image/myPhotoComp.jpg';

const Header = () => {
	return (
		<header className='flex w-full flex-col items-center justify-center px-4 pt-3 sm:px-5 sm:py-3'>
			<section className='flex w-full items-center justify-between lg:my-5 lg:w-1/2'>
				<p className='text-lg font-bold sm:text-xl'>Todo App</p>

				<a href='https://github.com/MHPourhasani' target='_blank' rel='noreferrer'>
					<img
						src={myPhotoComp}
						aria-hidden
						className='h-8 w-8 cursor-pointer rounded-full'
						alt='mh pourhasani photo'
					/>
				</a>
			</section>

			<SearchAndFilter className='w-full' />
		</header>
	);
};

export default Header;
