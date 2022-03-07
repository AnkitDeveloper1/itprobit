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
    const jsonDataBlogs = await fetch("http://localhost:8080/api/blogs/front/list");
    const blogs = await jsonDataBlogs.json()
    // Get Blogs Categories
    const jsonDataBlogsCategories = await fetch("http://localhost:8080/api/blogs_categories/front/list");
    const blogsCategories = await jsonDataBlogsCategories.json()
  
    return { props: {
        blogs: blogs,
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages,
        blogsCategories: blogsCategories
    } };
}

export default function BlogPage(props) {
    const { blogs, solutionsPages, industriesPages, testingPages, blogsCategories } = props;

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
            <DefaultLayout header={<Header heading="Insights" />} response={[solutionsPages, industriesPages, testingPages]} classes="main-banner" navbarclassName="" navbarColor="#49274A">
                <div className="page-wrapper section-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row filtr-container">
                                    {blogs.data.map(blog => (
                                        <div className="col-md-6 filtr-item" key={blog._id} data-category={blog.categories}>
                                            <div className="single-blog border mb-3" data-aos="fade-up">
                                                <div className="blog-image">
                                                    <Link href={"/blogs/"+blog.url}><a><Image src={"/uploads/"+blog.featured_image} alt="blog one" width={380} height={250} className="img-fluid" /></a></Link>
                                                </div>
                                                <div className="blog-content p-4">
                                                    <h4 className="post-title"><Link href={"/blogs/"+blog.url}><a>{blog.title}</a></Link>
                                                    </h4>
                                                    <div className="post-meta d-flex">
                                                        <div className="single-meta">
                                                            <p><i className="fas fa-calendar-alt"></i> {format(new Date(blog.created_on), 'dd MMMM, yyyy')}</p>
                                                        </div>
                                                    </div>
                                                    <p>{`${blog.content.substring(0, 150)}...`}</p>
                                                    <Link href={"/blogs/"+blog.url}><a className="read-more-btn">Read More <i className="fa fa-angle-right"></i></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
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
                                                    {blogsCategories.data.map(category => (
                                                        <li data-filter={category._id} key={category._id}>{category.name}</li>
                                                    ))}
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
                                <a className="ta-button mt-2 openForm" href="">Get in Touch with us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    )

}