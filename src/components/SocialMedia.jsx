import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
//import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://instagram.com/your_instagram_username">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://linktr.ee/your_username">
          <AiOutlineLink />
        </a>
      </div>

      <div>
        <a href="https://github.com/your_github_username">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
