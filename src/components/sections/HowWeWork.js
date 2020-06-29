import React from "react";

const HowWeWork = () => {
  return (
    <div className="how_we_work_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="work_info">
              <div className="section_title">
                <h3
                  className="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  How we work
                </h3>
                <p
                  className="mid_text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  “Function information without cross action media value.
                </p>
                <p
                  className="last_p wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  Efficiently unleash cross-media tour function information
                  without cross action media value. Quickly maximize timely
                  deliverables for real-time schemas.
                </p>
              </div>
              <div className="video_watch d-flex align-items-center">
                <div
                  className="play_btn wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <a
                    href="https://www.youtube.com/watch?v=D7tF-cY2M9o"
                    className="video_icon popup-video"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
                <span
                  className="wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".7s"
                >
                  Watch Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
