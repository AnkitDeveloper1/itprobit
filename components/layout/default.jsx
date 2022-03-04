import Header from './header'
import Footer from './footer'
import React from 'react'
import Script from 'next/script';

export default function DefaultLayout(props) {
  const { header, styles, navbarColor, navbarClass, classes, response } = props;
  return (
    <>
      <Header content={header} styles={styles} response={response} navbarColor={navbarColor} navbarClass={navbarClass} classes={classes} />
      
      <main role="main">
        {props.preContainer && props.preContainer}
            {props.children}
      </main>
      <Footer navbarColor={navbarColor} />
    </>
  )
}