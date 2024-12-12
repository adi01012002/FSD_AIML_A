import React, { useState } from "react";

const Register = ({setregData}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!name || !email || !password) {
//       setError("Please fill in all fields.");
//       setSuccess("");
//       return;
//     }

//     // Example logic to handle registration (replace with your API call)
//     setError("");
//     setSuccess("Registration successful! Welcome, " + name + "!");

//     // Reset form fields (optional)
//     setName("");
//     setEmail("");
//     setPassword("");
//   };
  function getData(e){
    e.preventDefault();
    const data={name,email,password}
    setregData(data);
    alert("Succes")
    console.log(data);
  } 

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Register</h2>
      {/* {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>} */}
      <form onSubmit={getData}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
