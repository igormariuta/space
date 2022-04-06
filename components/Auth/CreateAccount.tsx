import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";

// export function setUserStore(userToken: any) {
//   localStorage.setItem("user", JSON.stringify(userToken));
// }

const CreateAccount = ({ setShowAuth, setShowLogin }: any) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const { setUser } = useContext(UserContext);

  //   async function loginUser(credentials: any) {
  //     return fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/local/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }).then((data) => data.json());
  //   }

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();

  //     const user = await loginUser({
  //       identifier: email,
  //       password: password,
  //     });

  //     if (user) {
  //       setUserStore(user);
  //       setUser(user);
  //       updateShowAuth();
  //     }
  //   };

  return (
    <div className="auth-content p-4">
      <div className="d-block text-decoration-none text-dark mb-4">
        <h2 className="h4 mb-1">Create an account</h2>
        <div className="d-flex align-items-baseline text-secondary">
          <small>Already have an account?&nbsp;</small>
          <button
            onClick={() => setShowLogin(true)}
            className="btn btn-link p-0 fw-normal"
          >
            <small>Log in</small>
          </button>
        </div>
      </div>

      <div>
        <p>In development yopta</p>
        <form className="d-none">
          <div className="mb-4">
            <label className="form-label">Username</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="current-password"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary px-4 mb-3">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
