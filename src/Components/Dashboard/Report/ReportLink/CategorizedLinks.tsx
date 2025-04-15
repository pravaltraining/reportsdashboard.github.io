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
import { useState } from 'react';

const CategorizedLinksComponent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showReport, setShowReport] = useState(false);
    const [selectedReport, setSelectedReport] = useState<IPowerBIReport>({} as IPowerBIReport);
    const [level1, setLevel1] = useState(1);
    const [level2, setLevel2] = useState(1);
    const [level3, setLevel3] = useState(1);
    const [linkType, setLinkType] = useState('');
    const [openAnnouncement, setOpenAnnouncement] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<IAnnouncements>({} as IAnnouncements);

    const setActiveTab = (index: number): void => {
        setActiveIndex(index);
    };

    const toggleReport = (selectedReport: IPowerBIReport = {} as IPowerBIReport, linkType: string = ""): void => {
        setShowReport(!showReport);
        setSelectedReport(selectedReport);
        setLinkType(linkType);
    };

    const updateSelectedReport = (id: string, linkTitle: string = ""): void => {
        toggleReport(
            {
                reportID: `id`,
                linkUrl: "#",
                linkTitle: id,
                reportTitle: id,
                isSelected: false
            },
            linkTitle
        );
    };

    const generateLinks = (rootReport: string, level: number) => {
        const reportLinks: IPowerBIReport[] = [];
        for (let i = 1; i <= 7; i++) {
            let reportName = "";
            let isSelected = false;
            switch (level) {
                case 1:
                    reportName = `${rootReport} Report-${i}`;
                    isSelected = i === level1;
                    break;
                case 2:
                    reportName = `${rootReport} Report-${level1}.${i}`;
                    isSelected = i === level2;
                    break;
                case 3:
                    reportName = `${rootReport} Report-${level1}.${level2}.${i}`;
                    isSelected = i === level3;
                    break;
                case 4:
                    reportName = `${rootReport} Report-${level1}.${level2}.${level3}.${i}`;
                    break;
            }
            reportLinks.push(
                {
                    reportID: `${i}`,
                    linkUrl: "#",
                    linkTitle: reportName,
                    reportTitle: reportName,
                    isSelected: isSelected
                }
            );
        }
        return reportLinks;
    };

    const generateReportLinks = (name: string, level: number, isReport: boolean = false, isSubLevel: boolean = false) => {
        const reportLinks: IPowerBIReport[] = [];
        for (let i = 1; i <= 7; i++) {
            let reportName = "";
            if (isReport) {
                reportName = isSubLevel ? `${name} Report-${level}.${i}` : `${name} Report-${i}`;
            } else {
                reportName = isSubLevel ? `${name}-${level}.${i}` : `${name}-${i}`;
            }
            reportLinks.push(
                {
                    reportID: `${i}`,
                    linkUrl: "#",
                    linkTitle: reportName,
                    reportTitle: reportName,
                    isSelected: false
                }
            );
        }
        return reportLinks;
    };

    const getAnnouncement = () => {
        const announcements: IAnnouncements[] = [];
        announcements.push({
            title: "Monthly Analytics Report Release",
            imgSrc: report,
            date: "",
            text: "This month’s analytics report is now available. Review performance highlights, trends, and key insights to drive your next big decisions.",
            isAnnoucement: true
        });
        announcements.push({
            title: "Analytics Training Program ",
            imgSrc: training,
            date: "",
            text: "We’re launching a new training series to boost your analytics skills. From dashboards to forecasting, stay tuned for dates and enrollment info.",
            isAnnoucement: true
        });
        return announcements;
    };

    const getEvents = () => {
        const events: IAnnouncements[] = [];
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
    };

    const toggleAnnouncement = (title: string, isEvent: boolean) => {
        let announcements: IAnnouncements[] = [];
        if (isEvent) {
            announcements = getEvents();
        } else {
            announcements = getAnnouncement();
        }
        const selectedAnnouncement = announcements.filter(a => a.title === title)[0] || {} as IAnnouncements;
        setOpenAnnouncement(!openAnnouncement);
        setSelectedAnnouncement(selectedAnnouncement);
    };

    return (
        <>
            <div className='report-link-container'>
                <div>
                    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveTab(e.index)}>
                        <TabPanel header={ReportLinkTabs.tab1}>
                            <div className="d-flex align-items-center justify-content-center">
                                <ReportCardLinks
                                    key={`sublevel-1}`}
                                    customClass={`sublevel-1`}
                                    cardTitle={`${ReportLinkTabs.tab1}-1`}
                                    cardLinks={generateLinks(ReportLinkTabs?.tab1, 1)}
                                    onSelect={(id: string, reportID: string) => { setLevel1(Number(reportID)); setLevel2(1); setLevel3(1); }} isAnnouncements={false} />
                                <ReportCardLinks
                                    key={`sublevel-2}`}
                                    customClass={`sublevel-2`}
                                    cardTitle={`${ReportLinkTabs.tab1}-2`}
                                    cardLinks={generateLinks(ReportLinkTabs?.tab1, 2)}
                                    onSelect={(id: string, reportID: string) => { setLevel2(Number(reportID)); setLevel3(1); }} isAnnouncements={false} />
                                <ReportCardLinks
                                    key={`sublevel-3`}
                                    customClass={`sublevel-3`}
                                    cardTitle={`${ReportLinkTabs.tab1}-3`}
                                    cardLinks={generateLinks(ReportLinkTabs?.tab1, 3)}
                                    onSelect={(id: string, reportID: string) => { setLevel3(Number(reportID)); }} isAnnouncements={false} />
                                <ReportCardLinks
                                    key={`sublevel-4}`}
                                    customClass={`sublevel-4`}
                                    cardTitle={`${ReportLinkTabs.tab1}-4`}
                                    cardLinks={generateLinks(ReportLinkTabs?.tab1, 4)}
                                    onSelect={(id: string, reportID: string) => { updateSelectedReport(id); }} isAnnouncements={false} />
                            </div>
                        </TabPanel>
                        <TabPanel header={ReportLinkTabs.tab2}>
                            <div className="d-flex align-items-center justify-content-center">
                                {[1, 2, 3, 4].map((sublevel) => (
                                    <ReportCardLinks
                                        key={`sublevel-${sublevel}`}
                                        customClass={`sublevel-${sublevel}`}
                                        cardTitle={`${ReportLinkTabs.tab2}-${sublevel}`}
                                        cardLinks={generateReportLinks(ReportLinkTabs.tab2, sublevel, true)}
                                        onSelect={(title: string, reportID: string) => { updateSelectedReport(title); }} isAnnouncements={false} />
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
                                        cardLinks={generateReportLinks(ReportLinkTabs.tab3, sublevel, true)}
                                        onSelect={(title: string, reportID: string) => { updateSelectedReport(title); }} isAnnouncements={false} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel header={ReportLinkTabs.tab4}>
                            <div className="d-flex align-items-center justify-content-center">
                                <ReportCardLinks
                                    key={`sublevel-${1}`}
                                    customClass={`sublevel-${1}`}
                                    cardTitle={`Announcements`}
                                    onSelect={(title: string, reportID: string) => toggleAnnouncement(title, false)}
                                    announcements={getAnnouncement()}
                                    isAnnouncements={true}
                                    onAnnouncemenstSelected = {(title:string ) => { toggleAnnouncement(title, false); }}
                                />
                                 <ReportCardLinks
                                    key={`sublevel-1`}
                                    customClass={`sublevel-1`}
                                    cardTitle={`Events`}
                                    onSelect={(title: string, reportID: string) => toggleAnnouncement(title, true)}
                                    announcements={getEvents()}
                                    isAnnouncements={true}
                                    onAnnouncemenstSelected = {(title) => { toggleAnnouncement(title, true); }}
                                />
                                {[1, 2].map((sublevel) => (
                                    <ReportCardLinks
                                        key={`sublevel-${sublevel}`}
                                        customClass={`sublevel-${sublevel+2}`}
                                        cardTitle={`${ReportLinkTabs.tab4}-${sublevel}`}
                                        cardLinks={generateReportLinks(ReportLinkTabs.tab4, sublevel, true)}
                                        onSelect={(title: string, reportID: string) => { updateSelectedReport(title); }} isAnnouncements={false} />
                                ))}
                            </div>
                        </TabPanel>
                    </TabView>
                    { showReport && 
                        <PowerBIReportPopupComponent 
                            link={'#'} 
                            closePPT={()=>toggleReport({} as IPowerBIReport)} 
                            header={selectedReport?.reportTitle}
                            imageSrc={linkType === Announcement ? megaPhoneImg : linkType === Event ? eventImg : linechart}
                        />
                        
                    }
                    {openAnnouncement  && <AnnouncementComponent announcement={selectedAnnouncement} toggleAnnouncement={(title:string)=>toggleAnnouncement(title,false)} />}
                </div>
            </div>
        </>
    );
};

export default CategorizedLinksComponent;
