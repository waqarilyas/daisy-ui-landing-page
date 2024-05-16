const Navbar = () => {
  return (
    <div className="dark navbar rounded-2xl bg-primaryDark text-primaryLight">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-darkGrey bg-opacity-20 rounded-2xl">
          <li className="mr-4">
            <a>Dashboard</a>
          </li>

          <li className="mr-4">
            <a>Reports</a>
          </li>

          <li className="mr-4">
            <a>Documents</a>
          </li>

          <li className="mr-4">
            <a>History</a>
          </li>

          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end darkMode">
        <a className="btn bg-white text-primaryDark rounded-2xl px-8">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
