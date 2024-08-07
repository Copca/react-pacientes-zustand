import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

import type { DraftPatient, Patient } from '../types';

type PatientState = {
	patients: Patient[];
	activeId: Patient['id'];
	addPatient: (data: DraftPatient) => void;
	deletePatient: (id: Patient['id']) => void;
	getPatientById: (id: Patient['id']) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
	return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
	devtools((set) => ({
		patients: [],
		activeId: '',
		addPatient: (data) => {
			const newPatient = createPatient(data);

			set((state) => ({
				patients: [...state.patients, newPatient]
			}));
		},
		deletePatient: (id) => {
			set((state) => ({
				patients: state.patients.filter((patientState) => patientState.id !== id)
			}));
		},
		getPatientById: (id) => {
			set(() => ({
				activeId: id
			}));
		}
	}))
);
