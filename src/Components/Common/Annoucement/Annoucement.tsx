import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import './Annoucement.scss';
import { IAnnouncements } from "../../Dashboard/Report/ReportLink/ReportLink/ReportCardLinks";

export interface IAnnouncementProps {
    announcement: IAnnouncements;
    toggleAnnouncement: any;
}

const AnnouncementComponent: React.FC<IAnnouncementProps> = ({ announcement, toggleAnnouncement }) => {
    const [toggled, setToggled] = useState<boolean>(true);

    const handleToggled = (value: boolean, title: string) => {
        toggleAnnouncement?.(title);
        setToggled(value);
    };

    return (
        <div style={{ display: 'flex', height: '100%' }} className="bg-white announcement-container">
            <Sidebar onBackdropClick={() => handleToggled(false, announcement?.title)} toggled={toggled} breakPoint="always" rtl transitionDuration={1000}>
                <div className="annoucement m-3 d-flex flex-column align-items-center">
                    <div className="announce-img p-3 mt-3">
                        <img src={announcement?.imgSrc} />
                    </div>
                    <div className="anc-content p-3">
                        <div className="anc-title fw-bold">
                            {announcement?.title}
                        </div>
                        <small className="anc-date">
                            {announcement?.date}
                        </small>
                        <div className="anc-info mt-1">
                            {announcement?.text} {/* <- looks like your original code got cut, I completed it assuming 'info' */}
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default AnnouncementComponent;
