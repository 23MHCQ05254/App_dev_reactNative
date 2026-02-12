import React from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import person_1 from "./assets/picture.png" 

// import { Badge,Button,Chip,TextInput,Icon,ActivityIndicator } from "react-native-paper";
// activityindicator,badge,button,chip,textinput,icon

const App = () => {


	const MyData = [
		{
			"Img": person_1,
			"Name": "Raju",
			"Msg": " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		},
		{
			Img: person_1,
			Name: "Raju",
			Msg: " Hello"
		}
	]

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar backgroundColor="blue" barStyle='light-content' />

			</SafeAreaView>
		</>
		
	)
}

export default App;

const Mystyles = StyleSheet.create({
	MyStatusbar: {
		backgroundColor: "red"
	},
	parent: {
		width: "100%",
		flexDirection: "row",
		backgroundColor: "gray",
		marginVertical: 7
	},
	Image_view: {
		width: 100,
		height: 75,
		paddingTop: 10,
		alignItems: "center"
	},
	Image_tap: {
		width: 50,
		height: 50,
		borderRadius: 25
	},
	infoparent: {
		justifyContent: "space-evenly",
		marginLeft: 10
	},
	SendName: {
		fontSize: 24,
	},
	LastMsg: {
		fontSize: 20
	}

})

