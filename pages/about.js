import Image from "next/image";
import Head from 'next/head'
import Link from "next/link";
import CountUp from 'react-countup';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
import DefaultLayout from '../components/layout/default'
import Header from '../components/services/header'

export default function AboutPage() {

    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .jumbotron {
                background-color: #e51b77;
                color: #fff;
                height: -webkit-fill-available;
                border-radius: 0px !important;
            }
        
            .separatorBorderColor {
                border-top: 5px solid #f16c52 !important;
            }
        
            .counter {
                background-color: #f5f5f5;
                padding: 20px 0;
                border-radius: 5px;
            }
        
            .count-title {
                font-size: 40px;
                font-weight: normal;
                margin-top: 10px;
                margin-bottom: 0;
                text-align: center;
            }
        
            .count-text {
                font-size: 13px;
                font-weight: normal;
                margin-top: 10px;
                margin-bottom: 0;
                text-align: center;
            }
        
            .fa-2x {
                margin: 0 auto;
                float: none;
                display: table;
                color: #4ad1e5;
            }
            `}</style>
            <DefaultLayout header={<Header heading="About Us" />} classes="main-banner" navbarclassName="" navbarColor="#f16c52">
                <br />
                <br />
                
                <section className="services-description">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto text-center">
                                <div className="section-intro">
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="services-desc-wraper row">
                                    <div className="services-desc-image col-md pr-5" data-aos="fade-up">
                                        <Image width={523} height={351} className="img-fluid" src="/images/new/Asset-1.png" alt="services" />
                                    </div>
                                    <div className="services-desc-content col-md" data-aos="fade-up">
                                        <h2 className="section-title">We Help Startups &amp; Brands</h2>
                                        <p>Since 2009 Itprobit has been working with businesses and organisations, both large and small to provide technical and creative excellence in digital technologies. We, at Itprobit, are backed by teams of dynamic and talented professionals who employ their technical expertise to devise high-end, world-class mobile and web based software solutions. We pride ourselves on being at the forefront of digital trends specialising in helping clients to solve the most complex of challenges.</p>
                                        <div className="service-list">
                                            <ul className="ta-list">
                                                <li><a href="#"><i className="fas fa-check"></i> Web Application Development</a></li>
                                                <li><a href="#"><i className="fas fa-check"></i> Mobile Application Development</a></li>
                                                <li><a href="#"><i className="fas fa-check"></i> IOT Developement</a> </li>
                                                <li><a href="#"><i className="fas fa-check"></i> Blockchain Application Development</a></li>
                                                <li><a href="#"><i className="fas fa-check"></i> Artificial Intelligence</a></li>
                                            </ul>
                                        </div>
                                        <a className="ta-secondary mt-4" href="#">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <section className="services-description">
                    
                    <div className="container">
                        <div className="row">
                            <br />
                            <div className="col text-center">
                                <h2 className="section-title">Our Mighty Stats Narrates Our Story</h2>
                                <p>We are India&apos;s best &amp; hand-picked tech talent having experience in working with great companies around the world and across time-zones.</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col">
                                <div className="counter">
                                    <i className="fa fa-crop fa-2x"></i>
                                    <CountUp className="timer count-title" start={0} end={10}>10</CountUp>
                                    <p className="count-text ">Years</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">
                                    <i className="fa fa-users fa-2x"></i>
                                    <CountUp className="timer count-title" start={0} end={250}>250</CountUp>
                                    <p className="count-text ">Happy Clients</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">

                                    <i className="fa fa-code fa-2x"></i>
                                    <CountUp className="timer count-title" start={0} end={400}>400</CountUp>
                                    <p className="count-text ">Project Complete</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">
                                    <i className="fa fa-coffee fa-2x"></i>
                                    <CountUp className="timer count-title" start={0} end={157}>157</CountUp>
                                    <p className="count-text ">Coffee With Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                
                <br />
                <br />
                
                <section className="section-ptb bg-semi-hover" data-aos="fade-up" style={{backgroundColor:'#e2eaec'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left pb-5">
                                <div className="section-intro">
                                    <h2 className="section-title">Meet Our Application Experts</h2>
                                    <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <OwlCarousel className="team-members-carousel owl-carousel" loop items={4} margin={30}>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-3.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Priya</h6>
                                            <p>Chief Operating Officer</p>

                                        </div>
                                    </div>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-4.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Ashwani Kumar</h6>
                                            <p>Digital Transformation, Head</p>
                                        </div>
                                    </div>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-1.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Yogender Singh</h6>
                                            <p>Head of IOT</p>

                                        </div>
                                    </div>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-4.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Rakesh Verma</h6>
                                            <p>Chief Technical Officer</p>

                                        </div>
                                    </div>
                                </OwlCarousel>
                                <br />
                                <OwlCarousel className="team-members-carousel2 owl-carousel" loop items={4} margin={30}>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-4.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Sarabjit Singh</h6>
                                            <p>Technical Lead, Web</p>
                                        </div>
                                    </div>

                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-1.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Bhushan Rana</h6>
                                            <p>Technical Lead, Mobile</p>

                                        </div>
                                    </div>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-4.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Akshay Kashyap</h6>
                                            <p>Solution Expert, Blockchain</p>
                                        </div>
                                    </div>
                                    <div className="single-menter text-center border p-4 bg-white">
                                        <div className="member-image pb-4">
                                            <Image width={150} height={150} src="/images/team/team-3.jpg" alt="member one" className="img-fluid" />
                                        </div>
                                        <div className="member-info">
                                            <h6>Gurpreet Kaur</h6>
                                            <p>Full Stack Developer, Lead</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            
                            </div>
                        </div>
                    </div>
                </section>
                
                <br />
                
                <section className="subscribe-form section-ptb main-banner" style={{backgroundColor: '#f16c52'}} data-aos="flip-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center pb-3">
                                <div className="section-intro text-white">
                                    <h2 className="section-title text-white">We would love to hear from you!</h2>
                                    <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mx-auto">
                                <a className="ta-button mt-2 openForm" href="#">Get in Touch with us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    );
    
}