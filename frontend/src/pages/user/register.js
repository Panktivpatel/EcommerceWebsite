import React, { useState } from 'react';

const Register = () => {
  const [lname, setLName] = useState('');
  const [fname, setFName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here before submitting the data
    if (!fname || !lname || !phone || !email || !password || !cpassword) {
      alert('Please fill in all fields');
      return;
    }

    const userData = { fname,lname, phone, email, password, cpassword };    
  };

  return (
    <div>
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={fname} onChange={handleFNameChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lname} onChange={handleLNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={cpassword} onChange={handleCPasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
