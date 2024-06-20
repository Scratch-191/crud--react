import React from 'react';
import { useState } from 'react'

function Index() {
  const [todoList, setTodoList] = useState ([]);
  const [newTask, setNewTask] = useState ("");

  const handleChange = (event) => {
    setNewTask(event.target.value);

  };
 
  const addTask = () =>{
    const NewTodoList = [...todoList, newTask]
    setTodoList(NewTodoList);
    

  };
  return (


    <div>
    <div className='addTask'></div>
     <input onChange={handleChange}/>
     <button onClick={addTask}> Add Task</button>

    <div className='list'>
    {todoList.map((task,index) => {
      return (
      <div><h1>{task}</h1>
      <button> X </button>
      </div>)
    })}
    </div>
    </div>
  )
}

export default Index

