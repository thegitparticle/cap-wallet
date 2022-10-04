import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";

export default function App() {
	let colorScheme = useColorScheme();

	return (
		<View className="flex flex-1 justify-center items-center bg-layout5 dark:bg-layout1">
			<Text className=" text-layout1 dark:text-layout5 text-center">
				Open up App.js to start working on your app!
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}
