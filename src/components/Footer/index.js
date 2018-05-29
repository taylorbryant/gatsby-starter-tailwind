import React from "react";

const Footer = () => (
  <div className="bg-blue">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Created by{" "}
        <a
          href="https://taylorbryant.blog"
          className="font-bold no-underline text-white"
        >
          Taylor Bryant
        </a>
      </p>
      <p>
        <a
          href="https://github.com/taylorbryant/gatsby-starter-tailwind"
          className="font-bold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
