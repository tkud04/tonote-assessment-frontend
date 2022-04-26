import React, {useState, useEffect} from 'react';
import moment from 'moment';

export default function Countdown(props){
    let today = moment(), date = moment(props.date);
    let interval = 1000, eventTime = date.format("x"), currentTime = today.format("x");
    let diff = eventTime - currentTime, duration = moment.duration(diff, 'milliseconds');

    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    let timerID = null;

    useEffect(() => {
      timerID = setInterval(tick,interval);

      return () => {
          clearInterval(timerID);
      }
    });

    const tick = () => {
        duration = moment.duration(duration - interval, 'milliseconds');
        setDays(duration.days());
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
    }

    return (
        <>
        <h3 className="date"><b className="lgx-counter">{date.format("D")}</b> <span>{date.format("MMMM")}</span></h3>
        <div className="lgx-countdown-area">
           <div id="lgx-countdown" data-date="">
                <span class="lgx-days">{days} <i> Days </i></span>
                <span class="lgx-hr">{hours} <i> Hours </i></span>
                <span class="lgx-min">{minutes} <i> Mins </i></span> 
                <span class="lgx-sec">{seconds} <i> Secs </i></span>
            </div>
           {/* <h4>Today: {date.format("dddd, MMMM Do YYYY, h:mm a")}</h4> */}
        </div>
        </>
    );
}