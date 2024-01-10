import { getAuth } from "firebase/auth";
import {useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app} from "../../services/firebaseConfig";

const auth = getAuth(app);

export const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    return <div  className="botaoEntrar" >
     <button onClick={() => signInWithGoogle()}>sign in using google</button>
     <p> se não estiver funcionando, me mande mensagem @marciomartins12. o problema é no banco de dados e só precisa ficar trocando o servidor que ele volta funcioar normalmente.</p>
    </div>
  };
  
  export const SignOut = () => {
    return (
      auth.currentUser && <button className="botaoSair" onClick={() => auth.signOut()}>Sair</button>
    );
  };

  