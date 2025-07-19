import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">My Library</Link>
        <Link to="/" className="hover:text-blue-500 font-medium">Home</Link>
        {user && <Link to="/mybooks" className="hover:text-blue-500 font-medium">My Books</Link>}
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {/* <span className="text-gray-700 font-medium mr-2">{user.name}</span> */}
            <span className="text-gray-500 text-sm mr-4">{user.email}</span>
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Login</Link>
            <Link to="/register" className="bg-gray-200 hover:bg-gray-300 text-blue-600 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
