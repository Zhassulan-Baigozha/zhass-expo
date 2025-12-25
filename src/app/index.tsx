// src/app/index.tsx
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { CameraIcon } from "../components/CameraIcon";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "green", fontSize: 32 }}>Hello Expo 👋</Text>
      <Button
        // TODO: Move this component definition out of the parent component and pass data as props
        icon={(props) => <CameraIcon {...props} />}
        mode="contained"
        onPress={() => { console.log('Pressed') }}
      >
        Press me
      </Button>
    </View>
  );
}
