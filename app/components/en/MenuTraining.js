'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuTrainingEn() {
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
                <h2 className="widget-title">Training</h2>
                <div className="category-widget">
                    <ul>
                    <li>
                        <Link href="/en/training/bim-revit-architecture-course/" className={pathname === "/en/training/bim-revit-architecture-course/" ? "active" : ""}>
                        BIM Revit Architecture
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/bim-revit-structure-course/" className={pathname === "/en/training/bim-revit-structure-course/" ? "active" : ""}>
                        BIM Revit Structure
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/bim-revit-mefp-course/" className={pathname === "/en/training/bim-revit-mefp-course/" ? "active" : ""}>
                        BIM Revit MEFP
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/bim-manager-course/" className={pathname === "/en/training/bim-manager-course/" ? "active" : ""}>
                        BIM Manager
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/bim-gis-course/" className={pathname === "/en/training/bim-gis-course/" ? "active" : ""}>
                        BIM/GIS	
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/structural-design-course/" className={pathname === "/en/training/structural-design-course/" ? "active" : ""}>
                        Structural Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/mepf-design-course/" className={pathname === "/en/training/mepf-design-course/" ? "active" : ""}>
                        MEPF Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/civil-and-infrastructure-design-course/" className={pathname === "/en/training/civil-and-infrastructure-design-course/" ? "active" : ""}>
                        Civil and Infrastructure Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/lighting-design-course/" className={pathname === "/en/training/lighting-design-course/" ? "active" : ""}>
                        Lighting Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/ar-vr-development-course/" className={pathname === "/en/training/ar-vr-development-course/" ? "active" : ""}>
                        AR/VR Development
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/4d-construction-simulation-course/" className={pathname === "/en/training/4d-construction-simulation-course/" ? "active" : ""}>
                        4D Construction Simulation
                        </Link>
                    </li>
                    <li>
                        <Link href="/en/training/revit-api-and-dynamo-course/" className={pathname === "/en/training/revit-api-and-dynamo-course/" ? "active" : ""}>
                        Revit API and Dynamo
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
