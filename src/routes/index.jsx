import Banner from "../components/Banner";
import About from "../components/About";
import Speakers from "../components/Speakers";

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
        </>
    );
}