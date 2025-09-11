import { useState } from "react";
import { auth, signInWithGoogle } from "../firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Notification } from "../app/Notification";

export default function Login() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const [notification, setNotification] = useState<{
      type: "success" | "error";
      title: string;
      message: string;
    } | null>(null);
    const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setNotification({
        type: "success",
        title: "Login Successful",
        message: "You have successfully Logged In.",
      });
    } catch (err) {
       let errorMsg = "An unexpected error occurred.";
      if (err instanceof Error) setError(err.message);
      setNotification({
        type: "error",
        title: "Signup Failed",
        message: errorMsg,
      });
    }
     
     finally {
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
      {/* {userLoggedIn && <Navigate to={""} replace={true} />} */}
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Don't have an account?{" "}
            <button className="text-blue-400 cursor-pointer" onClick={() => navigate("/signup")}>Sign up</button>
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {notification && (
                      <div className="mb-4">
                        <Notification
                          type={notification.type}
                          title={notification.title}
                          message={notification.message}
                          onClose={() => setNotification(null)}
                        />
                      </div>
                    )}

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
              className="w-full py-2 bg-orange-600 hover:bg-red-700 rounded-lg text-white font-semibold"
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
            
          </div>
        </div>
      </div>
    </>
  );
}
