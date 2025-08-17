# CareSync

**CareSync** is a web-based healthcare management platform designed to help users track and manage their health metrics, schedules, and notifications efficiently. The platform includes functionalities for monitoring health data, managing appointments, and generating reports.  

## Features

### 1. Dashboard
- Displays health-related metrics such as sleep, exercise, and vital stats.
- Dynamic cards for different metrics and content (articles, videos).

### 2. Statistics
- Displays filtered stats associated with the chats between team Elyx and the member.
- Also displays stats for all the months by visual graphs.

### 3. Chat Section
- Shows the chat between the user and the team Elyx members regarding tests, progress checking, suggesting routine changes, making weekly plans, etc.

### 4. Ask Assistant
- This is an AI generated chat bot which summarizes why a particular decision was made.
- It can also answer various queries regarding the chats done between the user and the team Elyx members.

---

## Project Structure
```
CareSync/
├─ frontend/
│  ├─ node_modules/         # Installed npm packages
│  ├─ public/               # Public assets (index.html, images, etc.)
│  ├─ src/                  # Source code
│  │  ├─ assets/            # Static assets like images, fonts, icons
│  │  ├─ components/        # Reusable React components
│  │  ├─ data/              # Static or mock data files
│  │  ├─ lib/               # Utility functions and helper modules
│  │  ├─ pages/             # React page components
│  │  ├─ App.css            # Global CSS for App
│  │  ├─ App.jsx            # Main React App component
│  │  ├─ index.css          # Entry CSS
│  │  └─ main.jsx           # React entry point
│  ├─ .gitignore            # Git ignore rules
│  ├─ eslint.config.js      # ESLint configuration
│  ├─ index.html            # HTML template
│  ├─ package-lock.json     # npm lock file
│  ├─ package.json          # Project dependencies and scripts
│  ├─ README.md             # Project README file
│  └─ vite.config.js        # Vite configuration
├─ WhatsappPrompts/         # WhatsApp prompts or related resources
```

---

## Setup Instructions

1. **Clone the repository**
- git clone <repo-url>
- cd CareSync

2. **Install Dependencies**
- npm install

3. **Run the Backend**
- cd frontend/backend
- node server.js

4. **Run the Frontend**
- cd frontend
- npm run dev

5. **Running the Mistral API**
- Refer the example_env.txt file in folder.
- Follow the same structure.
- Generate your own API key from console.mistral.ai
- Paste the generated key in your .env file.

---

## Technologies Used
1. **Frontend framework:** React( with vite for fast builds)
2. **Styling:** CSS
3. **Backend framework:** Express.js, Node.js
4. **LLM:** Mistral.ai
