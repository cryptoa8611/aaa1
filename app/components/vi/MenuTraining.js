'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuTrainingVi() {
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
                <h2 className="widget-title">Dánh sách khóa học</h2>
                <div className="category-widget">
                    <ul>
                    <li>
                        <Link href="/vi/dao-tao/khoa-hoc-bim-revit-kien-truc/" className={pathname === "/vi/dao-tao/khoa-hoc-bim-revit-kien-truc/" ? "active" : ""}>
                        Khóa học BIM Revit Kiến trúc
                        </Link>
                    </li>
                    <li>
                        <Link href="/vi/dao-tao/khoa-hoc-bim-revit-ket-cau/" className={pathname === "/vi/dao-tao/khoa-hoc-bim-revit-ket-cau/" ? "active" : ""}>
                        Khóa học BIM Revit Kết cấu
                        </Link>
                    </li>
                    <li>
                        <Link href="/vi/dao-tao/khoa-hoc-bim-revit-mefp/" className={pathname === "/vi/dao-tao/khoa-hoc-bim-revit-mefp/" ? "active" : ""}>
                        Khóa học BIM Revit MEFP
                        </Link>
                    </li>
                    <li>
                        <Link href="/vi/dao-tao/khoa-hoc-bim-manager/" className={pathname === "/vi/dao-tao/khoa-hoc-bim-manager/" ? "active" : ""}>
                        Khóa học BIM Manager
                        </Link>
                    </li>
                    <li>
                        <Link href="/vi/dao-tao/khoa-hoc-bim-awareness/" className={pathname === "/vi/dao-tao/khoa-hoc-bim-awareness/" ? "active" : ""}>
                        Khóa học BIM Awareness
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
