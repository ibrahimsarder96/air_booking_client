import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex grow justify-around items-center">
      <div className="mb-64">
      <h1 className="text-2xl text-center font-bold">Login</h1>
      <form className="max-w-md mx-auto mt-4" action="">
        <input type="email" name="" id="" placeholder="your@email"/>
        <input type="password" name="" id="" placeholder="password"/>
        <button className="primary">Login</button>
        <div className="text-gray-500 mt-3">Don't have account yet? <Link to="/register" className="underline text-black">Register</Link></div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;