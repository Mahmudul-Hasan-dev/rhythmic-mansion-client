import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import {  Container } from 'react-bootstrap';



const Banner = () => {
    return (
     
             
                <Carousel>
                    <Carousel.Item>
                    <img src={banner1} width={'2000px'} height={'500px'}/>
                    <Carousel.Caption >
                        <h1 className="fs-1">Music for Everyone</h1>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={banner2} width={'1500px'} height={'500px'}/>
                        <Carousel.Caption>
                        <h1 className="fs-1 text-dark ">Music is Your World</h1>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={banner3} width={'1500px'} height={'500px'}/>
                        <Carousel.Caption>
                        <h1 className="fs-1 " >Start With a Note</h1>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            
      
    );
};

export default Banner;