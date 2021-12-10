import ReactDOM from 'react-dom';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Hipstergram.</span>
        </div>
      </nav>
      <SignUp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));