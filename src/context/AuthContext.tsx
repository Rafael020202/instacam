import React, { createContext, useContext, FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { 
  auth,
  signIn as signInWithEmailAndPassword 
} from '../utils/authentication';

type User = {
  name: string | null,
  email: string | null, 
  uid: string,
}

type AuthContextData = {
  user: User | null | undefined
  signIn: (email: string, password: string) => void
  signOut: () => void
}

type Props = {
  children?: React.ReactNode
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FC<Props> = ({ children}) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(email, password);
    
    setUser({
      uid: user.uid,
      name: user.displayName,
      email: user.email
    });

    router.push('/');
  }

  const signOut = async () => {
    await auth.signOut();

    setUser(null);

    router.push('/sigin');
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email
        });

      } else {
        setUser(null)
      }

      setLoading(false);

      return unsubscribe;
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {loading ?null :children}
    </AuthContext.Provider>
  )
}