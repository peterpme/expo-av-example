import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Provider, DefaultTheme, AudioPlayer } from "@draftbit/ui";

export default function App() {
  return (
    <Provider theme={DefaultTheme}>
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <AudioPlayer />
      </View>
    </Provider>
  );
}
