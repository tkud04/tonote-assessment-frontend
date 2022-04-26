import testimonial1 from "../assets/img/speakers/speaker1.jpg";
import testimonial2 from "../assets/img/speakers/speaker2.jpg";
import testimonial3 from "../assets/img/speakers/speaker3.jpg";
import Testimonial from "./Testimonial";

export default function Testimonials(){
    let testimonials = [
        {name: "Seyi Jolaosho", rating: 4, caption: "This is a very awesome event!", comment: "This is some placeholder text for the testimonials section of this project. It should be long enough to fill up the space allocated to it.", img: testimonial1},
        {name: "Oyinda Kudayisi", rating: 5, caption: "I loved every bit of it", comment: "This is some placeholder text for the testimonials section of this project. It should be long enough to fill up the space allocated to it.", img: testimonial2},
        {name: "Ernest Obi", rating: 3, caption: "I learned a lot!", comment: "This is some placeholder text for the testimonials section of this project. It should be long enough to fill up the space allocated to it.", img: testimonial3},
    ];

    return (
        <section>
            <div id="lgx-testimonial" className="lgx-testimonial">
                <div className="lgx-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="lgx-heading">
                                    <h2 className="heading">What Past Attendees Say</h2>
                                    <h3 className="subheading">Remarkable testimonials from our past events!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="lgx-owltestimonial" className="lgx-owltestimonial lgx-owlnews">
                                {
                                    testimonials.map((t,i) => (
                                        <Testimonial
                                          key={i}
                                          img={t.img}
                                          name={t.name}
                                          rating={t.rating}
                                          caption={t.caption}
                                          comment={t.comment}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}