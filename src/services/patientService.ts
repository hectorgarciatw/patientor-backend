import data from "../data/patients";
import { Patient } from "../types";

// Define the patient without ssn
export type NonSensitivePatient = Omit<Patient, "ssn">;

// Get all the patients without ssnnsibles
const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return data.map(({ ssn, ...rest }) => rest);
};

export default {
    getNonSensitivePatients,
};
