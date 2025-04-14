import * as React from 'react';
import './CategorizedLinks.scss';
import { TabView, TabPanel } from 'primereact/tabview';
import { ReportLinkTabs, Announcement, Event } from '../../../../Common/Constant/Constant';
import ReportCardLinks, { IAnnouncements } from './ReportLink/ReportCardLinks';
import { IPowerBIReport } from '../../../../Interfaces/IPowerBIReport';
import PowerBIReportPopupComponent from '../../../Common/ReportPopup/PowerBIReportPopup';
import linechart from '../../../../../dist/assets/linechart.png';
import eventImg from '../../../../../assets/event.jpg';
import megaPhoneImg from '../../../../../assets/megaphone.jpg';
import dashboard from '../../../../../assets/board.png';
import report from '../../../../../assets/report.png';
import training from '../../../../../assets/training.png';
import event from '../../../../../assets/event2.png';
import strategy from '../../../../../assets/strategy.png';
import AnnouncementComponent from '../../../Common/Annoucement/Annoucement';

interface ICategorizedLinksProps {
}

interface ICategorizedLinksState {
    activeIndex:number;
    showReport:boolean;
    selectedReport:IPowerBIReport;
    level1:number;
    level2:number;
    level3:number;
    linkType:string;
    openAnnouncement:boolean;
    selectedAnnouncement:IAnnouncements;
}

export default class CategorizedLinksComponent extends React.Component<ICategorizedLinksProps,ICategorizedLinksState> {

    constructor(props: ICategorizedLinksProps) {
        super(props);
        this.state = {
            activeIndex:0,
            showReport:false,
            selectedReport:{} as IPowerBIReport,
            level1:1,
            level2:1,
            level3:1,
            linkType:"",
            openAnnouncement:false,
            selectedAnnouncement:{} as IAnnouncements
            // selectedLinkID4:"Marketing-1.1.1.1",
        };
    }

    setActiveIndex(index: number): void {
        this.setState({activeIndex:index});
    }

    toggleReport(selectedReport:IPowerBIReport = {} as IPowerBIReport,linkType:string=""){
        this.setState({showReport:!this.state?.showReport,selectedReport,linkType})
    }

    updateSelectedReport(id:string,linkTitle:string=""){
        this.toggleReport(
            {
                reportID:`id`,
                linkUrl:"#",
                linkTitle: id,
                reportTitle: id,
                isSelected:false
            },
            linkTitle
        )
    }

    generateLinks(rootReport:string,level:number,level1=this.state?.level1,level2=this.state?.level2,level3=this.state?.level3){
        var reportLinks:IPowerBIReport[] = [];
        for(var i=1;i<=7;i++){
            var reportName ="";
            var isSelected = false;
            switch(level){
                case 1:
                    reportName = `${rootReport} Report-${i}`;
                    isSelected = i===level1;
                    break;
                case 2:
                    reportName = `${rootReport} Report-${level1}.${i}`;
                    isSelected = i===level2;
                    break;
                    
                case 3:
                    reportName = `${rootReport} Report-${level1}.${level2}.${i}`;
                    isSelected = i===level3 ;
                    break;
                case 4:
                    reportName = `${rootReport} Report-${level1}.${level2}.${level3}.${i}`;
                    // isSelected = reportName === this.state?.selectedLinkID4 ;
                    break;
            }
            reportLinks.push(
                {
                    reportID: `${i}`,
                    linkUrl:"#",
                    linkTitle: reportName,
                    reportTitle: reportName,
                    isSelected:isSelected
                }
            );
        }
        return reportLinks;
    }

    generateReportLinks(name:string,level:number,isReport:boolean=false,isSubLevel:boolean = false,){
        var reportLinks:IPowerBIReport[] = []
        for(var i=1;i<=7;i++){
            var reportName = "";
            if(isReport)
                var reportName = isSubLevel ? `${name} Report-${level}.${i}` : `${name} Report-${i}`;
            else
                var reportName = isSubLevel ? `${name}-${level}.${i}` : `${name}-${i}`;
            reportLinks.push(
                {
                    reportID:`${i}`,
                    linkUrl:"#",
                    linkTitle: reportName,
                    reportTitle: reportName,
                    isSelected:false
                }
            );
        }
        return reportLinks;
    }

