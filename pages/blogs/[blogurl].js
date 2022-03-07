import Image from 'next/image';
import Head from 'next/head'
import { format } from 'date-fns'
import Link from "next/link";
import DefaultLayout from '../../components/layout/default'
import Header from '../../components/services/header'
import { data } from 'jquery';

export async function getServerSideProps(context) {
    // Get Pages
    const jsonDataSolutionsPages = await fetch("http://localhost:8080/api/pages/front/bytype/solutions");
    const solutionsPages = await jsonDataSolutionsPages.json()
    const jsonDataIndustriesPages = await fetch("http://localhost:8080/api/pages/front/bytype/industries");
    const industriesPages = await jsonDataIndustriesPages.json()
    const jsonDataTestingPages = await fetch("http://localhost:8080/api/pages/front/bytype/testing");
    const testingPages = await jsonDataTestingPages.json()

    // Get Blogs
    const jsonDataBlogs = await fetch("http://localhost:8080/api/blogs/front/byurl/iot");
    const blogDetails = await jsonDataBlogs.json()
  
    return { props: {
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages,
        blogDetails: blogDetails,
    } };
}

export default function BlogDetailPage(props) {
    const { solutionsPages, industriesPages, testingPages, blogDetails } = props;

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
            .main-banner:first-child {
                background-image: url(/images/new/blockchain.png);
            }
            `}</style>
            <DefaultLayout header={<Header heading={blogDetails.data.title} />} response={[solutionsPages, industriesPages, testingPages]} classes="main-banner" navbarclassName="" navbarColor="#0c3cd1">
                <div className="page-wrapper section-ptb" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-sm-12">
                                <section className="blog-content-wrapper entry-content">
                                    <div className="single-blog border">
                                        <div className="blog-image mb-3">
                                            <Image src={"/uploads/"+blogDetails.data.featured_image} width={800} height={600} alt="blog one" className="img-fluid" />
                                        </div>
                                        <div className="blog-content p-4">
                                            <h3>{blogDetails.data.title}</h3>
                                            <div className="post-meta d-flex">
                                                <div className="single-meta">
                                                    <p><i className="fas fa-calendar-alt"></i> {format(new Date(blogDetails.data.created_on), 'dd MMMM, yyyy')}</p>
                                                </div>
                                            </div>
                                            {blogDetails.data.content}
                                        </div>
                                        <div className="post-details-meta d-flex p-4 my-5 border-top border-bottom">
                                            <div className="post-tags col pl-0">
                                                <span>Tags :</span>
                                                <ul className="tags-list">
                                                    {blogDetails.data.tags.map(tag => (
                                                        <li><a href="#">{tag}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="post-share-links col text-right pr-0">
                                                <span className="mr-2">Share</span>
                                                <div className="social-profile">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </section>
                                
                            </div>
                        </div>
                    </div>
                </div>

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
                                <a className="ta-button mt-2 openForm" href="">Get in Touch with us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )
}