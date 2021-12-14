import ReactDOM from 'react-dom';
import Header from './common/Header';
import SignUp from './common/SignUp';
import LogIn from './common/LogIn';
import Home from './common/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} /> 
          <Route path="login" element={<LogIn />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));