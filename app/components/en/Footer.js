import React from "react";

export default function FooterEn() {
  return (
    <div>
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-contact">
                <h2>Contact</h2>
                <p>
                  <i className="fa fa-map-marker-alt"></i>18L Đường 32B, Phường 10,
                  Quận 6, Tp. Hồ Chí Minh
                </p>
                <p>
                  <i className="fa fa-phone-alt"></i>(+84) 987 263 268
                </p>
                <p>
                  <i className="fa fa-envelope"></i>info@dvcons.vn
                </p>
                <div className="footer-social">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Lĩnh vực hoạt động</h2>
                <a href="">Tư vấn thiết kế</a>
                <a href="">Xây dựng dân dụng</a>
                <a href="">Xây dựng công nghiệp</a>
                <a href="">Xây dựng hạ tầng</a>
                <a href="">Tư vấn giám sát</a>
                <a href="">Thương mại</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Liên kết nhanh</h2>
                <a href="">Giới thiệu</a>
                <a href="">Dự án</a>
                <a href="">Tuyển dụng</a>
                <a href="">Tin tức</a>
                <a href="">Liên hệ</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="newsletter">
                <h2>DVCons</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </p>
                <div className="form">
                  <input className="form-control" placeholder="Email here" />
                  <button className="btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-menu">
          <div className="f-menu">
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy;{" "}
                <a href="#">Công ty thiết kế và đầu tư xây dựng DVCons</a>, All
                Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
