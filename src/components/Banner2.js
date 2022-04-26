export default function Banner2(props){
    return (
        <section>
        <div class="lgx-banner lgx-banner-inner">
            <div class="lgx-page-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="lgx-heading-area">
                                <div class="lgx-heading lgx-heading-white">
                                    <h2 class="heading">{props.subtitle}</h2>
                                </div>
                                <ul class="breadcrumb">
                                    <li><a href="/"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
                                    <li class="active">{props.title}</li>
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