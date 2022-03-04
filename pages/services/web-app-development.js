import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function WebAppDevelopmentPage() {
    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border-top: 5px solid #ab3b61 !important;
            }
        
            .bgc {
                background-color: #ab3b61 !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Web Application Development" />} classes="main-banner" navbarclassName="bgc" navbarColor="#ab3b61">
                <section className="services-stack mobcode-tagline cta pt-5">
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">eCommerce / Enterprise Portals Services
                        </h3>
                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <p className="section-subheading">
                                    As a matured e-Commerce solutions provider, we have helped create some rich e-commerce web and
                                    mobile applications, which when measured through business metrics, have offered our customers
                                    higher revenues and greater visibility of their products. Our expertise spans across B2B and B2C
                                    e-Commerce portals.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="company-offers pt-5 pb-5" data-aos="fade-up">
                    <div className="container-fluid ">
                        <div className="row pt-5 pb-5 bgc">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/new/mobile_design.png" width={644} height={394} alt="Ecommerce Development" />
                            </div>
                            <div className="col-md-6 my-3 text-white" data-aos="fade-up">
                                <div className="text-left pl-2">
                                    <h2>Ecommerce Development</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>Native App Development</p>
                                </div>
                                
                                <div className="container pl-4">
                                    <div className="row text-white">
                                        <h5>
                                            1. eCommerce Specialisation</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                        </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5>2.
                                            Enterprise Delivery Practices</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                        </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5>3. Constantly Updated eCommerce Developers</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            Hire UX experts to conduct a focused UX Audit to identify weak user experience areas
                                            and improve your mobile apps.
                                        </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5>4. Security Focussed eCommerce Development</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            Hire UX experts to conduct a focused UX Audit to identify weak user experience areas
                                            and improve your mobile apps.
                                        </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5>5. Agile Processes Focussed</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            Hire UX experts to conduct a focused UX Audit to identify weak user experience areas
                                            and improve your mobile apps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="services-stack mobcode-tagline cta">
                                <div className="container pt-5">
                                    <h3 className="android-dev mb-3 text-center">OUR DEVELOPMENT PROCESS
                                    </h3>
                                    <div className="row pl-2">
                                        <div className="md-text-title-separator line-center"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <p className="section-subheading">
                                                We deliver highest level of customer service by deploying innovative and
                                                collaborative
                                                project management systems to build the most professional, robust and highly
                                                scalable
                                                web &amp; mobile solutions with highest quality standards.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <div className="row pt-5 pb-5 pl-5">
                                    <div className="main-timeline10">
                                        <div className="col-md-3 col-sm-6 timeline">
                                            <div className="timeline-inner">
                                                <div className="year">POST</div>
                                                <div className="timeline-content">
                                                    <p className="description text-left pt-2">
                                                        Our analysts will thoroughly review your project requirements and select the
                                                        most experienced resource that is best-suited for your project.
                                                    </p>

                                                </div>
                                                <div className="timeline-icon">
                                                    <i className="fa fa-share-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 timeline">
                                            <div className="timeline-inner">
                                                <div className="year">DISCUSS</div>
                                                <div className="timeline-content">
                                                    <p className="description text-left pt-2">
                                                        Our experts will contact you within no time to discuss your project related
                                                        queries and to offer the best solution for your project development.
                                                    </p>

                                                </div>
                                                <div className="timeline-icon">
                                                    <i className="fa fa-comments"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 timeline">
                                            <div className="timeline-inner">
                                                <div className="year">SET TIMELINE</div>
                                                <div className="timeline-content">
                                                    <p className="description text-left pt-2">
                                                        Based on the project consultation provided by our experts, you can choose
                                                        the
                                                        engagement timelines for your project execution.
                                                    </p>

                                                </div>
                                                <div className="timeline-icon">
                                                    <i className="fa fa-hourglass-start"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 timeline">
                                            <div className="timeline-inner">
                                                <div className="year">PAY ONLINE</div>
                                                <div className="timeline-content">
                                                    <p className="description text-left pt-2">
                                                        Make payment through our 100% secure online system and our team shall
                                                        immediately get started on your project within 24 hours.
                                                    </p>

                                                </div>
                                                <div className="timeline-icon">
                                                    <i className="fa fa-money-bill-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        <div className="row pt-5 pb-5 servicesPaddingLeftRight">
                            <div className="col-md-6 my-3 pt-5 pb-5" data-aos="fade-up">
                                <div className="text-left pl-2 text-black">
                                    <h2>Custom Web Development</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>

                                <div className="container pl-4">
                                    <div className="row text-black">
                                        <h5><i className="fas fa-pencil-ruler greeno"></i> Multi-Platform Native Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Hybrid App Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Hybrid App Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Hire UX experts to conduct a focused UX Audit to identify weak user experience
                                                areas
                                                and improve your mobile apps.
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3 pt-5" data-aos="fade-up">
                                <Image src="/images/Services/app_3.png" width={544} height={368} alt="Custom Web Development" />
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