import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function InternetOfThingsPage() {
    
    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border-top: 5px solid #12be83 !important;
            }
        
            .bgc {
                background-color: #5d5c61 !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Internet Of Things" />} classes="main-banner" navbarClass="bgc" navbarColor="#5d5c61">
                <section className="services-stack mobcode-tagline cta pt-5">
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">Delivering IoT Services to Enterprise, Business &amp; Customers</h3>
                        <div className="row">
                            <div className="col-lg-12 text-left pb-5">
                                <p className="section-subheading">
                                    From the Development of a Smart Contract and Cryptocurrencies to Auditing the Processes before they go live on the unaltered system and helping start-ups raise an ICO, When you Hire Blockchain developers from us, you get a team of Blockchain developers, designers, and marketers, know how to employ the tools and languages that develops a decentralized ecosystem for your brand.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                <a href="javascirpt:" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Enterprise IoT Services</h3>
                                        <p className="description">
                                            Our IoT services with mobile app development are meant to transform enterprises with Smart products and mobility solutions to bridge the gap between physical and digital worlds.
                                        </p>
                                    </div>
                                </a>
                                <a href="javascirpt:" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Business IoT Services</h3>
                                        <p className="description">
                                            Leveraging IoT ecosystem, we provide expert consulting to help businesses to create a transformation roadmap and execute it with best-in-class business driven IoT mobile app development services. We create custom IoT Apps for Android and iOS platforms with Smart IoT solutions for Small and Medium scale businesses for diverse industry domains.
                                        </p>
                                    </div>
                                </a>
                                <a href="javascirpt:" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Customer IoT Services</h3>
                                        <p className="description">
                                            Instant availability of data and by using real-time data analytics, we have transcended businesses with IoT products and services and empowered them with seamless operations. With our reliable IoT services, it is time for you to step into the digital future.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section className="company-offers pt-5 pb-5" data-aos="fade-up" id="ibeacon">
                    <div className="container-fluid">
                        <div className="row pt-5 pb-5 bgc">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/Services/iot_1.png" alt="" width={515} height={336} />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text text-white">
                                    <h2>IBeacon BLE Technology</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left pl-3 pr-3 text-white" style={{fontWeight:'100'}}>MBluetooth 4.0 based ibeacon/BLE technology can enable the businesses to collect more and accurate data about their potential customers. Allowing owners to interact customers in a smart way by notifying them through their smartphones when they are in nearby area.</p>
                                </div>
                                <div className="container pt-3">
                                    <div className="row col-md-12 service-list pl-0">
                                        <ul className="ta-listW">
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> iBeacons Integration</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> BLE/Beacon Based City Tour Guide App</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Beacon SDK Integration in restaurant apps</a> </li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Heart Rate Measurement using BLE Sensors</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> BLE/iBeacon based Museum Application</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Temperature &amp; Humidity Measurement using BLE Sensors</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5" id="arvr"></div>

                        <div className="row pt-5 pb-5 servicesPaddingLeftRight">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left pl-2">
                                    <h2>AR &amp; VR Wearables</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left pl-4" style={{fontWeight:'100'}}>The constant innovations in hardware technology has enabled businesses to think about a phone less wearable interface. We deliver best-in-class services for Android and iOS compatible wearable mobile app development at affordable prices.</p>
                                </div>
                                
                                <div className="row service-list pl-2">
                                    <div className="col-md-6">
                                        <ul className="ta-list">
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i>Ar&amp;VR Apps</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Health &amp; Fitness App</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> OBD Devices</a> </li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Watch apps</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Google Glass Application development</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Augmented Reality App Development</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="ta-list">
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Wearable Clothing</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Wearable Glassware</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Wristband App</a> </li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> GPS Watches</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i> Activity Tracker Wearable (fitbit) applications</a></li>
                                            <li><a href="javascirpt:"><i className="fas fa-check"></i>Bluetooth Belts</a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/Services/app_3.png" alt="" width={644} height={436} />
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