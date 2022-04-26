import Countdown from "./Countdown";

export default function Banner(props){
    let eventDate = props.eventDate;
    return (
        <section>
            <div className="lgx-banner">
                <div className="lgx-banner-style">
                    <div className="lgx-inner lgx-inner-fixed">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="lgx-banner-info-area">
                                        <div className="lgx-banner-info-circle">
                                            <div className="info-circle-inner">
                                                <Countdown
                                                  date={eventDate}
                                                />
                                            </div>
                                        </div>
                                        <div className="lgx-banner-info">
                                            <h3 className="subtitle">Moving Forward</h3>
                                            <h2 className="title">Conference <span><b>2</b><b>0</b><b>2</b><b>2</b></span></h2>
                                            <h3 className="location"><i className="fa fa-map-marker"></i>Eko Hotels & Suites, Victoria Island</h3>
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