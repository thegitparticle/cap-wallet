import React from "react";
import { View, Text } from "react-native";

export default function LandingScreen() {
	return (
		<View className="flex flex-1 justify-center items-center bg-layout5 dark:bg-layout1">
			<Text className=" text-layout1 dark:text-layout5 text-center">
				Welcome to the people's blockchain!
			</Text>
		</View>
	);
}
