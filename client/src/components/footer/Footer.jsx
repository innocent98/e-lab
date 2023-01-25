import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="box">
          <ul>
            <li className="heading">About</li>
            <li>About eLibrary</li>
            <li>Our blog</li>
            <li>Invite friends</li>
          </ul>
        </div>

        <div className="box">
          <ul>
            <li className="heading">Support</li>
            <li>Help/FAQ</li>
            <li>Accessibility</li>
            <li>Purchase help</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="box">
          <ul>
            <li className="heading">Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Copyright</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="box">
          <ul>
            <li>
              <div className="social">
                <img src="assets/book/fb.png" alt="" />
                <img src="assets/book/ig.png" alt="" />
                <img src="assets/book/tw.png" alt="" />
              </div>
            </li>
            <li>Lagos, Nigeria</li>
            <li>folashadeajayi01@gmail.com</li>
            <li>+234 810 342 1471</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
