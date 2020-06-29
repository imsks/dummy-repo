import React from "react";

const GetInTouch = () => {
  return (
    <div data-scroll-index="0" className="get_in_tauch_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-90">
              <h3
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Get in Touch
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                Tour function information without cross action media value
                quickly maximize timely deliverables.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="touch_form">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="single_input wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="single_input wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="single_input wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      <input type="email" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="single_input wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".6s"
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        placeholder="Message"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="submit_btn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".7s"
                    >
                      <button className="boxed-btn3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
