const footerPart = () => {
  return (
    <div>
      <footer>
        <div id="footer-main">
          <div className="footerInnerText">
            <h3 className="h3Heading">EDYODA</h3>
            <a className="footer-mini-text">About Us</a>
            <a className="footer-mini-text">Contact Us</a>
            <a className="footer-mini-text">Terms of Use</a>
            <a className="footer-mini-text">Privacy policy</a>
          </div>
          <div className="footerInnerText">
            <h3 className="h3Heading">RESOURCES</h3>
            <a className="footer-mini-text">Learning Paths</a>
            <a className="footer-mini-text">Courses</a>
            <a className="footer-mini-text">Learning Videos</a>
            <a className="footer-mini-text">Educators</a>
            <a className="footer-mini-text">Edyoda Stories</a>
            <a className="footer-mini-text">University</a>
            <a className="footer-mini-text">AITEST</a>
          </div>
          <div className="footerInnerText">
            <h3 className="h3Heading">FOR ENTERPRISES</h3>
            <a className="footer-mini-text">Train Your Employees</a>
            <h3 className="h3Heading1">QUICK LINKS</h3>
            <a className="footer-mini-text">Learn and Earn</a>
            <a className="footer-mini-text">Became a Learning-Enabler</a>
            <a className="footer-mini-text">Tips for Learning-Enabler</a>
            <a className="footer-mini-text">Request New Topic</a>
            <a className="footer-mini-text">Certification</a>
            <a className="footer-mini-text">Affiliate Program</a>
          </div>
          <div className="footerInnerText">
            <h3 className="h3Heading">CONNECT</h3>
            <a className="footer-mini-text">
              2nd Floor #188, Survey No. - 123/1, <br></br>
              Incubes Building Next to McDonalds,<br></br>ITPL Main Rd,
              Brookefield,<br></br>Bengaluru, Karnataka-560037,<br></br>India
            </a>

            <a className="footer-mini-text">
              <i class="fa-solid fa-envelope"></i> hello@edyoda.com
            </a>
            <div id="fontawesome">
              <div>
                <i class={`fa-solid fa-location-dot ${"icon"}`}></i>
              </div>
              <div>
                <i class={`fa-brands fa-twitter ${"icon2"}`}></i>
              </div>
              <div>
                <i class={`fa-brands fa-facebook-f ${"icon3"}`}></i>
              </div>
              <div>
                <i class={`fa-brands fa-linkedin-in ${"icon4"}`}></i>
              </div>
            </div>

            <a className="footer-mini-text">
              © 2021 <br></br>zekeLabs Technologies Private Limited
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default footerPart;
