export default function Header(props) {
    const { heading, bgcolor } = props;

    return (
        <>
            {!bgcolor?<div className="pt-5"></div>:''}
            <div className="header-content d-flex justify-content-center align-items-center pt-5" style={{backgroundColor: bgcolor}}>
                <div className="row">
                    <div className="col-md" data-aos="fade-up">
                        <div className="header-text pt-5 pb-3 text-white text-center">
                            <div className="intro-text">
                                <h1 className="intro-lead-in theme-underlined">{heading}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}