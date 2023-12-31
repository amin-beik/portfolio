import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* <ParticlesContainer /> */}
      {/*text*/}
      {/* <div className="w-full h-full bg-gradint-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transformer Les Idées <br /> En{" "}
            <span className="text-accent">Réalités Numériques</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Ea et ex culpa nulla aliqua tempor nulla nostrud est duis culpa
            amet. Ea et ex culpa nulla aliqua tempor nulla nostrud est duis
            culpa amet.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div> */}
      {/*image*/}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
        lg:bottom-0 lg:right-[8%]
        "
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
