import "./test.scss";
import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 2 }}
        className="box"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 4 }}
        className="box-1"
      ></motion.div>
    </div>
  );
};

export default Test;
