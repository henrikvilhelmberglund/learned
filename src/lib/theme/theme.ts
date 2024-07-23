import { colors } from "@unocss/preset-mini";

type ColorObject = { [key: number]: string };

interface Theme {
	name: string;
	primary: ColorObject;
	secondary: ColorObject;
	monochrome: ColorObject;
	selection: ColorObject;
}

// add colors here, then create an object inside presetTheme({theme: {} in uno.config.js
export const themes = createThemes([
  { name: "blue", primary: colors.blue, secondary: colors.purple, monochrome: colors.slate, selection: colors.blue },
	{ name: "emerald", primary: colors.emerald, secondary: colors.orange, monochrome: colors.gray, selection: colors.blue },
	{ name: "orange", primary: colors.orange, secondary: colors.pink, monochrome: colors.stone, selection: colors.blue },
	{ name: "rose", primary: colors.rose, secondary: colors.pink, monochrome: colors.stone, selection: colors.blue },
]);
export const themeColors = Object.entries(themes).map((theme) => {
	// console.log(theme[0]);
	return theme[0];
});

export function createThemes(objects: Theme[]) {
	function generateColorObject(
		name: string,
		primary: ColorObject,
		secondary: ColorObject,
		monochrome: ColorObject,
		selection: ColorObject
	) {
		const colors = {
			primary: {
				50: primary["50"],
				100: primary["100"],
				200: primary["200"],
				300: primary["300"],
				400: primary["400"],
				500: primary["500"],
				600: primary["600"],
				700: primary["700"],
				800: primary["800"],
				900: primary["900"],
				950: primary["950"]
			},
			secondary: {
				50: secondary["50"],
				100: secondary["100"],
				200: secondary["200"],
				300: secondary["300"],
				400: secondary["400"],
				500: secondary["500"],
				600: secondary["600"],
				700: secondary["700"],
				800: secondary["800"],
				900: secondary["900"],
				950: secondary["950"]
			},
			monochrome: {
				50: monochrome["50"],
				100: monochrome["100"],
				200: monochrome["200"],
				300: monochrome["300"],
				400: monochrome["400"],
				500: monochrome["500"],
				600: monochrome["600"],
				700: monochrome["700"],
				800: monochrome["800"],
				900: monochrome["900"],
				950: monochrome["950"]
			},
			selection: {
				50: selection["50"],
				100: selection["100"],
				200: selection["200"],
				300: selection["300"],
				400: selection["400"],
				500: selection["500"],
				600: selection["600"],
				700: selection["700"],
				800: selection["800"],
				900: selection["900"],
				950: selection["950"]
			}
		};

		const output: { [key: string]: { colors: ColorObject } } = {};
		output[name] = { colors };

		return output;
	}

	const themes = objects.map((object) => {
		const { name, primary, secondary, monochrome, selection } = object;
		return generateColorObject(name, primary, secondary, monochrome, selection);
	});

	return Object.assign({}, ...themes);
}
