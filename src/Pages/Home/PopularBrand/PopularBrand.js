import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const PopularBrand = () => {


    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 5 },
    };
    
    const items = [
        <div className="item" style={{width:"200px"}} data-value="1"><img src="https://www.carlogos.org/car-logos/cadillac-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="1"><img src="https://www.carlogos.org/car-logos/subaru-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="1"><img src="https://www.carlogos.org/car-logos/jeep-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="1"><img src="https://www.carlogos.org/car-logos/aston-martin-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/mclaren-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/peterbilt-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/navistar-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/isuzu-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/audi-sport-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/suffolk-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/freightliner-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/mansory-logo.png" alt="" /></div>,
        <div className="item" style={{width:"200px"}} data-value="2"><img src="https://www.carlogos.org/car-logos/rezvani-logo.png" alt="" /></div>,
    ];

    return (
        <div> 
            <h2 className="text-white fw-bold container py-5 mb-0">Available Brands</h2>
            <div className='container py-5 mb-3 bg-white'>
                <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                />
            </div>
        </div>
        
    );
};

export default PopularBrand;