import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

export default function Blog(props) {
    const { blogs, title } = props;

    return (
        <div className="our-product-carousel section-ptb" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-3">
                        <h2 className="section-title">{title}</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <OwlCarousel className="products-carousel owl-carousel" navText={ "<i className='fas fa-long-arrow-alt-left'></i>", "<i className='fas fa-long-arrow-alt-right'></i>" } nav loop items={4} margin={10}>
                        {blogs.map(blog => (
                            <div className="single-review border p-4" key={blog._id}>
                                <div className="quote-icon">
                                    <i className="fas fa-rss"></i>
                                </div>
                                <h4><a href="blogs/iot_blog.html">{blog.title}</a> </h4>
                                <p> {blog.content} ...</p>
                                <div className="">
                                    <p>{blog.added_on}</p>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );

}
