import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";

import db from "../firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { useState, useEffect } from "react";

import * as Location from "expo-location";

export default function Encuesta() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  const handleSubmit = () => {
    const data = {
      id: "00046",
      text: text,
      number: number,
      createdAt: serverTimestamp(),
      altitud: location.coords.altitude,
      longitud: location.coords.longitude,
    };

    const handlerSetDoc = async () => {
      try {
        await setDoc(doc(db, "usuarios", data.id), data);
        console.log("okaayy ");
        setText("");
        setNumber("");
      } catch (error) {
        return false;
      }
    };
    handlerSetDoc();
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="useless placeholder"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button onPress={handleSubmit} title="Submit" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
