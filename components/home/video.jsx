import CountUp from 'react-countup';

export default function Video() {

    return (
        <div className="video-section-wrapper section-pb-2" data-aos="fade-up">
            <div className="video-lightbox-area" style={{backgroundImage:'url(/images/video_bg.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <iframe width="560" height="400" src="https://www.youtube.com/embed/cM4aep7VXb8?start=6" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="project-countdown-wrapper pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up">
                            <div className="project-countdown d-flex justify-content-center text-left bg-hover text-white">
                                <div className="single-countdown p-4">
                                    <h2><CountUp start={0} end={400}>400</CountUp> +</h2>
                                    <p>Completed Projects</p>
                                </div>
                                <div className="single-countdown p-4">
                                    <h2><CountUp start={0} end={44}>44</CountUp> +</h2>
                                    <p>Active Clients</p>
                                </div>
                                <div className="single-countdown p-4">
                                    <h2><CountUp start={0} end={97}>97</CountUp> %</h2>
                                    <p>Success Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
    
}