import { FormControl, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function App() {

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const addTodo = () => {
    setTodoList(prevTodoList => [...prevTodoList, todo])
    setTodo('')
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className='d-flex w-50 mt-3'>
        <FormControl
          className="w-75"
          placeholder="Todo"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button className='ms-5' onClick={() => addTodo()}>Add Todo</Button>
      </div>
      <div className='mt-5 w-75'>
        {
          todoList.map(
            (todoItem, index) =>
              <div key={index} className="d-flex justify-content-between">
                <div className='d-flex'>
                <Form.Check
                  type="checkbox"
                  className="me-2"
                />
                <label>
                  {todoItem}
                </label>
                </div>
                <div>
                  Butonlar
                </div>
              </div>
          )
        }
      </div>
      <div>
        Todolar
      </div>
    </div>
  );
}

export default App;
