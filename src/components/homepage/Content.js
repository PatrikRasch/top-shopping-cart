import "./content.css";
import { useNavigate } from "react-router-dom";
// import contentPage1 from "../../images/content-page/content-page1.webp";
// import contentPage2 from "../../images/content-page/content-page2.webp";
// import contentPage3 from "../../images/content-page/content-page3.webp";
import contentPage4 from "../../images/content-page/content-page4.webp";
// import contentPage5 from "../../images/content-page/content-page5.webp";
// import contentPage6 from "../../images/content-page/content-page6.webp";
import contentPage7 from "../../images/content-page/content-page7.webp";
// import contentPage8 from "../../images/content-page/content-page8.webp";
import contentPage9 from "../../images/content-page/content-page9.webp";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="content-wrapper">
      <div className="content-images-wrapper">
        <div className="single-image-wrapper">
          <div className="content-image-shading"></div>
          <img src={contentPage9} alt="" className="content-image content-image1" />
        </div>
        <div className="single-image-wrapper">
          <div className="content-image-shading"></div>
          <img src={contentPage7} alt="" className="content-image content-image2" />
        </div>
        <div className="single-image-wrapper">
          <div className="content-image-shading"></div>
          <img src={contentPage4} alt="" className="content-image content-image3" />
        </div>
      </div>
      <div className="content-title">
        <i>Your Gateway</i> into <b>Fashion</b>
      </div>

      <button className="shop-now" onClick={() => navigate("/products")}>
        SHOP NOW
      </button>
    </div>
  );
};

export default Content;
