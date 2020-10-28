
import React from 'react';
import Slider from "react-slick";
export default function Slide(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear"
    };
    return (
        <div className="box-slide">
            <Slider {...settings}>
                <div className="video-wrapper item px-1 slide-img">
                    <iframe width={560} height={315} src={props.product.video} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="video-youtube" allowFullScreen />
                </div>
                <div className="slide-img">
                <img src={props.product.imgBig1} alt="" className="img-fluid" />
                </div>
                <div className="slide-img">
                <img src={props.product.imgBig2} alt="" className="img-fluid" />
                </div>
                <div className="slide-img">
                <img src={props.product.imgBig3} alt="" className="img-fluid" />
                </div>
                <div className="slide-img">
                <img src={props.product.imgBig4} alt="" className="img-fluid" />
                </div>
            </Slider>
        </div>
    );
}