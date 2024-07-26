import './LoginSignup.css';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import { useState } from 'react';

interface Props {
    openHomePage: () => void;
}

const LoginSignup = (props: Props) => {
    const {openHomePage} = props;
    const [showSignup, setShowSignup] = useState(false);

    const LoginHandleForm = () => {
        setShowSignup(!showSignup);
    }

    return (
        <div className='flex flex-col gap-12 justify-center w-1/3 m-auto'>
            <img src='logo.svg' className='w-10 h-10 mx-auto' alt="logo" />
            {
                showSignup ? <SignupForm hideClose notAccountHandle={LoginHandleForm} />
                    : <LoginForm hideClose notAccountHandle={LoginHandleForm} openHomePage={openHomePage} />
            }
        </div>
    )
}

export default LoginSignup;