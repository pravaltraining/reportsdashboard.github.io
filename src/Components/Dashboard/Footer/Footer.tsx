import React, { useState } from 'react';
import './Footer.scss';
import PowerBIReportPopupComponent from '../../Common/ReportPopup/PowerBIReportPopup';

interface IFooterProps {
    startTour: any;
}

const FooterComponent: React.FC<IFooterProps> = ({ startTour }) => {
    const [showReportPopup, setShowReportPopup] = useState(false);

    const toggleReportPopup = () => {
        setShowReportPopup(!showReportPopup);
    };

    return (
        <>
            <div className="footer-content w-100">
                <div className="d-flex align-items-center justify-content-between px-5">
                    <div className="footer-links">
                        {/* Uncomment and update the following if needed for Power BI report */}
                        {/* <ul className='ps-0'> 
                <li className='p-2 power-bi-report' onClick={toggleReportPopup}>
                  Power BI Report
                </li>
              </ul> */}
                    </div>
                    <div className="footer-links">
                        <ul className="ps-0">
                            <li className="p-1 tutorial-intro" onClick={startTour}>
                                Tutorial
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showReportPopup && (
                <PowerBIReportPopupComponent
                    link={''}
                    closePPT={toggleReportPopup}
                    header={''}
                />
            )}
        </>
    );
};

export default FooterComponent;
