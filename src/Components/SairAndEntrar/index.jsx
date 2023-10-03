import { getAuth } from "firebase/auth";
import {useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app} from "../../services/firebaseConfig";
const auth = getAuth(app);
export const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    return <button className="sign-in" onClick={() => signInWithGoogle()}>logar com Google</button>;
  };
  
  export const SignOut = () => {
    return (
      auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
    );
  };
  