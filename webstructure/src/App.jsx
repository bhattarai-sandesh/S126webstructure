import React, { useState } from 'react'
import { initialAssignments, initialTasks, STUDENT_NAME } from './data/initialData'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import SummaryCards from './components/SummaryCards'
import Notifications from './components/Notifications'
import AssignmentTracker from './components/AssignmentTracker'
import TodoSection from './components/TodoSection'
import AddSubject from './components/AddSubject'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('summary')
  
  // State for assignments data
  const [assignments, setAssignments] = useState([])
  
  // State for tasks data
  const [tasks, setTasks] = useState([])

  // Calculate stats from assignments
  const calculateStats = () => {
    const total = assignments.length
    const dueThisWeek = assignments.filter(a => {
      if (a.completed) return false
      const today = new Date()
      const dueDate = new Date(a.dueDate)
      const endOfWeek = new Date(today)
      endOfWeek.setDate(today.getDate() + (7 - today.getDay()))
      return dueDate <= endOfWeek && dueDate >= today && !a.completed
    }).length
    const highPriorityTasks = assignments.filter(a => a.priority === "High" && !a.completed).length
    const upcomingExams = assignments.filter(a => 
      a.name.toLowerCase().includes("exam") || a.subject.toLowerCase().includes("exam")
    ).length
    
    return { total, dueThisWeek, highPriorityTasks, upcomingExams: upcomingExams || 0 }
  }

  // Get upcoming deadlines for notifications
  const getUpcomingDeadlines = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return assignments.filter(a => {
      if (a.completed) return false
      const due = new Date(a.dueDate)
      due.setHours(0, 0, 0, 0)
      const diffDays = Math.ceil((due - today) / (1000 * 3600 * 24))
      return diffDays >= 0 && diffDays <= 3
    }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
  }

  // Helper to check if assignment is urgent (due within 2 days)
  const isUrgent = (dueDateStr) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const due = new Date(dueDateStr)
    due.setHours(0, 0, 0, 0)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays >= 0 && diffDays <= 2
  }

  // Toggle assignment completion
  const toggleCompleteAssignment = (id) => {
    setAssignments(prev => prev.map(a => 
      a.id === id ? { ...a, completed: !a.completed } : a
    ))
  }

  // Add new assignment
  const addAssignment = (assignmentData) => {
    const newAssignment = {
      id: Date.now(),
      ...assignmentData,
      completed: false
    }
    setAssignments(prev => [...prev, newAssignment])
  }

  // Delete assignment
  const deleteAssignment = (id) => {
    setAssignments(prev => prev.filter(a => a.id !== id))
  }

  // Add new task
  const addTask = (taskText, priority) => {
    if (!taskText.trim()) return
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      priority: priority,
      completed: false
    }
    setTasks(prev => [...prev, newTask])
  }

  // Toggle task completion
  const toggleTaskComplete = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const stats = calculateStats()
  const upcomingDeadlines = getUpcomingDeadlines()

  // Render the active section
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'summary':
        return <SummaryCards stats={stats} />
      case 'assignments':
        return (
          <AssignmentTracker 
            assignments={assignments}
            toggleComplete={toggleCompleteAssignment}
            deleteAssignment={deleteAssignment}
            isUrgent={isUrgent}
          />
        )
      case 'todo':
        return (
          <TodoSection 
            tasks={tasks}
            addTask={addTask}
            toggleComplete={toggleTaskComplete}
            deleteTask={deleteTask}
          />
        )
      case 'notifications':
        return (
          <Notifications 
            upcomingDeadlines={upcomingDeadlines} 
            isUrgent={isUrgent}
            assignments={assignments}
          />
        )
      case 'add-subject':
        return <AddSubject addAssignment={addAssignment} />
      default:
        return <SummaryCards stats={stats} />
    }
  }

  return (
    <Layout>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <div className="content-header">
          <h1>
            {activeSection === 'summary' && '📊 Dashboard Overview'}
            {activeSection === 'assignments' && '📚 Assignment Tracker'}
            {activeSection === 'todo' && '✅ To-Do List'}
            {activeSection === 'notifications' && '🔔 Notifications'}
            {activeSection === 'add-subject' && '➕ Add New Subject'}
          </h1>
          <p className="subtitle">
            {activeSection === 'summary' && 'Your study progress at a glance'}
            {activeSection === 'assignments' && 'Manage all your assignments and exams'}
            {activeSection === 'todo' && 'Keep track of daily tasks'}
            {activeSection === 'notifications' && 'Stay updated with upcoming deadlines'}
            {activeSection === 'add-subject' && 'Add new assignments and set due dates'}
          </p>
        </div>
        {renderActiveSection()}
      </div>
    </Layout>
  )
}

export default App