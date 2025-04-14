import * as React from 'react';
import './ReportCardLinks.scss';
import Card from 'react-bootstrap/Card';
import { IPowerBIReport } from '../../../../../Interfaces/IPowerBIReport';
import { IoIosArrowForward } from "react-icons/io";
import { RiMegaphoneLine } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { LuFileChartColumn } from "react-icons/lu";
import { Announcement, Event } from '../../../../../Common/Constant/Constant';

export interface IAnnouncements{
    imgSrc:string;
    title:string;
    text:string;
    date:string;
    isAnnoucement:boolean;
}


interface IReportCardLinkProps {
    isAnnouncements:boolean;
    customClass?:string;
    cardTitle?:string;
    cardLinks?:IPowerBIReport[];
    onSelect:any;
    linkType?:string;
    announcements?:IAnnouncements[];
    onAnnouncemenstSelected?:any;
}

interface IReportCardLinkState {

}

export default class ReportCardLinks extends React.Component<IReportCardLinkProps,IReportCardLinkState> {

    constructor(props: IReportCardLinkProps) {
        super(props);
        this.state = {
            
        };
    }


    render() {
        const {customClass,cardTitle,cardLinks,linkType,announcements,isAnnouncements} = this.props;
        return (
            <>
            <div className={`${customClass ? customClass : ''}`}>
                <div className="card-link-container">
                    <div className='border-top-theme'>
                        
                    </div>
                    <Card >
                        
                        <Card.Body>
                            {cardTitle && <Card.Title>{cardTitle}</Card.Title>}
                            <Card.Text>
                                <ul className='report-links'>
                                    {!isAnnouncements && cardLinks && cardLinks?.map((link)=>{
                                        return <>
                                            <li key={link?.reportID} className={`${link?.isSelected ? 'active':''}`} onClick={() => this.props?.onSelect(link?.linkTitle,link?.reportID)}>
                                            <span className='pe-1'>{linkType === 'report' ? <LuFileChartColumn /> : linkType === Announcement ? <RiMegaphoneLine /> : linkType === Event ? <MdEvent /> :<LuFileChartColumn /> }</span>
                                            {link?.linkTitle}{link?.isSelected && <IoIosArrowForward />}
                                            </li>
                                        </>
                                    })}
                                    {isAnnouncements && announcements && announcements?.map((a)=>{
                                        return <>
                                            {/* <li> */}
                                                <div className='w-100 events p-2 rounded' onClick={()=>this.props?.onAnnouncemenstSelected(a?.title)}>
                                                    
                                                    <div className='row'>
                                                        <div className="col-9">
                                                        <h5><span className='event-title fw-bold'>{a?.title}</span></h5>
                                                            <small className='fw-bold'>{a?.date}</small>
                                                            <p className='col-12'>{a?.text}</p>
                                                        </div>
                                                        <div className='col-3 event-img'>
                                                            <img src={a?.imgSrc}/>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            {/* </li> */}
                                        </>
                                    })
                                    }
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </>

        );
    } 
}
