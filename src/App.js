import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDYBGg_5A4Mh29Mb-46w7YHkneXwCJtMuA",
    authDomain: "pjwc22.firebaseapp.com",
    projectId: "pjwc22",
    storageBucket: "pjwc22.appspot.com",
    messagingSenderId: "686750154057",
    appId: "1:686750154057:web:04f072cab2430fbad2ee98",
    measurementId: "G-CXD86LP72E",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getCities() {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{JSON.stringify(getCities())}</div>
      </header>
    </div>
  );
}

export default App;
