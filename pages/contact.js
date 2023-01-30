import React, { useState } from "react";
import { Navbar } from "../components";
import Image from "next/image";

export default function contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/emails", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <div className="flex relative h-[100vh] overflow-x-hidden">

      <Image
          src="/../public/img/wave-lg.png"
          width='1000'
          height='1000'
          className='fixed z-0 w-[100vw] h-[100vh]'
          quality={100}
        />

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-24 lg:px-40 z-1 absolute w-full">
        <div className="relative m-auto md:right-6 px-3 md:px-0">
          <div className="font-bold md:text-6xl text-2xl text-white md:pb-12 pb-3">
            <h1>Reach out to me</h1>
          </div>
          <div className="font-bold md:text-4xl text-lg text-white">
            <h1>Whether you're working on a project or curious about my blog, I'd love to hear from you.</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white h-fit "
        >
          <h1 className="text-2xl font-bold">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500  mt-8 "
          >
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500  mt-4"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500  mt-4"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
          />
          {errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500  mt-4"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 transition ease bg-sky-600 hover:bg-teal-600 text-zinc-300 hover:text-white  rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! The email was sent and I will reply shortly.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </div>

      <Navbar progressVisible={false}/>

    </div>
  );
}