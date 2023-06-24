import "./contact.css";

import github from "../../images/contact-page/github-black.webp";
import facebook from "../../images/contact-page/facebook-black.webp";
import messenger from "../../images/contact-page/messenger-black.webp";
import twitter from "../../images/contact-page/twitter-black.webp";
import instagram from "../../images/contact-page/instagram-black.webp";
import footerImage from "../../images/contact-page/footer-orange1.webp";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="all-icons-wrapper">
          <div className="icon-wrapper icon-wrapper-github">
            <a href="https://github.com/PatrikRasch">
              <img src={github} alt="" className="icon" />
            </a>
          </div>

          <div className="icon-wrapper icon-wrapper-facebook">
            <a href="https://www.youtube.com/watch?v=OZshCpFSgwI">
              <img src={facebook} alt="" className="icon" />
            </a>
          </div>
          <div className="icon-wrapper icon-wrapper-messenger">
            <a href="https://www.youtube.com/watch?v=xua4P0MFIgQ">
              <img src={messenger} alt="" className="icon" />
            </a>
          </div>
          <div className="icon-wrapper icon-wrapper-twitter">
            <a href="https://www.youtube.com/watch?v=F4dGW0jHbuo">
              <img src={twitter} alt="" className="icon" />
            </a>
          </div>
          <div className="icon-wrapper icon-wrapper-instagram">
            <a href="https://www.youtube.com/watch?v=wT7oWz40Q1M">
              <img src={instagram} alt="" className="icon" />
            </a>
          </div>
        </div>
        <div className="address-wrapper">
          <div className="address-line1">Unreal Clothing</div>
          <div className="address-line2">Klostergata 90, 7030 Trondheim Norway</div>
        </div>
      </div>
      <div className="footer">
        <img src={footerImage} alt="" className="contact-page-footer" />
      </div>
    </div>
  );
};

export default Contact;
