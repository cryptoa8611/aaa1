import React from "react";

export const metadata = {
  title: "News | DACES",
  description: "DACES offers expert 3D/BIM Modeling services, delivering accurate and efficient models to enhance your project planning and execution. Our BIM solutions ensure seamless coordination and optimized workflows for construction projects.",
  openGraph: {
    title: 'News | DACES',
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
    title: "News | DACES",
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
    'keywords': 'DACES, News',
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
                <h2>News</h2>
              </div>
              <div className="col-12">
                <a href>Home</a>
                <a href>News</a>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* News Start */}
        {/* News End */}
      </div>
    </div>
  );
}
