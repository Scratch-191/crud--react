import React from 'react';
import { useState } from 'react'

function Index() {
  const [todoList, setTodoList] = useState ([]);
  const [newTask, setNewTask] = useState ("");

  const handleChange = (event) => {
    setNewTask(event.target.value);

  };
 
  const addTask = () =>{
    setTodoList([...todoList, newTask]);
    

  };
  
  const deleteTask = (taskName) =>{
    const newTodoList = todoList.filter((task) =>{
      if (task === taskName){
        return false;
      } else {
       return true;
      }
     });
    setTodoList(newTodoList);
  }; 
  return (


    <div>
    <div className='addTask'></div>
     <input onChange={handleChange}/>
     <button onClick={addTask}> Add Task</button>

    <div className='list'>
    {todoList.map((task,index) => {
      return(
        <div>
        <h1>{task}</h1>
        <button onClick={() => deleteTask (task)}> X </button>
        </div>
      );
    })}
    </div>
    </div>
  )
}

export default Index

