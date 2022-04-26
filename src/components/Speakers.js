import Speaker from "./Speaker";
import speaker1 from "../assets/img/speakers/speaker1.jpg";
import speaker2 from "../assets/img/speakers/speaker2.jpg";
import speaker3 from "../assets/img/speakers/speaker3.jpg";
import speaker4 from "../assets/img/speakers/speaker4.jpg";
import speaker5 from "../assets/img/speakers/speaker5.jpg";
import speaker6 from "../assets/img/speakers/speaker6.jpg";

export default function Speakers(){
    let speakers = [
        {key : "1", name: "Joseph Mbakwe", title: "CEO of LogicHunt", img: speaker1},
        {key : "2", name: "Tosin Adetutu", title: "MD of Rising Sun Inc.", img: speaker2},
        {key : "3", name: "Chris Nwafor", title: "Entrepreneur", img: speaker3},
        {key : "4", name: "Tunde Kolawole", title: "CEO of MobileMarket", img: speaker4},
        {key : "5", name: "Anita Komolafe", title: "CEO of Komo Sunshine Supermarkets", img: speaker5},
        {key : "6", name: "Chinasa Nwabara", title: "Entrepreneur", img: speaker6}
    ];
    return (
        <section>
             <div id="lgx-speakers" className="lgx-speakers lgx-speakers2">
                 <div className="lgx-inner">
                     <div className="container">
                         <div className="row">
                             <div className="col-xs-12">
                                 <div className="lgx-heading lgx-heading-white">
                                     <h2 className="heading">Who's Speaking</h2>
                                     <h3 className="subheading">Welcome to the dedicated to building remarkable Speakers!</h3>
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                             {
                                speakers.map((s) => (
                                    <div key={s.id} className="col-xs-12 col-sm-6 col-md-4">
                                        <Speaker
                                           key={s.id}
                                           name={s.name}
                                           title={s.title}
                                           img={s.img}
                                        />
                                    </div>
                                    ))
                            }
                         </div>
                         <div className="section-btn-area">
                             <a className="lgx-btn lgx-btn-big" href="javascript:void(0)"><span>View More Speakers</span></a>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    );
}