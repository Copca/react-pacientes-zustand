import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PatientsForm from './components/PatientsForm';
import PatientsList from './components/PatientsList';

function App() {
	return (
		<>
			<div className='container mx-auto mt-20'>
				<h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto'>
					Seguimiento de Pacientes
					<span className='text-indigo-700'> Verterinaria</span>
				</h1>

				<div className='mt-12 md:flex'>
					<PatientsForm />

					<PatientsList />
				</div>
			</div>

			<ToastContainer />
		</>
	);
}

export default App;
