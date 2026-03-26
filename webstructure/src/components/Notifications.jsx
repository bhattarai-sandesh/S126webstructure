import React from 'react'
import './Notifications.css'

function Notifications({ upcomingDeadlines, isUrgent, assignments }) {
  const getNotifications = () => {
    const notifications = []
    
    // Upcoming deadlines
    upcomingDeadlines.forEach(assignment => {
      const isUrgentFlag = isUrgent(assignment.dueDate)
      notifications.push({
        id: assignment.id,
        type: 'deadline',
        title: assignment.name,
        subject: assignment.subject,
        dueDate: assignment.dueDate,
        urgent: isUrgentFlag,
        message: `${assignment.subject}: ${assignment.name} - due ${new Date(assignment.dueDate).toLocaleDateString()} ${isUrgentFlag ? '(URGENT!)' : ''}`
      })
    })
    
    return notifications
  }

  const notifications = getNotifications()

  return (
    <div className="notifications-section">
      <div className="notifications-header">
        <h2>🔔 Notifications</h2>
        <p>{notifications.length} upcoming deadline{notifications.length !== 1 ? 's' : ''}</p>
      </div>
      
      {notifications.length === 0 ? (
        <div className="empty-notifications">
          <div className="empty-icon">🔕</div>
          <h3>No upcoming deadlines</h3>
          <p>You're all caught up! Great job! 🎉</p>
        </div>
      ) : (
        <div className="notifications-list">
          {notifications.map(notif => (
            <div key={notif.id} className={`notification-card ${notif.urgent ? 'urgent' : ''}`}>
              <div className="notification-icon">
                {notif.urgent ? '⚠️' : '📅'}
              </div>
              <div className="notification-content">
                <div className="notification-title">
                  <strong>{notif.subject}</strong> - {notif.title}
                </div>
                <div className="notification-message">
                  {notif.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Notifications