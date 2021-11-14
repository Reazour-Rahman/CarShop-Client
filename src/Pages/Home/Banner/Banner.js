import React from 'react';
import image from '../../../images/banner.jpg'
import image1 from '../../../images/banner1.jpg'
import image2 from '../../../images/banner2.jpg'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={image} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>STEEDA</h5>
                    <p>STEEDA combines luxury with performance across the full line of models including luxury sedans, SUVs, coupes, roadsters, convertibles & more.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={image1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Mercedes-Benz</h5>
                    <p>Mercedes-Benz combines luxury with performance across the full line of models including luxury sedans, SUVs, coupes, roadsters, convertibles & more.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={image2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Mazda MX-5.</h5>
                    <p>Mazda MX-5 is a Sport car production car brand in the world.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Banner;