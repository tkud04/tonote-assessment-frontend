import Banner from "../components/Banner";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Testimonials from "../components/Testimonials";
import TravelInfo from "../components/TravelInfo";
import VideoWidget from "../components/VideoWidget";

export default function Index(){
    let eventDate = "April 27, 2022";
    return (
        <>
        <Banner
         eventDate={eventDate}
        />
        <About
         eventDate={eventDate}
        />
        <Speakers/>
        <Testimonials/>
        <TravelInfo/>
        <VideoWidget/>
        </>
    );
}