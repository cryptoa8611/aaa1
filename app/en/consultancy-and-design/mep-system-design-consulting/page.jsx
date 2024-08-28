import React from "react";
import Image from "next/image";
import Script from "next/script";
import MenuConsultantEn from "@/app/components/en/MenuConsultant";
import Link from "next/link";

export const metadata = {
  title: "Expert MEP System Design Consulting Services | DACES",
  description:
    "DACES offers comprehensive MEP System Design Consulting, specializing in Mechanical, Electrical, and Plumbing design solutions. Our experts provide innovative and efficient systems for building projects to meet your specific needs.",
  openGraph: {
    title: "Architecture &amp; Interior Design Consulting - DACES",
    description:
      "DACES offers comprehensive MEP System Design Consulting, specializing in Mechanical, Electrical, and Plumbing design solutions. Our experts provide innovative and efficient systems for building projects to meet your specific needs.",
    url: "https://dacescorp.com/en/",
    siteName: "DACES Consultant Corporation",
    images: [
      {
        url:
          "https://dacescorp.com/en/assets/img/design-consultancy/mep-system-design-consulting.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert MEP System Design Consulting Services | DACES",
    description:
      "DACES offers comprehensive MEP System Design Consulting, specializing in Mechanical, Electrical, and Plumbing design solutions. Our experts provide innovative and efficient systems for building projects to meet your specific needs.",
    images: [
      {
        url:
          "https://dacescorp.com/en/assets/img/design-consultancy/mep-system-design-consulting.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: "https://dacescorp.com/en/",
  },
  other: {
    keywords:
      "MEP System Design Consulting, Mechanical Electrical Plumbing Design Services, MEP Engineering Consulting, Building Systems Design, MEP System Solutions",
  },
};

const Schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Architectural Design Consulting - DACES",
  description:
    "Khóa học Revit cung cấp kiến thức cơ bản về phần mềm Revit cho kiến trúc sư và kỹ sư.",
  provider: {
    "@type": "EducationalOrganization",
    name: "DACES",
    sameAs: "https://daces.com/vi/dao-tao/khoa-hoc-revit-kien-truc/",
  },
  offers: {
    "@type": "Offer",
    price: "2500000",
    priceCurrency: "VND",
    minPrice: "2500000",
    maxPrice: "3500000",
    url: "https://daces.com/vi/dao-tao/khoa-hoc-revit-kien-truc/",
  },
  courseMode: "Offline",
  hasCourseMode: "Offline",
  reviews: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Trần Quang Đức",
      },
      reviewBody:
        "Khóa học rất bổ ích và cung cấp kiến thức chuyên sâu về phần mềm Revit. Giảng viên có kinh nghiệm và phương pháp dạy rõ ràng.",
    },
  ],
};

export default function BimRevitArchitecture() {
  return (
    <div>
      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>MEP System Design Consulting</h2>
              </div>
              <div className="col-12">
                <Link href="/vi/">Home</Link>
                <Link href="">MEP System Design Consulting</Link>
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
                  <h3>
                    MEP System Design Consulting: Transform Your
                    Spaces with Expert Solutions
                  </h3>
                  <p>
                    At DACES, we specialize in providing top-tier Architecture &
                    Interior Design Consulting services. Our dedicated team of
                    experts is committed to enhancing your spaces through
                    innovative, practical, and aesthetically pleasing design
                    solutions. Whether you are embarking on a new project or
                    renovating an existing space, our comprehensive consulting
                    services are designed to guide you through every phase of
                    your design journey.
                  </p>
                  <Image
                    src="/assets/img/design-consultancy/mep-system-design-consulting.jpg"
                    alt="Expert MEP System Design Consulting Services"
                    width={3840} // Chiều rộng gốc của ảnh
                    height={2000} // Chiều cao gốc của ảnh
                    layout="responsive"
                  />
                  <h4>
                    Why Choose Our MEP System Design Consulting
                    Services?
                  </h4>
                  <ul>
                    <li>
                      <h5>Innovative Design Solutions</h5>
                      <p>
                        Our architecture and interior design consulting services
                        are rooted in creativity and innovation. We strive to
                        deliver unique design solutions that reflect your
                        personal style while addressing functional needs. Our
                        team stays abreast of the latest design trends and
                        technologies to ensure that your project stands out.
                      </p>
                    </li>
                    <li>
                      <h5>Comprehensive Project Management</h5>
                      <p>
                        From the initial concept to the final execution, we
                        offer full-spectrum project management. Our consulting
                        services include detailed planning, design development,
                        and project oversight to ensure that every aspect of
                        your project is handled with precision and care. We work
                        closely with you to ensure that your vision is realized,
                        on time and within budget.
                      </p>
                    </li>
                    <li>
                      <h5>Expertise in Diverse Design Sectors</h5>
                      <p>
                        Our consulting expertise spans various design sectors,
                        including residential, commercial, and institutional
                        projects. Whether you are looking to design a cozy home,
                        a dynamic office environment, or a functional public
                        space, our team has the experience and knowledge to
                        deliver exceptional results.
                      </p>
                    </li>
                    <li>
                      <h5>Client-Centric Approach</h5>
                      <p>
                        At DACES, we prioritize your needs and preferences. Our
                        client-centric approach involves thorough consultations
                        to understand your goals and expectations. We provide
                        personalized recommendations and solutions that align
                        with your vision and requirements.
                      </p>
                    </li>
                  </ul>
                  <p>
                   Ready to transform your space with expert architecture and interior design consulting? Contact us today to schedule a consultation and discover how our services can help you achieve your design goals.
                  </p>
                  <ul>
                    <li>Hotline: (+84) 987 263 268</li>
                    <li>Email: info@dacescorp.com</li>
                  </ul>
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
              <MenuConsultantEn />
            </div>
          </div>
        </div>
        {/* Single Post End*/}
      </div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
        strategy="lazyOnload"
      />
    </div>
  );
}
