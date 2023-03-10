import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>New social</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            molestiae omnis ipsam, eveniet debitis, ipsum sequi expedita aut
            aspernatur molestias id! Eligendi optio quisquam eius quos natus
            asperiores vero ex.
          </p>
          <span>Already have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
