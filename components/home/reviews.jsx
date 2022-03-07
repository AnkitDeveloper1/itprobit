import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

export default function OurClient(props) {
    const { reviews, title, description } = props;

    return (
        <section className="our-client-reviews section-ptb" data-aos="fade-up" style={{backgroundColor:'#5c2be6', color:'white', paddingTop:'10%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center pb-3">
                        <div className="section-intro">
                            <h2 className="section-title text-white">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel className="client-reviews-carousel owl-carousel" loop items={3} margin={10}>
                            {reviews.data.map(review => (
                                <div className="single-review border p-4" key={review._id}>
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <p>{review.message}</p>
                                    <div className="designation">
                                        <p><b>{review.customer}</b> {review.platform}</p>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );

}