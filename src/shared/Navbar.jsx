import { Link } from "react-router-dom";


const Navbar = () => {

    const navOptions = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/cases">Cases</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
    </>

    return (
        <div className="navbar pl-[44px] pr-[44px] py-[15.5px] font-work place-content-center mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[16px] font-semibold text-black">
                {navOptions}
              </ul>
            </div>
            <a className="text-[24px] mb-[10px] text-black font-bold">SteadFast</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-black">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-secondary bg-[#6c757d] border-[#6c757d] text-[#fff] btn-sm px-[11px] py-[17px] mb-[2px] text-base font-light place-content-center rounded-md">Login</a>
          </div>
        </div>
    );
};

export default Navbar;