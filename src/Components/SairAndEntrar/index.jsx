import { getAuth } from "firebase/auth";
import {useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app} from "../../services/firebaseConfig";

const auth = getAuth(app);

export const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    return <div  className="botaoEntrar" >
     <button onClick={() => signInWithGoogle()}>sign in using google</button>
    </div>
  };
  
  export const SignOut = () => {
    return (
      auth.currentUser && <button className="botaoSair" onClick={() => auth.signOut()}>Sair</button>
    );
  };

  