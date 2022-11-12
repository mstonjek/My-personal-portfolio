import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"; // ! better import
import ReacTooltip from 'react-tooltip';
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "../Css/Skill.css";



const Skill = () => {

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
      
    });

    client.fetch(skillsQuery).then((data) => {
      setExperience(data);
    });

  }, []);

return (
  <>
  <h2 className="head-text">Skills & Experience</h2>

  <div className="app__skills-container">
    <motion.div className="app__skills-container">

    </motion.div>
  </div>
  
  </>

)
  
};

export default Skill;
