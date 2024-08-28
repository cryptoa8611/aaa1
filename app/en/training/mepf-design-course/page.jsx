import React from "react";
import Image from "next/image";
import Script from "next/script";
import MenuTrainingEn from "@/app/components/en/MenuTraining";

export const metadata = {
  title: "MEPF Design Course | DACES",
  description: "Enroll in our MEPF Design Course to master Mechanical, Electrical, Plumbing, and Fire Protection systems. Learn from experts and advance your career with comprehensive training in MEPF design.",
  openGraph: {
    title: 'MEPF Design Course | DACES',
    description: 'Enroll in our MEPF Design Course to master Mechanical, Electrical, Plumbing, and Fire Protection systems. Learn from experts and advance your career with comprehensive training in MEPF design.',
    url: 'https://dacescorp.com/en/training/mepf-design-course/',
    siteName: '',
    images: [
      {
        url: 'https://dacescorp.com/assets/img/traning/bim-revit-structure/bim-revit-structure-course.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "MEPF Design Course | DACES",
    description: "Enroll in our MEPF Design Course to master Mechanical, Electrical, Plumbing, and Fire Protection systems. Learn from experts and advance your career with comprehensive training in MEPF design.",
    images: [
      {
        url: 'https://dacescorp.com/assets/img/traning/bim-revit-structure/bim-revit-structure-course.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: 'https://dacescorp.com/en/training/mepf-design-course/',
  },
  other: {
    'keywords': 'MEPF Design Course, MEPF Training, Mechanical Electrical Plumbing Fire Protection Course, MEPF Systems Design, MEPF Engineering Course',
  },
};

const Schema =    {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "MEPF Design Course | DACES",
  "description": "Enroll in our MEPF Design Course to master Mechanical, Electrical, Plumbing, and Fire Protection systems. Learn from experts and advance your career with comprehensive training in MEPF design.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "DACES",
    "url": "https://dacescorp.com/"
  },
  "courseMode": "Offline",
  "hasCourseMode": "Offline",
  "reviews": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "4.8"
      },
    },
  ],
  "url": "https://dacescorp.com/en/training/mepf-design-course/",
}
export default function BimRevitStructure() {
  return (
    <div>
      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>MEPF Design Course</h2>
              </div>
              <div className="col-12">
                <a href>Home</a>
                <a href>MEPF Design Course</a>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Single Post Start*/}
        <div className="single">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="single-content wow fadeInUp">
                  <Image
                  src="/assets/img/training/mepf-design/mepf-design-course.jpg" 
                  alt="MEPF Design Course - Master Mechanical, Electrical, Plumbing, and Fire Protection Design by DACES"
                  width={3840}   // Chiều rộng gốc của ảnh
                  height={2000}   // Chiều cao gốc của ảnh
                  layout="responsive"
                  />
                  <h2 className="mb-5">BIM Revit Structure Course: Discover the Future of Building Design</h2>
                  <h3>Introduction</h3>
                  <p>
                    Welcome to the BIM Revit Structure course – your gateway to exploring the world of building design and information management through Revit Architecture software. This is an opportunity to enhance your skills and knowledge in architectural design by leveraging advanced BIM technology.
                  </p>
                  <h3>Course Objectives</h3>
                  <p>
                  This course is designed to equip you with the essential knowledge and skills needed to use Revit Architecture for designing and managing building projects. Specifically, you will:
                  </p>
                  <ul>
                    <li>Gain a comprehensive understanding of Building Information Modeling (BIM) and its applications in architectural design.</li>
                    <li>Familiarize yourself with the interface and key tools of Revit Architecture.</li>
                    <li>Learn how to create and manage 3D models, drawings, and project documentation.</li>
                    <li>Master techniques to optimize the design process and collaborate effectively within a project team.</li>
                  </ul>
                  <p>
                    Quisque arcu nulla, convallis nec orci vel, suscipit
                    elementum odio. Curabitur volutpat velit non diam tincidunt
                    sodales. Nullam sapien libero, bibendum nec viverra in,
                    iaculis ut eros.
                  </p>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>
                    Vestibulum sit amet ullamcorper sem. Integer hendrerit elit
                    eget purus sodales maximus. Quisque ac nulla arcu. Morbi
                    venenatis arcu ac arcu cursus pharetra. Morbi sit amet
                    viverra augue, ac ultricies libero. Praesent elementum
                    lectus mi, eu elementum urna venenatis sed. Donec auctor
                    purus ut mattis feugiat. Integer mi erat, consectetur sed
                    tincidunt vitae, sagittis elementum libero. Vivamus a mauris
                    consequat, hendrerit lectus in, fermentum libero. Integer
                    mattis bibendum neque et porttitor.
                  </p>
                  <p>
                    Mauris quis arcu finibus, posuere dolor eu, viverra felis.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. In porta, ex vitae accumsan
                    facilisis, nisi tellus dictum metus, quis fringilla dui
                    tellus in tellus. Praesent pharetra orci at vehicula
                    posuere. Sed molestie fringilla lorem, vel imperdiet tortor
                    blandit at. Quisque non ultrices lorem, eget rhoncus orci.
                    Fusce porttitor placerat diam et mattis. Nam laoreet, ex eu
                    posuere sollicitudin, sem tortor pellentesque ipsum, quis
                    mattis purus lectus ut lacus. Integer eu risus ac est
                    interdum scelerisque.
                  </p>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>
                    Praesent ultricies, mauris eget vestibulum viverra, neque
                    lorem malesuada mauris, eget rhoncus lectus enim a lorem.
                    Vivamus at vehicula risus, eget facilisis massa. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras et posuere
                    sapien. Fusce bibendum lorem sem, quis tincidunt felis
                    mattis nec.
                  </p>
                  <p>
                    Proin vel nulla purus. Nunc nec eros in nisi efficitur
                    rutrum quis sed eros. Mauris felis dolor, rhoncus eget
                    gravida vitae, pretium vel arcu. Cras blandit tellus eget
                    tellus dictum venenatis. Sed ultricies bibendum dictum.
                    Etiam facilisis erat id turpis tincidunt malesuada. Duis
                    bibendum sapien eu condimentum sagittis. Proin nunc lorem,
                    ullamcorper vel tortor sodales, imperdiet lacinia dui. Sed
                    congue, felis id rhoncus varius, urna lacus imperdiet nunc,
                    ut porttitor mauris mi quis mi. Integer rutrum est finibus
                    metus eleifend scelerisque. Morbi auctor dignissim purus in
                    interdum. Vestibulum eu dictum enim. Suspendisse et sem
                    vitae velit feugiat facilisis.
                  </p>
                  <p>
                    Nam sodales scelerisque nunc sed convallis. Vestibulum
                    facilisis porta erat, sit amet pharetra tortor blandit id.
                    Nunc velit tellus, consectetur sed convallis in, tincidunt
                    finibus nulla. Integer vel ex in mauris tincidunt tincidunt
                    nec sed elit. Etiam pretium lectus lectus, sed aliquet erat
                    tristique euismod. Praesent faucibus nisl augue, ac tempus
                    libero pellentesque malesuada. Vivamus iaculis imperdiet
                    laoreet. Aliquam vel felis felis. Proin sed sapien erat.
                    Etiam a quam et metus tempor rutrum. Curabitur in faucibus
                    justo. Etiam imperdiet iaculis urna.
                  </p>
                </div>
                <div className="single-tags wow fadeInUp">
                  <a href>National</a>
                  <a href>International</a>
                  <a href>Economics</a>
                  <a href>Politics</a>
                  <a href>Lifestyle</a>
                  <a href>Technology</a>
                  <a href>Trades</a>
                </div>
              </div>
              <MenuTrainingEn />
            </div>
          </div>
        </div>
        {/* Single Post End*/}
      </div>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema)}} strategy="lazyOnload" />
    </div>
  );
}
