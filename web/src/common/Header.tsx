import '../tailwind.output.css';

const Header: React.FC = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-cyan-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Hipstergram.
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
