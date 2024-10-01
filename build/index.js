"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const patients_1 = __importDefault(require("./routes/patients"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/api/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
// Diaries routes
app.use("/api/diaries", diaries_1.default);
app.use("/api/patients", patients_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
