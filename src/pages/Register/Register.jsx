import React, { useContext } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import registerBg from "../../assets/registerBg.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

  const { registerWithEmailAndPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;



    registerWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl
        }).then(() => {
          console.log(userCredential.user);
          
        })
          .catch((err) => {
            console.log(err)
          });
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return (
    <>
      <title>Register | GameHub</title>

      {/* Background */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${registerBg})` }}
      >
        {/* Overlay */}
        <div className="absolute"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">GameHub</span>
            </h1>
            <p className="text-gray-100 max-w-md">
              Create your account to discover indie games, track installs, and support developers worldwide.
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

            <form
              onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="label font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="label font-medium">Photo URL</label>
                <input
                  name="photoUrl"
                  type="text"
                  placeholder="Profile image URL"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Register Button */}
              <button className="btn btn-primary w-full mt-2">
                Register
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

              {/* Login Link */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
