import React, { useState } from "react";
import { auth } from "../firebase";

import { useAuth } from "../../contexts/authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, Navigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState(false);
  const { userLoggedIn } = useAuth();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Create Account
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Already have an account?{" "}
            {/* <span
            onClick={switchToLogin}
            className="text-blue-400 cursor-pointer"
          >
            Login
          </span> */}
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              disabled={isRegistering}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={password}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <input
              disabled={isRegistering}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setconfirmPassword(e.target.value)
              }
            />
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isRegistering
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
              }`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-sm text-center">
              Already have an account? {"   "}
              <Link
                to={"/login"}
                className="text-center text-sm hover:underline font-bold"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
