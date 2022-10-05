import React from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

export default function LandingScreen() {
	return (
		<View className="flex flex-1 justify-center items-center bg-layout5 dark:bg-layout1">
			<ImageBackground
				source={require("../../assets/astronaut.jpeg")}
				style={{ width, height }}
				className="absolute items-center justify-between"
			>
				<Text className=" text-layout1 dark:text-layout5 text-center text-sm my-20">
					GM!
				</Text>
				<BlurView
					intensity={50}
					className="flex py-4 px-6 rounded-full overflow-hidden"
				>
					<Text className=" text-layout1 dark:text-layout5 text-center text-base">
						🧢 Cap is not a wallet!
					</Text>
				</BlurView>
				<Text className=" text-layout1 dark:text-layout5 text-center text-sm my-20">
					more coming soon! watch the github repo for updates.
				</Text>
			</ImageBackground>
		</View>
	);
}
