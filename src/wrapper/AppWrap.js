import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">🔐 All rights bytefully reserved</p>
            <p className="p-text">
              🚀 Crafting the Future | © 2023 Michal Stonjek
            </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
