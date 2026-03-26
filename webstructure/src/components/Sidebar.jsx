import React from 'react'
import './Sidebar.css'

function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: 'summary', label: 'Summary Cards', icon: '📊', color: '#3b82f6' },
    { id: 'assignments', label: 'Assignment Tracker', icon: '📚', color: '#8b5cf6' },
    { id: 'todo', label: 'To-Do Section', icon: '✅', color: '#10b981' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', color: '#f59e0b' },
    { id: 'add-subject', label: 'Add Subject', icon: '➕', color: '#ef4444' }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Study Helper</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            style={{ '--hover-color': item.color }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {activeSection === item.id && <span className="active-indicator"></span>}
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👨‍🎓</div>
          <div className="user-details">
            <div className="user-name">Student</div>
            <div className="user-role">Study Helper</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar