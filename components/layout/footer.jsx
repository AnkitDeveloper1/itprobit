import Image from 'next/image';
import React from 'react'

export default function FooterLayout(props) {
  const { navbarColor } = props;

  return (
    <>
        <div className="modal fade text-center py-5 subscribeModal-lg" id="subscribeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="top-strip"></div>

                        <h3 className=" mb-0 text-secondary">Let&#39;s Connect</h3>
                        <p className="pb-1 text-muted"><small>Wish to discuss a project?</small></p>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input id="username" type="name" className="form-control" placeholder="Name*" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input id="useremail" type="email" className="form-control" placeholder="Email Address*" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input id="userphone" type="phone" className="form-control" placeholder="Phone*" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <select id="userbudget" name="budget" className="form-control" style={{marginBottom:'5px'}}>
                                            <option value="">Select Budget</option>
                                            <option value="Less than $10,000">Less than $10,000</option>
                                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                            <option value="More than $100,000">More than $100,000 </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <textarea id="userdescription" className="form-control" style={{height:'80px'}} placeholder="Description*" aria-label="With textarea" row="5"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="pb-1 pt-3">
                        <a className="ta-button mt-2" href="#">Submit</a>
                    </div>
                    <p className="pb-1 text-muted"><small>Your email is safe with us. We won&apos;t spam.</small></p>
                    <div className="bottom-strip"></div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-area-wrapper bg-semi-hover" data-aos="fade-up">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h4>Company</h4>
                                <div className="md-separator-sml separatorBorderColor"></div>
                                <p>
                                    ItProBit is a global digital consultancy and software development company that helps brands leverage data-driven design and engineering to create meaningful, personalized digital experiences.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5">
                            <div className="single-widget">
                                <h4>Services</h4>
                                <div className="md-separator-sml separatorBorderColor"></div>
                                <ul className="widget-list">
                                    <li><a href="testing/web-testing.html">Web Testing</a></li>
                                    <li><a href="services/enterprise-dev.html"> Enterprise Application</a></li>
                                    <li><a href="services/mobile-dev.html"> Mobile App Development</a></li>
                                    <li><a href="services/iot-dev.html"> IOT Developement</a> </li>
                                    <li><a href="services/blockchain-dev.html"> Blockchain Development</a></li>
                                    <li><a href="services/iot-dev.html#arvr"> AR/VR Development</a></li>
                                    <li><a href="services.html#chatbot"> ChatBot Development</a></li>
                                    <li><a href="services.html#chatbot"> ECommerce Business Solutions</a></li>                                
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5">
                            <div className="single-widget">
                                <h4>Useful Links</h4>
                                <div className="md-separator-sm separatorBorderColor"></div>
                                <ul className="widget-list">                               
                                    <li><a  href="testing/mobile.html">Mobile Testing</a></li>
                                    <li><a href="industries/mobility-ind.html">Mobility Solutions</a></li>
                                    <li><a href="industries/finance-accounting.html">Financial &#38; Accounting</a></li>
                                    <li><a href="industries/food-beverages.html">Food &#38; Beverages</a></li>
                                    <li><a href="industries/healthcare-fitness.html">Healthcare &#38; Fitness</a></li>
                                    <li><a href="industries/retail-ecommerce.html">Retail &#38; E-commerce</a></li>
                                    <li><a href="industries/travel-hospitality.html">Travel &#38; Hospitality</a></li>
                                    <li><a href="industries/lifestyle-entertainment.html">Lifestyle &#38; Entertainment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5">
                            <div className="single-widget">
                                <h4>Connect Us</h4>
                                <div className="md-separator-sm separatorBorderColor"></div>
                                <p>
                                    <br />
                                    ItProBit, London Road <br />
                                    Croydon, UK
                                    <br />
                                    <br />
                                    <b>Phone:</b> +441293279886
                                    <br />
                                    <br />
                                    <a href="mailto: info@itprobit.com"><i className="fa fa-envelope" aria-hidden="true"></i> info@itprobit.com</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom-area bg-semi-hover border-top py-3" style={{backgroundColor: navbarColor}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9 home-footer-logo-img" style={{display:'flex'}}>
                            <a href="index-2.html"><Image src="/images/it-orbit-logo.png" alt="logo" width={150} height={40} /> </a>

                            <div className="copyright-text text-white pt-3">
                                <p>Copyright 2017 @ ItProBit. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-top">
                <div className="scroll-icon">
                    <i className="fa fa-angle-up"></i>
                </div>
            </div>
        </footer>
    </>
  )
}