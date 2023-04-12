import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

function AuthButton({ user }) {
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="auth-button">
      {user ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}

export default AuthButton;
