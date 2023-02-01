import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            molestiae omnis ipsam, eveniet debitis, ipsum sequi expedita aut
            aspernatur molestias id! Eligendi optio quisquam eius quos natus
            asperiores vero ex.
          </p>
          <span></span>
          <button></button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
