import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'

export default function BlockchainDevelopmentPage() {
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
        
            .bgc {
                background-color: #d8b08c !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Blockchain Application Development" />} classes="main-banner" navbarClass="bgc" navbarColor="#d8b08c">
                <section className="services-stack mobcode-tagline cta pt-5">
                    <div className="container pt-5">
                        <h3 className="android-dev mb-3 text-left">Let&apos;s Decentralise the World With Blockchain App Development</h3>
                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <p className="section-subheading">
                                    From the Development of a Smart Contract and Cryptocurrencies to Auditing the Processes before
                                    they go live on the unaltered system and helping start-ups raise an ICO, When you Hire
                                    Blockchain developers from us, you get a team of Blockchain developers, designers, and
                                    marketers, know how to employ the tools and languages that develops a decentralized ecosystem
                                    for your brand.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="company-offers section-ptb" data-aos="fade-up">
                    <div className="container-fluid">
                        <div className="row bgc pt-5 pb-5">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/industry/New folder/4.png" width={515} height={380} alt="Crypto Wallets and Exchanges" />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white pl-2">
                                    <h2>Crypto Wallets and Exchanges</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>Make a statement with UX &amp; UI design that wows yet is intuitive enough not to be noticeable.</p>
                                </div>
                                
                                <div className="container pl-4">
                                    <div className="row text-white">
                                        <h5><i className="fas fa-pencil-ruler "></i> Cryptocurrency</h5>
                                        <p style={{paddingRight:'5%'}}>
                                            We help in cryptocurrency development and digital wallets development that provide
                                            easy transaction processing for your customers. The decentralized system enables
                                            your customers to make purchases in mere seconds with a simple tap on their
                                            smartphone.
                                        </p>
                                    </div>
                                </div>
                                <div className="container pl-2 pt-3">
                                    <div className="row">

                                        <div className="col-md-6 service-list">
                                            <ul className="ta-listW">
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Contract Implementaiton</a>
                                                </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Crypto Wallet </a></li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Cryptocurrencies</a> </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Digital wallets</a>
                                                </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Smart Wallet</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6 service-list">
                                            <ul className="ta-listW">
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Wallets and Exchanges</a>
                                                </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Mobile Application Development</a></li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> IOT Developement</a> </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Multi cryptocurrency wallet</a>
                                                </li>
                                                <li><a href="javascirpt:"><i className="fas fa-check"></i> Protected against inflation</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5"></div>
                        <div className="row pt-5">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <h2 className="section-title text-center">How Blockchain Technology Works?</h2>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className="row pt-5">

                            <div className="col-md-12">
                                <div className="main-timeline12">
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <span className="timeline-icon">
                                            <i className="fa fa-paper-plane"></i>
                                        </span>
                                        <div className="border"></div>
                                        <div className="timeline-content">
                                            <h4 className="title">Request</h4>
                                            <p className="description">Requesting for new transaction</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <div className="timeline-content">
                                            <h4 className="title">Block Created</h4>
                                            <p className="description">Secure block &amp; channel created</p>
                                        </div>
                                        <div className="border"></div>
                                        <span className="timeline-icon">
                                            <i className="fa fa-cube"></i>
                                        </span>
                                    </div>
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <span className="timeline-icon">
                                            <i className="fa fa-share"></i>
                                        </span>
                                        <div className="border"></div>
                                        <div className="timeline-content">
                                            <h4 className="title">Block Sent</h4>
                                            <p className="description">Block created sent to destination</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <div className="timeline-content">
                                            <h4 className="title">Validation</h4>
                                            <p className="description">Validation of block received.</p>
                                        </div>
                                        <div className="border"></div>
                                        <span className="timeline-icon">
                                            <i className="fa fa-key"></i>
                                        </span>
                                    </div>
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <span className="timeline-icon">
                                            <i className="fa fa-check"></i>
                                        </span>
                                        <div className="border"></div>
                                        <div className="timeline-content">
                                            <h4 className="title">Approved</h4>
                                            <p className="description">Approve the block if valid.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 timeline">
                                        <div className="timeline-content">
                                            <h4 className="title">Block Added</h4>
                                            <p className="description">Block received added to master.</p>
                                        </div>
                                        <div className="border"></div>
                                        <span className="timeline-icon">
                                            <i className="fa fa-cubes"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5"></div>
                        <div className="row pt-5 servicesPaddingLeftRight">
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src="/images/new/blockchain.png" width={544} height={331} alt="Decentralised Applications (DApps)" />
                            </div>
                            <div className="col-md-6 my-3 pt-5" data-aos="fade-up">
                                <div className="text-left pl-2">
                                    <h2>Decentralised Applications (DApps)</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row">
                                    <p className="text-left pl-4" style={{fontWeight:'100'}}>We help you build Decentralized applications
                                        (DApps) so your customers can have confidence in the permanence of their data, along with a
                                        strong sense of security. Decentralized applications are resistant to data center failures
                                        since it operates on the blockchain.</p>
                                </div>
                                
                                <div className="row col-md-6 service-list pl-4">
                                    <ul className="ta-list">
                                        <li><a href="javascirpt:"><i className="fas fa-check"></i> Absolute Transparency</a></li>
                                        <li><a href="javascirpt:"><i className="fas fa-check"></i> Untraceable exchanges</a></li>
                                        <li><a href="javascirpt:"><i className="fas fa-check"></i> Total Autonomy</a> </li>
                                        <li><a href="javascirpt:"><i className="fas fa-check"></i> Storage and Backup</a></li>
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
                                    <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
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