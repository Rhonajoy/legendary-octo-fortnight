import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuScWjf2l_aGlm6iQcu59jvaqdbwW9-fQ",
  authDomain: "rj-movie-app.firebaseapp.com",
  projectId: "rj-movie-app",
  storageBucket: "rj-movie-app.firebasestorage.app",
  messagingSenderId: "425837191525",
  appId: "1:425837191525:web:671fe05c49cc3d0915018c",
  measurementId: "G-0DXD2N16XX",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { app, auth };
