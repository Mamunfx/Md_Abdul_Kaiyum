import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoggedIn(!isLoggedIn);
    alert("Login successful!");
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} ></Navbar>
      <div className="min-h-screen flex items-center justify-center  my-16">
        <div className="  bg-white rounded-lg shadow-lg p-8 w-2/5  mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center flex gap-2 justify-center items-center">
            লগিন করুন 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              className="w-10 h-10 text-blue-700"
            >
              <path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" />
            </svg>
          </h2>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-gray-700 mb-2 text-xs"
                htmlFor="email"
              >
                ফোন নম্বর বা ইমেইলঃ
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-4 border text-xs rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="ফোন নম্বর বা ইমেইল দিন"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 text-xs"
                htmlFor="password"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-4 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="পাসওয়ার্ড দিন"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-700 text-white p-2 btn-sm text-xs rounded hover:bg-blue-800 transition font-semibold"
              >
                লগিন করুন
              </button>
              <a
                href="#"
                className="text-sm text-blue-700 hover:underline ml-4"
              >
                পাসওয়ার্ড ভুলে গিয়েছেন?
              </a>
            </div>
          </form>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">অথবা</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <p className=" text-gray-600 text-xs">
            কোনো একাউন্ট না থাকলে{" "}
            <span className="text-blue-700">এখন থেকে</span> নতুন এ্যাকাউন্ট তৈরি
            করতে পারেন।
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
