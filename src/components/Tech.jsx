import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      { technologies.map((technology) => (
        <div className="flex flex-col items-center w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <div className="items-center text-[15px]">
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");