import React, { useState } from "react";
import { Link } from "gatsby";


function Card({ title, slug, short_description, tags = [] }) {
  return (
    <div className="w-full md:w-2/4 p-5">
      <div className="max-w-sm rounded overflow-hidden">
        <div className="px-6 py-4">
          <Link to={slug}>
            <div className="font-bold text-xl mb-2">{title}</div>
          </Link>
          <p className="text-gray-700 text-base">
            {short_description}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map(
            tag => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <Link to={tag}>{tag}</Link>
              </span>
            )
          )}
        </div>
        <div className="px-6 py-4">
          <Link to={slug}
             className="bg-teal-700 block bg-primary hover:bg-primary-dark py-2 px-2 text-primary-lighter text-white rounded tracking-widest no-underline font-bold text-center uppercase text-lg">
             Read Now
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Card;
