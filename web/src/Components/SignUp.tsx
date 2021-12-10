import { useState } from 'react';
import axios from 'axios';

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

  return <div>
    <h3>Sign Up Here!</h3>

  <label>Username:</label>
  <input value={username} onChange={(e) => setUsername(e.target.value)}/>
  <label>Password:</label>
  <input value={password} onChange={(e) => setPassword(e.target.value)}/>
  <button onClick={handleClick}>Click Me Please</button>
  </div>
};

export default SignUp;