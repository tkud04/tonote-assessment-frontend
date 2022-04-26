export default function Footer(){
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
                                    <button type="submit" name="lgx-submit" id="lgx-submit" className="lgx-btn lgx-submit"><span>Subscribe</span></button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="lgx-footer-area">
                    <div className="lgx-footer-single">
                        <a className="logo" href="index.html"><img src="assets/img/footer-logo.png" alt="Logo"/></a>
                    </div>
                    <div className="lgx-footer-single">
                        <h3 className="footer-title">Venue Location </h3>
                        <h4 className="date">
                            18 - 21 December, 2021
                        </h4>
                        <address>
                            85 Golden Street, Darlinghurst <br/>
                            ERP 2021, United States
                        </address>
                        <a id="myModalLabel2" data-toggle="modal" data-target="#lgx-modal-map" className="map-link" href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> View Map location</a>
                    </div>
                    <div className="lgx-footer-single">
                        <h3 className="footer-title">Social Connection</h3>
                        <p className="text">
                            You should connect social area <br/> for Any update
                        </p>
                        <ul className="list-inline lgx-social-footer">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
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
                        <p> <span>©</span> 2020 Emeet is powered by <a href="http://www.themearth.com/">themearth.</a> The property of their owners.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
    );
}