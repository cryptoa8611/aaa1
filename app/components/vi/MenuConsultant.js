'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuConsultantVi() {
const pathname = usePathname();
  return (
    <div className="col-lg-3">
        <div className="sidebar">
            <div className="sidebar-widget wow fadeInUp">
                <div className="search-widget">
                <form>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Tìm kiếm"
                    />
                    <button className="btn">
                    <i className="fa fa-search" />
                    </button>
                </form>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp">
                <h2 className="widget-title">Tư vấn thiết kế</h2>
                <div className="category-widget">
                    <ul>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/kien-truc/" className={pathname === "/vi/tu-van-thiet-ke/kien-truc/" ? "active" : ""}>
                            Kiến trúc
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/ket-cau/" className={pathname === "/vi/tu-van-thiet-ke/ket-cau/" ? "active" : ""}>
                            Kết cấu
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/co-dien-me/" className={pathname === "/vi/tu-van-thiet-ke/co-dien-me/" ? "active" : ""}>
                            Cơ điện M&E
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/ha-tang-giao-thong/" className={pathname === "/vi/tu-van-thiet-ke/ha-tang-giao-thong/" ? "active" : ""}>
                            Hạ tầng - Giao thông
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/quy-hoach/" className={pathname === "/vi/tu-van-thiet-ke/quy-hoach/" ? "active" : ""}>
                            Quy hoạch
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/tu-van-thiet-ke/nang-luong/" className={pathname === "/vi/tu-van-thiet-ke/nang-luong/" ? "active" : ""}>
                            Năng lượng
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp">
                <div className="image-widget">
                <a href="#">
                    <img src="/assets/img/blog-3.jpg" alt="Image" />
                </a>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp">
                <h2 className="widget-title">Tags</h2>
                <div className="tag-widget">
                <a href>National</a>
                <a href>International</a>
                <a href>Economics</a>
                <a href>Politics</a>
                <a href>Lifestyle</a>
                <a href>Technology</a>
                <a href>Trades</a>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp">
                <h2 className="widget-title">Text Widget</h2>
                <div className="text-widget">
                <p>
                    Lorem ipsum dolor sit amet elit. Integer lorem augue
                    purus mollis sapien, non eros leo in nunc. Donec a nulla
                    vel turpis tempor ac vel justo. In hac platea nec eros.
                    Nunc eu enim non turpis id augue.
                </p>
                </div>
            </div>
        </div>
    </div>    
  )
}
