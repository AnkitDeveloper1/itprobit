import Image from "next/image";
import _ from "lodash"
import Link from "next/link";

export default function Portfolio(props) {
    const { data, categories, description } = props;

    return (
        <>
            <section className="services-stack mobcode-tagline cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pt-5 pb-5">
                            <p className="section-subheading">{description}</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="our-portfolio-area" data-aos="zoom-in">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto mb-5">
                            <ul className="list-wraper">
                                <li className="active" data-filter="all">All</li>
                                {categories.map(category=> (
                                    <li key={category._id} data-filter={category._id}>{category.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row filtr-container">
                        {data.map(portfolio => (
                            <div key={portfolio._id} className="col-md-12 filtr-item" data-category={_.toString(portfolio.categories)}>
                                <div className="single-portfolio">
                                    <div className="row pt-5 pb-5" style={{backgroundColor: portfolio.bgcolor}}>
                                        <div className="col-md" data-aos="fade-up">
                                            <div className="header-text text-white pt-5" style={{paddingLeft:'10%', paddingTop:'30%'}}>
                                                <h1 style={{fontWeight:'600'}}>{portfolio.title}</h1>
                                                <p>{portfolio.content}</p>
                                                <Link href={portfolio.url}><a className="ta-button mt-2 openForm">View Case Study</a></Link>
                                            </div>
                                        </div>
                                        <div className="col-md pt-5 pb-5">
                                            <div className="header-image" data-aos="fade-down">
                                                <Image width={525} height={378} src={portfolio.featured_image} alt="header" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col text-center pt-5">
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <section className="subscribe-form section-ptb main-banner" style={{backgroundColor:'#0089a5'}}>
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
                            <a className="ta-button mt-2 openForm" href="#">Get in Touch with us</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );

}