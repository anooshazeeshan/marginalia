import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

/**
 * FOUNDATION SCAFFOLD — minimal server bootstrap only.
 * Route modules (auth, passages, tags, reactions, keeps, users) are
 * scaffolded under src/modules/ but not yet wired in or implemented.
 */
const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Future: app.use("/api/auth", authRouter);
// Future: app.use("/api/passages", passagesRouter);
// Future: app.use("/api/tags", tagsRouter);
// Future: app.use("/api/reactions", reactionsRouter);
// Future: app.use("/api/keeps", keepsRouter);
// Future: app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Marginalia API listening on port ${port}`);
});
