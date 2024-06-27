"use client"
import Breadcrumb from "@/Componants/Layouts/Breadcrumb";
import Footer from "@/Componants/Layouts/Footer";
import Nav from "@/Componants/Layouts/Nav";
import Sidebar from "@/Componants/Layouts/Sidebar";
import "@/assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@/assets/styles/style.scss"
import Head from 'next/head';
import Link from "next/link";

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>

            <body className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Sidebar />
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                               
                                {children}
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>


            </body>
        </html>
    );
}