    getAnnouncement(){
        const announcements:IAnnouncements[] = [];
        // announcements.push({
        //     title:"New Analytics Dashboard Launch",
        //     imgSrc:dashboard,
        //     date:"",
        //     text:"We’ve launched a brand-new Analytics Dashboard with real-time reporting, customizable views, and predictive analytics.",
        //     isAnnoucement:true
            
        // });
        announcements.push({
            title:"Monthly Analytics Report Release",
            imgSrc:report,
            date:"",
            text:"This month’s analytics report is now available. Review performance highlights, trends, and key insights to drive your next big decisions.",
            isAnnoucement:true
            
        });
        announcements.push({
            title:"Analytics Training Program ",
            imgSrc:training,
            date:"",
            text:"We’re launching a new training series to boost your analytics skills. From dashboards to forecasting, stay tuned for dates and enrollment info.",
            isAnnoucement:true
            
        })
    return announcements;
    }

    getEvents() {
        const events: IAnnouncements[] = [];
        
        // events.push({
        //     title: "Data Visualization Bootcamp",
        //     imgSrc: training, // Define this image separately
        //     date: "April 25, 2025",
        //     text: "Master the art of data storytelling! Join our bootcamp to learn advanced visualization techniques and create interactive dashboards.",
        //     isAnnoucement: false
        // });
    
        events.push({
            title: "Predictive Analytics Summit",
            imgSrc: event,
            date: "May 10, 2025",
            text: "Discover the future of analytics at our Predictive Analytics Summit. Hear from industry leaders.",
            isAnnoucement: false
        });
    
        events.push({
            title: "Data Strategy Roundtable",
            imgSrc: strategy,
            date: "May 17, 2025",
            text: "Collaborate with peers and strategists to shape your organization’s data roadmap.",
            isAnnoucement: false
        });
    
        return events;
    }
    
    toggleAnnouncement(title:string,isEvent:boolean){
        var annoucements:IAnnouncements[] = [];
        if(isEvent){
            annoucements = this.getEvents();
        }
        else{
            annoucements = this.getAnnouncement();
        }
        var selectedAnnouncement:IAnnouncements = annoucements?.filter(a=> a.title === title)[0] || [];
        this.setState({openAnnouncement:!this.state?.openAnnouncement,selectedAnnouncement})
    }

