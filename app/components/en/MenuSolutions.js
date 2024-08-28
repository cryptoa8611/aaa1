'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuSolutionsEn() {
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
                    placeholder="Search"
                    />
                    <button className="btn">
                    <i className="fa fa-search" />
                    </button>
                </form>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp">
                <h2 className="widget-title">BIM Solutions</h2>
                <div className="category-widget">
                    <ul>
                        <li>
                            <Link href="/en/bim-solutions/bim-consultancy-services/" className={pathname === "/en/bim-solutions/bim-consultancy-services/" ? "active" : ""}>
                            BIM Consultancy Servcies
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/3d-bim-modeling/" className={pathname === "/en/bim-solutions/3d-bim-modeling/" ? "active" : ""}>
                            3D/BIM Modeling
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/bim-coordination/" className={pathname === "/en/bim-solutions/bim-coordination/" ? "active" : ""}>
                            BIM Coordination
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/bim-for-asset-facility-management/" className={pathname === "/en/bim-solutions/bim-for-asset-facility-management/" ? "active" : ""}>
                            BIM for Facility Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/3d-laser-scanning-survey/" className={pathname === "/en/bim-solutions/3d-laser-scanning-survey/" ? "active" : ""}>
                            3D/Laser Scanning Survey
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/scan-to-bim/" className={pathname === "/en/bim-solutions/scan-to-bim/" ? "active" : ""}>
                            Scan to BIM/As-built
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/ar-vr-technology/" className={pathname === "/en/bim-solutions/ar-vr-technology/" ? "active" : ""}>
                            AR/VR Technology
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/bim-4D-construction-simulation/" className={pathname === "/en/bim-solutions/bim-4D-construction-simulation/" ? "active" : ""}>
                            BIM 4D Construction Simulation
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/bim-solutions/bim-automation/" className={pathname === "/en/bim-solutions/bim-automation/" ? "active" : ""}>
                            BIM Automation
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
