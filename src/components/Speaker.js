import React, {useState} from "react";

export default function Speaker(props){

    return (
        <div className="lgx-single-speaker">
             <figure>
                 <a className="profile-img" href="javascript:void(0)"><img src={props.img} alt={props.name}/></a>
                 <figcaption>
                     <div className="social-group">
                         <a className="sp-tw" href="javascript:void(0)"><i className="fa fa-twitter"></i></a>
                         <a className="sp-fb" href="javascript:void(0)"><i className="fa fa-facebook"></i></a>
                         <a className="sp-insta" href="javascript:void(0)"><i className="fa fa-instagram"></i></a>
                         <a className="sp-in" href="javascript:void(0)"><i className="fa fa-linkedin"></i></a>
                     </div>
                     <div className="speaker-info">
                         <h3 className="title"><a href="javascript:void(0)">{props.name}</a></h3>
                         <h4 className="subtitle">{props.title}</h4>
                     </div>
                </figcaption>
             </figure>
        </div>
    );
}