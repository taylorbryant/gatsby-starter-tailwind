import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <form className="mx-auto md:w-1/2">
        <p className="leading-loose mb-8">
          Here is an example of a form built using Tailwind. Click{" "}
          <a
            href="https://tailwindcss.com/docs/examples/forms"
            className="font-bold no-underline text-gray-600"
          >
            here
          </a>{" "}
          to see more examples.
        </p>

        <label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="first-name"
        >
          First Name
        </label>

        <input
          className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
          id="first-name"
          type="text"
          placeholder="Bill"
        />

        <label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="last-name"
        >
          Last Name
        </label>

        <input
          className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
          id="last-name"
          type="text"
          placeholder="Murray"
        />

        <label
          className="block font-bold mb-2 text-xs uppercase"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
          placeholder="Say something..."
          rows="8"
        />

        <button className="border-b-4 border-gray-700 hover:border-gray-600 bg-gray-600 hover:bg-gray-500 font-bold px-4 py-2 rounded text-sm text-white">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ContactPage;
