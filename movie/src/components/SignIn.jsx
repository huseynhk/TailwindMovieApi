import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/Router";
import { validateEmail } from "../utils/Regex";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signIn } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (formData.username.length < 5 || formData.username.length > 15) {
      toast.error("Username must be between 5 and 15 characters.", {
        autoClose: 2000,
      });
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address. Please enter a valid email.", {
        autoClose: 2000,
      });
      return;
    }
    setLoading(true);
    console.log(formData);
    signIn(formData);
    setTimeout(() => {
      toast.success("Welcome back! You’ve signed in successfully.", {
        autoClose: 1500,
      });
      setLoading(false);
      navigate(ROUTER.Home);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-800 to-sky-500">
      <div className="bg-slate-700 shadow-lg rounded-lg p-8 max-w-md w-10/12 md:w-full font-poppins">
        <h2 className="text-2xl font-semibold text-center text-slate-300">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 block w-full border text-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 block w-full border border-slate-300  rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-slate-300"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              value={formData.image}
              onChange={handleInputChange}
              className="mt-1 px-4 py-2 block w-full border border-slate-300  rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2  min-h-[42px] flex items-center justify-center rounded-md shadow transition duration-300 ${
              loading
                ? "bg-sky-400 text-gray-300 cursor-not-allowed"
                : "bg-sky-600 text-white hover:bg-sky-700 "
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 w-full py-2 min-h-[42px] bg-slate-500 text-white rounded-md shadow hover:bg-slate-600 transition duration-300"
          >
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
