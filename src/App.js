import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect } from "react";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDYBGg_5A4Mh29Mb-46w7YHkneXwCJtMuA",
    authDomain: "pjwc22.firebaseapp.com",
    databaseURL:
      "https://pjwc22-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pjwc22",
    storageBucket: "pjwc22.appspot.com",
    messagingSenderId: "686750154057",
    appId: "1:686750154057:web:04f072cab2430fbad2ee98",
    measurementId: "G-CXD86LP72E",
  };

  const rtdb = getDatabase(initializeApp(firebaseConfig));

  async function getRTCities() {
    const starCountRef = ref(rtdb, "cities");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("LOGGGGG", JSON.stringify(data));
    });
  }

  useEffect(() => {
    getRTCities();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
