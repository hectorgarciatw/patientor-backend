"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = require("../utils");
const patients_1 = __importDefault(require("../data/patients"));
const router = express_1.default.Router();
const getPatientById = (id) => {
    return patients_1.default.find((patient) => patient.id === id);
};
//Get all the patients
router.get("/", (_req, res) => {
    res.json(patientService_1.default.getNonSensitivePatients());
});
// Get a specific patient
router.get("/:id", (req, res) => {
    const patient = getPatientById(req.params.id);
    if (patient) {
        res.json(patient);
    }
    else {
        res.status(404).send({ error: "Patient not found" });
    }
});
//Create a new patient
router.post("/", (req, res) => {
    try {
        const newPatient = (0, utils_1.toNewPatient)(req.body);
        const addedPatient = patientService_1.default.addPatient(newPatient);
        res.json(addedPatient);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.default = router;
