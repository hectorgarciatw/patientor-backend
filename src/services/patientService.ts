import { Patient, NonSensitivePatient, NewPatient } from "../types";
import data from "../data/patients";
import { v4 as uuid } from "uuid";

const patients: Patient[] = data;

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ ssn, ...rest }) => rest);
};

const addPatient = (newPatient: NewPatient): Patient => {
    const patient: Patient = {
        ...newPatient,
        id: uuid(),
    };
    patients.push(patient);
    return patient;
};

export default {
    getNonSensitivePatients,
    addPatient,
};
