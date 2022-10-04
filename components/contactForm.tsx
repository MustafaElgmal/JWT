import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const ContactForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("FirstName is required!"),
      lastName: Yup.string().required("LastName is required!"),
      email: Yup.string().required("Email is required!"),
      phoneNumber: Yup.string().required("Phone is required!"),
      message: Yup.string().required("Message is required!"),
    }),
    onSubmit: async (values) => {
      const res = await axios.post("/api/sendgrid", values);
      if (res.status === 201) {
        alert("Form is submit!");
      }
      formik.resetForm();
    },
  });


  return (
    <div id="contact us" className="w-full flex items-center justify-center mb-5 xs:pt-5">
      <section className="relative bg-white " aria-labelledby="contact-heading">
        <div className="mx-auto max-w-full">
          <div className="relative bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden bg-gradient-to-b from-cyan-800 to-cyan-700 py-10 px-6 sm:px-10 xl:p-12">
                <div
                  className="pointer-events-none absolute inset-0 sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>

                <p className="mt-6 max-w-3xl text-base text-white">

                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>

                  <dd className="flex text-base text-white">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-white"

                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-white"

                      aria-hidden="true"
                    />
                    <span className="ml-3">support@workcation.com</span>
                  </dd>
                </dl>
                <ul role="list" className="mt-8 flex space-x-12">
                  <li>
                    <a
                      className="text-white hover:text-white"
                      href="https://www.facebook.com/WundermanThompson"
                      target="_blanck"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>

                    <a
                      className="text-white hover:text-white"
                      href="https://twitter.com/JWTCairo"
                      target="_blanck"
                    >

                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-gradient-to-b from-cyan-800 to-cyan-700 text-white">
                <h3 className="text-lg font-medium ">
                  Send us a message
                </h3>
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="firstName"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium "
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="lastName"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium "
                      >
                        phoneNumber
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        required
                        type="text"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="phoneNumber"
                        autoComplete="tel"
                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium "
                      >
                        Message
                      </label>
                      <span
                        id="message-max"
                        className="text-sm "
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        required
                        id="message"
                        name="message"
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        rows={4}
                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-black shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                        aria-describedby="message-max"

                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="button"
                      onClick={() => formik.handleSubmit()}
                      className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:bg-cyan-600 focus:ring-offset-2 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
