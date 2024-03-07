import React from "react";
import "./AboutPage.css";
import "./Contact.css";
import Form from "react-bootstrap/Form";

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
                <div className="col-lg-12 col-12">
                  <Form.Group
                    className="mb-3 "
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-grp"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="form-grp"
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12">
                  <Form.Label>My Services</Form.Label>
                  <Form.Select aria-label="Services" className="form-grp">
                    <option>Open this select services</option>
                    <option value="web">Web Designing</option>
                    <option value="graphic">Graphhic Designing</option>
                    <option value="both">Both</option>
                  </Form.Select>
                </div>
                <div className="col-lg-12 col-12">
                  <Form.Label>Select Any </Form.Label>
                  <div className="radio-btn">
                  {["Full Time", "Freelancing", "Part Time"].map((gender) => (
                    <div
                      key={`default-${gender}`}
                      className="mb-3 form-radio-btn"
                    >
                      <Form.Check
                        type="radio"
                        id={`default-${gender}`}
                        name="gender"
                        value={gender}
                        label={gender.charAt(0).toUpperCase() + gender.slice(1)} // Capitalize first letter
                      />
                    </div>
                  ))}
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                <div className="btn- mt-3">
                  <a to="/" className="btn-green">
                    Connect
                  </a>
                </div>
                </div>
              </div>
            </Form>
          </div>
          <div className="col-lg-5 col-12">
            <div className="padding-class">
              <div className="green-title">Contact Me ?</div>
              <h3 className="heading">I'm Isha Pancholi</h3>
              <p className="description">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
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
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
