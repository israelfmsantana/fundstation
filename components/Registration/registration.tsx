/* import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SignUpForm() {
    const [step, setStep] = useState(1);
    const [passwordStrengthText, setPasswordStrengthText] = useState('');
    const [togglePassword, setTogglePassword] = useState(false);
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Male');

    function checkPasswordStrength(value: any) {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (strongRegex.test(value)) {
            setPasswordStrengthText('Strong password');
        } else if (mediumRegex.test(value)) {
            setPasswordStrengthText('Could be stronger');
        } else {
            setPasswordStrengthText('Too weak');
        }
    }

  
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            {step === 4 && (
                <div className="bg-white rounded-lg p-10 flex items-center shadow justify-between">
                    <div>
                        <svg className="mb-4 h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Registration Success</h2>

                        <div className="text-gray-600 mb-8">
                            Thank you. We have sent you an email to demo@demo.test. Please click the link in the message to activate your account.
                        </div>

                        <Link className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border" href="https://fundstation-site.vercel.app/" passHref>Back to home</Link>
                    </div>
                </div>
            )}

            {step !== 4 && (
                <div>
                    <div className="border-b-2 py-4">
                        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
                            Step: {step} of 3
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                                {step === 1 && <div className="text-lg font-bold text-gray-700 leading-tight">Your Profile</div>}
                                {step === 2 && <div className="text-lg font-bold text-gray-700 leading-tight">Your Password</div>}
                                {step === 3 && <div className="text-lg font-bold text-gray-700 leading-tight">Tell me about yourself</div>}
                            </div>
                            <div className="flex items-center md:w-64">
                                <div className="w-full bg-white rounded-full mr-2">
                                    <div className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" style={{ width: `${(step / 3 * 100).toString()}%` }}></div>
                                </div>
                                <div className="text-xs w-10 text-gray-600">{(step / 3 * 100).toString()}%</div>
                            </div>
                        </div>
                    </div>

                    <div className="py-10">
                        {step === 1 && (
                            <div>
                                <div className="mb-5 text-center">
                                    <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                                        <img id="image" className="object-cover w-full h-32 rounded-full" src={image} alt="" />
                                    </div>

                                    <label htmlFor="fileInput" className="cursor-pointer inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                                            <circle cx="12" cy="13" r="3"></circle>
                                        </svg>
                                        Browse Photo
                                    </label>

                                    <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

                                    <input name="photo" id="fileInput" accept="image/*" className="hidden" type="file" onChange={(e: any) => setImage(URL.createObjectURL(e.target.files[0]))} />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="firstname" className="font-bold mb-1 text-gray-700 block">Firstname</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="Enter your firstname..." />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="Enter your email address..." />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="mb-5">
                                <label htmlFor="password" className="font-bold mb-1 text-gray-700 block">Set up password</label>
                                <div className="text-gray-600 mt-2 mb-4">
                                    Please create a secure password including the following criteria below.
                                    <ul className="list-disc text-sm ml-4 mt-2">
                                        <li>lowercase letters</li>
                                        <li>numbers</li>
                                        <li>capital letters</li>
                                        <li>special characters</li>
                                    </ul>
                                </div>

                                <div className="relative">
                                    <input
                                        type={togglePassword ? 'text' : 'password'}
                                        onKeyDown={(e: any) => checkPasswordStrength(e.target.value)}
                                        value={password}
                                        onChange={(e: any) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                        placeholder="Your strong password..."
                                    />

                                    <div className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer" onClick={() => setTogglePassword(!togglePassword)}>
                                        {togglePassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24">
                                                <path d="M12 9c-1.642 0-3 1.359-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3C15 10.359 13.641 9 12 9z" /><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l0.105 0.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684 L22.054 12l-0.105-0.316C21.927 11.617 19.633 5 12 5z M12 17c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7 c5.351 0 7.424 3.846 7.926 5C19.422 13.158 17.348 17 12 17z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24">
                                                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                                                <circle cx="12" cy="13" r="3"></circle>
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 h-3">
                                    <div className="w-2/3 flex justify-between h-2">
                                        <div className={passwordStrengthText.toLowerCase() === 'too weak' || passwordStrengthText.toLowerCase() === 'could be stronger' || passwordStrengthText.toLowerCase() === 'strong password' ? 'bg-[#F87171] rounded-full mr-1 w-1/3 h-2' : 'bg-gray-300 rounded-full mr-1 w-1/3 h-2'}></div>
                                        <div className={passwordStrengthText.toLowerCase() === 'could be stronger' || passwordStrengthText.toLowerCase() === 'strong password' ? 'bg-orange-400 rounded-full mr-1 w-1/3 h-2' : 'bg-gray-300 rounded-full mr-1 w-1/3 h-2'}></div>
                                        <div className={passwordStrengthText.toLowerCase() === 'strong password' ? 'bg-green-400 rounded-full mr-1 w-1/3 h-2' : 'bg-gray-300 rounded-full w-1/3 h-2'}></div>
                                    </div>

                                    <div className="text-gray-500 font-medium text-sm ml-3 leading-none">{passwordStrengthText}</div>
                                </div>

                                <p className="mt-5 text-gray-600">Inspired from dribbble shot: Exploration for a password strength meter by <a href="https://dribbble.com/OvertonGraphics" className="text-blue-500">Josh Overton</a>.</p>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">Gender</label>

                                    <div className="flex">
                                        <label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
                                            <div className="text-teal-600 mr-3">
                                                <input type="radio" value="Male" className="form-radio focus:outline-none focus:shadow-outline" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                                            </div>
                                            <div className="select-none text-gray-700">Male</div>
                                        </label>

                                        <label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                                            <div className="text-teal-600 mr-3">
                                                <input type="radio" value="Female" className="form-radio focus:outline-none focus:shadow-outline" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                                            </div>
                                            <div className="select-none text-gray-700">Female</div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="profession" className="font-bold mb-1 text-gray-700 block">Profession</label>
                                    <input type="profession" className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="eg. Web Developer" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 py-5 bg-white shadow-md">
                        <div className="max-w-3xl mx-auto px-4">
                            <div className="flex justify-between">
                                <div className="w-1/2">
                                    {step > 1 && (
                                        <button onClick={() => setStep(step - 1)} className="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border">
                                            Previous
                                        </button>
                                    )}
                                </div>

                                <div className="w-1/2 text-right">
                                    {step < 3 && (
                                        <button onClick={() => setStep(step + 1)} className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">
                                            Next
                                        </button>
                                    )}

                                    {step === 3 && (
                                        <button onClick={() => setStep(4)} className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">
                                            Complete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 */

