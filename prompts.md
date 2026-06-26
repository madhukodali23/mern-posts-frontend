# Learning Prompts & Engineering Notes (Frontend)

## React and API Integration

* How do I connect a React Vite application with an existing Express backend?
* What is the purpose of `useEffect` when fetching API data?
* How do I structure API calls using Axios in a React application?
* Why should API URLs be centralized in a separate service file?

## State Management

* How do I manage loading states while waiting for API responses?
* What is the best way to handle API errors in React?
* How can I update the UI immediately after creating or deleting a post?
* When should I re-fetch data versus updating local state?

## CRUD Operations

* How do I send POST requests from React forms?
* How do I delete data and synchronize the UI with the backend?
* What are the benefits of separating components like `PostForm` and `PostList`?

## Image Uploads

* Why can't files be sent as normal JSON?
* What is `FormData` and why is it needed for file uploads?
* How do I append text and files to a `FormData` object?
* How does React send multipart form data to the backend?

## Debugging & Problem Solving

* Why was I getting a 404 error while fetching posts?
* How do I inspect Network requests in browser developer tools?
* Why did I receive a 500 Internal Server Error and how do I debug it?
* Why was the uploaded image URL not appearing initially?
* How do I verify that data persisted after a browser refresh?

## Deployment

* Why should environment variables be used instead of hardcoding localhost URLs?
* How do I configure `VITE_API_URL` for production deployment?
* What changes are required when deploying the frontend to Vercel?
