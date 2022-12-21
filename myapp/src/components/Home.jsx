import React , {useState} from 'react'; 
import { useEffect } from 'react';
import Task from './Task';

const Home=()=>{
 const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[] ;

   const [tasks, setTasks]= useState(initialArray);
   const [title, setTitle]= useState("");
   const [description, setDescription]= useState("");

const nice = (e) => {
  e.preventDefault();
  setTasks([...tasks,{title,description,},]);
  setTitle("");
  setDescription("");
};  

const deleteTask=(index)=>{
   const filteredArr = tasks.filter((val,i)=>{
    return i!==index;
   });

   setTasks(filteredArr);
}

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  return (
   <div className="container">
    <h1>DAILY GOALS</h1>

    <form onSubmit={nice}>
      <input 
      type="text"
      placeholder="Title" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <textarea 
       placeholder="Description"
       valur={description}
       onChange={(e)=>setDescription(e.target.value)}
       ></textarea>

      <button type='submit'>ADD</button>
    </form>
    {tasks.map((item,index)=>(
      <Task 
      key={index}
      title={item.title} 
      description={item.description}
      deleteTask={deleteTask}
      index={index}
      />
      ))}
 </div>
  )
};

export default Home;
