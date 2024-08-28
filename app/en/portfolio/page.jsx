import React from "react";

export const metadata = {
  title: "Portfolio | DACES",
  description: "DACES offers expert 3D/BIM Modeling services, delivering accurate and efficient models to enhance your project planning and execution. Our BIM solutions ensure seamless coordination and optimized workflows for construction projects.",
  openGraph: {
    title: 'Portfolio | DACES',
    description: 'DACES offers expert 3D/BIM Modeling services, delivering accurate and efficient models to enhance your project planning and execution. Our BIM solutions ensure seamless coordination and optimized workflows for construction projects.',
    url: 'https://dacescorp.com/en/bim-solutions/3d-bim-modeling/',
    siteName: '',
    images: [
      {
        url: 'https://dacescorpcom/assets/img/bim-solutions/3d-bim-modeling.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | DACES",
    description: "DACES offers expert 3D/BIM Modeling services, delivering accurate and efficient models to enhance your project planning and execution. Our BIM solutions ensure seamless coordination and optimized workflows for construction projects.",
    images: [
      {
        url: 'https://dacescorpcom/assets/img/bim-solutions/3d-bim-modeling.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: 'https://dacescorp.com/en/bim-solutions/3d-bim-modeling/',
  },
  other: {
    'keywords': 'DACES, Portfolio',
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
                <h2>Portfolio</h2>
              </div>
              <div className="col-12">
                <a href>Home</a>
                <a href>Portfolio</a>
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
