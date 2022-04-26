export default function Testimonial(props){
    let arr = Array(5);
    return (
                               <div className="item">

                                    <blockquote className="lgx-testi-single">
                                        <p><span>{props.caption}</span> {props.comment}</p>
                                        <div className="author">
                                            <img src={props.img} style={{height: 50}} alt="author"/>
                                            <h4 className="title"><a href="javascript:void(0)"></a>{props.name}</h4>
                                            <div className="rate">
                                                 <i className="fa fa-star active"></i>
                                                 <i className="fa fa-star active"></i>
                                                 <i className="fa fa-star active"></i>
                                                 <i className="fa fa-star active"></i>
                                                 <i className="fa fa-star-o"></i>
                                            </div>
                                        </div>
                                    </blockquote> 
                                </div>
    );
}