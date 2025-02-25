import "./Login.scss";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  return (
    <main className="main bg-dark">
      <section className="signInContent">
        <FaUserCircle className="signInIcon" />
        <h1>Sign In</h1>
        <form>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="signInButton">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
