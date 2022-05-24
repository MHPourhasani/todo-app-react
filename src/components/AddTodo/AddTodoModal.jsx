import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

function AddTodoModal({ addTodoHandler }) {
	const [showModal, setShowModal] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const inputRef = useRef(null);
	const formRef = useRef(null);

	// useEffect(() => {
	// 	// inputRef.current.focus();
	// }, []);

	// useEffect(() => {
		
	// }, [showModal]);

	const changeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (inputValue) {
			addTodoHandler(inputValue);

			toast.success('added your todo!', {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		} else {
			<p className='text-red-600'>Invalid Value ...</p>;
		}
		setInputValue('');
	};

	return (
		<section className='w-full'>
			<button
				className='fixed bottom-5 right-5 h-8 w-8 rounded bg-violet-500 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:bg-violet-600 focus:outline-none active:bg-violet-600 sm:h-11 sm:w-11 md:text-lg'
				type='button'
				onClick={() => setShowModal(true)}>
				+
			</button>

			{showModal ? (
				<form
				ref={formRef}
					onSubmit={submitHandler}
					className='flex w-11/12 flex-col items-start justify-center'>
					<div className='fixed inset-0 z-50 mx-auto flex w-full items-center justify-center overflow-y-auto overflow-x-hidden outline-none sm:w-8/12 lg:w-5/12'>
						<div className='relative my-6 mx-auto w-11/12 max-w-3xl'>
							<div className='relative flex w-full flex-col justify-center rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
								<h3 className='px-5 pt-5 text-xl font-bold'>Add Todo</h3>

								<div className='relative flex flex-auto flex-col p-6 pb-0'>
									<label className='mb-1 font-semibold '>Todo Title</label>
									<input
										type='text'
										ref={inputRef}
										onChange={changeHandler}
										placeholder='Todo Title ...'
										className='my-1 w-full rounded-md border-2 border-gray-400 py-1 pl-2 text-sm leading-relaxed text-black outline-none focus:border-violet-500 sm:py-2'
									/>
								</div>

								<section className='flex items-center justify-end rounded-b p-6'>
									<button
										className='background-transparent mr-1 mb-1 rounded-md px-6 py-2 text-xs font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-red-200 focus:outline-none sm:py-3 sm:text-xs'
										type='button'
										onClick={() => setShowModal(false)}>
										Close
									</button>

									<button
										className='mr-1 mb-1 rounded bg-violet-500 px-3 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:bg-violet-600 focus:outline-none active:bg-violet-600 sm:px-4 sm:py-3 sm:text-xs'
										type='submit'
										// onClick={() => setShowModal(false)}
									>
										Add Todo
									</button>
								</section>
							</div>
						</div>
					</div>
				</form>
			) : null}
		</section>
	);
}

export default AddTodoModal;
