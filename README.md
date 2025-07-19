# My Library

A visually appealing, full-stack MERN application inspired by GoodReads. Users can register, log in, browse books, add books to their personal list, track reading progress, and rate books.

## Features
- **User Authentication** (JWT, bcrypt, Context API)
- **Book Browsing**: View all books from the database
- **Personal Library**: Add books to "My Books", update reading status, and rate books
- **Responsive UI**: Built with React, Tailwind CSS, and modern UX patterns
- **Protected Routes**: Only authenticated users can manage their library
- **Toast Notifications** for all important actions and errors

---

## Tech Stack
- **Frontend**: React, Vite, Context API, Axios, React Router DOM, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/RohitBasantYadav/my-library.git
cd my-library
```

### 2. Install Dependencies
#### Backend
```bash
cd server
npm install
```
#### Frontend
```bash
cd ../client
npm install
```

### 3. Environment Setup
- Copy `.env.sample` to `.env` in the `server` folder and fill in your MongoDB URI and JWT secret.
- Example `.env`:
```
MONGO_URI=mongodb://localhost:27017/mylibrary
JWT_SECRET=your_jwt_secret
PORT=8080
```

### 4. Run the Application
#### Start Backend
```bash
cd server
npm start
```
#### Start Frontend
```bash
cd ../client
npm run dev
```

- Backend runs on: `http://localhost:8080`
- Frontend runs on: `http://localhost:5173` (default Vite port)

---

## Usage
- Register a new account or log in.
- Browse books on the Home page.
- Add books to your "My Books" list.
- Update reading status and rate books from "My Books".
- Log out securely.

---

## Folder Structure
```
mylibraryWindsurf/
  ├── client/    # React frontend
  └── server/    # Express backend
```

---

## Notes
- Ensure MongoDB is running locally or use a cloud MongoDB URI.
- JWT tokens are stored in localStorage for authentication.
- All environment variables are managed in the `server/.env` file.


