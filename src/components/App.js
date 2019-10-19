import React, { useState, useEffect } from 'react'
import '../styles/App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [temp, setTemp] = useState('')

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        value: temp,
      },
    ])
  }

  const toggleComplete = index => {
    const tempTasks = [...tasks]
    tempTasks[index].complete = !tempTasks.complete
    setTasks(tempTasks)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }


  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="content">
        <ul className="tasks">
          {tasks.map((task, i) => (
            <li
              key={task.id}
              className="list"
              style={{
                textDecoration: task.complete ? 'line-through' : 'none',
              }}
            >
              <input
                type="checkbox"
                onClick={() => toggleComplete(i)}
                disabled={task.complete}
              />
              {task.value}
            </li>
          ))}
        </ul>
        <div className="task-input">
          <input
            placeholder="Add Task"
            className="add-task"
            onChange={event => setTemp(event.target.value)}
            onKeyDown={e => handleKeyDown(e)}
          />
          <button onClick={addTask}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
