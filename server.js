const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;
const taskRoutes = require("./routes/taskRoutes");

// middleware
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// base route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// mongo connect
mongoose
  .connect(
    "mongodb+srv://taskuser:task12345@cluster0.5kgee.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected");

    // 🔥 START SERVER ONLY AFTER DB CONNECTS
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

app.get("/test", (req, res) => {
  res.json({ message: "API working perfectly 🚀" });
});

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(err));

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API running");
});
