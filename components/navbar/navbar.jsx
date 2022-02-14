import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    const [listMenu, setMenu] = useState([
        {id: 1, label: "Home", url: "/", dropdown: false},
        {id: 2, label: "Services", url: "/services", dropdown: false},
        {id: 3, label: "Solutions", url: "#", dropdown: true, dropdown_options: [
            {id: 4, label: "AR/VR Development", url: "#", dropdown: false},
            {id: 5, label: "Blockchain Development", url: "#", dropdown: false},
        ]},
    ]);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-background">
            <div className="container-fluid">
                <Link href="#"><a className="navbar-brand"><Image src="/images/it-orbit-logo.png" alt="Logo" width={180} height={48}/></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {listMenu.map((item) => (
                            <Fragment key={item.id}>
                                {!item.dropdown && 
                                <li className="nav-item">
                                    <Link href={item.url}><a className={router.pathname === item.url?"nav-link active":"nav-link"} aria-current="page">{item.label}</a></Link>
                                </li>
                                }
                                {item.dropdown && <li className="nav-item dropdown">
                                    <Link href="#"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.label}
                                    </a></Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {item.dropdown_options.map(option => (
                                            <li key={option.id}><Link href={option.url}><a className="dropdown-item">{option.label}</a></Link></li>
                                        ))}
                                    </ul>
                                </li>}
                            </Fragment> 
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}