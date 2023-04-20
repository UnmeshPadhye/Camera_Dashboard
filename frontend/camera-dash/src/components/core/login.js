import React, { useState } from "react";
import "./style/login.css";

const Login = ({ showSignupForm, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded email and password
    const user1 = "Campus Security Officer";
    const user2 = "Surveillance service staff"

    const hardcodedEmail1 = "officer@sjsu.edu"
    const hardcodedEmail2 = "staff@sjsu.edu"

    const hardcodedPassword = "password";
    if (( email === hardcodedEmail1 || email === hardcodedEmail2 )&& password === hardcodedPassword) {
      // Set isLoggedIn state to true
      const token = "your_auth_token_here"; 
      localStorage.setItem('token', token);
      if (email == hardcodedEmail1)
        localStorage.setItem('surv_username', user1);
      else
        localStorage.setItem('surv_username', user2);

      // Redirect to home page
      window.location.href = "/home";
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
        <p className="mt-5">
          Don't have an account?{" "}
          <button className="btn btn-primary" onClick={showSignupForm}>
            Signup
          </button>
        </p>
      </form>
    </div>
  );
};

const Signup = ({ showLoginForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic with email and password
    // Set the signup status to "created"
    setSignupStatus("created");
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
        <p className="mt-5">
          Already have an account?{" "}
          <button className="btn btn-primary" onClick={showLoginForm}>
            Login
          </button>
        </p>
      </form>
      {signupStatus === "created" && (
        <div className="signup-success-popup">
          User created. Waiting for role assign and approval from admin.
        </div>
      )}
    </div>
  );
};

const LoginSignup = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowSignupForm = () => {
    setShowLoginForm(false);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  return (
    <div className="login-signup-container">
      {showLoginForm ? (
        <Login showSignupForm={handleShowSignupForm} />
      ) : (
        <Signup showLoginForm={handleShowLoginForm} />
      )}
    </div>
  );
};

export default LoginSignup;
