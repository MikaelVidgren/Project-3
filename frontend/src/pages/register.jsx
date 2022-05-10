import { useState, useEffect } from "react";
//pick something from state (exmaple user), Dispatch is for dispatching (example thunk)


function Register() {
  //FORM FOR REGISTERATION
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password } = formData;
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
          Register
        </h1>
        <p>Below you can create account for setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div classNAme="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name please"
              onChange={onChange}
            />
          </div>
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

export default Register;
