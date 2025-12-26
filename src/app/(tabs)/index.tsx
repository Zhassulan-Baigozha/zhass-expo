import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Home() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <View style={styles.containerWrapper}>
      <div style={styles.containerInner}>
        <div style={styles.containerContent}>
          <TextInput
            label="Имя"
            value={name}
            onChangeText={val => { setName(val) }}
          />
          <TextInput
            label="Предполагаемая дата родов"
            value={dob}
            onChangeText={val => { setDob(val) }}
          />
          <Button mode="contained" onPress={() => console.log('Pressed')}
            contentStyle={styles.buttonContent}
            style={styles.button}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInner: {
    width: "80%",
  },
  containerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  button: {
    borderRadius: 10,
  },
  buttonContent: {
    borderRadius: 10,
    paddingVertical: 6,
  },
});
