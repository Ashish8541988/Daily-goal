import React from 'react'

function Task({title,description,deleteTask,index}) {
 
  return (
    <div className='task'>
 <div className='task1'>
        <p className='ppp'>{title}</p>
        <span>{description}</span>
        </div>
        <div>
            <button onClick={()=>deleteTask(index)}>-</button>
        </div>
    </div>
  )
}

export default Task;