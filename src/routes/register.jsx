import React, {useState, useRef} from "react";
import Banner2 from "../components/Banner2";
import QRCode from "qrcode";
import {PrintableTicket} from "../components/PrintableTicket";
import ReactToPrint from "react-to-print";

export default function RegisterView(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [code, setCode] = useState("");
    const [ticketGenerated, setTicketGenerated] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("submitting register form..");
        console.log("name: ",name);
        console.log("email: ",email);
        console.log("phone: ",phone);
        console.log("gender: ",gender);
        console.log("birthday: ",birthday);

        //Generate QR code for user
        QRCode.toDataURL('Testing QR code')
        .then(url => {
            console.log("Generated URL: ",url);
            setCode(url);
            setTicketGenerated(true);
        })
        .catch(err => {
            console.log("error gennerating qr code: ",err);
        });
    }

    const printTicket = () => {
        setTimeout(() => {
            window.print();
        },0);
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
                            {
                              ticketGenerated ? (
                                <center>
                                <div style={{marginBottom: 10}} id="ticketDiv" className="no-print">
                                    <h2 className="text-success">Ticket generated! Here's your ticket information:</h2>
                                    <button className="btn btn-primary btn-lg" onClick={printTicket}>Print</button>
                                 </div>
                                 <div style={{marginTop: 10}}>
                               
                               <PrintableTicket
                                 code={code}
                                 name={name}
                                 email={email}
                               />
                               </div>
                               </center>
                             ) : (
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
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
        </>
     );  
  }