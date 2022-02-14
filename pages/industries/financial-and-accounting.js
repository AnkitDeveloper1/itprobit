import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function FinancialAndAccountingPage() {

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
            <DefaultLayout header={<Header heading="Financial &amp; Accounting Solutions" bgcolor='#8b4ea57a' />} classes="main-banner" navbarclassName="" navbarColor="#5d5c61" styles={{backgroundImage:'url(/images/industry/mobility.jpg)'}}>
                <section className="services-stack mobcode-tagline cta pt-5" style={{backgroundColor:'white !important'}}>
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">
                            Searching for Banking or Finance Mobility Solution?
                        </h3>
                        <div className="row">
                            <div className="col-lg-12 text-left pb-5">
                                <p className="section-subheading">
                                    Get the best out of your smartphone through mobile banking, accounting, insurance services and
                                    much more. For managing customers to send invoices and maintain transactions, Finance mobility
                                    solutions is what you need. Such solutions will not only save time but also money, for you and
                                    your customers.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="company-offers" data-aos="fade-up">
                    <div className="container-fluid">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/industry/finance_1.png" alt="Multipurpose Mobility Banking solution for your customers" width={515} height={236} />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white">
                                    <h2>Multipurpose Mobility Banking solution for your customers </h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row text-white">
                                    <p className="text-left pl-3" style={{fontWeight:'100'}}>
                                        Today’s generation expects to have more and do less. Leverage total mobility banking
                                        solution to exceed customer’s expectations by enabling peer-to-peer payments, make bill
                                        payments, transaction history and much more.
                                    </p>
                                </div>
                                
                                <div className="container pl-2 pt-3">
                                    <div className="row">

                                        <div className="col-md-12 service-list">
                                            <ul className="ta-listW">
                                                <li><a href=""><i className="fas fa-check"></i>Personalised experience to customers</a>
                                                </li>
                                                <li><a href=""><i className="fas fa-check"></i> Convenient and Secure</a></li>
                                                <li><a href=""><i className="fas fa-check"></i> Quick credit transferring with one tap</a> </li>
                                                <li><a href=""><i className="fas fa-check"></i> On-demand reports</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 pb-5 bgc">
                            <div className="col-md-6 my-3 pl-5" data-aos="fade-up">
                                <div className="text-left text-white">
                                    <h2>Handle all your finances with Accounting Mobility Solution
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-3 text-white" style={{fontWeight:'100'}}>
                                        Manage all your business from anywhere with our accounting mobility solution that makes it
                                        easy to manage expenses, generate invoices, add receipts and reconcile. Approve staff’s
                                        expenses from anywhere at one tap. Have details of suppliers and customers information on
                                        hand with our Accounting solution
                                    </p>

                                </div>
                                <div className="row col-md-12 service-list pl-3">
                                    <ul className="ta-listW">
                                        <li><a href=""><i className="fas fa-check"></i> Report a loss</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Track and optimise sales process</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Quote calculators and policy
                                                details</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i>Check customer reports and
                                                communication
                                                history</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 my-3 " data-aos="fade-up">
                                <Image src="/images/industry/finance_2.png" alt="Handle all your finances with Accounting Mobility Solution" width="451" height="254" />
                            </div>
                        </div>
                        <div className="row pt-5"></div>

                        <div className="row pb-5">
                            <div className="col-md-6 my-3 pt-2 pb-2" data-aos="fade-up">
                                <Image src="/images/industry/finance_3.png" alt="All-in-one multipurpose mobility solution for your Insurance Business" width="644" height="239" />
                            </div>
                            <div className="col-md-6 my-3 pt-2 pb-2" data-aos="fade-up">
                                <div className="text-left pl-2 text-white">
                                    <h2>All-in-one multipurpose mobility solution for your Insurance Business </h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left text-white pl-4" style={{fontWeight:'100'}}>Place the power of self serving in
                                        the hands
                                        of your customer with Itprobit’s Insurance Mobility solution. Improve quoting behavior
                                        with this secure solution. Enable customers to book and renew insurance cover usine mobility
                                        solution itself.</p>
                                </div>
                                
                                <div className="row col-md-12 service-list pl-4">
                                    <ul className="ta-listW">
                                        <li><a href=""><i className="fas fa-check"></i> Report a loss</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Track and optimise sales process</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i> Quote calculators and policy
                                                details</a>
                                        </li>
                                        <li><a href=""><i className="fas fa-check"></i>Check customer reports and
                                                communication
                                                history</a></li>
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