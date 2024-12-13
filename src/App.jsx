import React ,{ useState } from 'react'


function App() {

  const [tasks , setTasks] = useState ([])
  const [storedTasks , setStoredTasks] = useState ("")

  function handleStoredTask(event) {
    setStoredTasks( event.target.value)
  }

  function handleTask() {
    setTasks(t => [...t ,storedTasks ])

  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_ , i) => i !== index)
    setTasks(updatedTask )
  }
  return (
    <>
      <input type='text' onChange={handleStoredTask}/>
      <button onClick={handleTask}>Submit</button>

    <ul>
      {tasks.map((task,index) => <li key={index}>
        {task} 
        <button onClick={() => deleteTask(index)}>Del</button>
      </li>)}
    </ul>
    </>
  )
}

export default App
