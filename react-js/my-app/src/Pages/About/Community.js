import React from "react";
import "./community.css";
import "../../css/Footer.css";
import i1 from "../../images/boy-icon1.jpg";
import i2 from "../../images/girl-icon.png";
import i3 from "../../images/communiti1.png";

const Community = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="service-heading" style={{ marginTop: "2rem" }}>
        <span>Community</span>
        <h2 style={{ fontSize: "30px" }}>MEET OUR TEAM</h2>
        {/* </div> */}
        <div className="rows">
          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i1} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Jinansh Shah</h2>

                <div class="community-basic">
                  <div class="social">
                    <a href="https://www.instagram.com">
                      <i class="icon ion-social-instagram"></i>
                    </a>
                    <a href="https://web.whatsapp.com">
                      <i class="icon ion-social-whatsapp"></i>
                    </a>
                    <a href="https://twitter.com">
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com">
                      <i class="icon ion-social-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i2} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Disha Panjabi</h2>
                {/* <p>
                  {" "}
                  Lorem ipsum dolor sit amet adipisicing elit.Lorem ipsum dolor
                  sit amet adipisicing elit.Lorem ipsum dolor sit amet
                  adipisicing elit.{" "}
                </p> */}
                <div class="community-basic">
                  <div class="social">
                    <a href="./Footer.js">
                      <i class="icon ion-social-instagram"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-whatsapp"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-content">
              <div className="profile-image">
                <img src={i3} alt="first user" className="profile-imgs" />
              </div>
              <div className="desc">
                <h2>Sanket Akabari</h2>
                {/* <p>
                  {" "}
                  Lorem ipsum dolor sit amet adipisicing elit.Lorem ipsum dolor
                  sit amet adipisicing elit.Lorem ipsum dolor sit amet
                  adipisicing elit.{" "}
                </p> */}
                <div class="community-basic">
                  <div class="social">
                    <a href="./Footer.js">
                      <i class="icon ion-social-instagram"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-whatsapp"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-twitter"></i>
                    </a>
                    <a href="./Footer.js">
                      <i class="icon ion-social-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Community;
