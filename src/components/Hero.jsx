import { styles } from "../style";
import Typewriter from "react-ts-typewriter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen pb-10 mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#496af0]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              I am
              <span className="text-[#4766df] "> Ali Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2 `}>
              Frontend Developer with 1 year+ of experience in the field and
              <br className="block sm:hidden" /> A tech Enthusiast and a fast
              learner to take on the challenges that gives me adrenaline shots.
            </p>
          </div>
          <div className="w-full h-auto flex justify-center text-orange-500 font-bold self-start text-3xl">
            <Typewriter
              text={["<Love to Code/>", "Enthusiast", "Fast learner"]}
              loop
              speed={100}
              cursor={false}
            />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
