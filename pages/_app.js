import Head from "next/head";
import jquery from "jquery";
import { useEffect } from "react";
import AOS from "aos";
import dynamic from 'next/dynamic'
// Import css files
import '../styles/globals.css'
import '../public/css/font-awesome.min.css';
import '../public/css/bootstrap.min.css'
import '../public/css/magnific-popup.css'
import '../public/css/owl.carousel.min.css'
import '../public/style.css'

function MyApp({ Component, pageProps }) {
  
  dynamic((
    (Component.name === "Home")?
    (import('../public/css/timeline-6.css'), import('../public/css/servicesStyle.css'), import('../public/css/example.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});

  dynamic((
    (Component.name === "ServicesPage")?
    (import('../public/css/timeline-6.css'), import('../public/css/servicesStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "InternetOfThingsPage" || (pageProps.pages && pageProps.pages.data && pageProps.pages.data.layout === "layout_1"))?
    (import('../public/css/timeline-1.css'), import('../public/css/services/iotStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "BlockchainDevelopmentPage")?
    (import('../public/css/timeline-12.css'), import('../public/css/services/blockchainStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "EnterpriseApplicationDevelopmentPage")?
    (import('../public/css/timeline-12.css'), import('../public/css/services/enterpriseStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "MobileAppDevelopmentPage" || Component.name === "WebAppDevelopmentPage")?
    (import('../public/css/timeline-12.css'), import('../public/css/services/mobileStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "CareerPage")?
    (import('../public/css/careerStyle.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "BlogPage")?
    (import('../public/css/blogStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "AboutPage")?
    (import('../public/css/aboutStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "ContactPage")?
    (import('../public/css/contactStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "AutomotiveAndTransportationSolutionsPage" || Component.name === "FinancialAndAccountingPage" || (pageProps.pages && pageProps.pages.data && pageProps.pages.data.layout === "layout_2"))?
    (import('../public/css/timeline-12.css'), import('../public/css/services/iotStyle.css'), import("aos/dist/aos.css"), import('../public/css/aos.css')):''
  ), {ssr: false});
  
  dynamic((
    (Component.name === "BlogDetailPage")?
    (import('../public/css/servicesStyle.css')):''
  ), {ssr: false});


  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="/favicon.ico" />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp
