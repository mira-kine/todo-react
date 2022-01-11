import React from 'react';
import { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import UserStatus from '../../components/UserStatus';
import { signInUser, signUpUser } from '../../services/user';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
    } catch {
      setErrorMsg('Something went wrong, please try again');
    }
  };
  return (
    <div>
      <UserStatus type={type} setType={setType} />
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
