"use client";

import { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <div className="login__inner">
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <hr/>
          <div className="login__input">
            <label htmlFor="username" style={{'marginTop' : '0vh'}}>USER NAME</label>
            <input 
                type="text" 
                id="username" 
                placeholder="Enter Username" 
                onChange={(e) => setUsername(e.target.value)} 
                required
            />
            <label htmlFor="password">PASSWORD</label>
            <input 
                type="password" 
                id="password" 
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
            <input 
                type="password" 
                id="confirm-password" 
                placeholder="Confirm Your Password"
                onChange={(e) => setPassword2(e.target.value)}
                required
            />
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
            <div className="login__button">
              <button type="submit">
                <p>Register</p>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;