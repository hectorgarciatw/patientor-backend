import express from "express";
import patientService from "../services/patientService";
import { toNewPatient } from "../utils";
import { Patient } from "../types";
import patients from "../data/patients";

const router = express.Router();

const getPatientById = (id: string): Patient | undefined => {
    return patients.find((patient) => patient.id === id);
};

//Get all the patients
router.get("/", (_req, res) => {
    res.json(patientService.getNonSensitivePatients());
});

// Get a specific patient
router.get("/:id", (req, res) => {
    const patient = getPatientById(req.params.id);

    if (patient) {
        res.json(patient);
    } else {
        res.status(404).send({ error: "Patient not found" });
    }
});

//Create a new patient
router.post("/", (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
