import { Alert, Button, Text, View } from "react-native";

export default function NavBar({ navigation }) {
  //   const handlerNavigation = () => {
  //     // Alert.alert('ok');
  //     console.log("ok");
  //     navigation.navigate("Profile", { name: "Jane" });
  //   };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Button
          title="HOME"
          onPress={() => navigation.navigate("Home", { name: "Jane" })}
        />
      </View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }}></View>
      <View
        style={{ flex: 1, backgroundColor: "green", justifyContent: "center" }}
      >
        <Button
          title="ENCUESTA"
          onPress={() => navigation.navigate("Encuesta", { name: "Jane" })}
        />
      </View>
    </>
  );
}
