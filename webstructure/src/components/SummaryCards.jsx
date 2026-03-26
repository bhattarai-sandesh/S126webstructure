import React from 'react'
import './SummaryCards.css'

function SummaryCards({ stats }) {
  const cards = [
    { title: "Total Assignments", value: stats.total, icon: "fas fa-tasks", color: "#3b82f6", bgColor: "#f0f9ff" },
    { title: "Due This Week", value: stats.dueThisWeek, icon: "fas fa-calendar-week", color: "#eab308", bgColor: "#fefce8" },
    { title: "High Priority Tasks", value: stats.highPriorityTasks, icon: "fas fa-exclamation-triangle", color: "#f97316", bgColor: "#fff7ed" },
    { title: "Upcoming Exams", value: stats.upcomingExams, icon: "fas fa-clock", color: "#ef4444", bgColor: "#fef2f2" }
  ]

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="stat-card" 
          style={{ borderLeftColor: card.color, background: card.bgColor }}
        >
          <div className="stat-info">
            <h4>{card.title}</h4>
            <div className="stat-number">{card.value}</div>
          </div>
          <i className={`${card.icon} stat-icon`} style={{ color: card.color }}></i>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards