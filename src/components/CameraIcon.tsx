// src/components/CameraIcon.tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ICameraIconProps {
  size: number;
  color: string;
}

export function CameraIcon({ size, color }: Readonly<ICameraIconProps>) {
  return <MaterialCommunityIcons name="camera" size={size} color={color} />;
}
