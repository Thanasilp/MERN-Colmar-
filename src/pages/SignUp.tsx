import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="my-auto p-6 border border-gray-300 shadow-lg rounded-xl mx-auto bg-white max-w-full sm:max-w-md md:max-w-lg">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center h-full pb-6 rounded-3xl"
            >
              <h3 className="mb-3 text-3xl lg:text-4xl font-extrabold text-center text-dark-grey-900">
                Sign Up
              </h3>
              {/* Username Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="mb-2 text-base lg:text-lg text-stone-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 text-base lg:text-lg text-stone-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
                  required
                />
              </div>
              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2 text-base lg:text-lg text-stone-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
                  required
                />
              </div>
              {/* Confirm Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 text-base lg:text-lg text-stone-900"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 lg:py-4 text-base lg:text-lg bg-gray-100 focus:bg-stone-50 rounded-2xl mt-1"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 lg:py-5 my-5 mx-auto text-sm lg:text-base font-bold leading-none text-white transition duration-300 rounded-2xl bg-stone-500 hover:bg-stone-300 hover:text-stone-600"
              >
                Register
              </button>
              <p className="text-sm lg:text-base leading-relaxed text-grey-900 mx-auto text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="font-bold text-grey-700">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
