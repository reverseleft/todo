import { useState } from 'react'

function TodoList() {
	const [todos, setTodos] = useState(['らメンを食う','Study React']);

	return(

      <div>
        {todos.map((todo, index) => (
          <p key={index}>
            {todo} 
          </p>
        ))}
      </div>
		);
}

export default TodoList;