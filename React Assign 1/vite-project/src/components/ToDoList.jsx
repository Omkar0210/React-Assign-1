import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggleComplete, onDeleteTodo, onEditTodo }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <div className="empty-state">
          <p>No tasks yet. Add one above to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;