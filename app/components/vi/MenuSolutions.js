'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuSolutionsVi() {
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
                <h2 className="widget-title">Giải pháp</h2>
                <div className="category-widget">
                    <ul>
                        <li>
                            <Link href="/vi/giai-phap/tu-van-bim/" className={pathname === "/vi/giai-phap/tu-van-bim/" ? "active" : ""}>
                            Tư vấn BIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/giai-phap/mo-hinh-3d-bim/" className={pathname === "/vi/giai-phap/mo-hinh-3d-bim/" ? "active" : ""}>
                            Mô hình 3D/BIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/giai-phap/scan-to-bim/" className={pathname === "/vi/giai-phap/scan-to-bim/" ? "active" : ""}>
                            Scan to BIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/giai-phap/phoi-hop-bim/" className={pathname === "/vi/giai-phap/phoi-hop-bim/" ? "active" : ""}>
                            Phối hợp BIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/giai-phap/khai-thac-van-hanh-bim/" className={pathname === "/vi/giai-phap/khai-thac-van-hanh-bim/" ? "active" : ""}>
                            Khai thác vận hành BIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/vi/giai-phap/ar-vr-tour-du-lich-3d-360/" className={pathname === "/vi/giai-phap/ar-vr-tour-du-lich-3d-360/" ? "active" : ""}>
                            AR/VR & Tour du lịch 3D/360
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
