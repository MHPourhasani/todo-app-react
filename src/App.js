import TodoApp from './components/TodoApp/TodoApp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className=''>
			<ToastContainer />
			<TodoApp />
		</div>
	);
}

export default App;
