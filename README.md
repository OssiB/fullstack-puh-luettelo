# Fullstack Phonebook App 📞

This is a fullstack phonebook application built with **React** (frontend) and **Node.js/Express** (backend). It allows users to add, update, and delete contact information.

## 🌐 Live Application

The application is deployed on [Render](https://render.com):

👉 **Frontend URL:**  
https://fullstack-puh-luettelo-client.onrender.com

## 🧱 Project Structure

 ├── client # React frontend (Vite) └── server # Express backend (Node.js)

## 🚀 Technologies Used

- React (with Vite)
- Node.js + Express
- RESTful API
- Render for deployment

## 🧪 Local Development

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Enviroment variables

```bash
VITE_API_BASE_URL=http://localhost:3001/api
```

### Deployment Info

Both frontend and backend are hosted separately on Render.

- Frontend: Static Site
- Backend: Web Service
- Frontend fetches data from the backend using environment variables