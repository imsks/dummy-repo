import React from "react";

const Slider = () => {
  return (
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center slider_bg_1 overlay">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-10 col-md-10">
              <div className="slider_text">
                <h3
                  className="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  Startup you can build a website online using the Bootstrap
                  builder.
                </h3>
                <a
                  className="boxed-btn3 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                  href="portfolio.html"
                >
                  Visit Our Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
