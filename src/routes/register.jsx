import { updateLocale } from "moment";
import React, {useState} from "react";
import Banner2 from "../components/Banner2";

export default function RegisterView(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log("submitting register form..");
        console.log("name: ",name);
        console.log("email: ",email);
        console.log("phone: ",phone);
        console.log("gender: ",gender);
        console.log("birthday: ",birthday);
    }

    return (
        <>
         <Banner2 
          title="Register"
          subtitle="Reserve a Seat"
         />

        <main>
        <div className="lgx-page-wrapper">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-md-offset-3">

                            <form className="lgx-contactform">
                                <div className="form-group">
                                    <input type="text" name="lgxname" className="form-control lgxname" onChange={(e) => {setName(e.target.value)}} placeholder="Your full name" required/>
                                </div>

                                <div className="form-group">
                                    <input type="email" name="lgxemail" className="form-control lgxemail" onChange={(e) => {setEmail(e.target.value)}} placeholder="Your email address" required/>
                                </div>

                                <div className="form-group">
                                    <input type="number" name="lgxphone" className="form-control lgxphone" onChange={(e) => {setPhone(e.target.value)}} placeholder="Your phone number" required/>
                                </div>

                                <div className="form-group">
                                    <select name="lgxgender" className="form-control lgxgender" onChange={(e) => {setGender(e.target.value)}} required>
                                        <option value="none">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input type="date" name="lgxbday" className="form-control lgxbday" onChange={(e) => {setBirthday(e.target.value)}} required/>
                                </div>


                                <button onClick={submitForm} name="submit" value="contact-form" className="lgx-btn hvr-glow hvr-radial-out lgxsend lgx-send"><span>Submit</span></button>
                            </form>

                           <div id="lgx-form-modal" className="modal fade lgx-form-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content lgx-modal-content">
                                        <div className="modal-header lgx-modal-header">
                                            <button type="button" className="close brand-color-hover" data-dismiss="modal" aria-label="Close">
                                                <i className="fa fa-power-off"></i>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="alert lgx-form-msg" role="alert"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
        </>
     );  
  }