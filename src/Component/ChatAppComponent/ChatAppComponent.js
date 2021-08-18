import React from 'react'
//sdk part
import firebase from 'firebase';
import 'firebase/auth'

const config={
  apiKey: "AIzaSyB3f6X2Bn6pyfPGy4Hr4MdtYVkqZNu8eFk",
  authDomain: "chat-app-70d02.firebaseapp.com",
  projectId: "chat-app-70d02",
  storageBucket: "chat-app-70d02.appspot.com",
  messagingSenderId: "1024507157310",
  appId: "1:1024507157310:web:f9977d8dbf733b58972a6f",
  measurementId: "G-EJ5QMC3CVE"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app(); 
}

firebase.firestore().settings({
  timestampsInSnapshots: true
})
function PushMessage(msg,userName){
  firebase
  .database()
  .ref("messages")
  .push({[userName]:msg,
  });
}
function query(){
}
const auth=firebase.auth();

function ChatAppComponent(props) {
  let text="red"
  return (
    <div className="ChatComponent">
      <input type="text" onChange={(e)=>text=(e.target.value)}></input>
      <button onClick={()=>PushMessage(text,props.userName)}>Send Message</button>
    </div>

  );
}
export default ChatAppComponent;
