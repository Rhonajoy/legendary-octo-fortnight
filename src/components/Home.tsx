import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
         src="/src/assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg"
        
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Header */}
      <header className="relative flex justify-between items-center px-8 py-6 z-10">
        <h1 className="text-orange-600 text-4xl font-bold">R&j</h1>
        <button
          onClick={() => navigate("/signin")}
          className="bg-orange-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition"
        >
          Sign In
        </button>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center text-center z-10 min-h-[calc(100vh-88px)] px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Endless movie streaming and more
        </h2>
        
        <p className="mb-6">
          Ready to watch? Just Sign in.
        </p>

        
      </main>
    </div>
  );
}
