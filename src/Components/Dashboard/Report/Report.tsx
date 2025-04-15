import React, { useState } from 'react';
import './Report.scss';
import minimizeIcon from './../../../Assets/Icons/minimizeIcon.png';
import maximizeIcon from '../../../Assets/Icons/maximizeWhite.png';
import CategorizedLinksComponent from './ReportLink/CategorizedLinks';

const ReportComponent: React.FC = () => {
    const [isMaximized, setIsMaximized] = useState<boolean>(false);

    const toggleFullScreen = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <>
             <React.Fragment>
              <div className={` ${isMaximized ? "report-modal modal d-block" : "col-12"}`}>
                    <div className={`${isMaximized ? "modal-dialog modal-dialog-centered" : ""}`}>
                        <div className={`${isMaximized ? "modal-content" :  "report-content" }`}>
                            <div className={`reports-header header-background ${isMaximized ? "modal-header p-0" : ""} `} >
                              <div className='d-flex justify-content-between w-100'>
                                <div className="tabs-container d-flex align-items-center mx-auto">
                                    <div className='fw-bold'>
                                      Reporting Dashboard
                                    </div>
                                </div>
                                <div className="img-container p-2">
                                  <img src={isMaximized ? minimizeIcon : maximizeIcon} alt={`${isMaximized ? "Minimize Icon" : "Maximize Icon"}`} className={`maximize-icon-intro ${isMaximized ? "minimize-icon " : "maximize-icon "}`} onClick={toggleFullScreen}></img>
                                </div>
                              </div>
                              <div>
                              </div>
                            </div>
                            <div className={`${isMaximized ? "modal-body" : ""}`}>
                                <div className={`report-container d-flex flex-column p-xxl-3 p-xl-2  p-md-3`} >
                                  <CategorizedLinksComponent />
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    );
};

export default ReportComponent;
