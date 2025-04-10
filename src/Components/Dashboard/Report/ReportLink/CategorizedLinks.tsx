import * as React from 'react';
import './CategorizedLinks.scss';
import { TabView, TabPanel } from 'primereact/tabview';
import { ReportLinkTabs } from '../../../../Common/Constant/Constant';
import ReportCardLinks from './ReportLink/ReportCardLinks';
import { IPowerBIReport } from '../../../../Interfaces/IPowerBIReport';
import PowerBIReportPopupComponent from '../../../Common/ReportPopup/PowerBIReportPopup';
import linechart from '../../../../../dist/assets/linechart.png'


interface ICategorizedLinksProps {
}

interface ICategorizedLinksState {
    activeIndex:number;
    showReport:boolean;
    selectedReport:IPowerBIReport;
    level1:number;
    level2:number;
    level3:number;
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
            // selectedLinkID4:"Marketing-1.1.1.1",
        };
    }

    setActiveIndex(index: number): void {
        this.setState({activeIndex:index});
    }

    toggleReport(selectedReport:IPowerBIReport = {} as IPowerBIReport){
        this.setState({showReport:!this.state?.showReport,selectedReport})
    }

    updateSelectedReport(id:string){
        this.toggleReport(
            {
                reportID:`id`,
                linkUrl:"#",
                linkTitle: id,
                reportTitle: id,
                isSelected:false
            }
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

    generateReportLinks(name:string,level:number,isSubLevel:boolean = false){
        var reportLinks:IPowerBIReport[] = []
        for(var i=1;i<=7;i++){
            var reportName = isSubLevel ? `${name} Report-${level}.${i}` : `${name} Report-${i}`;
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

    render() {
        const {activeIndex,showReport,selectedReport} = this.state;
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
                                            cardLinks= {this.generateLinks(ReportLinkTabs?.tab1,1)}
                                            onSelect={(id: string,reportID:string) => { console.log("level-1",reportID);this.setState({level1:Number(reportID),level2:1,level3:1})}}
                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2}`}
                                            customClass={`sublevel-2`}
                                            cardTitle={`${ReportLinkTabs.tab1}-2`}
                                            cardLinks= {this.generateLinks(ReportLinkTabs?.tab1,2)}
                                            onSelect={(id: string,reportID:string) => {  console.log("level-2",reportID);this.setState({level2:Number(reportID),level3:1}); return {}; }}
                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2`}
                                            customClass={`sublevel-3`}
                                            cardTitle={`${ReportLinkTabs.tab1}-3`}
                                            cardLinks= {this.generateLinks(ReportLinkTabs?.tab1,3)}
                                            onSelect={(id: string,reportID:string) => {  console.log("level-3",reportID);this.setState({level3:Number(reportID)}); return {}; }}
                                        />
                                        <ReportCardLinks
                                            key={`sublevel-2}`}
                                            customClass={`sublevel-4`}
                                            cardTitle={`${ReportLinkTabs.tab1}-4`}
                                            cardLinks= {this.generateLinks(ReportLinkTabs?.tab1,4)}
                                            onSelect={(id: string,reportID:string) => { this.updateSelectedReport(id); return {}; }}
                                        />
                                </div>
                            </TabPanel>
                            <TabPanel header={ReportLinkTabs.tab2}>
                                <div className="d-flex align-items-center justify-content-center">
                                    {[1, 2, 3,4].map((sublevel) => (
                                        <ReportCardLinks
                                            key={`sublevel-${sublevel}`}
                                            customClass={`sublevel-${sublevel}`}
                                            cardTitle={`${ReportLinkTabs.tab2}-${sublevel}`}
                                            cardLinks= {this.generateReportLinks(ReportLinkTabs.tab2,sublevel,true)}
                                            onSelect={(title:string,reportID:string) => { this.updateSelectedReport(title); return {}; }}
                                        />
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
                                            cardLinks= {this.generateReportLinks(ReportLinkTabs.tab3,sublevel,true)}
                                            onSelect={(title: string,reportID:string) => { this.updateSelectedReport(title); return {}; }}
                                        />
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel header={ReportLinkTabs.tab4}>
                                <div className="d-flex align-items-center justify-content-center">
                                    {[1, 2, 3, 4].map((sublevel) => (
                                        <ReportCardLinks
                                            key={`sublevel-${sublevel}`}
                                            customClass={`sublevel-${sublevel}`}
                                            cardTitle={`${ReportLinkTabs.tab4}-${sublevel}`}
                                            cardLinks= {this.generateReportLinks(ReportLinkTabs.tab4,sublevel,true)}
                                            onSelect={(title: string,reportID:string) => { this.updateSelectedReport(title) }}
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
                            imageSrc={linechart}
                        />
                        
                    }
                </div>
            </>
        );
    } 
}
