"use client"
import React, { useState } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/fa';


const page = () => {
  const[title,setTitle] = useState("")
  const[desc,setdesc] = useState("")
  const[mainTask,setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    setTitle("")
    setdesc("")
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i}>
        <div className=' flex flex-wrap justify-between mb-2 '>
          <h5 className='text-xl font-semibold text-red-700'>{t.title}</h5>
          <p className='text-sm font-bold '>{t.desc}</p>
          <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white px-2 py-2 rounded-lg font-bold'>Delete</button>
          {/* <h4><RiDeleteBin5Fill/></h4> */}

        </div>
        </li>
      )
    })
  }
  return (
    <div className='main h-100 w-100 bg-white'>
      <h1 className=' w-100 bg-black text-white p-5 text-5xl font-medium text-center'>ToDo List</h1>
      <form className='container' onSubmit={submitHandler}>
        <input type="text" placeholder='Enter Title here' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='text-1xl border-zinc-800 border-2 m-8 px-d py-2 w-60'/>
        <input type="text" placeholder='Enter Description here' value={desc} onChange={(e)=>{setdesc(e.target.value)}} className='text-1xl border-zinc-800 border-2 m-8 px-d py-2 w-60' />
        <button className='bg-black text-white px-4 py-3 text-1xl font-bold rounded-lg m-5'>Add Task</button>
      </form>
      <hr />
      <div className='container mt-5 p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
      </div>

    </div>
  )
}

export default page