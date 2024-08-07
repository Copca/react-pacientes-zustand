import { usePatientStore } from '../store/store';
import type { Patient } from '../types';

import PatientDetailItem from './PatientDetailItem';

type PatientDetailProps = {
	patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
	const { deletePatient, getPatientById } = usePatientStore();

	return (
		<div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
			<PatientDetailItem label='ID' data={patient.id} />
			<PatientDetailItem label='Nombre' data={patient.name} />
			<PatientDetailItem label='Propietario' data={patient.caretaker} />
			<PatientDetailItem label='Email' data={patient.email} />
			<PatientDetailItem label='Sintomas' data={patient.symptoms} />
			<PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />

			<div className='flex flex-col gap-3 md:flex-row justify-between mt-10'>
				<button
					className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg'
					onClick={() => getPatientById(patient.id)}
				>
					Editar
				</button>

				<button
					className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg'
					onClick={() => deletePatient(patient.id)}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}
