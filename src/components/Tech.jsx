import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <div className="flex flex-col flex-wrap gap-10">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-6">
      { technologies.map((technology) => (
        <div className="flex flex-col items-center w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <div className="items-center text-[15px]">
            {technology.name}
          </div>
        </div>
      ))}</div>
    </div>
  )
}

export default SectionWrapper(Tech, "");