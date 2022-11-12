import React, { useEffect } from 'react'
import Task from './Task'
import { useState } from 'react'
function Home() {
  const intialArr=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
  const  [tasks,settasks]=useState(intialArr);
  const [title,settitle]=useState("");
  const [description,setdescription]=useState("");
  console.log(title,description);
 const submithandler= (e)=>{
e.preventDefault();
settasks([...tasks,{title,description},])
settitle("");
setdescription("");
  };
  const deleteTask=(index)=>{
    const filterdarray=tasks.filter((val,i)=>{
     return i!==index;
    })
settasks(filterdarray);
  };
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])
  return (
    <div>
        <form className='daily' onSubmit={submithandler}>
        <h1>Daily goal</h1>
        <input type="text" id='input' placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>
        <textarea name="Description" id="textarea" placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
        <button type='submit' className='submitbtn'>Save</button>
        </form>
       {
        tasks.map((item,index)=>(
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
        ))
       }
    </div>
  )
}

export default Home