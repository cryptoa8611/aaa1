import React from "react";

export const metadata = {
  title: "Contact - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
  description: "Des",
  openGraph: {
    title: "Contact - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
    description: "",
    image: "/path/to/service-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
    description: "",
    image: "/path/to/service-image.jpg",
  },
};

export default function () {
  return (
    <div>
      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Contact Us</h2>
              </div>
              <div className="col-12">
                <a href>Home</a>
                <a href>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="contact wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="flaticon-address" />
                    <div className="contact-text">
                      <h2>Location</h2>
                      <p>123 Street, New York, USA</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-call" />
                    <div className="contact-text">
                      <h2>Phone</h2>
                      <p>+012 345 67890</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-send-mail" />
                    <div className="contact-text">
                      <h2>Email</h2>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>
    </div>
  );
}
