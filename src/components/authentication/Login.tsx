import { useState } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInWithGoogle();
        alert("Google login successful!");
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={""} replace={true} />}
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Don't have an account?{" "}
            <span className="text-blue-400 cursor-pointer">Sign up</span>
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <p className="text-gray-500 px-2">OR</p>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700">
              <img
                src="https://www.svgrepo.com/show/349442/apple.svg"
                alt="Apple"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
