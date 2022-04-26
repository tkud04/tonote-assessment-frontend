import React from "react";

export const PrintableTicket = React.forwardRef((props,ref) => {
    return (
        <div ref={ref}>
        <center>
        <div className="panel panel-default" style={{alignContent: "center"}} id="ticketDiv">
            <div className="panel-body">
                 <h2 className="text-success">Ticket information:</h2>
                 <img src={props.code} alt={`QR Code for ${props.name}`} style={{height: 250}} />
                 <h3>Name: {props.name}</h3>
                 <h3>Email address: {props.email}</h3>
            </div>     
       </div>
       </center>
       </div>
    );
});