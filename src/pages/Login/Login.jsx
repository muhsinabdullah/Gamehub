import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import loginBg from "../../assets/loginBg.png";

const Login = () => {
  return (
    <>
      <title>Login | GameHub</title>

      {/* Background */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        {/* Overlay */}
        <div className="absolute"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Welcome Back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">GameHub</span>
            </h1>
            <p className="text-gray-100 max-w-md">
              Log in to explore top games, track your favorites, and install the best titles instantly.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Login Button */}
              <button className="btn btn-primary w-full mt-2">
                Login
              </button>

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Google Login */}
              <button
                type="button"
                className="btn btn-outline w-full flex items-center gap-2"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              {/* Register Link */}
              <p className="text-center text-sm mt-4">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary font-semibold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
