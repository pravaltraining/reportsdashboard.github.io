import { Color,ThemeName } from './ThemeColors';

export default interface IThemeContextProps {
    themeType: ThemeType;
    theme: Theme;
}

export type ThemeType = ThemeName.Default | ThemeName.Violet | ThemeName.Black | ThemeName.LightBlue | ThemeName.DarkBlue | ThemeName.Green | ThemeName.Indigo 

export interface Theme {
    '--primary': Color;
    '--secondary': Color;
    '--background': Color;
    '--white': Color;
    '--transparent': Color;
}

