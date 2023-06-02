import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../imgs/b17.jpg'
import img2 from '../../imgs/b7.jpg'
import img3 from '../../imgs/b19.jpg'
function Slider()
{
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img style={{height:'600px'}} className="d-block w-100" src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'600px'}} className="d-block w-100" src={img2} alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'600px'}} className="d-block w-100" src={img3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Slider;