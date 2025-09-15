import React, { useState } from "react";
import { auth } from "../firebase";
// import { useAuth } from "../../contexts/authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
import { Notification } from "../app/Notification";
export const Register=()=> {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState(false);
  // const { userLoggedIn } = useAuth();

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);
   const navigate = useNavigate()
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isRegistering) {
      setIsRegistering(true);
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setNotification({
        type: "success",
        title: "Account Created",
        message: "Your account has been created successfully.",
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/signin");
    } catch (err: unknown) {
      let errorMsg = "An unexpected error occurred.";
      if (err instanceof Error) {
        errorMsg = err.message;
      }
      setNotification({
        type: "error",
        title: "Signup Failed",
        message: errorMsg,
      });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <>
      {/* {userLoggedIn && <Navigate to={"/"} replace={true} />} */}

      <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden text-white">
        <video
        autoPlay
        loop
        muted
        playsInline
         preload="none"
        poster="bg.jpg"
        className="fixed  top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <div className="relative z-10 bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Create Account
          </h2>

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

          <form onSubmit={handleSignup} className="space-y-4">
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
              required
              disabled={isRegistering}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
              value={confirmPassword}
              required
              disabled={isRegistering}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isRegistering
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-rose-600 hover:bg-rose-700 hover:shadow-xl transition duration-300"
              }`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
