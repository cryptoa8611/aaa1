import React from "react";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "DACES | Consultancy & Design | Bim Solutions",
  description: "DACES provides expert Consultancy and Design services, specializing in architecture, structure, infrastructure, M&E systems,... and BIM Solutions. Our innovative approach and cutting-edge technology ensure comprehensive, tailored solutions for every project",
  openGraph: {
    title: 'DACES | Consultancy & Design | Bim Solutions',
    description: 'DACES provides expert Consultancy and Design services, specializing in architecture, structure, infrastructure, M&E systems,... and BIM Solutions. Our innovative approach and cutting-edge technology ensure comprehensive, tailored solutions for every project',
    url: 'htts://dacescorp.com/en/',
    siteName: '',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "DACES | Consultancy & Design | Bim Solutions",
    description: "DACES provides expert Consultancy and Design services, specializing in architecture, structure, infrastructure, M&E systems,... and BIM Solutions. Our innovative approach and cutting-edge technology ensure comprehensive, tailored solutions for every project",
    images: [
      {
        url: 'https://daces.com/abc.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: 'https://dacescorp.com/en/',
  },
  other: {
    'keywords': 'DACES, Consultancy & Design, BIM Solutions, Training, BIM',
  },
};

const Schema =  {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DACES",
  "logo": "https://dacescorp.com/assets/img/daces-logo.png",
  "description": "DACES provides expert Consultancy and Design services, specializing in architecture, structure, infrastructure, M&E systems,... and BIM Solutions. Our innovative approach and cutting-edge technology ensure comprehensive, tailored solutions for every project",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18L Đường 32B, Phường 10",
    "addressLocality": "Quận 6",
    "addressRegion": "TP. Hồ Chí Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "telephone": "+84 987 263 268",
  "email": "info@dacescorp.com",
  "url": "https://www.dacescorp.com/en/",
  "openingHours": [
    "Mo-Su 08:00-22:00"
  ],
  "sameAs": ["https://www.facebook.com/dacescorp",
              "https://www.linkedin.com/company/dacescorp",
              "https://twitter.com/dacescorp",
              "https://www.youtube.com/c/dacescorp"
          ]
};

export default function Home() {
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
              <Image
                src="/assets/img/background01.jpg"
                alt="Mô tả hình ảnh"
                width={3840}
                height={2160}
              />
              <div className="carousel-caption">
                <p className="animated fadeInRight">Nhanh chóng - Chất lượng</p>
                <h1 className="animated fadeInLeft">Xây dựng dân dụng</h1>
                <a className="btn animated fadeInUp" href="#">
                  Xem thêm
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/img/background02.jpg"
                alt="Mô tả hình ảnh"
                width={3840}
                height={2160}
              />
              <div className="carousel-caption">
                <p className="animated fadeInRight">Professional Builder</p>
                <h1 className="animated fadeInLeft">Xây dựng công nghiệp</h1>
                <a className="btn animated fadeInUp" href="#">
                  Xem thêm
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/img/background03.jpg"
                alt="Mô tả hình ảnh"
                width={3840}
                height={2160}
              />
              <div className="carousel-caption">
                <p className="animated fadeInRight">We Are Trusted</p>
                <h1 className="animated fadeInLeft">Xây dựng hạ tầng</h1>
                <a className="btn animated fadeInUp" href="#">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
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
                    <h3>Vision</h3>
                    <p>
                      Becoming a leading corporation in technical and technology
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-building" />
                  </div>
                  <div className="feature-text">
                    <h3>Mission</h3>
                    <p>
                      Our mission is to strive for excellence to offer customers
                      the best products and services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="feature-text">
                    <h3>Motto</h3>
                    <p>Live kindly, Work fairly, Leave behind legacy</p>
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
              <div className="col-lg-5 col-md-6">
                <div className="about-img position-relative overflow-hidden p-5">
                  <img
                    className="img-fluid w-100"
                    src="/assets/img/about.jpg"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                  <p>About Us</p>
                  <h2>Daces - Consultancy & Design - Bim SolutionsWe build. You prosper.</h2>
                </div>
                <div className="about-text">
                  <p>
                    Daces is a leading consulting firm specializing in design
                    solutions across architecture, industrial, planning, and
                    infrastructure sectors. We are dedicated to delivering
                    innovative and effective design strategies by leveraging our
                    deep industry expertise and advanced technology. Our team of
                    experts utilizes cutting-edge software and tools to enhance
                    design processes and ensure exceptional quality in every
                    project. Committed to sustainability and environmental
                    friendliness, Daces aims to meet and exceed client
                    expectations in a rapidly evolving world.
                  </p>
                  <a className="btn" href>
                    See more!
                  </a>
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
              <p>Consultantcy & Design</p>
              <h2>Create valuable products "Made in Vietnam"</h2>
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
                    <h3>Architecture & Interior</h3>
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
                    <h3>Structure</h3>
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
                    <h3>Traffic Infrastructure</h3>
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
                    <h3>MEP System</h3>
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
                    <h3>Fire Protection Design</h3>
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
                    <h3>Energy</h3>
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
                    <h3>Urban Planning</h3>
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

        {/* Video Start */}
        <div className="video wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <button
              type="button"
              className="btn-play"
              data-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src
                    id="video"
                    allowscriptaccess="always"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video End */}
        {/* Service Start */}
        <div className="service">
          <div className="container">
            <div className="section-header text-center">
              <p>BIM Solutions</p>
              <h2>Create valuable products "Made in Vietnam"</h2>
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
                    <h3>BIM Consultancy Services</h3>
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
                    <h3>3D/BIM Modeling</h3>
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
                    <h3>BIM Coordination</h3>
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
                    <h3>BIM for Asset/Facility Management</h3>
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
                    <h3>3D/Laser Scannning Survey</h3>
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
                    <h3>Scan to BIM</h3>
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
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
                    <h3>AR/VR Technology</h3>
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.8s"
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
                    <h3>BIM 4D Construction Simulation</h3>
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.9s"
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
                    <h3>BIM Automation</h3>
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
              <p>Frequently Asked Question</p>
              <h2>You May Ask</h2>
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
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
        strategy="lazyOnload"
      />
    </div>
  );
}
