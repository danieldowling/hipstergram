import ReactDOM from 'react-dom';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <div>
      <h1>Hipstergram.</h1>
      <SignUp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));