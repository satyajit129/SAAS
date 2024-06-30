import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion ngh-bg-gradient" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" href="/">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Layouts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" href="layout-static.html">Static Navigation</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <p><small>Premium Package | Version 0.0.1-alpha</small></p>
                <p><small>Current Ip: 192.168.0.1</small></p>
            </div>
        </nav>
    )
}

export default Sidebar