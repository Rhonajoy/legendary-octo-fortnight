
import "./App.css";
import { AuthProvider } from "./contexts/authContext";
import AppRoutes from "./Routes";


function App() {
  

  return (
   <AuthProvider>
    <AppRoutes/>
   </AuthProvider>
  );
}

export default App;
