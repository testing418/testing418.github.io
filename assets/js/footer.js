import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="ft-item">
              <h4 className="widget-title">About Us</h4>
              <p>
                Snow Rider 3D is your go-to destination for playing games at school
                or work. Enjoy a wide variety of games that are fun and accessible
                anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="ft-item">
              <h4 className="widget-title">Follow Us</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <a href="https://www.facebook.com/Games235/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook" style={{ fontSize: 24, marginRight: 8, color: "#1877f2" }}></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@ubg235" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube" style={{ fontSize: 24, marginRight: 8, color: "#ff0000" }}></i>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/invite/gUeBzA2jaF" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-discord" style={{ fontSize: 24, marginRight: 8 }}></i>
                    <span>Discord</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="ft-item">
              <h4 className="widget-title">Contact Us</h4>
              <p className="mb-2">
                <i className="bi bi-envelope" style={{ fontSize: 16 }}></i>
                <span> chimbayong@gmail.com</span>
              </p>
              <p>
                <i className="bi bi-telephone" style={{ fontSize: 16 }}></i>
                <span> +1.741.655.5555</span>
              </p>
              <p>
                <i className="bi bi-geo-alt" style={{ fontSize: 16 }}></i>
                <span> Chicago, USA</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="ft-item">
              <h4 className="widget-title">Pages</h4>
              <ul className="pages" style={{ paddingLeft: "1rem" }}>
                <li>
                  <a href="/dmca/">DMCA</a>
                </li>
                <li>
                  <a href="/privacy/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
