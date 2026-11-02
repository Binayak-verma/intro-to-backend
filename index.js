import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Intro to Backend API! The server is up and running.",
    endpoints: {
      createUser: "POST /api/users",
      getAllUsers: "GET /api/users",
      getUserById: "GET /api/users/:id",
      updateUser: "PUT /api/users/:id",
      deleteUser: "DELETE /api/users/:id",
    },
  });
});

// API Routes
app.use("/api/users", userRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    if (!MONGO_URI) {
      console.warn("⚠️ MONGO_URI is not defined in .env file! Database not connected.");
      app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT} (without database)`);
      });
      return;
    }

    await mongoose.connect(MONGO_URI);
    console.log(" Connected to MongoDB Atlas successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 Test URL: http://localhost:${PORT}/api/users`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

startServer();
