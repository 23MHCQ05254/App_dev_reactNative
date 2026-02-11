import React from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import person_1 from "./assets/picture.png"

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
		}
	]
	return (
		<>
			{/* <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }} /> */}
			<StatusBar barStyle={"white-content"} />
			<View style={[Mystyles.MyStatusbar, { paddingTop: 20 }]}>
			</View>
			<FlatList
				data={MyData}
				renderItem={({ item }) => (
					<View style={Mystyles.parent}>
						<View style={Mystyles.Image_view}>
							<Image source={item.Img} style={Mystyles.Image_tap} />
						</View>
						<View style={Mystyles.infoparent}>
							<Text style={Mystyles.SendName}>{item.Name}</Text>
							<Text style={Mystyles.LastMsg}>{item.Msg}</Text>
						</View>
					</View>
				)}
			/>
		</>

	)
}

export default App;

const Mystyles = StyleSheet.create({
	MyStatusbar: {
		backgroundColor: "blue"
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

