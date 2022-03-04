import Image from 'next/image';
import Head from 'next/head'
import Link from "next/link";
import DefaultLayout from '../components/layout/default'
import Header from '../components/services/header'
import { useState } from 'react';

export async function getServerSideProps(context) {
    // Get Pages
    const jsonDataSolutionsPages = await fetch("http://localhost:8080/api/pages/front/bytype/solutions");
    const solutionsPages = await jsonDataSolutionsPages.json()
    const jsonDataIndustriesPages = await fetch("http://localhost:8080/api/pages/front/bytype/industries");
    const industriesPages = await jsonDataIndustriesPages.json()
    const jsonDataTestingPages = await fetch("http://localhost:8080/api/pages/front/bytype/testing");
    const testingPages = await jsonDataTestingPages.json()
  
    return { props: {
        solutionsPages: solutionsPages,
        industriesPages: industriesPages,
        testingPages: testingPages,
    } };
}

export default function ContactPage(props) {
    const { solutionsPages, industriesPages, testingPages } = props;
    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch('http://localhost:8080/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: [query],
        });
        
        const data = await res.json();
        console.log(data);
    }

    const handleOnChange = (input) => {
        let inputValue = input.currentTarget.value;
        let inputName = input.currentTarget.name
        setQuery({...query, [inputName]: inputValue});
    }

    return (
        <>
            <Head>
                <title>ItProBit Software Development Company | Mobile App development Company | Software Testing</title>
                <meta name="title" content="ItProBit Software Development Company | Mobile App development Company | Software Testing" />
                <meta name="description" content="Itprobit is a leading software development company Product, Mobile, Web, Computer Vision, Video Analytics, Software Testing, Automation, Supply Chain Consulting, Government Project, ReactJS, React Native, AngularJS and NodeJS." />
            </Head>
            <style jsx global>{`
            .separatorBorderColor {
                border-top: 5px solid #0099da !important;
            }
            `}</style>
            <DefaultLayout header={<Header heading="Let's amaze the world with our work" />} response={[solutionsPages, industriesPages, testingPages]} classes="main-banner" navbarclassName="" navbarColor="#0099da">
                <section className="container contact-section">
                    <div id="innercontainer" className="form-content contact-forms">
                        <div id="mainwide" className="row">
                            <div className="col-lg-8 form-left">
                                <div className="top-row blue-bar wht-bar row">
                                    <h2 className="h2 sm"> Get in touch with us </h2>
                                </div>
                                <form method='post' onSubmit={handleSubmit}>
                                    <div className="flexigreybox mtop20">
                                        <div className="middlearea">
                                            <div className="map-section">
                                            </div>
                                            <div className="contactform">
                                                <div className="form-sec row">
                                                    <div className="form-group col-sm-6">
                                                        <input id="contactname" name="name" type="text" className="input inp" placeholder="Contact Person" onChange={handleOnChange} />
                                                        <label>Contact Person <span className="red-text">*</span> </label>
                                                        <div className="error-brdr"> </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <input id="contactcompanyname" name="company_name" type="text" className="input inp" placeholder="Company Name" onChange={handleOnChange} />
                                                        <label>Company Name</label>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <input id="contactemail" name="email" type="email" className="input inp" placeholder="Email Address" />
                                                        <label>Email Address <span className="red-text">*</span></label>
                                                        <div className="error-brdr"> </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <input  id="contactphone" name="phone_number" type="phone" className="input inp" placeholder="Phone" />
                                                        <label>Phone Number <span className="red-text">*</span></label>
                                                        <div className="error-brdr"> </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <select id="contactcountry" name="country" className="input budget" >
                                                            <option value="">Select Country</option>
                                                            <option value="USA">United States of America (USA)</option>
                                                            <option value="UK">United Kingdom (UK)</option>
                                                            <option value="UAE">United Arab Emirates (UAE)</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="India">India</option>
                                                            <option value="">- - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                                - - - - - - - - - - - - - - - - - - -</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="AmericanSamoa">American Samoa</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Anguilla">Anguilla</option>
                                                            <option value="Antarctica">Antarctica</option>
                                                            <option value="AntiguaandBarbuda">Antigua and Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahama">Bahama</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="BosniaandHerzegovina">Bosnia and Herzegovina</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="BouvetIsland">Bouvet Island</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="BritishVirginIslands">British Virgin Islands</option>
                                                            <option value="BruneiDarussalam">Brunei Darussalam</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="BurkinaFaso">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="CapeVerde">Cape Verde</option>
                                                            <option value="CaymanIslands">Cayman Islands</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="ChristmasIsland">Christmas Island</option>
                                                            <option value="Cocos(Keeling) Islands">Cocos(Keeling) Islands</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo">Congo</option>
                                                            <option value="CookIslands">Cook Islands</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="CzechRepublic">Czech Republic</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="DominicanRepublic">Dominican Republic</option>
                                                            <option value="East Timor">East Timor</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="EquatorialGuinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Faroe Islands">Faroe Islands</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="French Guiana">French Guiana</option>
                                                            <option value="French Polynesia">French Polynesia</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Gibraltar">Gibraltar</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Greenland">Greenland</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guadeloupe">Guadeloupe</option>
                                                            <option value="Guam">Guam</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea Bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="HongKong">Hong Kong</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Iran">Iran</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option value="Korea">Korea</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macau">Macau</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">Marshall Islands</option>
                                                            <option value="Martinique">Martinique</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mayotte">Mayotte</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia">Micronesia</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Monserrat">Monserrat</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar</option>
                                                            <option value="Nambia">Nambia</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="New Caledonia">New Caledonia</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Niue">Niue</option>
                                                            <option value="Norfolk Island">Norfolk Island</option>
                                                            <option value="Northern Mariana Islands">Northern Mariana Islands
                                                            </option>
                                                            <option value="Northwest Territories">Northwest Territories</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Pitcairn">Pitcairn</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto Rico">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russian Federation">Russian Federation</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="SierraLeone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="St. Helena">St. Helena</option>
                                                            <option value="St.Kitts and Nevis">St.Kitts and Nevis</option>
                                                            <option value="St.Pierre and Miquelon">St.Pierre and Miquelon</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                            <option value="Taiwan">Taiwan</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania">Tanzania</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tokelau">Tokelau</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Turks and Caicos Islands">Turks and Caicos Islands
                                                            </option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="UAE">United Arab Emirates (UAE)</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="UK">United Kingdom (UK)</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="USA">United States of America (USA)</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="VietNam">VietNam</option>
                                                            <option value="Western Sahara">Western Sahara</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Yugoslavia">Yugoslavia</option>
                                                            <option value="Zaire">Zaire</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <select id="contactbudget" name="budget" className="input budget" style={{marginBottom:'5px'}}>
                                                            <option value="">Select Budget</option>
                                                            <option value="Less than $10,000">Less than $10,000</option>
                                                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                                            <option value="More than $100,000">More than $100,000 </option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-12 textarea-group">
                                                        <textarea id="contactdescription" name="message" className="input textarea" placeholder="Comments/Message" rows="7"></textarea>
                                                        <label>Comments/Message<span className="red-text">*</span></label>
                                                        <div className="error-brdr"> </div>
                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <div className="error-div">
                                                        </div>
                                                        <label>Please confirm that you are human<span className="red-text">
                                                                *</span></label>
                                                        <div className="floatLeft captcha">
                                                            <div className="g-recaptcha" data-theme="light"
                                                                data-sitekey="6LezVRUTAAAAAP7fWqbl941VVN6qkfSSLXXKR6OM">
                                                                <div style={{width: '304px', height: '78px'}}>
                                                                    <div><iframe
                                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LezVRUTAAAAAP7fWqbl941VVN6qkfSSLXXKR6OM&amp;co=aHR0cHM6Ly93d3cueGljb20uYml6OjQ0Mw..&amp;hl=en&amp;v=v1554100419869&amp;theme=light&amp;size=normal&amp;cb=ta6yeaz6f982"
                                                                            width="304" height="78" role="presentation"
                                                                            name="a-qr6idn37fnnj" frameBorder="0" scrolling="no"
                                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                                                    </div><textarea id="g-recaptcha-response"
                                                                        name="g-recaptcha-response" className="g-recaptcha-response"
                                                                        style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <dl>
                                                    <div className="btn-contact circle-btn">
                                                        <input className="circle-btn red-btn" type="submit" value="Submit" />
                                                    </div>
                                                    <span className="next2btn" ></span>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 right-form-sec top-address">
                                <div className="blue-bar">
                                    <div className="sm-content"> Collaborating across timezones to deliver excellence. </div>
                                </div>
                                <div className="demo-container clocks active row">
                                    <div className="add-col col-sm-12">
                                        <div className="add-col col-sm-12">

                                            <Image src="/images/indiaOffice.jpg" width={220} height={130} alt="India Office" />
                                            <br />
                                            <h2 className="h3">India Office</h2>
                                            <span>( Development Office )</span>
                                            <p> IT Park, Mohali</p>
                                        </div>
                                    </div>

                                    <div className="add-col col-sm-12">
                                        <Image src="/images/Cobalt_0205+copy.jpg" width={220} height={130} alt="USA Office" />
                                        <br />
                                        <h2 className="h3">USA Office</h2>
                                        <span>( Sales Office )</span>
                                        <p>Colorado<br /></p>
                                    </div>

                                    <div className="add-col col-sm-12">
                                        <div className="social-profile">
                                            <ul>
                                                <li><a href="https://www.facebook.com/ItprobitTech"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://twitter.com/ItprobitTech"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li><a href="https://in.linkedin.com/company/Itprobit-tech"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe-form section-ptb main-banner pb-3" style={{backgroundColor: '#0099da'}} data-aos="flip-left">
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