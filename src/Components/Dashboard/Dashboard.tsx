import * as React from 'react';
import HeaderComponent from './Header/Header';
import { ThemeName } from '../Common/Theme/ThemeColors';
import { THEMES } from '../Common/Theme/ThemeConfig';
import IThemeContextProps from '../Common/Theme/IThemePalette';
import './Dashboard.scss';
import analytics from '../../../dist/assets/analytics.png';
import research from '../../../dist/assets/research.png';
import marketing from '../../../dist/assets/marketing.png';
import sales from '../../../dist/assets/sales.png';
import ReportComponent from './Report/Report';
import Tour from '../Common/Tour/Tour';
import { TourSteps } from '../Common/Tour/ITourSteps';
import BannerComponent from './Banner/Banner';
import PowerBIReportPopupComponent from '../Common/ReportPopup/PowerBIReportPopup';
import {IBannerItem} from './Banner/Banner';
import FooterComponent from './Footer/Footer';

interface IDashboardProps {}

interface IDashboardState {
  themeProps: IThemeContextProps;
  startTour: boolean;
  showBannerReport: boolean; 
  selectedBanner: IBannerItem;
}


export default class DashboardComponent extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      themeProps: {} as IThemeContextProps,
      startTour: false,
      showBannerReport: false,
      selectedBanner: {} as IBannerItem,
    };
  }

  componentDidMount() {
    this.setUserTheme(ThemeName.Default);
  }

  setUserTheme(theme: keyof typeof ThemeName) {
    this.setState({
      themeProps: {
        themeType: theme === undefined ? ThemeName.Default : ThemeName[theme],
        theme: theme === undefined ? THEMES[ThemeName.Default] : THEMES[ThemeName[theme]],
      } as IThemeContextProps,
    });
  }

  handleTour(isStartTour: boolean) {
    this.setState({ startTour: isStartTour });
  }

  getBannerImages() {
    const bannerItems = [
      { id: '1', imgSrc: marketing, text: 'Marketing Reports' ,customClass:"market-tour"},
      { id: '2', imgSrc: research, text: 'Research Reports',customClass:"research-tour" },
      { id: '3', imgSrc: sales, text: 'Sales Reports' ,customClass:"sales-tour"},
      { id: '4', imgSrc: analytics, text: 'Analytics Reports' ,customClass:"analytics-tour"},
    ];
    return bannerItems;
  }

  toggleReportPopup(selectedBanner: IBannerItem) {
    this.setState({ showBannerReport: !this.state.showBannerReport,selectedBanner });
  }
  
  handleBannerClick(id: string) {
    const bannerItems = this.getBannerImages();
    const selectedBanner = bannerItems.find((item) => item.id === id);
    if (selectedBanner) {
      this.toggleReportPopup(selectedBanner);
    }
  }

  render() {

    const {showBannerReport,selectedBanner} = this.state;
    return (
      <div style={{ ...this.state.themeProps.theme } as React.CSSProperties}>
        <div className="dashboard-page d-flex flex-column justify-content-between">
          <div>
            <div className="header-section">
              <HeaderComponent
                themeProps={this.state.themeProps}
                changeTheme={(theme: keyof typeof ThemeName) => {
                  this.setUserTheme(theme);
                }}
              />
            </div>
            <div className="banner-section  px-5 w-100 my-4">
              <BannerComponent
                bannerItems={this.getBannerImages()}
                handleBannerClick={(id: string) => {
                  this.handleBannerClick(id);
                }}
              />
            </div>
            <div className="report-section px-5">
              <ReportComponent />
            </div>
            <div className="footer-section ">
              <FooterComponent 
                startTour={()=>this.handleTour(true)}/>
            </div>
          </div>
          <Tour
            stepstart={this.state?.startTour}
            stopTour={() => {
              this.handleTour(false);
            }}
            tourSteps={TourSteps}
          />
         {showBannerReport && 
          <PowerBIReportPopupComponent 
            closePPT={()=>this.toggleReportPopup({} as IBannerItem)} 
            header={selectedBanner?.text} 
            link='#'
            imageSrc={selectedBanner?.imgSrc}/>}
        </div>
      </div>
    );
  }
}