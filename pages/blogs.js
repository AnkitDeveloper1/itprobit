import Image from 'next/image';
import Head from 'next/head'
import Link from "next/link";
import DefaultLayout from '../components/layout/default'
import Header from '../components/services/header'

export default function BlogPage() {

    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border-top: 5px solid #49274A !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Insights" />} classes="main-banner" navbarclassName="" navbarColor="#49274A">
                <div className="page-wrapper section-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row filtr-container">
                                    <div className="col-md-6 filtr-item" data-category="1">
                                        <div className="single-blog border mb-3" data-aos="fade-up">
                                            <div className="blog-image">
                                                <a href="#"><Image src="/images/blog/iot.png" alt="blog one" width={380} height={250} className="img-fluid" /></a>
                                            </div>
                                            <div className="blog-content p-4">
                                                <h4 className="post-title"><a href="blogs/iot_blog.html">Internet of Things (Iot)</a>
                                                </h4>
                                                <div className="post-meta d-flex">
                                                    <div className="single-meta">
                                                        <p><i className="fas fa-calendar-alt"></i> 29 April, 2019</p>
                                                    </div>
                                                </div>
                                                <p>These are web-empowered gadgets that utilize inserted processors, sensors and
                                                    correspondence equipment to gather, send and follow up on information they
                                                    secure from their surroundings.
                                                </p>
                                                <a href="blogs/iot_blog.html" className="read-more-btn">Read More <i
                                                        className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6 filtr-item" data-category="2,4">
                                        <div className="single-blog border" data-aos="fade-up">
                                            <div className="blog-image">
                                                <a href="#"><Image src="/images/new/Health-and-Wellness.jpg" alt="blog one" width={380} height={250} className="img-fluid" /></a>
                                            </div>
                                            <div className="blog-content p-4">
                                                <h4 className="post-title"><a href="blogs/chatbot_hc_blog.html">Chatbots in
                                                        healthcare</a>
                                                </h4>
                                                <div className="post-meta d-flex">
                                                    <div className="single-meta">
                                                        <p><i className="fas fa-calendar-alt"></i> 29 April, 2019</p>
                                                    </div>
                                                </div>
                                                <p>With AI influencing all the sectors of our society Healthcare cannot remain
                                                    untouched. With emerging digital trends such as wearables and Iot, AR and VR,
                                                    Blockchain, telemedicine etc.
                                                </p>
                                                <a href="#" className="read-more-btn">Read More <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6 filtr-item" data-category="3,4">
                                        <div className="single-blog border mb-3" data-aos="fade-up">
                                            <div className="blog-image">
                                                <a href="#"><Image src="/images/blog/machine-learning.png" alt="blog one" width={380} height={250} className="img-fluid" /></a>
                                            </div>
                                            <div className="blog-content p-4">
                                                <h4 className="post-title"><a href="blogs/ml_blog.html">Machine learning implementation
                                                        to Mobile Apps by
                                                        TensorFlow</a></h4>
                                                <div className="post-meta d-flex">
                                                    <div className="single-meta">
                                                        <p><i className="fas fa-calendar-alt"></i> 29 April, 2019</p>
                                                    </div>
                                                </div>
                                                <p>Released in 2015 TensorFlow is an ecosystem that is used by the developers to
                                                    develop and train deep learning models. It uses complex computations as graphs
                                                    that make it easier for analysis of models and multi-dimensional arrays.
                                                </p>
                                                <a href="blogs/ml_blog.html" className="read-more-btn">Read More <i
                                                        className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6 filtr-item" data-category="5,6">
                                        <div className="single-blog border" data-aos="fade-up">
                                            <div className="blog-image">
                                                <a href="#"><Image src="/images/blog/mobile-commerce.png" alt="blog one" width={380} height={250} className="img-fluid" /></a>
                                            </div>
                                            <div className="blog-content p-4">
                                                <h4 className="post-title"><a href="blogs/trends_blog.html">Best ongoing Mobile
                                                        Application trends</a>
                                                </h4>
                                                <div className="post-meta d-flex">
                                                    <div className="single-meta">
                                                        <p><i className="fas fa-calendar-alt"></i> 29 April, 2019</p>
                                                    </div>
                                                </div>
                                                <p>The number of Smartphone users worldwide, crossed 5.135 billion. With this ever
                                                    so increasing Mobile usability, the mobile applications are in high demand. No
                                                    business can boom without a properly organized and user friendly application of
                                                    their platform.
                                                </p>
                                                <a href="#" className="read-more-btn">Read More <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6 filtr-item" data-category="5,6">
                                        <div className="single-blog border " data-aos="fade-up">
                                            <div className="blog-image">
                                                <a href="#"><Image src="/images/blog/cross.png" alt="blog one" width={380} height={250} className="img-fluid" /></a>
                                            </div>
                                            <div className="blog-content p-4">
                                                <h4 className="post-title"><a href="blogs/crossPlatform_blog.html">CROSS PLATFORM APP
                                                        FRAMEWORKS</a>
                                                </h4>
                                                <div className="post-meta d-flex">
                                                    <div className="single-meta">
                                                        <p><i className="fas fa-calendar-alt"></i> 29 April, 2019</p>
                                                    </div>
                                                </div>
                                                <p>Cross platform app frameworks refer to a kind of software development that helps
                                                    the developers to create applications that are compatible to many such as Ios
                                                    and Androids. It requires preparing the code once and then using it on any
                                                    platform.
                                                </p>
                                                <a href="#" className="read-more-btn">Read More <i className="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widgets-wrapper">

                                    <div className="single-widget" data-aos="fade-up">
                                        <div className="category-widget">
                                            <h3 className="widget-title">CATEGORY</h3>
                                            <ul className="category-list">
                                                <ul className="list-wraper">
                                                    <li className="active" data-filter="all">All</li>
                                                    <li data-filter="1">IOT</li>
                                                    <li data-filter="2">Chatbot</li>
                                                    <li data-filter="3">Machine Learning</li>
                                                    <li data-filter="4">Health Care & Fitness</li>
                                                    <li data-filter="5">Trends</li>
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="subscribe-form section-ptb main-banner" style={{backgroundColor: '#49274A'}} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center pb-3">
                                <div className="section-intro text-white">
                                    <h2 className="section-title text-white">We would love to hear from you!</h2>
                                    <p>We enjoy adapting our strategies to offer every client the best solutions that
                                        are at the
                                        forefront of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mx-auto">
                                <a className="ta-button mt-2 openForm" href="javascript:;">Get in Touch with us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )

}