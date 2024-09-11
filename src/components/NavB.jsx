
import { Link } from 'react-router-dom';

const NavB = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">ReactAuth</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Join Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavB;