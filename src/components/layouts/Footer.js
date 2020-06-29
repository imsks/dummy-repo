import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-3">
              <div
                class="footer_logo wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <a href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-9">
              <div class="menu_links">
                <ul>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay=".6s"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay=".8s"
                    >
                      Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInDown"
                      data-wow-duration="1s"
                      data-wow-delay="1.1s"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-12">
              <div class="socail_links">
                <ul>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      {" "}
                      <i class="fa fa-facebook"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      {" "}
                      <i class="fa fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      {" "}
                      <i class="fa fa-instagram"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dummy_url"
                      class="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".6s"
                    >
                      {" "}
                      <i class="fa fa-google-plus"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right_text">
        <div class="container">
          <div class="footer_border"></div>
          <div class="row">
            <div class="col-xl-12">
              <p
                class="copy_right text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.3s"
              >
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made in React by
                <a
                  href="https://sachinshukla.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sachin Kr. Shukla
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
