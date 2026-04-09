import React from "react";
import { IoMdClose } from "react-icons/io";

function FrontEnd({ onclose, modalRef }) {
  return (
    <>
      <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div
          ref={modalRef}
          className="flex flex-col justify-center items-center "
        >
          <button onClick={onclose} className="place-self-end text-3xl">
            <IoMdClose />
          </button>

          <div className="rounded-3xl w-[400px] md:w-[500px] flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col space-y-3 mt-10 items-center">
              <h1 className="text-2xl">Java Full Stack Development</h1>
              <p className="text-sm mx-20 text-center">
                I build end-to-end Java web applications, from RESTful backends
                to responsive, user-friendly interfaces.
              </p>
            </div>
            <div className="m-10">
              <ul className="space-y-3 list-outside list-disc p-2">
                <li className="text-sm">
                  Develop and maintain RESTful APIs using Java and Spring Boot,
                  ensuring secure and scalable backend services.
                </li>
                <li className="text-sm">
                  Integrate Spring Boot backends with React.js frontends for a
                  seamless full stack experience.
                </li>
                <li className="text-sm">
                  Design and manage relational databases using MySQL, including
                  schema design and efficient SQL queries.
                </li>

                <li className="text-sm">
                  Use React Hooks for state management and clean component
                  architecture.
                </li>
                <li className="text-sm">
                  Follow best practices, version control with Git/GitHub, and
                  write clean, maintainable code across the full stack.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontEnd;
