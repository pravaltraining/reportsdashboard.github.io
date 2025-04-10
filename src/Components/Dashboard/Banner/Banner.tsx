import * as React from 'react';
import './Banner.scss';

export interface IBannerItem {
    imgSrc: string;
    text: string;
    id:string;
    customClass?:string;
}

interface IBannerProps {
    bannerItems: IBannerItem[];
    handleBannerClick: (id:string) => void;

}

export default class BannerComponent extends React.Component<IBannerProps> {
    
    render() {
        const { bannerItems } = this.props;

        return (
            <>
                <div className="banner-container d-flex flex-column justify-content-center align-items-center">
                    <div className="banner-bg-img w-100">
                    </div>
                    <div className="banner-empty w-100">

                    </div>
                    <div className="banners d-flex align-items-center justify-content-center gap-4 p-3">
                        {bannerItems && bannerItems.map((item, index) => (
                            <div key={index} className={`banner-item rounded-3 ${item?.customClass ? item?.customClass : ''}`} onClick={() => {this.props?.handleBannerClick(item?.id)}}> 
                                <div className="img-container">
                                    <img src={item.imgSrc} alt={item.text} />
                                </div>
                                <div className="img-text fw-bold pt-1">
                                    {item.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}