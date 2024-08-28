import React from 'react'
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: "Trang chủ - DACES | Tư vấn thiết kế & Giải pháp BIM",
  description: "DACES cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...",
  openGraph: {
    title: 'Trang chủ - DACES | Tư vấn thiết kế & Giải pháp BIM',
    description: 'DACES cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...',
    url: 'htts://daces.com/vi/',
    siteName: '',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang chủ - DACES | Tư vấn thiết kế & Giải pháp BIM",
    description: "DACES cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...",
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
    'keywords': 'Tư vấn thiết kế, Giải pháp BIM, Đào tạo BIM, BIM xây dựng',
  },
};

const Schema =  {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DACES",
  "description": "Cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18L Đường 32B, Phường 10",
    "addressLocality": "Quận 6",
    "addressRegion": "TP. Hồ Chí Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "telephone": "+84 987 263 268",
  "email": "info@daces.com",
  "url": "https://www.daces.com/vi/",
  "openingHours": [
    "Mo-Su 08:00-22:00"
  ],
  "sameAs": "https://www.daces.com/vi/"
};

export default function TrangChu() {
  return (
    <div>
      <div>
        {/* Carousel Start */}
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to={0} className="active" />
            <li data-target="#carousel" data-slide-to={1} />
            <li data-target="#carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/assets/img/background01.jpg" alt="Carousel Image"
              width={2560}
              height={1440}/>
              <div className="carousel-caption">
                <p className="animated fadeInRight">Nhanh chóng -  Chất lượng</p>
                <h1 className="animated fadeInLeft">Xây dựng dân dụng</h1>
                <a className="btn animated fadeInUp" href="#">Xem thêm</a>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/assets/img/background02.jpg" alt="Carousel Image"
              width={2560}
              height={1440}/>
              <div className="carousel-caption">
                <p className="animated fadeInRight">Professional Builder</p>
                <h1 className="animated fadeInLeft">Xây dựng công nghiệp</h1>
                <a className="btn animated fadeInUp" href="#">Xem thêm</a>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/assets/img/background03.jpg" alt="Carousel Image"
              width={2560}
              height={1440}/>
              <div className="carousel-caption">
                <p className="animated fadeInRight">We Are Trusted</p>
                <h1 className="animated fadeInLeft">Xây dựng hạ tầng</h1>
                <a className="btn animated fadeInUp" href="#">Xem thêm</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Carousel End */}
        {/* Feature Start*/}
        <div className="feature wow fadeInUp" data-wow-delay="0.1s">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-worker" />
                  </div>
                  <div className="feature-text">
                    <h3>Tầm nhìn</h3>
                    <p>Dẫn đầu đổi mới và số hóa kiến trúc, hạ tầng.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-building" />
                  </div>
                  <div className="feature-text">
                    <h3>Sứ mệnh</h3>
                    <p>Cung cấp giải pháp thiết kế và số hóa hiệu quả, bền vững.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="feature-text">
                    <h3>Phương châm</h3>
                    <p>Sáng tạo không ngừng, Hợp tác bền vững, Tạo giá trị trường tồn.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End*/}
        {/* About Start */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-img position-relative overflow-hidden p-5">
                  <Image className="img-fluid w-100" src="/assets/img/about.jpg"
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
                    Daces là công ty tư vấn hàng đầu, chuyên cung cấp các giải pháp thiết kế trong các lĩnh vực kiến trúc, công nghiệp, quy hoạch và cơ sở hạ tầng. Chúng tôi cam kết mang đến các chiến lược thiết kế sáng tạo và hiệu quả bằng cách tận dụng kiến thức chuyên môn sâu rộng và công nghệ tiên tiến.
                  </p>
                  <p>
                    Đội ngũ chuyên gia của chúng tôi sử dụng phần mềm và công cụ tiên tiến để nâng cao quy trình thiết kế và đảm bảo chất lượng xuất sắc trong mọi dự án. Cam kết với tính bền vững và thân thiện với môi trường, Daces hướng tới việc đáp ứng và vượt qua mong đợi của khách hàng trong một thế giới đang phát triển nhanh chóng.
                  </p>
                  <a className="btn" href>Về chúng tôi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Fact Start */}
        <div className="fact">
          <div className="container-fluid">
            <div className="row counters">
              <div className="col-md-6 fact-left wow slideInLeft">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-worker" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">15</h2>
                      <p>Nhân sự</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-building" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">9</h2>
                      <p>Kinh nghiệm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 fact-right wow slideInRight">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-address" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">18</h2>
                      <p>Dự án</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-crane" />
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">8</h2>
                      <p>Đối tác</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact End */}
        {/* Service Start */}
        <div className="service">
          <div className="container">
            <div className="section-header text-center">
              <p>Tư vấn thiết kế</p>
              <h2>Dịch vụ của chúng tôi</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/design-consultancy/kien-truc.jpg" alt="Image" 
                    width={800}
                    height={800}
                    layout='responsive'/>
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Kiến trúc</h3>
                    <a className="btn" href="/assets/img/service-1.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/service-2.jpg" alt="Image"
                     width={800}
                     height={800}
                     layout='responsive'
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Kết cấu</h3>
                    <a className="btn" href="/assets/img/service-2.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/service-3.jpg" alt="Image"
                     width={800}
                     height={800}
                     layout="responsive" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Hệ thống M&E</h3>
                    <a className="btn" href="/assets/img/service-3.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/service-4.jpg" alt="Image"
                      width={800}
                      height={800}
                     layout="responsive" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Hạ tầng - Giao thông</h3>
                    <a className="btn" href="/assets/img/service-4.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/service-5.jpg" alt="Image"
                    width={800}
                    height={800}
                     layout="responsive" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Quy hoạch</h3>
                    <a className="btn" href="/assets/img/service-5.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item">
                  <div className="service-img">
                    <Image src="/assets/img/service-6.jpg" alt="Image"
                     width={800}
                     height={800}
                     layout="responsive" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Năng lượng</h3>
                    <a className="btn" href="/assets/img/service-6.jpg" data-lightbox="service">+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Video Start */}
        <div className="video wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
              <span />
            </button>
          </div>
        </div>
        <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>        
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video End */}
        {/* Solutions Start */}
        <div className="service">
          <div className="container">
            <div className="section-header text-center">
              <p>Giải pháp</p>
              <h2>BIM & Quản lý vận hành</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-1.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Tư vấn BIM</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-1.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-2.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Mô hình 3D/BIM Modeling</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-2.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-3.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Scan to BIM</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-3.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-4.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Phối hợp BIM</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-4.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-5.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>Khai thác vận hành BIM</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-5.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item">
                  <div className="service-img">
                    <img src="/assets/img/service-6.jpg" alt="Image" />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>AR/VR & Trực quan hóa 3D/360</h3>
                    <a
                      className="btn"
                      href="/assets/img/service-6.jpg"
                      data-lightbox="service"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* FAQs Start */}
        <div className="faqs">
          <div className="container">
            <div className="section-header text-center">
              <p>FAQs</p>
              <h2>Những câu hỏi thường gặp?</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div id="accordion-1">
                  <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseTwo"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseThree"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseFour"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="accordion-2">
                  <div className="card wow fadeInRight" data-wow-delay="0.1s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseSix"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInRight" data-wow-delay="0.2s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseSeven"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInRight" data-wow-delay="0.3s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseEight"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInRight" data-wow-delay="0.4s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseNine"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseNine"
                      className="collapse"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                  <div className="card wow fadeInRight" data-wow-delay="0.5s">
                    <div className="card-header">
                      <a
                        className="card-link collapsed"
                        data-toggle="collapse"
                        href="#collapseTen"
                      >
                        Lorem ipsum dolor sit amet?
                      </a>
                    </div>
                    <div
                      id="collapseTen"
                      className="collapse"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs End */}
      </div>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema)}} strategy="lazyOnload" />
    </div>
  )
}
