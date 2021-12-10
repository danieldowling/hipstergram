import { useState } from 'react';
import axios from 'axios';
import '../tailwind.output.css';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setUsername('');
    setPassword('');

    const sendData = {
      username: username,
      password: password
    };
    console.log(username);
    console.log(password);

    axios.post('http://localhost:3001/auth/signup', sendData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  return <div className="container mx-auto">
      <div className="flex justify-center">
        <form className="my-8">
          <div>
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Username:</label>
            </div>
            <div>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter Email"/>
            </div>
          </div>
          <div>
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">Password:</label>
            </div>
            <div>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
            </div>
          </div>
          <div className="md:flex md:items-center">
              <div className="mx-auto p-5">
                <button onClick={handleClick} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Click Me To Sign Up</button>
              </div>
          </div>
        </form>
      </div>
  </div>
};

export default SignUp;