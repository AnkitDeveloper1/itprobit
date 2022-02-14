export default function Pricing() {

    return (
        <section className="pricing-section section-ptb" data-aos="zoom-in-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center">
                        <div className="section-intro">
                            <h2 className="section-title">How We Cater To Your Need?</h2>
                            <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 mx-auto my-5">
                        <nav>
                            <div className="nav nav-tabs text-center" id="nav-tab" role="tablist">
                                <a className="nav-item  active" id="nav-monthly-tab" data-toggle="tab" href="#monthly_price">Working Models</a>
                                <a className="nav-item " id="nav-yearly-tab" data-toggle="tab" href="#yearly_price">Methodology</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id="yearly_price" role="tabpanel">
                        <div className="row">

                            <div className="col-md-4 mb-sm-5">
                                <div className="single-box text-center border">
                                    <div className="plan-price text-center">
                                        <h6>Waterfall Model</h6>
                                    </div>
                                    <div className="service-list text-left pl-5 pb-5">
                                        <ul className="ta-list">
                                            <li><a href="#"><i className="fas fa-check"></i>Requirements</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Analysis</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Design</a> </li>
                                            <li><a href="#"><i className="fas fa-check"></i>Coding</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Testing</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Operations</a></li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 mb-sm-5 ">
                                <div className="single-box text-center border ">
                                    <div className="plan-price text-center">
                                        <h6>Agile Model</h6>
                                    </div>
                                    <div className="service-list text-left pl-5 pb-5">
                                        <ul className="ta-list">
                                            <li><a href="#"><i className="fas fa-check"></i>Modeling</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Unified Process</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Data Method</a> </li>
                                            <li><a href="#"><i className="fas fa-check"></i>Essential Unified
                                                    Process</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Testing</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Getting Real</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-sm-5">
                                <div className="single-box text-center border ">
                                    <div className="plan-price text-center">
                                        <h6>Scrum Model</h6>
                                    </div>
                                    <div className="service-list text-left pl-5 pb-5">
                                        <ul className="ta-list ">
                                            <li><a href="#"><i className="fas fa-check"></i>Sprint</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Development Team</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Daily Scrum</a> </li>
                                            <li><a href="#"><i className="fas fa-check"></i>1-4 Week Sprint</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Review and
                                                    retrospective</a></li>
                                            <li><a href="#"><i className="fas fa-check"></i>Scrum of Scrums</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="monthly_price" role="tabpanel">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-timeline6">
                                    <div className="timeline">
                                        <div className="timeline-content">
                                            <span className="year">I</span>
                                            <div className="content-inner">
                                                <span className="icon"><i className="fa fa-globe"></i></span>
                                                <h3 className="title">Fixed Price</h3>
                                                <p className="description">
                                                    At ItProBit, we have a lot of assets that can scale your needed work in capacities and management workflows while maintaining flexibility, and your potential to pivot as markets change.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-content">
                                            <span className="year">II</span>
                                            <div className="content-inner">
                                                <span className="icon"><i className="fa fa-rocket"></i></span>
                                                <h3 className="title">Time and Materials</h3>
                                                <p className="description">
                                                    At ItProBit, our experience and innovative practices help us define the scope of projects so you can enjoy a fixed price without taxing add-ons. This streamlines budget allotments, and fast tracks your product lifecycle.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-content">
                                            <span className="year">III</span>
                                            <div className="content-inner">
                                                <span className="icon"><i className="fa fa-briefcase"></i></span>
                                                <h3 className="title">Dedicated Team</h3>
                                                <p className="description">
                                                    We have the knowledge and the know-how to deliver high functioning, versatile, and manageable software solutions. The expertise that are talented team members hold minimizes and eliminates risk while empowering you and your business.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}