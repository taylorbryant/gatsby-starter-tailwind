import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <form className="mx-auto md:w-1/2">
      <p className="leading-loose mb-8">
        Here is an example of a form built using Tailwind. Click{' '}
        <a
          href="https://tailwindcss.com/docs/examples/forms"
          className="font-bold no-underline text-grey-darkest"
        >
          here
        </a>{' '}
        to see more examples.
      </p>

      <label
        className="block font-bold mb-2 text-xs uppercase"
        htmlFor="first-name"
      >
        First Name
      </label>

      <input
        className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
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
        className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
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
        className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
        placeholder="Say something..."
        rows="8"
      />

      <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
        Submit
      </button>
    </form>
  </Layout>
)

export default ContactPage
