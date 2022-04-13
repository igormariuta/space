import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Person, PlusCircle } from "react-bootstrap-icons";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";
import { setUserStore } from "../Auth/Login";

const Header = ({ setShowAuth }: any) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  const { user } = useContext(UserContext);

  const logOut = () => {
    setUserStore({});
    setUser({});
  };

  return (
    <header className="header fixed-top d-flex bg-primary align-items-center px-4 py-2">
      <div className="header-navigation d-flex align-items-center">
        <Link href="/">
          <a
            className={`header-logo text-dark text-decoration-none me-4 ${
              loading ? "header-logo--loading" : ""
            }`}
            style={{
              fontWeight: "900",
              fontSize: "30px",
              lineHeight: "30px",
            }}
          ></a>
        </Link>
        <div>
          <input
            className={"form-control"}
            type="text"
            placeholder="Search"
            style={{ background: "rgba(255, 255, 255, .3)" }}
          />
        </div>
      </div>
      {user?.user ? (
        <div className="d-flex align-items-center ms-auto">
          {/* <div className="me-4">
            <button className="btn p-0">
              <PlusCircle size={16} />
            </button>
          </div> */}
          <span>{user?.user?.username}</span>
          {/* <button
            className="ms-2 btn p-1 d-flex align-items-center"
            onClick={() => logOut()}
          >
            Log Out
          </button> */}
        </div>
      ) : (
        <div className="header-user-menu ms-auto">
          <button
            className="btn p-1 d-flex align-items-center"
            onClick={() => setShowAuth(true)}
          >
            <Person className="me-2" size={20} /> Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
