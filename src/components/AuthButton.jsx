import React, { useEffect } from 'react';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  console.log('auth button rendered')

  useEffect(() => {
    console.log('auth button mounted')
  }, [])

  const onButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log('button clicked')
  }

  return (
    <button onClick={onButtonClick} className="nav-button">{isLoggedIn ? 'Logout' : 'Login'}</button>
  );
}

export default AuthButton;