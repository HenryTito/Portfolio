import React from "react";
import SectionWrapper from "../hoc";
import { underNav } from "../constants";

const Icon = ({ name, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 flex items-center justify-center bg-tertiary rounded-xl cursor-pointer transition transform hover:scale-110 hover:bg-[#2a2a2a]"
    >
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </a>
  );
};

const UnderContacts = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {underNav.map((icon, index) => (
        <Icon
          key={`icon-${index}`}
          {...icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(UnderContacts, "");
