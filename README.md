# Intro to Backend Web Development – Node.js, Express & MongoDB

This repository is built following the backend tutorial: **"Intro to Backend Web Development – Node.js & Express Tutorial for Beginners"**.

It demonstrates the fundamental architecture of modern backend applications using the **Model-Route-Controller (MRC)** pattern, integrated with **MongoDB Atlas** using **Mongoose**, and tested using **Postman**.

---

## 🚀 Features

- **Express.js Server**: Configured with ES Modules (`import/export`) and JSON body parsing.
- **MongoDB Atlas Integration**: Cloud database connection using Mongoose ODM with schema validation.
- **Model-Route-Controller (MRC) Pattern**: Clean separation of concerns:
  - `models/`: Database schema definitions and validations.
  - `controllers/`: Business logic for CRUD operations.
  - `routes/`: HTTP endpoint mappings and REST method routing.
- **Full CRUD Endpoints**:
  - `POST /api/users` - Create a new user
  - `GET /api/users` - Fetch all users
  - `GET /api/users/:id` - Fetch user by ID
  - `PUT /api/users/:id` - Update user details
  - `DELETE /api/users/:id` - Delete user
- **Postman Ready**: Pre-built `postman_collection.json` included for instant API testing.

---

## 📁 Project Structure

```text
intro-to-backend/
├── controllers/
│   └── user.controller.js      # Business logic for User CRUD
├── models/
│   └── user.model.js           # Mongoose User Schema
├── routes/
│   └── user.route.js           # Express Router endpoints
├── index.js                    # Server entry point & DB connection
├── package.json                # Project dependencies and scripts
├── .env.example                # Example environment configuration
├── .gitignore                  # Git ignored files (node_modules, .env)
├── postman_collection.json     # Postman collection for testing
└── README.md                   # Documentation
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd intro-to-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Add your MongoDB connection string in `.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/intro_backend?retryWrites=true&w=majority
```

### 4. Run the Server
- For development with auto-reload:
```bash
npm run dev
```
- For production:
```bash
npm start
```

---

## 🌐 API Reference

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Health check / API overview | None |
| **POST** | `/api/users` | Create a new user | `{"name": "Alice", "email": "alice@example.com", "age": 24}` |
| **GET** | `/api/users` | Get all users | None |
| **GET** | `/api/users/:id` | Get user by MongoDB ObjectId | None |
| **PUT** | `/api/users/:id` | Update user by ID | `{"name": "Alice M.", "age": 25}` |
| **DELETE**| `/api/users/:id` | Delete user by ID | None |

---

## 📮 Testing with Postman

1. Open **Postman Desktop App**.
2. Click **Import** (top left).
3. Drag and drop the `postman_collection.json` file located in this project.
4. Execute the requests sequentially:
   1. **Create User**: Sends a `POST` request with JSON body. Copy the generated `_id` from the response.
   2. **Get All Users**: Returns the array of users stored in MongoDB.
   3. **Get User By ID**: Replace `<USER_ID>` with the copied `_id` and send `GET`.
   4. **Update User**: Replace `<USER_ID>` with the copied `_id` and send `PUT` with updated fields.
   5. **Delete User**: Replace `<USER_ID>` with the copied `_id` and send `DELETE`.

---

## 👤 Author
- **Binayak Verma**
