import './Home.css';
import CreatePost from './Components/CreatePost';
import db from './db.json';
import MessageItem from './Components/MessageItem';
import ModalOverlay from './Components/ModalOverlay';
import { useState } from 'react';
import LoginForm from '../LoginSignup/LoginForm/LoginForm';
import SignupForm from '../LoginSignup/SignupForm/SignupForm';
import { bodyLock, bodyUnlock } from './utils/documentUtility';

const Home = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const LoginHandleForm = () => {
        // from Login to Signup or vice versa
        setShowSignup(!showSignup);
    }
    const HideFormOverlay = () => {
        // do whatever after Login/Signup
        setShowOverlay(false);
        setShowSignup(false);
        bodyUnlock();
    }

    const renderMessages = (messageData: any): JSX.Element => (
        messageData.length > 0 && messageData?.map((item: any, index: number) => (
            <MessageItem 
            key={`message-${index}`}
            setShowOverlay={(val: boolean) => {
                setShowOverlay(val);
                bodyLock();
            }}
            {...item} />
        ))
    );

    return (
        <>
        <div className='flex flex-col justify-start w-3/6 mx-auto py-14'>
            <h2 className='text-2xl text-gray-300'>Hello Jane</h2>
            <p className='mt-3 text-base text-neutral-500 w-3/4'>How are you doing today? Would you like to share something with the community 🤗</p>
            <CreatePost setShowOverlay={(val: boolean) => {
                setShowOverlay(val);
                bodyLock();
            }} />
            {renderMessages(db?.data)}
        </div>
        {
            showOverlay &&
            <ModalOverlay>
                {
                    showSignup ? 
                    <SignupForm 
                        innerClass="w-1/3 my-auto" 
                        notAccountHandle={LoginHandleForm} 
                        openHomePage={HideFormOverlay}
                        hideHandler={HideFormOverlay}
                        source="homepage"
                    />
                    : <LoginForm 
                        innerClass="w-1/3 my-auto" 
                        notAccountHandle={LoginHandleForm} 
                        openHomePage={HideFormOverlay}
                        hideHandler={HideFormOverlay}
                        source="homepage"
                    />
                }
            </ModalOverlay> 
        }
        </>
    )
}

export default Home;