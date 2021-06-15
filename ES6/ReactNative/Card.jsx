import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Platform,
	Image,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import * as NewsAction from "../redux/actions/NewsAction";

const Card = (props) => {
	//const dispatch = useDispatch();

	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate({
					routeName: "NewsItem",
					params: { articleUrl: props.url },
				});
			}}
		>
			<View style={styles.card}>
				<View style={styles.imageContainer}>
					{/*<Image style={styles.image} source={require('../../assets/demo.png')} />*/}
					<Image style={styles.image} source={{ uri: props.image }} />
				</View>
				<View style={styles.titleContainer}>
					<Text>
						{props.title.length > 25
							? props.title.slice(0, 25) + "..."
							: props.title}
					</Text>
					<MaterialIcons name="favorite" size={24} color="black" />
				</View>
				<View style={styles.description}>
					<Text>
						{props.description.length > 100
							? props.description.slice(0, 100) + "..."
							: props.description}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		borderRadius: 10,
		backgroundColor: "#ffffff",
		elevation: 5,
		height: 300,
		margin: 20,
	},
	imageContainer: {
		width: "100%",
		height: "60%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	titleContainer: {
		height: "10%",
		paddingHorizontal: 15,
	},
	description: {
		paddingHorizontal: 15,
	},
});

export default Card;
