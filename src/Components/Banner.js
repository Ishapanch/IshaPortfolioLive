import React from "react";
import './Banner.css'

export default function Banner() {
  return (
    <div className="">
        <div className="bg-image">
      <div id="myPageContent" className="container-fluid">
        <section id="home">
          <div id="textSlider" className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol">
              <p>Isha </p>
              <p>Pancholi</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
              <div className="scroller">
                <div className="inner">
                  <p>Web Designer</p>
                  <p>Frontend Developer</p>
                  <p>Freelancer</p>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="fixed-wrapper">
      <div className="fixed-block block-left">
        <ul className="list-unstyled languages-list">
          <li><a href="#0"><span className="single-language">ENG</span></a></li>
          <li><a href="#0"><span className="single-language">JAP</span></a></li>
        </ul>
      </div>
      <div className="fixed-block block-right">
        <ul className="list-unstyled social-icons">
          <li><a href="#0"><i className="fab fa-twitter"></i></a></li>          
          <li><a href="#0"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#0"><i className="fab fa-github"></i></a></li>
          <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
      </div>
    </div>
  );
}
