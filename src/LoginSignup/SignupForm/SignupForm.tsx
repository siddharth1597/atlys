import { useEffect, useState } from "react";

interface Props {
    notAccountHandle: () => void;
    openHomePage?: () => void;
    innerClass?: string;
    hideClose?: boolean;
    hideHandler?: () => void;
    source?: string;
}

const SignupForm = (props: Props) => {
    const {hideClose = false, notAccountHandle, innerClass = "", hideHandler, openHomePage, source = ""} = props;
    const [type, setType] = useState("password");
    const [eyeOpen, setEyeOpen] = useState(false);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 50);
    }, [])


    const ShowPasswordHandle = () => {
        const updated = type === 'password' ? 'text' : 'password';
        setType(updated);
        setEyeOpen(!eyeOpen);
    }

    return (
        <div className={`background-gradient p-0.5 rounded-md h-max ${innerClass} ${source==="homepage" ? 'parent' : ''} ${animate ? 'animateAdd' : ''}`}>
            <div className="rounded-md px-6 py-10 bg-neutral-900 relative">
                {!hideClose && 
                <div className="p-2 rounded-full absolute top-4 right-4 bg-neutral-950 cursor-pointer" onClick={() => hideHandler?.()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5754 4.30861C12.8194 4.06454 12.8194 3.66881 12.5754 3.42473C12.3313 3.18065 11.9355 3.18065 11.6915 3.42473L8.00008 7.11612L4.30869 3.42473C4.06461 3.18065 3.66888 3.18065 3.42481 3.42473C3.18073 3.66881 3.18073 4.06454 3.42481 4.30861L7.1162 8L3.42481 11.6914C3.18073 11.9355 3.18073 12.3312 3.42481 12.5753C3.66888 12.8194 4.06461 12.8194 4.30869 12.5753L8.00008 8.88389L11.6915 12.5753C11.9355 12.8194 12.3313 12.8194 12.5754 12.5753C12.8194 12.3312 12.8194 11.9355 12.5754 11.6914L8.88396 8L12.5754 4.30861Z" fill="white"/>
                    </svg>
                </div>}
                <div className='flex flex-col'>
                    <span className='text-center text-gray-500 uppercase'>Sign up</span>
                    <h4 className='text-white text-center m-2 text-lg'>Create an account to continue</h4>
                </div>
                <form className='form mt-10' onSubmit={(e) => e.preventDefault()}>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                        <input className='mt-2.5 p-3 rounded-md bg-transparent border border-neutral-800 text-white placeholder:text-neutral-600' name='email' type='text' placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="username" className="text-gray-400 text-sm">Username</label>
                        <input className='mt-2.5 p-3 rounded-md bg-transparent border border-neutral-800 text-white placeholder:text-neutral-600' name='username' type='text' placeholder='Choose a preferred username' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
                        <div className="relative w-full">
                            <input className='w-full mt-2.5 p-3 pe-10 rounded-md bg-transparent border border-neutral-800 text-white placeholder:text-neutral-600' name='password' type={type} placeholder='Choose a strong password' />
                            <div className="absolute top-6 right-3">
                                {!eyeOpen && <span className="showPassword bg-neutral-400"></span>}
                                <img src="eye.svg" className="w-5 h-5 cursor-pointer" alt="eye" onClick={ShowPasswordHandle} />
                            </div>
                        </div>
                    </div>
                    <button className='mt-5 rounded-md bg-blue-500 text-white w-full py-3 text-center' onClick={openHomePage}>Continue</button>
                    <div>
                        <p className='text-neutral-500 mt-2.5 text-sm flex'>Already have an account?
                            <span className='text-neutral-400 text-sm flex ms-1 items-center cursor-pointer' onClick={() => {
                                notAccountHandle();
                            }}>
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a3a3a3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;