import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://103.175.216.126:8000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/homepage'); 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-md">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
