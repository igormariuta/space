import { useEffect, useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const Auth = ({ setShowAuth }: any) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth">
      <div className="auth-back" onClick={() => setShowAuth(false)}></div>
      <div className="auth-container bg-white rounded-2">
        <div className="auth-image"></div>
        {showLogin ? (
          <Login setShowAuth={setShowAuth} setShowLogin={setShowLogin} />
        ) : (
          <CreateAccount
            setShowAuth={setShowAuth}
            setShowLogin={setShowLogin}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
