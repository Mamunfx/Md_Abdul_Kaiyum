import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn ,setIsLoggedIn]=useState(false );

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:py-3">
        <Link to="/">
          <img
            src="https://mdabdulkaiyum.in/assets/logo_fav/main_logo_fav.png"
            alt="Logo"
            className="w-56"
          />
        </Link>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden md:flex px-4 pb-2 space-x-3 gap-2">
        <Link to="/" className="hover:text-blue-700">হোম</Link>
        <Link to="/" className="hover:text-blue-700">সেবা</Link>
        <Link to="/" className="hover:text-blue-700">রিভিউ</Link>
        <Link to="/" className="hover:text-blue-700">আমাদের সম্পর্কে</Link>
        <Link to="/" className="hover:text-blue-700">যোগাযোগ</Link>
        <Link to="/" className="text-xl font-semibold hover:text-blue-700">
          FAQ
        </Link>
        <Link to="/" className="btn btn-sm btn-primary ">
          বুক অ্যাপয়েন্টমেন্ট
        </Link>
        <Link to="/" className="btn btn-sm btn-primary">
          BMI Calculator
        </Link>
        <Link to="/" className="btn btn-sm btn-primary">
          Download App
        </Link>
        {
          isLoggedIn ? "":<Link to="/" className="btn btn-sm btn-primary">
          লগিন করুন 
        </Link>
        }
        {
          isLoggedIn ? 
          <Link to="/" className="btn btn-sm btn-primary">
          ড্যাশবোর্ড
        </Link> : ""
        }
        <a href="" className="flex gap-1 pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
            className="w-7 h-7 text-blue-700"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q0-33 23.5-56.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5-23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
          </svg>{" "}
          Shop Now
        </a>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          <Link to="/" className="hover:text-blue-700">হোম</Link>
        <Link to="/" className="hover:text-blue-700">সেবা</Link>
        <Link to="/" className="hover:text-blue-700">রিভিউ</Link>
        <Link to="/" className="hover:text-blue-700">আমাদের সম্পর্কে</Link>
        <Link to="/" className="hover:text-blue-700">যোগাযোগ</Link>
        <Link to="/" className="text-xl font-semibold hover:text-blue-700">
          FAQ
        </Link>
        <Link to="/" className="btn btn-sm btn-primary">
          বুক অ্যাপয়েন্টমেন্ট
        </Link>
        <Link to="/" className="btn btn-sm btn-primary">
          BMI Calculator
        </Link>
        <Link to="/" className="btn btn-sm btn-primary">
          Download App
        </Link>
        {
          isLoggedIn ? "":<Link to="/" className="btn btn-sm btn-primary">
          লগিন করুন 
        </Link>
        }
        {
          isLoggedIn ? 
          <Link to="/" className="btn btn-sm btn-primary">
          ড্যাশবোর্ড
        </Link> : ""
        }
        <a href="" className="flex gap-1 pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
            className="w-7 h-7 text-blue-700"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q0-33 23.5-56.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5-23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
          </svg>{" "}
          Shop Now
        </a>
        </div>
      )}
    </nav>
  );
}
