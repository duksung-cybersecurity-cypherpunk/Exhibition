import React from 'react'
import "../../styles/ImageInfinitySlider.css"

const ImageInfinitySlider = ({view, imageList}) => {
    return (
        <div className="slider_container">
            <div className="slider_wrapper">
                <div className="slider_imgs">
                    {imageList.map((image, idx) => (
                        <img className={view ? "slider_mobile_img" : "slider_img"} src={require(`../images/${image}.png`)} key={idx}/>
                    ))}
                </div>
                <div className="slider_imgs_clone">
                    {imageList.map((image, idx) => (
                        <img className={view ? "slider_mobile_img" : "slider_img"} src={require(`../images/${image}.png`)} key={idx}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageInfinitySlider