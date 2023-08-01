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
          <i class="devicon-linkedin-plain"></i>
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
