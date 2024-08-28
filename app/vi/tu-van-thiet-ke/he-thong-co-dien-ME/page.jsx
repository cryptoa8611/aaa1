import React from "react";
import Image from "next/image";
import Script from "next/script";
import MenuConsultantVi from "@/app/components/vi/MenuConsultant";

export const metadata = {
  title: "Tư vấn thiết kế hệ thống cơ điện M&E - DACES",
  description:
    "Tìm hiểu về dịch vụ tư vấn thiết kế hệ thống cơ điện M&E của DACES. Chúng tôi cung cấp giải pháp toàn diện, giúp nâng cao hiệu quả hoạt động của công trình. Liên hệ ngay!",
  openGraph: {
    title: "Tư vấn thiết kế hệ thống cơ điện M&E",
    description:
      "DACES cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...",
    url: "htts://daces.com/vi/",
    siteName: "",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tư vấn thiết kế hệ thống cơ điện M&E - DACES",
    description:
      "DACES cung cấp dịch vụ tư vấn thiết kế và giải pháp công nghệ cho các lĩnh vực kiến trúc, xây dựng, công nghiệp, năng lượng,...",
    images: [
      {
        url: "https://daces.com/abc.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },

  alternates: {
    canonical: "https://dacescorp.com/vi/",
  },
  other: {
    keywords:
      "Tư vấn thiết kế hệ thống cơ điện M&E, dịch vụ thiết kế M&E, thiết kế cơ điện, dịch vụ M&E, giải pháp M&E, thiết kế hệ thống M&E, DACES",
  },
};

const Schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Tư vấn thiết kế hệ thống cơ điện M&E - DACES",
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
                <h2>Tư vấn thiết kế hệ thống cơ điện M&E</h2>
              </div>
              <div className="col-12">
                <a href>Trang chủ</a>
                <a href>Tư vấn thiết kế hệ thống cơ điện M&E</a>
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
                  <h2>
                    Nâng Tầm Hiệu Quả Hoạt Động Của Công Trình Với Giải Pháp M&E
                    Toàn Diện
                  </h2>
                  <p>
                    Tại Daces, chúng tôi tự hào là đơn vị hàng đầu cung cấp dịch
                    vụ tư vấn thiết kế hệ thống cơ điện M&E chuyên nghiệp và
                    hiệu quả. Với đội ngũ kỹ sư dày dặn kinh nghiệm và am hiểu
                    sâu sắc về các tiêu chuẩn thiết kế, chúng tôi cam kết mang
                    đến cho khách hàng những giải pháp tối ưu, giúp nâng cao
                    hiệu quả hoạt động và kéo dài tuổi thọ của công trình.
                  </p>
                  <Image
                    src="/assets/img/training/revit-architecture/bim-revit-architecture-2024.jpg"
                    alt="Khóa học BIM Revit Kiến trúc - Nâng cao khả năng thiết kế"
                    width={3840} // Chiều rộng gốc của ảnh
                    height={2000} // Chiều cao gốc của ảnh
                    layout="responsive"
                  />
                  <h4>
                    Tại sao chọn dịch vụ Tư vấn thiết kế hệ thống cơ Điện M&E
                    của DACES?
                  </h4>
                  <ul>
                    <li>
                      Đội Ngũ Chuyên Gia Hàng Đầu: Đội ngũ kỹ sư của chúng tôi
                      không chỉ có kinh nghiệm phong phú mà còn luôn cập nhật
                      những công nghệ mới nhất trong ngành M&E. Chúng tôi hiểu
                      rằng mỗi dự án đều có những yêu cầu riêng biệt và cam kết
                      đưa ra giải pháp thiết kế phù hợp nhất với nhu cầu của
                      khách hàng.
                    </li>
                    <li>
                      Giải Pháp Toàn Diện: Dịch vụ của chúng tôi bao gồm từ việc
                      tư vấn thiết kế, giám sát thi công cho đến kiểm tra và bảo
                      trì hệ thống, đảm bảo mọi khía cạnh của dự án được hoàn
                      thiện một cách hoàn hảo.
                    </li>
                    <li>
                      Tiết Kiệm Chi Phí và Thời Gian: Bằng việc tối ưu hóa thiết
                      kế, chúng tôi giúp khách hàng tiết kiệm chi phí đầu tư và
                      vận hành, đồng thời đảm bảo tiến độ thi công đúng kế
                      hoạch.
                    </li>
                    <li>
                      Tuân Thủ Tiêu Chuẩn Quốc Tế: Tất cả các giải pháp thiết kế
                      của chúng tôi đều tuân thủ nghiêm ngặt các tiêu chuẩn quốc
                      tế như ISO, IEC, và các quy định về an toàn lao động và
                      môi trường.
                    </li>
                  </ul>
                  <h4>
                    Quy trình tư vấn thiết kế hệ thống cơ điện M&E của DACES
                  </h4>
                  <ol>
                    <li>
                      <strong>Khảo Sát Hiện Trạng và Nhu Cầu:</strong> Chúng tôi
                      bắt đầu bằng việc lắng nghe nhu cầu của khách hàng, khảo
                      sát hiện trạng công trình để đưa ra giải pháp thiết kế tối
                      ưu nhất.
                    </li>
                    <li>
                      <strong>Lập Phương Án Thiết Kế:</strong> Dựa trên các dữ
                      liệu thu thập, chúng tôi đề xuất phương án thiết kế hệ
                      thống cơ điện phù hợp, đảm bảo tính khả thi và hiệu quả
                      cao nhất.
                    </li>
                    <li>
                      <strong>Thẩm Định và Điều Chỉnh:</strong> Phương án thiết
                      kế được thẩm định bởi các chuyên gia để đảm bảo tính chính
                      xác và tuân thủ các tiêu chuẩn cần thiết. Sau đó, chúng
                      tôi sẽ điều chỉnh theo yêu cầu của khách hàng.
                    </li>
                    <li>
                      <strong>Giám Sát Thi Công:</strong> Daces sẽ đồng hành
                      cùng khách hàng trong suốt quá trình thi công, đảm bảo
                      thiết kế được thực hiện đúng như kế hoạch và đạt chất
                      lượng cao nhất.
                    </li>
                    <li>
                      <strong>Kiểm Tra và Bảo Trì:</strong> Sau khi hoàn thành,
                      chúng tôi sẽ kiểm tra toàn bộ hệ thống để đảm bảo hoạt
                      động ổn định, và cung cấp dịch vụ bảo trì định kỳ.
                    </li>
                  </ol>
                </div>
                <div class="single-bio wow fadeInUp">
                  <div class="single-bio-text">
                    <p>
                    "Để nhận được tư vấn chi tiết và báo giá tốt nhất, hãy liên hệ ngay với Daces qua <a href="#">Hotline: (+84) 987 263 268</a> hoặc Email: info@dacescorp.com. Chúng tôi luôn sẵn sàng hỗ trợ bạn!"
                    </p>
                  </div>
                </div>
              </div>
              <MenuConsultantVi />
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
