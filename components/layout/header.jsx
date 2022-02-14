import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function HeaderLayout(props) {
  const { content, styles, navbarColor, navbarClass, classes } = props;

  return (
    <>
        {classes?
        <section style={styles} className={classes?classes:''}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-menu">
                            <nav className={navbarClass?"navbar fixed-top navbar-expand-lg h90"+{navbarClass}:"navbar fixed-top navbar-expand-lg h90"} style={{backgroundColor: navbarColor}}>
                            <Link href="/"><a className="navbar-brand"><Image src="/images/it-orbit-logo.png" alt="logo" width={180} height={48} /> </a></Link>
                            <h5 className="text-white" style={{paddingTop: '22px', marginLeft:'-15px'}}></h5>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fas fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 pt-4">
                                <li className="nav-item"><Link href="/services"><a className="nav-link">Services</a></Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Solutions
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/services/internet-of-things#arvr"><a className="dropdown-item">AR/VR Development</a></Link>
                                        <Link href="/services/blockchain-development"><a className="dropdown-item">Blockchain Development</a></Link>
                                        <Link href="/services#chatbot"><a className="dropdown-item">Chatbot Development</a></Link>
                                        <Link href="/services/enterprise-application-development"><a className="dropdown-item">Enterprise App Development</a></Link>
                                        <Link href="/services/internet-of-things"><a className="dropdown-item">IoT App Development</a></Link>
                                        <Link href="/services/mobile-app-development"><a className="dropdown-item">Mobile App Development</a></Link>
                                        <Link href="/services/web-app-development"><a className="dropdown-item">Web App Development</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        <Link href="/industries/automotive-and-transportation-solutions"><a className="dropdown-item">Mobility Solutions</a></Link>
                                        <Link href="/industries/financial-and-accounting"><a className="dropdown-item">Financial &amp; Accounting</a></Link>
                                        <Link href="#"><a className="dropdown-item">Food &amp; Beverages</a></Link>
                                        <Link href="#"><a className="dropdown-item">Healthcare &amp; Fitness</a></Link>
                                        <Link href="#"><a className="dropdown-item">Retail &amp; E-commerce</a></Link>
                                        <Link href="#"><a className="dropdown-item">Travel &amp; Hospitality</a></Link>
                                        <Link href="#"><a className="dropdown-item">Lifestyle &amp; Entertainment</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item"><Link href="/career"><a className="nav-link">Careers</a></Link></li>
                                <li className="nav-item"><Link href="/blogs"><a className="nav-link">Insights</a></Link></li>
                                <li className="nav-item"><Link href="/about"><a className="nav-link">Company</a></Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Testing
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        <Link href="#"><a className="dropdown-item">Automation</a></Link>
                                        <Link href="#"><a className="dropdown-item">Web Testing</a></Link>
                                        <Link href="#"><a className="dropdown-item">Mobile</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item"><Link href="/contact"><a className="nav-link">Contact Us</a></Link></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {content}
        </section>
        :
        <header style={styles} className={classes?classes:''}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-menu">
                            <nav className="navbar fixed-top navbar-expand-lg h90" style={{backgroundColor: navbarColor}}>
                            <Link href="/"><a className="navbar-brand"><Image src="/images/it-orbit-logo.png" alt="logo" width={180} height={48} /> </a></Link>
                            <h5 className="text-white" style={{paddingTop: '22px', marginLeft:'-15px'}}></h5>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fas fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 pt-4">
                                <li className="nav-item"><Link href="/services"><a className="nav-link">Services</a></Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Solutions
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link href="/services/internet-of-things#arvr"><a className="dropdown-item">AR/VR Development</a></Link>
                                        <Link href="/services/blockchain-development"><a className="dropdown-item">Blockchain Development</a></Link>
                                        <Link href="/services#chatbot"><a className="dropdown-item">Chatbot Development</a></Link>
                                        <Link href="/services/enterprise-application-development"><a className="dropdown-item">Enterprise App Development</a></Link>
                                        <Link href="/services/internet-of-things"><a className="dropdown-item">IoT App Development</a></Link>
                                        <Link href="/services/mobile-app-development"><a className="dropdown-item">Mobile App Development</a></Link>
                                        <Link href="/services/web-app-development"><a className="dropdown-item">Web App Development</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        <Link href="/industries/automotive-and-transportation-solutions"><a className="dropdown-item">Mobility Solutions</a></Link>
                                        <Link href="/industries/financial-and-accounting"><a className="dropdown-item">Financial &amp; Accounting</a></Link>
                                        <Link href="#"><a className="dropdown-item">Food &amp; Beverages</a></Link>
                                        <Link href="#"><a className="dropdown-item">Healthcare &amp; Fitness</a></Link>
                                        <Link href="#"><a className="dropdown-item">Retail &amp; E-commerce</a></Link>
                                        <Link href="#"><a className="dropdown-item">Travel &amp; Hospitality</a></Link>
                                        <Link href="#"><a className="dropdown-item">Lifestyle &amp; Entertainment</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item"><Link href="/career"><a className="nav-link">Careers</a></Link></li>
                                <li className="nav-item"><Link href="/blogs"><a className="nav-link">Insights</a></Link></li>
                                <li className="nav-item"><Link href="/about"><a className="nav-link">Company</a></Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Testing
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        <Link href="#"><a className="dropdown-item">Automation</a></Link>
                                        <Link href="#"><a className="dropdown-item">Web Testing</a></Link>
                                        <Link href="#"><a className="dropdown-item">Mobile</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item"><Link href="/contact"><a className="nav-link">Contact Us</a></Link></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {content}
        </header>
        }
    </>
  )
}