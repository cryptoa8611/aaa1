import React from "react";
export const metadata = {
    title: "Liên hệ - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
    description: "Des",
    openGraph: {
      title: "Liên hệ - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
      description: "",
      image: "/path/to/service-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: "Liên hệ - DACES | Hotline: (+84) 987 263 268 | info@daces.com",
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
                <h2>Liên hệ</h2>
              </div>
              <div className="col-12">
                <a href>Trang chủ</a>
                <a href>Liên hệ</a>
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
                      <h2>CÔNG TY TƯ VẤN THIẾT KẾ VÀ GIẢI PHÁP DACES</h2>
                      <p>123 Quận 06, TP. Hồ Chí Minh</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-call" />
                    <div className="contact-text">
                      <h2>Điện thoại</h2>
                      <p>(+84) 987 263 268</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-send-mail" />
                    <div className="contact-text">
                      <h2>Email</h2>
                      <p>info@daces.com</p>
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
                        placeholder="Tên"
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
                        placeholder="Email"
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
                        placeholder="Tiêu đề"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Nội dung"
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
                        Gửi yêu cầu!
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
