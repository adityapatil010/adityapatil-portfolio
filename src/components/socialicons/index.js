import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import CodolioIcon from '../../assets/images/codolio.svg'; 
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.codolio && ( // Use Codolio icon instead of Facebook
          <li>
            <a href={socialprofils.codolio}>
              <img src={CodolioIcon} alt="Codolio" style={{ width: '20px', height: '20px' }} />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
