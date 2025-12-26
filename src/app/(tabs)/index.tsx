// src/app/(tabs)/index.tsx
import { useState } from "react";
import { StyleSheet, Text, TextInput as TextInputRN, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { ProgressBar } from "@/src/components/ProgressBar";
import { calculatePregnancyTerm } from "@/src/utils/calculatePregnancyTerm";

export default function Home() {
  const [name, setName] = useState("Rose");
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState("2026.05.22");

  const result = calculatePregnancyTerm({ dueDate });
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.containerInner}>
        <View>
          {!isFinished && (
            <View style={styles.containerContent}>
              <TextInput
                label="Имя"
                value={name}
                onChangeText={(val) => {
                  setName(val);
                }}
              />
              <TextInputRN
                style={styles.inputRN}
                onChangeText={(val) => {
                  setDueDate(val);
                }}
                value={dueDate}
                placeholder="Предполагаемая дата родов"
              />
              <TextInput
                label="Предполагаемая дата родов"
                value={dueDate}
                onChangeText={(val) => {
                  setDueDate(val);
                }}
              />
              <Button
                mode="contained"
                onPress={() => {
                  setIsFinished(true);
                }}
                contentStyle={styles.buttonContent}
                style={styles.button}
              >
                Сохранить
              </Button>
            </View>
          )}
          <Text>Недель {JSON.stringify(result.weeks)}</Text>
          <Text>Дней {JSON.stringify(result.days)}</Text>
          <Text>Всего дней {JSON.stringify(result.totalDays)}</Text>
          <Text>asd</Text>
          <ProgressBar />
          <Text>asd</Text>
        </View>
      </View>
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
  inputRN: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
