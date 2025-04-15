import React, { useState, useEffect } from 'react';
import './FilterCard.scss';
import { Card } from 'react-bootstrap';
import { IoMdRefresh } from 'react-icons/io';

export interface IFilterCardProps {
    headerTitle?: string;
    customClass?: string;
    backGroundImage?: React.ReactNode;
    isFilteredCardSelected: boolean;
}

const FilterCard: React.FC<IFilterCardProps> = ({
    headerTitle,
    backGroundImage,
    customClass,
    isFilteredCardSelected: propIsFilteredCardSelected
}) => {
    const [isFilteredCardSelected, setIsFilteredCardSelected] = useState(propIsFilteredCardSelected);

    useEffect(() => {
        if (propIsFilteredCardSelected !== isFilteredCardSelected) {
            setIsFilteredCardSelected(propIsFilteredCardSelected);
        }
    }, [propIsFilteredCardSelected]);

    const toggleFilterCardSelection = () => {
        setIsFilteredCardSelected(!isFilteredCardSelected);
    };

    return (
        <div
            className={` ${customClass ? customClass : ''} filtercard-container position-relative w-25`}
            onClick={toggleFilterCardSelection}
        >
            {backGroundImage && (
                <div
                    className={`filtercard-bg w-100 position-absolute ${isFilteredCardSelected ? 'card-selected' : 'card-unselected'}`}
                >
                    {backGroundImage}
                </div>
            )}
            <div className='w-100 position-absolute'>
                <Card className={`filter-card px-2`}>
                    {headerTitle && (
                        <Card.Header>
                            <div className='filtercard-header d-flex justify-content-between'>
                                <div>{headerTitle}</div>
                                {isFilteredCardSelected && (
                                    <div>
                                        <div className='reset-filter' onClick={toggleFilterCardSelection}>
                                            <IoMdRefresh />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card.Header>
                    )}
                    <Card.Body>
                        <div className='filtercard-body'></div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FilterCard;