import Head from "next/head";
import Step from "@/components/step";
import Form from "@/components/Form/form";
import { useState } from "react";

const stepTitles = ["suas informações", "Perfil de Investimento", "categorias de ações", "resumo"];

export default function Home() {
	const [formData, setFormData] = useState({
		personalInfo: { name: "", email: "", phoneNumber: "" },
		planInfo: { cardOption: 0, timeframe: false },
		addOnsInfo: {
			"Financias": false,
			"Comércio Varejista": false,
			"Minerais Energéticos ": false,
		},
	});
	const [step, setStep] = useState(1);

	function updateFormData(info: any) {
		if (step == 1) {
			setFormData({
				...formData,
				// Probably better to add each individual key:value of personalInfo but oh well
				personalInfo: info,
			});
		} else if (step == 2) {
			setFormData({
				...formData,
				planInfo: info,
			});
		} else if (step == 3) {
			setFormData({
				...formData,
				addOnsInfo: info,
			});
		}
	}

	function toggleYearly() {
		setFormData({
			personalInfo: { ...formData.personalInfo },
			planInfo: {
				...formData.planInfo,
				timeframe: !formData.planInfo.timeframe,
			},
			addOnsInfo: { ...formData.addOnsInfo },
		});
	}

	return (
		<>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi-step Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <aside className="bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-[url('/images/bg-sidebar-desktop.svg')]">
          {stepTitles.map((title, i) => (
            <Step key={title} step={step} stepNumber={i + 1}>
              {title}
            </Step>
          ))}
        </aside>
        <Form
          step={step}
          setStep={setStep}
          formData={formData}
          updateFormData={updateFormData}
          toggleYearly={toggleYearly}
        />
      </main>
		</>
	);
}
