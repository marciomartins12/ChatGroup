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
        <SignOut/>
      <header>
         <h1>UatiChat</h1>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn className="botaoEntrar" />}</section>
    </div>
  );
};

export default App;