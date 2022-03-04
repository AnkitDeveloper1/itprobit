import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function MobileAppDevelopmentPage() {
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
            <DefaultLayout header={<Header heading="Mobile Application Development" />} classes="main-banner" navbarclassName="bgc" navbarColor="#ab3b61">
                <section className="services-stack mobcode-tagline cta pt-5">
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">Native and Hybrid Mobile App Development for the Mobile First World
                        </h3>
                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <p className="section-subheading">
                                    Expand your high-level business goals &amp; outcomes to derive mobile app development strategy,
                                    MVP/PoC strategy if needed, including platform selection, choice of technology, implementation
                                    sequence, and more.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="company-offers pt-5 pb-5" data-aos="fade-up">
                    <div className="container-fluid ">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/new/mobile_design.png" width={644} height={394} alt="Design" />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-black pl-2">
                                    <h2>1. Design</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-black" style={{fontWeight:'100'}}>Make a statement with UX &amp; UI
                                        design that
                                        wows yet is intuitive enough not to be noticeable.</p>
                                </div>
                                
                                <div className="container pl-4">
                                    <div className="row text-black">
                                        <h5><i className="fas fa-pencil-ruler greeno"></i> Interactive Design</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> UI Design</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> UX Audit</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Hire UX experts to conduct a focused UX Audit to identify weak user experience areas
                                                and improve your mobile apps.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 "></div>
                        <div className="row pt-5 pb-5 servicesPaddingLeftRight bgc">
                            <div className="col-md-6 my-3 pt-5 pb-5" data-aos="fade-up">
                                <div className="text-left pl-2 text-white">
                                    <h2>2. Build</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>Native App Development</p>
                                </div>
                                <div className="container pl-4">
                                    <div className="row text-white">
                                        <h5><i className="fas fa-pencil-ruler greeno"></i> Multi-Platform Native Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Hybrid App Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Design slick UI interfaces for your mobile app for maximum oomph and appeal.
                                            </p>
                                    </div>
                                    <div className="row text-white">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Hybrid App Development</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Hire UX experts to conduct a focused UX Audit to identify weak user experience areas
                                                and improve your mobile apps.
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3 pt-5" data-aos="fade-up">
                                <Image src="/images/Services/app_3.png" width={544} height={368} alt="Build" />
                            </div>
                        </div>
                        <div className="row pt-5"></div>
                        <div className="row pt-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/services/app_2.png" width="335" height="508" alt="Grow" />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-black pl-2">
                                    <h2>3. Grow</h2>
                                </div>
                                <div className="row pl-2">
                                    <div className="md-text-title-separator line-left"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-black" style={{fontWeight:'100'}}>Grow your business to next level.
                                    </p>
                                </div>
                                
                                <div className="container pl-4">
                                    <div className="row text-black">
                                        <h5><i className="fas fa-pencil-ruler greeno"></i> Interactive Design</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Use usage, performance, &amp; crash analytics to identify areas of improvement in your
                                                mobile apps.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Platform Migration</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                Identify the correct platform for your mobile apps and make the shift from existing
                                                tech stack with ease.
                                            </p>
                                    </div>
                                    <div className="row text-black">
                                        <h5><i className="fas fa-bezier-curve greeno"></i> Code Audit &amp; Optimisation</h5>
                                            <p style={{paddingRight:'5%'}}>
                                                HGet code reviewed to identify bottlenecks and problem areas. Have our expert mobile
                                                app developers optimise it for maximum performance.
                                            </p>
                                    </div>
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