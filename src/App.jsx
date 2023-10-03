import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./Components/ChatRoom";
import { SignIn, SignOut } from "./Components/SairAndEntrar";
import { getAuth } from "firebase/auth";
import { app} from "./services/firebaseConfig";
import "./reset.css";
import "./App.css";

const auth = getAuth(app);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
         <h1>Chatzin</h1>
        <SignOut className="botaoSair" />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn className="botaoEntrar" />}</section>
    </div>
  );
};

export default App;