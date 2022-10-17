import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const App = () => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="container">
      <motion.div
        className="box"
        animate={{ scale: rotate ? 1 : 0.5 }}
        transition={{ ease: "easeIn", duration: 1 }}
        onClick={() => setRotate(!rotate)}
      ></motion.div>
    </div>
  );
};

export default App;
