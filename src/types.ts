export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;

//Interface for entries
export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

// Enum for the gender
export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

// Interface for patients
export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: Gender;
    dateOfBirth: string;
    entries?: DiaryEntry[];
}

//Interface for diagnoses
export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
}

export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">;
export type NewPatient = Omit<Patient, "id">;
