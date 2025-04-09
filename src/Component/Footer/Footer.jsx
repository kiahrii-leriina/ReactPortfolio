import React from "react";
import "./footer.css";
import user from "../../assets/user.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="footertopleft">
            <img src={logo} alt="" />
          <p>
            i am a full stack developer, from Manipur and i'm currently based in
            Bengaluru for my upskilling courses, and i have recently completed
            my full stack course at Jspiders Hebal branch
          </p>
        </div>
        <div className="footertopright">
            <div className="footeremailinput">
                <img src={user} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="subscribe">Subscribe</div>
         </div>
        </div>
        <hr />
        <div className="footerbuttom">
            <p footerbottomleft>&copy; 2024 Kaihrii leriina. All right reserved</p>
            <div className="footerbottomright">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
