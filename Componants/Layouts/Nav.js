import Link from 'next/link';
import React from 'react'

const Nav = () => {
    const handleLogout = ()=> {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    const handleSideBarToggle = () => {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {

            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

        }
    }
    return (
        <nav className="sb-topnav navbar navbar-expand ngh-bg-gradient">
            <Link className="navbar-brand ps-3" href="/">
                <img src="/logo.png" alt="Logo" className={'img-fluid'} />
            </Link>

            <button onClick={handleSideBarToggle} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>

            <ul className="navbar-nav ms-auto me-3 me-lg-4 align-items-center">
                <p className="text-white ">Satyajit Roy</p>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={handleLogout} className="dropdown-item" >Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;