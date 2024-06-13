import axios from "axios";
import { useState } from "react";
export default function RegisterUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(""); // For messages

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });

      setRegistrationMessage(response.data.message || "Registration successful!");

    } catch (error) {
      console.error(error);
      setRegistrationMessage("Error registering user. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleRegistration}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Add username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Add email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Add password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </>
  );
}
