import React from "react";
import Avatar from "../../public/vijay.png";
import { ReactTyped } from "react-typed";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReact,
  FaJava,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Vijay Gavali | Java Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="I am Vijay Gavali, a Java Full Stack Developer specializing in modern web design using React, Tailwind, and more."
        />
        <meta
          name="keywords"
          content="Vijay Gavali, Java Full Stack Developer, Frontend Portfolio, Web Developer"
        />
        <meta name="author" content="Vijay Gavali" />
        <meta
          property="og:image"
          content="https://kalpesh-hire.github.io/Kalpesh-Portfolio/Kalpesh Hire.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vijay Gavali",
      "url": "https://github.com/vijaygavali/vijay-gavali-portfolio/",
      "sameAs": [
        "https://github.com/vijaygavali",
        "https://www.linkedin.com/in/vijay-dipak-gavali-8649aa247/"
      ],
      "jobTitle": "Backend Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      }
    }
  `,
          }}
        />
      </Helmet>

      <div
        id="home"
        className=" scroll-mt-10 max-w-screen-2xl container mx-auto md:mb-60 px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-xl md:text-3xl ">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                strings={["Vijay Gavali", "Java Full Stack Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className="text-red-600 font-bold"
              />
            </div>
            <br />
            <p className="text-sm font-bold md:text-md text-justify">
              I’m Vijay Gavali, a Java Full Stack Developer skilled in HTML,
              CSS, React.js, Core Java, Advanced Java, Coolection Framework,
              Spring Framework, Spring Boot, Hibernet, Rest APIS, Microservices,
              MySQL. I combine these technologies to make dynamic, user-friendly
              websites, APIS and applications that are highly responsive. My
              goal is to turn creative ideas into functional, high-quality web
              solutions.
            </p>
            <br />
            {/* Social media icon */}
            <div className="flex justify-between items-center md:flex-row flex-col space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/vijaygavali_87?igsh=Y3F0YTkwOXNpcjQ1"
                      target="_blank"
                    >
                      <FaInstagram className="text-xl text-red-600 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/vijay-dipak-gavali-8649aa247"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl text-blue-700 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vijaygavali" target="_blank">
                      <FaGithub className="text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaFacebook className="text-xl text-blue-700 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaYoutube className="text-xl text-red-500 md:text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaReact className="text-xl text-sky-600 cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <SiSpringboot className="text-xl text-green-600 cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaJava className="text-xl text-orange-600 cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <SiMysql className="text-xl text-blue-600 cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaGithub className="text-xl text-black dark:text-white cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 mt-8 md:mt20 order-1">
            <img
              src={Avatar}
              className="rounded-full md:w-[450px] md:h-[450px] animation"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
