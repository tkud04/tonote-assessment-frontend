import React, {useEffect} from 'react';

//Styles
import './assets/libs/bootstrap/css/bootstrap.min.css';
import './assets/libs/fontawesome/css/font-awesome.min.css';
import './assets/libs/magnificpopup/magnific-popup.css';
import './assets/libs/timer/TimeCircles.css';
import './assets/libs/owlcarousel/owl.carousel.min.css';
import './assets/libs/owlcarousel/owl.theme.default.min.css';
import './assets/css/google-font.css?family=Oswald:400,700%7cPoppins:300,400,400i,600,600i,700,800,900';
import './assets/css/style-default.min.css';


import Header from './partials/header';
import Footer from './partials/footer';
import Helmet from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function App2(){
              
    return (
        <>
       <Helmet>
             <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
             <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
             <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
   
             <title>Event Website</title>
             <meta name="description" content="Responsive Emeet HTML Template"/>
             <meta name="keywords" content="Bootstrap3, Event,  Conference, Meetup, Template, Responsive, HTML5"/>
             <meta name="author" content="themearth.com"/>

            <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicon/apple-icon-57x57.png"/>
             <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicon/apple-icon-60x60.png"/>
             <link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicon/apple-icon-72x72.png"/>
             <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon/apple-icon-76x76.png"/>
             <link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicon/apple-icon-114x114.png"/>
             <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon/apple-icon-120x120.png"/>
             <link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicon/apple-icon-144x144.png"/>
             <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicon/apple-icon-152x152.png"/>
             <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-icon-180x180.png"/>
             <link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicon/android-icon-192x192.png"/>
             <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png"/>
             <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon/favicon-96x96.png"/>
             <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png"/>
            
            </Helmet>
         <div className="lgx-container ">
            <Header/>
            <div>
              <Outlet/>
            </div>
            <Footer/>
         </div>
       </>
    );
}