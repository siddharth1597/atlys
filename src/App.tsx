import { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import LoginSignup from './LoginSignup/LoginSignup';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const openHomePage = () => {
    setShowLogin(false);
  }
  return (
    <div className={`bg-black w-full ${showLogin ? 'h-screen' : 'h-full'} flex justify-center`}>
      {showLogin ? <LoginSignup openHomePage={openHomePage} /> : <Home />}
    </div>
  );
}

export default App;
