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