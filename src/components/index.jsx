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
    <div className='addTask'>
     <input onChange={handleChange}/>
     <button className='taskButton' onClick={addTask}> Add Task</button>
     </div>
    <div className='list'>
    {todoList.map((task,index) => {
      return(
        <div className='x--button'>
        
        <h1>{task.taskName}</h1>
       
        <button onClick={() => deleteTask (task.id)}> X </button>
        <button className='button5'>Completed</button>
        </div>
      );
    })}

    </div>
    </div>
  )
}

export default Index

