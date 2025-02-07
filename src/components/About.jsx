import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants";
import textVariant from "../utils/motion";
import fadeIn from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 0.75, type: "spring", delay: index * 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        // variants={() => {
        //   fadeIn("right", "spring", 0.5 * index, 0.75);
        // }}
        className="w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly flex-col items-center"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
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
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        // variants={textVariant}
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>About Myself</h2>
      </motion.div>
      <motion.p
        initial={{ x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        //   variants={() => {
        //     fadeIn("", "", 0.1, 2);
        //   }}
        className="mt-4 text-secondary font-[17px] max-w-3xl"
      >
        An adept developer with expertise as a MERN developer. Driven by a love
        for solving intricate problems, I excels in competitive environments,
        always seeking fresh challenges to overcome.
        <br className="block sm:hidden" />
        With a focus on delivering excellence and creating seamless user
        experiences, I am prepared to innovate and deliver exceptional
        solutions.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-10 ">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
