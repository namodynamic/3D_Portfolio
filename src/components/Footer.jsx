import React from "react";
import { whatsapp } from "../assets";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="flex flex-row space-x-10 justify-center mt-4 ">
        <a
          href="https://www.linkedin.com/in/ekechinnamdi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <i className="devicon-linkedin-plain colored"></i>
        </a>
        <a
          href="https://wa.me/2347065262086?text=Hello,I%20want%20to%20connect%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://twitter.com/namodynamic"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <i className="devicon-twitter-original colored"></i>
        </a>
        <a
          href="https://github.com/namodynamic"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <i className="devicon-github-original"></i>
        </a>
      </div>

      <p className="text-center py-2 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Nnamdi Cyprian Ekechi. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
