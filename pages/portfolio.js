import Image from "next/image";
import Head from 'next/head'
import path from 'path'
import fs from 'fs/promises'
import DefaultLayout from '../components/layout/default'
import Header from '../components/services/header'
import Portfolio from '../components/portfolio/portfolio'

export async function getStaticProps() {
    // Get Portfolio Categories
    const filePathPortfolioCategories = path.join(process.cwd(), 'dummy', 'portfolio_categories.json');
    const jsonDataPortfolioCategories = await fs.readFile(filePathPortfolioCategories);
    const portfolioCategories = JSON.parse(jsonDataPortfolioCategories);
    // Get Portfolio
    const filePathPortfolio = path.join(process.cwd(), 'dummy', 'portfolio.json');
    const jsonDataPortfolio = await fs.readFile(filePathPortfolio);
    const portfolio = JSON.parse(jsonDataPortfolio);
    
    //const services = await fetch("/dummy/services.json");
    return { props: {
        portfolio: portfolio,
        portfolioCategories: portfolioCategories
    } };
}

export default function PortfolioPage(props) {
    const { portfolio, portfolioCategories } = props;

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
    
        .demoSection {
            padding: 15px !important;
            position: relative !important;
            width: 100% !important;
            display: flex !important;
            flex-wrap: wrap !important;
            height: 1389.97px !important;
        }
    
        .separatorBorderColor {
            border-top: 5px solid #0089a5 !important;
        }
        `}</style>
        <DefaultLayout header={<Header />} classes="main-banner" navbarColor="#0089a5">
            <Portfolio data={portfolio} categories={portfolioCategories} description="Our cross-functional, agile teams create custom software for industry leaders. Proudly providing software solutions and services to clients across industries since 2012."/>
        </DefaultLayout>
    </>
    );
}