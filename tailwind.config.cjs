/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Rubik: "Rubik",
				Merriweather: "Merriweather Sans",
				IsepMisbah: "Isep Misbah",
			},
		},
	},
	plugins: [],
}
