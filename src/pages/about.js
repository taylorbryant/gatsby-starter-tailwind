import React from "react";
import Link from "gatsby-link";
import cautiousDog from "../images/cautious-dog.svg";

const AboutPage = () => (
  <div className="flex items-center">
    <div className="w-2/3 mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose mt-8 pl-4 text-justify">
        The point is... to live one's life in the full complexity of what one
        is, which is something much darker, more contradictory, more of a
        maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
        than is apparent to the civilized being who glides on the surface and
        fits smoothly into the world.
      </p>
      <p className="font-bold mt-4 text-right text-xs uppercase">
        — Thomas Nagel
      </p>
    </div>

    <div className="w-1/3">
      <img src={cautiousDog} />
    </div>
  </div>
);

export default AboutPage;
