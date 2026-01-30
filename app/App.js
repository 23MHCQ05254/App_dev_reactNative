import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "react-native";

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" ></StatusBar>
 			<View style={Mystyle.parent}>
				<View style={Mystyle.child1} ></View>
				<View style={Mystyle.child2} ></View>
			</View>

		</>

	)
}
export default App;

const Mystyle = StyleSheet.create({
	// mytext: {
	// 	color: "white",

	// 	fontWeight: 10,
	// },
	parent: {

		height: 500,
		backgroundColor: "red",
		width: "100%",
		borderWidth: 2,
	},

	child1: {
		height: 200,
		backgroundColor: "yellow",
		width: "50%",

	},
	child2: {
		width: 20,
		backgroundColor: "blue",
		height: 40,
	}



})