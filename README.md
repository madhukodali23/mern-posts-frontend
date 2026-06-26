# MERN Posts Frontend

A responsive React and Vite frontend for a full-stack MERN Posts application featuring post creation, image uploads, loading states, error handling, and seamless integration with a Node.js, Express, MongoDB, and Cloudinary backend.

## Features

* Create new posts
* View all posts from MongoDB
* Delete posts
* Upload images with posts
* Loading spinner during API requests
* Error handling for failed requests
* Responsive user interface
* Full integration with REST APIs

## Tech Stack

* React.js
* Vite
* Axios
* React Loader Spinner
* CSS3

## Project Structure

```text
src
├── components
│   ├── PostForm.jsx
│   └── PostList.jsx
├── services
│   └── api.js
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/mern-posts-frontend.git
```

Navigate to the project directory:

```bash
cd mern-posts-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
```

For deployment:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

## Application Workflow

```text
React Form
      ↓
Axios API Requests
      ↓
Node.js + Express Backend
      ↓
MongoDB Database
      ↓
Cloudinary Image Storage
```

## Author

Madhu K
Full Stack Developer | MERN Stack | AWS | TypeScript
