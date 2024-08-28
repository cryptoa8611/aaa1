
import React from "react";
import Image from "next/image";
import Script from "next/script";
import MenuSolutionsEn from "@/app/components/en/MenuSolutions";
import Link from "next/link";


export const metadata = {
  title: "AR/VR Technology - Elevating Visualization & Interaction | DACES",
  description: "DACES offers cutting-edge AR/VR technology services, creating immersive virtual experiences that enhance design visualization, training, and interactive environments. Leverage our AR/VR solutions to bring your projects to life with unmatched realism and engagement.",
  openGraph: {
    title: 'AR/VR Technology - Elevating Visualization & Interaction | DACES',
    description: 'DACES offers cutting-edge AR/VR technology services, creating immersive virtual experiences that enhance design visualization, training, and interactive environments. Leverage our AR/VR solutions to bring your projects to life with unmatched realism and engagement.',
    url: 'https://dacescorp.com/en/bim-solutions/ar-vr-technology/',
    siteName: '',
    images: [
      {
        url: '"https://dacescorp.com/assets/img/bim-solutions/ar-vr-technology.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "AR/VR Technology - Elevating Visualization & Interaction | DACES",
    description: "DACES offers cutting-edge AR/VR technology services, creating immersive virtual experiences that enhance design visualization, training, and interactive environments. Leverage our AR/VR solutions to bring your projects to life with unmatched realism and engagement.",
    images: [
      {
        url: '"https://dacescorp.com/assets/img/bim-solutions/ar-vr-technology.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: 'https://dacescorp.com/en/bim-solutions/ar-vr-technology/',
  },
  other: {
    'keywords': 'AR Technology, VR Technology, Augmented Reality, Virtual Reality, Immersive Experiences, Design Visualization, Interactive Environments',
  },
};

const Schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AR/VR Technology - Elevating Visualization & Interaction | DACES",
  "description": `DACES offers cutting-edge AR/VR technology services, creating immersive virtual experiences that enhance design visualization, training, and interactive environments. Leverage our AR/VR solutions to bring your projects to life with unmatched realism and engagement.`,
  "image": "https://dacescorp.com/assets/img/bim-solutions/ar-vr-technology.jpg",
  "provider": {
    "@type": "Organization",
    "name": "DACES",
    "url": "https://dacescorp.com/en/bim-solutions/ar-vr-technology/"
  },
  "areaServed": "Vietnam",
  "serviceType": "AR/VR Technology - Elevating Visualization & Interaction | DACES",
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
                <h2>AR/VR Technology</h2>
              </div>
              <div className="col-12">
                <Link href="/en/">Home</Link>
                <a href>AR/VR Technology</a>
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
                  <h2><span>AR/VR Technology:</span> Nâng cao kỹ năng thiết kế Kiến Trúc với Công nghệ hiện đại</h2>
                  <Image
                  src="/assets/img/bim-solutions/ar-vr-technology.jpg" 
                  alt="AR/VR Technology - Elevating Visualization & Interaction by DACES"
                  width={3840}   // Chiều rộng gốc của ảnh
                  height={2000}   // Chiều cao gốc của ảnh
                  layout="responsive"
                  />
                  <h4>Giới thiệu khóa học</h4>
                  <p>
                    Trong thế giới kiến trúc hiện đại, việc nắm vững công nghệ và các công cụ thiết kế tiên tiến là điều cần thiết. AR/VR Technology sẽ trang bị cho bạn những kỹ năng cần thiết để sử dụng phần mềm Revit Architecture một cách hiệu quả, từ đó nâng cao chất lượng và hiệu quả của các dự án kiến trúc.
                  </p>
                  <h4>Tại sao nên tham gia AR/VR Technology?</h4>
                  <ul>
                    <li>Làm chủ công nghệ BIM: Tìm hiểu về Building Information Modeling (BIM) và cách áp dụng BIM trong thiết kế kiến trúc để tối ưu hóa quy trình làm việc và tăng cường hiệu suất dự án.</li>
                    <li>Sử dụng Revit Architecture hiệu quả: Khóa học sẽ giúp bạn nắm vững các công cụ và tính năng của Revit Architecture, từ việc tạo mô hình 3D, bản vẽ 2D cho đến việc quản lý tài liệu và thông tin dự án</li>
                    <li>Tăng cơ hội nghề nghiệp: Nâng cao kỹ năng thiết kế kiến trúc bằng Revit sẽ giúp bạn nổi bật hơn trong ngành công nghiệp xây dựng, mở rộng cơ hội nghề nghiệp và đáp ứng tốt hơn nhu cầu của thị trường.</li>
                    <li>Học hỏi từ các chuyên gia: Đội ngũ giảng viên giàu kinh nghiệm sẽ hướng dẫn bạn qua từng bước, giúp bạn giải quyết các thách thức cụ thể và cải thiện kỹ năng thiết kế của mình.</li>
                  </ul>
                  <p>
                    Quisque arcu nulla, convallis nec orci vel, suscipit
                    elementum odio. Curabitur volutpat velit non diam tincidunt
                    sodales. Nullam sapien libero, bibendum nec viverra in,
                    iaculis ut eros.
                  </p>
                  <h4>Nội dung khóa học</h4>
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
                  <h4>Đối tượng tham gia</h4>
                  <p>AR/VR Technology phù hợp với:
                  </p>
                  <ul>
                    <li>Kiến trúc sư: Những người muốn cập nhật kỹ năng và nâng cao khả năng thiết kế bằng công nghệ mới.</li>
                    <li>Sinh viên Kiến trúc: Sinh viên đang theo học ngành kiến trúc, mong muốn học hỏi và phát triển kỹ năng thiết kế chuyên nghiệp.</li>
                    <li>Chuyên gia Ngành xây dựng: Các chuyên gia muốn mở rộng kiến thức và kỹ năng trong quản lý và thiết kế kiến trúc bằng Revit.</li>
                  </ul>
                  <h4>Phương pháp giảng dạy</h4>
                  <p>
                  Khóa học kết hợp giữa lý thuyết và thực hành, với các bài tập và dự án thực tế giúp bạn áp dụng kiến thức một cách hiệu quả. Bạn sẽ làm việc trên các mô hình thực tế và nhận phản hồi chi tiết từ các giảng viên.
                  </p>
                  <h4>Thông tin đăng ký</h4>
                  <p>
                    Để biết thêm chi tiết và đăng ký, vui lòng liên hệ với chúng tôi qua Hotline: 0987 263 268 hoặc email: training@daces.com hoặc truy cập vào đường link!.
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
            <MenuSolutionsEn />
            </div>
          </div>
        </div>
        {/* Single Post End*/}
      </div>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema)}} strategy="lazyOnload" />
    </div>
  );
}
