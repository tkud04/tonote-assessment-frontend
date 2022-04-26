import Banner2 from "../components/Banner2";

export default function ContactView(){
 const submitForm = (e) => {
     e.preventDefault();
     console.log("submitting contact form..");
 }
  return (
     <>
      <Banner2 
       title="Contact Us"
       subtitle="Get in Touch"
      />

    <main>
        <div className="lgx-page-wrapper">
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-md-offset-3">

                            <form className="lgx-contactform">
                                <div className="form-group">
                                    <input type="text" name="lgxname" className="form-control lgxname" id="lgxname" placeholder="Enter Your Name" required/>
                                </div>

                                <div className="form-group">
                                    <input type="email" name="lgxemail" className="form-control lgxemail" id="lgxemail" placeholder="Enter email" required/>
                                </div>

                                <div className="form-group">
                                    <input type="text" name="lgxsubject" className="form-control lgxsubject" id="lgxsubject" placeholder="Subject" required/>
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control lgxmessage" name="lgxmessage" id="lgxmessage" rows="5" placeholder="We expect drop some line from you..." required></textarea>
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