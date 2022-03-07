import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});


export default function SimpleSlider(props) {
  
    return (
      <div className="header-content d-flex justify-content-center align-items-center p-5">
        <OwlCarousel className='container slider-wrapper owl-carousel' navText={ "<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>" } nav loop items={1} margin={10} style={{paddingTop:'5%'}}>
            <div className="row single-slider">
                <div className="col-md" data-aos="fade-up">
                    <div className="header-text" style={{paddingTop:'25%'}}>
                        <h1>Crafting Innovative Mobile and Software Solutions</h1>
                        <p>for startups &#38; enterprise that hogs the limelight.</p>
                        <a className="ta-button mt-2" href="#">Learn More</a>
                    </div>
                </div>
                <div className="col-md">
                    <div className="header-image" data-aos="fade-down">
                        <Image src="/images/development-slider.png" alt="header" className="img-fluid" width={540} height={443} />
                    </div>
                </div>
            </div>
            <div className="row single-slider">
                <div className="col-md" data-aos="fade-up">
                    <div className="header-text" style={{paddingTop:'25%'}}>
                        <h1>Developing Solutions For HealthCare</h1>
                        <p>ItProBit is a hub of talented, skilled, and experienced engineers who can work proficiently on advance digital technology.</p>
                        <a className="ta-button mt-2" href="#">Learn More</a>
                    </div>
                </div>
                <div className="col-md">
                    <div className="header-image" data-aos="fade-down">
                        <Image src="/images/new/mobile-app-development-services.png" alt="header" className="img-fluid" width={540} height={443} />
                    </div>
                </div>
            </div>
            <div className="row single-slider">
                <div className="col-md" data-aos="fade-up">
                    <div className="header-text" style={{paddingTop:'25%'}}>
                        <h1>Hire Dedicated Developers</h1>
                        <p>ItProBit is a hub of talented, skilled, and experienced engineers who can work proficiently on advance digital technology.</p>
                        <a className="ta-button mt-2" href="#">Learn More</a>
                    </div>
                </div>
                <div className="col-md">
                    <div className="header-image" data-aos="fade-down">
                        <Image src="/images/web_illustration.png" alt="header" className="img-fluid" width={540} height={443} />
                    </div>
                </div>
            </div>
            <div className="row single-slider">
                <div className="col-md" data-aos="fade-up">
                    <div className="header-text" style={{paddingTop:'25%'}}>
                        <h1>Build a Great Mobile Experience Faster </h1>
                        <p>We don&apos;t chase treands, we&apos;re recognized for creating the product that define them. We&apos;re not shy about sharing what some of the most trusted industry.</p>
                        <a className="ta-button mt-2" href="#">Learn More</a>
                    </div>
                </div>
                <div className="col-md">
                    <div className="header-image" data-aos="fade-down">
                        <Image src="/images/app_illusttration.png" alt="header" className="img-fluid" width={540} height={443} />
                    </div>
                </div>
            </div>
        </OwlCarousel>
      </div>
    );
}