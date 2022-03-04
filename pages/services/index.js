import Image from "next/image";
import Head from 'next/head'
import path from 'path'
import fs from 'fs/promises'
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export async function getServerSideProps(context) {
    // Get Pages
    const jsonDataSolutionsPages = await fetch("http://localhost:8080/api/pages/front/bytype/solutions");
    const solutionsPages = await jsonDataSolutionsPages.json()
    const jsonDataIndustriesPages = await fetch("http://localhost:8080/api/pages/front/bytype/industries");
    const industriesPages = await jsonDataIndustriesPages.json()
    const jsonDataTestingPages = await fetch("http://localhost:8080/api/pages/front/bytype/testing");
    const testingPages = await jsonDataTestingPages.json()
    // Get Services
    const filePathServices = path.join(process.cwd(), 'dummy', 'services.json');
    const jsonDataServices = await fs.readFile(filePathServices);
    const services = JSON.parse(jsonDataServices);
    
    //const services = await fetch("/dummy/services.json");
    return { props: {
        services: services,
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages,
    } };
}

export default function ServicesPage(props) {
    const { services, solutionsPages, industriesPages, testingPages } = props;
    return (
    <>
        <Head>
            <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
            <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
            <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
        </Head>
        <style jsx global>{`
        a {
            color: black;
        }

        a:hover {
            color: #e51b77;
        }

        h3 {
            font-weight: 600 !important;
        }

        .separatorBorderColor {
            border-top: 5px solid #0c3cd1 !important;
        }
        `}</style>
        <DefaultLayout header={<Header heading="Development Services" />} response={[solutionsPages, industriesPages, testingPages]} classes="main-banner" navbarColor="#0c3cd1">
            <section className="services-stack mobcode-tagline cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pt-5 pb-5">
                            <p className="section-subheading">
                                We map a strategy, build a solution or elevate your product experience with focused engagements
                                available as standalone offerings or as a part of your project’s service stack.
                            </p>
                        </div>
                        <div className="services-stack-grid col-lg-12">
                            <ul className="list-unstyled">
                                {services.map((service, index) => (
                                    <li key={service._id} className={index === 5 && 'border-right-0' || index > 5 && services.length != index && 'border-bottom-0' || index > 11 && services.length != index && 'border-top' || services.length === index && 'border-top' || ''}>
                                        <a href="#">
                                            <Image alt={service.name} width="50px" height="50px" src={service.icon} />
                                            <p className="text-center">{service.name}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="stack-detail">
                        <div id="androidAppDevelopment" className="sec-stack first-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/android.svg" />
                                <h3 className="android-dev mb-3">Android App Development</h3>
                            </div>
                            <p>ItprobitTech has specialization in Android App Development. With our experienced professionals, we develop apps that follow the considerations of the latest trends as well as future development standards. We have a team whose extensive experience in different programming languages like Kotlin, Java, and hybrid programming languages like Ionic, Flutter, and ReactJS has enabled us to serve the gaming, healthcare, sports, social media, and entertainment sectors very well.</p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/kotlin.png" />
                                                <p className=" stack-detail-sm text-center">Kotlin</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm text-center">Java</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/Xamarin.png" />
                                                <p className="stack-detail-sm">Xamarin</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/react.png" />
                                                <p className="stack-detail-sm">React Native</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/flutter.png" />
                                                <p className="stack-detail-sm">Flutter</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/ionic.jpg" />
                                                <p className="stack-detail-sm">Ionic</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href="services/mobile-dev.html" className="btn mob-cod-btn">Know More</a>
                        </div>
                        <hr />
                        <div id="iOSAppDevelopment" className="sec-stack second-stack">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico//iOS.svg" />
                                <h3 className="android-dev mb-3">iOS App Development</h3>
                            </div>
                            <p>
                                iOS app development is an area that requires honed core skills and extensive experience. With
                                extensive experience in the industry, ItprobitTech has proven record of satisfying businesses and
                                enterprise clients. We have been successful in providing the best user experience without
                                compromising on data privacy. Quality in every aspect is what we always focus on.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/swift.png" />
                                                <p className=" stack-detail-sm text-center">Swift 5</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/apple.png" />
                                                <p className="stack-detail-sm text-center">Objective C</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/Xamarin.png" />
                                                <p className="stack-detail-sm">Xamarin</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/react.png" />
                                                <p className="stack-detail-sm">React Native</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/flutter.png" />
                                                <p className="stack-detail-sm">Flutter</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/ionic.jpg" />
                                                <p className="stack-detail-sm">Ionic</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/mobile-dev.html" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="webDevelopment" className="sec-stack third-stack">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/web.svg" />
                                <h3 className="android-dev mb-3">Front End Development</h3>
                            </div>
                            <p>
                                ItprobitTech provides reliable HTML5 development services to various industry verticals. By using
                                the latest best tools, we build highly creative and innovative solutions for different platforms
                                and devices. Using the best design methodologies, we build quality products with on-time
                                delivery.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/angular.png" />
                                                <p className=" stack-detail-sm text-center">Angular</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/react.png" />
                                                <p className="stack-detail-sm text-center">React Js</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/vue.png" />
                                                <p className="stack-detail-sm">Vue Js</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/bootstrap.jpg" />
                                                <p className="stack-detail-sm">Bootstrap</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/backbone.png" />
                                                <p className="stack-detail-sm">Backbone Js</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/html.png" />
                                                <p className="stack-detail-sm">HTML5</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/enterprise-dev.html" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="crossPlaformDevelopment" className="sec-stack fourth-stack">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/crossplatform.svg" />
                                <h3 className="android-dev mb-3">Cross-Platform Development</h3>
                            </div>
                            <p>Cross-platform app development provides an app the versatility to run smoothly on different
                                platforms. Since there are a number of platforms available in the market, so it gets even more
                                important to develop an app that runs perfectly well on any platform. At ItprobitTech, we
                                strongly focus on this so that the changing trend doesn’t diminish the value of your app.</p>
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="list-unstyled stack-list">
                                        <li>Xamarin</li>
                                        <li>React Native</li>
                                        <li>Ionic</li>
                                        <li>PhoneGap</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="list-unstyled stack-list">
                                        <li>Corona</li>
                                        <li>Appcelerator</li>
                                        <li>Sencha Ext JS</li>
                                        <li>MonoCross</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="list-unstyled stack-list">
                                        <li>Kony</li>
                                        <li>Convertigo</li>
                                        <li>NativeScript</li>
                                        <li>RhoMobile Suite</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="design" className="sec-stack fifth-stack">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/uiux.svg" />
                                <h3 className="android-dev mb-3">UI/UX Design</h3>
                            </div>
                            <p>
                                ItprobitTech believes in design-driven development which ensures we deliver targeted product
                                before the user. We have a team of passionate designers and developers who create such engaging
                                design that forces a user to return back to the website/app. Our acquaintance with the latest
                                trend enables us to predict a user’s mindset in advance.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/photoshop.png" />
                                                <p className=" stack-detail-sm text-center">Adobe Photoshop</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/illustrator.jpg" />
                                                <p className="stack-detail-sm text-center">Adobe Illustrator</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/xd.png" />
                                                <p className="stack-detail-sm">Adobe Xd</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/invision.png" />
                                                <p className="stack-detail-sm">Invision</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/coreldraw.png" />
                                                <p className="stack-detail-sm">Corel draw</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/balasmiq.png" />
                                                <p className="stack-detail-sm">Balasmiq</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="node" className="sec-stack sixth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/node.svg" />
                                <h3 className="android-dev mb-3">Node.js Development</h3>
                            </div>
                            <p>Node.js incorporates the power to build swifter and highly scalable real-time applications that
                                can strengthen your back-end. Our team at ItprobitTech is highly skilled and has expertise in
                                Node.js API development which allows clients to be in sync with recent technological
                                advancements. We use Node.js to develop high performing web applications.</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>Node.js API Development and Integration</li>
                                        <li>Node.js CMS Development</li>
                                        <li>Node.js Server Side Development</li>
                                        <li>Node.js Web App Development</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>Node.js Plugin Development</li>
                                        <li>Node.js Packages Development</li>
                                        <li>Custom Node.js Application Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="iot" className="sec-stack seventh-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/iot.svg" />
                                <h3 className="android-dev mb-3">IoT App Development</h3>
                            </div>
                            <p>The Internet of Things has provided us with a new way of living an automated life by providing us
                                with smart devices. At ItprobitTech, we work to build solutions that give you the central control
                                to every device that you interact with in your day to day life. Our IoT solutions are capable of
                                becoming an integral part of your life.</p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm text-center">Java</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/python.png" />
                                                <p className="stack-detail-sm">Python</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/swift.png" />
                                                <p className="stack-detail-sm">Swift</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/js.png" />
                                                <p className="stack-detail-sm">Javascript</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/php.png" />
                                                <p className="stack-detail-sm">Php</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/iot-dev.html" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="blockchain" className="sec-stack eighth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/blockchain.svg" />
                                <h3 className="android-dev mb-3">Blockchain</h3>
                            </div>
                            <p>
                                Our IoT services with mobile app development are meant to transform enterprises with Smart
                                products and mobility solutions to bridge the gap between physical and digital worlds. Expert
                                IoT services will empower closed loop enterprise operations, improve supply chain and product
                                manufacturing process with enhanced productivity and cost-efficiency.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/bitcoin.png" />
                                                <p className="stack-detail-sm text-center">Bitcoin</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/eth.jpg" />
                                                <p className="stack-detail-sm">Ethereum</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C#</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/python.png" />
                                                <p className="stack-detail-sm">Python</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/swift.png" />
                                                <p className="stack-detail-sm">Swift</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/js.png" />
                                                <p className="stack-detail-sm">Javascript</p>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <a href="services/blockchain-dev.html" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="rubyonRailsDevelopment" className="sec-stack ninth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/ruby.svg" />
                                <h3 className="android-dev mb-3">Ruby on Rails Development</h3>
                            </div>
                            <p>To stay hand-to-hand with the latest technology we always work on the best new technology
                                available. We work on the latest version of Ruby on Rails while providing full support for
                                previous versions too. We have used MySQL 5, MongoDB with rails application for client projects.
                                We have used Sinatra in API development. We use Devise and OAuth 2.0 to provide authentication
                                and security to API end-points. We prefer to use the best tool for the job and always take the
                                client’s needs above all.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled stack-list">
                                        <li>Web and Application servers</li>
                                        <li>Agile practices, particularly test-driven development</li>
                                        <li>Ruby on Rails 2.x, 3.x, 4.x, 5.x</li>
                                        <li>Payment Gateway Integration in Rails</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled stack-list">
                                        <li>MySQL, PostgreSQL or Oracle</li>
                                        <li>JavaScript &amp; libraries: Jquery, MooTools, Prototype, etc</li>
                                        <li>Active record, Merb, Datamapper Frameworks</li>
                                        <li>Mootools, Lucene, Solr Technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="wearableAppDevelopment" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/wear__dev.svg" />
                                <h3 className="android-dev mb-3">Wearable App Development</h3>
                            </div>
                            <p>From strategizing to deployment, ItprobitTech is one-stop-solution for your Wearable app
                                development. We provide the best solution for Android and Apple smartwatches. Our experience in
                                developing fitness tracker apps can help turn your ideas into ground reality. Wearable devices
                                were in the market for a long time but, nowadays due to an increase in the number of wearable
                                devices from different manufacturers, the demand for intelligent apps has increased.</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>IoT-based Wearable Apps</li>
                                        <li>Android and Apple smartwatches</li>
                                        <li>Wearable Healthcare Apps &amp; Utility Apps</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>Augmented Reality Apps for Wearables</li>
                                        <li>Wearables for Entertainment and Games</li>
                                        <li>Wearable Apps for iOS and Android</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/iot-dev.html" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="iBeacon" className="sec-stack eleventh-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/ibeacon.svg" />
                                <h3 className="android-dev mb-3">iBeacon</h3>
                            </div>
                            <p>
                                iBeacon technology allows iPads and iPhones to continuously scan for nearby Bluetooth devices
                                using Bluetooth Low Energy (BLE). MobCoder’s appreciable experience in iBeacon app development
                                has allowed us to unlock the true potential of BLE thus providing the most reliable iBeacon app
                                development solution. We understand how to use the power that iBeacon provides using BLE to
                                power our clients’ business.
                            </p>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>Mobile Payments</li>
                                        <li>Indoor navigations &amp; maps</li>
                                        <li>Vehicle tracking</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled stack-list">
                                        <li>Integration with medical devices</li>
                                        <li>Discount notifications</li>
                                        <li>Document transfer</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/iot-dev.html#ibeacon" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="arvr" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/vr.svg" />
                                <h3 className="android-dev mb-3">AR &amp; VR App Development</h3>
                            </div>
                            <p>At ItprobitTech, we have a team of AR and VR app developers who have distinct technical skills to build high-quality AR and VR apps for both customers and business projects. Our experts can create such captivating solutions that will not only keep users engaged but will multiply your ROI.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled stack-list">
                                        <li>AR: Vuforia, Google Tango, Windows Holographic APIs, ARKit, ARCore</li>
                                        <li>VR: Oculus Platform, WebVR</li>
                                        <li>Game Engines: Unity, Unreal</li>

                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled stack-list">
                                        <li>AR: Microsoft HoloLens, Epson Moverio Glasses, Google Cardboard, Google Glass</li>
                                        <li>VR: Oculus Rift, HTC Vive, Google Daydream View, PSVR, Fove VR, Star VR, Windows 10
                                            VR</li>
                                        <li>Consoles: PS Vita</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm text-center">Java</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/python.png" />
                                                <p className="stack-detail-sm">Python</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/swift.png" />
                                                <p className="stack-detail-sm">Swift</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/js.png" />
                                                <p className="stack-detail-sm">Javascript</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/cplusplus.png" />
                                                <p className="stack-detail-sm">C ++</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="services/iot-dev.html#arvr" className="btn mob-cod-btn mt-3">Know More</a>
                        </div>
                        <hr />
                        <div id="chatbot" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/chatbot.png" />
                                <h3 className="android-dev mb-3">ChatBot Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <u>
                                        <h6>Customised Bots</h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>AI Bot, Mobile App Bot, NLP Bot</li>
                                        <li>Voice Interface Bot</li>
                                        <li>Flow based Bot, Hybrid Bot, Website Bot, Mobile App Bot</li>
                                        <li>Voice Interface Bot, Customised Bot</li>
                                        <li>Monitoring Bot, Artificially Intelligent Bot</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <u>
                                        <h6>Social Media Chatbot </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li> IBM Watson Bot, Microsoft Bot, WeChat Bot, Facebook Bot</li>
                                        <li>Skype Bot, Slack Bot, WhatsApp Bot, Telegram Bot</li>
                                    </ul>
                                    <br />
                                    <u>
                                        <h6>Consulting Bots </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>Concierge Bot, News Bot, Shopping Bot, Entertainment Bot</li>
                                        <li>Travel Bot, Support Bot</li>
                                        <li>Banking Bot, Personal Styling Bot</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/bot.png" />
                                                <p className=" stack-detail-sm text-center">Bot Framework, C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/node.svg" />
                                                <p className="stack-detail-sm text-center">Node.js</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/python.png" />
                                                <p className="stack-detail-sm">Python</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/swift.png" />
                                                <p className="stack-detail-sm">Swift</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/watson.jpg" />
                                                <p className="stack-detail-sm">IBM Watson</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/rasa.jpeg" />
                                                <p className="stack-detail-sm">RASA Stack </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="sharepoint" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/sharepoint.jpg" />
                                <h3 className="android-dev mb-3">SharePoint Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <u>
                                        <h6>Customised Bots</h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>AI Bot, Mobile App Bot, NLP Bot</li>
                                        <li>Voice Interface Bot</li>
                                        <li>Flow based Bot, Hybrid Bot, Website Bot, Mobile App Bot</li>
                                        <li>Voice Interface Bot, Customised Bot</li>
                                        <li>Monitoring Bot, Artificially Intelligent Bot</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <u>
                                        <h6>Social Media Chatbot </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li> IBM Watson Bot, Microsoft Bot, WeChat Bot, Facebook Bot</li>
                                        <li>Skype Bot, Slack Bot, WhatsApp Bot, Telegram Bot</li>
                                    </ul>
                                    <br />
                                    <u>
                                        <h6>Consulting Bots </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>Concierge Bot, News Bot, Shopping Bot, Entertainment Bot</li>
                                        <li>Travel Bot, Support Bot</li>
                                        <li>Banking Bot, Personal Styling Bot</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="java" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                <h3 className="android-dev mb-3">Java Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/struts.png" />
                                                <p className=" stack-detail-sm text-center">Struts</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/spring.svg" />
                                                <p className="stack-detail-sm text-center">Spring MVC</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/hibernate.jpg" />
                                                <p className="stack-detail-sm">Hibernate</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm">Java Core</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/jsf.png" />
                                                <p className="stack-detail-sm">Java Server Faces</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/kafka.svg" />
                                                <p className="stack-detail-sm">Kafka </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="dotnet" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/dotnet.png" />
                                <h3 className="android-dev mb-3">.Net Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions
                                for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build
                                chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we
                                provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C Sharp</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/mvc.svg" />
                                                <p className="stack-detail-sm text-center">Dot Net MVC</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/corenet.png" />
                                                <p className="stack-detail-sm">Dot Net Core</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/bot.png" />
                                                <p className="stack-detail-sm">Bot Framework, C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/vb.png" />
                                                <p className="stack-detail-sm">Visual Basic</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/uwp.png" />
                                                <p className="stack-detail-sm">UWP</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="enterprise" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/enterprise.png" />
                                <h3 className="android-dev mb-3">Enterprise App Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <u>
                                        <h6>Customised Bots</h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>AI Bot, Mobile App Bot, NLP Bot</li>
                                        <li>Voice Interface Bot</li>
                                        <li>Flow based Bot, Hybrid Bot, Website Bot, Mobile App Bot</li>
                                        <li>Voice Interface Bot, Customised Bot</li>
                                        <li>Monitoring Bot, Artificially Intelligent Bot</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <u>
                                        <h6>Social Media Chatbot </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li> IBM Watson Bot, Microsoft Bot, WeChat Bot, Facebook Bot</li>
                                        <li>Skype Bot, Slack Bot, WhatsApp Bot, Telegram Bot</li>
                                        <br />
                                        <u>
                                            <h6>Consulting Bots </h6>
                                        </u>
                                        <li>Concierge Bot, News Bot, Shopping Bot, Entertainment Bot</li>
                                        <li>Travel Bot, Support Bot</li>
                                        <li>Banking Bot, Personal Styling Bot</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm text-center">Java</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/zoho.png" />
                                                <p className="stack-detail-sm">Zoho</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/sharepoint.jpg" />
                                                <p className="stack-detail-sm">Sharepoint</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/salesforce.png" />
                                                <p className="stack-detail-sm">Salesforce</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/laravel.png" />
                                                <p className="stack-detail-sm">Laravel</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="custom" className="sec-stack tenth-sec">
                            <div className="stack-heading">
                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/code-512.png" />
                                <h3 className="android-dev mb-3">Custom Software Development</h3>
                            </div>
                            <p>Empowered with AI, NLP, and Machine Learning technologies, we offer complete chatbot solutions for Facebook, Twitter, Slack, Kik, Microsoft and much more. Whether you are looking to build chat bots, conversation bots, IVR bots, online chat bots, text bots or messaging bots, we provide differentiated services exactly tailored to meet your needs.
                            </p>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <u>
                                        <h6>Customised Bots</h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li>AI Bot, Mobile App Bot, NLP Bot</li>
                                        <li>Voice Interface Bot</li>
                                        <li>Flow based Bot, Hybrid Bot, Website Bot, Mobile App Bot</li>
                                        <li>Voice Interface Bot, Customised Bot</li>
                                        <li>Monitoring Bot, Artificially Intelligent Bot</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <u>
                                        <h6>Social Media Chatbot </h6>
                                    </u>
                                    <ul className="list-unstyled stack-list">
                                        <li> IBM Watson Bot, Microsoft Bot, WeChat Bot, Facebook Bot</li>
                                        <li>Skype Bot, Slack Bot, WhatsApp Bot, Telegram Bot</li>
                                        <br />
                                        <u>
                                            <h6>Consulting Bots </h6>
                                        </u>
                                        <li>Concierge Bot, News Bot, Shopping Bot, Entertainment Bot</li>
                                        <li>Travel Bot, Support Bot</li>
                                        <li>Banking Bot, Personal Styling Bot</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="services-stack-grid-sm col-lg-12">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <a href="#androidAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/csharp.jpg" />
                                                <p className=" stack-detail-sm text-center">C#</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#iOSAppDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/java-icon.png" />
                                                <p className="stack-detail-sm text-center">Java</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#webDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/python.png" />
                                                <p className="stack-detail-sm">Python</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#crossPlaformDevelopment">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/fsharp.png" />
                                                <p className="stack-detail-sm">F Sharp</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#design">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/node.svg" />
                                                <p className="stack-detail-sm">Node js</p>
                                            </a>
                                        </li>
                                        <li className="border-right-0">
                                            <a href="#node">
                                                <Image width={40} height={40} alt="Android App Development" src="/images/services-ico/laravel.png" />
                                                <p className="stack-detail-sm">Laravel</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe-form section-ptb main-banner" style={{backgroundColor: '#0c3cd1'}} data-aos="flip-left">
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
                            <a className="ta-button mt-2 openForm" href="#">Get in Touch with us</a>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    </>
    );
}