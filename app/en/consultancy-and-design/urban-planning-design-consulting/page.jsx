import React from "react";
import Image from "next/image";
import Script from "next/script";
import MenuConsultantEn from "@/app/components/en/MenuConsultant";
import Link from "next/link";

export const metadata = {
  title: "Expert Urban Planning Design Consulting Services | DACES",
  description:
    "Discover top-tier Urban Planning Design Consulting services with DACES. Our experts provide innovative solutions to enhance city planning and development. Contact us for tailored urban planning strategies.",
  openGraph: {
    title: "Expert Urban Planning Design Consulting Services | DACES",
    description:
      "Discover top-tier Urban Planning Design Consulting services with DACES. Our experts provide innovative solutions to enhance city planning and development. Contact us for tailored urban planning strategies.",
    url: "https://dacescorp.com/en/",
    siteName: "DACES Consultant Corporation",
    images: [
      {
        url:
          "https://dacescorp.com/en/assets/img/design-consultancy/traffic-infrastructure-design-consulting.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Urban Planning Design Consulting Services | DACES",
    description:
      "Discover top-tier Urban Planning Design Consulting services with DACES. Our experts provide innovative solutions to enhance city planning and development. Contact us for tailored urban planning strategies.",
    images: [
      {
        url:
          "https://dacescorp.com/en/assets/img/design-consultancy/traffic-infrastructure-design-consulting.jpg", // Must be an absolute URL
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
      "Traffic InfraUrban Planning Design Consulting, Traffic Management Solutions, Transportation Infrastructure Design, Traffic Engineering Services, Infrastructure Development Consulting",
  },
};

const Schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Expert Urban Planning Design Consulting Services | DACES",
  "description": `Discover top-tier Urban Planning Design Consulting services with DACES. Our experts provide innovative solutions to enhance city planning and development. Contact us for tailored urban planning strategies.`,
  "image": "https://dacescorp.com/en/assets/img/design-consultancy/architecture-and-interior-design-consulting-servcies.jpg",
  "provider": {
    "@type": "Organization",
    "name": "DACES",
    "url": "https://...."
  },
  "areaServed": "Vietnam",
  "serviceType": "Expert Urban Planning Design Consulting Services | DACES",
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
                <h2>Urban Planning Design Consulting</h2>
              </div>
              <div className="col-12">
                <Link href="/vi/">Home</Link>
                <Link href="">Urban Planning Design Consulting</Link>
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
                    Urban Planning Design Consulting: Transform Your
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
                    src="/assets/img/design-consultancy/urban-planning-design-consulting.jpg"
                    alt="Expert Urban Planning Design Consulting Services"
                    width={3840} // Chiều rộng gốc của ảnh
                    height={2000} // Chiều cao gốc của ảnh
                    layout="responsive"
                  />
                  <h4>
                    Why Choose Our Urban Planning Design Consulting
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
