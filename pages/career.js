import Image from 'next/image';
import Head from 'next/head'
import path from 'path'
import fs from 'fs/promises'
import Link from "next/link";
import DefaultLayout from '../components/layout/default'
import Header from '../components/services/header'

export async function getStaticProps() {
    // Get Services
    const filePathCareer = path.join(process.cwd(), 'dummy', 'career.json');
    const jsonDataCareer = await fs.readFile(filePathCareer);
    const careers = JSON.parse(jsonDataCareer);
    
    return { props: {
        careers: careers
    } };
}

export default function CareerPage(props) {
    const { careers } = props;
    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border-top: 5px solid #f16c52 !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Current Job Openings" />} classes="main-banner" navbarclassName="" navbarColor="#379683">
                <section>
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className="hsgroup row mr0">
                            <div className="col-sm-8">
                                <h5 className="h4 text-left">We give you a challenging and <span className="red-text"> enjoyable </span>
                                    work culture. </h5>
                                <div style={{fontSize:'16px'}}>Absolvies (as we call ourselves) are a friendly bunch with a driving
                                    ambition to be the best in whatever we do. We are highly motivated with a zest for life, that is
                                    reflected in everything we build &amp; together we make ItprobitTech a fun place to work. </div>
                            </div>
                            <div className="col-sm-4">
                                <a href="https://in.linkedin.com/company/Itprobit-tech" title="Connect with Us">
                                    <Image className="lt-img" src="/images/careers.jpg" alt="Current Job Openings" width={342} height={250} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section profiles">
                    <div className="container-fluid aos-init aos-animate" data-aos="fade-up">
                        <div className="row mr0">
                            {careers.map((career) => (
                                <div key={career._id} className="col-lg-3 col-sm-6 profile-cols">
                                    <a href="mailto:info@Itprobittech.com">
                                        <h3> {career.position} </h3>
                                        <div className="exp"> <span> Experience: </span> {career.experience} </div>
                                        <div className="location"> <span> Location: </span> {career.location} </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </DefaultLayout>
        </>
        );

}