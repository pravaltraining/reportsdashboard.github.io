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
  positionType?: any | undefined;
  customClass?: string;
}

export interface IThemePaletteState {
}

// const POSITION_TYPES = [
//   'top left',
//   'top center',
//   'top right',
//   'right top',
//   'right center',
//   'right bottom',
//   'bottom left',
//   'bottom center',
//   'bottom right',
//   'left top',
//   'left center',
//   'left bottom',
//   'center center',
// ];

export class ThemePalette extends React.Component<IThemePaletteProps, IThemePaletteState> {
  constructor(props: IThemePaletteProps) {
    super(props);
    this.state = {
    };
    this.changThemes = this.changThemes.bind(this);
  }



  changThemes(color: keyof typeof ThemeName) {
    this.props.changeTheme(ThemeName[color]);
  }


  render(): React.ReactNode {
    const { customClass } = this.props;
    return(
      <>
         <Popup
          trigger={ (
            <div className="selected-theme cursor-pointer" id={this.props.id}>
                <div className="theme-colors-circle">
                    <div className="select-color-circle">

                    </div>
                </div>
            </div>
          )}
          position={this.props?.positionType ? this.props.positionType  : "bottom right" }
          closeOnDocumentClick
        >
          { <div className={`calllout-size ${customClass ? customClass : ''}`} >
                <div className="row themes bg-white">
                    {ThemeName && Object.values(ThemeName).map((theme, index) => {
                        return(
                            <div className="col" key={index} >
                                <div className={`${theme} color-box cursor-pointer ${this.props?.theme?.themeType === theme ? "select-theme" : "select-theme"}`} id={theme} onClick={() => this.changThemes(theme)}></div>
                            </div>
                        )
                    })}
                </div > 
            </div>}
  
        </Popup>
      </>
    )
  }
}
