import moment from "moment";
import logo from '../assets/img/logo.png';

export default function Footer(props){
    let eventDate = moment(props.eventDate);

    const submitSubscribeForm = (e) => {
        e.preventDefault();
        console.log("submit subscribe form");
    }

    return (
     <footer>
        <div id="lgx-footer" className="lgx-footer">
            <div className="lgx-inner-footer">
                <div className="lgx-subscriber-area ">
                    <div className="container">
                        <div className="lgx-subscriber-inner">
                            <h3 className="subscriber-title">Join Newsletter</h3>
                            <form className="lgx-subscribe-form" >
                                <div className="form-group form-group-email">
                                    <input type="email" id="subscribe" placeholder="Enter your email Address  ..." className="form-control lgx-input-form form-control"  />
                                </div>
                                <div className="form-group form-group-submit">
                                    <button onClick={submitSubscribeForm} name="lgx-submit" id="lgx-submit" className="lgx-btn lgx-submit"><span>Subscribe</span></button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="lgx-footer-area">
                    <div className="lgx-footer-single">
                        <a className="logo" href="/"><img src={logo} alt="Logo"/></a>
                    </div>
                    <div className="lgx-footer-single">
                        <h3 className="footer-title">Venue Location </h3>
                        <h4 className="date">
                            {eventDate.format("dddd, MMMM Do YYYY")}
                        </h4>
                        <address>
                            Eko Hotels & Suites, Victoria Island <br/>
                            Lagos, NG
                        </address>
                        <a id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" className="map-link" href="javascript:void(0)"><i className="fa fa-map-marker" aria-hidden="true"></i> View Map location</a>
                    </div>
                    <div className="lgx-footer-single">
                        <h3 className="footer-title">Social Connection</h3>
                        <p className="text">
                            You should connect social area <br/> for Any update
                        </p>
                        <ul className="list-inline lgx-social-footer">
                            <li><a href="javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div id="lgx-modal-map" className="modal fade lgx-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="lgxmapcanvas map-canvas-default" id="map_canvas"> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lgx-footer-bottom">
                    <div className="lgx-copyright">
                        <p> <span>&copy;</span> 2022 This event is powered by <a href="javascript:void(0)">ToNote Technologies.</a></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
    );
}