import React from "react";
import { Link } from "gatsby";

function Tags({ taglist, active }) {
  return (
    <section>
      <p className="text-xl pb-3">Tags:</p>
      <ul className="menu-list">
        <li className={"mr-3 text-xl"}>
          {active === undefined
            ?
            <Link className={"border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"} to={"/blog"}>All</Link>
            : <Link className={"rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"}
                    to={"/blog"}>All</Link>
          }
        </li>
        {
          taglist.map(tag => (
            <li className={"mr-3 text-xl"} key={tag}>
              {tag === active
                ? <Link className={"border-blue-500 rounded  bg-blue-500 text-white py-1 px-3"}
                        to={"/" + tag}> {tag}</Link>
                : <Link className={"rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"}
                        to={"/" + tag}> {tag}</Link>
              }
            </li>
          ))}
      </ul>

    </section>
  );
}

export default Tags;