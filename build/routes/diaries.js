"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryService_1 = __importDefault(require("../services/diaryService")); // Asegúrate de que la ruta sea correcta
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.json(diaryService_1.default.getNonSensitiveEntries());
});
router.post("/", (_req, res) => {
    res.send("Saving a diary!"); // Aquí puedes implementar la lógica para guardar el diario
});
exports.default = router;
