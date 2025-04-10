import * as React from 'react';
import './ReportCardLinks.scss';
import Card from 'react-bootstrap/Card';
import { IPowerBIReport } from '../../../../../Interfaces/IPowerBIReport';
import { IoIosArrowForward } from "react-icons/io";

interface IReportCardLinkProps {
    customClass?:string;
    cardTitle?:string;
    cardLinks:IPowerBIReport[];
    onSelect:any;
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
        const {customClass,cardTitle,cardLinks} = this.props;
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
                                    {cardLinks?.map((link)=>{
                                        return <>
                                            <li key={link?.reportID} className={`${link?.isSelected ? 'active':''}`} onClick={() => this.props?.onSelect(link?.linkTitle,link?.reportID)}>
                                                {link?.linkTitle}{link?.isSelected && <IoIosArrowForward />}
                                            </li>
                                        </>
                                    })}
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
