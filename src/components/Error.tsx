import { PropsWithChildren } from 'react';

export default function Error({ children }: PropsWithChildren) {
	return (
		<p className='text-center bg-red-600 text-white font-bold p-3 uppercase text-sm'>
			{children}
		</p>
	);
}
