import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./Components/ChatRoom";
import { SignIn, SignOut } from "./Components/SairAndEntrar";
import { getAuth } from "firebase/auth";
import { app} from "./services/firebaseConfig";


const auth = getAuth(app);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
         <h1>Chatzin</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;