import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";
import { useForm, SubmitHandler } from "react-hook-form";

export function setUserStore(userToken: any) {
  localStorage.setItem("user", JSON.stringify(userToken));
}

type Inputs = {
  email: string;
  password: string;
};

const Login = ({ setShowAuth, setShowLogin }: any) => {
  const { setUser } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  async function loginUser(credentials: any) {
    return fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/local/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   const user = await loginUser({
  //     identifier: email,
  //     password: password,
  //   }).then();

  //   if (user.data) {
  //     setUserStore(user);
  //     setUser(user);
  //     setShowAuth(false);
  //   }
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user = await loginUser({
      identifier: data.email,
      password: data.password,
    });

    if (user.user) {
      setUserStore(user);
      setUser(user);
      setShowAuth(false);
    }
  };

  return (
    <div className="auth-content p-4">
      <div className="d-block text-decoration-none text-dark mb-4">
        <h2 className="h4 mb-1">Log in</h2>
        <div className="d-flex align-items-baseline text-secondary">
          <small>New user?&nbsp;</small>
          <button
            onClick={() => setShowLogin(false)}
            className="btn btn-link p-0 fw-normal"
          >
            <small>Create an account</small>
          </button>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <div className="invalid-feedback">This field is required</div>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <div className="invalid-feedback">Please enter a valid email</div>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="invalid-feedback">This field is required</div>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-primary px-4 mb-3"
            value={"Log In"}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
