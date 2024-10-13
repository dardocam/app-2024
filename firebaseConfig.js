// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTQcBoB7jouVrFDS15ckSho3MhWbMzpmg",
  authDomain: "bamboo-clone-400516.firebaseapp.com",
  projectId: "bamboo-clone-400516",
  storageBucket: "bamboo-clone-400516.appspot.com",
  messagingSenderId: "412340887676",
  appId: "1:412340887676:web:bdba41cf8a5c8e158f29f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

// import { useEffect, useState } from "react";
// import "./App.css";

// import db from "./firebaseConfig";
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   getDocs,
//   serverTimestamp,
// } from "firebase/firestore";

// function App() {
//   const [isLoading, setisLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const handlerSetDoc = async () => {
//       const data = {
//         id: "0001",
//         name: "MyName",
//         createdAt: serverTimestamp(),
//       };
//       try {
//         await setDoc(doc(db, "usuarios", data.id), data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         console.log("finally");
//       }
//     };
//     const handlerGetDoc = async () => {
//       try {
//         const resp = await getDoc(doc(db, "usuarios", "0001"));
//         console.log(resp.data());
//         setisLoading(false);
//         setData(resp.data());
//       } catch (error) {
//         console.log(error);
//       } finally {
//         console.log("finally");
//       }
//     };
//     const handlerGetDocs = async () => {
//       try {
//         const resp = await getDocs(collection(db, "usuarios"));
//         resp.forEach((doc) => {
//           if (doc.exists() && JSON.stringify(doc.data()) != "{}") {
//             console.log(doc.data());
//           }
//         });
//       } catch (error) {
//         console.log(error);
//       } finally {
//         console.log("finally");
//       }
//     };
//     handlerGetDoc();
//   }, []);

//   return <>{isLoading ? <h1>Loading...</h1> : JSON.stringify(data)}</>;
// }

// export default App;
