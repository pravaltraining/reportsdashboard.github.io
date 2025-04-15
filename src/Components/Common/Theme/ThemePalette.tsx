import * as React from "react";
import IThemeContextProps from "./IThemePalette";
import './ThemePalette.scss';
import Popup from 'reactjs-popup';
import { ThemeName } from "./ThemeColors";

export interface IThemePaletteProps {
    id: string;
    changeTheme: any;
    theme: IThemeContextProps;
    themeColors: any;
    positionType?: string;
    customClass?: string;
}

const ThemePalette: React.FC<IThemePaletteProps> = ({ id, changeTheme, theme, themeColors, positionType = "bottom right", customClass }) => {

    const changThemes = (color: keyof typeof ThemeName) => {
        changeTheme(ThemeName[color]);
    };

    return (
        <>
            <Popup
                trigger={
                    <div className="selected-theme cursor-pointer" id={id}>
                        <div className="theme-colors-circle">
                            <div className="select-color-circle"></div>
                        </div>
                    </div>
                }
                position={positionType}
                closeOnDocumentClick
            >
                <div className={`calllout-size ${customClass ? customClass : ''}`}>
                    <div className="row themes bg-white">
                    {ThemeName && Object.values(ThemeName).map((theme, index) => {
                        return(
                            <div className="col" key={index} >
                                <div className={`${theme} color-box cursor-pointer select-theme`} id={theme} onClick={() => changThemes(theme)}></div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default ThemePalette;
