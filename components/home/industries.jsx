import Image from "next/image";

export default function Industries() {
    
    return (
        <section className="company-offers pb-5" data-aos="zoom-in-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5 text-center">
                        <div className="section-intro">
                            <h2 className="section-title">Delvering Innovations Across Industries</h2>
                            <p>We help organisations reduce costs and create value, while pushing the boundaries of innovation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5 bgc1 text-white">
                            <Image className="img_fluid mb-1" width={100} height={100} src="/images/home/icons8-airplane-take-off-100.png" alt="single box" />
                            <h4 className="sub_title my-3 text-white">Automotive &#38; Transportation Solutions</h4>
                            <p className="text-left">We provide expert and robust mobility solutions changing the face of the transportation business for our clients. Our IoT solutions along with custom mobile apps with quality UI/UX design for automotive and transportation businesses
                                have brought more flexibility and seamless solutions increasing the brand value. </p>
                            <a href="industries/mobility-ind.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5 text-black">
                            <Image className="img_fluid mb-1 " width={100} height={100} src="/images/home/finance-ico.png" alt="single box" />
                            <h4 className="sub_title my-3 text-black ">Banking &#38; Accounting Solutions</h4>
                            <p className="text-left">Get the best out of your smartphone through mobile banking, accounting, insurance services and much more. For managing customers to send invoices and maintain transactions, Finance mobility solutions is what you need. Such solutions
                                will not only save time but also money, for you and your customers.</p>
                            <a href="industries/finance-accounting.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5 text-black">
                            <Image className="img_fluid mb-1 " width={100} height={100} src="/images/home/icons8-food-100.png" alt="single box" />
                            <h4 className="sub_title my-3 text-black">Food &#38; Beverages</h4>
                            <p className="text-left">
                                Food &#38; Beverages industry has taken to IT like few others. Exploiting on-demand platforms to order &#38; queue management to on-premises interactive menus to using AI &#38; Analytics to optimise the delivery fleet, the dynamic range and vastness of solutions
                                employed today in this fast-moving and highly innovative industry can be intimidating at times.
                            </p>
                            <a href="industries/food-beverages.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5 bgc1 text-white">
                            <Image className="img_fluid mb-1" width={100} height={100} src="/images/home/icons8-heart-with-pulse-100.png" alt="single box" />
                            <h4 className="sub_title my-3 text-white">HealthCare &#38; Fitness</h4>
                            <p className="text-left">Sensors on wrist. Sensors on phone. Sensors in the home. With always-on tracking of movement &#38; exercise routines and friction-less food &#38; nutrition information logging, wellness &#38; fitness has never seen such IT-enabled focus. ItProBit
                                helps brands and start-ups use the best in technology to provide state-of-the-art solutions to service</p>
                            <a href="industries/healthcare-fitness.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5 bgc1 text-white">
                            <Image className="img_fluid mb-1 " width={100} height={100} src="/images/home/icons8-shopping-cart-100.png" alt="single box" />
                            <h4 className="sub_title my-3 text-white">Retail &#38; ECommerce</h4>
                            <p className="text-left">Based on the latest marketing trends, retailers have to be very dynamic in terms of product display, store operations, customer engagement and overall customer experience. For remarkable growth in retail industry, a custom retail
                                app development benefits the retailers to increase the footfall offering a branded virtual platform for online shopping.</p>
                            <a href="industries/retail-ecommerce.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-up" style={{padding:'0%'}}>
                        <div className="single-box text-center border p-5  text-black">
                            <Image className="img_fluid mb-1" width={100} height={100} src="/images/home/icons8-beach-100.png" alt="single box" />
                            <h4 className="sub_title my-3 text-black">Travel &#38; Hospitality</h4>
                            <p className="text-left">Imagine being able to stay connected to your customers even after they went off your restaurant and promote your daily deals and offers to them which can significantly increase your hospitality or catering business.Digital mobile
                                solutions help in streamline the operations happening from the shop to the top in the market. </p>
                            <a href="industries/travel-hospitality.html"><u>Learn More..</u></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}