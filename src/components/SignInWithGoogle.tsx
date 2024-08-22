// import { useEffect, useState } from 'react';
import Button from './Button';
import axios from 'axios';

const SignInWithGoogle = () => {
  // const [authWindow, setAuthWindow] = useState<Window | null>(null);

  const initiateGoogleSignIn = async () => {
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const url = `http://localhost:8001/api/v1/auth/google?platform=web`;

    // await axios.get(url);
    // window.open(url, 'Google Sign-In', `width=${width},height=${height},left=${left},top=${top}`);
    window.location.href = url;

    // setAuthWindow(w);
    // console.log({ w });
  };

  return (
    <Button type="button" label="Google" onClick={initiateGoogleSignIn} style={{ cursor: 'pointer', zIndex: 999 }} />
  );
};

export default SignInWithGoogle;
