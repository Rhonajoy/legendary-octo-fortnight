// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { sendPasswordResetEmail } from "firebase/auth";

// export default function ForgotPassword({ switchToLogin }) {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage("Password reset email sent! Check your inbox.");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-white mb-4">
//           Reset Password
//         </h2>
//         <p className="text-gray-400 text-center mb-6">
//           Remembered your password?{" "}
//           <span
//             onClick={switchToLogin}
//             className="text-blue-400 cursor-pointer"
//           >
//             Login
//           </span>
//         </p>

//         {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <form onSubmit={handleReset} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
