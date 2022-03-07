import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

/*export async function getServerSideProps(context) {
    // Get Pages
    const jsonDataSolutionsPages = await fetch("http://localhost:8080/api/pages/front/bytype/solutions");
    const solutionsPages = await jsonDataSolutionsPages.json()
    console.log
    const jsonDataIndustriesPages = await fetch("http://localhost:8080/api/pages/front/bytype/industries");
    const industriesPages = await jsonDataIndustriesPages.json()
    const jsonDataTestingPages = await fetch("http://localhost:8080/api/pages/front/bytype/testing");
    const testingPages = await jsonDataTestingPages.json()
    
    return { props: {
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages
    } };
}*/

export default function HeaderLayout(props) {
  const { content, styles, navbarColor, navbarClass, classes, response } = props;
  const solutionsPages = response[0];
  const industriesPages = response[1];
  const testingPages = response[2];
  
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
                                        {solutionsPages.data.map((solution, index) => (
                                            <Link href={"/services/"+solution.url} key={index}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        {industriesPages.data.map((solution, index) => (
                                            <Link href={"/industries/"+solution.url} key={index}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
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
                                        {testingPages.data.map((solution, index) => (
                                            <Link href={"/testing/"+solution.url} key={index}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
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
                                        {solutionsPages.data.map(solution => (
                                            <Link href={"/services/"+solution.url} key={solution._id}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownIndustry" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownIndustry">
                                        {industriesPages.data.map(solution => (
                                            <Link href={"/industries/"+solution.url} key={solution._id}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
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
                                        {testingPages.data.map(solution => (
                                            <Link href={"/testing/"+solution.url} key={solution._id}><a className="dropdown-item">{solution.title}</a></Link>
                                        ))}
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