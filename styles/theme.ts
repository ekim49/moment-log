// 공통적으로 사용할 테마(media query, color 등)
import { DefaultTheme } from 'styled-components';

const colors = {
	black1: '#303030',
	gray: '#BDBDBD',
	white: '#ffffff',
	blue1: '#03A9F4',
	blue2: '#2196F3',
	red: '#EF5350',
	green: '#66BB6A',
};

const fontSize = {
	logo: 40,
	title: 25,
	date: 16,
	weather: 16,
	text: 14,
	text_small: 12,
	footer: 12,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

export const theme: DefaultTheme = {
	colors,
	fontSize,
};
