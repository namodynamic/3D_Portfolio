import { BallCanvas } from "./canvas";
import Marquee from "react-fast-marquee";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      <Marquee>
      {technologies.map((technology) => (
        <div className="w-24 h-24" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} alt="technologies" className="w-16 h-16" />
        </div>
      ))}
     </Marquee>
    </div>
  );
};

export default SectionWrapper(Tech, "");
