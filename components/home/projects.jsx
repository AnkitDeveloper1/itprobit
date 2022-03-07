import Image from "next/image";

export default function Projects() {

    return (
        <section className="latest-blog-section pt-5" data-aos="fade-up" style={{backgroundColor:'#5c2be6', color:'white'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto text-center">
                        <div className="section-intro">
                            <h2 className="section-title text-white">We&#39;ve Completed 100+ Amazing Projects</h2>
                            <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-sm-5 mb-2">
                        <div className="single-blog bg-white">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" width={350} height={212} src="/images/home/healthcare.png" alt="blog one" /></a>
                            </div>
                            <div className="blog-content p-3">
                                <div className="post-meta">
                                </div>
                                <h4 className="post-title"><a href="#">Health Care Issues and how they can be tackled by digitization</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-sm-5">
                        <div className="single-blog bg-white">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" width={350} height={212} src="/images/home/home-hero.png" alt="blog one" /></a>
                            </div>
                            <div className="blog-content p-3">
                                <div className="post-meta">
                                    
                                </div>
                                <h4 className="post-title"><a href="#">Blockchain is a distributed ledger technology</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-sm-5">
                        <div className="single-blog bg-white">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" width={350} height={212} src="/images/home/image.png" alt="blog one" /></a>
                            </div>
                            <div className="blog-content p-3">
                                <div className="post-meta">
                                   
                                </div>
                                <h4 className="post-title"><a href="#">How Machine Learning can help Mortgage industry?</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-12 mx-auto text-center">
                        <a className="ta-button mt-2 openForm" href="#">Know More</a>
                    </div>
                </div>
            </div>
        </section>
    );

}