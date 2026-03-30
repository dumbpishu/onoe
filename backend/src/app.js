import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Adjust this to your frontend URL
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the Election Management System API");
});

import officerRoutes from "./routes/officer.route.js";
import voterRoutes from "./routes/voter.route.js";
import stateRoutes from "./routes/state.route.js";
import pcsRoutes from "./routes/pcs.route.js";

app.use("/api/voters", voterRoutes);
app.use("/api/officers", officerRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/pcs", pcsRoutes);

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "An unexpected error occurred" });
});

app.use((_, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
})

export default app;