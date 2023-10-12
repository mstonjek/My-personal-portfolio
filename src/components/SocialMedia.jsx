import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
//import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://instagram.com/m.stonjek">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://linktr.ee/m.stonjek">
          <AiOutlineLink />
        </a>
      </div>

      <div>
        <a href="https://github.com/mstonjek">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
