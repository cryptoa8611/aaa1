import React from "react";
import Image from "next/image";
export const metadata = {
  title: "Giói thiệu - DACES",
  description: "Des",
  openGraph: {
    title: "Giói thiệu - DACES",
    description: "",
    image: "/path/to/service-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giói thiệu - DACES",
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
                <h2>Giới thiệu</h2>
              </div>
              <div className="col-12">
                <a href>Trang chủ</a>
                <a href>Giới thiệu</a>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* About Start */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-img position-relative overflow-hidden p-5">
                  <Image
                    className="img-fluid w-100"
                    src="/assets/img/about.jpg"
                    width={1280}
                    height={720}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="section-header text-left">
                  <p>Giới thiệu</p>
                  <h2>DACES - </h2>
                </div>
                <div className="about-text">
                  <p>
                    Daces là công ty tư vấn hàng đầu, chuyên cung cấp các giải
                    pháp thiết kế trong các lĩnh vực kiến trúc, công nghiệp, quy
                    hoạch và cơ sở hạ tầng. Chúng tôi cam kết mang đến các chiến
                    lược thiết kế sáng tạo và hiệu quả bằng cách tận dụng kiến
                    thức chuyên môn sâu rộng và công nghệ tiên tiến.
                  </p>
                  <p>
                    Đội ngũ chuyên gia của chúng tôi sử dụng phần mềm và công cụ
                    tiên tiến để nâng cao quy trình thiết kế và đảm bảo chất
                    lượng xuất sắc trong mọi dự án. Cam kết với tính bền vững và
                    thân thiện với môi trường, Daces hướng tới việc đáp ứng và
                    vượt qua mong đợi của khách hàng trong một thế giới đang
                    phát triển nhanh chóng.
                  </p>
                  <a className="btn" href>
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
    </div>
  );
}
