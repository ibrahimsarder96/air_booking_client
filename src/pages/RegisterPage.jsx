import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const userRegister = (ev) => {
    ev.preventDefault();
    axios.post('/register',{
      name,
      email,
      password
    })
  }
  return (
    <div className="flex grow justify-around items-center">
    <div className="mb-64">
    <h1 className="text-2xl text-center font-bold">Register</h1>
    <form className="max-w-md mx-auto mt-4" action="" onSubmit={userRegister}>
      <input type="text"  
      placeholder="your name"
      value={name} 
      onChange={ev=>setName(ev.target.value)}
      />
      <input type="email"
      placeholder="your@email"
      value={email} 
      onChange={ev=>setEmail(ev.target.value)}
      />
      <input type="password"  
      placeholder="password"
      value={password} 
      onChange={ev=>setPassword(ev.target.value)}
      />
      <button className="primary">Register</button>
      <div className="text-gray-500 mt-3">Already have a account? <Link to="/login" className="underline text-black">Login</Link></div>
    </form>
  </div>
  </div>
  );
};

export default RegisterPage;