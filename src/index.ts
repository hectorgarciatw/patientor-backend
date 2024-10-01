import express from "express";
import diaryRoutes from "./routes/diaries"; // Asegúrate de importar las rutas correctamente

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Para parsear JSON en las solicitudes

// Utiliza las rutas del diario
app.use("/api/diaries", diaryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
