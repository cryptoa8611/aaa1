
'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function HeaderVi() {
  const pathname = usePathname();
  return (
    <div>
      <div>
        {/* Top Bar Start */}
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-12">
                <div className="logo">
                  <a href="/vi">
                    <img src="/assets/img/daces-logo.png" alt="Logo DACES" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-7 d-none d-lg-block">
                <div className="row">
                  <div className="col-6">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-address" />
                      </div>
                      <div className="top-bar-text">
                        <h3>
                          CÔNG TY TƯ VẤN THIẾT KẾ VÀ GIẢI PHÁP SỐ HÓA DACES
                        </h3>
                        <p>8:00 -17:00 (T2-T6) | 8:00 -12:00 (T7)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-call" />
                      </div>
                      <div className="top-bar-text">
                        <h3>(+84) 987 263 268</h3>
                        <p>Hotline | Zalo</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-send-mail" />
                      </div>
                      <div className="top-bar-text">
                        <h3>info@dacescorp.com</h3>
                        <p>Email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top Bar End */}
        {/* Nav Bar Start */}
        <div className="nav-bar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <button className="btn btn-ams" id="btn-ams" > AMS</button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                   <Link href="/vi/" className={`nav-item nav-link ${pathname === "/vi/" ? "active" : ""}`}>
                    Trang chủ
                  </Link>
                  <Link href="/vi/gioi-thieu/"  className={`nav-item nav-link ${pathname === "/vi/gioi-thieu/" ? "active" : ""}`}>
                    Giới thiệu
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/vi/tu-van-thiet-ke/") ? "active" : ""}`}
                    >
                      Tư vấn thiết kế
                    </Link>
                    <div className="dropdown-menu">
                      <Link href="/vi/tu-van-thiet-ke/kien-truc/" className="dropdown-item">
                        Kiến trúc
                      </Link>
                      <Link href="/vi/tu-van-thiet-ke/ket-cau/" className="dropdown-item">
                        Kết cấu
                      </Link>
                      <Link href="/vi/tu-van-thiet-ke/he-thong-co-dien-ME/" className="dropdown-item">
                        Hệ thống cơ điện M&E
                      </Link>
                      <Link href="/vi/tu-van-thiet-ke/ha-tang-giao-thong/" className="dropdown-item">
                        Hạ tầng - Giao thông
                      </Link>
                      <Link href="/vi/tu-van-thiet-ke/quy-hoach/" className="dropdown-item">
                        Quy hoạch
                      </Link>
                      <Link href="/vi/tu-van-thiet-ke/nang-luong/" className="dropdown-item">
                        Năng lượng
                      </Link>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/vi/giai-phap/") ? "active" : ""}`}
                    >
                      Giải pháp
                    </Link>
                    <div className="dropdown-menu">
                      <Link href="/vi/giai-phap/tu-van-bim/" className="dropdown-item">
                        Tư vấn BIM
                      </Link>
                      <Link href="/vi/giai-phap/mo-hinh-3d-bim/" className="dropdown-item">
                        Mô hình 3D/BIM
                      </Link>
                      <Link href="/vi/giai-phap/scan-to-bim/" className="dropdown-item">
                        Scan to BIM
                      </Link>
                      <Link href="/vi/giai-phap/phoi-hop-bim/" className="dropdown-item">
                        Phối hợp BIM
                      </Link>
                      <Link href="/vi/giai-phap/khai-thac-van-hanh-bim/" className="dropdown-item">
                        Khai thác vận hành BIM
                      </Link>
                      <Link href="/vi/giai-phap/ar-vr-tour-du-lich-3d-360/" className="dropdown-item">
                        AR/VR & Tour du lịch 3D/360
                      </Link>
                    </div>
                  </div>
                  <Link href="/vi/du-an-tieu-bieu" className={`nav-item nav-link ${pathname === "/vi/du-an-tieu-bieu/" ? "active" : ""}`}>
                    Dự án
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/vi/dao-tao/") ? "active" : ""}`}
                    >
                      Đào tạo
                    </Link>
                    <div className="dropdown-menu">
                      <Link href="/vi/dao-tao/khoa-hoc-bim-revit-kien-truc/" className="dropdown-item">
                        Khóa học BIM Revit Kiến trúc
                      </Link>
                      <Link href="/vi/dao-tao/khoa-hoc-bim-revit-ket-cau/" className="dropdown-item">
                        Khóa học BIM Revit Kết cấu
                      </Link>
                      <Link href="/vi/dao-tao/khoa-hoc-bim-revit-mefp/" className="dropdown-item">
                        Khóa học BIM Revit MEFP 
                      </Link>
                      <Link href="/vi/dao-tao/khoa-hoc-bim-manager/" className="dropdown-item">
                        Khóa học BIM Manager
                      </Link>
                      <Link href="/vi/dao-tao/khoa-hoc-bim-awareness/" className="dropdown-item">
                        Khóa học BIM Awareness
                      </Link>
                    </div>
                  </div>
                  <Link href="/vi/tin-tuc/" className={`nav-item nav-link ${pathname === "/vi/tin-tuc/" ? "active" : ""}`}>
                    Tin tức
                  </Link>
                  <Link href="/vi/lien-he/" className={`nav-item nav-link ${pathname === "/vi/lien-he/" ? "active" : ""}`}>
                    Liên hệ
                  </Link>
                </div>
                <div className="ml-auto social-buttons">
                  <Link href="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link href="#">
                    <i className="fab fa-youtube" />
                  </Link>
                  <button className="btn btn-ams" > AMS</button>
                </div>
                <Link href="/en" className="nav-item nav-link btn ml-2">
                    En
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* Nav Bar End */}
      </div>
    </div>
  );
}
