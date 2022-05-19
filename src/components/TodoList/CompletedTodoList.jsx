import Todo from './Todo';

const CompletedTodoList = ({ completedTodo, onComplete, onDelete, onUpdate }) => {
	return (
		<section>
			{completedTodo.map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						onComplete={() => onComplete(todo.id)}
						onDelete={() => onDelete(todo.id)}
						onEdit={() => onUpdate(todo.id)}
					/>
				);
			})}
		</section>
	);
};

export default CompletedTodoList;
