import React from 'react';

function Events() {

  const eventsData = [
    {
      semester: 'Workshop : Spring 2023',
      title: 'Intro to Aframe',
      link: 'https://github.com/kewalkishang/Aframe-Intro-ZombieSlayer',
      description: 'Make your very first WebVR game and learn the basics of Aframe, a popular WebVR framework.',
      images: ['src/assets/images/demo_screenshot (1).png'], // Add your image URLs
    },
    {
      semester: 'Fall 2023',
      title: "X-Games '23",
      description: 'We set out with a vision to introduce students to the fascinating world of Extended Reality (XR) through an immersive gaming experience.',
      images: ['src/assets/images/1698310441329.jpeg', 'src/assets/images/1698310441802.jpeg', 'src/assets/images/1698310442197 (1).jpeg'], // Add your image URLs
    },
    {
      semester: 'Fall 2023',
      title: "Transforming Portfolios into 3D",
      description: 'We delved into immersive web experiences, creating an interactive, gaze-based portfolio using the fundamentals of AR.js and A-Frame, offering participants a comprehensive exploration of building cutting-edge WebAR applications.',
      images: ['src/assets/images/1701725619424.jpeg', 'src/assets/images/fall2023_1.jpeg', 'src/assets/images/fall2023_2 (1).jpeg'], // Add your image URLs
    },
  ];


  const renderCarousel = (images) => {
    const settings = {
      // Customize carousel settings as needed
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="row__posters">
      {images.map((image, index) => (
        <div>
        <img src={image} />
        </div>
      ))}
      </div>
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
      {/* <div className="timeline-desc">Follow us to keep updated.</div> */}
      <div className="timeline-titres">
      <div className="timeline-title">X-Games '23: </div>
      {/* <div className="timeline-link">   : <a target="_blank" href="https://github.com/kewalkishang/WebAR-intro-Portfolio"> resources</a> </div> */}
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
</div>
</div>

  );
}

export default Events;