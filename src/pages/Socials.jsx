import GmailImg from '../assets/images/gmail.png';
import LinkedinImg from '../assets/images/linkedin.png';
import DiscordImg from '../assets/images/discord.png';
import GithubImg from '../assets/images/github.png';

function Socials() {

  return (
    <div className="socials-page wrapper">
       <div className="box">
              <div className="title">  
                  Join Us!
              </div>
              <div className='join-text' style={{marginTop: "20px", marginLeft : "20px",  marginRight : "20px"}}> Whether you're a student, professional, professor, hobbyist, or simply intrigued by the world of XR, we invite you to join. </div>
              <hr style={{width: "60%", marginTop: "30px", marginLeft: "20%"}}/>
              <div className='join-why-container'>
              <div className='join-title'>
              Why Join Us ? 
              </div>
                <div className='join-reasons'>
                  <ul>
                    <li>
                <div className='join-text'> Hands-On Experience</div> 
                </li>
                <li>
                <div className='join-text'> Networking Opportunities</div>
                </li>
                <li>
                <div className='join-text'> Innovation and Creativity</div>
                </li>
                </ul>
                </div>
              </div>
              <hr style={{width: "60%", marginBottom: "40px", marginLeft: "20%"}}/>
              <div className="socials-container">
                <div className='join-title'>Socials</div>
            
              {/* <div className='join-text'> as</div> */}
               <div className="socials-links">
               <a target="_blank" href='mailto:nuxr.neu@gmail.com'><img className="social-img" src={GmailImg} /> </a>
               <a target="_blank" href='https://www.linkedin.com/company/nuxr/'><img className="social-img" src={LinkedinImg} /> </a>
               <a target="_blank" href='https://discord.gg/tN2uDwjAsJ'><img className="social-img" src={DiscordImg} /> </a>
               <a target="_blank" href='https://github.com/NuXR-NEU'><img className="social-img" src={GithubImg} /> </a>
               </div>
              </div>
        </div>
    </div>
  );
}

export default Socials;