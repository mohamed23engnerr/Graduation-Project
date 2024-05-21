import React from "react";
import Css from "./Information.module.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.call}>
            <div className={Css.text}>
              <button>
                <CiPhone />
              </button>
              <p>+201281207640</p>
            </div>
            <div className={Css.text}>
              <button>
                <CiMail />
              </button>
              <p>muhammed15talat@gmail.com</p>
            </div>
          </div>
          <div className={Css.icons}>
            <Link to="https://www.facebook.com">
              <FaFacebookF />
            </Link>
            <Link to="https://github.com">
              <FaGithub />
            </Link>
            <Link to="https://www.linkedin.com">
              <FaLinkedinIn  />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
