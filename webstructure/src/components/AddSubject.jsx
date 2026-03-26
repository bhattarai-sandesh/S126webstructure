import React, { useState } from 'react'
import './AddSubject.css'

function AddSubject({ addAssignment }) {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    dueDate: '',
    priority: 'Medium',
    notes: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.subject.trim() || !formData.name.trim() || !formData.dueDate) {
      alert('Please fill in all required fields (Subject, Assignment Name, and Due Date)')
      return
    }
    
    // Add the new assignment
    addAssignment(formData)
    
    // Show success message
    setShowSuccess(true)
    
    // Reset form
    setFormData({
      subject: '',
      name: '',
      dueDate: '',
      priority: 'Medium',
      notes: ''
    })
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="add-subject-container">
      <div className="add-subject-card">
        <div className="form-header">
          <h2>➕ Add New Assignment</h2>
          <p>Fill in the details below to add a new assignment or exam</p>
        </div>
        
        {showSuccess && (
          <div className="success-message">
            ✅ Assignment added successfully!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="add-form">
          <div className="form-group">
            <label htmlFor="subject">
              Subject <span className="required">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g., Mathematics, Physics, English"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">
              Assignment Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Algebra Worksheet, Lab Report"
              className="form-input"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dueDate">
                Due Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="priority">
                Priority Level
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-select"
              >
                <option value="High">🔴 High Priority</option>
                <option value="Medium">🟠 Medium Priority</option>
                <option value="Low">🟢 Low Priority</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="notes">
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any additional notes or instructions..."
              className="form-textarea"
              rows="3"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            📌 Add Assignment
          </button>
        </form>
        
        <div className="form-tips">
          <h4>💡 Quick Tips:</h4>
          <ul>
            <li>Set realistic due dates to avoid last-minute rush</li>
            <li>Use High priority for assignments due within 3 days</li>
            <li>Add notes to remember specific requirements</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddSubject