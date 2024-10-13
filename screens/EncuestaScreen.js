import { Alert, Button, Text, View } from "react-native";
import Layout from "../components/layout/Layout";
import Encuesta from "../components/Encuesta";

export default EncuestaScreen = ({ navigation, route }) => {
  return (
    <Layout navigation={navigation}>
      <Encuesta />
    </Layout>
  );
};
