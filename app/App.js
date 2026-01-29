import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={Mystyle.mytext}>Hii my name is joseph </Text>
      </View>

    </SafeAreaView>

  )
}

export default App;

const Mystyle = StyleSheet.create({
  mytext: {
    color: "red",
    fontSize: 100,
    fontWeight:800,
  }
})