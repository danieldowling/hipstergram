import ReactDOM from 'react-dom';
import Header from './common/Header';
import SignUp from './common/SignUp';
import LogIn from './common/LogIn';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './contexts/user.context';

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
