import {
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import { auth } from "./Firebase";

export const createUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return firebaseCreateUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return firebaseSignInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};



export const signOutUser = (): Promise<void> => {
  return auth.signOut();
};
