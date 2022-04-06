import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
import "../assets/styles/globals.scss";

import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import Meta from "../components/Layout/Meta";
import Auth from "../components/Auth/Auth";

export const UserContext = createContext<{
  user: any;
  setUser: any;
}>({
  user: undefined,
  setUser: () => {},
});

function App({ Component, pageProps }: AppProps) {
  const [showAuth, setShowAuth] = useState(false);
  // const updateShowAuth = () => setShowAuth((state) => !state);

  const getUser = () => {
    const storage = localStorage.getItem("user");
    const user = JSON.parse(storage!);
    return user;
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Meta />
      <Header setShowAuth={setShowAuth} />
      <main className="main d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="page p-4">
          <Component {...pageProps} />
        </div>
      </main>
      {showAuth ? <Auth setShowAuth={setShowAuth} /> : <></>}
    </UserContext.Provider>
  );
}

export default App;
