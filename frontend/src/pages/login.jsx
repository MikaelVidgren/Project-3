import { useState, useEffect } from "react";
//for icons


function Login() {
  //FORM FOR REGISTERATION
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {email, password } = formData;
  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,

      }))
  }
  const onSubmit = (e) => {
      e.preventDefault()
  }

  return (
    <div>
      <section>
        <h1>
          Login
        </h1>
        <p>Login to set goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div classNAme="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email here"
              onChange={onChange}
            />
          </div>
          <div classNAme="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div classNAme="form-group">
          <button type="submit" className="btn btn-block"></button>
          </div>
        </form>
      </section>
    </div>
  );
}
//exports
export default Login;