    render() {
        const {activeIndex,showReport,selectedReport,linkType,openAnnouncement} = this.state;
        return (
            <>
                <div className='report-link-container'>
                    <div >
                        <TabView activeIndex={activeIndex} onTabChange={(e) => this.setActiveIndex(e.index)}>
                            <TabPanel header={ReportLinkTabs.tab1}>
                                <div className="d-flex align-items-center justify-content-center">
                                        <ReportCardLinks
                                            key={`sublevel-1}`}
                                            customClass={`sublevel-1`}
                                            cardTitle={`${ReportLinkTabs.tab1}-1`}
                                            cardLinks={this.generateLinks(ReportLinkTabs?.tab1, 1)}
                                            onSelect={(id: string, reportID: string) => { this.setState({ level1: Number(reportID), level2: 1, level3: 1 }); } } isAnnouncements={false}                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2}`}
                                            customClass={`sublevel-2`}
                                            cardTitle={`${ReportLinkTabs.tab1}-2`}
                                            cardLinks={this.generateLinks(ReportLinkTabs?.tab1, 2)}
                                            onSelect={(id: string, reportID: string) => { this.setState({ level2: Number(reportID), level3: 1 }); return {}; } } isAnnouncements={false}                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2`}
                                            customClass={`sublevel-3`}
                                            cardTitle={`${ReportLinkTabs.tab1}-3`}
                                            cardLinks={this.generateLinks(ReportLinkTabs?.tab1, 3)}
                                            onSelect={(id: string, reportID: string) => { this.setState({ level3: Number(reportID) }); return {}; } } isAnnouncements={false}                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2}`}
                                            customClass={`sublevel-4`}
                                            cardTitle={`${ReportLinkTabs.tab1}-4`}
                                            cardLinks={this.generateLinks(ReportLinkTabs?.tab1, 4)}
                                        onSelect={(id: string, reportID: string) => { this.updateSelectedReport(id); return {}; } } isAnnouncements={false}                                        />
                                </div>
                            </TabPanel>
                            <TabPanel header={ReportLinkTabs.tab2}>
                                <div className="d-flex align-items-center justify-content-center">
                                    {[1, 2, 3,4].map((sublevel) => (
                                        <ReportCardLinks
                                            key={`sublevel-${sublevel}`}
                                            customClass={`sublevel-${sublevel}`}
                                            cardTitle={`${ReportLinkTabs.tab2}-${sublevel}`}
                                            cardLinks={this.generateReportLinks(ReportLinkTabs.tab2, sublevel, true)}
                                            onSelect={(title: string, reportID: string) => { this.updateSelectedReport(title); return {}; } } isAnnouncements={false}                                        />
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel header={ReportLinkTabs.tab3}>
                                <div className="d-flex align-items-center justify-content-center">
                                    {[1, 2, 3, 4].map((sublevel) => (
                                        <ReportCardLinks
                                            key={`sublevel-${sublevel}`}
                                            customClass={`sublevel-${sublevel}`}
                                            cardTitle={`${ReportLinkTabs.tab3}-${sublevel}`}
                                            cardLinks={this.generateReportLinks(ReportLinkTabs.tab3, sublevel, true)}
                                            onSelect={(title: string, reportID: string) => { this.updateSelectedReport(title); return {}; } } isAnnouncements={false}                                        />
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel header={ReportLinkTabs.tab4}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <ReportCardLinks
                                        key={`sublevel-${1}`}
                                        customClass={`sublevel-${1}`}
                                        cardTitle={`Announcements`}
                                        // cardLinks={this.generateReportLinks("Announcement", 1, false)}
                                        onSelect={(title: string, reportID: string) => { this.updateSelectedReport(title, Announcement); } }
                                        linkType={Announcement} isAnnouncements={true}  announcements={this.getAnnouncement()} 
                                        onAnnouncemenstSelected = {(title:string)=>{this.toggleAnnouncement(title,false)}}                                   
                                    />
                                    <ReportCardLinks
                                        key={`sublevel-${2}`}
                                        customClass={`sublevel-${2}`}
                                        cardTitle={`Events`}
                                        // cardLinks={this.generateReportLinks('Event', 1, false)}
                                        onSelect={(title: string, reportID: string) => { this.updateSelectedReport(title, Event); }  }
                                        linkType={Event} isAnnouncements={true}    announcements={this.getEvents()} 
                                        onAnnouncemenstSelected = {(title:string)=>{this.toggleAnnouncement(title,true)}}  
                                    />
                                    {[1, 2].map((sublevel) => (
                                        <ReportCardLinks
                                            key={`sublevel-${sublevel}`}
                                            customClass={`sublevel-${sublevel + 2}`}
                                            cardTitle={`${ReportLinkTabs.tab4}-${sublevel}`}
                                            cardLinks={this.generateReportLinks(ReportLinkTabs.tab4, sublevel, true)}
                                            onSelect={(title: string, reportID: string) => { this.updateSelectedReport(title); } } isAnnouncements={false}                                            
                                        />
                                    ))}
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                    { showReport && 
                        <PowerBIReportPopupComponent 
                            link={'#'} 
                            closePPT={()=>this.toggleReport({} as IPowerBIReport)} 
                            header={selectedReport?.reportTitle}
                            imageSrc={linkType === Announcement ? megaPhoneImg : linkType === Event ? eventImg : linechart}
                        />
                        
                    }
                    {openAnnouncement &&
                        <AnnouncementComponent 
                            announcement={this.state?.selectedAnnouncement} 
                            toggleAnnouncement={(title:string)=>this.toggleAnnouncement(title,false)}/>
                    }
                </div>
            </>
        );
    } 
}
