import React from "react";
export const metadata = {
  title: "Dự án tiêu biểu - DACES",
  description: "Des",
  openGraph: {
    title: "Dự án tiêu biểu - DACES",
    description: "",
    image: "/path/to/service-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dự án tiêu biểu - DACES",
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
                <h2>Dự án tiêu biểu</h2>
              </div>
              <div className="col-12">
                <a href>Trang chủ</a>
                <a href>Dự án tiêu biểu</a>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Portfolio Start */}
        <div className="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".first">Complete</li>
                  <li data-filter=".second">Running</li>
                  <li data-filter=".third">Upcoming</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-1.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-1.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-2.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-2.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-3.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-3.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-4.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-4.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-5.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-5.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-img">
                    <img src="/assets/img/portfolio-6.jpg" alt="Image" />
                    <div className="portfolio-overlay">
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                        Curabit facilis ornare velit non. Aliqu metus tortor,
                        auctor id gravi condime, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h3>Project Name</h3>
                    <a
                      className="btn"
                      href="/assets/img/portfolio-6.jpg"
                      data-lightbox="portfolio"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 load-more">
                <a className="btn" href="#">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio End */}
      </div>
    </div>
  );
}
