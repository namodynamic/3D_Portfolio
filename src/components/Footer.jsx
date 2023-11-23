import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { contact } from "../assets";

const Footer = () => {
  return (
    <footer className='max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7 font-poppins'>
      <hr className='border-tertiary border-t-4' />

      <div className='flex flex-wrap gap-7 items-center justify-between'>
        <p className=" text-slate-500">
        &copy; {new Date().getFullYear()} <strong>Nnamdi Ekechi</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center '>
          
          <img src={contact} alt="contact" className="w-6 h-6 object-contain" />
        
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6  object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
