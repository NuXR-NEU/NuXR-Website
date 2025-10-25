import React from 'react';
import Event1I1 from '../assets/images/demo_screenshot (1).png';
import Event2I1 from '../assets/images/1698310441329.jpeg';
import Event2I2 from '../assets/images/1698310441802.jpeg';
import Event2I3 from '../assets/images/1698310442197 (1).jpeg';
import Event3I1 from '../assets/images/1701725619424.jpeg';
import Event3I2 from '../assets/images/fall2023_1.jpeg';
import Event3I3 from '../assets/images/fall2023_2 (1).jpeg';
import NeRFWorkshopImage from '../assets/images/QRCode for 🚀Hands-on on NeRF Workshop_ An introduction to 3D reconstruction.png';
import nerf1 from '../assets/images/nerf1.png';
import nerf2 from '../assets/images/nerf2.png';

import saber1 from '../assets/images/saber1.png';
import saber2 from '../assets/images/saber2.png';
import saber3 from '../assets/images/saber3.png';

import WebAR from '../assets/images/WebAR.png';



import Slider from "react-slick";
// import "./Slideshow.css";  // We'll create this file next.
// import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

function Events() {

  const eventsData = [
    {
      semester: 'Workshop : Spring 2023',
      title: 'Intro to Aframe',
      link: 'https://github.com/kewalkishang/Aframe-Intro-ZombieSlayer',
      description: 'Make your very first WebVR game and learn the basics of Aframe, a popular WebVR framework.',
      images: [Event1I1], // 事件1图片
    },
    {
      semester: 'Fall 2023',
      title: "X-Games '23",
      description: 'We set out with a vision to introduce students to the fascinating world of Extended Reality (XR) through an immersive gaming experience.',
      images: [Event2I1, Event2I2, Event2I3], // 事件2图片
    },
    {
      semester: 'Fall 2023',
      title: "Transforming Portfolios into 3D",
      description: 'We delved into immersive web experiences, creating an interactive, gaze-based portfolio using the fundamentals of AR.js and A-Frame, offering participants a comprehensive exploration of building cutting-edge WebAR applications.',
      images: [Event3I1,Event3I2 ,Event3I3 ], // 事件3图片
    },
    {
      semester: 'Fall 2024',
      title: 'WebAR Workshop',
      description: 'Explore the exciting world of Web-based Augmented Reality and create interactive AR experiences directly in the browser.',
      images: [WebAR], // WebAR活动图片
    },
    {
      semester: 'Spring 2025',
      title: 'Hands-on on NeRF Workshop: An introduction to 3D reconstruction',
      description: 'Learn the fundamentals of Neural Radiance Fields (NeRF) and 3D reconstruction techniques through hands-on experience.',
      images: [NeRFWorkshopImage, nerf1, nerf2], // NeRF Workshop图片
    },
    {
      semester: 'Spring 2025',
      title: 'Beat Saber Battle',
      description: 'Join us for an exciting VR gaming competition featuring Beat Saber. Test your rhythm and reflexes in this high-energy VR experience.',
      images: [saber1, saber2, saber3], // Beat Saber活动图片
    },
  ];


  const renderCarousel = (images) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      // <div className="row__posters">
      //   {/* <div className='row__poster'> */}
      // {images.map((image, index) => (
      //   // <div>
      //   // <img className='img_responsive' src={image} />
      //   // </div>
      //   <img style={{height: "180px", width : "100%"}} src={image}></img>
      // ))}
      // {/* </div> */}
      // </div>

      <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img style={{height: "500px", width : "100%"}} src={image} alt={`Event ${index + 1}`} />
        </div>
      ))}
    </Slider>
    );
  };

  return (
    <div>
      <div className="events-page wrapper">
     <div className="events-title">
         <div className="main-title">Events</div>
   </div>
</div>
    <div className="timeline">
   <div className="container left">
    <div className="timeline-content">
      <div className="timeline-sem">Workshop : Spring 2023</div>
      <div className="timeline-titres">
      <div className="timeline-title">Intro to Aframe </div>
      <div className="timeline-link">   : <a target="_blank" href="https://github.com/kewalkishang/Aframe-Intro-ZombieSlayer"> resources</a> </div>
      </div>
      <p><div className="timeline-desc">Make your very first WebVR game and learn the basics of Aframe a popular WebVR framework.</div></p>
      {renderCarousel(eventsData[0].images)}
    </div>
  </div>
  <div className="container right">
    <div className="timeline-content">
      <div className="timeline-sem">Fall 2023</div>
      <div className="timeline-titres">
      <div className="timeline-title">X-Games '23: </div>
      </div>
      <p><div className="timeline-desc">We set out with a vision to introduce students to the fascinating world of Extended Reality (XR) through an immersive gaming experience.</div></p>
      {renderCarousel(eventsData[1].images)}
      <div className="timeline-titres">
      <div className="timeline-title">Transforming Portfolios into 3D </div>
      <div className="timeline-link"> : <a target="_blank" href="https://github.com/kewalkishang/WebAR-intro-Portfolio">  resources</a> </div>
      </div>
      <p><div className="timeline-desc">We delved into immersive web experiences, creating an interactive, gaze-based portfolio using the fundamentals of AR.js and A-Frame, offering participants a comprehensive exploration of building cutting-edge WebAR applications.</div></p>
      {renderCarousel(eventsData[2].images)}
    </div>
  </div>
  <div className="container left">
    <div className="timeline-content">
      <div className="timeline-sem">Fall 2024</div>
      <div className="timeline-titres">
      <div className="timeline-title">WebAR Workshop </div>
      </div>
      <p><div className="timeline-desc">Explore the exciting world of Web-based Augmented Reality and create interactive AR experiences directly in the browser.</div></p>
      {renderCarousel(eventsData[3].images)}
    </div>
  </div>
  <div className="container right">
    <div className="timeline-content">
      <div className="timeline-sem">Spring 2025</div>
      <div className="timeline-titres">
      <div className="timeline-title">Hands-on on NeRF Workshop </div>
      </div>
      <p><div className="timeline-desc">Learn the fundamentals of Neural Radiance Fields (NeRF) and 3D reconstruction techniques through hands-on experience.</div></p>
      {renderCarousel(eventsData[4].images)}
      <div className="timeline-titres">
      <div className="timeline-title">Beat Saber Battle </div>
      </div>
      <p><div className="timeline-desc">Join us for an exciting VR gaming competition featuring Beat Saber. Test your rhythm and reflexes in this high-energy VR experience.</div></p>
      {renderCarousel(eventsData[5].images)}
    </div>
  </div>
</div>
</div>

  );
}

export default Events;