import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { myResume } from "../assets";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with background in frontend development and
        experience in backend development as well.I am passionate about creating
        responsive, dynamic, and efficient web applications that provide a
        seamless user experience. I am constantly learning new technologies and
        expanding my skill set to stay up-to-date with the latest trends and
        advancements in the field.I am a quick learner and i collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. My goal is to create innovative and
        practical solutions to meet the unique needs of each project, while
        always maintaining a focus on user experience and functionality. I am
        committed to delivering high-quality work and exceeding client
        expectations. Let's work together to bring your ideas to life.
      </motion.p>
      <span className="flex mt-3 text-[18px] rounded-xl violet-gradient resume-link">
        <a href={myResume} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </span>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
