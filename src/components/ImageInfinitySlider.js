import React from 'react'
import "../styles/ImageInfinitySlider.css"

const ImageInfinitySlider = ({view, imageList}) => {
    return (
        <div className="slider_container">
            <div className="slider_wrapper">
                <div className="slider_imgs">
                    {imageList.map((image, idx) => (
                        <img className={view ? "slider_mobile_img" : "slider_img"} src={require(`../assets/images/${image}.png`)} key={idx} alt="mainSlideImage1"/>
                    ))}
                </div>
                <div className="slider_imgs_clone">
                    {imageList.map((image, idx) => (
                        <img className={view ? "slider_mobile_img" : "slider_img"} src={require(`../assets/images/${image}.png`)} key={idx} alt="mainSlideImage2"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageInfinitySlider