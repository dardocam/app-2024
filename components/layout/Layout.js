import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./NavBar";

export default function Layout({ navigation, children }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          padding: 2,
          flexDirection: "row",
        }}
      >
        <NavBar navigation={navigation} />
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: "darkorange",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 3,
  },
});
