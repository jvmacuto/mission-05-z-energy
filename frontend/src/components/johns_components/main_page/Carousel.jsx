import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"; // Import the custom CSS file

//import the images
import "../../../../public/img1.jpg";
import "../../../../public/img2.jpg";
import "../../../../public/img3.jpg";

function Carousel() {
  const img1 = "../../../../public/img1.jpg";
  const img2 = "../../../../public/img2.jpg";
  const img3 = "../../../../public/img3.jpg";
  return (
    <div className="carousel-container">
      <BootstrapCarousel indicators={true} interval={3000}>
        {" "}
        {/* 5000 milliseconds = 5 seconds */}
        <BootstrapCarousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <BootstrapCarousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <BootstrapCarousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <BootstrapCarousel.Caption>
            <h3>Third Slide Label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
}

export default Carousel;
