import { useFormik } from "formik";
import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "ss",
      email: "",
      number: "",
      message: "",
    },
    onSubmit: async (values) => {},
  });
  return (
    <div className="w-full flex items-center justify-center my-12">
      <div className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
          Contact Us
        </p>
        <form>
          <div className="md:flex flex-col-3 ">
            <div className="md:w-72 md:ml-6  md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 ">
                Name
              </label>
              <br />
              <input
                tabIndex={0}
                arial-label="Please input country name"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
            <div className="md:w-72 md:ml-6  md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 ">
                Email
              </label>
              <br />
              <input
                tabIndex={0}
                arial-label="Please input country name"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="md:w-72 md:ml-6 md:mt-0 mt-4 ">
              <label className="text-base font-semibold leading-none text-gray-800 ">
                Number
              </label>
              <br />
              <input
                tabIndex={0}
                arial-label="Please input country name"
                id="number"
                name="number"
                type="image.png"
                onChange={formik.handleChange}
                value={formik.values.number}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
            <div className="w-full flex flex-col mt-8 md:ml-5">
              <label className="text-base font-semibold leading-none text-gray-800  ">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                className=" h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-500 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
