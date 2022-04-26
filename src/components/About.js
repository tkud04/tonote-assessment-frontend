import moment from "moment";
import aboutImg from "../assets/img/about-sp.jpg";

export default function About(props){
    let eventDate =  moment(props.eventDate);

    return (
        <section>
           <div id="lgx-about" className="lgx-about">
               <div className="lgx-inner">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12 col-md-7">
                             <div className="lgx-about-content-area">
                                 <div className="lgx-heading">
                                     <h2 className="heading">Happy New Year 2021</h2>
                                     <h3 className="subheading">Do not miss the upcoming event, Who should attend?</h3>
                                 </div>
                                 <div className="lgx-about-content">
                                     <p className="text">
                                        Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae vitae fames ac turpis egestas.
                                     </p>
                                     <div className="about-date-area">
                                         <h4 className="date"><span>{eventDate.format("D")}</span></h4>
                                         <p><span>{eventDate.format("MMMM, YYYY")}</span> Eko Hotels & Suites, Victoria Island, Lagos, NG</p>
                                     </div>

                                     <div className="section-btn-area">
                                         <a className="lgx-btn lgx-btn-red lgx-scroll" href="register"><span>Register</span></a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-sm-12 col-md-5">
                             <div className="lgx-about-img-sp">
                                 <img src={aboutImg} alt="about"/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    );
}