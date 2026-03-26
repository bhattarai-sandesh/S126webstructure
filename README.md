# Student Study Helper - Interactive Dashboard

## Project Brief

Student Study Helper is a comprehensive React-based dashboard application designed to help students manage their academic workload efficiently. The application provides a centralized platform where students can track assignments, manage to-do lists, receive deadline notifications, and organize their study schedule through an intuitive left-side navigation interface. Built with modern React practices and responsive design principles, this tool aims to reduce academic stress by providing clear visualization of upcoming deadlines, priority-based task management, and seamless assignment tracking capabilities. The dashboard features five main modules: Summary Cards for quick statistics, Assignment Tracker for managing coursework, To-Do Section for daily tasks, Notifications for deadline alerts, and Add Subject functionality for creating new assignments with custom due dates. This project serves as a foundational academic management tool that can be extended for personalized study planning and progress monitoring.

## Purpose of Site Personalisation

The Student Study Helper dashboard is designed with personalisation at its core to address the unique challenges faced by modern students in managing multiple academic responsibilities. The personalisation approach includes:

- **Flexible Navigation**: Users can switch between different modules based on their immediate needs
- **Priority Management**: Tasks and assignments can be categorized with High, Medium, or Low priority levels
- **Custom Data Entry**: Students can add their own subjects, assignments, and deadlines
- **Visual Progress Tracking**: Completed tasks and assignments are visually distinguished
- **Context-Aware Notifications**: Deadlines are highlighted based on urgency (within 2 days)

This personalisation ensures that each student can tailor the tool to their specific academic schedule and workload, making it a truly individualised study companion.

## Likely Users - Persona Outline

### Primary Persona: Emma Chen, Third-Year University Student

**Demographics:**
- Age: 21 years old
- Major: Computer Science
- Study load: 5 courses per semester
- Part-time job: 15 hours/week

**Behaviours:**
- Juggles multiple assignments with varying deadlines
- Often forgets submission dates for non-core subjects
- Prefers digital organization over physical planners
- Uses multiple apps for different tasks (calendar, notes, reminders)
- Studies best with visual progress indicators

**Pain Points:**
- Overwhelmed by scattered assignment information across different platforms
- Misses deadlines due to poor organization
- Difficulty prioritizing tasks when multiple deadlines approach
- Spends too much time organizing instead of studying

**Technology Comfort:**
- High - comfortable with web applications and digital tools
- Prefers clean, modern interfaces with intuitive navigation
- Uses both desktop and mobile devices for studying

## User Goals, Assumptions, and Hypothesis

### Assumption
We assume that university students struggle with managing multiple assignments across different subjects simultaneously, leading to missed deadlines and increased stress levels. Students need a centralized tool that can consolidate all academic tasks into one view, with clear prioritization and visual cues for upcoming deadlines.

### Hypothesis
If students have access to a centralized dashboard that visually displays all assignments, provides priority-based categorization, and sends timely notifications for upcoming deadlines, then they will be more likely to complete assignments on time and experience reduced academic stress. The key metric for success would be a 30% reduction in missed deadlines and improved task completion rates.

### User Goal
Emma's primary goal is to have a single, reliable platform where she can:
1. View all her assignments at a glance
2. Identify which tasks need immediate attention
3. Add new assignments quickly without complex navigation
4. Track her daily to-do items alongside long-term assignments
5. Receive automatic reminders for approaching deadlines

## How the Example Works for the User

The Student Study Helper dashboard addresses Emma's needs through the following features:

### 1. **Centralised Navigation (Left Sidebar)**
Emma can instantly switch between five key sections:
- **Summary Cards**: Quick overview of total assignments, weekly deadlines, high-priority tasks, and upcoming exams
- **Assignment Tracker**: Complete list of all assignments with subject, due date, priority, and completion status
- **To-Do Section**: Daily tasks management with priority levels and completion tracking
- **Notifications**: Automatic alerts for deadlines within 3 days, with urgent items highlighted in red
- **Add Subject**: Simple form to add new assignments with all necessary details

### 2. **Visual Priority System**
- Red badges for High priority items
- Orange for Medium priority
- Blue for Low priority
- Red row highlighting for assignments due within 2 days

### 3. **Interactive Task Management**
- Checkboxes for marking assignments and tasks as complete
- Strike-through effect for completed items
- Delete functionality for removing completed or irrelevant tasks

### 4. **Smart Notifications**
- Automatic detection of deadlines within 3 days
- Urgent flag for items due in 2 days
- Visual pulse animation for critical deadlines

### 5. **Data Persistence**
- All assignments and tasks remain in the dashboard
- Real-time updates as Emma adds or completes items
- Consistent state across different sections

## Technical Implementation

### Technology Stack
- **Frontend**: React 18 with Hooks (useState for state management)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome and emoji icons for visual appeal
- **Architecture**: Component-based structure with separated concerns

### Key Features Implemented
- Responsive design that works on desktop and tablet devices
- Component-based architecture for maintainability
- Real-time state management without external dependencies
- Form validation for adding new assignments
- Date-based urgency detection algorithm
- Modular CSS with component-specific styling

## Repository Structure
