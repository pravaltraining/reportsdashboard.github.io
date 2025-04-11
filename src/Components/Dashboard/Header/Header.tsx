import * as React from 'react';
import './Header.scss'
import { IoIosArrowForward } from "react-icons/io";
import { ThemePalette } from '../../Common/Theme/ThemePalette';
import { IoMdRefresh } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import IThemeContextProps from '../../Common/Theme/IThemePalette';
import { ThemeName } from '../../Common/Theme/ThemeColors';


interface IHeaderProps {
  isTab?: boolean;
  themeProps:IThemeContextProps
  changeTheme:any;
}

interface IHeaderState {

}

export default class HeaderComponent extends React.Component<IHeaderProps,IHeaderState> {

  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='header-container d-flex align-items-center justify-content-between w-100 px-4'>
          <div className='logo-container '>
                <a className="logo" href={"/reportsdashboard.github.io/index.html"} >
              {/* <span className="m-0 p-0" ><Logo /></span> */}
              <div className='d-flex align-items-center'>
                <div className='logo-arrow'>
                  <IoIosArrowForward />
                </div>
                <div>
                  LOGO  
                </div>
               
           
              </div>
             
            </a>
          </div>
          <div className='nav-links-container'>
            <nav className={`${this.props?.isTab ? "navbar navbar-expand-lg responsive-navbar header-nav pe-4" : "navbar navbar-expand row  d-flex flex-row align-items-end"} `} >
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-center justify-content-center pt-1">
                  <li className="nav-item">
                    <div className="nav-link refresh-icon nav-icons me-1">
                      <IoMdRefresh />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link nav-icons me-1">
                      <IoMdSettings />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link me-3">
                        <ThemePalette id={'themepalette'} 
                            changeTheme={(theme:keyof typeof ThemeName)=>{this.props?.changeTheme(theme)}} 
                            theme={this.props?.themeProps}
                            themeColors={ThemeName}
                            positionType={'bottom right'}
                            
                        />
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
    );
  }
}