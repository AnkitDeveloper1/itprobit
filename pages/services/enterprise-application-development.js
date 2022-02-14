import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function EnterpriseApplicationDevelopmentPage() {
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
        
            .bgcService {
                background-color: #2C4251 !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Enterprise Application Development" />} classes="main-banner" navbarclassName="bgcService" navbarColor="#2C4251">
                <section className="services-stack mobcode-tagline cta pt-5">
                    <div className="container">
                        <h3 className="android-dev  text-left">Product Engineering &amp; Development</h3>
                        <div className="row">
                            <div className="col-lg-12 text-left pt-5">
                                <p className="section-subheading">
                                    Itprobit provides Enterprise Application Development Services for the top tier organizations
                                    across the globe. Our application development is focused to maximize your profits and ensure
                                    cost effective business solutions to allow our clients gain faster return on investments. And
                                    when we talk about Enterprise Applications Development, quality is one of the most important
                                    aspects for our delivery management values.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="company-offers section-ptb" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-timeline5">
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">I</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">Scalable Architecture</h3>
                                            <p className="description">
                                                By applying a scalable architecture to your application development, we ensure that,
                                                even as your workloads increase, your software and hardware can easily adapt to keep
                                                things running without disruption.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">II</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">Agile Development</h3>
                                            <p className="description">
                                                At Itprobit, we believe in agile software development processes, creating
                                                cross-functional teams that foster powerful collaboration at all stages. The results
                                                can be seen in our applications, which are flexible and so can be continuously
                                                improved once deployed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">III</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">
                                                Source Code Management</h3>
                                            <p className="description">
                                                Massive Builder provides a rich user experience for everyone, whether you are a web
                                                ninja or a WordPress beginner, it helps you create any website quickly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">IV</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">
                                                Data Security</h3>
                                            <p className="description">
                                                In the era of Big Data, few things are more essential than protecting your and your
                                                customers&apos; information. We apply airtight data security processes to all of the
                                                applications we create, preventing leakage that could compromise your business.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">V</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">
                                                Managed DevOps and 1-click Deployments</h3>
                                            <p className="description">
                                                We have years of experience managing and revising files, programmes and sites,
                                                guaranteeing any transitions made in your platform are handled smoothly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-icon"><span className="year">V</span></div>
                                        <div className="timeline-content">
                                            <h3 className="title">
                                                Cloud Hosting and Dedicated Setup</h3>
                                            <p className="description">
                                                In the era of Big Data, few things are more essential than protecting your and your
                                                customers&apos; information. We apply airtight data security processes to all of the
                                                applications we create, preventing leakage that could compromise your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="subscribe-form section-ptb main-banner bgcService" data-aos="flip-left">
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
    );
}