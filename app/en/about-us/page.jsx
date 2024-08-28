import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us | DACES",
  description: "DACES offers top-tier BIM Consultancy Services, providing expert guidance and innovative BIM solutions to optimize your building projects. Contact us today to enhance your design and construction processes.",
  openGraph: {
    title: 'About Us | DACES',
    description: 'DACES offers top-tier BIM Consultancy Services, providing expert guidance and innovative BIM solutions to optimize your building projects. Contact us today to enhance your design and construction processes.',
    url: 'https://dacescorp.com/en/consultancy-and-design/architecture-interior/',
    siteName: '',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | DACES",
    description: "DACES offers top-tier BIM Consultancy Services, providing expert guidance and innovative BIM solutions to optimize your building projects. Contact us today to enhance your design and construction processes.",
    images: [
      {
        url: 'https://daces.com/abc.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: 'https://nextjs.org',
  },
  other: {
    'keywords': 'BIM Consulting, BIM Integration, BIM Strategy Development, BIM Implementation, Building Information Modeling Services',
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
                <h2>About Us</h2>
              </div>
              <div className="col-12">
                <a href>Home</a>
                <a href>About Us</a>
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
