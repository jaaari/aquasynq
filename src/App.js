import React from 'react';
import './App.css';
import SignIn from './SignIn';
import ChatRoom from './ChatRoom';
import AuthButton from './AuthButton';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header>
        <AuthButton user={user} />
      </header>
      {user ? (
        <ChatRoom />
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
