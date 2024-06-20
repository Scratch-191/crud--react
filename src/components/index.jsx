import React from 'react';
import { useState } from 'react'

function Index() {
  const [todoList, setTodoList] = useState ([]);
  const [newTask, setNewTask] = useState ("");

  const handleChange = (event) => {
    setNewTask(event.target.value);

  };
 
  const addTask = () =>{
    const task = {
      id :todoList.length=== 0 ? 1 : todoList[todoList.length -1].id + 1 ,
      taskName : newTask,
    };
    setTodoList([...todoList, task]);
    

  };
  
  const deleteTask = (id) =>{
    const newTodoList = todoList.filter((task) =>{
      if (task.id === id){
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
        
        <h1>{task.taskName}</h1>
       
        <button onClick={() => deleteTask (task.id)}> X </button>
        
        </div>
      );
    })}

    </div>
    </div>
  )
}

export default Index

