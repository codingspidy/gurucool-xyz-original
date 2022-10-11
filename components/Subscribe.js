import React from 'react';
import axios from 'axios';
const qs = require('qs');
import {useEffect, useState} from 'react';
import {TiInfo} from 'react-icons/ti';
import {strapi_end_point} from '../config';
import {useRouter} from 'next/router';
export default function Subscribe() {
    const router = useRouter();
    const [formSent, setFormSent] = useState(false);
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
    const [isSubmitting, setSubmit] = useState(false);
	const handleSubscribe = async () => {
        if(isSubmitting){
            return false; 
        }
        
		if (fname.length < 1) {
			setError('Please type your First Name!');
			return false;
		}
		if (lname.length < 1) {
			setError('Please type your Last Name!');
			return false;
		}
        if (email.length < 1) {
			setError('Please type your Email Address!');
			return false;
		}
        try {
            setError('');
			setSubmit(true);
            await axios.post(`${strapi_end_point}/api/subscribe-boxes`, {
				data: {
					fname: fname,
					lname: lname,
					email: email
				},
			});
			setFormSent(true);
			setTimeout(() => {
             setSubmit(false);
				router.reload();
			}, 2000);
		} catch (error) {
            setFormSent(false);
			setSubmit(false);
			if (axios.isAxiosError(error)) {
				setError(error.response?.data.error.message);
			}
		}

	};
	return (
		<div>
			<div className="md:flex justify-between">
				<label className="block mb-4 w-full">
					<input className="placeholder:text-slate-400 block w-full bg-slate-100 rounded-md py-4 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500" placeholder="First Name" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
				</label>
				<label className="block md:ml-2 mb-4 w-full">
					<input className="placeholder:text-slate-400 block w-full bg-slate-100 rounded-md py-4 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500" placeholder="Last Name" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
				</label>
			</div>
			<label className="block mb-4">
				<input
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubscribe();
						}
					}}
					className="placeholder:text-slate-400 block w-full bg-slate-100 rounded-md py-4 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
					placeholder="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<div className="text-[#E63946] mt-2 ml-2 text-xs flex align-center">
				{error.length > 0 && (
					<>
						<TiInfo className="text-sm mr-1" />
						{error}
					</>
				)}
			</div>
			<button onClick={handleSubscribe} type="submit" className="py-3 px-6 bg-black text-white rounded-md">
				{isSubmitting?<i className="fas fa-spinner fa-spin text-xl text-white"></i>:"Subscribe"}
			</button>
            <span className='text-yellow block my-6 text-base'>{formSent && "Your Email has been saved!"}</span>
		</div>
	);
}
