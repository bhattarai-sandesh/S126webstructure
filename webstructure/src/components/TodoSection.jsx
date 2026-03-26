import React, { useState } from 'react'
import './TodoSection.css'

function TodoSection({ tasks, addTask, toggleComplete, deleteTask }) {
  const [newTaskText, setNewTaskText] = useState("")
  const [newTaskPriority, setNewTaskPriority] = useState("Medium")

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText, newTaskPriority)
      setNewTaskText("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'High': return 'priority-high'
      case 'Medium': return 'priority-medium'
      case 'Low': return 'priority-low'
      default: return ''
    }
  }

  return (
    <div className="todo-section">
      <div className="section-card">
        <div className="section-title">
          <i className="fas fa-pencil-alt"></i> To-Do & Quick Notes
        </div>
        
        <div className="add-task">
          <input 
            type="text" 
            placeholder="Write a new task..." 
            value={newTaskText} 
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <select 
            className="priority-selector" 
            value={newTaskPriority} 
            onChange={(e) => setNewTaskPriority(e.target.value)}
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟠 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
          <button className="btn-add" onClick={handleAddTask}>
            <i className="fas fa-plus"></i> Add
          </button>
        </div>
        
        <div className="tasks-list">
          {tasks.length === 0 && (
            <div className="empty-msg">✨ No tasks — enjoy!</div>
          )}
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-left">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleComplete(task.id)} 
                />
                <span className={`task-text ${task.completed ? 'completed-task-text' : ''}`}>
                  {task.text}
                </span>
                <span className={`task-priority ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              <div className="task-actions">
                <i className="fas fa-trash-alt" onClick={() => deleteTask(task.id)}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoSection