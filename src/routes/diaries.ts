import express from "express";
import diaryService from "../services/diaryService"; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.get("/", (_req, res) => {
    res.json(diaryService.getNonSensitiveEntries());
});

router.post("/", (_req, res) => {
    res.send("Saving a diary!"); // Aquí puedes implementar la lógica para guardar el diario
});

export default router;
