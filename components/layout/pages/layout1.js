import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../default'
import Header from '../../services/header'

export default function PageLayoutOne(props) {
  const { data, response } = props;
  const list_records = Math.ceil(data.section_four_list.length/2);

  return (
    <>
        <Head>
            <title>{data.title}</title>
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
        <DefaultLayout header={<Header heading="Internet Of Things" />} response={response} classes="main-banner" navbarClass="bgc" navbarColor="#5d5c61">
            <section className="services-stack mobcode-tagline cta pt-5">
                <div className="container pt-5">
                    <h3 className="android-dev mb-3 text-left">{data.section_one_heading}</h3>
                    <div className="row">
                        <div className="col-lg-12 text-left pb-5">
                            <p className="section-subheading">{data.section_one_content}</p>
                        </div>
                    </div>

                </div>
            </section>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            <a href="#" className="timeline">
                                <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">{data.section_two_heading_1}</h3>
                                    <p className="description">{data.section_two_content_1}</p>
                                </div>
                            </a>
                            <a href="#" className="timeline">
                                <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">{data.section_two_heading_2}</h3>
                                    <p className="description">{data.section_two_content_2}</p>
                                </div>
                            </a>
                            <a href="#" className="timeline">
                                <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">{data.section_two_heading_3}</h3>
                                    <p className="description">{data.section_two_content_3}</p>
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
                            <Image src={"/uploads/"+data.section_three_image} alt="" width={515} height={336} />
                        </div>
                        <div className="col-md-6 my-3" data-aos="fade-up">
                            <div className="text-left text text-white">
                                <h2>{data.section_three_title}</h2>
                            </div>
                            <div className="row">
                                <div className="md-text-title-separator line-left"></div>
                            </div>
                            <div className="row">
                                <p className="text-left pl-3 pr-3 text-white" style={{fontWeight:'100'}}>{data.section_three_content}</p>
                            </div>
                            <div className="container pt-3">
                                <div className="row col-md-12 service-list pl-0">
                                    <ul className="ta-listW">
                                        {data.section_three_list.map((list, index) => (
                                            <li key={index}><a href="#"><i className="fas fa-check"></i> {list}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5" id="arvr"></div>

                    <div className="row pt-5 pb-5 servicesPaddingLeftRight">
                        <div className="col-md-6 my-3" data-aos="fade-up">
                            <div className="text-left pl-2">
                                <h2>{data.section_four_title}</h2>
                            </div>
                            <div className="row pl-2">
                                <div className="md-text-title-separator line-left"></div>
                            </div>
                            <div className="row">
                                <p className="text-left pl-4" style={{fontWeight:'100'}}>{data.section_four_content}</p>
                            </div>
                            
                            <div className="row service-list pl-2">
                                <div className="col-md-6">
                                    <ul className="ta-list">
                                        {data.section_four_list.map((list, index) => (
                                            (index < list_records && <li key={index}><a href="#"><i className="fas fa-check"></i> {list}</a></li>)
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="ta-list">
                                        {data.section_four_list.map((list, index) => (
                                            (index >= list_records && <li key={index}><a href="#"><i className="fas fa-check"></i> {list}</a></li>)
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 my-3" data-aos="fade-up">
                            <Image src={"/uploads/"+data.section_four_image} alt="" width={644} height={436} />
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
  )
}