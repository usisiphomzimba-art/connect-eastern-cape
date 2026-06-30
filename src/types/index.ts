export type Gender = "Boys" | "Girls" | "Mixed";

export interface School {
  id: string;
  name: string;
  district: string;
  town: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  principal?: string;
  ageMin: number;
  ageMax: number;
  gender: Gender;
  description: string;
  operatingHours: string;
  admissionOpen: boolean;
  waitingList: string;
  transportation: boolean;
  therapyServices: string[];
  meals: boolean;
  boarding: boolean;
  activities: string[];
  fees: string;
  governmentFunding: string;
  applicationOpens: string;
  mapsQuery: string; // for Google Maps embed
  featured?: boolean;
}

export interface Psychologist {
  id: string;
  name: string;
  qualification: string;
  practice: string;
  address: string;
  town: string;
  district: string;
  phone: string;
  email: string;
  hours: string;
  specializations: string[];
  mapsQuery: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  town: string;
  phone: string;
  emergency: string;
  hours: string;
  mapsQuery: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
  icon: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  schoolsOffering: string[];
  icon: string;
}
