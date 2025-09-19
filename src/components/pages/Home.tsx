import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen w-full text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="bg.jpg"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col flex-1">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-8 py-4 sm:py-6 gap-3 sm:gap-0">
          <h1 className="text-rose-600 text-3xl sm:text-4xl font-bold">
            R&JMOVIES
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="bg-rose-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition"
          >
            Sign In
          </motion.button>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Endless movie streaming and more
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 text-lg"
          >
            Ready to watch? Just Sign in.
          </motion.p>
        </main>
      </div>
    </div>
  );
};
