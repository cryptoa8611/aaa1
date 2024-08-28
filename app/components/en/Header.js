'use client'
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function HeaderEn() {
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
                  <a href="/en">
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
                          DACES CORP.
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
                        <p>Hotline</p>
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
                  <Link href="/en/" className={`nav-item nav-link ${pathname === "/en/" ? "active" : ""}`}>
                    Home
                  </Link>
                  <Link href="/en/about-us/" className={`nav-item nav-link ${pathname === "/en/about-us/" ? "active" : ""}`}>
                    About us
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/en/consultancy-and-design/") ? "active" : ""}`}
                    >
                      Consultancy &amp; Design
                    </Link>
                    <div className="dropdown-menu">
                      <Link href="/en/consultancy-and-design/architecture-and-interior-design-consulting/" className="dropdown-item">
                        Architecture &amp; Interior
                      </Link>
                      <Link href="/en/consultancy-and-design/structure-design-consulting/" className="dropdown-item">
                        Structure
                      </Link>
                      <Link href="/en/consultancy-and-design/traffic-infrastructure-design-consulting/" className="dropdown-item">
                        Traffic Infrastructure
                      </Link>
                      <Link href="/en/consultancy-and-design/mep-system-design-consulting/" className="dropdown-item">
                        MEP System
                      </Link>
                      <Link href="/en/consultancy-and-design/fire-protection-design-consulting/" className="dropdown-item">
                        Fire Protection Design
                      </Link>
                      <Link href="/en/consultancy-and-design/energy-design-consulting" className="dropdown-item">
                        Energy
                      </Link>
                      <Link href="/en/consultancy-and-design/urban-planning-design-consulting" className="dropdown-item">
                        Urban Planning
                      </Link>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/en/bim-solutions/") ? "active" : ""}`}
                    >
                      BIM Solutions
                    </Link>
                    <div className="dropdown-menu">
                      <Link href="/en/bim-solutions/bim-consultancy-services/" className="dropdown-item">
                        BIM Consultancy Services
                      </Link>
                      <Link href="/en/bim-solutions/3d-bim-modeling/" className="dropdown-item">
                        3D/BIM Modeling
                      </Link>
                      <Link href="/en/bim-solutions/bim-coordination/" className="dropdown-item">
                        BIM Coordination
                      </Link>
                      <Link href="/en/bim-solutions/bim-for-asset-facility-management/" className="dropdown-item">
                        BIM for Facility Management
                      </Link>
                      <Link href="/en/bim-solutions/3d-laser-scanning-survey/" className="dropdown-item">
                        3D/Laser Scannning Survey
                      </Link>
                      <Link href="/en/bim-solutions/scan-to-bim/" className="dropdown-item">
                        Scan to BIM/As-built
                      </Link>
                      <Link href="/en/bim-solutions/ar-vr-technology/" className="dropdown-item">
                        AR/VR Technology
                      </Link>
                      <Link href="/en/bim-solutions/bim-4D-construction-simulation/" className="dropdown-item">
                        BIM 4D Construction Simulation
                      </Link>
                      <Link href="/en/bim-solutions/bim-automation/" className="dropdown-item">
                        BIM Automation
                      </Link>
                    </div>
                  </div>
                  <Link href="/en/portfolio/" className={`nav-item nav-link ${pathname === "/en/portfolio/" ? "active" : ""}`}>
                    Portfolio
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className={`nav-link dropdown-toggle ${pathname.startsWith("/en/training/") ? "active" : ""}`}
                    >
                      Training
                    </a>
                    <div className="dropdown-menu">
                      <Link href="/en/training/bim-revit-architecture-course/" className="dropdown-item">
                        BIM Revit Architecture
                      </Link>
                      <Link href="/en/training/bim-revit-structure-course/" className="dropdown-item">
                        BIM Revit Structure
                      </Link>
                      <Link href="/en/training/bim-revit-mefp-course/" className="dropdown-item">
                        BIM Revit MEFP
                      </Link>
                      <Link href="/en/training/bim-manager-course/" className="dropdown-item">
                        BIM Manager
                      </Link>
                      <Link href="/en/training/bim-gis-course/" className="dropdown-item">
                        BIM/GIS		
                      </Link>
                      <Link href="/en/training/structural-design-course/" className="dropdown-item">
                        Structural Design
                      </Link>
                      <Link href="/en/training/mepf-design-course/" className="dropdown-item">
                        MEPF Design 	
                      </Link>
                      <Link href="/en/training/civil-and-infrastructure-design-course/" className="dropdown-item">
                        Civil and Infrastructure Design 	
                      </Link>
                      <Link href="/en/training/lighting-design-course/" className="dropdown-item">
                        Lighting Design		
                      </Link>
                      <Link href="/en/training/ar-vr-development-course/" className="dropdown-item">
                        AR/VR Development		
                      </Link>
                      <Link href="/en/training/4d-construction-simulation-course/" className="dropdown-item">
                        4D Construction Simulation
                      </Link>
                      <Link href="/en/training/revit-api-and-dynamo-course/" className="dropdown-item">
                        Revit API and Dynamo
                      </Link>
                    </div>
                  </div>
                  <Link href="/en/news/" className={`nav-item nav-link ${pathname === "/en/news/" ? "active" : ""}`}>
                    News
                  </Link>
                  <Link href="/en/contact/" className={`nav-item nav-link ${pathname === "/en/contact/" ? "active" : ""}`}>
                    Contact
                  </Link>
                </div>
                <div className="ml-auto social-buttons">
                  <a href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href>
                    <i className="fab fa-youtube" />
                  </a>
                </div>
                <button className="btn btn-ams" > AMS</button>
                <Link href="/vi" className="nav-item nav-link btn ml-2">
                    Vi
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
