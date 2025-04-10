import * as React from 'react';
import './FilterCard.scss';
import { Card } from 'react-bootstrap';
import { IoMdRefresh } from 'react-icons/io';

export interface IFilterCardProps {
    headerTitle?:string;
    customClass?:string;
    backGroundImage?: React.ReactNode; 
    isFilteredCardSelected:boolean;
}

export interface IFilterCardState {
    isFilteredCardSelected:boolean;
}

export class FilterCard extends React.Component<IFilterCardProps, IFilterCardState> {

    constructor(props: IFilterCardProps) {
        super(props);
        this.state = {
            isFilteredCardSelected:this.props?.isFilteredCardSelected
        }
    }

    componentDidUpdate(prevProps: Readonly<IFilterCardProps>, prevState: Readonly<IFilterCardState>, snapshot?: any): void {
        if(prevProps.isFilteredCardSelected !== this.props.isFilteredCardSelected){
            this.setState({
                isFilteredCardSelected:this.props.isFilteredCardSelected});
            }
    }

    toggleFilterCardSelection = () => {
        this.setState({
            isFilteredCardSelected:!this.state.isFilteredCardSelected
        });
    }


    render() {
        const {headerTitle,backGroundImage,customClass} = this.props;
        const {isFilteredCardSelected} = this.state;
        return (
            <>
                <div className={` ${customClass ? customClass : ''} filtercard-container position-relative w-25`} onClick={this.toggleFilterCardSelection}>
                    {backGroundImage && <div className={`filtercard-bg  w-100 position-absolute ${isFilteredCardSelected ? 'card-selected':'card-unselected'}`}>
                        {backGroundImage}
                    </div> }
                    <div className='w-100 position-absolute'>
                        <Card className= {` filter-card px-2  `}>
                            {headerTitle && <Card.Header>
                                <div className='filtercard-header d-flex justify-content-between'>
                                    <div>
                                        {headerTitle}
                                    </div>
                                    {isFilteredCardSelected && <div>
                                        <div className='reset-filter' onClick={this.toggleFilterCardSelection}>
                                            <IoMdRefresh />
                                        </div>
                                    </div>}
                                    
                                </div>
                                
                            </Card.Header>}
                            <Card.Body>
                                <div className='filtercard-body'>

                                </div>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}