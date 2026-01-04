import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";

interface IProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: Readonly<IProgressBarProps>) {
  const clampedProgress = Math.max(0, Math.min(progress, 1));
  console.log('clampedProgress = ', clampedProgress);

  return (
    <View style={styles.progressBarWrapper}>
      <View style={styles.progressBarBackground} />
      <LinearGradient
        colors={[COLORS.coralShades.coral3, COLORS.coralShades.coral9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.progressBarFill,
          { width: `${clampedProgress * 100}%` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarWrapper: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "lightgray",
  },
  progressBarFill: {
    height: 10,
    borderRadius: 5,
  },
});
