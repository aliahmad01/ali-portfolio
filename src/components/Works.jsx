import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import textVariant from "../utils/motion";
import fadeIn from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import livelink from "../assets/liveLink.png";

const Works = () => {
  return (
    <>
      <motion.div
        variants={() => {
          textVariant("1");
        }}
      >
        <p className={`${styles.sectionSubText}`}>My </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects...</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={() => {
            fadeIn("", "", 0.1, 1);
          }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          An adept developer with expertise as a MERN developer. Driven by a
          love for solving intricate problems, I excels in competitive
          environments, always seeking fresh challenges to overcome.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-7 mt-20">
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={index} index={index} />;
        })}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  source_code_link,
  image,
  tags,
  liveUrl,
}) => {
  return (
    <motion.div
      variants={() => {
        fadeIn("up", "spring", index * 0.5, 0.75);
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[33rem]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-xl bg-white"
          />
          <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
            {/* <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="githublink"
                className="w-2/3 h-2/3 object-contain"
              />
            </div> */}
            <div
              onClick={() => {
                window.open(liveUrl, "_blank");
              }}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={livelink}
                alt="live url"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-scroll">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag, index) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "projects");
