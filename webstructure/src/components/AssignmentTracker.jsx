import React from 'react'
import './AssignmentTracker.css'

function AssignmentTracker({ assignments, toggleComplete, isUrgent }) {
  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'High': return 'priority-high'
      case 'Medium': return 'priority-medium'
      case 'Low': return 'priority-low'
      default: return ''
    }
  }

  return (
    <div className="tracker-section">
      <div className="section-card">
        <div className="section-title">
          <i className="fas fa-list-check"></i> Assignment & Exam Tracker
        </div>
        <div className="table-container">
          <table className="assignments-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assignment Name</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Notes</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map(assignment => {
                const urgentFlag = !assignment.completed && isUrgent(assignment.dueDate)
                return (
                  <tr key={assignment.id} className={urgentFlag ? 'urgent-row' : ''}>
                    <td><strong>{assignment.subject}</strong></td>
                    <td style={{ 
                      textDecoration: assignment.completed ? 'line-through' : 'none', 
                      opacity: assignment.completed ? 0.6 : 1 
                    }}>
                      {assignment.name}
                    </td>
                    <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`priority-badge ${getPriorityClass(assignment.priority)}`}>
                        {assignment.priority}
                      </span>
                    </td>
                    <td>{assignment.notes}</td>
                    <td>
                      <input 
                        type="checkbox" 
                        className="check-complete" 
                        checked={assignment.completed} 
                        onChange={() => toggleComplete(assignment.id)} 
                      />
                    </td>
                  </tr>
                )
              })}
              {assignments.length === 0 && (
                <tr>
                  <td colSpan="6" className="empty-msg">No assignments yet. Great!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="urgent-note">
          <i className="fas fa-flag"></i> Red row = due within 2 days (urgent)
        </div>
      </div>
    </div>
  )
}

export default AssignmentTracker