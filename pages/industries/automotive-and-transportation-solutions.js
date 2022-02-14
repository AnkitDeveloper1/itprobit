import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function AutomotiveAndTransportationSolutionsPage() {

    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border: 2px solid #12be83 !important;
            }
        
            h1 {
                font-size: 3.5rem !important;
            }
        
            .bgc {
                background-color: #5d5c61;
            }
            `}</style>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <DefaultLayout header={<Header heading="Automotive &amp; Transportation Solutions" bgcolor='#8b4ea57a' />} classes="main-banner" navbarclassName="" navbarColor="#5d5c61" styles={{backgroundImage:'url(/images/industry/mobility.jpg)'}}>
                <section className="services-stack mobcode-tagline cta pt-5" style={{backgroundColor:'white !important'}}>
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">
                            Smart Mobility Solutions driving Business Excellence in Automotive &amp; Transportation
                        </h3>
                        <div className="row">
                            <div className="col-lg-12 text-left pb-5">
                                <p className="section-subheading">
                                    Automotive and Transportation industry is experiencing an immense overhaul in infrastructure due
                                    to mobility solutions and technology while becoming more dynamic than ever. On the flipside,
                                    demands are also constantly changing resource utilization, product customization, safety
                                    requirements and cost-effective solutions.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="company-offers pt-5 pb-5" data-aos="fade-up">
                    <div className="container-fluid">

                        <div className="row pb-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/industry/mobility_1.png" alt="IoT based Automotive Solutions" width={644} height={374} />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white">
                                    <h2>IoT based Automotive Solutions &amp; Connected Vehicles Platform</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>
                                        Connected vehicle platform is a revolution in the automotive industry leveraging V2V
                                        technology that has allowed drivers to stay in touch with the world. We provide seamless
                                        integration of IoT client SDK into different types of automotive hardware like OBD2 chips,
                                        sensors, ECU, steering, lighting etc. while providing connectivity with excellent features.
                                    </p>
                                </div>
                                
                                <div className="container pl-2 pt-3">
                                    <div className="row">

                                        <div className="col-md-6 service-list">
                                            <ul className="ta-listW">
                                                <li><a href=""><i className="fas fa-check"></i> Connected Cars Platform and
                                                        monitoring</a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Cloud based solutions for
                                                        Infotainment
                                                    </a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Optimized routing for better
                                                        efficiency</a> </li>
                                                <li><a href=""><i className="fas fa-check"></i> Smart Parking solutions</a>
                                                </li>


                                            </ul>
                                        </div>

                                        <div className="col-md-6 service-list">
                                            <ul className="ta-listW">
                                                <li><a href=""><i className="fas fa-check"></i> Service Center Platform to
                                                        search
                                                        nearby stations</a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Asset Tracking solutions and
                                                        Smart
                                                        route management</a>
                                                </li>
                                                <li><a href=""><i className="fas fa-check"></i> Real-time updates to
                                                        passengers and
                                                        users</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 bgc">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-center text-white">
                                    <h2>School Bus Tracking System </h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>
                                        Our GPS based custom mobility solutions for School Bus management and tracking is the core
                                        to build a safe environment in the schools as well as on the roads. Our White Label
                                        solutions help schools and educational institutions to enhance brand value with school bus
                                        tracking solutions.
                                    </p>
                                </div>
                                
                                <div className="container pl-4 pt-3">
                                    <div className="row">

                                        <div className="col-md-12 service-list">
                                            <ul className="ta-listW">
                                                <li><a href=""><i className="fas fa-check"></i> Custom mobile app for School
                                                        Bus
                                                        management</a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Real-time tracking of school
                                                        bus for
                                                        Parents and Administration
                                                    </a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Accurate and live monitoring
                                                        of bus
                                                        fleet with various driving and location parameters</a> </li>
                                                <li><a href=""><i className="fas fa-check"></i> Geo fencing</a>
                                                </li>
                                                <li><a href=""><i className="fas fa-check"></i>GPS devices or RFID tagging
                                                        for boarding
                                                        notifications to Parents </a>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/industry/mobility_2.png" alt="Custom mobile app for School Bus management" width={644} height={460} />
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/industry/mobility_3.png" alt="Fleet Management Solutions with Custom Mobile App" width="644" height="330" />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white pl-2">
                                    <h2>Fleet Management Solutions with Custom Mobile App &amp; OBD-II Chip </h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left text-white pl-4" style={{fontWeight:'100'}}>We provide White Label automotive
                                        mobility
                                        solutions leveraging IoT and custom mobile app development that allows tracking, safety
                                        measures, predictive analysis for maintenance for vehicles in the fleet with the help of ECU
                                        data and algorithms.</p>
                                </div>
                                
                                <div className="row col-md-12 service-list pl-4">
                                    <ul className="ta-listW">
                                        <li><a href=""><i className="fas fa-check"></i> Vehicle Telematics and Fleet
                                                management</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Real-time and remote vehicle
                                                tracking</a></li>
                                        <li><a href=""><i className="fas fa-check"></i> Real-time driving behaviour &amp;
                                                monitoring</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Engine auto-lock &amp; Speed control Fuel
                                                tracking</a></li>
                                        <li><a href=""><i className="fas fa-check"></i> Fault Code detection and
                                                notification</a></li>
                                        <li><a href=""><i className="fas fa-check"></i> Predictive analysis and
                                                maintenance</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
                <section className="subscribe-form section-ptb main-banner bgc" data-aos="flip-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center pb-3">
                                <div className="section-intro text-white">
                                    <h2 className="section-title text-white">We would love to hear from you!</h2>
                                    <p>We enjoy adapting our strategies to offer every client the best solutions that are at the
                                        forefront of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mx-auto">
                                <a className="ta-button mt-2 openForm" href="">Get in Touch with us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )

}