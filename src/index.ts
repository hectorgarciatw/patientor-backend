import express from "express";
import diaryRoutes from "./routes/diaries";
import patientsRouter from "./routes/patients";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});

// Diaries routes
app.use("/api/diaries", diaryRoutes);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
