import Head from 'next/head'
import path from 'path'
import fs from 'fs/promises'
import DefaultLayout from '../components/layout/default'
import dynamic from 'next/dynamic';
const Slider = dynamic(
  () => import('../components/slider'),
  {
    ssr: false,
    loading: () => <p>...loafing</p>
  }
);

import ServicesComponent from '../components/home/services'
import IndustriesComponent from '../components/home/industries'
//import VideoComponent from '../components/home/video'
const VideoComponent = dynamic(
  () => import('../components/home/video'),
  {
    ssr: false,
    loading: () => <p>...loafing</p>
  }
);
import ProjectsComponent from '../components/home/projects'
import PricingComponent from '../components/home/pricing'
import ReviewsComponent from '../components/home/reviews'
import BlogComponent from '../components/home/blog'
import SubscribeComponent from '../components/home/subscribe'

export async function getStaticProps() {
    // Get Services
    const filePathServices = path.join(process.cwd(), 'dummy', 'services.json');
    const jsonDataServices = await fs.readFile(filePathServices);
    const services = JSON.parse(jsonDataServices);
    // Get Reviews
    const filePathReviews = path.join(process.cwd(), 'dummy', 'reviews.json');
    const jsonDataReviews = await fs.readFile(filePathReviews);
    const reviews = JSON.parse(jsonDataReviews);
    // Get Blogs
    const filePathBlogs = path.join(process.cwd(), 'dummy', 'blogs.json');
    const jsonDataBlogs = await fs.readFile(filePathBlogs);
    const blogs = JSON.parse(jsonDataBlogs);
    
    //const services = await fetch("/dummy/services.json");
    return { props: {
        services: services,
        reviews: reviews,
        blogs: blogs
    } };
}

export default function Home(props) {
    const { services, reviews, blogs } = props;
    return (
    <div>
      <Head>
        <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
        <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
        <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
      </Head>
      <DefaultLayout header={<Slider />} styles={{backgroundColor:'#5c2be6'}} navbarColor="#5c2be6">
        <ServicesComponent services={services} title="What Interests You" description="We map a strategy, build a solution or elevate your product experience with focused engagements available as standalone offerings or as a part of your project’s service stack." />

        <IndustriesComponent />

        <VideoComponent />

        <ProjectsComponent />

        <PricingComponent />

        <ReviewsComponent reviews={reviews} title="Our Clients Says" description="We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry." />

        <BlogComponent blogs={blogs} title="Latest Blog Posts" />

        <SubscribeComponent />
      </DefaultLayout>
    </div>
    )
}
