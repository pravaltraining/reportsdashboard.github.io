import React from "react";
import { Sidebar } from "react-pro-sidebar";
import './Annoucement.scss';
import { IAnnouncements } from "../../Dashboard/Report/ReportLink/ReportLink/ReportCardLinks";


export interface IAnnouncementProps {
    announcement:IAnnouncements;
    toggleAnnouncement:any;
}
export interface IAnnouncementState {
    toggled:boolean;
}
export default class AnnouncementComponent extends React.Component<IAnnouncementProps, IAnnouncementState>{

    constructor(props:IAnnouncementProps) {
        super(props);
        this.state = {
            toggled:true
        }
    }

    setToggled(value:boolean,title:string){
        this.props?.toggleAnnouncement(title)
        this.setState({toggled:value})
    }

    componentDidUpdate(prevProps: Readonly<IAnnouncementProps>, prevState: Readonly<IAnnouncementState>, snapshot?: any): void {
      
    }

    render(): React.ReactNode {
        const {toggled} = this.state;
        const {announcement} = this.props;
        console.log('preprops : ',this.props);
        return (
            <div style={{ display: 'flex', height: '100%' }} className="bg-white  announcement-container">
              <Sidebar onBackdropClick={() => this.setToggled(false,announcement?.title)} toggled={toggled} breakPoint="always" rtl transitionDuration={1000}>
                <div className="annoucement m-3 d-flex flex-column align-items-center">
                        
                    <div className="announce-img  p-3 mt-3">
                        <img src = {announcement?.imgSrc}/>
                    </div>
                    <div className="anc-content p-3">
                        <div className="anc-title fw-bold">
                            {announcement?.title}
                        </div>
                        <small className="anc-date">
                            {announcement?.date}
                        </small>
                        <div className="anc-info mt-1">
                            {announcement?.text}
                        </div>
                    </div>
                </div>
            </Sidebar>
            </div>
            );
    }
}

