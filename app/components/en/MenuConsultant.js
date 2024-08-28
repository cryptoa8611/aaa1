'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MenuConsultantEn() {
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
                <h2 className="widget-title">Consultancy &amp; Design</h2>
                <div className="category-widget">
                    <ul>
                        <li>
                            <Link href="/en/consultancy-and-design/architecture-and-interior-design-consulting/" className={pathname === "/en/consultancy-and-design/architecture-and-interior-design-consulting/" ? "active" : ""}>
                                Architecture &amp; Interior
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/structure-design-consulting/" className={pathname === "/en/consultancy-and-design/structure-design-consulting/" ? "active" : ""}>
                                Structure
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/traffic-infrastructure-design-consulting/" className={pathname === "/en/consultancy-and-design/traffic-infrastructure-design-consulting/" ? "active" : ""}>
                                Traffic Infrastructure
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/mep-system-design-consulting/" className={pathname === "/en/consultancy-and-design/mep-system-design-consulting/" ? "active" : ""}>
                                MEP System
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/fire-protection-design-consulting/" className={pathname === "/en/consultancy-and-design/fire-protection-design-consulting/" ? "active" : ""}>
                                Fire Protection Design
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/energy-design-consulting/" className={pathname === "/en/consultancy-and-design/energy-design-consulting/" ? "active" : ""}>
                                Energy
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/consultancy-and-design/urban-planning-design-consulting/" className={pathname === "/en/consultancy-and-design/urban-planning-design-consulting/" ? "active" : ""}>
                                Urban Planning
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
