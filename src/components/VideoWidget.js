export default function VideoWidget(){
    return (
        <section>
    <div id="lgx-video" className="lgx-video">
        <div className="lgx-inner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="lgx-video-area">
                            <figure>
                                <figcaption>
                                    <div className="video-icon">
                                        <div className="lgx-vertical">
                                            <a id="myModalLabel" className="icon" href="#" data-toggle="modal" data-target="#lgx-modal">
                                                <i className="fa fa-play " aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <div id="lgx-modal" className="modal fade lgx-modal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        </div>
                                        <div className="modal-body">
                                            <iframe id="modalvideo" src="https://www.youtube.com/embed/oSPR5Go05Vg" allowfullscreen></iframe>
                                        </div>
                                    </div>
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