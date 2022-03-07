import Head from 'next/head'
import Image from 'next/image';
import DefaultLayout from '../default'
import Header from '../../services/header'

export default function PageLayoutTwo(props) {
  const { data, response } = props;

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
        .pb-3, .py-3 {
            padding-bottom: 10rem!important;
        }
        `}</style>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <DefaultLayout header={<Header heading="Automotive &amp; Transportation Solutions" bgcolor='#8b4ea5' />} classes="main-banner" navbarclassName="" navbarColor="#8b4ea5" response={response}>
            <section className="services-stack mobcode-tagline cta pt-5" style={{backgroundColor:'#fff'}}>
                <div className="container pt-5">
                    <h3 className="android-dev mb-3 text-left">{data.section_one_heading}</h3>
                    <div className="row">
                        <div className="col-lg-12 text-left pb-5">
                            <p className="section-subheading">{data.section_one_content}</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="company-offers pt-5 pb-5" data-aos="fade-up">
                <div className="container-fluid">
                    {data.section_title.map((s_title, index) => {
                        {return (data.align_image_left[index] === "left" && <div className="row pb-5" key={index}>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src={"/uploads/"+data.section_image[index]} alt="IoT based Automotive Solutions" width={644} height={374} />
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white">
                                    <h2>{s_title}</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>{data.section_content[index]}</p>
                                </div>
                                
                                <div className="container pl-2 pt-3">
                                    <div className="row">

                                        {Object.values(data.section_listing[0][index]).map((list, i) => (
                                            (i%2 === 0 && 
                                            <div className="col-md-6 service-list" key={i}>
                                                <ul className="ta-listW">
                                                    <li key={i}><a href="#"><i className="fas fa-check"></i> {list}</a></li>
                                                </ul>
                                            </div>) || 
                                            (i%2 !== 0 && 
                                            <div className="col-md-6 service-list" key={i}>
                                                <ul className="ta-listW">
                                                    <li key={i}><a href="#"><i className="fas fa-check"></i> {list}</a></li>
                                                </ul>
                                            </div>)
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>) || (data.align_image_left[index] === "right" && <div className="row pt-5 bgc" key={index}>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <div className="text-left text-white">
                                    <h2>{s_title}</h2>
                                </div>
                                <div className="row">
                                    <div className="md-text-title-separator"></div>
                                </div>
                                <div className="row ">
                                    <p className="text-left pl-4 text-white" style={{fontWeight:'100'}}>{data.section_content[index]}</p>
                                </div>
                                
                                <div className="container pl-2 pt-3">
                                    <div className="row">

                                    {Object.values(data.section_listing[0][index]).map((list, i) => (
                                            (i%2 === 0 && 
                                            <div className="col-md-6 service-list" key={i}>
                                                <ul className="ta-listW">
                                                    <li key={i}><a href="#"><i className="fas fa-check"></i> {list}</a></li>
                                                </ul>
                                            </div>) || 
                                            (i%2 !== 0 && 
                                            <div className="col-md-6 service-list" key={i}>
                                                <ul className="ta-listW">
                                                    <li key={i}><a href="#"><i className="fas fa-check"></i> {list}</a></li>
                                                </ul>
                                            </div>)
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3" data-aos="fade-up">
                                <Image src={"/uploads/"+data.section_image[index]} alt="IoT based Automotive Solutions" width={644} height={374} />
                            </div>
                        </div>)}
                    })}
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