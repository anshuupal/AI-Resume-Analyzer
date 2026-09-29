function Navbar({ user, onLoginClick }) {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
        AI Resume Analyzer 🚀
      </div>

      <div>
        {user ? (
          <span className="text-gray-700 font-medium">Hello, {user.name}</span>
        ) : (
          <button
            onClick={onLoginClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;