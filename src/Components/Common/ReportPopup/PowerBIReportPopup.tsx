import * as React from 'react';
import { useEffect } from 'react';
import './PowerBIReportPopup.scss';
import closeIcon from '../../../Assets/Icons/closeIcon.png';

export interface IReportPopupProps {
    link: string;
    closePPT: any;
    header: string;
    imageSrc?: any;
}

const PowerBIReportPopupComponent: React.FC<IReportPopupProps> = ({ link, closePPT, header, imageSrc }) => {

    useEffect(() => {
        const scriptUrl = 'https://content.powerapps.com/resource/webplayerbus/hashedresources/s5p7btlk9sp1c/js/es6.player-boot.js';
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const script = document.querySelector(`script[src="${scriptUrl}"]`);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className={`ppt-modal modal d-block`}>
            <div className= "modal-dialog">
                <div className="modal-content">
                    <div className="modal-header p-2">
                        <div className="w-100 d-flex">
                            <div className='col-11'>
                                <h4 className="ppt-header ms-auto me-auto mt-auto mb-auto text-white text-center" >{ header}</h4>    
                            </div>
                            
                            <div className="col-1 d-flex justify-content-end" onClick={()=>{closePPT()}}><img src={closeIcon} className="close-icon cursor-pointer" alt="close icon"></img></div>
                        </div>
                        </div>
                        <div className="modal-body">
                        <div style={{ height: '100%' }}>
                            {link !== '#' ? <iframe className="iframe-loader" src={link} width="100%" height="100%" frameBorder="0"></iframe> 
                            :   <>
                                    <div className='d-flex align-items-center justify-content-center h-100 fs-5'>
                                       {imageSrc && <div className=''>
                                            <img className='ppt-img'src={imageSrc} alt="img" />
                                        </div>}
                                    </div>
                                </> 
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default PowerBIReportPopupComponent;
