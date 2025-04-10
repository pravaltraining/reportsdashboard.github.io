import * as React from 'react';
import './Footer.scss'
import PowerBIReportPopupComponent from '../../Common/ReportPopup/PowerBIReportPopup';


interface IFooterProps {
  startTour: any;
}

interface IFooterState {
  showReportPopup:boolean;
}

export default class FooterComponent extends React.Component<IFooterProps,IFooterState> {

  constructor(props: IFooterProps) {
    super(props);
    this.state = {
      showReportPopup:false
    };
  }

  toggleReportPopup(){
    this.setState({showReportPopup:!this.state.showReportPopup});
  }


  render() {
    return (
      <>
         <div className='footer-content  w-100 '>
          <div className=" d-flex align-items-center justify-content-between px-5">
            <div className='footer-links'>
              {/* <ul className=' ps-0'> 
                <li className='p-2 power-bi-report' onClick={()=>{this.toggleReportPopup()}}>
                  Power BI Report
                </li>
              </ul> */}
            </div>
            <div className='footer-links'>
              <ul className='ps-0'>
                <li className='p-1 tutorial-intro' onClick={()=>{this.props.startTour()}}>
                  Tutorial
                </li>
              </ul>
            </div>
          </div>
        </div>


       {this.state?.showReportPopup && <PowerBIReportPopupComponent 
          link={''} 
          closePPT={()=>{this.toggleReportPopup()}} 
          header={''}/>}
          
      </>

    );
  }
}
