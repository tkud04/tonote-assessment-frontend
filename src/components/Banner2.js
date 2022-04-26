export default function Banner2(props){
    return (
        <section className="no-print">
        <div className="lgx-banner lgx-banner-inner">
            <div className="lgx-page-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="lgx-heading-area">
                                <div className="lgx-heading lgx-heading-white">
                                    <h2 className="heading">{props.subtitle}</h2>
                                </div>
                                <ul className="breadcrumb">
                                    <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                                    <li className="active">{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}