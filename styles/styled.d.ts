// 테마를 포함하여 재정의한 styled-components
import 'styled-components';
import { ColorTypes, FontSizeTypes } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorTypes;
		fontSize: FontSizeTypes;
	}
}
