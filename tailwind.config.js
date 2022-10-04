/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				layout1: "#111",
				layout2: "#222",
				layout3: "#333",
				layout4: "#DDD",
				layout5: "#EEE",
			},
		},
	},
	plugins: [],
};
