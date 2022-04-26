import VenueImg from "../assets/img/info-icon1.png";
import TransportImg from "../assets/img/info-icon2.png";
import HotelImg from "../assets/img/info-icon3.png";

export default function TravelInfo(){
    return (
        <section>
            <div id="lgx-travelinfo" className="lgx-travelinfo">
                <div className="lgx-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="lgx-heading">
                                    <h2 className="heading">Event Information</h2>
                                    <h3 className="subheading">Conferences dedicated to building remarkable events.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="lgx-travelinfo-content">
                                    <div className="lgx-travelinfo-single">
                                        <img src={VenueImg} alt="location"/>
                                        <h3 className="title">Venue</h3>
                                        <p className="info"> Eko Hotels & Suites, Victoria Island, Lagos, NG</p>
                                    </div>
                                    <div className="lgx-travelinfo-single">
                                        <img src={TransportImg} alt="Transport"/>
                                        <h3 className="title">Transport</h3>
                                        <p className="info">This is some placeholder text for this component. This text would fill up the empty space</p>
                                    </div>
                                    <div className="lgx-travelinfo-single">
                                        <img src={HotelImg} alt="Hotel & Restaurant"/>
                                        <h3 className="title">Hotel & Restaurant</h3>
                                        <p className="info">Eko Hotels & Suites, Victoria Island, Lagos, NG</p>
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