import React from "react";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer_row">
        <div className="">
          <p className="footer_content">
            © 2022 SoftSuite. All rights reserved.
          </p>
        </div>
        <div className="">
          <p className="footer_content">support@softsuite.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
