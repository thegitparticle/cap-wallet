"use strict";
exports.__esModule = true;
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
function App() {
    var colorScheme = (0, react_native_2.useColorScheme)();
    return (<react_native_1.View className="flex flex-1 justify-center items-center bg-layout5 dark:bg-layout1">
			<react_native_1.Text className=" text-layout1 dark:text-layout5 text-center">
				Open up App.js to start working on your app!
			</react_native_1.Text>
			<expo_status_bar_1.StatusBar style="auto"/>
		</react_native_1.View>);
}
exports["default"] = App;
