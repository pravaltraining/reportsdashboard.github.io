import React, { useState, useEffect } from 'react';
import HeaderComponent from './Header/Header';
import { ThemeName } from '../Common/Theme/ThemeColors';
import { THEMES } from '../Common/Theme/ThemeConfig';
import IThemeContextProps from '../Common/Theme/IThemePalette';
import './Dashboard.scss';
import analytics from '../../Assets/Icons/analytics.png';
import research from '../../Assets/Icons/research.png';
import marketing from '../../Assets/Icons/marketing.png';
import sales from '../../Assets/Icons/sales.png';
import ReportComponent from './Report/Report';
import Tour from '../Common/Tour/Tour';
import { TourSteps } from '../Common/Tour/ITourSteps';
import BannerComponent from './Banner/Banner';
import PowerBIReportPopupComponent from '../Common/ReportPopup/PowerBIReportPopup';
import { IBannerItem } from './Banner/Banner';
import FooterComponent from './Footer/Footer';

const DashboardComponent: React.FC = () => {
    const [themeProps, setThemeProps] = useState<IThemeContextProps>({} as IThemeContextProps);
    const [startTour, setStartTour] = useState<boolean>(false);
    const [showBannerReport, setShowBannerReport] = useState<boolean>(false);
    const [selectedBanner, setSelectedBanner] = useState<IBannerItem>({} as IBannerItem);

    useEffect(() => {
        setUserTheme(ThemeName.Default);
    }, []);

    const setUserTheme = (theme: keyof typeof ThemeName) => {
        setThemeProps({
            themeType: theme === undefined ? ThemeName.Default : ThemeName[theme],
            theme: theme === undefined ? THEMES[ThemeName.Default] : THEMES[ThemeName[theme]],
        });
    };

    const handleTour = (isStartTour: boolean) => {
        setStartTour(isStartTour);
    };

    const getBannerImages = () => [
        { id: '1', imgSrc: marketing, text: 'Marketing Reports', customClass: 'market-tour' },
        { id: '2', imgSrc: research, text: 'Research Reports', customClass: 'research-tour' },
        { id: '3', imgSrc: sales, text: 'Sales Reports', customClass: 'sales-tour' },
        { id: '4', imgSrc: analytics, text: 'Analytics Reports', customClass: 'analytics-tour' },
    ];

    const toggleReportPopup = (selectedBanner: IBannerItem) => {
        setShowBannerReport(!showBannerReport);
        setSelectedBanner(selectedBanner);
    };

    const handleBannerClick = (id: string) => {
        const bannerItems = getBannerImages();
        const selectedBanner = bannerItems.find((item) => item.id === id);
        if (selectedBanner) {
            toggleReportPopup(selectedBanner);
        }
    };

    return (
        <div style={{ ...themeProps.theme } as React.CSSProperties}>
            <div className="dashboard-page d-flex flex-column justify-content-between">
                <div>
                    <div className="header-section">
                        <HeaderComponent
                            themeProps={themeProps}
                            changeTheme={(theme: keyof typeof ThemeName) => {
                                setUserTheme(theme);
                            }}
                        />
                    </div>
                    <div className="banner-section px-5 w-100 my-4">
                        <BannerComponent
                            bannerItems={getBannerImages()}
                            handleBannerClick={handleBannerClick}
                        />
                    </div>
                    <div className="report-section px-5">
                        <ReportComponent />
                    </div>
                    <div className="footer-section">
                        <FooterComponent startTour={() => handleTour(true)} />
                    </div>
                </div>
                <Tour
                    stepstart={startTour}
                    stopTour={() => {
                        handleTour(false);
                    }}
                    tourSteps={TourSteps}
                />
                {showBannerReport && (
                    <PowerBIReportPopupComponent
                        closePPT={() => toggleReportPopup({} as IBannerItem)}
                        header={selectedBanner?.text}
                        link="#"
                        imageSrc={selectedBanner?.imgSrc}
                    />
                )}
            </div>
        </div>
    );
};

export default DashboardComponent;
