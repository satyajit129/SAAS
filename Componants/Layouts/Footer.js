import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-1 ngh-bg-gradient mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-white-50">Copyright &copy; Nagad Hisab { new Date().getFullYear()}</div>
                    <div>
                        <Link href="#">Privacy Policy</Link>
                        &middot;
                        <Link href="#">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer