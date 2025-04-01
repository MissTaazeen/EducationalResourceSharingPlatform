Edu-Resource Platform

A full-stack web application for sharing educational resources, allowing users to upload PDFs/images, like, comment, and switch between light/dark modes.

🚀 Features

User Authentication (Login/Register)

Upload Resources (Title, Description, PDF/Image Upload)

Like & Comment on Resources

Dark Mode Support

RESTful API (Node.js, Express, MongoDB)

Frontend (HTML, CSS, JavaScript)

🛠️ Tech Stack

Frontend: HTML, CSS (Tailwind), JavaScript

Backend: Node.js, Express.js

Database: MongoDB

File Uploads: Multer

Authentication: JWT (JSON Web Token)

📂 Folder Structure

/edu-resource-platform
  ├── /backend          # Backend (Node.js, Express, MongoDB)
  │   ├── /config       # Configuration files
  │   │   ├── db.js     # Database connection
  │   ├── /middleware   # Authentication & uploads
  │   │   ├── auth.js   # JWT authentication middleware
  │   ├── /models       # MongoDB schemas
  │   │   ├── User.js   # User schema
  │   │   ├── Resource.js # Resource schema
  │   ├── /routes       # API routes
  │   │   ├── authRoutes.js     # User authentication routes
  │   │   ├── resourceRoutes.js # CRUD operations for resources
  │   ├── /uploads      # Uploaded files
  │   ├── .env          # Environment variables
  │   ├── server.js     # Main server file
  │
  ├── /frontend         # Frontend (HTML, CSS, JavaScript)
  │   ├── /assets       # Static assets
  │   ├── index.html    # Main webpage
  │   ├── style.css     # Styles
  │   ├── script.js     # JavaScript logic
  │
  ├── README.md         # Project Overview & Setup Guide

🛠️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-username/edu-resource-platform.git
cd edu-resource-platform

2️⃣ Setup Backend

cd backend
npm install  # Install dependencies

3️⃣ Configure Environment Variables

Create a .env file inside the backend/ directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Run Backend Server

npx nodemon server.js

5️⃣ Open Frontend

Open frontend/index.html in your browser.

🔗 API Endpoints

🟢 Resources API

Method

Endpoint

Description

GET

/api/resources

Get all resources

POST

/api/resources

Add a new resource

PUT

/api/resources/:id/like

Like a resource

POST

/api/resources/:id/comment

Add a comment

🎯 Future Improvements

🔐 User Authentication (Register/Login with JWT)

🎨 Enhanced UI (React or Vue.js frontend)

📂 Category Filters (Sort by subjects)

📌 License

This project is open-source under the MIT License.

💡 Need Help? Feel free to reach out!

