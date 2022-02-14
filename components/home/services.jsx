import Image from "next/image";

export default function Services(props) {

    const { services, title, description } = props;
    let i = 1;

    return (
        <section className="company-offers pt-5 pb-5" data-aos="flip-down">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto text-center">
                        <div className="section-intro">
                            <h2 className="section-title">{title}</h2>
                            <div className="md-separator"></div>
                        </div>
                    </div>
                </div>
                <section className="services-stack mobcode-tagline cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center pt-5 pb-5">
                                <p className="section-subheading">{description}</p>
                            </div>
                            <div className="services-stack-grid col-lg-12" data-aos="zoom-in-up">
                                <ul className="list-unstyled">
                                    {services.map((service, index) => (
                                        <li key={service._id} className={index === 5 && 'border-right-0' || index > 5 && services.length != index && 'border-bottom-0' || index > 11 && services.length != index && 'border-top' || services.length === index && 'border-top' || ''}>
                                            <a href="#">
                                                <Image alt={service.name} width="50px" height="50px" src={service.icon} />
                                                <p className="text-center">{service.name}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );

}