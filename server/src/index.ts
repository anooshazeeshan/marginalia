import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import apiRoutes from "./routes";

dotenv.config();

const app = express();

const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`🚀 Marginalia API running on ${port}`);
});