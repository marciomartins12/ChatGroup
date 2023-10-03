import { databaseApp } from "../../services/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { getAuth } from "firebase/auth";
import { app} from "../../services/firebaseConfig";

import "./ChatRoom.css";



const auth = getAuth(app);
export const ChatMensagem = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'enviado' : 'recebendo';
  return (
    <div className={`mensagem ${messageClass}`}>
      <img src={photoURL || 'https://github.com/marciomartins12.png'} />
      <p>{text}</p>
    </div>
  );
};

const ChatRoom = () => {
    const dummy = useRef()
    const messagesRef = collection(databaseApp, "messages");
    const q = query(messagesRef, orderBy("createdAt"), limit(25));
    const [messages] = useCollectionData(q, { idField: "id" });
  
    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
      e.preventDefault();
      const { photoURL, uid } = auth.currentUser;
  
      await addDoc(messagesRef, {
        text: formValue,
        uid,
        photoURL,
        createdAt: serverTimestamp()
      });

      setFormValue('')

      dummy.current.scrollIntoView({behavior: 'smooth'})
    };
    
  
    return (
      <>

        <main className="containerChat">
          {messages &&
            messages.map((msg, index) => <ChatMensagem key={index} message={msg} />)}
            <div ref={dummy}></div>
        </main>

        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit"  disabled={!formValue}>Enviar</button>
        </form>
      </>
    );
  };
  export default ChatRoom;
  

