const Footer = () => {
  return (
    <footer>
     
        <hr className="border-tertiary border-t-4" />
      <div className="flex flex-row space-x-5 justify-center mt-4 ">
        <a
          href="https://www.linkedin.com/in/ekechinnamdi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <i className="devicon-linkedin-plain"></i>
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
      <p className="text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Nnamdi Cyprian Ekechi. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
