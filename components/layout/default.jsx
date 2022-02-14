import Navbar from '../navbar/navbar'
import Header from './header'
import Footer from './footer'
import React from 'react'
import Script from 'next/script';

export default function DefaultLayout(props) {
  const { header, styles, navbarColor, navbarClass, classes } = props;
  return (
    <>
      <Header content={header} styles={styles} navbarColor={navbarColor} navbarClass={navbarClass} classes={classes} />
      
      <main role="main">
        {props.preContainer && props.preContainer}
            {props.children}
      </main>
      {/*<Script src="/js/jquery-3.3.1.min.js" />
      <Script src="/js/popper.min.js" />
      <Script src="/js/jquery.easing.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/aos.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="/js/jquery.filterizr.min.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/waypoints.min.js" />
      <Script src="/js/jquery.counterup.min.js" />
      <Script src="/js/main.js" />
      <Script src="/js/main-custom.js" />
      <Script src="/js/jquery.ihavecookies.min.js" />
      <Script src="/js/ajax.js" />*/}
      <Footer navbarColor={navbarColor} />
    </>
  )
}