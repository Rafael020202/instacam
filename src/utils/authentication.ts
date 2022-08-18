import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { app } from '../config/firebase';

const auth = getAuth(app);

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export { signIn, createUser };