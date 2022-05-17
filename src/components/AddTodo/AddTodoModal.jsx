import { useState } from 'react';

function AddTodoModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<section className='w-full'>
			<button
				className='absolute bottom-5 right-5 h-8 w-8 rounded bg-violet-500 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:bg-violet-600 focus:outline-none active:bg-violet-600'
				type='button'
				onClick={() => setShowModal(true)}>
				+
			</button>

			{showModal ? (
				<section className='w-11/12'>
					<div className='fixed inset-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
						<div className='relative my-6 mx-auto w-11/12 max-w-3xl'>
							<div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
								<div className='flex items-start justify-between rounded-t border-slate-200 px-5 pt-5'>
									<h3 className='text-xl font-bold'>Add Todo</h3>
								</div>

								<div className='relative flex flex-auto flex-col p-6'>
									<label className='mb-1 font-semibold '>Todo Title</label>
									<input
										type='text'
										placeholder='Todo Title ...'
										className='my-1 w-full rounded-md border-2 border-violet-500 py-1 pl-2 text-sm leading-relaxed text-slate-500 outline-none'
									/>
								</div>

								<div className='flex items-center justify-end rounded-b p-6'>
									<button
										className='background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none'
										type='button'
										onClick={() => setShowModal(false)}>
										Close
									</button>

									<button
										className='mr-1 mb-1 rounded bg-violet-500 px-4 py-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600'
										type='button'
										onClick={() => setShowModal(false)}>
										Add Todo
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
				</section>
			) : null}
		</section>
	);
}

export default AddTodoModal;
