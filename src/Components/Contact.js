import React from 'react'
import './AboutPage.css'
import './Contact.css'
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div className="dark-bg contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="about-heading text-center">
              <p>Feel free to contact me anytimes</p>
              <h3>Get in Touch</h3>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            
              <Form>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Select aria-label="Services">
                    <option>Open this select services</option>
                    <option value="web">Web Designing</option>
                    <option value="graphic">Graphhic Designing</option>
                    <option value="both">Both</option>
                  </Form.Select>
                </div>
                <div className="col-lg-6 col-12">
                  {["radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                      />
                    </div>
                  ))}
                </div>

                
            </div>
              </Form>
          </div>
          <div className="col-lg-5 col-12">
            <div className="padding-class">
              <div className="green-title">Who am i?</div>
              <h3 className="heading">
                I'm Isha Pancholi, a visual UX/UI Designer and Frontend Web
                Developer
              </h3>
              <p className="description">
                I am a Designer and have been building noteworthy UX/UI designs
                and websites for years, which comply with the latest design
                trends. I help convert a vision and an idea into meaningful and
                useful products. Having a sharp eye for product evolution helps
                me prioritize tasks, iterate fast and deliver faster.
              </p>
              <hr className="seperator-hr" />
              <ul className="no-list details-my">
                <li>
                  <span>Name:</span> Isha Pancholi
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto: inp2202@gmail.com"> inp2202@gmail.com</a>
                </li>
                <li>
                  <span>Age:</span> 22
                </li>
                <li>
                  <span>From:</span> Vadodara, Gujarat, India
                </li>
              </ul>
              <div className="bottom-prt">
                <div className="btn-sec">
                  <a to="/" className="btn-green">
                    Download CV
                  </a>
                </div>
                <div className="social-media">
                  <ul className="no-list details-my">
                    <li>
                      <a to="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
